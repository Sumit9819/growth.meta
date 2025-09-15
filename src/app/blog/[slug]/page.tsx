
import { adminDb } from "@/lib/firebase";
import Image from "next/image";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const blogPostSnap = await adminDb.collection('blogPosts').where('slug', '==', slug).limit(1).get();
  const blogPost = blogPostSnap.docs[0]?.data();

  if (!blogPost) {
    return <div>Post not found</div>;
  }

  const authorSnap = await adminDb.collection('authors').doc(blogPost.authorId).get();
  const author = authorSnap.data();

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 mb-8">
            <Image
              src={blogPost.featuredImage || "/placeholder.jpg"}
              alt={blogPost.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">{blogPost.title}</h1>
          <div className="flex items-center mb-8">
            {author && (
              <>
                <Image
                  src={author.profilePicture || "/placeholder.jpg"}
                  alt={author.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{author.name}</p>
                  <p className="text-gray-400">{new Date(blogPost.publishedDate.seconds * 1000).toLocaleDateString()}</p>
                </div>
              </>
            )}
          </div>
          <div
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </div>
    </div>
  );
}
