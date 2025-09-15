import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/data';

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.id}`} className="block bg-white dark:bg-gray-700 rounded-2xl overflow-hidden lifted-shadow transform hover:-translate-y-2 transition-transform duration-300">
      <div className="relative h-56">
        <Image src={post.author_avatar_url} alt={post.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 leading-tight">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{post.content.substring(0, 120)}...</p>
        <div className="flex items-center">
          <Image src={post.author_avatar_url} alt={post.author_name} width={48} height={48} className="rounded-full" />
          <div className="ml-4">
            <p className="font-semibold text-lg">{post.author_name}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
