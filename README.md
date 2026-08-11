# Godot Launcher Website

This repository contains the source code for the official **Godot Launcher website**, built using [Docusaurus](https://docusaurus.io/), a modern static site generator.

## 📖 Contributing

Contributions are always welcome! The Godot Launcher website is open source, just like the [Godot Luncher](https://github.com/godotlauncher/launcher) Project.

Feel free to fix typos, improve, or add new content. To contribute:

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Make sure to follow the existing structure and style for consistency.

> Keep in mind that this website is the public face of the Godot Launcher project. For that reason, major edits or structural changes should be approached thoughtfully. While you don't need to submit a formal proposal, it's highly recommended to open an issue in this repo or start a discussion in the Godot Launcher Discord, where community conversations about the website and project happen regularly.

## 🚀 Development

This website is built using **Node.js 24 LTS** and **npm**. To run it locally:

### 1. Fork and clone the repository

First, fork the repository to your GitHub account. Then, clone your fork:

```bash
git clone https://github.com/<your-username>/launcher-website.git
cd launcher-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run start
```

This will launch a local dev server at [http://localhost:3000](http://localhost:3000).

### 4. Test Build for production

It is important to test out your production build, generate the static site and run it locally to test things out.

```bash
npm run build
```

To preview the production build:

```bash
npm run serve
```

## 🧩 Project Structure

- `/blog` - Blog articles
- `/src` - Website source (components, pages, etc.)
- `/src/pages` - Website pages
- `/static` - Static assets (images, icons, etc.)
- `/static/img/blog/images/<version>` - Immutable media used by release posts
- `docusaurus.config.ts` - Site configuration

## Release Post Media

Published release posts must not reference the synchronized current media
under `/img/screenshots/` or `/img/features/`. Those directories follow the
latest launcher UI and may replace or remove files during media sync.

Before publishing a release post, copy each referenced image into
`static/img/blog/images/<version>/` and use that immutable path in the post.
Keep current homepage and product media in the synchronized directories.

The workspace media sync selects current screenshots from literal
`/img/screenshots/<file>` references in Website source. It copies only those
canonical files into `static/img/screenshots/` and removes unreferenced files
from that mutable directory. Immutable release-post media is outside the sync.

---

Feel free to reach out or open an issue if you spot something broken or unclear.
