import React from 'react';

export function Persona({ id, num, title, tape, tapeColor, blurb, chips, href, children }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('modal-open', open);
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const titleId = 'persona-modal-title-' + id;

  return (
    <div className="persona-block" data-screen-label={'persona-' + id}>
      <button
        className="persona"
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
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
          <span>Tap to view</span>
          <span className="persona__foot-arrow">→</span>
        </div>
      </button>

      <div
        className={'modal-backdrop' + (open ? ' is-open' : '')}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div
          className="modal modal--persona"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal__close" onClick={() => setOpen(false)} aria-label="Close">×</button>
          <div className="modal__head">
            <span className={'persona__tape persona__tape--' + tapeColor}>{tape}</span>
            <h2 className="modal__title" id={titleId}>{title}</h2>
            <span className="modal__stencil">{num}</span>
          </div>
          <div className="modal--persona__body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
