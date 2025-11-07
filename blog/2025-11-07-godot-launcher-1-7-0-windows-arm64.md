---
title: 🚀 Godot Launcher 1.7.0 - Windows ARM64 Ready
slug: godot-launcher-1-7-0-windows-arm64
description: Godot Launcher 1.7.0 ships native Windows ARM64 builds and fixes a project removal bug so your godot development flow stays reliable.
authors: [mariodebono]
date: 2025-11-07 19:00:00
image: /img/blog/images/1.7.0/Godot_Launcher_1_7_0-opengraph.png
tags:
  - godot
  - godot-launcher
  - release
---

Godot Launcher 1.7.0 lands today as a focused patch release. It brings native Windows ARM64 packages, a quick way to refresh cached editor downloads, and a sturdier migration system that keeps configs tidy whenever we ship under-the-hood changes. No shiny UI shifts, just the boring reliability work that keeps launches smooth.

<!-- truncate -->

![Godot Launcher 1.7.0 hero image showing download options](/img/blog/images/1.7.0/Godot_Launcher_1-7-0_refresh_cache-UI.webp)

## Native Windows ARM64 downloads

Windows ARM64 users no longer have to run the x86_64 build or guess which editor zip they need. The launcher now offers a dedicated Windows ARM64 installer, and the website detects when you arrive from a Windows arm 64 device so the main download button points to the right build. Prefer to grab something else? Every page now surfaces direct links for all OS and architectures, so you can switch to Linux, macOS, or classic Windows x64 in one click.

Most importantly, Godot Launcher will download the right Godot editor for your OS and architecture automatically. If you pick the ARM64 installer, the editor sync flow respects that choice and pulls ARM64 editor builds where available, keeping storage lean and launch times fast.

## Refresh cache with one click

Need to clear out old editor downloads or force the latest builds straight from the official Godot Engine release repos? Head to `Settings → Installs` and use the new **Refresh cache** button. It wipes previously cached releases and repopulates them so you always see the most up-to-date options for every OS and architecture, which was essential for rolling out the new Windows arm 64 packages.

## Safer migrations for future updates

Behind the scenes, 1.7.0 introduces an internal migration module that runs whenever the launcher needs to adjust saved configs, caches, or other data between versions. Its first job was rebuilding the editor cache for ARM64, but it also means future migrations, whether they touch settings, download paths, or tooling flags, happen quietly without you lifting a finger.

## Fix: removing missing projects works again

Some users saw phantom projects that refused to leave the list after the underlying folder moved or disappeared. The UI correctly marked those entries as invalid, but a second validation pass ran right after the removal request and mistakenly kept the project around. We refactored the concurrency logic so the delete action finishes before any follow-up checks run, meaning the overflow menu now does exactly what it promises.

## Small patch, same quick install

This update is intentionally light: no flashy feature toggles, just better platform coverage, easier maintenance tools, and a cleaner project grid. Grab the latest installer or update inside the app and you’ll be on 1.7.0 within a minute. If you rely on the launcher for every godot download, this patch keeps launches predictable while we line up bigger improvements for the next release.

## Related resources

- [Download Godot Launcher](/download/)
- [Report feedback or issues](https://github.com/godotlauncher/launcher/issues/new/choose)
- [Join the community discussions](/community/)
- [Visit the documentation pages](https://docs.godotlauncher.org)
