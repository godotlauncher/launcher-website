import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from '@theme/Heading';
import Link from "@docusaurus/Link";
import clsx from "clsx";

import styles from './styles.module.css';
import { HeroDownloadButton } from "../HeroDownloadButton";
import { FC } from "react";

export const CTADownload: FC = () => {

  return (
    <header className={clsx('hero', styles.ctaBanner)}>
      <div className="container">
        <Heading as="h2" className={styles.ctaTitle}>
          Download Godot Launcher for Windows, macOS, and Linux
        </Heading>
        <div className={styles.buttons}>
          <HeroDownloadButton color="primary" />
        </div>
      </div>
    </header>
  );
};