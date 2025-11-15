import React, { useMemo } from "react";
import Layout from "@theme/Layout";
import useGlobalData from "@docusaurus/useGlobalData";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

import clsx from "clsx";
import { DownloadButton } from "@site/src/components/DownloadButton";
import { useAgent } from "@site/src/hooks/useAgent";
import Admonition from "@theme/Admonition";

import styles from "./styles.module.css";
import { WingetCommandList } from "@site/src/components/WingetCommandList";
import {
  SUPPORTED_PLATFORMS,
  extractPlatformGroup,
} from "@site/src/utils/releases";

export default function DownloadPage() {
  const globalData = useGlobalData();
  const pluginData = globalData["docusaurus-plugin-github-releases"]
    .default as PluginGithubReleaseContent;
  const latest = pluginData.latest;

  const { os } = useAgent();

  const platformGroups = useMemo(() => {
    return SUPPORTED_PLATFORMS.map((platform) => {
      const group = extractPlatformGroup(latest, platform);
      const primary = group.primary;
      const variants = primary
        ? group.options.filter((option) => option.id !== primary.id)
        : group.options;
      return { platform, group, primary, variants };
    }).filter(({ group }) => group.options.length > 0);
  }, [latest]);

  const wingetCommands = [
    {
      label: "Install (Package Identifier)",
      command: "winget install GodotLauncher.Launcher",
    },
    {
      label: "Install (Display Name)",
      command: 'winget install "Godot Launcher"',
    },
    {
      label: "Upgrade to Latest",
      command: "winget upgrade GodotLauncher.Launcher",
    },
  ];

  return (
    <Layout
      title="Godot Download Made Easy - Get The Launcher"
      description="Easily download and manage Godot Engine versions with Godot Launcher. One simple tool to install and run any Godot version. Free, open source, and cross-platform."
    >
      <header className={clsx("hero shadow--lw", styles.heroBanner)}>
        <div className="container ">
          <Heading as="h1" className={clsx("hero__title")}>
            Download Godot Launcher
            <br />
            {["macOS", "Windows", "Linux"].includes(os) && `for ${os}`}
          </Heading>
            <p className="hero__subtitle">
            The easiest way to download Godot Engine versions and manage Godot
            projects on Windows, macOS, and Linux.
            </p>
        </div>
      </header>
      <div className="container margin-vert--lg">
        <Heading as="h2">What is Godot Launcher?</Heading>
        <p>
          Godot Launcher is a fast way to manage Godot versions and projects.
          Open-source, cross-platform, and built for Godot developers.
        </p>

        <div key={latest.id} className={styles.release}>
          <div className={styles.release__content}>
            <div className={styles.release__header}>
              <h2 className={styles.release__title}>{latest.tag_name}</h2>
              <span className="badge text--sm badge--primary">latest</span>
            </div>

            <p className={styles.release__meta}>
              {new Date(latest.published_at).toLocaleDateString()}
              <Link
                to={`https://github.com/godotlauncher/launcher/releases/tag/${latest.tag_name}`}
                className={styles.release__link}
              >
                Release Notes
              </Link>
            </p>
          </div>

          <div className={styles.release__downloads}>
            {platformGroups.map(({ platform, group, primary, variants }) => (
              <div key={`${latest.id}-${platform}`} className={styles.platformCard}>
                {primary ? (
                  <>
                    <DownloadButton
                      platform={platform}
                      title={`${platform} – ${primary.archLabel}`}
                      href={primary.href}
                      size="md"
                      color="primary"
                      className={styles.platformPrimary}
                    />
                    {variants.length > 0 && (
                      <div className={styles.platformVariants} role="group" aria-label={`${platform} installers`}>
                        {variants.map((option) => (
                          <DownloadButton
                            key={option.id}
                            platform={platform}
                            title={option.label}
                            href={option.href}
                            size="sm"
                            color="secondary"
                            showIcon={false}
                            className={styles.variantButton}
                          />
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <p className={styles.platformEmpty}>No installers published for this platform.</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {os === "Windows" && (
          <Admonition type="info" title="Install instantly with winget" className="margin-top--md">
            <WingetCommandList
              commands={wingetCommands}
              intro={
                <>
                  Prefer the command line? Install or upgrade Godot Launcher with winget and stay
                  current with each Windows release.
                </>
              }
              hint={
                <>
                  All commands pull the same signed installer we publish above. Learn more in our{" "}
                  <Link to="/blog/godot-launcher-winget">winget announcement</Link>.
                </>
              }
            />
          </Admonition>
        )}

        <p className="padding-vert--sm text--right">
          Looking for <Link to="/download/archive">older versions</Link>?
        </p>
        <hr className={styles.release__separator} />

        <Heading as="h2">System Requirements</Heading>
        <p>Godot Launcher supports the following operating systems:</p>
        <h3>Windows</h3>
        <ul>
          <li> Windows 10 or later (64-bit)</li>
        </ul>
        <h3>macOS</h3>
        <ul>
          <li>macOS 10.15 Catalina or later</li>
        </ul>
        <h3>Linux</h3>
        <Admonition type="info" title="Note: Linux AppImage">
          <p>
            AppImage builds include most dependencies — Make sure FUSE is
            available on your system.
          </p>
          <p>
            If the launcher fails to start with Chromium sandbox errors, run it
            with <code>--no-sandbox</code> (or <code>--disable-sandbox</code>) or set{" "}
            <code>GODOT_LAUNCHER_DISABLE_SANDBOX=1</code> before launching. See the{" "}
            <Link to="https://docs.godotlauncher.org/guides/linux-no-sandbox">
              Linux no-sandbox guide
            </Link>{" "}
            for detailed steps and security considerations.
          </p>
        </Admonition>
        <ul>
          <li>
            Modern 64-bit distribution (Ubuntu 20.04+, Fedora 36+, Arch-based,
            etc.)
          </li>
        </ul>
      </div>
    </Layout>
  );
}
