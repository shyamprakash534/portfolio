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

The hero video is stored at `public/hero-video.mp4`. The downloadable resume is generated from `app/Syam_Prakash_AI_ML_Resume.pdf/route.js`.
