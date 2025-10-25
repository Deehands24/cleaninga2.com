'use client';

import { useState } from 'react';
import { CLEANING_SERVICES, calculateTotal } from '@/lib/services';
import { QuoteFormData } from '@/lib/types';

export default function QuoteForm() {
  const [step, setStep] = useState<'phone' | 'details' | 'summary'>('phone');
  const [formData, setFormData] = useState<Partial<QuoteFormData>>({
    services: [],
    estimatedTotal: 0,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handlePhoneSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;

    if (phone.length >= 10) {
      setFormData({ ...formData, phone });
      setStep('details');
    }
  };

  const toggleService = (serviceId: string) => {
    const services = formData.services || [];
    const newServices = services.includes(serviceId)
      ? services.filter(id => id !== serviceId)
      : [...services, serviceId];

    const total = calculateTotal(newServices, formData.squareFootage);
    setFormData({ ...formData, services: newServices, estimatedTotal: total });
  };

  const handleDetailsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const zipCode = (form.elements.namedItem('zipCode') as HTMLInputElement).value;
    const propertyType = (form.elements.namedItem('propertyType') as HTMLSelectElement).value as QuoteFormData['propertyType'];
    const squareFootage = parseInt((form.elements.namedItem('squareFootage') as HTMLInputElement).value || '0');
    const additionalNotes = (form.elements.namedItem('additionalNotes') as HTMLTextAreaElement).value;

    const total = calculateTotal(formData.services || [], squareFootage);

    setFormData({
      ...formData,
      name,
      email,
      zipCode,
      propertyType,
      squareFootage,
      additionalNotes,
      estimatedTotal: total,
    });

    setStep('summary');
  };

  const handleFinalSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('There was an error submitting your quote. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your quote. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12 animate-scale-in">
        <div className="bg-green-50 rounded-2xl p-8 mb-6">
          <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quote Submitted Successfully!</h2>
          <p className="text-xl text-gray-600 mb-2">
            Thank you for your request. Your estimated total is:
          </p>
          <p className="text-4xl font-bold text-primary-600 mb-4">
            ${formData.estimatedTotal}
          </p>
          <p className="text-gray-600">
            We've sent the details to your email ({formData.email}) and will contact you at {formData.phone} shortly.
          </p>
        </div>
        <button
          onClick={() => {
            setFormData({ services: [], estimatedTotal: 0 });
            setStep('phone');
            setSubmitted(false);
          }}
          className="btn-secondary"
        >
          Get Another Quote
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          <div className={`flex items-center ${step === 'phone' ? 'text-primary-600' : 'text-green-600'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold
              ${step === 'phone' ? 'bg-primary-600 text-white' : 'bg-green-600 text-white'}`}>
              {step === 'phone' ? '1' : '✓'}
            </div>
            <span className="ml-2 font-semibold">Phone</span>
          </div>
          <div className="w-16 h-1 bg-gray-300"></div>
          <div className={`flex items-center ${step === 'details' ? 'text-primary-600' : step === 'summary' ? 'text-green-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold
              ${step === 'details' ? 'bg-primary-600 text-white' : step === 'summary' ? 'bg-green-600 text-white' : 'bg-gray-300 text-white'}`}>
              {step === 'summary' ? '✓' : '2'}
            </div>
            <span className="ml-2 font-semibold">Details</span>
          </div>
          <div className="w-16 h-1 bg-gray-300"></div>
          <div className={`flex items-center ${step === 'summary' ? 'text-primary-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold
              ${step === 'summary' ? 'bg-primary-600 text-white' : 'bg-gray-300 text-white'}`}>
              3
            </div>
            <span className="ml-2 font-semibold">Review</span>
          </div>
        </div>
      </div>

      {/* Phone Gate Step */}
      {step === 'phone' && (
        <div className="card animate-slide-up">
          <h2 className="text-2xl font-bold mb-4">Get Your Free Instant Quote</h2>
          <p className="text-gray-600 mb-6">
            Enter your phone number to get started. We'll never share your information.
          </p>
          <form onSubmit={handlePhoneSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                pattern="[0-9]{10,}"
                placeholder="(555) 123-4567"
                className="input-field"
                defaultValue={formData.phone}
              />
              <p className="text-sm text-gray-500 mt-1">
                Required to receive your quote and schedule service
              </p>
            </div>
            <button type="submit" className="btn-primary w-full">
              Continue to Services
            </button>
          </form>
        </div>
      )}

      {/* Details Step */}
      {step === 'details' && (
        <div className="animate-slide-up">
          <form onSubmit={handleDetailsSubmit}>
            {/* Services Selection */}
            <div className="card mb-6">
              <h3 className="text-xl font-bold mb-4">Select Services</h3>
              <div className="space-y-3">
                {CLEANING_SERVICES.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300
                      ${(formData.services || []).includes(service.id)
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                      }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                        {service.duration && (
                          <p className="text-sm text-gray-500 mt-1">Duration: {service.duration}</p>
                        )}
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-xl font-bold text-primary-600">${service.basePrice}</p>
                        <span className={`inline-block w-5 h-5 rounded border-2 transition-all
                          ${(formData.services || []).includes(service.id)
                            ? 'bg-primary-600 border-primary-600'
                            : 'border-gray-300'
                          }`}>
                          {(formData.services || []).includes(service.id) && (
                            <svg className="text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Information */}
            <div className="card mb-6">
              <h3 className="text-xl font-bold mb-4">Your Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    pattern="[0-9]{5}"
                    className="input-field"
                    placeholder="12345"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Property Type *
                  </label>
                  <select name="propertyType" required className="input-field">
                    <option value="">Select...</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="office">Office</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Square Footage (optional)
                  </label>
                  <input
                    type="number"
                    name="squareFootage"
                    className="input-field"
                    placeholder="2000"
                    onChange={(e) => {
                      const sqft = parseInt(e.target.value) || 0;
                      const total = calculateTotal(formData.services || [], sqft);
                      setFormData({ ...formData, squareFootage: sqft, estimatedTotal: total });
                    }}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Helps us provide more accurate pricing for larger properties
                  </p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Additional Notes (optional)
                  </label>
                  <textarea
                    name="additionalNotes"
                    rows={4}
                    className="input-field"
                    placeholder="Any special requirements or preferences..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Current Total Display */}
            {(formData.services || []).length > 0 && (
              <div className="card bg-primary-50 border-2 border-primary-600 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-700 font-semibold">Current Estimate</p>
                    <p className="text-sm text-gray-600">{formData.services?.length} service(s) selected</p>
                  </div>
                  <p className="text-3xl font-bold text-primary-600">
                    ${formData.estimatedTotal}
                  </p>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setStep('phone')}
                className="btn-secondary flex-1"
              >
                Back
              </button>
              <button
                type="submit"
                className="btn-primary flex-1"
                disabled={(formData.services || []).length === 0}
              >
                Review Quote
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Summary Step */}
      {step === 'summary' && (
        <div className="animate-slide-up">
          <div className="card mb-6">
            <h2 className="text-2xl font-bold mb-6">Review Your Quote</h2>

            {/* Selected Services */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">Selected Services</h3>
              <div className="space-y-2">
                {CLEANING_SERVICES.filter(s => (formData.services || []).includes(s.id)).map((service) => (
                  <div key={service.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="font-medium">{service.name}</span>
                    <span className="font-bold text-primary-600">${service.basePrice}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Info */}
            <div className="mb-6 pb-6 border-b">
              <h3 className="text-lg font-bold mb-3">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Name</p>
                  <p className="font-semibold">{formData.name}</p>
                </div>
                <div>
                  <p className="text-gray-600">Phone</p>
                  <p className="font-semibold">{formData.phone}</p>
                </div>
                <div>
                  <p className="text-gray-600">Email</p>
                  <p className="font-semibold">{formData.email}</p>
                </div>
                <div>
                  <p className="text-gray-600">ZIP Code</p>
                  <p className="font-semibold">{formData.zipCode}</p>
                </div>
                <div>
                  <p className="text-gray-600">Property Type</p>
                  <p className="font-semibold capitalize">{formData.propertyType}</p>
                </div>
                {formData.squareFootage && (
                  <div>
                    <p className="text-gray-600">Square Footage</p>
                    <p className="font-semibold">{formData.squareFootage} sq ft</p>
                  </div>
                )}
              </div>
              {formData.additionalNotes && (
                <div className="mt-4">
                  <p className="text-gray-600">Additional Notes</p>
                  <p className="font-semibold">{formData.additionalNotes}</p>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="bg-primary-600 text-white p-6 rounded-lg mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-primary-100">Estimated Total</p>
                  <p className="text-sm text-primary-200">Final price may vary based on actual conditions</p>
                </div>
                <p className="text-4xl font-bold">${formData.estimatedTotal}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep('details')}
                className="btn-secondary flex-1"
                disabled={loading}
              >
                Back
              </button>
              <button
                onClick={handleFinalSubmit}
                className="btn-primary flex-1"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Quote Request'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
