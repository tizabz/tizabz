import { DM_Sans, Fira_Code, Inter, JetBrains_Mono } from 'next/font/google';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  fallback: ['system-ui', 'arial'],
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  fallback: ['system-ui', 'arial'],
});

const fontFiraCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  fallback: ['system-ui', 'arial'],
});

const dmSans = DM_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-dm-sans',
  fallback: ['system-ui', 'arial'],
});

export const fonts = [
  fontSans.variable,
  fontMono.variable,
  fontFiraCode.variable,
  dmSans.variable,
];
