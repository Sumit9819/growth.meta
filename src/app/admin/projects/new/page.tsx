
import { createProject } from "./actions";

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">New Project</h1>

      <form action={createProject} className="space-y-4">
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
          <label htmlFor="description" className="block mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block mb-2">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="url" className="block mb-2">Project URL</label>
          <input
            type="text"
            id="url"
            name="url"
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Create Project
        </button>
      </form>
    </div>
  );
}
