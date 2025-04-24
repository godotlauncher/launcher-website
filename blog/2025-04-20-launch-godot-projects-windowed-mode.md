---
title: You No Longer Have to Launch Godot Projects in Windowed Mode (Unless You Want To)
slug: launch-godot-projects-windowed-mode
description: Learn how the new Godot Launcher 1.2.0 makes it optional to launch Godot projects in windowed mode, taking full advantage of Godot 4.4’s new window size and position memory.
authors: [mariodebono]
date: 2025-04-20 13:02:54
image: /img/blog/images/godot-launcher-project-windowed-mode-ui-anim.gif
tags:
  - godot
  - godot-launcher
  - godot-workflow
  - godot-project-setup
  - quality-of-life
  - open-source-tools
---

With the release of **Godot 4.4**, the editor now remembers the last window size and position. This small but useful improvement opens the door for a more flexible way to **launch Godot projects**, and the **Godot Launcher 1.2.0** update supports it.

<!-- truncate -->

Previously, users had to always launch projects in **windowed mode** to avoid the Godot Editor opening in fullscreen by default. This was necessary because Godot versions before 4.4 did not remember the window position or size. That behavior changes now.

In Godot 4.4 and newer, the editor respects your last window state. So now, there's **no need to force windowed mode**, unless you want to. And that's exactly what the new **per-project "Open Windowed" option** in **Godot Launcher 1.2.0** enables.

## A Better Way to Launch Godot Projects

The Godot Launcher already provides a fast, convenient way to **launch Godot projects** from a central UI, with per-project configuration, version selection, and VSCode & Git integration. The new addition in version 1.2.0 enhances this further by giving you control over whether to open the Godot Editor in windowed mode.

### Why This Matters

**Before Godot 4.4:**

- The editor always launched in fullscreen unless explicitly told to launch in windowed mode.
- This made it necessary for Godot Launcher to always add `-w` to avoid jarring fullscreen launches.

**With Godot 4.4 and above:**

- The editor **remembers window state**.
- It respects the last used size and screen position, even between restarts.

This change is especially helpful for users with **ultrawide monitors**, who often found the fullscreen launch more disruptive than others. Launching projects in windowed mode became the default behavior in Godot Launcher. However, some users **prefer fullscreen mode**, and now the launcher passes that control back to the user.

### The New Feature in Godot Launcher

In **Godot Launcher 1.2.0**, there is a new setting per project. By default, this setting is **disabled**, meaning projects are launched without the `-w` flag unless you enable it manually:

> **Open Windowed** – If enabled, the launcher will start the editor with the `-w` flag (windowed mode).

If disabled, the launcher won’t pass the `-w` flag, letting the editor handle the window state as remembered from the last session. This gives users more control, especially when working with **Godot 4.4+**.

This feature works:

- From the main **Launcher window**
- From the **Godot Launcher System Tray** menu

No matter where you launch from, your per-project windowed mode setting is respected.

## How to Enable or Disable Windowed Mode

1. Open **Godot Launcher**.
2. In the **Project View**, click the more options button (3 dots) next to your project.
3. From the menu, toggle the **"Open Windowed"** option.

That’s it. The setting is saved per project. You can now control window behavior without touching any command-line flags.

## Visual Indicators: Now with Tooltips

Godot Launcher 1.2.0 adds a new badge to the project list for projects set to launch in **windowed mode**: the **(w)** badge. This helps you instantly spot which projects will use the `-w` flag.

As part of this update, we also improved the visual clarity of the existing badges:

- **(c#)** for projects using .NET
- **(pr)** for pre-release projects

[All badges](https://docs.godotlauncher.org/project-badges/) now include tooltips when you hover over them, making the interface clearer and more informative at a glance. This is part of our ongoing effort to improve usability across the launcher.

## Using Godot 4.4 or Above?

If you're using **Godot 4.4 or newer**, this feature is especially useful. You can:

- Disable "Open Windowed" in Godot Launcher
- Let the editor remember your last layout
- Enjoy a smoother, more personalized experience when working on projects

This removes the friction from launching the editor, especially when switching between monitors, screen sizes, or setups.

## Where to Get It

The best way to download and manage **Godot Editor** versions is through the **Godot Launcher**. It lets you install, switch, and organize multiple Godot versions with ease, no manual setup required.

To take advantage of this new feature, just look for the update notification in the launcher and update to 1.2.0.

If you're not using the launcher yet, this is a great reason to start. Get Godot Launcher from [https://godotlauncher.org/download](/download/).

## Documentation and Guides

Want to know more?

Read the documentation page **[Launch Godot Project in Windowed Mode](https://docs.godotlauncher.org/guides/launch-godot-project-in-windowed-mode/)**.

It explains how the launcher integrates with this change for Godot 4.4+.

## Recap

- Godot 4.4+ now remembers window size and position.
- Godot Launcher 1.2.0 adds an **optional per-project "Open Windowed" setting**.
- This removes the need to always open in a window, giving users more flexibility.
- You can launch projects from either the **Launcher main window** or the **system tray**.
- [Project Badges](https://docs.godotlauncher.org/project-badges/) visual indicators for (c#), (pr), and (w) now include tooltips.
- Download the latest launcher at: [https://godotlauncher.org/download/](/download/)

With these updates, **launching Godot projects** is more intuitive, flexible, and user-friendly than ever.
