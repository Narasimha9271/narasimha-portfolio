# Narasimha Palla — Portfolio

Personal portfolio focused on Java/backend and SDE opportunities. Includes professional experience, selected projects, technical skills, education, and the current downloadable resume.

[Live portfolio](https://narasimha-portfolio.vercel.app/)

## Development

```sh
npm ci
npm start
```

## Production build

```sh
npm run build
```

This React application uses Create React App. Production output is written to `build/`.

## Content

- Professional experience: `src/screens/Experience/Experience.jsx`
- Selected projects: `src/assets/data/Projects.json`
- Skills: `src/screens/Skills/Skills.jsx`
- Education: `src/assets/data/Education.json`
- Contact links: `src/assets/data/PersonalUrls.json`
- Resume download: `src/assets/document/Resume.pdf`
- Shared responsive styles: `src/index.css`

Project workflow diagrams are illustrative summaries, not application screenshots. Professional work and personal projects are described separately.

## Deployment

The public site is hosted on Vercel. For a Vercel project connected to this GitHub repository, a push to its configured production branch triggers deployment. A local commit alone does not publish changes. Use the Create React App preset, `npm run build`, and output directory `build`.

The existing `npm run deploy` script targets GitHub Pages through `gh-pages`; it is not the Vercel deployment workflow.
