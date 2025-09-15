import { getPost } from '../../lib/data';
import Image from 'next/image';

export default async function PostPage({ params }: { params: { id: number } }) {
  const post = await getPost(params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="prose dark:prose-invert lg:prose-xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <Image
            src={post.author_avatar_url}
            alt={post.author_name}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span>{post.author_name}</span>
          <span className="mx-2">·</span>
          <span>{new Date(post.created_at).toLocaleDateString()}</span>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
