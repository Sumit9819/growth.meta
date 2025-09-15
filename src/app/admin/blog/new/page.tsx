
import { createPost } from "../actions";

export default function NewPostPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">New Post</h1>

      <form action={createPost} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
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
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Create Post
        </button>
      </form>
    </div>
  );
}
