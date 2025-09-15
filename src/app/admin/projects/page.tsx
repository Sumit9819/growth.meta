
import { adminDb } from "@/lib/firebase";
import Link from "next/link";
import { deleteProject } from "./actions";

export default async function ProjectsAdminPage() {
  const projectsSnap = await adminDb.collection('projects').get();
  const projects = projectsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Link href="/admin/projects/new" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          New Project
        </Link>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Image URL</th>
              <th className="p-4 text-left">URL</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project.id} className="border-b border-gray-700">
                <td className="p-4">{project.title}</td>
                <td className="p-4">{project.description}</td>
                <td className="p-4">{project.imageUrl}</td>
                <td className="p-4">{project.url}</td>
                <td className="p-4 flex items-center">
                  <Link href={`/admin/projects/${project.id}/edit`} className="text-blue-500 hover:underline mr-4">
                    Edit
                  </Link>
                  <form action={deleteProject.bind(null, project.id)}>
                    <button type="submit" className="text-red-500 hover:underline">Delete</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
