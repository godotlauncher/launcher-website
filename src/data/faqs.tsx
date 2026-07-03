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
          "Godot Launcher is an open-source tool designed to manage Godot projects efficiently. It provides quick project setup, version management, system tray access, and automatic updates.",
      },
      {
        question:
          "Is Godot Launcher affiliated with Godot Engine or the Godot Foundation?",
        answer:
          "No. Godot Launcher is an independent community project and is not affiliated with, endorsed by, or sponsored by the Godot Engine or the Godot Foundation.",
        featureOrder: 1,
        featured: false,
      },
      {
        question: "Is Godot Launcher free?",
        answer:
          "Yes! Godot Launcher is completely free and open-source under the MIT license. You can use, modify, and contribute to it.",
        answerHTML: (
          <p>
            Yes! Godot Launcher is completely free and open-source under the{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/license/"
              title="View license"
            >
              MIT license
            </Link>
            . You can use, modify, and contribute to it.
          </p>
        ),
        featured: true,
        featureOrder: 0,
      },
      {
        question:
          "How is Godot Launcher different from downloading Godot manually?",
        answer:
          "Godot Launcher simplifies the process of downloading and managing different versions of Godot directly from the launcher, making it easier to switch between them without manual installation. Godot Launcher also manages registered custom-built Godot editors and offers additional features like Git integration, Visual Studio Code setup, system tray access, and per-project settings.",
        answerHTML: (
          <>
            <p>
              Godot Launcher simplifies the process of downloading and managing
              different versions of Godot directly from the launcher, making it
              easier to switch between them without manual installation.
            </p>
            <p>
              Godot Launcher also manages registered{" "}
              <Link
                style={{ display: "contents" }}
                href="https://docs.godotlauncher.org/guides/custom-editors/"
              >
                custom-built Godot editors
              </Link>
              {" "}and offers additional features like Git integration, Visual
              Studio Code setup, system tray access, and per-project settings.
            </p>
          </>
        ),
        featureOrder: 2,
        featured: true,
      },
      {
        question: "Does it work offline?",
        answer:
          "Yes, once you have downloaded the Godot versions you need, you can use them offline.",
        featureOrder: 3,
        featured: true,
      },
      {
        question: "Which platforms does it support?",
        answer:
          "Godot Launcher is cross-platform and supports Windows, macOS, and Linux.",
      },
      {
        question: "Can I use Godot 3 with the launcher?",
        answer:
          "Godot Launcher currently supports Godot Engine 4 and newer. Support for Godot 3 was removed due to low usage. However, if you require Godot 3 support, you can discuss the possibility of reintroducing it in the #launcher-discussions channel on the official community Discord server.",
        answerHTML: (
          <p>
            Godot Launcher currently supports Godot Engine 4 and newer. Support
            for Godot 3 was removed due to low usage. However, if you require
            Godot 3 support, you can discuss the possibility of reintroducing it
            in the <strong>#launcher-discussions</strong> channel on the
            official{" "}
            <Link
              style={{ display: "contents" }}
              href="https://discord.gg/Ju9jkFJGvz"
              target="_blank"
              title="Join the official Discord server"
            >
              Discord server
            </Link>
            .
          </p>
        ),
      },
    ],
  },
  {
    title: "Features & Functionality",
    questions: [
      {
        question: "Can I use custom-built Godot editors with Godot Launcher?",
        answer:
          "Yes. Register a custom-built Godot editor from the Installs view, or create a manifest there if you do not already have one. Once registered, the custom-built Godot editor can be selected for projects like any other editor.",
        answerHTML: (
          <p>
            Yes. Register a{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/guides/custom-editors/"
            >
              custom-built Godot editor
            </Link>
            {" "}from the Installs view, or create a manifest there if you do not
            already have one. Once registered, the custom-built Godot editor can
            be selected for projects like any other editor.
          </p>
        ),
      },
      {
        question: "How do I add a custom-built Godot editor?",
        answer:
          "Open the Installs view, choose Custom Editor, and register your custom-built Godot editor. If the editor folder does not already include a Godot Launcher manifest, the launcher can create one for you and register it afterward.",
        answerHTML: (
          <p>
            Open the <strong>Installs</strong> view, choose{" "}
            <strong>Custom Editor</strong>, and register your custom-built Godot
            editor. If the editor folder does not already include a Godot
            Launcher manifest, the launcher can create one for you and register
            it afterward. The{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/guides/custom-editors/"
            >
              custom-built Godot editor workflow
            </Link>
            {" "}covers both options.
          </p>
        ),
        featured: true,
        featureOrder: 1,
      },
      {
        question: "Can I manage multiple Godot versions with the launcher?",
        answer:
          "Godot Launcher allows you to download and switch between different Godot versions seamlessly. Each project can be assigned a specific Godot version, ensuring compatibility and flexibility.",
        answerHTML: (
          <p>
            Godot Launcher allows you to{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/getting-started/install-editor/"
            >
              download and switch between different Godot versions
            </Link>{" "}
            seamlessly. Each project can be{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/guides/change-project-editor/"
            >
              assigned a specific Godot version
            </Link>
            , ensuring compatibility and flexibility.
          </p>
        ),
      },
      {
        question: "Does Godot Launcher support Git, and how does it work?",
        answer:
          "Yes! Godot Launcher lets you choose to automatically initialize Git when setting up a new project, including an initial commit for easy version control. Note: Git must be installed on your system for this feature to work.",
        answerHTML: (
          <p>
            Yes! Godot Launcher lets you choose to{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/guides/using-git-with-godot-launcher/"
            >
              automatically initialize Git
            </Link>{" "}
            when setting up a new project, including an initial commit for easy
            version control. Note:{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/guides/install-git/"
            >
              Git must be installed
            </Link>
            {" "}on your system for this feature to work.
          </p>
        ),
      },
      {
        question: "Can I use VSCode with Godot Launcher?",
        answer:
          "Yes! Godot Launcher lets you choose to automatically configure VS Code paths and settings, making it easier to use for development without manual setup. Note: VS Code must be installed on your system for this feature to work. It also includes recommended extensions for VS Code to work with Godot development, including GDScript syntax highlighting.",
        answerHTML: (
          <p>
            Yes! Godot Launcher lets you choose to automatically{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/guides/vscode-setup-for-godot/"
            >
              configure VS Code paths and settings
            </Link>
            , making it easier to use for development without manual setup.
            Note: VS Code must be installed on your system for this feature to
            work. It also includes recommended extensions for VS Code to work
            with Godot development, including GDScript syntax highlighting.
          </p>
        ),
      },
      {
        question:
          "How does the launcher handle project settings and configurations?",
        answer:
          "Each project maintains dedicated settings, preventing conflicts between different projects. This ensures that project-specific configurations remain isolated. Godot Launcher achieves this by running Godot Editor in Self-Contained mode: Windows and macOS use a copy of the selected Godot Editor version, while Linux uses a symbolic link to the editor.",
        answerHTML: (
          <p>
            Each project maintains{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/guides/editor-settings/"
            >
              dedicated settings
            </Link>{" "}
            to prevent conflicts between different projects. Godot Launcher
            achieves this by running Godot Editor in Self-Contained mode:
            Windows and macOS use a copy of the selected Godot Editor version,
            while Linux uses a{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/guides/windows-symlink/"
            >
              symbolic link
            </Link>
            {" "}to the editor.
          </p>
        ),
      },
      {
        question: "Can I use Godot Launcher with existing projects?",
        answer:
          "Absolutely. Just use the Add button to bring in any existing Godot project and assign it a specific engine version.",
        answerHTML: (
          <p>
            Absolutely. Just use the{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/getting-started/add-existing-project/"
            >
              Add button
            </Link>
            {" "}to bring in any existing Godot project and assign it a specific
            engine version.
          </p>
        ),
        featureOrder: 4,
        featured: true,
      },
      {
        question: "Where can I find my project settings?",
        answer:
          "Godot Launcher provides an export and import project settings feature, available in the project view. This allows you to easily back up or transfer project-specific configurations. There is also a quick access button to open the project settings folder in your file manager.",
        answerHTML: (
          <p>
            Godot Launcher provides an{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/guides/editor-settings/"
            >
              export and import project settings feature
            </Link>
            , available in the project view. This allows you to easily back up
            or transfer project-specific configurations. There is also a quick
            access button to open the project settings folder in your file
            manager.
          </p>
        ),
      },
      {
        question: "Will the launcher update itself automatically?",
        answer:
          "Yes, automatic updates ensure that you always have the latest features and bug fixes without needing to manually reinstall the launcher.",
        answerHTML: (
          <p>
            Yes,{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/guides/manage-launcher-updates/"
            >
              automatic updates
            </Link>
            {" "}ensure that you always have the latest features and bug fixes
            without needing to manually reinstall the launcher.
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
          "You can download the latest release from the official website or from the GitHub releases page.",
        answerHTML: (
          <p>
            You can download the latest release from the official{" "}
            <Link
              style={{ display: "contents" }}
              to="/download"
              title="Visit the download page"
            >
              website
            </Link>{" "}
            or from the{" "}
            <Link
              style={{ display: "contents" }}
              href="https://github.com/godotlauncher/launcher/releases"
              target="_blank"
              title="View GitHub releases"
            >
              GitHub releases
            </Link>{" "}
            page. The{" "}
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
          'Yes. On Windows, use winget install GodotLauncher.Launcher or winget install "godot Launcher" to install the latest release, and winget upgrade GodotLauncher.Launcher to stay up to date.',
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
                These commands install the same signed binaries we ship on the{" "}
                <Link
                  style={{ display: "contents" }}
                  to="/download"
                  title="Godot Launcher downloads"
                >
                  download page
                </Link>{" "}
                and are kept current with every release. The{" "}
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
        question: "Do I need to install Godot separately?",
        answer:
          "No, Godot Launcher can download and manage Godot versions for you.",
        answerHTML: (
          <p>
            No, Godot Launcher can{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/getting-started/install-editor/"
            >
              download and manage Godot versions
            </Link>
            {" "}for you.
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
          "Absolutely! Contributions are welcome. Check the CONTRIBUTING.md at https://github.com/godotlauncher/launcher/blob/main/CONTRIBUTING.md file for guidelines. There is also detailed contributing documentation at https://docs.godotlauncher.org/contributing/.",
        answerHTML: (
          <p>
            Absolutely! Contributions are welcome. Check the{" "}
            <Link
              style={{ display: "contents" }}
              href="https://github.com/godotlauncher/launcher/blob/main/CONTRIBUTING.md"
              target="_blank"
              title="Read the CONTRIBUTING.md file"
            >
              CONTRIBUTING.md
            </Link>{" "}
            file for guidelines. There is also detailed{" "}
            <Link
              style={{ display: "contents" }}
              href="https://docs.godotlauncher.org/contributing/"
            >
              contributing documentation
            </Link>
            .
          </p>
        ),
      },
    ],
  },
];
