import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

type GameCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  engine: string;
  genre: string;
  platform: string;
  story?: string;
};

const GameCard = ({
  title,
  description,
  image,
  link,
  engine,
  genre,
  story,
}: GameCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-700/40 bg-[#1a1a1a6c] shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-500/60 hover:shadow-xl"
    >
      <div className="relative h-[160px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute bottom-2 right-2 rounded bg-black/60 px-2 py-0.5 font-Silkscreen text-[10px] uppercase text-gray-300">
          {engine}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-code text-sm font-bold text-whiteice">{title}</h3>
          <ExternalLink className="size-3.5 shrink-0 text-gray-500 transition group-hover:text-gray-300" />
        </div>

        <span className="w-fit rounded bg-white/5 px-2 py-0.5 font-Silkscreen text-[10px] uppercase text-gray-400">
          {genre}
        </span>

        <p className="text-xs text-silverchalice">{description}</p>

        {story && (
          <p className="mt-auto border-t border-gray-700/40 pt-2 text-xs italic text-gray-500">
            {story}
          </p>
        )}
      </div>
    </Link>
  );
};

export default GameCard;
