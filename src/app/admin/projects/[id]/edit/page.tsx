
import { adminDb } from "@/lib/firebase";
import { notFound } from "next/navigation";
import { updateProject } from "../../actions";

export default async function EditProjectPage({ params }: { params: { id: string } }) {
  const projectRef = adminDb.collection('projects').doc(params.id);
  const projectSnap = await projectRef.get();

  if (!projectSnap.exists) {
    notFound();
  }

  const project = { id: projectSnap.id, ...projectSnap.data() };
  const updateProjectWithId = updateProject.bind(null, project.id);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Project: {project.title}</h1>

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
          <label htmlFor="imageUrl" className="block mb-2">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            defaultValue={project.imageUrl}
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
            defaultValue={project.url}
            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Update Project
        </button>
      </form>
    </div>
  );
}
