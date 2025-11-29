"use client";

import { useState } from "react";
import Image from "next/image";
import { contactInfo } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-primary-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=400&fit=crop"
            alt="Contact us"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-primary-light max-w-2xl mx-auto">
            Have a question? We're here to help! Fill out the form below and
            we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-card-dark p-8 rounded-lg border border-slate-200 dark:border-slate-800 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send us a Message
              </h2>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3">
                  <span className="material-icons-outlined text-green-600 dark:text-green-400">
                    check_circle
                  </span>
                  <p className="text-green-800 dark:text-green-200">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Alex Andre"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Support</option>
                      <option value="cancellation">Cancellation</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-icons-outlined animate-spin">
                        refresh
                      </span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="material-icons-outlined">send</span>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white dark:bg-card-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center">
                    <span className="material-icons-outlined text-cyan-600 dark:text-cyan-400">
                      phone
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Phone
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {contactInfo.phone}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Mon-Fri: 9am - 6pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center">
                    <span className="material-icons-outlined text-cyan-600 dark:text-cyan-400">
                      email
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Email
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {contactInfo.email}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      24/7 email support
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center">
                    <span className="material-icons-outlined text-cyan-600 dark:text-cyan-400">
                      location_on
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Address
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white dark:bg-card-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Business Hours
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">
                    Monday - Friday
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">
                    Saturday
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">
                    Sunday
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Closed
                  </span>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    *Emergency support available 24/7 via email
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-card-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Follow Us
              </h3>
              <div className="grid grid-cols-4 gap-3">
                <button className="w-full aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors group">
                  <span className="material-icons-outlined group-hover:scale-110 transition-transform">
                    facebook
                  </span>
                </button>
                <button className="w-full aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors group">
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button className="w-full aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors group">
                  <span className="material-icons-outlined group-hover:scale-110 transition-transform">
                    camera_alt
                  </span>
                </button>
                <button className="w-full aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors group">
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-card-dark p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-lg">
            <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="material-icons-outlined text-slate-400 text-6xl mb-2">
                  location_on
                </span>
                <p className="text-slate-600 dark:text-slate-400">
                  Interactive Map Placeholder
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                  Integrate Google Maps or Mapbox here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
