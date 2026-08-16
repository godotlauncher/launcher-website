import { ReactNode } from "react";
import Link from "@docusaurus/Link";
import { WingetCommandList } from "@site/src/components/WingetCommandList";

export type FAQQuestion = {
  question: string;
  answer: string;
  answerHTML?: ReactNode;
  featureOrder?: number;
  // mark questions we want to surface on the homepage without duplicating content
  featured?: boolean;
};

export type FAQSection = {
  title: string;
  questions: FAQQuestion[];
};

export const faqSections: FAQSection[] = [
  {
    title: "General Questions",
    questions: [
      {
        question: "What is Godot Launcher?",
        answer:
          "Godot Launcher is a free, open source companion app for Godot Engine. It helps manage Godot versions, custom Godot builds, projects, code editors, Git, and per-project editor settings.",
        featured: true,
        featureOrder: 0,
      },
      {
        question:
          "Is Godot Launcher affiliated with Godot Engine or the Godot Foundation?",
        answer:
          "No. Godot Launcher is an independent community project and is not affiliated with, endorsed by, or sponsored by the Godot Engine project or the Godot Foundation.",
        featureOrder: 1,
        featured: false,
      },
      {
        question: "Is Godot Launcher free?",
        answer:
          "Yes. Godot Launcher is free and open source under the MIT license. You can use, modify, and contribute to it under that license.",
        answerHTML: (
          <p>
            Yes. Godot Launcher is free and open source under the{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/license/"
              title="View license"
            >
              MIT license
            </Link>
            {". "}
            You can use, modify, and contribute to it under that license.
          </p>
        ),
        featured: true,
        featureOrder: 6,
      },
      {
        question:
          "How is Godot Launcher different from downloading Godot manually?",
        answer:
          "Manual downloads give you the editor files. Godot Launcher keeps your Godot versions, custom builds, project tools, and per-project settings organized in one place. It can also configure Visual Studio Code or VSCodium and initialize Git.",
        answerHTML: (
          <>
            <p>
              Manual downloads give you the editor files. Godot Launcher keeps
              your Godot versions, custom builds, project tools, and per-project
              settings organized in one place.
            </p>
            <p>
              It can also configure{" "}
              <Link
                style={{ display: "contents" }}
                href="https://docs.godotlauncher.org/integrations/vscode-setup-for-godot/"
              >
                Visual Studio Code
              </Link>
              {" or "}
              <Link
                style={{ display: "contents" }}
                href="https://docs.godotlauncher.org/integrations/vscodium-setup-for-godot/"
              >
                VSCodium
              </Link>
              {" and initialize Git."}
            </p>
          </>
        ),
        featured: false,
      },
      {
        question: "Does it work offline?",
        answer:
          "Yes. You can open local projects with installed Godot versions while offline. You need an internet connection to download editors, refresh the release list, or update Godot Launcher.",
        featureOrder: 3,
      },
      {
        question: "Which platforms does it support?",
        answer:
          "Godot Launcher supports Windows 10 or later on x64 and ARM64, macOS 12 Monterey or later on Intel and Apple silicon, and modern Linux distributions on x64 and ARM64.",
        featured: false,
      },
      {
        question: "Can I use Godot 3 with the launcher?",
        answer:
          "Godot Launcher currently supports Godot 4 and newer. Godot 3 support is not included. If you need it, you can discuss that use case in the Godot Launcher Discord server.",
        answerHTML: (
          <p>
            Godot Launcher currently supports Godot 4 and newer. Support for
            Godot 3 is not included. If you need Godot 3 support, you can discuss
            that use case in the <strong>#launcher-discussions</strong> channel
            on the{" "}
            <Link
              style={{ display: "contents" }}
              href="https://discord.gg/Ju9jkFJGvz"
              target="_blank"
              title="Join the Godot Launcher Discord server"
            >
              Godot Launcher Discord server
            </Link>
            {"."}
          </p>
        ),
      },
      {
        question: "Where can I review the source code?",
        answer:
          "The Godot Launcher source code is available on GitHub. The website, documentation, and main app are maintained as open source project repositories.",
        answerHTML: (
          <p>
            The Godot Launcher source code is available on{" "}
            <Link
              style={{ display: "contents" }}
              href="https://github.com/godotlauncher/launcher"
              target="_blank"
              title="View Godot Launcher source code on GitHub"
            >
              GitHub
            </Link>
            {". "}
            The website, documentation, and main app are maintained as open
            source project repositories.
          </p>
        ),
      },
    ],
  },
  {
    title: "Features & Functionality",
    questions: [
      {
        question: "Can I use custom Godot builds with Godot Launcher?",
        answer:
          "Yes. You can register locally compiled or team-distributed Godot editor builds and select them for projects like official releases.",
        answerHTML: (
          <p>
            Yes. Register{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/editors/custom-editors/"
            >
              custom Godot builds
            </Link>
            {" "}and select them for projects like official releases.
          </p>
        ),
        featured: true,
        featureOrder: 2,
      },
      {
        question: "How do I add a custom Godot build?",
        answer:
          "Use the Custom Editor workflow from the Installs view. The docs cover registering an existing manifest and creating a new custom editor manifest.",
        answerHTML: (
          <p>
            Use the <strong>Custom Editor</strong> workflow from the Installs
            view. The{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/editors/custom-editors/"
            >
              custom Godot builds guide
            </Link>
            {" "}covers registering an existing manifest and creating a new
            custom editor manifest.
          </p>
        ),
        featured: false,
      },
      {
        question: "Can I manage multiple Godot versions with the launcher?",
        answer:
          "Yes. Godot Launcher can download and manage multiple Godot versions, and each project can use a compatible installed editor.",
        answerHTML: (
          <p>
            Yes. Godot Launcher can{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/getting-started/install-editor/"
            >
              download and manage multiple Godot versions
            </Link>
            {", "}
            and each project can be{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/editors/change-project-editor/"
            >
              assigned a compatible editor
            </Link>
            {"."}
          </p>
        ),
        featured: true,
        featureOrder: 1,
      },
      {
        question: "Which code editors does Godot Launcher support?",
        answer:
          "Godot Launcher supports Visual Studio Code and VSCodium on Windows, macOS, and Linux. The launcher can find either editor, configure Godot to open scripts in it, and set a default for new projects. You can also choose a different editor for a project when needed.",
        answerHTML: (
          <>
            <p>
              Godot Launcher supports{" "}
              <Link
                style={{ display: "contents" }}
                href="https://docs.godotlauncher.org/integrations/vscode-setup-for-godot/"
              >
                Visual Studio Code
              </Link>
              {", "}
              <Link
                style={{ display: "contents" }}
                href="https://docs.godotlauncher.org/integrations/vscodium-setup-for-godot/"
              >
                VSCodium
              </Link>
              {" on Windows, macOS, and Linux. It can find either editor and configure Godot to open scripts in it."}
            </p>
            <p>
              <Link
                style={{ display: "contents" }}
                href="https://docs.godotlauncher.org/settings/code-editors/"
              >
                Code Editor Settings
              </Link>
              {" lets you set a default for new projects."}
              {" You can also choose a different editor for a project when needed."}
            </p>
          </>
        ),
        featured: true,
        featureOrder: 3,
      },
      {
        question: "Can Godot Launcher initialize Git?",
        answer:
          "Yes. Godot Launcher can handle Git setup for new Godot projects, including Godot ignore rules, a main branch, and an initial commit. If Git needs your name and email, add them or skip the first commit. For existing projects, Project Settings initializes Git without adding setup files or creating a commit.",
        answerHTML: (
          <>
            <p>
              Yes. Godot Launcher can handle Git setup for new Godot projects,
              including Godot ignore rules, a <code>main</code> branch, and an
              initial commit. If Git needs your name and email, add them or
              skip the first commit.
            </p>
            <p>
              For existing projects, <strong>Project Settings</strong>
              {" "}initializes Git without adding setup files or creating a
              commit. See{" "}
              <Link
                style={{ display: "contents" }}
                href="https://docs.godotlauncher.org/integrations/using-git-with-godot-launcher/"
              >
                Using Git With Godot Launcher
              </Link>
              {" "}for both workflows.
            </p>
          </>
        ),
        featured: true,
        featureOrder: 4,
      },
      {
        question: "Does each project keep separate Godot editor settings?",
        answer:
          "Yes. Each project keeps its own Godot editor settings, so changes in one project do not affect another.",
        answerHTML: (
          <p>
            Yes. Each project keeps its own{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/editors/editor-settings/"
            >
              Godot editor settings
            </Link>
            {", "}so changes in one project do not affect another.
          </p>
        ),
      },
      {
        question: "Can I use Godot Launcher with existing projects?",
        answer:
          "Yes. You can add an existing Godot project and choose which editor should be used for it.",
        answerHTML: (
          <p>
            Yes. You can{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/getting-started/add-existing-project/"
            >
              add an existing Godot project
            </Link>
            {" "}and choose which editor should be used for it.
          </p>
        ),
        featured: false,
      },
      {
        question: "Can I import or export project editor settings?",
        answer:
          "Yes. The editor settings guide covers importing, exporting, and where project editor settings are stored.",
        answerHTML: (
          <p>
            Yes. The{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/editors/editor-settings/"
            >
              editor settings guide
            </Link>{" "}
            covers importing, exporting, and where project editor settings are
            stored.
          </p>
        ),
      },
      {
        question: "Will the launcher update itself automatically?",
        answer:
          "Godot Launcher can check for updates automatically, but it does not download them automatically. When an update is available, you choose when to download and restart. Some platforms or package types require a manual update.",
        answerHTML: (
          <p>
            Godot Launcher can{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/settings/updates/"
            >
              check for updates automatically
            </Link>
            {", but it does not download them automatically. When an update is "}
            available, you choose when to download and restart. Some platforms
            or package types require a manual update.
          </p>
        ),
      },
    ],
  },
  {
    title: "Installation & Setup",
    questions: [
      {
        question: "How do I install Godot Launcher?",
        answer:
          "Download the latest release from the Godot Launcher download page or from GitHub releases. The installation guide covers platform-specific setup steps.",
        answerHTML: (
          <p>
            Download the latest release from the{" "}
            <Link
              style={{ display: "contents" }}
              to="/download"
              title="Visit the download page"
            >
              Godot Launcher download page
            </Link>{" "}
            or from the{" "}
            <Link
              style={{ display: "contents" }}
              href="https://github.com/godotlauncher/launcher/releases"
              target="_blank"
              title="View GitHub releases"
            >
              GitHub releases
            </Link>
            {". "}
            The{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/getting-started/installation/"
            >
              installation guide
            </Link>
            {" "}covers platform-specific setup steps.
          </p>
        ),
      },
      {
        question: "Can I install Godot Launcher via winget?",
        answer:
          'Yes. On Windows, use winget install GodotLauncher.Launcher or winget install "Godot Launcher" to install the latest release, and winget upgrade GodotLauncher.Launcher to upgrade it.',
        answerHTML: (
          <WingetCommandList
            commands={[
              {
                label: "Install (Package Identifier)",
                command: "winget install GodotLauncher.Launcher",
              },
              {
                label: "Install (Display Name)",
                command: 'winget install "Godot Launcher"',
              },
              {
                label: "Upgrade to Latest",
                command: "winget upgrade GodotLauncher.Launcher",
              },
            ]}
            intro="Yes. On Windows you can run these commands from PowerShell or Command Prompt:"
            hint={
              <>
                These commands install the same Windows release published on the{" "}
                <Link
                  style={{ display: "contents" }}
                  to="/download"
                  title="Godot Launcher downloads"
                >
                  download page
                </Link>
                {". "}
                The{" "}
                <Link
                  style={{ display: "contents" }}
                  href="https://docs.godotlauncher.org/platform/windows-winget/"
                >
                  winget guide
                </Link>
                {" "}has troubleshooting steps and update details.
              </>
            }
          />
        ),
      },
      {
        question:
          "How do I know I am downloading an official Godot Launcher build?",
        answer:
          "Use the Godot Launcher download page or the GitHub releases page. Windows builds are signed through SignPath. Free code signing provided by SignPath.io, certificate by SignPath Foundation. macOS builds are signed with a Developer ID Application certificate issued to Mario DEBONO and notarized by Apple. Signing for Linux .deb and .rpm packages is planned.",
        answerHTML: (
          <>
            <p>
              Use the{" "}
              <Link
                style={{ display: "contents" }}
                to="/download"
                title="Godot Launcher downloads"
              >
                Godot Launcher download page
              </Link>{" "}
              or the{" "}
              <Link
                style={{ display: "contents" }}
                href="https://github.com/godotlauncher/launcher/releases"
                target="_blank"
                title="Godot Launcher GitHub releases"
              >
                GitHub releases page
              </Link>
              {" "}to get builds published by the Godot Launcher project.
            </p>
            <p>
              Windows builds are signed through SignPath. Free code signing
              provided by{" "}
              <Link
                style={{ display: "contents" }}
                href="https://signpath.io/"
              >
                SignPath.io
              </Link>
              {", "}certificate by{" "}
              <Link
                style={{ display: "contents" }}
                href="https://signpath.org/"
              >
                SignPath Foundation
              </Link>
              {". "}macOS builds are signed with a Developer ID Application
              certificate issued to Mario DEBONO and notarized by Apple. Signing
              for Linux .deb and .rpm packages is planned.
            </p>
          </>
        ),
      },
      {
        question: "Do I need to install Godot separately?",
        answer:
          "No. Godot Launcher can download and manage Godot versions for you. You can also register custom Godot builds when needed.",
        answerHTML: (
          <p>
            No. Godot Launcher can{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/getting-started/install-editor/"
            >
              download and manage Godot versions
            </Link>
            {" "}for you. You can also register{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/editors/custom-editors/"
            >
              custom Godot builds
            </Link>
            {" "}when needed.
          </p>
        ),
        featureOrder: 5,
        featured: true,
      },
    ],
  },
  {
    title: "Troubleshooting & Support",
    questions: [
      {
        question: "I found a bug or need help. Where can I report it?",
        answer:
          "You can report bugs or feature requests on our GitHub Issues page. Before submitting a new issue, check if it has already been reported.",
        answerHTML: (
          <p>
            You can report bugs or feature requests on our{" "}
            <Link
              style={{ display: "contents" }}
              href="https://github.com/godotlauncher/launcher/issues/new/choose"
              target="_blank"
              title="Report an issue on GitHub"
            >
              GitHub Issues
            </Link>{" "}
            page. Before submitting a new issue, check if it has already been
            reported.
          </p>
        ),
      },
      {
        question: "Can I contribute to the project?",
        answer:
          "Yes. Contributions are welcome. Start with the CONTRIBUTING.md file and the contributing documentation before opening a pull request.",
        answerHTML: (
          <p>
            Yes. Contributions are welcome. Start with the{" "}
            <Link
              style={{ display: "contents" }}
              href="https://github.com/godotlauncher/launcher/blob/main/CONTRIBUTING.md"
              target="_blank"
              title="Read the CONTRIBUTING.md file"
            >
              CONTRIBUTING.md
            </Link>{" "}
            file and the{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/contributing/"
            >
              contributing documentation
            </Link>{" "}
            before opening a pull request.
          </p>
        ),
      },
    ],
  },
];
