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
    title: 'Quick Project Setup',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    imageClassName: styles.featureImage__quickSetup,
    size: { width: 300, height: 234 },
    description: (
      <>
        Start a new project and have VSCode & Git automatically initialized, complete with an initial commit. No extra steps required.
      </>
    ),
  },
  {
    title: 'Effortless Godot Version Management',
    imageClassName: styles.featureImage__effortlessVersionManagement,
    size: { width: 300, height: 234 },
    description: (
      <>
        Seamlessly download and manage multiple Godot Editor versions. Experiment with the latest pre-releases, or fall back to stable editions in seconds.
      </>
    ),
  },
  {
    title: 'Per-Project Editor Settings',
    imageClassName: styles.featureImage__perProjectEditorSettings,
    size: { width: 300, height: 234 },
    description: (
      <>
        Each project can maintain its own editor preferences, so you never have to worry about conflicting settings across multiple projects.
      </>
    ),
  },
  {
    title: 'Quick Edit from System Tray',
    imageClassName: styles.featureImage__quickEditFromSystemTray,
    size: { width: 300, height: 234 },
    description: (
      <>
        Jump back into any project with a single click—no need to relaunch or sift through folders. This keeps your creative flow uninterrupted and ready at a moment’s notice.
      </>
    ),
  },
  {
    title: 'Automatic Updates',
    imageClassName: styles.featureImage__automaticUpdates,
    size: { width: 300, height: 234 },
    description: (
      <>
        Receive notifications whenever a new version of the launcher is available, so you’re always up to date with the latest features and improvements.
      </>
    ),
  },
  {
    title: 'Cross-Platform Support',
    imageClassName: styles.featureImage__crossPlatform,
    size: { width: 300, height: 234 },
    description: (
      <>
        Fully supported for those developing on <strong>Windows</strong>, <strong>macOS</strong>, and <strong>Linux</strong>. No matter your operating system, the Godot Launcher has you covered.
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
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
