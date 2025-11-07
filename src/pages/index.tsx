import type { ReactNode } from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import { ProjectViewScreenShot } from "../components/ProjectViewScreenShot";
import { HomepageHeader } from "../components/Header";
import { CTADownload } from "../components/CTADownload";
import FAQStructuredData from "../components/FAQStructuredData";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="The Companion App for Godot Engine"
      description={siteConfig.tagline}
    >
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Godot Launcher",
            operatingSystem: "Windows, macOS, Linux",
            applicationCategory: "DeveloperApplication",
            description: `Godot Launcher is a cross-platform, open-source tool that helps
              you and download, manage, and organize multiple versions of the Godot
              Engine. Whether you're developing 2D or 3D games, this tool
              streamlines your workflow with powerful features like Git
              integration, system tray access, and per-project settings.`,
            url: "https://godotlauncher.org",
            image:
              "https://godotlauncher.org/img/Project_views/mac_screen_project_view_dark.webp",
            author: {
              "@type": "Organization",
              name: "Godot Launcher Project",
              url: "https://github.com/godotlauncher",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            softwareVersion: "latest",
            downloadUrl: "https://godotlauncher.org/download",
            license:
              "https://github.com/godotlauncher/launcher/blob/main/LICENSE.txt",
          })}
        </script>
      </Head>
      <HomepageHeader />

      <main>
        <div className="container">
          <div className="secondary-tagline">
            <h2>What is Godot Launcher?</h2>
            <p>
              Godot Launcher is a cross-platform, open-source tool that helps
              you and download, manage, and organize multiple versions of the
              Godot Engine. Whether you're developing 2D or 3D games, this tool
              streamlines your workflow with powerful features like Git
              integration, system tray access, and per-project settings.
            </p>
          </div>

          <ProjectViewScreenShot />

          <div className="secondary-tagline ">
            <Heading as="h2">Why use Godot Launcher?</Heading>
            <p>
              Godot Launcher is a companion app for Godot Engine. It simplifies
              the Godot download experience by allowing you to install, and
              switch between multiple Godot versions without hassle.
            </p>
          </div>
          <HomepageFeatures />
          <CTADownload />
          <div className="container">
            <FAQStructuredData
              sections={[
                {
                  title: "FAQs",
                  questions: [
                    {
                      question:
                        "How is Godot Launcher different from downloading Godot manually?",
                      answer:
                        "Godot Launcher simplifies the process of downloading and managing different versions of Godot, directly from the launcher (see: https://docs.godotlauncher.org/getting-started/install-editor/) making it easier to switch between them without manual installation.",
                      answerHTML: (
                        <>
                          Godot Launcher simplifies the process of downloading
                          and managing different versions of Godot, directly
                          from the launcher (see:{" "}
                          <Link style={{ display: 'contents' }} href="https://docs.godotlauncher.org/getting-started/install-editor/">
                            Installing an Editor
                          </Link>
                          ) making it easier to switch between them without
                          manual installation.
                        </>
                      ),
                    },
                    {
                      question:
                        "Can I use Godot Launcher with existing projects?",
                      answer:
                        "Absolutely. Just use the 'Add' button to bring in any existing Godot project and assign it a specific engine version.",
                      answerHTML: (
                        <>
                          Absolutely. Just use the 'Add' button to bring in any
                          existing Godot project and assign it a specific engine
                          version.
                        </>
                      ),
                    },
                    {
                      question: "Do I need to install Godot separately?",
                      answer:
                        "No, Godot Launcher lets you download and manage Godot versions right from the launcher — no separate installation required.",
                      answerHTML: (
                        <>
                          No, Godot Launcher lets you download and manage Godot
                          versions right from the launcher — no separate
                          installation required.
                        </>
                      ),
                    },
                    {
                      question: "Does it work offline?",
                      answer:
                        "Yes, once you have downloaded the Godot versions you need, you can use them offline.",
                      answerHTML: (
                        <>
                          Yes, once you have downloaded the Godot versions you
                          need, you can use them offline.
                        </>
                      ),
                    },
                  ],
                },
              ]}
            />
            <div className="margin-bottom--lg">
              <Link
                to="/faq"
                className="button button--secondary button--outline"
              >
                See all FAQs
              </Link>
            </div>
          </div>
          <CTADownload />
        </div>
      </main>
    </Layout>
  );
}
