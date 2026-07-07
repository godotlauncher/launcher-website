import React from "react";
import Layout from "@theme/Layout";
import useGlobalData from "@docusaurus/useGlobalData";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";
import { DownloadButton } from "@site/src/components/DownloadButton";
import {
  SUPPORTED_PLATFORMS,
  extractPlatformGroup,
  formatReleaseDate,
} from "@site/src/utils/releases";

export default function ReleasesPage() {
  const globalData = useGlobalData();
  const pluginData = globalData["docusaurus-plugin-github-releases"]
    .default as PluginGithubReleaseContent;
  const releases = pluginData.releases;
  const latest = pluginData.latest;

  const renderRelease = (release: Release, isLatest = false) => (
    <div key={release.id} className={styles.release}>
      <div className={styles.release__content}>
        <div className={styles.release__header}>
          <h2 className={styles.release__title}>{release.tag_name}</h2>
          {isLatest && (
            <span className="badge text--sm badge--primary">latest</span>
          )}
        </div>

        <p className={styles.release__meta}>
          {formatReleaseDate(release.published_at)}
          <Link
            to={`https://github.com/godotlauncher/launcher/releases/tag/${release.tag_name}`}
            className={styles.release__link}
          >
            Release Notes
          </Link>
        </p>
      </div>

      <div className={styles.release__downloads}>
        {SUPPORTED_PLATFORMS.map((platform) => {
          const group = extractPlatformGroup(release, platform);
          if (!group.primary) {
            return null;
          }

          const variants = group.options.filter(
            (option) => option.id !== group.primary?.id,
          );

          return (
            <div
              key={`${release.id}-${platform}`}
              className={styles.platformCard}
            >
              <DownloadButton
                platform={platform}
                title={`Download for ${platform}: ${group.primary.archLabel}`}
                href={group.primary.href}
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
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <Layout
      title="Godot Launcher Download Archive"
      description="Find previous Godot Launcher releases for Windows, macOS, and Linux. Use the latest release when possible, or download older versions for testing, rollback, or compatibility."
    >
      <div className="container margin-vert--lg">
        <h1>Godot Launcher Download Archive</h1>
        <p>
          Use the <Link to="/download">main download page</Link> for the current
          release when possible. Older Godot Launcher releases are available
          here for testing, rollback, or compatibility.
        </p>
        <p>
          Release assets are hosted on GitHub. Signing support can vary by
          version and platform, so prefer the latest release unless you need a
          specific older version. You can also find these releases in the{" "}
          <Link
            href="https://github.com/godotlauncher/launcher/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </Link>
          .
        </p>

        {latest && (
          <>
            {renderRelease(latest, true)}

            {releases.length > 1 && (
              <hr className={styles.release__separator} />
            )}
          </>
        )}

        {releases
          .filter((release) => release.name !== latest?.name)
          .map((release) => renderRelease(release))}
      </div>
    </Layout>
  );
}
