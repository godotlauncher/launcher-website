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
          <Heading as="h2">Why use Godot Launcher?</Heading>
          <p>Godot Launcher is a companion app for Godot Engine. It simplifies the Godot download experience by allowing you to install, and switch between multiple Godot versions without hassle.</p>
        </div>
        <HomepageFeatures />
        <CTADownload />
      </main>

    </Layout >
  );
}
