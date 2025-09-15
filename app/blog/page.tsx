import { getPosts } from '../lib/data';
import { PostCard } from '../components/PostCard';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-6xl font-extrabold text-balance mb-4">The Growth.meta Blog</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 text-balance">Stay up-to-date with the latest trends and best practices in digital marketing. Our blog is a resource for businesses looking to grow and succeed online.</p>
            </div>

            <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    </div>
  );
}
