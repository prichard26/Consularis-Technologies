# Consularis Technologies

Website for Consularis Technologies – strategic digitalisation, ERP consulting, and structured workflows for measurable business impact.

## Stack

- **Vite** – fast dev server and production build
- **Vanilla HTML/CSS/JS** – no framework, modular and maintainable
- **GitHub Pages** – deploy from `main` via GitHub Actions

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`. Preview with:

```bash
npm run preview
```

## Contact form (email)

The **Connect** page uses a form that posts to [Formspree](https://formspree.io). To receive emails:

1. Sign up at [formspree.io](https://formspree.io) and create a form.
2. In `pages/connect.html`, replace `YOUR_FORM_ID` in the form `action` with your Formspree form ID:

   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

Alternatively, you can point the form to another endpoint (e.g. your own API or Netlify Forms).

## Hosting on GitHub with custom domain

1. **GitHub Pages**
   - Push this repo to GitHub.
   - Go to **Settings → Pages**.
   - Under "Build and deployment", set **Source** to **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` builds and deploys the `dist/` output. If you see 404s for `main.css`, `main.js`, or `hero.webp`, the site is likely being served from a branch instead of the Actions artifact—switch the Pages source to **GitHub Actions**.

2. **Custom domain**
   - In **Settings → Pages**, set your custom domain (e.g. `www.consularis.com`).
   - In your DNS provider, add a CNAME record pointing to `YOUR_USERNAME.github.io` (or the A records GitHub shows).
   - Update `public/CNAME` with your domain only (one line). The deploy workflow copies `public/` into `dist/`.

After the first push, the Actions workflow will build and publish the site. Subsequent pushes to `main` will update the site automatically.

## Project structure

```
├── index.html              # Home (landing)
├── pages/
│   ├── connect.html        # Contact / Connect form
│   ├── imprint.html        # Imprint
│   └── privacy.html        # Privacy policy
├── src/
│   ├── styles/
│   │   └── main.css        # Global styles (tokens, layout, components)
│   └── scripts/
│       └── main.js         # Header nav, footer year, scroll state
├── public/                 # Static assets (hero image, CNAME for custom domain)
├── .github/workflows/
│   └── deploy.yml         # Build and deploy to GitHub Pages
└── vite.config.js
```

## Legal placeholders

- **Imprint** (`pages/imprint.html`): replace bracketed placeholders with your company name, address, and responsible person.
- **Privacy** (`pages/privacy.html`): add the last-update date and adjust wording to match your jurisdiction (e.g. GDPR).

## License

Proprietary – Consularis Technologies.
