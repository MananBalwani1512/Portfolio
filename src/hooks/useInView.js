import { useEffect, useRef, useState } from 'react';

/**
 * Hook that returns [ref, isVisible] pair.
 * Once element enters viewport, it stays visible (fires once).
 * Add the `visible` class to trigger CSS animations.
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // Fire once, then stop
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
