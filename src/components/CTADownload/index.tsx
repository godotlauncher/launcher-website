import Heading from "@theme/Heading";
import clsx from "clsx";

import { FC, useMemo } from "react";
import styles from "./styles.module.css";
import useGlobalData from "@docusaurus/useGlobalData";
import { DownloadButton } from "../DownloadButton";
import {
  extractPlatformGroup,
  selectPreferredDownloadOption,
} from "@site/src/utils/releases";
import { useAgent } from "@site/src/hooks/useAgent";
import Link from "@docusaurus/Link";

export const CTADownload: FC = () => {
  const globalData = useGlobalData();
  const pluginData = globalData["docusaurus-plugin-github-releases"]
    .default as PluginGithubReleaseContent;
  const latest = pluginData.latest;

  const { platform, architecture, hasExactArch } = useAgent();

  const platformGroup = useMemo(() => {
    if (!platform) {
      return undefined;
    }

    return extractPlatformGroup(latest, platform);
  }, [latest, platform]);

  const preferredArch = hasExactArch ? architecture : null;
  const selectedOption = selectPreferredDownloadOption(platformGroup, {
    preferredArch,
    preferGeneralFallback: Boolean(platform && !hasExactArch),
  });
  const isLinux = platform === "Linux";

  return (
    <header className={clsx("hero", styles.ctaBanner)}>
      <div className="container">
        <Heading as="h2" className={styles.ctaTitle}>
          Download Godot Launcher for Windows, macOS, and Linux
        </Heading>
        <p className={styles.ctaSubtitle}>Latest release: {latest.tag_name}</p>
        <div className={styles.ctaActions}>
          {platform && selectedOption && !isLinux ? (
            <>
              <DownloadButton
                platform={platform}
                title={`Download for ${platform} (${latest.tag_name})`}
                href={selectedOption.href}
                size="md"
                color="primary"
                className={styles.ctaPrimary}
              />
            </>
          ) : platform === "Linux" ? (
            <>
              <DownloadButton
                platform="Linux"
                title="Choose your Linux package"
                href="/download"
                size="md"
                color="primary"
                className={styles.ctaPrimary}
              />
              <p className={styles.ctaMeta}>Pick AppImage, deb, or rpm from the download page.</p>
            </>
          ) : (
            <>
              <Link to="/download" className={clsx("button button--primary button--md", styles.ctaPrimary)}>
                Download Godot Launcher ({latest.tag_name})
              </Link>
              <p className={styles.ctaMeta}>Choose your OS to grab the right installer.</p>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
