
import { sql } from '@vercel/postgres';
import { updatePost } from '../actions';

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id, 10);
  const { rows: [post] } = await sql`SELECT * FROM blog_posts WHERE id = ${postId}`;

  if (!post) {
    return <div>Post not found</div>;
  }

  const updatePostWithId = updatePost.bind(null, postId);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Post</h1>

      <form action={updatePostWithId} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={post.title}
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="slug" className="block mb-2">Slug</label>
          <input
            type="text"
            id="slug"
            name="slug"
            defaultValue={post.slug}
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-2">Content</label>
          <textarea
            id="content"
            name="content"
            rows={10}
            defaultValue={post.content}
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Update Post
        </button>
      </form>
    </div>
  );
}
