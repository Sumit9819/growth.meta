
'use client';

import { deletePost } from "@/app/admin/blog/actions";

export default function DeletePostButton({ postId }: { postId: number }) {
  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this post?')) {
      await deletePost(postId);
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-500 hover:underline">
      Delete
    </button>
  );
}
