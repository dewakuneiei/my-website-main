// Add new posts here — just push a new object to the array!
// Each post can link to a YouTube video, itch.io page, GitHub repo, or any URL.

export type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  tagColor: string;
  link: string;
  linkLabel: string;
  image?: string;
};

export const posts: Post[] = [
  {
    id: '1',
    title: 'My First International Team Game Jam — Hop & Chomp Idle',
    excerpt:
      'For my first team game jam, I collaborated with a composer and a 2D artist from America. Despite the time zone differences and English communication challenge, we successfully delivered a pixel art idle game in just 3 days. A truly unforgettable experience that taught me teamwork across cultures.',
    date: '2025',
    tag: 'Game Dev Story',
    tagColor: 'rgba(34,197,94)',
    link: 'https://dewakuneiei.itch.io/hop-chomp-idle',
    linkLabel: 'Play the game',
    image: 'https://img.itch.zone/aW1nLzE4NTY2OTM1LnBuZw==/315x250%23c/GVondd.png',
  },
  {
    id: '2',
    title: 'Namtar — Thai Ghost Traditional Roblox Game',
    excerpt:
      'A Roblox game inspired by Thai ghost folklore (ผีไทย), developed using Roblox Studio and Lua scripting. The project explores how traditional Thai ghost stories can be turned into an engaging multiplayer experience.',
    date: '2025',
    tag: 'Roblox / Lua',
    tagColor: 'rgba(249,115,22)',
    link: 'https://youtu.be/kZVl8ztk-jw?si=-41RRL8FjyUdXDTR',
    linkLabel: 'Watch on YouTube',
    image: 'https://img.youtube.com/vi/kZVl8ztk-jw/maxresdefault.jpg',
  },
  {
    id: '3',
    title: 'Research Methodology Project — Dish Rushhh (Northern Thai Cuisine Game)',
    excerpt:
      'A video game designed to promote Northern Thai cuisine and culture, developed as a university research methodology project at University of Phayao. Players cook and serve Northern Thai dishes in a relaxing restaurant simulation.',
    date: '2024',
    tag: 'Unity / Research',
    tagColor: 'rgba(139,92,246)',
    link: 'https://dewakuneiei.itch.io/dish-ruchhh',
    linkLabel: 'Play the game',
    image: 'https://img.itch.zone/aW1nLzE4MjMwNTI2LmpwZw==/315x250%23c/wl12Uz.jpg',
  },
  {
    id: '4',
    title: 'My Very First Game — The Donut That Escapes Hungry Humans',
    excerpt:
      'This project is very special to me — my very first attempt at making a game. A donut tries to escape from hungry humans. Simple yet meaningful, it sparked my deep love for game development and set me on the path I am on today.',
    date: '2023',
    tag: 'First Game',
    tagColor: 'rgba(234,179,8)',
    link: 'https://dewakuneiei.itch.io/',
    linkLabel: 'Visit my itch.io',
  },
  {
    id: '5',
    title: 'Building Code Collector — A High-Performance Rust Desktop Tool',
    excerpt:
      'Code Collector is a desktop GUI tool I built in Rust to help developers extract, filter, and export code from their projects. Perfect for preparing LLM context (ChatGPT, Claude, DeepSeek), creating backups, or reviewing large codebases.',
    date: '2025',
    tag: 'Rust / Open Source',
    tagColor: 'rgba(249,115,22)',
    link: 'https://github.com/dewakuneiei/code-collector',
    linkLabel: 'View on GitHub',
  },
];
