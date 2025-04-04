import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from '@theme/Heading';
import Link from "@docusaurus/Link";
import clsx from "clsx";

import styles from './styles.module.css';
import { HeroDownloadButton } from "../HeroDownloadButton";
import { FC } from "react";

export const HomepageHeader: FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero shadow--lw', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <HeroDownloadButton color="primary" />
        </div>

        <p>Available for Windows, macOS, and Linux. Looking for <Link className={styles.heroLink} to="/download/archive">older versions</Link>?</p>

      </div>
    </header>
  );
};