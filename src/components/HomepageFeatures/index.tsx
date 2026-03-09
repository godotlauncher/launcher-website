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
    title: 'Effortless Godot Version Management',
    sources: {
      light: '/img/features/Effortless_Godot_Version_Management_Light.webp',
      dark: '/img/features/Effortless_Godot_Version_Management_Dark.webp',
    },
    size: { width: 300, height: 234 },
    description: (
      <>
        Easily <strong>download and manage multiple Godot Engine versions</strong> in one place. Switch between stable releases and experimental builds with just a few clicks — no manual installs needed.
      </>
    ),
  },
  {
    title: 'Cross-Platform Godot Downloads',
    sources: {
      light: '/img/features/Cross_Platform_Light.webp',
      dark: '/img/features/Cross_Platform_Dark.webp',
    },
    size: { width: 300, height: 234 },
    description: (
      <>
        Download and launch Godot on <strong>Windows, macOS, and Linux</strong>. The Launcher works wherever you develop, with full support for all major operating systems.
      </>
    ),
  },
  {
    title: 'Multilingual Experience Out of the Box',
    sources: {
      light: '/img/features/Multilingual_Interface_Light.webp',
      dark: '/img/features/Multilingual_Interface_Dark.webp',
    },
    size: { width: 300, height: 234 },
    description: (
      <>
        Let every teammate feel at home with <strong>automatic language detection and 13+ localised interfaces</strong>. Switch languages anytime and the entire launcher — menus, dialogs, and tray — updates instantly.
      </>
    ),
  },
  {
    title: 'Quick Project Setup with Git & VSCode',
    sources: {
      light: '/img/features/Quick_Project_Setup_Light.webp',
      dark: '/img/features/Quick_Project_Setup_Dark.webp',
    },
    size: { width: 300, height: 234 },
    description: (
      <>
        Start a new Godot project instantly with <strong>Git and VSCode initialized automatically</strong>. Your repo is ready to go with an initial commit — no extra setup required.
      </>
    ),
  },
  {
    title: 'Per-Project Editor Settings',
    sources: {
      light: '/img/features/Per_Project_Editor_Settings_Light.webp',
      dark: '/img/features/Per_Project_Editor_Settings_Dark.webp',
    },
    size: { width: 300, height: 234 },
    description: (
      <>
        Keep your editor preferences isolated per project. Godot Launcher ensures <strong>no conflicting settings</strong>, no matter how many projects you're working on.
      </>
    ),
  },
  {
    title: 'Quick Access from System Tray',
    sources: {
      light: '/img/features/Quick_Edit_From_System_Tray_Light.webp',
      dark: '/img/features/Quick_Edit_From_System_Tray_Dark.webp',
    },
    size: { width: 300, height: 234 },
    description: (
      <>
        Instantly reopen recent projects from the system tray. <strong>No need to relaunch Godot manually</strong> or browse folders — stay in the flow.
      </>
    ),
  },
  {
    title: 'Automatic Updates',
    sources: {
      light: '/img/features/Automatic_Updates_Light.webp',
      dark: '/img/features/Automatic_Updates_Dark.webp',
    },
    size: { width: 300, height: 234 },
    description: (
      <>
        Stay up to date with the latest improvements. The Launcher <strong>notifies you when new versions are available</strong>, so you're always running the best version of Godot.
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
