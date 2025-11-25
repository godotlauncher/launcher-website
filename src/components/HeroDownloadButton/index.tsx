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
} from "@site/src/utils/releases";

interface HeroDownloadButtonProps {
  className?: string;
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";
}

export const HeroDownloadButton: FC<HeroDownloadButtonProps> = ({ className, color }) => {

  const globalData = useGlobalData();
  const pluginData = globalData['docusaurus-plugin-github-releases'].default as PluginGithubReleaseContent;
  const latest = pluginData.latest;

  const { platform, architecture, hasExactArch } = useAgent();
  const isLinux = platform === "Linux";
  const preferredColor = color ?? "primary";

  const downloads = useMemo(() => {
    if (!platform) {
      return null;
    }
    return extractPlatformGroup(latest, platform);
  }, [latest, platform]);

  const preferredArch = hasExactArch ? architecture : null;
  const preferGeneralFallback = Boolean(platform && !hasExactArch);

  const selectedOption = useMemo(
    () =>
      selectPreferredDownloadOption(downloads ?? undefined, {
        preferredArch,
        preferGeneralFallback,
      }),
    [downloads, preferGeneralFallback, preferredArch],
  );

  if (isLinux && downloads?.primary) {
    const variants = downloads.options.filter(
      (option) => option.id !== downloads.primary?.id
    );

    return (
      <div className={clsx(styles.heroDownloadGroup, className)}>
        <DownloadButton
          platform="Linux"
          title={`Linux – ${downloads.primary.archLabel}`}
          href={downloads.primary.href}
          size="lg"
          color={preferredColor}
          className={styles.heroDownloadButton}
        />
        {variants.length > 0 && (
          <div
            className={styles.heroVariants}
            role="group"
            aria-label="Linux installers"
          >
            {variants.map((option) => (
              <DownloadButton
                key={option.id}
                platform="Linux"
                title={option.label}
                href={option.href}
                size="sm"
                color="secondary"
                showIcon={false}
                className={styles.heroVariantButton}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (isLinux && downloads?.options?.length) {
    return (
      <div className={clsx(styles.heroDownloadGroup, className)}>
        {downloads.options.map((option) => (
          <DownloadButton
            key={option.id}
            platform="Linux"
            title={`Linux – ${option.archLabel}`}
            href={option.href}
            size="lg"
            color={preferredColor}
            className={styles.heroDownloadButton}
          />
        ))}
      </div>
    );
  }

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
