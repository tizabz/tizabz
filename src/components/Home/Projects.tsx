import styles from '@/styles/Home.module.css';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
interface ProjectType {
  title: string;
  description: string;
  fullDescription: string;
  logo: string;
  banner: string;
  dateStarted: string;
  dateEnded: string;
  technologiesWorkedWith: string[];
  href: string;
}

const projects: ProjectType[] = [
  {
    title: 'Chishop',
    description:
      'E-commerce platform for local businesses to sell their products',
    fullDescription:
      'I gained my work experience on team-work and different technologies like React.js with this project, with the help of a good friend that tought me everything about creating and maintaining a project like this. i learned stuff like REST Api, GIT, JWT, State Management, PWA, Ant Design, and so much more.',
    logo: '/assets/projects/chishop-logo.png',
    banner: '/assets/projects/chishop-banner.png',
    dateStarted: '2020-07-01T00:00:00.000Z',
    dateEnded: '2021-01-01T00:00:00.000Z',
    technologiesWorkedWith: [
      'React.js',
      'Redux',
      'Socket.io',
      'PWA',
      'SASS',
      'Axios',
      'Ant Design',
    ],
    href: '',
  },
  {
    title: 'Chiwant',
    description:
      'Platform that helps people to offer their services or expertise',
    fullDescription:
      'After Mastering the Laws of React.js and Gaining more experience with it, I found out that this was just the beginning, with this project i faced all kinds of chalenges like Handling Performance issues on different devices, implementing different themes for the application, handling real-time notifications, collaborating with other team members to maintain the project, and so much more that tought me that I should allways be learning more!',
    logo: '/assets/projects/chiwant-logo.png',
    banner: '/assets/projects/chiwant-banner.png',
    dateStarted: '2021-01-01T00:00:00.000Z',
    dateEnded: '2021-08-01T00:00:00.000Z',
    technologiesWorkedWith: [
      'React.js',
      'Redux',
      'Socket.io',
      'PWA',
      'SASS',
      'Axios',
      'Material UI',
    ],
    href: '',
  },
  {
    title: 'Ireland-XO',
    description:
      'International team of volunteers who enjoy helping people of Irish descent connect with their roots in Ireland',
    fullDescription: `Although i thought that this project was going to be simple as enhancing the website design, it cought me off gourd with the challenges of learning different technologies like PHP and Drupal which were used as the website's base structure, also facing a new challenge to maintain the website's functionallity exactly when it had up to 2 Milion active users!`,
    logo: '/assets/projects/ireland-xo-logo.png',
    banner: '/assets/projects/ireland-xo-banner.png',
    dateStarted: '2021-12-01T00:00:00.000Z',
    dateEnded: '2022-04-01T00:00:00.000Z',
    technologiesWorkedWith: ['PHP', 'Drupal', 'Jquery', 'Bootstrap'],
    href: 'https://irelandxo.com',
  },
  {
    title: 'Lingolish',
    description: 'Word guessing game for people all accross the world',
    fullDescription: `As i get started on working with this project, it was just a simple HTML, CSS, JS project , just what i needed 😄, to express my plans for cleaning the project with implementing customized es-lint rules and reaching an overwhelming state of clean code , then structuring the project's with React.js to keep it organized and maintainable for the future!`,
    logo: '/assets/projects/lingolish-logo.webp',
    banner: '/assets/projects/lingolish-banner.jpg',
    dateStarted: '2021-12-01T00:00:00.000Z',
    dateEnded: '2022-04-01T00:00:00.000Z',
    technologiesWorkedWith: ['React.js', 'Redux', 'PWA', 'SASS', 'Axios'],
    href: 'https://lingolish.com',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const selectedProjectObj: ProjectType = projects[selectedProject];

  const [projectStartYear, projectWorkedMonths] = useMemo(() => {
    const startDate = new Date(selectedProjectObj.dateStarted);
    const endDate = new Date(selectedProjectObj.dateEnded);
    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    return [startDate.getFullYear(), months <= 0 ? 0 : months];
  }, [selectedProjectObj]);

  return (
    <section id="projects" data-scroll-section>
      {/* Gradient */}
      <div className="relative isolate -z-10">
        <div
          className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
          aria-hidden="true"
        >
          <div
            className="from-primary via-primary to-secondary relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <div data-scroll data-scroll-speed=".4" className="my-64">
        <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
          ✨ Projects
        </span>
        <h2 className="mt-3 text-4xl font-semibold tracking-tighter xl:text-6xl">
          Streamlined digital experiences.
        </h2>
        <p className="text-muted-foreground mt-1.5 text-base tracking-tight xl:text-lg">
          I&apos;ve worked on a variety of projects, from small websites to
          large-scale web applications. Here are some of my favorites:
        </p>

        {/* Carousel */}
        <div className="mt-14">
          <Dialog>
            <div className="flex gap-8">
              {projects.map((project, i) => (
                <DialogTrigger asChild key={project.title}>
                  <Card
                    id="tilt"
                    className="basis-1/4 cursor-pointer"
                    onClick={() => setSelectedProject(i)}
                  >
                    <CardHeader className="flex aspect-square items-center justify-start p-0">
                      {project.banner.endsWith('.webm') ? (
                        <video
                          src={project.banner}
                          autoPlay
                          loop
                          muted
                          className="!relative !inset-[unset] mt-8 !h-auto !w-2/5 rounded-t-md"
                        />
                      ) : (
                        <Image
                          src={project.logo}
                          alt={project.title}
                          fill
                          className="!relative !inset-[unset] mt-8 !h-auto !w-2/5 rounded-t-md"
                        />
                      )}
                    </CardHeader>
                    <CardContent className="bg-background/50 absolute bottom-0 w-full backdrop-blur">
                      <CardTitle className="border-t border-white/5 p-2 text-base font-normal tracking-tighter">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="p-4 text-base font-normal tracking-tighter">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </DialogTrigger>
              ))}
            </div>
            <DialogContent className="p-2 sm:max-w-[425px] md:max-w-[550px]">
              <DialogHeader className="p-2">
                <div className="p-1">
                  <div className="flex items-center">
                    <DialogTitle className="pb-1">
                      {selectedProjectObj?.title}
                    </DialogTitle>
                    <span className="dark:text-primary mx-2 flex items-center text-xs text-slate-800">
                      <Icons.calendarCheck className="mr-1" size={'1.15em'} />
                      Worked on {projectStartYear} for {projectWorkedMonths}{' '}
                      months
                    </span>
                  </div>

                  <DialogDescription>
                    {selectedProjectObj?.description}
                  </DialogDescription>
                </div>
                <Image
                  src={selectedProjectObj.banner}
                  alt={selectedProjectObj.title}
                  className="!relative !inset-[unset] mx-auto !h-auto rounded-3xl shadow-md"
                  fill
                />
              </DialogHeader>
              <div>
                <h2 className="text-foreground mx-auto px-2 py-1 text-justify font-light !leading-[1.15] tracking-tighter lg:text-lg xl:text-xl">
                  <Icons.quote size={'1em'} className="mx-1 inline" />
                  {selectedProjectObj?.fullDescription}
                </h2>
              </div>
              <DialogFooter className="flex items-end p-3">
                <div className="w-full">
                  <span className="mb-2 flex items-center text-sm">
                    <Icons.codeXml className="mr-1" size={'1.15em'} />
                    Technologies Used :
                  </span>
                  <div className="flex justify-start gap-2">
                    {selectedProjectObj?.technologiesWorkedWith.length > 0 &&
                      selectedProjectObj?.technologiesWorkedWith.map(
                        (item, i) => (
                          <span className={styles.pill} key={i}>
                            {item}
                          </span>
                        )
                      )}
                  </div>
                </div>
                {selectedProjectObj.href && (
                  <Link href={selectedProjectObj.href} target="_blank">
                    <Button>
                      <Icons.eye size={'1.25em'} className="mr-2" /> Visit
                    </Button>
                  </Link>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div className="text-muted-foreground py-5 text-center text-sm">
            <span className="mr-2 font-semibold">{projects.length}</span>
            projects
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
