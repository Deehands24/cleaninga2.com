import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cleaning Tips, Guides & Industry News',
  description: 'Expert cleaning tips, comprehensive guides, product reviews, and industry insights. Learn from professional cleaners and improve your cleaning routine.',
  openGraph: {
    title: 'Cleaning Blog - Tips, Guides & Reviews | CleaningA2.com',
    description: 'Expert cleaning tips, comprehensive guides, product reviews, and industry insights.',
  },
};

const blogPosts = [
  {
    slug: 'ultimate-house-cleaning-checklist',
    title: 'The Ultimate House Cleaning Checklist for 2025',
    excerpt: 'A comprehensive room-by-room cleaning guide that professional cleaners use. Never miss a spot again with our detailed checklist.',
    category: 'Guides',
    author: 'Sarah Johnson',
    date: 'January 15, 2025',
    readTime: '8 min read',
    image: '🏠',
  },
  {
    slug: 'deep-cleaning-vs-regular-cleaning',
    title: 'Deep Cleaning vs Regular Cleaning: What\'s the Difference?',
    excerpt: 'Understand when you need deep cleaning services and how they differ from regular maintenance cleaning.',
    category: 'Education',
    author: 'Mike Davis',
    date: 'January 12, 2025',
    readTime: '6 min read',
    image: '✨',
  },
  {
    slug: 'best-cleaning-products-2025',
    title: 'Top 10 Eco-Friendly Cleaning Products of 2025',
    excerpt: 'Our expert review of the best environmentally safe cleaning products that actually work.',
    category: 'Product Reviews',
    author: 'Emma Wilson',
    date: 'January 10, 2025',
    readTime: '10 min read',
    image: '🌱',
  },
  {
    slug: 'remove-tough-stains',
    title: 'How to Remove Tough Stains: A Professional\'s Guide',
    excerpt: 'From wine to grease to ink - learn the professional techniques for removing any stain from any surface.',
    category: 'Tips & Tricks',
    author: 'David Brown',
    date: 'January 8, 2025',
    readTime: '7 min read',
    image: '🧽',
  },
  {
    slug: 'hire-cleaning-service-guide',
    title: 'How to Hire the Right Cleaning Service: Complete Guide',
    excerpt: 'Everything you need to know about hiring a cleaning service - from vetting companies to understanding pricing.',
    category: 'Guides',
    author: 'Lisa Anderson',
    date: 'January 5, 2025',
    readTime: '12 min read',
    image: '📋',
  },
  {
    slug: 'spring-cleaning-tips',
    title: '25 Spring Cleaning Tips to Refresh Your Home',
    excerpt: 'Make spring cleaning easier with these expert tips and time-saving strategies.',
    category: 'Seasonal',
    author: 'Sarah Johnson',
    date: 'January 3, 2025',
    readTime: '9 min read',
    image: '🌸',
  },
  {
    slug: 'commercial-cleaning-best-practices',
    title: 'Office Cleaning Best Practices for Businesses',
    excerpt: 'Maintain a healthy, productive workplace with these commercial cleaning best practices.',
    category: 'Commercial',
    author: 'Mike Davis',
    date: 'December 28, 2024',
    readTime: '8 min read',
    image: '🏢',
  },
  {
    slug: 'carpet-cleaning-methods',
    title: 'Carpet Cleaning Methods Compared: Which is Best?',
    excerpt: 'Steam cleaning, dry cleaning, or shampooing? We compare all carpet cleaning methods.',
    category: 'Education',
    author: 'Emma Wilson',
    date: 'December 25, 2024',
    readTime: '10 min read',
    image: '🧹',
  },
];

const categories = ['All', 'Guides', 'Tips & Tricks', 'Product Reviews', 'Education', 'Seasonal', 'Commercial'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Cleaning Blog
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Expert tips, comprehensive guides, and industry insights to help you maintain a cleaner, healthier space
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                  category === 'All'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {post.image}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Get weekly cleaning tips, exclusive guides, and special offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
