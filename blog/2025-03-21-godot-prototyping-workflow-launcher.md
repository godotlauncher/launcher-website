---
slug: godot-prototyping-workflow-launcher
title: Fast Godot Prototyping with Godot Launcher
authors: [mariodebono]
tags:
  - godot
  - godot-launcher
  - godot-project-setup
  - prototyping-in-godot
  - godot-workflow
  - game-development
  - indie-game-dev
  - open-source-tools
---

# My Fast and Friendly Godot Prototyping Workflow

### (And Why I Open-Sourced Godot Launcher)

As someone who loves making games, fresh ideas and mechanics frequently pop into my head. The challenge? Quickly testing these new ideas in isolation is part of how I approach prototyping in Godot. For example, I might want to experiment with a unique inventory system separately first. This approach lets me see if the idea enhances my main project without cluttering or complicating it. It also forces me to design systems that are reusable from the get-go.

<!-- truncate -->

Sometimes clients or collaborators request specific systems developed independently, making integration simpler down the line. Other times, experimenting with the latest Godot versions helps me safely explore new features or improvements. If something doesn't work out, I can easily revert to an earlier version without disruption.

This has led me to a straightforward philosophy: every new idea or mechanic gets its own dedicated Godot project. It keeps things clean, organized, and safeguards my main project from unintended issues, and helps maintain a clean Godot project setup every time.

## The Repetitive Reality of Prototyping in Godot

But there's a downside: setting up new Godot projects repeatedly can become tedious. Each time, the process involves:

- Choosing the Godot version.
- Deciding whether to run the editor in standalone mode (which requires explicit paths and configuration to prevent conflicts).
- Creating a new Godot project.
- Initializing a Git repository (version control is life!).
- Setting up VSCode in the editor settings (configuring paths to VSCode if needed).
- Installing and configuring the [Godot Tools VSCode Extension](https://marketplace.visualstudio.com/items?itemName=geequlim.godot-tools).
- Managing multiple editor instances separately (for example, client and server editors), ensuring each instance remains independent and conflict-free.

Doing this once isn't an issue—but when done repeatedly, it quickly becomes cumbersome.

## Enter Godot Launcher

![Godot Launcher project creation screen](/img/blog/images/launcher-new-project-ui.webp)
Initially, I wrote PowerShell scripts to speed up project setup, complete with standalone editor mode options. However, as I began working on a Mac (because building for Mac requires a Mac), maintaining cross-platform compatibility became increasingly complex. When others tried my scripts, they often struggled with configuration and platform-specific quirks, which created additional support overhead.

Out of this frustration (and a genuine passion for building tools), I built **Godot Launcher**. Now, setting up a project is as easy as:

1. Naming the project.
2. Choosing the Godot Engine version.
3. Clicking "Create" and starting development immediately.

With Godot Launcher, each project automatically has dedicated editor settings, Git initialized with an initial commit, and VSCode properly configured to point directly to your Godot executable.

## Why Open Source?

After privately using Godot Launcher, I received great feedback from early users who found it dramatically improved their workflow. Inspired by their experiences, I decided to expand the tool and give back to the incredibly generous Godot community. If we found it helpful, chances are many others would too. So naturally, I open-sourced it!
You can explore the source code or contribute on [GitHub](https://github.com/godotlauncher/launcher).

I hope you find Godot Launcher useful and continue sharing your passion and ideas within the Godot community.

## Give It a Spin!

If you're someone like me—constantly juggling ideas and seeking a smoother workflow—check out [Godot Launcher](https://godotlauncher.org). It's completely open-source, community-driven, and frankly, makes prototyping in Godot fun and frustration-free again.

Happy prototyping!
