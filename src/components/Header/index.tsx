import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import clsx from "clsx";

import { useAgent } from "@site/src/hooks/useAgent";
import { FC, useEffect, useState } from "react";
import { HeroDownloadButton } from "../HeroDownloadButton";
import styles from "./styles.module.css";

import { Check, Copy } from 'lucide-react';

export const HomepageHeader: FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const { os } = useAgent();

  const [swapped, setSwapped] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (swapped) {
      timeout = setTimeout(() => {
        setSwapped(false);
      }, 3000);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [swapped]);

  const handleCopy = () => {
    navigator.clipboard.writeText('winget install "Godot Launcher"');
    setSwapped(true);
  };

  return (
    <header className={clsx("hero shadow--lw", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx("hero__title", styles.hero__title)}>
          The Companion App for Godot Engine
        </Heading>
        <p className={clsx("hero__subtitle", styles.hero__subtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <HeroDownloadButton color="primary" />
        </div>

        {os === "Windows" && (
          <p className={clsx("margin-top--sm")}>
            <div className="margin--md">Or run</div>
            <center>
              <code className={styles.codeBlock}>

                <div className={styles.codeLabel}>Powershell & CMD</div>
                <div className={styles.codeText}>
                  &gt; winget install "Godot Launcher"
                </div>
                <button title="Copy to clipboard" className={clsx(styles.copyButton, "winget-button--copy")} onClick={handleCopy}>
                  {!swapped ? <Copy width={16} /> : <Check color="#4caf50" width={16} />}
                </button>

              </code>
            </center>


          </p>
        )}

        <p>
          Available for Windows, macOS, and Linux. Looking for{" "}
          <Link className={styles.heroLink} to="/download/archive">
            older versions
          </Link>
          ?
        </p>
      </div>
    </header >
  );
};
