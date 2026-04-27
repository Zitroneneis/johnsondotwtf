// Persona card with expand/collapse for combined page.

function Persona({ id, num, title, tape, tapeColor, blurb, chips, href, children }) {
  const [open, setOpen] = React.useState(false);
  const expandRef = React.useRef(null);

  const toggle = () => setOpen(o => !o);

  return (
    <div className="persona-block" data-screen-label={'persona-' + id}>
      <button
        className="persona"
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={'persona-expand-' + id}
      >
        <div className="persona__head">
          <span className={'persona__tape persona__tape--' + tapeColor}>{tape}</span>
          <span className="persona__num">{num}</span>
        </div>
        <h3 className="persona__title">{title}</h3>
        <p className="persona__blurb">{blurb}</p>
        <div className="persona__meta">
          {chips.slice(0, 5).map((c, i) => <span className="persona__chip" key={i}>{c}</span>)}
          {chips.length > 5 && <span className="persona__chip">+ {chips.length - 5} more</span>}
        </div>
        <div className="persona__foot">
          <span>{open ? 'Collapse' : 'Tap to expand'}</span>
          <span className="persona__foot-arrow">→</span>
        </div>
      </button>

      <div
        id={'persona-expand-' + id}
        className={'persona-expand' + (open ? ' persona-expand--open' : '')}
        ref={expandRef}
      >
        <div className="persona-expand__inner">
          {children}
          <div className="persona-expand__foot">
            <button className="persona-expand__close" onClick={() => setOpen(false)} type="button">
              ↑ Collapse
            </button>
            <a className="contact-btn" href={href}>
              View full page <span className="contact-btn__arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
window.Persona = Persona;
