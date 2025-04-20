import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { ReactNode } from "react";

import styles from "./styles.module.css";

export default function Contribute(): ReactNode {
  return (
    <Layout
      title="Contribute"
      description="Learn how to contribute to Godot Launcher, an open-source project. Discover ways to report bugs, improve code, enhance UX/UI, write documentation, and more."
    >
      <div className="container">
        <main className="padding-vert--lg">
          <h1>How to Contribute</h1>
          <p>
            <strong>Godot Launcher</strong> is a community-driven, open-source
            project. Whether you're a developer, designer, writer, or just who
            enjoys Godot Launcher, there are many ways you can get involved.
            Your contributions—big or small—make a real difference.
          </p>

          <h2>Technical Contributions</h2>
          <ul className={styles.unsortedList}>
            <li>
              <strong>🪲 Report Bugs and Issues:</strong> As a user, you're in a
              great position to notice bugs or quirks in the launcher. If you
              spot something, please submit a{" "}
              <Link
                href="https://github.com/godotlauncher/launcher/issues/new/choose"
                target="_blank"
                title="Submit a bug report on GitHub"
              >
                bug report on GitHub
              </Link>
              . The more details you include, the easier it will be for us to
              investigate and fix the issue. You're also welcome to discuss
              issues in our{" "}
              <Link to="/community" title="Join our community">
                community
              </Link>
              .
            </li>
            <li>
              <strong>🔨 Code Contributions:</strong> If you're comfortable with
              code, we welcome your help fixing bugs, building features, or
              improving performance. The source code is available on{" "}
              <Link
                href="https://github.com/godotlauncher/launcher"
                target="_blank"
                title="View the source code on GitHub"
              >
                GitHub
              </Link>
              . Be sure to check the{" "}
              <Link
                href="https://github.com/godotlauncher/launcher/blob/main/CONTRIBUTING.md"
                target="_blank"
                title="Read the contributing guidelines"
              >
                CONTRIBUTING.md
              </Link>{" "}
              for guidelines before submitting a pull request.
              <p className="alert alert--info margin-top--md">
                The launcher is built using electron, and has a backend part
                (nodejs) and a frontend part for the ui (react)
              </p>
            </li>
            <li>
              <strong>💘 UX/UI Improvements:</strong> Got a good eye for design
              or user experience? We'd love your help making the interface
              smoother and more intuitive. You can start a conversation on{" "}
              <Link
                href="https://discord.gg/Ju9jkFJGvz"
                title="Join our Discord server"
              >
                Discord
              </Link>{" "}
              or open an issue via our{" "}
              <Link
                href="https://github.com/godotlauncher/launcher/issues/new/choose"
                target="_blank"
                title="Submit an issue on GitHub"
              >
                GitHub issue tracker
              </Link>
              .
            </li>
            <li>
              <strong>📃Documentation:</strong> Clear documentation is essential
              for any project. If you enjoy writing or editing technical docs,
              head over to the{" "}
              <Link
                href="https://github.com/godotlauncher/launcher-docs"
                target="_blank"
                title="Visit the documentation repository"
              >
                documentation repository
              </Link>
              . Contributions should follow the guidelines in the{" "}
              <Link
                href="https://github.com/godotlauncher/launcher-docs/blob/main/CONTRIBUTING.md"
                target="_blank"
                title="Read the documentation contributing guidelines"
              >
                CONTRIBUTING.md
              </Link>{" "}
              file.
            </li>
            <li>
              <strong>🌎 Translations:</strong> We aim to make Godot Launcher
              accessible to users around the world. If you're fluent in another
              language and want to help translate the launcher, please join our{" "}
              <Link to="/community" title="Join our community">
                community
              </Link>{" "}
              and let us know!
              <p className="alert alert--info margin-top--md">
                We are also looking for developers to help us implement the
                translations in the launcher
              </p>
            </li>
          </ul>

          <h2>Other Ways to Help</h2>
          <ul className={styles.unsortedList}>
            <li>
              <strong>🤝 Community Support:</strong> Helping others is a great
              way to give back. Whether you're answering questions, sharing
              tips, or guiding new users, your experience is valuable. Join our{" "}
              <Link to="/community" title="Join our community">
                community
              </Link>{" "}
              and become part of the conversation.
            </li>
            <li>
              <strong>💬 Spread the Word:</strong> Love what we're building?
              Help us grow! Share Godot Launcher with your network, write about
              it, or star the project on{" "}
              <Link
                href="https://github.com/godotlauncher/launcher"
                target="_blank"
                title="Star the project on GitHub"
              >
                GitHub
              </Link>
              . Every bit of visibility helps.
            </li>
          </ul>
        </main>
      </div>
    </Layout>
  );
}
