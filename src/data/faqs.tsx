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
          "Godot Launcher is a free, open source companion app for Godot Engine. It helps manage Godot versions, custom Godot builds, projects, VS Code, Git, and per-project editor settings.",
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
        featureOrder: 5,
      },
      {
        question:
          "How is Godot Launcher different from downloading Godot manually?",
        answer:
          "Manual downloads give you the editor files. Godot Launcher keeps your Godot versions, custom Godot builds, project editor choices, VS Code setup, Git setup, and per-project editor settings organized in one place.",
        answerHTML: (
          <>
            <p>
              Manual downloads give you the editor files. Godot Launcher keeps
              your Godot versions, project editor choices, and per-project editor
              settings organized in one place.
            </p>
            <p>
              It can also register{" "}
              <Link
                style={{ display: "contents" }}
                href="https://docs.godotlauncher.org/guides/custom-editors/"
              >
                custom Godot builds
              </Link>
              {", "}configure VS Code project files, and initialize Git when you
              create a project.
            </p>
          </>
        ),
        featured: false,
      },
      {
        question: "Does it work offline?",
        answer:
          "Yes. After the Godot versions you need are downloaded, you can launch those local editors without downloading them again.",
        featureOrder: 3,
      },
      {
        question: "Which platforms does it support?",
        answer:
          "Godot Launcher is cross-platform and supports Windows, macOS, and Linux.",
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
              href="https://docs.godotlauncher.org/guides/custom-editors/"
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
              href="https://docs.godotlauncher.org/guides/custom-editors/"
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
          "Yes. Godot Launcher can download and manage multiple Godot versions, and each project can be assigned a specific editor.",
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
              href="https://docs.godotlauncher.org/guides/change-project-editor/"
            >
              assigned a specific editor
            </Link>
            {"."}
          </p>
        ),
        featured: true,
        featureOrder: 1,
      },
      {
        question: "Can Godot Launcher help with VS Code and Git setup?",
        answer:
          "Yes. When VS Code and Git are installed, Godot Launcher can configure project-level VS Code settings, recommend Godot extensions, and initialize Git for new projects.",
        answerHTML: (
          <p>
            Yes. When VS Code and Git are installed, Godot Launcher can{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/guides/vscode-setup-for-godot/"
            >
              configure project-level VS Code settings
            </Link>
            {", recommend Godot extensions, and "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/guides/using-git-with-godot-launcher/"
            >
              initialize Git for new projects
            </Link>
            {"."}
          </p>
        ),
        featured: true,
        featureOrder: 3,
      },
      {
        question:
          "How does the launcher handle project settings and configurations?",
        answer:
          "Godot Launcher keeps editor settings per project so different projects can maintain separate editor preferences, including GDScript language server and debugger port settings. This is useful when opening related projects, such as a client and server, side by side.",
        answerHTML: (
          <>
            <p>
              Godot Launcher keeps{" "}
              <Link
                style={{ display: "contents" }}
                href="https://docs.godotlauncher.org/guides/editor-settings/"
              >
                editor settings per project
              </Link>{" "}
              so different projects can maintain separate editor preferences,
              including GDScript language server and debugger port settings.
            </p>
            <p>
              This is useful when opening related projects, such as a client and
              server, side by side.
            </p>
          </>
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
              href="https://docs.godotlauncher.org/guides/editor-settings/"
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
          "Godot Launcher can check for updates and guide you through supported update flows. Some platforms or package types may require manual updates.",
        answerHTML: (
          <p>
            Godot Launcher can{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/guides/manage-launcher-updates/"
            >
              check for updates and guide you through supported update flows
            </Link>
            {". "}
            Some platforms or package types may require manual updates.
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
                  href="https://docs.godotlauncher.org/guides/windows-winget/"
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
              href="https://docs.godotlauncher.org/guides/custom-editors/"
            >
              custom Godot builds
            </Link>
            {" "}when needed.
          </p>
        ),
        featureOrder: 4,
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
