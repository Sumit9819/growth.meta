
import { sql } from '@vercel/postgres';
import { updateProject } from '../actions';

export default async function EditProjectPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id, 10);
  const { rows: [project] } = await sql`SELECT * FROM projects WHERE id = ${projectId}`;

  if (!project) {
    return <div>Project not found</div>;
  }

  const updateProjectWithId = updateProject.bind(null, projectId);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Project</h1>

      <form action={updateProjectWithId} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={project.title}
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            defaultValue={project.description}
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
            defaultValue={project.github_url}
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Update Project
        </button>
      </form>
    </div>
  );
}
