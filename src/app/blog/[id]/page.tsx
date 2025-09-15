import { getPost } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import MarkdownIt from 'markdown-it';

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(Number(params.id));

  if (!post) {
    notFound();
  }

  const md = new MarkdownIt();
  const htmlContent = md.render(post.content);

  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 rounded-2xl p-8 lg:p-12 lifted-shadow">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-balance mb-6">{post.title}</h1>
          <div className="flex items-center mb-8">
            <Image src={post.author_avatar_url} alt={post.author_name} width={50} height={50} className="rounded-full" />
            <div className="ml-4">
              <p className="font-semibold text-lg">{post.author_name}</p>
              <p className="text-gray-500 dark:text-gray-400">{new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
          <div 
            className="prose prose-lg max-w-none dark:prose-invert" 
            dangerouslySetInnerHTML={{ __html: htmlContent }} 
          />
        </div>
      </div>
    </div>
  );
}
