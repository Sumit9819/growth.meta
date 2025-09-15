import Image from 'next/image';
import { getPosts } from '@/lib/data';
import { PostCard } from '@/components/PostCard';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const services = [
  { title: 'Search Engine Optimization', description: 'Climb the rankings and attract organic traffic with our data-driven SEO strategies.', icon: 'https://placehold.co/64x64/8a4dff/ffffff?text=SEO' },
  { title: 'Pay-Per-Click Advertising', description: 'Maximize your ROI with targeted PPC campaigns that convert.', icon: 'https://placehold.co/64x64/8a4dff/ffffff?text=PPC' },
  { title: 'Social Media Management', description: 'Build a thriving community around your brand with our expert social media management.', icon: 'https://placehold.co/64x64/8a4dff/ffffff?text=SMM' },
  { title: 'Content Marketing', description: 'Engage your audience and establish your authority with high-quality content.', icon: 'https://placehold.co/64x64/8a4dff/ffffff?text=CM' },
  { title: 'Email Marketing', description: 'Nurture leads and drive conversions with personalized email marketing campaigns.', icon: 'https://placehold.co/64x64/8a4dff/ffffff?text=EM' },
  { title: 'Analytics & Reporting', description: 'Gain actionable insights into your marketing performance with our comprehensive analytics.', icon: 'https://placehold.co/64x64/8a4dff/ffffff?text=AR' },
];

const testimonials = [
    { name: 'Sarah Johnson', company: 'Founder of TechNova', comment: 'Working with Growth.meta has been a game-changer for our business. Their strategic approach to digital marketing has helped us achieve unprecedented growth.', avatar: 'https://placehold.co/100x100/8a4dff/ffffff?text=SJ' },
    { name: 'Michael Chen', company: 'Marketing Director at Innovate Inc.', comment: 'The team at Growth.meta is incredibly knowledgeable and dedicated. They took the time to understand our unique needs and delivered a customized strategy that exceeded our expectations.', avatar: 'https://placehold.co/100x100/8a4dff/ffffff?text=MC' },
];

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="space-y-24">
      <section className="relative pt-16 pb-24 text-center">
        <div className="container mx-auto px-4">
            <h1 className="text-6xl font-extrabold text-balance leading-tight mb-4">Unlock Your Business&apos;s Full Potential</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-balance">We are a team of passionate marketers dedicated to helping you achieve explosive growth through innovative and data-driven strategies.</p>
            <div className="mt-12 flex justify-center gap-4">
                <a href="/get-started" className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full shadow-lg glow-effect">Get Started Today <ArrowRightIcon className="w-5 h-5 ml-2"/></a>
                <a href="/watch-demo" className="inline-flex items-center justify-center px-8 py-4 font-semibold text-gray-900 bg-white rounded-full shadow-lg dark:bg-gray-800 dark:text-white glow-effect">Watch Demo</a>
            </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50 dark:bg-gray-800 rounded-3xl lifted-shadow">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">A Suite of Services to Fuel Your Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-2xl lifted-shadow transform hover:-translate-y-2 transition-transform duration-300">
                <Image src={service.icon} alt={service.title} width={64} height={64} className="rounded-full mb-6" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                <a href="#" className="text-purple-500 font-semibold mt-6 inline-block">Learn More <ArrowRightIcon className="w-4 h-4 inline"/></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl lifted-shadow">
                <div className="flex items-center mb-6">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={80} height={80} className="rounded-full" />
                  <div className="ml-6">
                    <h4 className="text-xl font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 text-balance">“{testimonial.comment}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800 rounded-3xl lifted-shadow">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">From the Blog: Latest Insights</h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
