import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header, Footer, Hero, ContactModal } from '../shared.jsx';
import { TheatreSection } from '../sections.jsx';
import { THEATRE_DATA } from '../data.js';

function TheatreHero() {
  const onContact = () => window.dispatchEvent(new CustomEvent('open-contact'));
  return (
    <Hero
      stencil={THEATRE_DATA.stencil}
      roleTapes={THEATRE_DATA.roleTapes}
      lede={THEATRE_DATA.lede}
      primaryCta={{ label: 'Book me', onClick: onContact }}
    />
  );
}

function App() {
  return (
    <>
      <Header subtitle="theatre tech" />
      <main>
        <TheatreHero/>
        <section className="site-wrap" data-screen-label="theatre-content">
          <TheatreSection asPage={true} />
        </section>
      </main>
      <Footer/>
      <ContactModal/>
    </>
  );
}

createRoot(document.getElementById('app')).render(<App/>);
