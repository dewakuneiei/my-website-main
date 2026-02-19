import { games } from '@/constants/games';
import GameCard from './GameCard';
import Link from 'next/link';

const Games = () => {
  const highlightedGames = games.filter((g) => g.highlight);
  const otherGames = games.filter((g) => !g.highlight);

  return (
    <section id="games" className="relative px-6 py-24 xl:px-56">
      <div className="mb-12 space-y-4">
        <h2 className="h2-bold">Games</h2>
        <p className="regular-paragraph max-w-[835px]">
          I&apos;ve been making games since 2023 — from solo game jams to team
          collaborations. Here are all my games published on itch.io, built with
          Unity, Godot, and Roblox Studio.
        </p>
      </div>

      {/* Highlighted games */}
      {highlightedGames.length > 0 && (
        <div className="mb-8">
          <p className="mb-4 font-Silkscreen text-xs uppercase tracking-widest text-gray-400">
            Featured
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {highlightedGames.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                description={game.description}
                image={game.image}
                link={game.link}
                engine={game.engine}
                genre={game.genre}
                platform={game.platform}
                story={game.story}
              />
            ))}
          </div>
        </div>
      )}

      {/* All other games */}
      <div>
        <p className="mb-4 font-Silkscreen text-xs uppercase tracking-widest text-gray-400">
          All Games
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {otherGames.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              description={game.description}
              image={game.image}
              link={game.link}
              engine={game.engine}
              genre={game.genre}
              platform={game.platform}
              story={game.story}
            />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="https://dewakuneiei.itch.io/"
          target="_blank"
          className="inline-block rounded-full border border-gray-600 px-6 py-2 font-Silkscreen text-sm text-gray-300 transition-all hover:border-gray-400 hover:text-white"
        >
          View all on itch.io »
        </Link>
      </div>

      <div className="projects-grid-pattern absolute inset-0 -z-10 opacity-30" />
    </section>
  );
};

export default Games;
