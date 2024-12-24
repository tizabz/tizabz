'use client';
import { useEffect, useState } from 'react';
import { MailIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Footer() {
  // get the current time in UTC+1 time zone
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.setHours(date.getHours());
      setTime(
        date.toLocaleTimeString('en-US', {
          hour12: true,
          hour: 'numeric',
          minute: 'numeric',
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="from-primary/[1%] w-full bg-gradient-to-t to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
        <span className="flex flex-row items-center space-x-4">
          <p className="text-muted-foreground text-xs">
            Made with ❤️ by{' '}
            <Link
              href="https://github.com/wendoj"
              target="_blank"
              passHref
              className="text-foreground hover:text-primary transition"
            >
              wendoj
            </Link>
          </p>
          <hr className="border-muted hidden h-6 border-l md:flex" />
          <span className="hidden flex-row items-center space-x-2 md:flex">
            <p className="text-muted-foreground text-xs">Local time:</p>
            <p className="text-sm font-semibold">{time} UTC+1</p>
          </span>
        </span>
        <Link
          href="mailto:wendoj@proton.me"
          passHref
          className="text-muted-foreground hover:text-foreground text-xs"
        >
          <Button variant={'outline'}>
            <MailIcon className="size-4 md:mr-2" />
            <span className="hidden md:flex">wendoj@proton.me</span>
          </Button>
        </Link>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
