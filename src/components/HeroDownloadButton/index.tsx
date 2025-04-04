import { FC } from "react";
import styles from './styles.module.css';
import Link from "@docusaurus/Link";
import { useAgent } from "@site/src/hooks/useAgent";
import { DownloadButton } from "../DownloadButton";
import useGlobalData from "@docusaurus/useGlobalData";
import clsx from "clsx";

interface HeroDownloadButtonProps {
  className?: string;
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";
}

export const HeroDownloadButton: FC<HeroDownloadButtonProps> = ({ className, color }) => {

  const globalData = useGlobalData();
  const pluginData = globalData['docusaurus-plugin-github-releases'].default as PluginGithubReleaseContent;
  const latest = pluginData.latest;

  const { os } = useAgent();

  if (['macOS', 'Windows', 'Linux'].includes(os)) {
    return (
      <DownloadButton release={latest} platform={os} title={`Download for ${os} (${latest.tag_name})`} className={clsx(className)} size="lg" color={color} />
    );
  }
  else {
    return (
      <Link to="/download" className={clsx("button button--primary button--lg", styles.downloadButton)}>Download Godot Launcher</Link>
    );
  }

};