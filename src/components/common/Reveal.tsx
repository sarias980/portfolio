import * as React from 'react';
import Box, { type BoxProps } from '@mui/material/Box';

let observer: IntersectionObserver | null = null;

const getObserver = () => {
  if (observer || typeof IntersectionObserver === 'undefined') {
    return observer;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-revealed', '');
          observer?.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -60px 0px' },
  );

  return observer;
};

/**
 * Fade-up on scroll without hiding content in the prerendered HTML.
 * The hidden state only applies when the inline script in index.html has added
 * the `js` class (JS on, IntersectionObserver available, no reduced motion), and
 * that script also reveals elements before React hydrates. This effect covers
 * nodes React mounts or re-creates later.
 */
export default function Reveal({ children, ...props }: BoxProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node || node.hasAttribute('data-revealed')) {
      return undefined;
    }

    const io = getObserver();
    if (!io) {
      node.setAttribute('data-revealed', '');
      return undefined;
    }

    io.observe(node);
    return () => io.unobserve(node);
  }, []);

  return (
    <Box ref={ref} data-reveal="" {...props}>
      {children}
    </Box>
  );
}
