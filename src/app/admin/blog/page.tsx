
import { adminDb } from "@/lib/firebase";
import Link from "next/link";
import DeletePostButton from "@/components/DeletePostButton";

export default async function BlogAdminPage() {
  const postsSnap = await adminDb.collection('blog').orderBy('createdAt', 'desc').get();
  const posts = postsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        <Link href="/admin/blog/new" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          New Post
        </Link>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Created At</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id} className="border-b border-gray-700">
                <td className="p-4">{post.title}</td>
                <td className="p-4">{new Date(post.createdAt.seconds * 1000).toLocaleDateString()}</td>
                <td className="p-4">
                  <Link href={`/admin/blog/${post.id}/edit`} className="text-blue-500 hover:underline mr-4">
                    Edit
                  </Link>
                  <DeletePostButton postId={post.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
