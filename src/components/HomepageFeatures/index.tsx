import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import ThemedImage from '@theme/ThemedImage';
import styles from './styles.module.css';
import FeatureAnimation from './feature-animation.component';

type FeatureItem = {
  title: string;
  sources: ComponentProps<typeof ThemedImage>['sources'];
  alt?: string;
  videoSources?: { light: string; dark: string };
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
    title: "Choose your terminal's Godot version",
    sources: {
      light: '/img/animations/godot-cli/godot-cli-poster_light.webp',
      dark: '/img/animations/godot-cli/godot-cli-poster_dark.webp',
    },
    videoSources: {
      light: '/img/animations/godot-cli/godot-cli-anim_light.webm',
      dark: '/img/animations/godot-cli/godot-cli-anim_dark.webm',
    },
    alt: 'Set Godot 4.7.2 as the default CLI, with Godot 4.6.2 available as godot46, then check both versions in a terminal',
    size: { width: 410, height: 320 },
    description: (
      <>
        Choose which installed editor runs when you type <code>godot</code>, and give other versions their own commands, like <code>godot46</code>.
      </>
    ),
  },
  {
    title: 'Git Setup for Godot Projects',
    sources: {
      light: '/img/features/Git_Project_Setup_Light.webp',
      dark: '/img/features/Git_Project_Setup_Dark.webp',
    },
    alt: 'New Project form with Initialize Git Repository enabled',
    size: { width: 410, height: 320 },
    description: (
      <>
        Initialize Git when you create a project or later from Project Settings.
      </>
    ),
  },
  {
    title: 'Create and Import with GitHub',
    sources: {
      light: '/img/features/GitHub_Repository_Integration_Light.webp',
      dark: '/img/features/GitHub_Repository_Integration_Dark.webp',
    },
    alt: 'Import from GitHub dialog with a selected repository',
    size: { width: 410, height: 320 },
    description: (
      <>
        Publish a new project to a private GitHub repository, or browse and import repositories you can access.
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
    title: 'Code Editor Setup Without the Chore',
    sources: {
      light: '/img/features/Quick_Project_Setup_Light.webp',
      dark: '/img/features/Quick_Project_Setup_Dark.webp',
    },
    alt: 'Code Editor menu with Visual Studio Code and VSCodium options',
    size: { width: 420, height: 320 },
    description: (
      <>
        Godot Launcher configures Visual Studio Code or VSCodium for your Godot project. Use a different editor per project when needed.
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
    title: 'Open Pinned and Recent Projects',
    sources: {
      light: '/img/features/Quick_Edit_From_System_Tray_Light.webp',
      dark: '/img/features/Quick_Edit_From_System_Tray_Dark.webp',
    },
    size: { width: 410, height: 320 },
    description: (
      <>
        Open pinned projects in your chosen order or return to recent projects
        from the system tray.
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

/**
 * Renders one feature row with themed product media.
 * @param props Feature heading, description, image sources and dimensions.
 */
function Feature({ title, description, sources, videoSources, alt, size }: FeatureItem) {
  return (
    <div className={styles.feature}>
      <div className="container">
        <div className={clsx('row', styles.featureRow)}>
          <div className={clsx('col col--6', styles.featureContent)}>
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
          <div className={clsx('col col--6', styles.featureMedia)}>
            <div className={styles.featureImageContainer}>
              {videoSources ? (
                <FeatureAnimation
                  alt={alt ?? title}
                  sources={videoSources}
                  posters={sources}
                  width={size.width}
                  height={size.height}
                />
              ) : (
                <ThemedImage
                  alt={alt ?? title}
                  className={styles.featureImage}
                  height={size.height}
                  sources={sources}
                  width={size.width}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Renders the existing features as alternating text and image rows. */
export default function HomepageFeatures(): ReactNode {
  return (
    <section id="features" className={styles.features}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
