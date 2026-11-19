# Syam Prakash Portfolio

Recruiter-focused portfolio built with Next.js and exported as a static site.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static export is generated in `out/`.

## Deployment

- **Render:** build command `npm install && npm run build`; publish directory `out`.
- **Vercel:** connected to the `main` branch; pushes trigger a deployment.
- **GitHub Pages:** the GitHub Actions workflow builds with the `/portfolio` base path.

The hero video is stored at `public/hero-video.mp4`. The downloadable resume is served from `public/Syam_Prakash_Resume.pdf`.

## Recruiter-first refresh (November 2026)

- Master's and B.Sc. education are presented as accessible HTML, not CSS-generated text.
- Three flagship projects are marked as featured; implementation notes appear in keyboard-accessible case study dialogs.
- Project illustrations are explicitly labeled as illustrative (not measured performance results).
- Background hero video plays on mobile and desktop when reduced-motion and data-saver preferences permit; the gradient hero remains usable without it.
- Every visible resume action is labeled `Resume` and links to `/Syam_Prakash_Resume.pdf`. Replace the underlying PDF only when a new resume is approved.
- Responsive header now exposes direct project, education, contact, and resume links on larger screens.

### Validation checklist

- Run `npm ci && npm run build`; confirm static `out/` output.
- Test desktop and mobile at 375px, 768px and 1440px, including project filters, the menu, dialog keyboard focus, and links.
- Run Lighthouse on the deployed site; no performance score is claimed until measured.
- Check the PDF download against the current authorized resume and manually verify external project demos.
