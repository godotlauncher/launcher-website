import Heading from '@theme/Heading';
import clsx from "clsx";

import { FC } from "react";
import { HeroDownloadButton } from "../HeroDownloadButton";
import styles from './styles.module.css';

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
