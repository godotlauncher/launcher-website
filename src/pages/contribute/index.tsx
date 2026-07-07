import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { ReactNode } from "react";

import styles from "./styles.module.css";

export default function Contribute(): ReactNode {
  return (
    <Layout
      title="Contribute"
      description="Learn how to contribute to Godot Launcher through focused bug reports, code changes, documentation, translations, design feedback, and community support."
    >
      <div className="container">
        <main className="padding-vert--lg">
          <h1>Contribute to Godot Launcher</h1>
          <p>
            <strong>Godot Launcher</strong> is an open source project. The most
            useful contributions are specific, reproducible, and scoped: a clear
            bug report, a focused pull request, a documentation fix, a
            translation review, or practical feedback from using the launcher
            with real Godot projects.
          </p>
          <p>
            For larger changes, start with a GitHub issue or Discord discussion
            before opening a pull request. That keeps design, implementation,
            and maintenance expectations clear.
          </p>

          <h2>Ways to contribute</h2>
          <ul className={styles.unsortedList}>
            <li>
              <strong>Report bugs and issues:</strong> If something is broken
              or unclear, search existing issues first, then open a{" "}
              <Link
                href="https://github.com/godotlauncher/launcher/issues/new/choose"
                target="_blank"
                title="Submit a bug report on GitHub"
              >
                bug report on GitHub
              </Link>
              {". "}
              Include the launcher version, operating system, what you tried,
              what happened, and what you expected. You can also discuss
              questions in the{" "}
              <Link to="/community" title="Join our community">
                Godot Launcher community
              </Link>
              {"."}
            </li>
            <li>
              <strong>Code contributions:</strong> The main app source code is
              available on{" "}
              <Link
                href="https://github.com/godotlauncher/launcher"
                target="_blank"
                title="View the source code on GitHub"
              >
                GitHub
              </Link>
              {". "}
              Read{" "}
              <Link
                href="https://github.com/godotlauncher/launcher/blob/main/CONTRIBUTING.md"
                target="_blank"
                title="Read the contributing guidelines"
              >
                CONTRIBUTING.md
              </Link>{" "}
              before opening a pull request. Keep changes focused and include
              tests or screenshots when they help reviewers understand the
              behavior.
            </li>
            <li>
              <strong>UX and design feedback:</strong> If you notice a confusing
              flow or have a concrete interface improvement, describe the
              workflow, what felt unclear, and what you expected instead. Start
              a discussion on{" "}
              <Link
                href="https://discord.gg/Ju9jkFJGvz"
                title="Join our Discord server"
              >
                Discord
              </Link>{" "}
              or open an issue in the{" "}
              <Link
                href="https://github.com/godotlauncher/launcher/issues/new/choose"
                target="_blank"
                title="Submit an issue on GitHub"
              >
                GitHub issue tracker
              </Link>
              {"."}
            </li>
            <li>
              <strong>Documentation:</strong> Documentation improvements belong
              in the{" "}
              <Link
                href="https://github.com/godotlauncher/launcher-docs"
                target="_blank"
                title="Visit the documentation repository"
              >
                documentation repository
              </Link>
              {". "}
              Follow its{" "}
              <Link
                href="https://github.com/godotlauncher/launcher-docs/blob/main/CONTRIBUTING.md"
                target="_blank"
                title="Read the documentation contributing guidelines"
              >
                CONTRIBUTING.md
              </Link>{" "}
              before submitting docs changes. Small corrections, missing setup
              steps, and clearer troubleshooting notes are useful contributions.
            </li>
            <li>
              <strong>Translations:</strong> Help review existing translations
              or add a new locale through the{" "}
              <Link
                to="/contributing/translations"
                title="Read the translation contribution guide"
              >
                translation contribution guide
              </Link>{" "}
              {". "}
              Use the{" "}
              <Link to="/community" title="Join our community">
                community
              </Link>{" "}
              to coordinate reviews or ask questions.
            </li>
          </ul>

          <h2>Community support</h2>
          <ul className={styles.unsortedList}>
            <li>
              <strong>Help other users:</strong> Answer questions, point people
              to docs, or share context from your own Godot Launcher setup in
              the{" "}
              <Link to="/community" title="Join our community">
                community channels
              </Link>{" "}
              {"."}
            </li>
            <li>
              <strong>Share useful feedback:</strong> If Godot Launcher helps or
              gets in the way of your workflow, open an issue, join the
              discussion, or star the project on{" "}
              <Link
                href="https://github.com/godotlauncher/launcher"
                target="_blank"
                title="Star the project on GitHub"
              >
                GitHub
              </Link>
              {"."}
            </li>
          </ul>
        </main>
      </div>
    </Layout>
  );
}
