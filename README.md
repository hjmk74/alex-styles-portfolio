# Alex Styles — Creative Portfolio

A responsive portfolio website built with React and Vite, featuring an editorial layout, selected projects, and interactive details.

## Features

- Responsive design for desktop, tablet, and mobile
- Editorial hero section and selected-work gallery
- Project filters by category
- Interactive project detail modal
- About and contact sections
- Mobile navigation
- Hover transitions and subtle motion
- Automated deployment to GitHub Pages

## Tech Stack

- React 18
- JavaScript
- Vite
- CSS3
- Lucide React

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local address displayed in the terminal.

## Production Build

```bash
npm run build
npm run preview
```

The production files are generated in the `dist` directory.

## Deployment

The project is configured to deploy to GitHub Pages using GitHub Actions.

1. Open the repository's **Settings**.
2. Select **Pages**.
3. Set the deployment source to **GitHub Actions**.
4. Push changes to the `main` branch.

The workflow in `.github/workflows/deploy.yml` builds and deploys the website.

## Project Structure

```text
alex-styles-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

- Edit project titles, descriptions, and images in `src/main.jsx`.
- Update colors, typography, and layout in `src/styles.css`.
- Replace the sample email address and social links with the correct details.

## Credits

Project images are provided by Unsplash. Google Fonts are loaded remotely.
