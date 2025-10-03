---
title: "🚀 Godot Launcher 1.4.0 – Windows Symlink Support, Change Log Shortcuts, and Stability Tweaks"
description: "Godot Launcher 1.4.0 sharpens the Windows experience with new symlink support, adds a handy change log shortcut, and improves reliability around fonts, sorting, and preferences."
date: 2025-10-01 22:00:00
authors: [mariodebono]
tags: [release, godot-launcher]
slug: godot-launcher-1-4-0-windows-symlinks
---

# Godot Launcher 1.4.0

Godot Launcher v1.4.0 is here! 🎉  
This release introduces symlink support for Windows users, a convenient change log shortcut, and several quality-of-life improvements to keep the launcher stable and reliable.

<!-- truncate -->

## 🆕 What’s New

### **Windows Symlink Support**  
[[PR#17]](https://github.com/godotlauncher/launcher/pull/17) · [[PR#18]](https://github.com/godotlauncher/launcher/pull/18) · [[PR#34]](https://github.com/godotlauncher/launcher/pull/34)  
[📖 Read the full guide →](https://docs.godotlauncher.org/guides/windows-symlink)

> Windows-only feature

Windows users can now enable **symlink mode**, where Godot Launcher links projects to the installed Godot Editor instead of copying the release into each project folder. This reduces disk usage and makes switching editor versions much faster.  

By default, enabling this option won’t retroactively change existing projects. Projects only switch between copy ↔ symlink when their editor version changes, or when a new project is added.  

To make this clearer, v1.4.0 introduces a **welcome message** on first launch highlighting the feature:  

![Windows Symlink Welcome Message](/img/blog/images/1.4.0/windows_symlink_welcome.webp)  

For users running Godot Launcher for the very first time, the onboarding flow now includes a step to toggle this setting:  

![First Run – Windows Onboarding](/img/blog/images/1.4.0/first-run-windows-symlink.webp)  

You can also adjust the setting anytime under **Settings → Behaviour**:  

![Windows Symlink Settings](/img/blog/images/1.4.0/windows_symlink_settings.gif)  

:::warning
On Windows, symlinks require elevated permissions. Your user must be an **Administrator** and have **Developer Mode** enabled. If elevation is required, Godot Launcher will automatically prompt for it.  
:::

![UAC Prompt](/img/blog/images/1.4.0/UAC_prompt.webp)


### **No-Sandbox option for Linux**  
[[PR#36]](https://github.com/godotlauncher/launcher/pull/36)  
[📖 Read the full guide →](https://docs.godotlauncher.org/guides/linux-no-sandbox)

Linux builds now support a **no-sandbox mode** using the `--no-sandbox` or `--disable-sandbox` arguments, or the environment variable `GODOT_LAUNCHER_DISABLE_SANDBOX=1`.  

This option disables Chromium’s sandboxing and can resolve startup errors on some distributions or AppImage environments.  

:::warning
Running without the sandbox reduces process isolation and security. Use this option only if the launcher fails to start normally.  
:::

### **Electron 38 Upgrade**  
[[PR#27]](https://github.com/godotlauncher/launcher/pull/27)

The runtime has been updated to **Electron 38**, bringing the launcher up to date with the latest upstream security patches and performance improvements.  


---

## 🔧 Fixes

### **Change Log Button in Help**  
[[PR#16]](https://github.com/godotlauncher/launcher/pull/16)

The **Help** menu now includes a direct **Change Log** link, making it easier to check what’s new in each release without digging through GitHub.  


### **Persistent Project Sorting**  
[[PR#21]](https://github.com/godotlauncher/launcher/pull/21)  

Your preferred project order now survives restarts and reloads — the launcher always opens exactly the way you left it.  

### **Safer Preferences Loading**  
[[PR#22]](https://github.com/godotlauncher/launcher/pull/22)  

If the preferences file can’t be parsed, the launcher now falls back to defaults instead of leaving you stuck in a broken state.  

### **Fonts Loading Properly**  
[[PR#35]](https://github.com/godotlauncher/launcher/pull/35)  

Fonts now load from their proper location, ensuring consistent typography across the app.  

---

## 📦 Get the Update

Download the latest build from the [GitHub Releases page](https://github.com/godotlauncher/launcher/releases/tag/v1.4.0), from our [Download page](/download), or update directly from within the launcher.

---

💡 Found a bug or have feedback? [Open an issue](https://github.com/godotlauncher/launcher/issues) or join the conversation on [Discord](https://discord.gg/Ju9jkFJGvz).
