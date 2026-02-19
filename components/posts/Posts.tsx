import { posts } from '@/constants/posts';
import PostCard from './PostCard';

const Posts = () => {
  return (
    <section id="blog" className="relative px-6 py-24 xl:px-56">
      <div className="mb-12 space-y-4">
        <h2 className="h2-bold">Dev Stories</h2>
        <p className="regular-paragraph max-w-[835px]">
          Stories, learnings, and behind-the-scenes from my game jams, projects,
          and development journey. This section grows over time — more coming
          soon!
        </p>
        <p className="font-Silkscreen text-xs text-gray-500">
          📝 To add a new post: edit constants/posts.ts and push a new object to the array.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="projects-grid-pattern absolute inset-0 -z-10 opacity-30" />
    </section>
  );
};

export default Posts;
