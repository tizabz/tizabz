'use client';
import styles from '@/styles/Home.module.css';

import { Suspense, useEffect, useRef, useState } from 'react';
import { TriangleDownIcon } from '@radix-ui/react-icons';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Code2,
  Eye,
  Frame,
  MonitorSmartphone,
  SearchCheck,
} from 'lucide-react';
import Link from 'next/link';
import VanillaTilt from 'vanilla-tilt';

import Container from '@/components/Container';
import Projects from '@/components/Home/Projects';
import { Button } from '@/components/ui/button';
import { cn, scrollTo } from '@/lib/utils';

const aboutStats = [
  { label: 'Years of experience', value: '5+' },
  { label: 'Technologies mastered', value: '40+' },
  { label: 'Companies worked with', value: '3+' },
];

const services = [
  {
    service: 'Frontend Development',
    description:
      'Creating stellar user interfaces and web experiences using the latest technologies.',
    icon: Code2,
  },
  {
    service: 'UX Design',
    description:
      'Building intuitive, user-centric designs that drive engagement and conversion.',
    icon: Frame,
  },
  {
    service: 'SEO Optimization',
    description:
      "Enhancing your website's visibility in search engines for increased organic traffic.",
    icon: SearchCheck,
  },
  {
    service: 'Responsive Design',
    description:
      'Designing websites that look and perform equally well on all devices and screen sizes.',
    icon: MonitorSmartphone,
  },
  {
    service: 'Backend Development',
    description:
      'Developing robust, scalable server-side logic for a wide range of web applications.',
    icon: Eye,
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    async function getLocomotive() {
      const Locomotive = (await import('locomotive-scroll')).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = '';
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute('id') ?? '';
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove('nav-active');

        if (li.getAttribute('href') === `#${current}`) {
          li.classList.add('nav-active');
          console.log(li.getAttribute('href'));
        }
      });
    }

    void getLocomotive();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll('#tilt'));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      'max-glare': 0.05,
      gyroscope: true,
      perspective: 1000,
      scale: 0.95,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>Front-End Developer</span>
              <span className={styles.pill}>Web Designer</span>
              <span className={styles.pill}>Tech Enthusiast</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-foreground text-6xl tracking-tighter 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Ali Banai.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="text-muted-foreground mt-1 max-w-lg tracking-tight 2xl:text-xl"
              >
                An experienced full-stack website developer with a passion for
                crafting unique digital experiences.
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link href="mailto:wendoj@proton.me" passHref>
                <Button>
                  Get in touch <ChevronRight className="ml-1 size-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector('#about'))}
              >
                Learn more
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles['scroll--hidden']
              )}
            >
              Scroll to discover{' '}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles['canvas-container']}
            className="mt-14 size-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/assets/scene.splinecode" />
            </Suspense>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="text-foreground  py-16 pb-2 text-3xl font-light leading-normal tracking-tighter xl:text-[32px]">
              👋 I&#39;m a seasoned programmer and web developer with 5+ years
              of experience crafting pixels and solving bugs. Mostly, you&#39;ll
              find me immersed in the front-end world, but I occasionally
              moonlight as a back-end tinkerer (because who doesn’t love a good
              side quest?).
              <br />
              💡 Beyond code, I&#39;m a curious soul diving into philosophy
              books, exploring the depths of life, and trying to sing like no
              one&#39;s listening (but they probably are).🎶
              <br />
              🎥 When I&#39;m not building web magic, I&#39;m either binging
              movies and TV shows, gaming with friends and family, or rocking
              out to an eclectic music playlist. Life&#39;s all about balance,
              right?
              {/*I&apos;m
              an experienced full-stack developer proficient in{' '}
               <Link
                href="https://create.t3.gg/"
                target="_blank"
                className="underline"
              >
                TypeScript, Tailwind, and Next.js
              </Link>{' '}
              since 2021. My experience spans from startups to mid-sized
              companies, where I&apos;ve been instrumental in the entire product
              design process; from ideation and wireframing, through
              prototyping, to the delivery of the final product, all while
              efficiently collaborating with cross-functional teams. */}
            </h2>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground tracking-tight xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Projects />

        {/* Services */}
        <section id="services" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  Need more info?
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    I got you.
                  </span>
                </h2>
                <p className="text-secondary-foreground mt-2 tracking-tighter">
                  Here are some of the services I offer. If you have any
                  questions, feel free to reach out.
                </p>
              </div>
              {services.map((service) => (
                <div
                  key={service.service}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <service.icon className="text-primary my-6" size={20} />
                  <span className="text-foreground text-lg tracking-tight">
                    {service.service}
                  </span>
                  <span className="text-muted-foreground mt-2 tracking-tighter">
                    {service.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="from-primary/[6.5%] flex flex-col items-center justify-center rounded-lg bg-gradient-to-br to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s work{' '}
              <span className="text-gradient clash-grotesk">together.</span>
            </h2>
            <p className="text-muted-foreground mt-1.5 text-base tracking-tight xl:text-lg">
              I&apos;m currently available for freelance work and open to
              discussing new projects.
            </p>
            <Link href="mailto:wendoj@proton.me" passHref>
              <Button className="mt-6">Get in touch</Button>
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
