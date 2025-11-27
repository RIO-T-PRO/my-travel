"use client";

import { useState } from "react";
import Link from "next/link";
import { resources } from "@/lib/data";

export default function ResourcesPage() {
  const [email, setEmail] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Planning", "Destinations", "Tips", "Inspiration"];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-slate-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&h=500&fit=crop"
            alt="Travel resources"
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Ultimate Travel Toolkit
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Your guide to seamless adventures. Travel smarter, not harder.
          </p>

          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full px-6 py-4 pr-24 text-white rounded-lg focus:ring-2 focus:ring-primary outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-card-dark">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
          Featured Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <Link
              key={resource.id}
              href={resource.link}
              className="group bg-white dark:bg-card-dark rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3">
                  {resource.category}
                </span>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  {resource.description}
                </p>

                <div className="flex items-center text-primary font-semibold text-sm">
                  Read More
                  <span className="material-icons-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-icons-outlined text-primary text-3xl">
                email
              </span>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Stay Inspired
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Get a weekly dose of travel inspiration and exclusive deals
              delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
