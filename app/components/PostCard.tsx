import Link from 'next/link';
import Image from 'next/image';
import { Post } from '../lib/data';

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.id}`} className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image src={post.author_avatar_url} alt={post.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.content.substring(0, 100)}...</p>
        <div className="flex items-center">
          <Image src={post.author_avatar_url} alt={post.author_name} width={40} height={40} className="rounded-full" />
          <div className="ml-4">
            <p className="font-semibold">{post.author_name}</p>
            <p className="text-gray-500 text-sm">{new Date(post.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
