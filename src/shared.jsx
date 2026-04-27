import React from 'react';
import { SITE } from './data.js';

export function Header({ subtitle }) {
  const onContact = () => window.dispatchEvent(new CustomEvent('open-contact'));
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="index.html" className="site-logo" aria-label="Jay Johnson — home">
          <span className="site-logo__mark" aria-hidden="true"></span>
          <span className="site-logo__text">JAY JOHNSON</span>
          {subtitle && <span className="site-logo__sub">// {subtitle}</span>}
        </a>
        <div className="site-header__right">
          <span className="site-header__loc">
            <span className="site-header__loc-dot" aria-hidden="true"></span>
            STANDING BY · SEA
          </span>
          <button className="contact-btn" onClick={onContact} type="button">
            Get in touch <span className="contact-btn__arrow">→</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span>◆ STAGE FLOOR · SPIKE DECK · REV 01</span>
        <span>v1.0 · handle with headset</span>
        <span>last updated · {SITE.lastUpdated}</span>
      </div>
    </footer>
  );
}

export function ContactModal() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener('open-contact', onOpen);
    return () => window.removeEventListener('open-contact', onOpen);
  }, []);

  React.useEffect(() => {
    document.body.classList.toggle('modal-open', open);
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div
      className={'modal-backdrop' + (open ? ' is-open' : '')}
      onClick={() => setOpen(false)}
      aria-hidden={!open}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={() => setOpen(false)} aria-label="Close">×</button>
        <div className="modal__head">
          <h2 className="modal__title" id="contact-title">Standing by.</h2>
          <span className="modal__stencil">DIRECT · NO AGENCY</span>
        </div>

        <div className="modal__row">
          <span className="modal__row-lbl">Name</span>
          <span className="modal__row-val">{SITE.name}</span>
        </div>
        <div className="modal__row">
          <span className="modal__row-lbl">Email</span>
          <span className="modal__row-val">
            <a href={'mailto:' + SITE.email}>{SITE.email}</a>
          </span>
        </div>
        <div className="modal__row">
          <span className="modal__row-lbl">Phone</span>
          <span className="modal__row-val">
            <a href={'tel:' + SITE.phone.replace(/\s/g, '')}>{SITE.phoneDot}</a>
          </span>
        </div>
        <div className="modal__row">
          <span className="modal__row-lbl">LinkedIn</span>
          <span className="modal__row-val">
            <a href={SITE.linkedin} target="_blank" rel="noopener">{SITE.linkedinShort}</a>
          </span>
        </div>
        <div className="modal__row">
          <span className="modal__row-lbl">Based</span>
          <span className="modal__row-val">{SITE.location}</span>
        </div>

        <p className="modal__scrawl">break a leg — call me first.</p>
      </div>
    </div>
  );
}

export function Hero({ stencil, roleTapes, lede, primaryCta, secondaryCta }) {
  return (
    <section className="hero">
      <div className="site-wrap">
        {stencil && (
          <div className="hero__stencil">
            <span className="dot" aria-hidden="true"></span>
            {stencil}
          </div>
        )}
        <div className="hero__nameplate">
          <h1 className="hero__name">jay johnson</h1>
        </div>
        {roleTapes && roleTapes.length > 0 && (
          <div className="hero__roles">
            {roleTapes.map((t, i) => (
              <React.Fragment key={i}>
                <span className={'hero__role-tape' + (t.color === 'green' ? ' hero__role-tape--green' : '')}>
                  {t.label}
                </span>
                {i < roleTapes.length - 1 && <span className="hero__role-amp">+</span>}
              </React.Fragment>
            ))}
          </div>
        )}
        {lede && <p className="hero__lede">{lede}</p>}
        <div className="hero__cta-row">
          {primaryCta && (
            <button className="contact-btn" onClick={primaryCta.onClick} type="button">
              {primaryCta.label} <span className="contact-btn__arrow">→</span>
            </button>
          )}
          {secondaryCta && (
            <a className="contact-btn" href={secondaryCta.href} target={secondaryCta.target}>
              {secondaryCta.label} <span className="contact-btn__arrow">↗</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export function SectHead({ tape, title, count, green }) {
  return (
    <div className="sect-head">
      <span className={'sect-head__tape' + (green ? ' sect-head__tape--green' : '')}>{tape}</span>
      <h2 className="sect-head__title">{title}</h2>
      {count && <span className="sect-head__count">{count}</span>}
    </div>
  );
}

export function Status({ label, text }) {
  return (
    <div className="status">
      <span className="status__lbl">
        <span className="status__lbl-dot" aria-hidden="true"></span>
        {label}
      </span>
      <span className="status__txt">{text}</span>
    </div>
  );
}

export function Chips({ items }) {
  return (
    <div className="chip-cluster">
      {items.map((c, i) => <span className="persona__chip" key={i}>{c}</span>)}
    </div>
  );
}
