import type { ReactNode } from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import { ProjectViewScreenShot } from "../components/ProjectViewScreenShot";
import { HomepageHeader } from "../components/Header";
import { CTADownload } from "../components/CTADownload";
import FAQStructuredData from "../components/FAQStructuredData";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { faqSections } from "../data/faqs";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  const featuredQuestions = faqSections
    .flatMap((section, sectionIdx) =>
      section.questions.map((question, questionIdx) => ({
        question,
        fallbackOrder: sectionIdx * 100 + questionIdx,
      })),
    )
    .filter(({ question }) => question.featured)
    .sort(
      (a, b) =>
        (a.question.featureOrder ?? a.fallbackOrder) -
        (b.question.featureOrder ?? b.fallbackOrder),
    )
    .map(({ question }) => question);

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
              "https://godotlauncher.org/img/screenshots/screen_projects_view_dark.webp",
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
                  questions: featuredQuestions,
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
