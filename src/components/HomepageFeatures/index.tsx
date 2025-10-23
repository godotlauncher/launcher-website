import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageClassName: string;
  size: { width: number, height: number; };
  description: ReactNode;
};

const ration = 291 / 286;

const FeatureList: FeatureItem[] = [
  {
    title: 'Effortless Godot Version Management',
    imageClassName: styles.featureImage__effortlessVersionManagement,
    size: { width: 300, height: 234 },
    description: (
      <>
        Easily <strong>download and manage multiple Godot Engine versions</strong> in one place. Switch between stable releases and experimental builds with just a few clicks — no manual installs needed.
      </>
    ),
  },
  {
    title: 'Cross-Platform Godot Downloads',
    imageClassName: styles.featureImage__crossPlatform,
    size: { width: 300, height: 234 },
    description: (
      <>
        Download and launch Godot on <strong>Windows, macOS, and Linux</strong>. The Launcher works wherever you develop, with full support for all major operating systems.
      </>
    ),
  },
  {
    title: 'Multilingual Experience Out of the Box',
    imageClassName: styles.featureImage__multilingualInterface,
    size: { width: 300, height: 234 },
    description: (
      <>
        Let every teammate feel at home with <strong>automatic language detection and 13+ localised interfaces</strong>. Switch languages anytime and the entire launcher — menus, dialogs, and tray — updates instantly.
      </>
    ),
  },
  {
    title: 'Quick Project Setup with Git & VSCode',
    imageClassName: styles.featureImage__quickSetup,
    size: { width: 300, height: 234 },
    description: (
      <>
        Start a new Godot project instantly with <strong>Git and VSCode initialized automatically</strong>. Your repo is ready to go with an initial commit — no extra setup required.
      </>
    ),
  },
  {
    title: 'Per-Project Editor Settings',
    imageClassName: styles.featureImage__perProjectEditorSettings,
    size: { width: 300, height: 234 },
    description: (
      <>
        Keep your editor preferences isolated per project. Godot Launcher ensures <strong>no conflicting settings</strong>, no matter how many projects you're working on.
      </>
    ),
  },
  {
    title: 'Quick Access from System Tray',
    imageClassName: styles.featureImage__quickEditFromSystemTray,
    size: { width: 300, height: 234 },
    description: (
      <>
        Instantly reopen recent projects from the system tray. <strong>No need to relaunch Godot manually</strong> or browse folders — stay in the flow.
      </>
    ),
  },
  {
    title: 'Automatic Updates',
    imageClassName: styles.featureImage__automaticUpdates,
    size: { width: 300, height: 234 },
    description: (
      <>
        Stay up to date with the latest improvements. The Launcher <strong>notifies you when new versions are available</strong>, so you're always running the best version of Godot.
      </>
    ),
  },
];

function Feature({ title, description, imageClassName, size }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureImageContainer}>
        <div role="img" className={clsx(styles.featureImage, imageClassName)} style={size ? size : {}} />
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
