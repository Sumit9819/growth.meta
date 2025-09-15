import { getPost } from '../../../lib/data';
import Image from 'next/image';

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = await getPost(Number(params.id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center mb-8">
          <Image src={post.author_avatar_url} alt={post.author_name} width={50} height={50} className="rounded-full" />
          <div className="ml-4">
            <p className="font-semibold">{post.author_name}</p>
            <p className="text-gray-500 text-sm">{new Date(post.created_at).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="prose lg:prose-xl">
          {post.content}
        </div>
      </div>
    </div>
  );
}
