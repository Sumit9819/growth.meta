import { ArrowRightIcon, ChartBarIcon, CommandLineIcon, CurrencyDollarIcon, MegaphoneIcon, PaintBrushIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';

const services = [
    { 
        title: 'Search Engine Optimization', 
        description: 'Our SEO strategies are designed to increase your visibility on search engines, driving organic traffic and generating qualified leads. We focus on keyword research, on-page optimization, link building, and technical SEO to ensure your website ranks for the terms that matter most to your business.', 
        icon: RocketLaunchIcon, 
        color: 'text-purple-500' 
    },
    { 
        title: 'Pay-Per-Click Advertising', 
        description: 'We create and manage targeted PPC campaigns across Google Ads, Bing Ads, and social media platforms. Our goal is to maximize your return on investment by optimizing your ad spend, improving your click-through rates, and driving conversions.', 
        icon: CurrencyDollarIcon, 
        color: 'text-green-500' 
    },
    { 
        title: 'Social Media Management', 
        description: 'We help you build a strong social media presence that engages your audience and promotes your brand. Our services include content creation, community management, and social media advertising to help you connect with your customers on a deeper level.', 
        icon: MegaphoneIcon, 
        color: 'text-blue-500' 
    },
    { 
        title: 'Content Marketing', 
        description: 'Our content marketing services are designed to attract, engage, and retain your target audience. We create high-quality blog posts, articles, infographics, and videos that establish your brand as an authority in your industry and drive organic traffic to your website.', 
        icon: PaintBrushIcon, 
        color: 'text-red-500' 
    },
    { 
        title: 'Web Development', 
        description: 'We design and develop beautiful, responsive, and user-friendly websites that are optimized for performance and conversions. Our team of experienced developers uses the latest technologies to create a website that not only looks great but also delivers results.', 
        icon: CommandLineIcon, 
        color: 'text-yellow-500' 
    },
    { 
        title: 'Analytics & Reporting', 
        description: 'We provide comprehensive analytics and reporting to help you track your marketing performance and make data-driven decisions. Our reports are customized to your specific goals and provide actionable insights that you can use to improve your marketing strategies.', 
        icon: ChartBarIcon, 
        color: 'text-indigo-500' 
    },
];

export default function ServicesPage() {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-6xl font-extrabold text-balance mb-4">Our Services</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 text-balance">We offer a comprehensive suite of digital marketing services designed to help you achieve your business goals and maximize your return on investment.</p>
            </div>

            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {services.map((service, index) => (
                    <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-8 lifted-shadow transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                        <div className="flex-shrink-0">
                            <service.icon className={`w-12 h-12 ${service.color}`} />
                        </div>
                        <div className="mt-6 flex-grow">
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                        </div>
                        <div className="mt-6">
                            <a href="/contact" className="font-semibold text-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Get a Quote <ArrowRightIcon className="w-4 h-4 inline"/></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}
