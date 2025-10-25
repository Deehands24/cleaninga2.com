export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Ann Arbor, MI",
      rating: 5,
      text: "I found an amazing cleaning service through this site! The quote process was instant and I had my home cleaned within 2 days. Highly recommend!",
      service: "Deep Cleaning",
    },
    {
      name: "Michael Chen",
      location: "Detroit, MI",
      rating: 5,
      text: "Best platform for comparing cleaning services. Saved me hours of research and got me the best price. The cleaner they recommended was professional and thorough.",
      service: "House Cleaning",
    },
    {
      name: "Jennifer Rodriguez",
      location: "Grand Rapids, MI",
      rating: 5,
      text: "Moving is stressful enough. CleaningA2 made finding a move-out cleaning service so easy. The apartment was spotless and I got my full deposit back!",
      service: "Move-Out Cleaning",
    },
    {
      name: "David Thompson",
      location: "Lansing, MI",
      rating: 5,
      text: "As a property manager, I use this site regularly to find reliable cleaning services for my units. The quality has been consistently excellent.",
      service: "Multiple Services",
    },
    {
      name: "Lisa Anderson",
      location: "Troy, MI",
      rating: 5,
      text: "The blog articles helped me understand what to look for in a cleaning service. Found a great local company and have been using them monthly for 6 months now!",
      service: "Regular Cleaning",
    },
    {
      name: "Robert Garcia",
      location: "Ann Arbor, MI",
      rating: 5,
      text: "Quick, easy, and professional. Got 3 quotes within an hour and booked the same day. My office has never looked better!",
      service: "Office Cleaning",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Thousands of satisfied customers have found their perfect cleaner through CleaningA2
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-sm text-primary-600 mt-1">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">4.8/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
            <div className="text-gray-600">Verified Cleaners</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Cities Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}
