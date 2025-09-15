
import { adminDb } from "@/lib/firebase";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage() {
  const blogPostsSnap = await adminDb.collection('blogPosts').orderBy('publishedDate', 'desc').get();
  const blogPosts = blogPostsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-12">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <a className="block bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="relative h-48">
                  <Image
                    src={post.featuredImage || "/placeholder.jpg"}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-400">{new Date(post.publishedDate.seconds * 1000).toLocaleDateString()}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
