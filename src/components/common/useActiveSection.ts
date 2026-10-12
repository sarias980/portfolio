import * as React from 'react';

/**
 * Id of the section currently crossing the upper third of the viewport.
 * Undefined on the server and before the first observation, so the
 * prerendered navigation has no active item.
 */
export default function useActiveSection(ids: string[]) {
  const [active, setActive] = React.useState<string>();
  const key = ids.join('|');

  React.useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const visible = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting));
        setActive(ids.find((id) => visible.get(id)));
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return active;
}
