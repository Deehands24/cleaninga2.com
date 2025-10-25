import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type BlogPost = {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
};

const blogPosts: Record<string, BlogPost> = {
  'ultimate-house-cleaning-checklist': {
    slug: 'ultimate-house-cleaning-checklist',
    title: 'The Ultimate House Cleaning Checklist for 2025',
    excerpt: 'A comprehensive room-by-room cleaning guide that professional cleaners use. Never miss a spot again with our detailed checklist.',
    category: 'Guides',
    author: 'Sarah Johnson',
    date: 'January 15, 2025',
    readTime: '8 min read',
    image: '🏠',
    content: `
Professional house cleaning doesn't have to be overwhelming. With this comprehensive checklist, you'll clean your home like a pro, ensuring no area is overlooked.

## Why You Need a Cleaning Checklist

Studies show that people who use cleaning checklists:
- Complete tasks 40% faster
- Feel less stressed about cleaning
- Maintain cleaner homes consistently
- Save money by preventing deep cleaning emergencies

## Kitchen Cleaning Checklist

### Daily Tasks
- Wipe down countertops and backsplash
- Clean sink and faucet
- Sweep floor
- Load/unload dishwasher
- Wipe down appliance surfaces

### Weekly Tasks
- Mop floors thoroughly
- Clean inside microwave
- Wipe down cabinet fronts
- Clean stovetop and oven exterior
- Sanitize trash can
- Clean refrigerator shelves

### Monthly Tasks
- Deep clean oven interior
- Clean under appliances
- Descale coffee maker
- Organize and clean pantry
- Clean light fixtures
- Wash kitchen windows

## Bathroom Cleaning Checklist

### Daily Tasks
- Wipe down sink and counter
- Quick toilet bowl clean
- Squeegee shower doors
- Hang up towels and bath mats

### Weekly Tasks
- Scrub toilet inside and out
- Clean shower/tub thoroughly
- Mop floors
- Clean mirrors
- Empty trash
- Wash bath mats and towels

### Monthly Tasks
- Descale showerhead
- Clean exhaust fan
- Organize under-sink cabinets
- Wash shower curtain/liner
- Deep clean grout
- Polish fixtures

## Living Room & Bedrooms

### Daily Tasks
- Make beds
- Quick pick-up of clutter
- Fluff pillows and cushions

### Weekly Tasks
- Vacuum all floors and carpets
- Dust all surfaces
- Clean mirrors
- Empty trash cans
- Change bed linens

### Monthly Tasks
- Vacuum under furniture
- Clean baseboards
- Dust ceiling fans and light fixtures
- Vacuum upholstery
- Clean windows
- Rotate mattress

## Professional Tips for Faster Cleaning

1. **Top to Bottom**: Always clean from ceiling to floor to avoid re-cleaning
2. **Left to Right**: Move systematically around the room
3. **One Room at a Time**: Complete each room before moving on
4. **Use Quality Tools**: Microfiber cloths and a good vacuum make a huge difference
5. **Set a Timer**: Challenge yourself to stay focused

## When to Hire Professional Help

Consider professional cleaning services when:
- You're moving in or out
- Hosting a major event
- Recovering from illness
- Dealing with tough stains or odors
- You simply need time back in your life

[Get a Free Quote](/quote) from local cleaning professionals.

## Seasonal Deep Cleaning Tasks

### Spring
- Wash windows inside and out
- Clean curtains and blinds
- Shampoo carpets
- Clean outdoor spaces

### Summer
- Deep clean HVAC systems
- Organize garage and storage
- Power wash exterior
- Clean gutters

### Fall
- Prepare home for winter
- Clean chimney and fireplace
- Organize closets
- Deep clean before holidays

### Winter
- Focus on indoor air quality
- Deep clean kitchens before/after holidays
- Organize and declutter

## Cleaning Products You Actually Need

Essential cleaning supplies:
- All-purpose cleaner
- Glass cleaner
- Bathroom disinfectant
- Floor cleaner
- Microfiber cloths (multiple)
- Scrub brushes
- Vacuum with attachments
- Mop and bucket

[Check out our recommended cleaning products](/affiliates)

## Maintaining Your Clean Home

Once you've deep cleaned using this checklist:
- Stick to daily quick-cleans (15 minutes)
- Do weekly tasks every Saturday morning
- Schedule monthly tasks on your calendar
- Don't let clutter accumulate

## Conclusion

A clean home is a happy home. By following this checklist consistently, you'll maintain a spotless space without the stress. Remember, cleaning is easier when you have a system!

Need professional help? [Find top-rated cleaners in your area](/directory).

---

*Have questions about cleaning? [Contact us](/quote) or read more [cleaning tips and guides](/blog).*
    `,
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  // JSON-LD for Article
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'CleaningA2.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cleaninga2.com/logo.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-block"
            >
              ← Back to Blog
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">{post.readTime}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>

            <div className="flex items-center gap-4 text-gray-600">
              <span>By {post.author}</span>
              <span>•</span>
              <time>{post.date}</time>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12">
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-li:text-gray-700
                prose-strong:text-gray-900
                prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content.split('\n').map(line => {
                if (line.startsWith('## ')) {
                  return `<h2>${line.substring(3)}</h2>`;
                } else if (line.startsWith('### ')) {
                  return `<h3>${line.substring(4)}</h3>`;
                } else if (line.startsWith('- ')) {
                  return `<li>${line.substring(2)}</li>`;
                } else if (line.startsWith('[')) {
                  const match = line.match(/\[(.+?)\]\((.+?)\)/);
                  if (match) {
                    return `<p><a href="${match[2]}">${match[1]}</a></p>`;
                  }
                }
                return line ? `<p>${line}</p>` : '';
              }).join('') }}
            />
          </div>

          {/* Share Buttons */}
          <div className="mt-12 flex items-center gap-4">
            <span className="font-medium text-gray-700">Share this article:</span>
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Facebook
              </button>
              <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition">
                Twitter
              </button>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                LinkedIn
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Professional Cleaning Help?</h3>
            <p className="text-gray-700 mb-6">
              Get instant quotes from top-rated cleaning services in your area
            </p>
            <Link href="/quote" className="btn-primary inline-block">
              Get Free Quote
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog" className="bg-white rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-2">Deep Cleaning vs Regular Cleaning</h3>
                <p className="text-gray-600 text-sm">Learn the key differences and when to use each...</p>
              </Link>
              <Link href="/blog" className="bg-white rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="font-bold text-lg mb-2">Best Cleaning Products of 2025</h3>
                <p className="text-gray-600 text-sm">Expert reviews of top eco-friendly cleaning supplies...</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
