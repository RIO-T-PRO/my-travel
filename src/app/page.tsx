"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DestinationCard from "@/component/card/DestinationCard";
import TestimonialCard from "@/component/card/TestimonialCard";
import StatsSection from "@/component/StatsSection";
import { popularDestinations, testimonials } from "@/lib/data";

export default function HomePage() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const stats = [
    { label: "Happy Travelers", value: "10K+", icon: "people" },
    { label: "Destinations", value: "150+", icon: "public" },
    { label: "Airlines", value: "50+", icon: "flight" },
    { label: "Hotels & Resorts", value: "500+", icon: "hotel" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-primary-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=600&fit=crop"
            alt="Exotic beach with palm trees"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
            It's time for a new adventure!
          </h1>
          <p className="text-lg md:text-xl text-primary-light mb-8 max-w-2xl mx-auto">
            Let's find the perfect flight for your next journey.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative lg:col-span-1">
                <label className="text-sm font-medium text-white/80 mb-2 block text-left">
                  Origin
                </label>
                <div className="flex items-center bg-white/10 rounded-lg p-3">
                  <span className="material-icons-outlined text-white/70 mr-3">
                    flight_takeoff
                  </span>
                  <input
                    type="text"
                    placeholder="New York (JFK)"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full bg-transparent border-0 p-0 text-white placeholder-white/70 focus:ring-0 outline-none"
                  />
                </div>
              </div>

              <div className="relative lg:col-span-1">
                <label className="text-sm font-medium text-white/80 mb-2 block text-left">
                  Destination
                </label>
                <div className="flex items-center bg-white/10 rounded-lg p-3">
                  <span className="material-icons-outlined text-white/70 mr-3">
                    flight_land
                  </span>
                  <input
                    type="text"
                    placeholder="London (LHR)"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-transparent border-0 p-0 text-white placeholder-white/70 focus:ring-0 outline-none"
                  />
                </div>
              </div>

              <div className="relative lg:col-span-1">
                <label className="text-sm font-medium text-white/80 mb-2 block text-left">
                  Departure
                </label>
                <div className="flex items-center bg-white/10 rounded-lg p-3">
                  <span className="material-icons-outlined text-white/70 mr-3">
                    calendar_today
                  </span>
                  <input
                    type="text"
                    placeholder="Select date"
                    className="w-full bg-transparent border-0 p-0 text-white placeholder-white/70 focus:ring-0 outline-none"
                  />
                </div>
              </div>

              <div className="relative lg:col-span-1">
                <label className="text-sm font-medium text-white/80 mb-2 block text-left">
                  Passengers
                </label>
                <div className="flex items-center bg-white/10 rounded-lg p-3">
                  <span className="material-icons-outlined text-white/70 mr-3">
                    person_outline
                  </span>
                  <input
                    type="text"
                    placeholder="2 Adults"
                    className="w-full bg-transparent border-0 p-0 text-white placeholder-white/70 focus:ring-0 outline-none"
                  />
                </div>
              </div>

              <Link
                href="/flights"
                className="bg-primary text-white w-full flex items-center justify-center py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors lg:col-span-1 lg:self-end"
              >
                <span className="material-icons-outlined mr-2">search</span>
                Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12 -mt-8">
        <StatsSection stats={stats} />
      </section>

      {/* Popular Destinations */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Popular Destinations
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover amazing places around the world and create unforgettable
            memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDestinations.slice(0, 6).map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/resorts"
            className="inline-flex items-center text-primary hover:text-primary-dark font-semibold"
          >
            View All Destinations
            <span className="material-icons-outlined ml-1">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose GoExplore?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We make travel planning simple, affordable, and exciting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "verified",
                title: "Best Price Guarantee",
                description:
                  "Find the best deals or we'll refund the difference",
              },
              {
                icon: "support_agent",
                title: "24/7 Customer Support",
                description: "Our team is always here to help you, anytime",
              },
              {
                icon: "security",
                title: "Secure Booking",
                description:
                  "Your data is protected with industry-leading security",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-card-dark p-8 rounded-lg text-center border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-icons-outlined text-primary text-3xl">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Real stories from real travelers who trusted us with their journeys
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start exploring our destinations or let us help you plan your next
            great adventure. Your story awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/flights"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Book a Flight
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
