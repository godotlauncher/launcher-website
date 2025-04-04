import type { ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


import { ProjectViewScreenShot } from '../components/ProjectViewScreenShot';
import { HomepageHeader } from "../components/Header";
import { CTADownload } from "../components/CTADownload";
import FAQStructuredData from "../components/FAQStructuredData";
import Link from "@docusaurus/Link";


export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();


  return (
    <Layout

      title='Godot Launcher'
      description={siteConfig.tagline}>

      <HomepageHeader />

      <main>
        <ProjectViewScreenShot />
        <div className="container secondary-tagline ">
          <Heading as="h2">Why use Godot Launcher?</Heading>
          <p>Godot Launcher is a companion app for Godot Engine. It simplifies the Godot download experience by allowing you to install, and switch between multiple Godot versions without hassle.</p>
        </div>
        <HomepageFeatures />
        <CTADownload />
        <div className="container">

          <FAQStructuredData
            sections={[
              {
                title: 'FAQs', questions: [
                  {
                    question: "How is Godot Launcher different from downloading Godot manually?",
                    answer: "Godot Launcher simplifies the process of downloading and managing different versions of Godot, directly from the launcher (see: https://docs.godotlauncher.org/getting-started/install-editor/) making it easier to switch between them without manual installation.",
                    answerHTML: (
                      <>Godot Launcher simplifies the process of downloading and managing different versions of Godot, directly from the launcher (see: <Link href="https://docs.godotlauncher.org/getting-started/install-editor/">Installing an Editor</Link>) making it easier to switch between them without manual installation.</>
                    )
                  },
                  {
                    question: "Can I use Godot Launcher with existing projects?",
                    answer: "Absolutely. Just use the 'Add' button to bring in any existing Godot project and assign it a specific engine version.",
                    answerHTML: (
                      <>Absolutely. Just use the 'Add' button to bring in any existing Godot project and assign it a specific engine version.</>
                    )
                  },
                  {
                    question: "Do I need to install Godot separately?",
                    answer: "No, Godot Launcher lets you download and manage Godot versions right from the launcher — no separate installation required.",
                    answerHTML: (
                      <>No, Godot Launcher lets you download and manage Godot versions right from the launcher — no separate installation required.</>
                    )

                  },
                  {
                    question: "Does it work offline?",
                    answer: "Yes, once you have downloaded the Godot versions you need, you can use them offline.",
                    answerHTML: (
                      <>Yes, once you have downloaded the Godot versions you need, you can use them offline.</>
                    )
                  },
                ]
              },
            ]}
          />
          <div className="margin-bottom--lg">
            <Link to="/faq" className="button button--secondary button--outline">See all FAQs</Link>
          </div>
        </div>
        <CTADownload />
      </main>

    </Layout >
  );
}
