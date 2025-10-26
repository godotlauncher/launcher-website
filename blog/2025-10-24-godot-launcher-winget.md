---
title: "Godot Launcher lands on winget – easier installs for Windows"
description: "Godot Launcher is now available on winget, streamlining installs and upgrades for Windows while we evaluate bringing it to the Microsoft Store."
date: 2025-10-24 20:00:00
authors: [mariodebono]
tags: [release, godot-launcher]
slug: godot-launcher-winget
---

# Godot Launcher on winget

Godot Launcher is now published on winget starting with v1.4.0, and the fresh manifest for v1.5.0 keeps Windows installs in lockstep with every release. 🎉 This makes Godot Launcher more accessible to Windows developers who live inside the command line.

<!-- truncate -->

## Why winget?

Windows users have been asking for a native package manager experience, and winget is the quickest path to give it to you. We now ship official manifests pointing directly at the signed installers from our GitHub releases. The manifest also includes metadata like tags, release notes, and SHA-256 verification so you know exactly what you’re pulling down.

## Install or upgrade in seconds

Getting the launcher is now as simple as running:

```powershell
winget install "Godot Launcher"
```

Already running an earlier build, with manual Update?

```powershell
winget upgrade "Godot Launcher"
```

Both commands fetch the latest installer (`Godot_Launcher-x.x.x-win.exe`) and verify it against the manifest’s checksum to keep your setup secure.

## What’s next

We’re keeping the winget manifest updated for every Windows release moving forward, and we’re also evaluating what it would take to bring Godot Launcher to the Microsoft Store for even broader reach. If you have feedback on the winget experience (or ideas for how we can make Windows support even better) drop us a note on [GitHub](https://github.com/godotlauncher/launcher/issues) or [Discord](https://discord.gg/Ju9jkFJGvz).

Happy launching!
