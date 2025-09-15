
import { adminDb } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const homepageContentSnap = await adminDb.collection('homepageContent').doc('main').get();
  const homepageContent = homepageContentSnap.data();

  const servicesSnap = await adminDb.collection('services').orderBy('order').get();
  const services = servicesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  const testimonialsSnap = await adminDb.collection('testimonials').get();
  const testimonials = testimonialsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <Image
          src={homepageContent?.heroImageUrl || "/placeholder.jpg"}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{homepageContent?.heroTitle}</h1>
          <p className="text-lg md:text-2xl mb-8">{homepageContent?.heroSubtitle}</p>
          <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full">
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{homepageContent?.servicesHeadline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="bg-gray-800 p-8 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <Image src={service.icon} alt={service.title} width={64} height={64} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{homepageContent?.testimonialsHeadline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-gray-900 p-8 rounded-lg">
                <p className="text-lg italic text-gray-400 mb-4">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <Image src={testimonial.authorImage} alt={testimonial.author} width={48} height={48} className="rounded-full mr-4" />
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
