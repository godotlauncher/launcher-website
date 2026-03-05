---
title: 🚀 Godot Launcher 1.9.0 - Choose Your Project Folder
description: Create new projects anywhere with the new Overwrite Project Path toggle.
slug: /godot-launcher-1-9-0-choose-your-project-folder
date: 2026-03-05
image: /img/screenshots/screen_projects_new_project_overwrite_path_dark.webp
authors:
  - mariodebono
tags:
  - godot
  - godot-launcher
  - godot-project-setup
  - quality-of-life
  - release
---

Godot Launcher 1.9.0 adds a small switch that makes project creation fit real-world folder layouts: **Overwrite Project Path**. Turn it on when creating a new project and choose the parent folder you actually want, whether that is a monorepo, an external SSD, or a dedicated workspace for a client. Your default Projects Location stays the same.

<!-- truncate -->

**Highlights**
- Choose a custom parent folder for a new project, without changing your global default.
- Browse for a folder (or type a path) and see the final path before you create.
- Safer creation: the launcher refuses non-empty target folders to avoid accidental overwrites.

## Pick where new projects live

By default, the launcher creates new projects inside your configured Projects Location. In 1.9.0 you can override that for one project.

Enable **Overwrite Project Path**, pick a parent folder, and the launcher creates a clean `{parent}/{project-name}` folder for you. The input shows the parent folder and the UI appends your project name, so you can confirm the final path before you click Create.

![New Project view with Overwrite Project Path enabled](/img/screenshots/screen_projects_new_project_overwrite_path_dark.webp)

## How overwrite path stays safe

The name sounds scary, but it does not overwrite your files. If the target project folder already exists, the launcher only continues when it is an **empty folder**. If it already contains files, or if the path points to a file, creation stops with a clear message.

If you meant to bring an existing project into the launcher, use the Add Project flow instead.

## How to use it (quick steps)

1. Go to `Projects` and click **New Project**.
1. Enter your project name and pick an installed Godot version.
1. Enable **Overwrite Project Path**.
1. Type a folder path or click the folder button to browse.
1. Click **Create Project**.

Example parent folders:
- Windows: `D:\Godot\Projects`
- macOS: `/Users/you/Godot/Projects`
- Linux: `/home/you/Godot/Projects`

## Tips for common workflows

- Monorepo: set the overwrite path to your repo folder so each project lands in its own `{repo}/{project-name}` directory.
- External drive: point projects at your SSD so large assets stay off your system disk.
- Quick reset: use **Use default path** to snap back to your normal Projects Location.

## Update to 1.9.0

Update inside the app or grab the latest installer. Try it with your next project and tell me if it matches how you organise your folders.

## Related resources

- [Download Godot Launcher](/download/)
- [Report feedback or issues](https://github.com/godotlauncher/launcher/issues/new/choose)
- [Join the community discussions](/community/)
- [Visit the documentation pages](https://docs.godotlauncher.org)
