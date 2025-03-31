import React from 'react';
import Layout from '@theme/Layout';
import useGlobalData from '@docusaurus/useGlobalData';
import Link from "@docusaurus/Link";
import Heading from '@theme/Heading';

import clsx from "clsx";
import { DownloadButton } from "@site/src/components/DownloadButton";
import { useAgent } from "@site/src/hooks/useAgent";
import Admonition from '@theme/Admonition';

import styles from './styles.module.css';

export default function DownloadPage() {
  const globalData = useGlobalData();
  const pluginData = globalData['docusaurus-plugin-github-releases'].default as PluginGithubReleaseContent;
  const latest = pluginData.latest;

  const { os } = useAgent();

  console.log(os);

  return (
    <Layout
      title="Download - Godot Launcher"
      description="Download the Godot Launcher to easily manage and launch different versions of the Godot Engine on Windows, macOS, and Linux."
    >
      <header className={clsx('hero shadow--lw', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className={clsx("hero__title")}>
            Download Godot Launcher<br />
            {['macOS', 'Windows', 'Linux'].includes(os) && `for ${os}`}
          </Heading>
          <p className="hero__subtitle">Manage and launch projects with different versions of the Godot Engine on Windows, macOS, and Linux.</p>
        </div>
      </header>
      <div className="container margin-vert--lg">

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
        <Admonition type="info" title="Note: Linux AppImage" >
          <p>AppImage builds include most dependencies — Make sure FUSE is available on your system.</p>
        </Admonition>
        <ul>
          <li>Modern 64-bit distribution (Ubuntu 20.04+, Fedora 36+, Arch-based, etc.)</li>

        </ul>
      </div >
    </Layout >
  );
}
