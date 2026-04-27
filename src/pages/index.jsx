import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header, Footer, Hero, ContactModal, SectHead } from '../shared.jsx';
import { PMSection, TheatreSection, IrisCameo } from '../sections.jsx';
import { Persona } from '../persona.jsx';
import { PM_DATA, THEATRE_DATA } from '../data.js';

const JAY_PHOTOS = ['jay/jay1.jpg', 'jay/jay3.jpg', 'jay/jay2.jpg', 'jay/jay4.jpg', 'jay/jayp.jpg', 'jay/jayt.jpg'];
const HERO_PHOTO = JAY_PHOTOS[Math.floor(Math.random() * JAY_PHOTOS.length)];

function CombinedHero() {
  const onContact = () => window.dispatchEvent(new CustomEvent('open-contact'));
  return (
    <Hero
      stencil="◆ NOW STANDING BY · SEATTLE, WA"
      roleTapes={[
        { label: 'Product Mgr.', color: 'pink' },
        { label: 'Theatre Tech', color: 'green' },
      ]}
      lede="two sides, one operator. by day: senior technical pm with 15+ yrs shipping product. by night: lurking about in show blacks - a1, electrics, and hitting things with a wrench."
      primaryCta={{ label: 'Get in touch', onClick: onContact }}
      photo={{ src: HERO_PHOTO, alt: 'Jay Johnson', name: 'jay johnson', role: 'Operator · SEA' }}
    />
  );
}

function App() {
  return (
    <>
      <Header subtitle="profile" />

      <main>
        <CombinedHero/>

        <section className="site-wrap" data-screen-label="01-personas">
          <SectHead
            tape="◆ Pick your player"
            title="Two sides of the same operator."
            count="2 PERSONAS"
          />
          <p style={{
            fontFamily: 'var(--sd-font-hand)',
            fontSize: 22,
            color: 'var(--sd-paper)',
            opacity: .85,
            maxWidth: 720,
            margin: '0 0 24px',
            lineHeight: 1.25,
          }}>
            tap a card to peek inside.
          </p>

          <div className="persona-grid">
            <Persona
              id="pm"
              num="01 / 02"
              title="Product Manager."
              tape="Day Job"
              tapeColor="pink"
              blurb="senior technical pm. 0-to-1, scaling, monetization. fluent in engineer."
              chips={PM_DATA.skills}
              href="pm.html"
            >
              <PMSection asPage={false} />
            </Persona>

            <Persona
              id="theatre"
              num="02 / 02"
              title="Theatre Tech."
              tape="On Deck"
              tapeColor="green"
              blurb="head audio engineer · artswest. sound design, a1, stagehand. handy with a wrench."
              chips={THEATRE_DATA.skills}
              href="theatre.html"
            >
              <TheatreSection asPage={false} />
            </Persona>
          </div>
        </section>

        <section className="site-wrap">
          <IrisCameo/>
        </section>
      </main>

      <Footer/>
      <ContactModal/>
    </>
  );
}

createRoot(document.getElementById('app')).render(<App/>);
