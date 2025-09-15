
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
          <label htmlFor="github_url" className="block mb-2">GitHub URL</label>
          <input
            type="text"
            id="github_url"
            name="github_url"
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Create Project
        </button>
      </form>
    </div>
  );
}
