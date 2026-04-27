import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header, Footer, Hero, ContactModal } from '../shared.jsx';
import { PMSection } from '../sections.jsx';
import { PM_DATA, SITE } from '../data.js';

function PMHero() {
  const onContact = () => window.dispatchEvent(new CustomEvent('open-contact'));
  return (
    <Hero
      stencil={PM_DATA.stencil}
      roleTapes={PM_DATA.roleTapes}
      lede={PM_DATA.lede}
      primaryCta={{ label: 'Get in touch', onClick: onContact }}
      secondaryCta={{ label: 'LinkedIn', href: SITE.linkedin, target: '_blank' }}
    />
  );
}

function App() {
  return (
    <>
      <Header subtitle="product manager" />
      <main>
        <PMHero/>
        <section className="site-wrap" data-screen-label="pm-content">
          <PMSection asPage={true} />
        </section>
      </main>
      <Footer/>
      <ContactModal/>
    </>
  );
}

createRoot(document.getElementById('app')).render(<App/>);
