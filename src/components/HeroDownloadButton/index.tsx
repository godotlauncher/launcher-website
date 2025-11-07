import { FC, useMemo } from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import { useAgent } from "@site/src/hooks/useAgent";
import { DownloadButton } from "../DownloadButton";
import useGlobalData from "@docusaurus/useGlobalData";
import clsx from "clsx";
import {
  extractPlatformGroup,
  selectPreferredDownloadOption,
  SUPPORTED_PLATFORMS,
  type SupportedPlatform,
} from "@site/src/utils/releases";

interface HeroDownloadButtonProps {
  className?: string;
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";
}

export const HeroDownloadButton: FC<HeroDownloadButtonProps> = ({ className, color }) => {

  const globalData = useGlobalData();
  const pluginData = globalData['docusaurus-plugin-github-releases'].default as PluginGithubReleaseContent;
  const latest = pluginData.latest;

  const { os, preferArmBuild } = useAgent();

  const isSupported = SUPPORTED_PLATFORMS.includes(os as SupportedPlatform);
  const platform = isSupported ? (os as SupportedPlatform) : null;
  const preferredColor = color ?? "primary";

  const downloads = useMemo(() => {
    if (!platform) {
      return null;
    }
    return extractPlatformGroup(latest, platform);
  }, [latest, platform]);

  const selectedOption = useMemo(
    () =>
      selectPreferredDownloadOption(downloads ?? undefined, {
        preferArmBuild,
      }),
    [downloads, preferArmBuild],
  );

  if (platform && selectedOption) {
    return (
      <div className={clsx(styles.heroDownloadGroup, className)}>
        <DownloadButton
          platform={platform}
          title={`Download for ${platform} (${latest.tag_name})`}
          href={selectedOption.href}
          size="lg"
          color={preferredColor}
          className={styles.heroDownloadButton}
        />
      </div>
    );
  }

  return (
    <Link to="/download" className={clsx("button button--primary button--lg", styles.downloadButton)}>
      Download Godot Launcher ({latest.tag_name})
    </Link>
  );
};
