import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Post } from '@/constants/posts';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link
      href={post.link}
      target="_blank"
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-700/40 bg-[#1a1a1a6c] shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-500/60"
    >
      {post.image && (
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <span
            className="rounded-full px-3 py-0.5 font-Silkscreen text-[10px] uppercase"
            style={{
              color: post.tagColor,
              backgroundColor: `${post.tagColor}15`,
              border: `1px solid ${post.tagColor}40`,
            }}
          >
            {post.tag}
          </span>
          <div className="flex items-center gap-1">
            <span className="font-Silkscreen text-[10px] text-gray-500">{post.date}</span>
            <ExternalLink className="size-3 text-gray-600 transition group-hover:text-gray-300" />
          </div>
        </div>

        <h3 className="text-code font-bold leading-snug text-whiteice group-hover:text-white">
          {post.title}
        </h3>

        <p className="flex-1 text-sm text-silverchalice">{post.excerpt}</p>

        <span
          className="mt-auto w-fit font-Silkscreen text-xs"
          style={{ color: post.tagColor }}
        >
          {post.linkLabel} »
        </span>
      </div>
    </Link>
  );
};

export default PostCard;
