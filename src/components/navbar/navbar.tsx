'use client';
import styles from '@/styles/Container.module.css';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import { LanguageSwitcher } from '@/components/navbar/language-switcher';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { cn, scrollTo } from '@/lib/utils';

type IconProps = {
  ['data-hide']: boolean;
};

type NavProps = {
  text: string;
  href: string;
  i: number;
  className?: string;
};

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.12,
    },
  }),
  hidden: { opacity: 0 },
};

const navLinks = [
  { href: '#home', text: 'Home' },
  { href: '#about', text: 'About' },
  { href: '#projects', text: 'Projects' },
  { href: '#services', text: 'Services' },
];

function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  const href = e.currentTarget.getAttribute('href');

  if (href && href.startsWith('#')) {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) scrollTo(section);
  }
}

function NavItem(props: NavProps) {
  return (
    <motion.li
      className={props.className}
      variants={variants}
      custom={props.i}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <a
        href={props.href}
        onClick={handleClick}
        className={cn(props.i === 0 && 'nav-active', 'nav-link')}
      >
        {props.text}
      </a>
    </motion.li>
  );
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        styles.nav,
        isScrolled
          ? 'from-background bg-gradient-to-br to-transparent shadow-md backdrop-blur transition'
          : 'bg-transparent'
      )}
    >
      <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            styles.burger,
            'inline-flex items-center justify-center rounded-md p-2 transition-all duration-300 focus:outline-none'
          )}
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon data-hide={isOpen} />
          <CrossIcon data-hide={!isOpen} />
        </button>
      </div>
      <Link href="/">
        <span className="text-lg font-semibold">banaizade</span>
      </Link>

      {/* Desktop menu */}
      <ul className={styles['desktop-nav']}>
        {navLinks.map((link, i) => (
          <NavItem
            key={link.href}
            href={link.href}
            text={link.text}
            i={i}
            className="text-base"
          />
        ))}
        <li>
          <LanguageSwitcher />
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>

      {/* Mobile menu */}
      <AnimatePresence key="menu">
        {isOpen && (
          <motion.div
            className="bg-background fixed right-0 top-0 z-40 flex h-screen w-full flex-col justify-start overflow-y-hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 1, type: 'spring', bounce: 0.25 }}
          >
            {/* Expandable menu */}
            <div className="flex h-20 max-h-20 min-h-[60px] w-full items-center justify-between border-b pl-[22px] pr-1">
              <span className="text-base font-medium lowercase">Menu</span>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={styles.burger}
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <CrossIcon data-hide={!isOpen} />
              </button>
            </div>
            <div className="flex h-full flex-col items-start justify-between overflow-y-auto">
              {/* Links */}
              <ul className="flex min-h-fit w-full flex-col items-start space-y-6 px-[22px] py-[58px]">
                {navLinks.map((link, i) => (
                  <button key={link.href} onClick={() => setIsOpen(false)}>
                    <NavItem
                      href={link.href}
                      text={link.text}
                      i={i}
                      className="text-xl"
                    />
                  </button>
                ))}
              </ul>

              {/* Footer */}
              <div className="flex min-h-fit w-full flex-col space-y-8 px-[22px] py-10">
                <span className="text-muted-foreground text-sm">
                  © {new Date().getFullYear()} wendo. All rights reserved.
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx global>{`
        html,
        body {
          overflow-y: ${isOpen ? 'hidden' : 'initial'};
          scrollbar-width: ${isOpen ? 'none' : 'unset'};
          -ms-overflow-style: ${isOpen ? 'none' : 'unset'};
          touch-action: ${isOpen ? 'none' : 'unset'};
          -ms-touch-action: ${isOpen ? 'none' : 'unset'};
        }
      `}</style>
    </nav>
  );
};

function MenuIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute size-5 text-neutral-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 2.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: IconProps) {
  return (
    <svg
      className="absolute size-5 text-neutral-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
