'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function NavHeightProvider() {
  useEffect(() => {
    function setNavHeight() {
      try {
        const nav = document.getElementById('site-navbar');
        if (!nav) return;
        const height = Math.ceil(nav.getBoundingClientRect().height);
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
        document.body.style.paddingTop = `var(--navbar-height)`;
      } catch (e) {
        // ignore
      }
    }

    setNavHeight();
    const ro = new ResizeObserver(setNavHeight);
    const nav = document.getElementById('site-navbar');
    if (nav) ro.observe(nav);
    window.addEventListener('resize', setNavHeight);

    return () => {
      if (nav) ro.disconnect();
      window.removeEventListener('resize', setNavHeight);
    };
  }, []);

  return null;
}

export default function NavHeightProviderPortal() {
  // Mount into the body root we added in layout so this component can be used in a server layout.
  const root = typeof document !== 'undefined' ? document.getElementById('nav-height-provider-root') : null;
  if (!root) return null;
  return createPortal(<NavHeightProvider />, root);
}
