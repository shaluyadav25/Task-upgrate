import { useEffect, useRef, useState } from 'react';
import './BackgroundMedia.css';

/**
 * Premium Reusable Background Media Component
 * Features:
 * - HTML5 looping video with WebM + MP4 sources
 * - Poster image fallback with slow cinematic Ken Burns animation
 * - Automatic pause when out of viewport via IntersectionObserver (battery/GPU saving)
 * - Safe detection of prefers-reduced-motion & mobile data-saver (navigator.connection.saveData)
 * - Dark gradient overlay, subtle grain noise, and soft cinematic vignette
 *
 * @param {Object} props
 * @param {string} [props.videoSrc="/media/hero.mp4"] - Primary MP4 source
 * @param {string} [props.webmSrc="/media/hero.webm"] - Fallback WebM source
 * @param {string} [props.poster="/media/hero-poster.jpg"] - Poster image
 * @param {number} [props.overlayOpacity=0.85] - Overlay opacity multiplier
 * @param {string} [props.className=""] - Additional class name
 */
export const BackgroundMedia = ({
  videoSrc = '/media/hero.mp4',
  webmSrc = '/media/hero.webm',
  poster = '/media/hero-poster.jpg',
  overlayOpacity = 0.85,
  className = ''
}) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // Determine if video playback is allowed based on user preferences and connection
  const [shouldPlayVideo, setShouldPlayVideo] = useState(() => {
    if (typeof window === 'undefined') return false;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dataSaver = Boolean(navigator.connection && navigator.connection.saveData);
    return !reducedMotion && !dataSaver;
  });

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [canLoadVideo, setCanLoadVideo] = useState(false);

  // Lazy start after first paint to protect initial load metrics (LCP / FCP)
  useEffect(() => {
    if (!shouldPlayVideo) return;

    // Use requestIdleCallback or a microtask timeout after paint
    let timeoutId;
    if ('requestIdleCallback' in window) {
      const handle = window.requestIdleCallback(() => setCanLoadVideo(true), { timeout: 800 });
      return () => window.cancelIdleCallback(handle);
    } else {
      timeoutId = setTimeout(() => setCanLoadVideo(true), 200);
      return () => clearTimeout(timeoutId);
    }
  }, [shouldPlayVideo]);

  // Pause video when out of viewport using IntersectionObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          // Play only if video has loaded or is ready
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Autoplay policy prevented playback; gracefully fallback to poster
            });
          }
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [videoLoaded]);

  // Watch for prefers-reduced-motion changes dynamically
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => {
      setShouldPlayVideo(!e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleVideoCanPlay = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  const showVideo = shouldPlayVideo && !videoError && canLoadVideo;

  return (
    <div
      ref={containerRef}
      className={`bg-media ${className}`}
      aria-hidden="true"
    >
      {/* 1. Ken Burns Poster Fallback Image (shown while loading, or permanently if data-saver/reduced-motion/error) */}
      <picture className="bg-media__picture">
        <source srcSet="/media/hero-poster.webp" type="image/webp" />
        <img
          src={poster}
          alt="Cinematic abstract technology data network background"
          width="1920"
          height="1080"
          className={`bg-media__poster ${!showVideo ? 'bg-media__poster--ken-burns' : ''} ${
            videoLoaded ? 'bg-media__poster--hidden' : ''
          }`}
          loading="eager"
        />
      </picture>

      {/* 2. HTML5 Video Background */}
      {showVideo && (
        <video
          ref={videoRef}
          className={`bg-media__video ${videoLoaded ? 'bg-media__video--loaded' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          onCanPlay={handleVideoCanPlay}
          onError={handleVideoError}
        >
          {webmSrc && <source src={webmSrc} type="video/webm" onError={handleVideoError} />}
          {videoSrc && <source src={videoSrc} type="video/mp4" onError={handleVideoError} />}
        </video>
      )}

      {/* 3. Dark Gradient Overlay for Maximum WCAG AA Contrast */}
      <div
        className="bg-media__overlay"
        style={{
          background: `linear-gradient(135deg, rgba(10, 15, 31, ${overlayOpacity}) 0%, rgba(10, 15, 31, ${
            overlayOpacity * 0.55
          }) 100%)`
        }}
      />

      {/* 4. Soft Vignette Overlay */}
      <div className="bg-media__vignette" />

      {/* 5. Subtle Grain Texture Layer */}
      <div className="bg-media__grain" />
    </div>
  );
};

export default BackgroundMedia;

