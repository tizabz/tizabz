import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Preloader from '@/components/Preloader';
import { cn } from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

export default function Container(props: ContainerProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { children } = props;

  // preloader effect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  useEffect(() => {
    const cursorInner = document.getElementById('cursor-inner');
    const cursorOuter = document.getElementById('cursor-outer');
    const links = document.querySelectorAll('a,label,button');
    if (cursorInner && cursorOuter && links) {
      document.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorInner.style.left = `${posX}px`;
        cursorInner.style.top = `${posY}px`;

        // cursorOuter.style.left = `${posX}px`;
        // cursorOuter.style.top = `${posY}px`;

        cursorOuter.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: 'forwards' }
        );

        links.forEach((link) => {
          link.addEventListener('mouseenter', () => {
            cursorInner.classList.add('hover');
            cursorOuter.classList.add('hover');
          });
          link.addEventListener('mouseleave', () => {
            cursorInner.classList.remove('hover');
            cursorOuter.classList.remove('hover');
          });
        });
      });
    }
  }, []);

  return (
    <>
      {/* <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="theme-color" content="#7B82FE" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.wendoj.codes${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.wendoj.codes${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="WendoJ" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="WendoJ" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </Head> */}

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div className="cursor-inner" id="cursor-inner"></div>
      <div className="cursor-outer" id="cursor-outer"></div>

      {/* Main content */}
      <main className={cn('container', props.className)}>{children}</main>
    </>
  );
}
