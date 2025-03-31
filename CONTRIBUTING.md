# Contributing to the Godot Launcher Website

Thank you for your interest in contributing to the **Godot Launcher Website**, hosted at [github.com/godotlauncher/launcher-website](https://github.com/godotlauncher/launcher-website)!

This repository powers the [official Godot Launcher website](https://godotlauncher.org), which serves as the main landing page, community hub, and contributor portal. We welcome help with content updates, bug fixes, design tweaks, and accessibility improvements.

If you're looking to contribute to the Godot Launcher app or its documentation, check out these repos:

- **Launcher app:** [github.com/godotlauncher/launcher](https://github.com/godotlauncher/launcher)
- **Documentation site:** [github.com/godotlauncher/launcher-docs](https://github.com/godotlauncher/launcher-docs)

---

## Table of Contents

- [How the Website is Structured](#how-the-website-is-structured)
- [Reporting Issues](#reporting-issues)
- [Proposing Features or Content](#proposing-features-or-content)
- [Contributing Code](#contributing-code)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Styling and Content Standards](#styling-and-content-standards)
- [Quickstart Guide](#quickstart-guide)
- [Need Help?](#need-help)

---

## How the Website is Structured

The website is a static frontend project. Depending on the tech stack in use (e.g., Astro, Next.js, or plain HTML), the structure may vary slightly. Generally:

- **Content pages** live in `src/pages/` directory.
- **Blogs** live in `/blogs` directory along with the tags and authors list.
- **Styles** are defined in a `styles/` or `assets/` folder.
- **Images and static files** go in the `public/` folder.
- **Components** (if applicable) live in a `components/` directory.

Please follow the existing structure and conventions when contributing.

---

## Reporting Issues

Found a typo, broken link, or layout issue? Let us know!

- Check the [open issues](https://github.com/godotlauncher/launcher-website/issues) and [closed issues](https://github.com/godotlauncher/launcher-website/issues?q=is%3Aissue+state%3Aclosed) first.
- Submit a new issue [here](https://github.com/godotlauncher/launcher-website/issues/new?template=bug_report.md).
- Be as specific as possible, and include screenshots or browser details when relevant.

---

## Proposing Features or Content

Have an idea to improve the website, add a new section, or enhance the user experience?

- Search existing issues to avoid duplicates.
- Submit your proposal [here](https://github.com/godotlauncher/launcher-website/issues/new?template=feature_request.md).
- For larger or visual changes, open a discussion or share mockups in [Discord](https://discord.gg/Ju9jkFJGvz).

---

## Contributing Code

We welcome frontend contributions including:

- Bug fixes and layout improvements
- Content or UI updates
- Accessibility and performance improvements

Before submitting a pull request:

- Review the existing structure and style
- Keep your PR focused on a single improvement
- Test your changes locally

---

## Pull Request Guidelines

### Keep PRs Focused

- Tackle one issue or feature per PR.
- Link your PR to any related issue using `Fixes #issue`.

### Commit Message Style

- Use clear, imperative commit messages.
- Keep the first line under 72 characters.
- Add more context in the body if necessary.

**Example:**

```
Fix broken external link in footer

The Discord link was outdated. Updated to the current invite URL.
```

---

## Styling and Content Standards

- Use consistent styling with the existing site.
- Prefer clarity and accessibility over visual complexity.
- Write in American English.
- Keep content concise and user-friendly.

---

## Quickstart Guide

1. **Fork** this repo and clone it.
2. Install dependencies (`npm install`, `pnpm install`, or `yarn install` depending on project).
3. Start the local server: `npm run dev` or `npm run start`.
4. Make your changes.
5. Open a pull request when ready!

---

## Need Help?

If you’re not sure where to start or need guidance, feel free to:

- Ask a question in [Discord](https://discord.gg/Ju9jkFJGvz)
- Open a [discussion thread](https://github.com/godotlauncher/launcher-website/discussions)
- Tag `@mariodebono` or project maintainers in your issue or PR

---

## Thank You!

Every contribution makes the Godot Launcher community stronger. Whether you're fixing a link, suggesting new content, or building a better UI—**thank you for being part of it!**
