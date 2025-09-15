
'use client';

import { deleteProject } from "@/app/admin/projects/actions";

export default function DeleteProjectButton({ projectId }: { projectId: number }) {
  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this project?')) {
      await deleteProject(projectId);
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-500 hover:underline">
      Delete
    </button>
  );
}
