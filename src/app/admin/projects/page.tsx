
import { sql } from '@vercel/postgres';
import Link from "next/link";
import DeleteProjectButton from "@/components/DeleteProjectButton";

export default async function ProjectsAdminPage() {
  const { rows: projects } = await sql`SELECT * FROM projects ORDER BY id DESC`;

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
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project.id} className="border-b border-gray-700">
                <td className="p-4">{project.title}</td>
                <td className="p-4">
                  <Link href={`/admin/projects/${project.id}/edit`} className="text-blue-500 hover:underline mr-4">
                    Edit
                  </Link>
                  <DeleteProjectButton projectId={project.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
