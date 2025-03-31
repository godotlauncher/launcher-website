import type { ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


import { ProjectViewScreenShot } from '../components/ProjectViewScreenShot';
import { HomepageHeader } from "../components/Header";
import { CTADownload } from "../components/CTADownload";


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
          <Heading as="h2">Launch Godot Projects Without the Overhead</Heading>
          <p>A streamlined tool designed to help you focus on creating incredible Godot projects instead of wrestling with setup and configuration.</p>
        </div>
        <HomepageFeatures />
        <CTADownload />
      </main>

    </Layout >
  );
}
