import Layout from "@theme/Layout";
import { ReactNode } from "react";
import FAQStructuredData from "../../components/FAQStructuredData";
import Link from "@docusaurus/Link";
import { WingetCommandList } from "@site/src/components/WingetCommandList";

export default function Faqs(): ReactNode {
  const general = [
    {
      question: "What is Godot Launcher?",
      answer:
        "Godot Launcher is an open-source tool designed to manage Godot projects efficiently. It provides quick project setup, version management, system tray access, and automatic updates.",
    },
    {
      question: "Is Godot Launcher free?",
      answer:
        "Yes! Godot Launcher is completely free and open-source under the MIT license. You can use, modify, and contribute to it.",
    },
    {
      question:
        "How is Godot Launcher different from downloading Godot manually?",
      answer:
        "Godot Launcher simplifies the process of downloading and managing different versions of Godot, directly from the launcher (see: https://docs.godotlauncher.org/getting-started/install-editor/) making it easier to switch between them without manual installation.",
      answerHTML: (
        <>
          Godot Launcher simplifies the process of downloading and managing
          different versions of Godot, directly from the launcher (see:{' '}
          <Link style={{ display: 'contents' }} href="https://docs.godotlauncher.org/getting-started/install-editor/">
            Installing an Editor
          </Link>
          ) making it easier to switch between them without manual installation.
        </>
      ),
    },
    {
      question: "Does it work offline?",
      answer:
        "Yes, once you have downloaded the Godot versions you need, you can use them offline.",
      answerHTML: (
        <>
          Yes, once you have downloaded the Godot versions you need, you can use
          them offline.
        </>
      ),
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
        <>
          Godot Launcher currently supports Godot Engine 4 and newer. Support
          for Godot 3 was removed due to low usage. However, if you require
          Godot 3 support, you can discuss the possibility of reintroducing it
          in the <strong>#launcher-discussions</strong> channel on the official{" "}
          <Link
            style={{ display: 'contents' }}
            href="https://discord.gg/Ju9jkFJGvz"
            target="_blank"
            title="Join the official Discord server"
          >
            Discord server
          </Link>
          .
        </>
      ),
    },
  ];

  const features = [
    {
      question: "Can I manage multiple Godot versions with the launcher?",
      answer:
        "Godot Launcher allows you to download and switch between different Godot versions seamlessly. Each project can be assigned a specific Godot version, ensuring compatibility and flexibility.",
    },
    {
      question: "Does Godot Launcher support Git, and how does it work?",
      answer:
        "Yes! Godot Launcher lets you choose to automatically initializes Git when setting up a new project, including an initial commit for easy version control. Note: Git must be installed on your system for this feature to work.",
    },
    {
      question: "Can I use VSCode with Godot Launcher?",
      answer:
        "Yes! Godot Launcher lets you choose to automatically configures VSCode paths and settings, making it easier to use for development without manual setup. Note: VSCode must be installed on your system for this feature to work. It also includes recommended extensions for VSCode to work with Godot development, including GDScript syntax highlighting.",
    },
    {
      question:
        "How does the launcher handle project settings and configurations?",
      answer:
        "Each project maintains dedicated settings, preventing conflicts between different projects. This ensures that project-specific configurations remain isolated. Godot Launcher achieves this by running Godot Editor in Self-Contained mode: Windows & macOS: Each project includes a copy of the selected Godot Editor version. Linux: A symbolic link to the editor is used instead. We are working on improving this feature to provide a more seamless experience with symbolic links on all platforms.",
    },
    {
      question: "Can I use Godot Launcher with existing projects?",
      answer:
        "Absolutely. Just use the 'Add' button to bring in any existing Godot project and assign it a specific engine version.",
      answerHTML: (
        <>
          Absolutely. Just use the 'Add' button to bring in any existing Godot
          project and assign it a specific engine version.
        </>
      ),
    },
    {
      question: "Where can I find my project settings?",
      answer:
        "Godot Launcher provides an export and import project settings feature, available in the project view. This allows you to easily back up or transfer project-specific configurations. There is also a quick access button to open the project settings folder in your file manager.",
    },
    {
      question: "Will the launcher update itself automatically?",
      answer:
        "Yes, automatic updates ensure that you always have the latest features and bug fixes without needing to manually reinstall the launcher.",
    },
  ];

  const installation = [
    {
      question: "How do I install Godot Launcher?",
      answer:
        "You can download the latest release from the official website or from the GitHub releases page.",
      answerHTML: (
        <>
          You can download the latest release from the official{" "}
          <Link style={{ display: 'contents' }}
            to="/download" title="Visit the download page">
            website
          </Link>{" "}
          or from the{" "}
          <Link
            style={{ display: 'contents' }}
            href="https://github.com/godotlauncher/launcher/releases"
            target="_blank"
            title="View GitHub releases"
          >
            GitHub releases
          </Link>{" "}
          page.
        </>
      ),
    },
    {
      question: "Can I install Godot Launcher via winget?",
      answer:
        "Yes. On Windows, use winget install GodotLauncher.Launcher or winget install \"godot Launcher\" to install the latest release, and winget upgrade GodotLauncher.Launcher to stay up to date.",
      answerHTML: (
        <WingetCommandList
          commands={[
            {
              label: "Install (Package Identifier)",
              command: "winget install GodotLauncher.Launcher",
            },
            {
              label: "Install (Display Name)",
              command: 'winget install "godot Launcher"',
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
              <Link style={{ display: 'contents' }} to="/download" title="Godot Launcher downloads">
                download page
              </Link>{" "}
              and are kept current with every release.
            </>
          }
        />
      ),
    },
    {
      question: "Do I need to install Godot separately?",
      answer:
        "No, Godot Launcher can download and manage Godot versions for you.",
    },
  ];

  const troubleshooting = [
    {
      question: "I found a bug or need help. Where can I report it?",
      answer:
        "You can report bugs or feature requests on our GitHub Issues page. Before submitting a new issue, check if it has already been reported.",
      answerHTML: (
        <>
          You can report bugs or feature requests on our{" "}
          <Link
            style={{ display: 'contents' }}
            href="https://github.com/godotlauncher/launcher/issues/new/choose"
            target="_blank"
            title="Report an issue on GitHub"
          >
            GitHub Issues
          </Link>{" "}
          page. Before submitting a new issue, check if it has already been
          reported.
        </>
      ),
    },
    {
      question: "Can I contribute to the project?",
      answer:
        "Absolutely! Contributions are welcome. Check the CONTRIBUTING.md at https://github.com/godotlauncher/launcher/blob/main/CONTRIBUTING.md file for guidelines. There is also a detailed page about contributing on http://godotlauncher.org/contributing",
      answerHTML: (
        <>
          Absolutely! Contributions are welcome. Check the{" "}
          <Link
            style={{ display: 'contents' }}
            href="https://github.com/godotlauncher/launcher/blob/main/CONTRIBUTING.md"
            target="_blank"
            title="Read the CONTRIBUTING.md file"
          >
            CONTRIBUTING.md
          </Link>{" "}
          file for guidelines. There is also a detailed{" "}
          <Link style={{ display: 'contents' }} to="/contribute" title="Learn how to contribute">
            page about contributing
          </Link>
        </>
      ),
    },
  ];

  return (
    <Layout
      title="FAQs"
      description="Find answers to frequently asked questions about Godot Launcher, including features, installation, troubleshooting, and more. Learn how this open-source tool simplifies Godot project management."
    >
      <div className="container padding-top--lg padding-bottom-lg">
        <main>
          <h1>Frequently Asked Questions (FAQs)</h1>

          <div className="">
            <FAQStructuredData
              sections={[
                { title: "General Questions", questions: general },
                { title: "Features & Functionality", questions: features },
                { title: "Installation & Setup", questions: installation },
                {
                  title: "Troubleshooting & Support",
                  questions: troubleshooting,
                },
              ]}
            />
          </div>
        </main>
      </div>
    </Layout>
  );
}
