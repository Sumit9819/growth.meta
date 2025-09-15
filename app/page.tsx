import Image from 'next/image';
import { getPosts } from './lib/data';
import { PostCard } from './components/PostCard';

const services = [
  { title: 'Search Engine Optimization', description: 'Suspendisse potenti. Nunc luctus, turpis vitae malesuada placerat, enim turpis nonummy elit, et faucibus felis sapien eget enim.', icon: 'https://placehold.co/40x40' },
  { title: 'Pay-Per-Click Advertising', description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent pulvinar, est nec commodo. ', icon: 'https://placehold.co/40x40' },
  { title: 'Social Media Management', description: 'Donec at nisl. Aenean id sem. Phasellus ut turpis. Sed viverra, est at varius tincidunt, urna lorem laoreet, nonummy sit amet.', icon: 'https://placehold.co/40x40' },
  { title: 'Content Marketing', description: 'Maecenas eget nisl. In egestas, turpis ut vehicula dapibus, quam justo cursus ipsum, et viverra nisl mi eget turpis.', icon: 'https://placehold.co/40x40' },
  { title: 'Email Marketing', description: 'Integer in nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', icon: 'https://placehold.co/40x40' },
  { title: 'Analytics & Reporting', description: 'Mauris purus. Donec est nunc, ornare non, aliquet non, tempus vel, dolor. Integer sapien. Nunc turpis. ', icon: 'https://placehold.co/40x40' },
];

const testimonials = [
    { name: 'John Doe', company: 'CEO at Company', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', avatar: 'https://placehold.co/100x100' },
    { name: 'Jane Smith', company: 'Marketing Manager at Another Company', comment: 'Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.', avatar: 'https://placehold.co/100x100' },
];

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">Drive Growth with Data-Driven Marketing</h1>
              <p className="text-gray-600 mt-4">Growth Hacking helps businesses scale their digital presence through strategic SEO, targeted PPC campaigns, engaging social media, and conversion-focused marketing strategies.</p>
              <div className="mt-8">
                <a href="/get-started" className="bg-blue-500 text-white px-6 py-3 rounded-md">Get Started Today</a>
                <a href="/watch-demo" className="text-blue-500 ml-4">Watch Demo</a>
              </div>
            </div>
            <div className="w-1/2">
              <Image src="https://placehold.co/600x400" alt="Marketing Image" width={600} height={400} />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <Image src={service.icon} alt={service.title} width={40} height={40} />
                <h3 className="text-2xl font-bold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <a href="#" className="text-blue-500 mt-4 inline-block">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <Image src="https://placehold.co/600x400" alt="Business Growth Image" width={600} height={400} />
            </div>
            <div className="w-1/2 pl-12">
              <h2 className="text-4xl font-bold text-gray-900">Everything you need to grow your business</h2>
              <p className="text-gray-600 mt-4">We provide a complete suite of marketing services designed to help you achieve your business goals. From SEO to social media, we have you covered.</p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="ml-3">Strategic SEO</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="ml-3">Targeted PPC Campaigns</span>
                </li>
                 <li className="flex items-start">
                  <div className="bg-green-500 rounded-full p-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="ml-3">Engaging Social Media</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image src={testimonial.avatar} alt={testimonial.name} width={60} height={60} className="rounded-full" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Latest Insights</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
