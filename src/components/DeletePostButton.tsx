
'use client';

import { deletePost } from "@/app/admin/blog/actions";

export default function DeletePostButton({ postId }: { postId: string }) {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deletePost(postId);
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-500 hover:underline">
      Delete
    </button>
  );
}
