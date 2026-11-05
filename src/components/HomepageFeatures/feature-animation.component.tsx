import { useEffect, useRef, useState, type ComponentProps } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';
import { Pause, Play } from 'lucide-react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureAnimationProps = {
  sources: { light: string; dark: string };
  posters: ComponentProps<typeof ThemedImage>['sources'];
  alt: string;
  width: number;
  height: number;
};

/**
 * Plays one themed feature clip while respecting motion preferences and visibility.
 * @param props Themed clips, static fallback and accessible description.
 */
export default function FeatureAnimation({ sources, posters, alt, width, height }: FeatureAnimationProps) {
  const { colorMode } = useColorMode();
  const container = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [readySource, setReadySource] = useState('');
  const [failedSource, setFailedSource] = useState('');
  const source = sources[colorMode];
  const enabled = !reducedMotion && entered && source !== failedSource;

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    /** Applies the visitor's current motion preference. */
    function updateMotion() {
      setReducedMotion(preference.matches);
    }
    updateMotion();
    preference.addEventListener('change', updateMotion);
    return () => preference.removeEventListener('change', updateMotion);
  }, []);

  useEffect(() => {
    const element = container.current;
    if (!element) return undefined;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      setEntered(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) setEntered(true);
    }, { threshold: 0.15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (enabled && visible && !paused) {
      // The poster and play button remain available if autoplay is blocked.
      void element.play().catch(() => setPlaying(false));
    } else {
      element.pause();
    }
  }, [enabled, source, visible, paused]);

  /** Toggles playback after an explicit visitor interaction. */
  function togglePlayback() {
    const element = video.current;
    if (!element) return;
    if (element.paused) {
      setPaused(false);
      void element.play().catch(() => setPlaying(false));
    } else {
      setPaused(true);
      element.pause();
    }
  }

  return (
    <div ref={container} className={styles.featureAnimation}>
      <ThemedImage alt={alt} className={styles.featureImage} sources={posters} width={width} height={height} />
      {enabled && (
        <>
          <video
            key={source}
            ref={video}
            className={clsx(styles.featureVideo, readySource === source && styles.featureVideoReady)}
            src={source}
            poster={posters[colorMode]}
            width={width}
            height={height}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            onCanPlay={() => setReadySource(source)}
            onPlaying={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setFailedSource(source)}
          />
          {readySource === source && (
            <button
              type="button"
              className={styles.featurePlayback}
              onClick={togglePlayback}
              aria-label={`${playing ? 'Pause' : 'Play'} Godot CLI animation`}
            >
              {playing ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
            </button>
          )}
        </>
      )}
    </div>
  );
}
