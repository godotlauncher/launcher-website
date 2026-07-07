import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { BookOpen } from "lucide-react";
import { ReactNode } from "react";

import styles from "./styles.module.css";

export default function Community(): ReactNode {
  return (
    <Layout
      title="Community"
      description="Find the right Godot Launcher community channel for questions, bug reports, feature requests, documentation, and project discussion."
    >
      <div className="container">
        <main className="padding-vert--lg">
          <section className="padding-vert--lg">
            <h1>Godot Launcher Community</h1>
            <p>
              Use these channels to ask questions, discuss ideas, report bugs,
              or follow project updates. Discord is best for discussion, GitHub
              issues are best for tracked bugs and feature requests, and the
              docs are the best place to start for setup and troubleshooting.
            </p>

            <div className="row">
              <div className="col col--4 margin-bottom--md">
                <div className={`card ${styles.channelCard}`}>
                  <div className="card__header">
                    <h2>Discord</h2>
                  </div>
                  <div className={`card__image ${styles.channelCardMedia}`}>
                    <img
                      src="/img/discord-screenshot.webp"
                      alt="Godot Launcher Discord community preview"
                    />
                  </div>
                  <div className={`card__body ${styles.channelCardBody}`}>
                    <p>
                      Join the Discord server for user questions, project
                      discussion, translation coordination, and early feedback
                      on ideas before they become GitHub issues.
                    </p>
                  </div>
                  <div className={`card__footer ${styles.channelCardFooter}`}>
                    <Link
                      className="button button--secondary button--block"
                      href="https://discord.gg/Ju9jkFJGvz"
                    >
                      Join Discord
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col--4 margin-bottom--md">
                <div className={`card ${styles.channelCard}`}>
                  <div className="card__header">
                    <h2>GitHub Issues</h2>
                  </div>
                  <div className={`card__image ${styles.channelCardMedia}`}>
                    <img
                      src="/img/Godot-Launcher-Social-Card.jpg"
                      alt="Godot Launcher social card"
                    />
                  </div>
                  <div className={`card__body ${styles.channelCardBody}`}>
                    <p>
                      Report reproducible bugs, request features, or check
                      whether a problem has already been discussed. Include your
                      launcher version, operating system, steps, and expected
                      result when possible.
                    </p>
                  </div>
                  <div className={`card__footer ${styles.channelCardFooter}`}>
                    <Link
                      className="button button--secondary button--block"
                      href="https://github.com/godotlauncher/launcher/issues/new/choose"
                    >
                      Open GitHub Issue
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col col--4 margin-bottom--md">
                <div className={`card ${styles.channelCard}`}>
                  <div className="card__header">
                    <h2>Documentation</h2>
                  </div>
                  <div
                    className={`card__image ${styles.channelCardMedia} ${styles.channelCardPlaceholder}`}
                    aria-hidden="true"
                  >
                    <BookOpen
                      className={styles.channelCardIcon}
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className={`card__body ${styles.channelCardBody}`}>
                    <p>
                      Use the docs for installation, editor setup, project
                      workflows, platform notes, and troubleshooting before
                      opening a support question.
                    </p>
                  </div>
                  <div className={`card__footer ${styles.channelCardFooter}`}>
                    <Link
                      className="button button--secondary button--block"
                      href="https://docs.godotlauncher.org"
                    >
                      Read Docs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
