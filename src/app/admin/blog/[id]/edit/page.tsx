
import { adminDb } from "@/lib/firebase";
import { updatePost } from "../../actions";

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const postSnap = await adminDb.collection('blog').doc(params.id).get();
  const post = { id: postSnap.id, ...postSnap.data() };

  const updatePostWithId = updatePost.bind(null, post.id);

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
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            defaultValue={post.title}
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-2">Content</label>
          <textarea
            id="content"
            name="content"
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            rows={10}
            defaultValue={post.content}
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
