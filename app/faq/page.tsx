import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Cleaning Services FAQ',
  description: 'Get answers to common questions about professional cleaning services, pricing, scheduling, and more. Everything you need to know before hiring a cleaner.',
};

const faqs = [
  {
    category: 'General Questions',
    questions: [
      {
        q: 'How much does professional cleaning cost?',
        a: 'Professional cleaning costs vary based on several factors including home size, service type, and frequency. Standard house cleaning typically ranges from $120-$300, while deep cleaning can cost $250-$600. Regular weekly or bi-weekly service usually comes with discounted rates.',
      },
      {
        q: 'Do I need to be home during the cleaning?',
        a: 'No, you don\'t need to be home during cleaning. Many customers provide a key, garage code, or smart lock access for convenience. All our cleaners are insured, bonded, and background-checked.',
      },
      {
        q: 'How long does a typical cleaning take?',
        a: 'Standard house cleaning typically takes 2-4 hours, while deep cleaning can take 4-8 hours depending on home size and condition. Move-in/out cleaning usually takes 3-6 hours.',
      },
      {
        q: 'What\'s the difference between standard and deep cleaning?',
        a: 'Standard cleaning includes regular maintenance tasks like vacuuming, mopping, dusting, and bathroom/kitchen cleaning. Deep cleaning includes everything in standard cleaning PLUS intensive tasks like cleaning inside appliances, scrubbing grout, baseboards, door frames, and hard-to-reach areas.',
      },
      {
        q: 'Are cleaning services insured?',
        a: 'Yes, all verified cleaning companies on our platform carry liability insurance and workers\' compensation insurance. This protects you in case of accidental damage or injuries.',
      },
    ],
  },
  {
    category: 'Booking & Scheduling',
    questions: [
      {
        q: 'How do I book a cleaning service?',
        a: 'Booking is easy! Simply fill out our instant quote form, select your desired services, review quotes from local providers, and book directly online. The entire process takes less than 5 minutes.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'We recommend booking at least 2-3 days in advance for best availability. However, many cleaners offer same-day or next-day service based on their schedule.',
      },
      {
        q: 'Can I schedule recurring cleanings?',
        a: 'Yes! Most cleaning companies offer weekly, bi-weekly, or monthly recurring service at discounted rates compared to one-time cleaning.',
      },
      {
        q: 'What if I need to cancel or reschedule?',
        a: 'Cancellation policies vary by company, but most require 24-48 hours notice for rescheduling or cancellation to avoid fees. Check with your specific cleaner for their policy.',
      },
    ],
  },
  {
    category: 'Cleaning Details',
    questions: [
      {
        q: 'What cleaning products do professionals use?',
        a: 'Most professional cleaners use commercial-grade, eco-friendly cleaning products. You can also request that cleaners use your own preferred products if you have specific preferences or allergies.',
      },
      {
        q: 'Do I need to provide cleaning supplies and equipment?',
        a: 'No, professional cleaners bring all necessary supplies and equipment including vacuum cleaners, mops, and cleaning solutions. However, you can request they use your products if preferred.',
      },
      {
        q: 'Will the same cleaner come each time?',
        a: 'For recurring services, most companies strive to send the same cleaner(s) to maintain consistency and familiarity with your home. However, substitutes may occasionally be needed due to scheduling.',
      },
      {
        q: 'What should I do to prepare for the cleaners?',
        a: 'Pick up personal items, toys, and clutter from floors and surfaces. Secure any valuable or fragile items. Provide access to your home and inform the cleaner of any specific areas of concern.',
      },
      {
        q: 'Can I request specific areas to focus on?',
        a: 'Absolutely! When booking, you can specify areas that need extra attention. Communicate with your cleaner about any problem areas or special requests.',
      },
    ],
  },
  {
    category: 'Specialized Services',
    questions: [
      {
        q: 'Do you offer move-in/move-out cleaning?',
        a: 'Yes! Move-in/move-out cleaning is one of our most popular services. It includes thorough cleaning of the entire property, including inside cabinets, appliances, and often includes carpet cleaning.',
      },
      {
        q: 'Can you clean after construction or renovation?',
        a: 'Yes, post-construction cleaning is a specialized service that removes dust, debris, and construction residue. It typically requires special equipment and techniques.',
      },
      {
        q: 'Do you offer carpet and upholstery cleaning?',
        a: 'Yes, professional carpet cleaning using hot water extraction (steam cleaning) is available. Many companies also offer upholstery and furniture cleaning.',
      },
      {
        q: 'What about window cleaning?',
        a: 'Window cleaning (interior and/or exterior) is available either as part of deep cleaning or as a standalone service. High windows may require specialized equipment.',
      },
    ],
  },
  {
    category: 'Pricing & Payment',
    questions: [
      {
        q: 'How is cleaning service priced?',
        a: 'Pricing is typically based on home size (square footage or number of bedrooms/bathrooms), service type, frequency, and home condition. Get an instant quote on our platform for accurate pricing.',
      },
      {
        q: 'Are there any hidden fees?',
        a: 'No hidden fees! All costs are disclosed upfront in your quote. Additional charges may apply only for add-on services you specifically request.',
      },
      {
        q: 'What payment methods are accepted?',
        a: 'Most companies accept credit/debit cards, cash, and digital payments. Payment is typically collected after service completion.',
      },
      {
        q: 'Do I tip cleaning professionals?',
        a: 'Tipping is appreciated but not required. If you\'re happy with the service, a 15-20% tip is customary, similar to other service industries.',
      },
    ],
  },
  {
    category: 'Quality & Safety',
    questions: [
      {
        q: 'What if I\'m not satisfied with the cleaning?',
        a: 'Most reputable cleaning companies offer a satisfaction guarantee. If you\'re not happy with the service, contact the company within 24-48 hours and they\'ll typically return to address any issues free of charge.',
      },
      {
        q: 'Are cleaners background checked?',
        a: 'Yes, all professional cleaning companies on our platform conduct background checks on their employees. Ask individual companies about their specific vetting process.',
      },
      {
        q: 'What about COVID-19 safety measures?',
        a: 'Professional cleaners follow enhanced safety protocols including use of EPA-approved disinfectants, personal protective equipment, and regular health screenings.',
      },
      {
        q: 'What if something gets damaged during cleaning?',
        a: 'All verified cleaners carry liability insurance to cover accidental damage. Report any issues immediately to the cleaning company, and they\'ll work with you to resolve it through their insurance.',
      },
    ],
  },
];

export default function FAQPage() {
  // JSON-LD for FAQ Page
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.flatMap((category) =>
      category.questions.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Everything you need to know about professional cleaning services
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-white border-b py-6 sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {faqs.map((category) => (
                <a
                  key={category.category}
                  href={`#${category.category.toLowerCase().replace(/ /g, '-')}`}
                  className="px-4 py-2 bg-gray-100 hover:bg-primary-100 hover:text-primary-700 rounded-full font-medium whitespace-nowrap transition"
                >
                  {category.category}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqs.map((category, categoryIndex) => (
              <div
                key={category.category}
                id={category.category.toLowerCase().replace(/ /g, '-')}
                className={categoryIndex > 0 ? 'mt-16' : ''}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((faq, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
                      <h3 className="font-bold text-lg mb-3 text-gray-900 flex items-start">
                        <span className="text-primary-600 mr-3 text-xl">Q:</span>
                        {faq.q}
                      </h3>
                      <p className="text-gray-700 ml-8">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions? */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-8">
              Can't find the answer you're looking for? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" className="btn-primary">
                Get Free Quote
              </Link>
              <Link href="/blog" className="btn-secondary">
                Read Our Blog
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Resources */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Popular Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/ultimate-house-cleaning-checklist" className="card hover:shadow-xl transition">
                <h3 className="font-bold text-lg mb-2">Ultimate Cleaning Checklist</h3>
                <p className="text-gray-600 text-sm">Comprehensive room-by-room guide</p>
              </Link>
              <Link href="/services/deep-cleaning" className="card hover:shadow-xl transition">
                <h3 className="font-bold text-lg mb-2">Deep Cleaning Guide</h3>
                <p className="text-gray-600 text-sm">When and why you need deep cleaning</p>
              </Link>
              <Link href="/directory" className="card hover:shadow-xl transition">
                <h3 className="font-bold text-lg mb-2">Find Local Cleaners</h3>
                <p className="text-gray-600 text-sm">Browse verified cleaning companies</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
