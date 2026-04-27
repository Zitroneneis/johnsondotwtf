# johnson.wtf

Personal homepage for Jay Johnson — hosted at [johnson.wtf](https://johnson.wtf).

Two sides, one operator: Senior Technical Product Manager by day, Head Audio Engineer / A1 / sound designer by night.

## Pages

- `index.html` — combined view: pick a persona (PM or Theatre Tech), tap to expand inline, or jump to a dedicated page.
- `pm.html` — Product Manager deep dive.
- `theatre.html` — Theatre Tech deep dive.
- `404.html` — off-the-deck fallback that redirects home.

A "Get in touch" button lives in the header and hero of every page and opens a contact modal with email, phone, LinkedIn, and location.

## Stack

Static HTML + CSS, with React 18 + Babel Standalone loaded from a CDN to render the shared components (header, footer, hero, persona cards, contact modal).

- `css/` — Spike Deck design system tokens, typography, textures, components, and site overrides.
- `js/` — Shared JSX components (`shared.jsx`), section blocks (`sections.jsx`), the persona switcher (`persona.jsx`), and the page data (`data.jsx`).
- `assets/` — Logo / wordmark / placeholder SVGs.
- `uploads/` — Headshot and reference uploads.
- `iris/`, `jay/` — Photo galleries for Iris (the cat) and Jay.

No build step required — open the HTML files directly.

## Contact

- Email: jared@johnson.wtf
- LinkedIn: [in/thejaredjohnson](https://www.linkedin.com/in/thejaredjohnson)
- Location: Seattle, WA
