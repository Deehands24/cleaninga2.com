import QuoteForm from '@/components/forms/QuoteForm';

export const metadata = {
  title: 'Get Free Instant Quote - CleaningA2.com',
  description: 'Get an instant quote for professional cleaning services. Select from pre-priced options and receive your estimate immediately.',
};

export default function QuotePage() {
  return (
    <div className="py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Your Free Instant Quote
          </h1>
          <p className="text-xl text-gray-600">
            Select your services and get accurate pricing in minutes
          </p>
        </div>

        <QuoteForm />
      </div>
    </div>
  );
}
