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
  formatReleaseDate,
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
      title="Download Godot Launcher for Windows, macOS, and Linux"
      description="Download Godot Launcher, the open source Godot version manager and companion app for Windows, macOS, and Linux. Manage Godot versions, custom Godot builds, and project setup from one app."
    >
      <header className={clsx("hero shadow--lw", styles.heroBanner)}>
        <div className="container ">
          <Heading as="h1" className={clsx("hero__title")}>
            Download Godot Launcher
            <br />
            {["macOS", "Windows", "Linux"].includes(os) && `for ${os}`}
          </Heading>
          <p className="hero__subtitle">
            Download the open source Godot version manager and companion app for
            Windows, macOS, and Linux. Manage Godot versions, custom Godot
            builds, and project setup from one app.
          </p>
        </div>
      </header>
      <div className="container margin-vert--lg">
        <Heading as="h2">Download and manage Godot versions</Heading>
        <p>
          Godot Launcher helps you download and manage Godot editor versions,
          register custom Godot builds, and keep per-project editor settings
          organized. Choose the installer or package for your operating system
          below.
        </p>

        <div className={styles.engineClarification}>
          <strong>Looking for Godot Engine itself?</strong> Godot Launcher is an
          independent app that helps manage Godot editor downloads and project
          setup. You can download Godot Engine directly from the{" "}
          <Link href="https://godotengine.org/download/">
            Godot Engine website
          </Link>
          .
        </div>

        <div key={latest.id} className={styles.release}>
          <div className={styles.release__content}>
            <div className={styles.release__header}>
              <h2 className={styles.release__title}>{latest.tag_name}</h2>
              <span className="badge text--sm badge--primary">latest</span>
            </div>

            <p className={styles.release__meta}>
              {formatReleaseDate(latest.published_at)}
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
              <div
                key={`${latest.id}-${platform}`}
                className={styles.platformCard}
              >
                {primary ? (
                  <>
                    <DownloadButton
                      platform={platform}
                      title={`Download for ${platform}: ${primary.archLabel}`}
                      href={primary.href}
                      size="md"
                      color="primary"
                      className={styles.platformPrimary}
                    />
                    {variants.length > 0 && (
                      <div
                        className={styles.platformVariants}
                        role="group"
                        aria-label={`${platform} installers`}
                      >
                        {variants.map((option) => (
                          <DownloadButton
                            key={option.id}
                            platform={platform}
                            title={`Download ${platform}: ${option.label}`}
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
                  <p className={styles.platformEmpty}>
                    No installers published for this platform.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <section className={styles.platformGuide} aria-labelledby="package-options">
          <Heading as="h2" id="package-options">
            Which package should I choose?
          </Heading>
          <div className={styles.platformGuide__grid}>
            <div>
              <h3>Windows</h3>
              <p>
                Use the Windows installer, or install and upgrade from the
                command line with winget when it is available on your system.
              </p>
            </div>
            <div>
              <h3>macOS</h3>
              <p>
                Use the macOS disk image. Open the .dmg file and move Godot
                Launcher into your Applications folder.
              </p>
            </div>
            <div>
              <h3>Linux</h3>
              <p>
                Use AppImage for a portable package, or choose .deb or .rpm
                when the package matches your distribution.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.trustPanel} aria-labelledby="release-trust">
          <Heading as="h2" id="release-trust">
            Release and trust details
          </Heading>
          <div className={styles.trustPanel__grid}>
            <div>
              <h3>GitHub releases</h3>
              <p>
                Download assets are published from the{" "}
                <Link
                  href={`https://github.com/godotlauncher/launcher/releases/tag/${latest.tag_name}`}
                >
                  {latest.tag_name} GitHub release
                </Link>
                .
              </p>
            </div>
            <div>
              <h3>Source and license</h3>
              <p>
                Godot Launcher is open source. Review the{" "}
                <Link href="https://github.com/godotlauncher/launcher">
                  source code
                </Link>{" "}
                and the <Link to="/license">MIT license</Link>.
              </p>
            </div>
            <div>
              <h3>Signed releases</h3>
              <div className={styles.trustDetails}>
                <p>
                  <strong>Windows:</strong> Builds are signed through SignPath.
                </p>
                <p className={styles.signPathAttribution}>
                  Free code signing provided by{" "}
                  <Link href="https://signpath.io/">SignPath.io</Link>,
                  certificate by{" "}
                  <Link href="https://signpath.org/">SignPath Foundation</Link>.
                </p>
                <p>
                  <strong>macOS:</strong> Builds are signed with a Developer ID
                  Application certificate issued to Mario DEBONO and notarized by
                  Apple.
                </p>
                <p>
                  <strong>Linux:</strong> Signing for .deb and .rpm packages is
                  planned.
                </p>
              </div>
            </div>
            <div>
              <h3>Independent project</h3>
              <p>
                Godot Launcher is maintained independently and is not affiliated
                with the Godot Foundation.
              </p>
            </div>
          </div>
        </section>

        {os === "Windows" && (
          <Admonition
            type="info"
            title="Install with winget"
            className="margin-top--md"
          >
            <WingetCommandList
              commands={wingetCommands}
              intro={
                <>
                  Prefer the command line? Install or upgrade Godot Launcher
                  with winget and stay current with each Windows release.
                </>
              }
              hint={
                <>
                  These commands install the same Windows release published above. Learn more in our{" "}
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
            AppImage builds include most dependencies. Make sure FUSE is
            available on your system.
          </p>
          <p>
            If the launcher fails to start with Chromium sandbox errors, see the{" "}
            <Link to="https://docs.godotlauncher.org/guides/linux-no-sandbox/">
              Linux no-sandbox guide
            </Link>{" "}
            for workaround steps and security considerations.
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
