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
      description="Godot Launcher helps you manage Godot versions, custom Godot builds, project setup, VS Code, Git, and per-project editor settings in one open source app."
    >
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Godot Launcher",
            operatingSystem: "Windows, macOS, Linux",
            applicationCategory: "DeveloperApplication",
            description: `Godot Launcher is a cross-platform, open source companion app
              for Godot Engine that helps you manage Godot versions, register and use
              custom Godot builds, set up projects, and keep per-project editor
              settings organized.`,
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
          <ProjectViewScreenShot />

          <div className="secondary-tagline ">
            <Heading as="h2">Manage the setup around Godot</Heading>
            <p>
              Godot Launcher keeps official Godot releases, custom Godot builds,
              project setup, VS Code, Git, and per-project editor settings in
              one place.
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
