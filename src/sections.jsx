import React from 'react';
import { PM_DATA, THEATRE_DATA } from './data.js';
import { SectHead, Chips, Status } from './shared.jsx';

// Pick a random iris photo on page load — sticks for the lifetime of the page.
export const IRIS_PHOTO = `iris/iris${1 + Math.floor(Math.random() * 6)}.jpg`;

export function PMSection({ asPage }) {
  const d = PM_DATA;
  return (
    <>
      <SectHead tape="01 · About" title="The day job." count="PRODUCT MGMT" />
      <div className="about">
        <div className="about__body">
          {d.about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="iris">
          <div className="iris__photo iris__photo--has-img">
            <img src="jay/jayp.jpg" alt="Jay Johnson — PM headshot" />
          </div>
          <div className="iris__cap">
            <span className="iris__cap-name">jay johnson</span>
            <span className="iris__cap-role">PM · SEA</span>
          </div>
        </div>
      </div>

      <div className="sect">
        <SectHead tape="02 · Skills" title="Toolkit." count={`${d.skills.length} TAGGED`} green />
        <Chips items={d.skills} />
      </div>

      <div className="sect">
        <SectHead tape="03 · Trail" title="Recent work." count={`${d.trail.length} STOPS`} />
        <div className="timeline">
          {d.trail.map((t, i) => (
            <div className="tl-row" key={i}>
              <span className="tl-yr">{t.yr}</span>
              <div>
                <p className="tl-body__role">{t.role}</p>
                <p className="tl-body__co">{t.co}</p>
                <p className="tl-body__note">{t.note}</p>
              </div>
              <span className="tl-meta">{t.meta}</span>
            </div>
          ))}
        </div>
      </div>

      <Status label="STATUS · OPEN" text={d.status} />
    </>
  );
}

export function TheatreSection({ asPage }) {
  const d = THEATRE_DATA;
  return (
    <>
      <SectHead tape="01 · Post" title="Currently in the booth." count="ARTSWEST · A1" green />
      <div className="about">
        <div className="about__body">
          {d.about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="iris">
          <div className="iris__photo iris__photo--has-img">
            <img src="jay/jayt.jpg" alt="Jay Johnson — at the desk" />
          </div>
          <div className="iris__cap">
            <span className="iris__cap-name">In office</span>
            <span className="iris__cap-role">Electrics · ARTSWEST</span>
          </div>
        </div>
      </div>

      <div className="sect">
        <SectHead tape="02 · Skills" title="What I do on deck." count={`${d.skills.length} TAGGED`} />
        <Chips items={d.skills} />
      </div>

      <div className="sect">
        <SectHead tape="03 · Credits" title="Recent shows." count={`${d.credits.length} CREDITS`} green />
        <div className="credits">
          {d.credits.map((c, i) => (
            <div className="credit" key={i}>
              <span className="credit__yr">{c.yr}</span>
              <span className="credit__role">{c.role}</span>
              <span className="credit__show">{c.show}</span>
              <span className="credit__house">{c.house}</span>
            </div>
          ))}
        </div>
      </div>

      <Status label="STATUS · BOOKING" text={d.status} />
    </>
  );
}

export function IrisCameo() {
  return (
    <div className="sect" data-screen-label="iris">
      <SectHead tape="04 · Crew" title="The whole operation." count="STAFF · 1" />
      <div className="about">
        <div className="about__body">
          <p>
            When I'm not shipping code or mixing a show, I report to a cat named <strong style={{color:'var(--sd-paper)'}}>Iris</strong> who actually runs this whole operation.
          </p>
          <p>
            She acts as my primary <em>Production Manager</em> and full-time floor supervisor. Title revoked at her discretion.
          </p>
        </div>
        <div className="iris">
          <div className="iris__photo iris__photo--has-img">
            <img src={IRIS_PHOTO} alt="Iris the cat" />
          </div>
          <div className="iris__cap">
            <span className="iris__cap-name">iris</span>
            <span className="iris__cap-role">Production Manager and Treat Liaison</span>
          </div>
        </div>
      </div>
    </div>
  );
}
