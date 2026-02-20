'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useMemo, useState } from 'react';

type ProjectDetailsTypes = {
  title: string;
  subTitle: string;
  stack: string[];
  description: string;
  date: string;
  github: string;
  live: string;
  liveLabel?: string;
  color: string;
  btnBg: string;
  btnBgHover: string;
  cardBg: string;
  current?: boolean;
  prevVideo?: string;
  prevVideoLabel?: string;
};

const ProjectDetails = ({
  title,
  subTitle,
  stack,
  description,
  date,
  github,
  live,
  liveLabel = 'Live »',
  color,
  btnBg,
  btnBgHover,
  cardBg,
  current,
  prevVideo,
  prevVideoLabel = 'Watch Preview',
}: ProjectDetailsTypes) => {
  const [hoveredId, setHoveredId] = useState('');

  const listStacks = useMemo(() => {
    return stack.length > 6 ? [...stack.slice(0, 6), 'and more...'] : stack;
  }, [stack]);

  return (
    <div className="relative -top-10 mx-auto md:w-[95%] 2xl:w-3/4">
      <Card
        style={{ background: cardBg, border: `1px solid ${color}` }}
        className="py-20 shadow-2xl transition-all"
      >
        <CardHeader className="text-center">
          {current && (
            <div className="mb-3 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 font-Silkscreen text-[10px] uppercase tracking-widest text-green-400">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                Currently Working On
              </span>
            </div>
          )}
          <CardTitle className="text-whiteice">{title}</CardTitle>
          <CardDescription className="text-tundora">{subTitle}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6 xl:grid xl:grid-cols-6">
          <div className="flex flex-wrap items-center justify-center gap-x-3 xl:flex-col xl:items-end xl:justify-center xl:self-start">
            {listStacks.map((s) => (
              <p
                key={s}
                className="text-right font-Silkscreen text-[12px] font-normal uppercase text-whiteice"
              >
                {s}
              </p>
            ))}
          </div>

          <div className="text-center md:col-span-4 xl:self-start xl:justify-self-start	">
            <p className="text-whiteice">{description}</p>
          </div>

          <p className="text-[14px] text-tundora xl:self-end	xl:justify-self-start">
            {date}
          </p>
        </CardContent>

        <CardFooter className="mx-auto mt-12 w-fit gap-8 font-Silkscreen">
          {github && (
            <Button
              asChild
              style={{
                backgroundColor: `${hoveredId === '1' ? btnBgHover : btnBg}`,
              }}
              onMouseEnter={() => setHoveredId('1')}
              onMouseLeave={() => setHoveredId('')}
              className="transition-all"
            >
              <Link href={github} target="_blank">
                Github »
              </Link>
            </Button>
          )}

          <Button
            asChild
            style={{
              backgroundColor: `${hoveredId === '2' ? btnBgHover : btnBg}`,
            }}
            onMouseEnter={() => setHoveredId('2')}
            onMouseLeave={() => setHoveredId('')}
            className="transition-all"
          >
            <Link href={live} target="_blank">
              {liveLabel}
            </Link>
          </Button>

          {prevVideo && (
            <Button
              asChild
              style={{
                backgroundColor: `${hoveredId === '3' ? btnBgHover : btnBg}`,
              }}
              onMouseEnter={() => setHoveredId('3')}
              onMouseLeave={() => setHoveredId('')}
              className="transition-all"
            >
              <Link href={prevVideo} target="_blank">
                {prevVideoLabel}
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
export default ProjectDetails;
