import React from 'react';
import Layout from '@theme/Layout';
import useGlobalData from '@docusaurus/useGlobalData';
import Link from "@docusaurus/Link";

import styles from './styles.module.css';
import { DownloadButton } from "@site/src/components/DownloadButton";



export default function ReleasesPage() {
  const globalData = useGlobalData();
  const pluginData = globalData['docusaurus-plugin-github-releases'].default as PluginGithubReleaseContent;
  const releases = pluginData.releases;
  const latest = pluginData.latest;

  return (
    <Layout
      title="Download Archive - Godot Launcher"
      description="Access the complete archive of Godot Launcher releases. Download previous versions for Windows, macOS, and Linux."
    >
      <div className="container margin-vert--lg">
        <h1>Godot Launcher Downloads Archive</h1>
        <p>
          This page contains previous releases of <strong className="">Godot Launcher</strong>. All downloads are hosted on GitHub. You can also find these releases on the
          {' '}
          <Link href="https://github.com/godotlauncher/launcher/releases" target="_blank" rel="noopener noreferrer">GitHub repository</Link>.
        </p>

        {latest && (
          <>
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
                <DownloadButton
                  release={latest}
                  platform="Windows"
                  title="Windows"
                  size="md"
                  className={styles.release__button}
                />
                <DownloadButton
                  release={latest}
                  platform="macOS"
                  title="macOS"
                  size="md"
                  className={styles.release__button}
                />
                <DownloadButton
                  release={latest}
                  platform="Linux"
                  title="Linux (AppImage)"
                  size="md"
                  className={styles.release__button}
                />
              </div>
            </div>

            {releases.length > 1 && <hr className={styles.release__separator} />}
          </>

        )}

        {releases.filter(r => r.name !== latest.name).map((release, i) => (
          <>
            <div key={release.id} className={styles.release}>
              <div className={styles.release__content}>
                <div className={styles.release__header}>
                  <h2 className={styles.release__title}>{release.tag_name}</h2>
                </div>

                <p className={styles.release__meta}>
                  {new Date(release.published_at).toLocaleDateString()}
                  <Link
                    to={`https://github.com/godotlauncher/launcher/releases/tag/${release.tag_name}`}
                    className={styles.release__link}
                  >
                    Release Notes
                  </Link>
                </p>
              </div>

              <div className={styles.release__downloads}>
                <DownloadButton
                  release={release}
                  platform="Windows"
                  title="Windows"
                  size="md"
                  className={styles.release__button}
                />
                <DownloadButton
                  release={release}
                  platform="macOS"
                  title="macOS"
                  size="md"
                  className={styles.release__button}
                />
                <DownloadButton
                  release={release}
                  platform="Linux"
                  title="Linux (AppImage)"
                  size="md"
                  className={styles.release__button}
                />
              </div>
            </div>
          </>
        ))
        }

      </div >
    </Layout >
  );
}
