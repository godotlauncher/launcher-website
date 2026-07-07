import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import ThemedImage from '@theme/ThemedImage';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  sources: ComponentProps<typeof ThemedImage>['sources'];
  alt?: string;
  size: { width: number, height: number; };
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Manage Godot Versions',
    sources: {
      light: '/img/features/Effortless_Godot_Version_Management_Current_Light.png',
      dark: '/img/features/Effortless_Godot_Version_Management_Current_Dark.png',
    },
    size: { width: 410, height: 320 },
    description: (
      <>
        Download official Godot releases and choose the right editor for each project.
      </>
    ),
  },
  {
    title: 'Use Custom Godot Builds',
    sources: {
      light: '/img/features/Effortless_Godot_Version_Management_Custom_Light.png',
      dark: '/img/features/Effortless_Godot_Version_Management_Custom_Dark.png',
    },
    size: { width: 410, height: 320 },
    description: (
      <>
        Register locally compiled or team-distributed Godot editor builds and use them like official releases.
      </>
    ),
  },
  {
    title: 'Start Projects Ready',
    sources: {
      light: '/img/features/Quick_Project_Setup_Light.webp',
      dark: '/img/features/Quick_Project_Setup_Dark.webp',
    },
    size: { width: 420, height: 320 },
    description: (
      <>
        Create Godot projects with Git and VS Code configuration already prepared.
      </>
    ),
  },
  {
    title: 'Keep Project Settings Separate',
    sources: {
      light: '/img/features/Per_Project_Editor_Settings_Light.webp',
      dark: '/img/features/Per_Project_Editor_Settings_Dark.webp',
    },
    size: { width: 410, height: 320 },
    description: (
      <>
        Keep editor settings isolated per project, so switching projects does not overwrite your setup.
      </>
    ),
  },
  {
    title: 'Work Across Platforms',
    sources: {
      light: '/img/features/Cross_Platform.webp',
      dark: '/img/features/Cross_Platform.webp',
    },
    size: { width: 410, height: 320 },
    description: (
      <>
        Download and launch Godot on <strong>Windows, macOS, and Linux</strong>.
      </>
    ),
  },
  {
    title: 'Open Recent Projects Quickly',
    sources: {
      light: '/img/features/Quick_Edit_From_System_Tray_Light.webp',
      dark: '/img/features/Quick_Edit_From_System_Tray_Dark.webp',
    },
    size: { width: 410, height: 320 },
    description: (
      <>
        Reopen recent projects from the system tray without browsing folders.
      </>
    ),
  },
  {
    title: 'Stay Current',
    sources: {
      light: '/img/features/Automatic_Updates_Light.webp',
      dark: '/img/features/Automatic_Updates_Dark.webp',
    },
    size: { width: 410, height: 320 },
    description: (
      <>
        Get notified when new Godot Launcher updates are available.
      </>
    ),
  },
];

function Feature({ title, description, sources, alt, size }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureImageContainer}>
        <ThemedImage
          alt={alt ?? title}
          className={styles.featureImage}
          height={size.height}
          sources={sources}
          width={size.width}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>

      <section id="features" className={styles.features}>
        <div className="container">
          <div className={clsx('row', styles.featureRow)}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
