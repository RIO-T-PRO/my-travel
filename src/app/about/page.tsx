import Image from "next/image";
import { teamMembers, milestones } from "@/lib/data";
import FAQAccordion from "@/component/FAQAccordion";
import { faqs } from "@/lib/data";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-primary-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=400&fit=crop"
            alt="Mountain landscape"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionizing Personalized Travel
          </h1>
          <p className="text-lg md:text-xl text-primary-light max-w-3xl mx-auto">
            We're here to help you create unique and memorable travel
            experiences, tailored just for you.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
              alt="Beautiful beach"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Our commitment is to craft specialized travel experiences that go
              beyond the destination. We believe in the power of personalized
              journeys to create lasting memories, connecting people with
              cultures and the beauty of the world.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We envision a world where travel is seamless, personal, and
              profoundly enriching for everyone. Through innovative technology
              and genuine care for our travelers, we're making this vision a
              reality.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary mb-1">10,000+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Happy Travelers
                </p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary mb-1">150+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Destinations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            Our Story
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            From a simple idea to a global community of travelers. Here's a look
            at our journey so far.
          </p>

          <div className="max-w-3xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex items-start gap-4 group"
              >
                <div className="shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-icons-outlined text-white text-2xl">
                    {milestone.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
                      {milestone.year}
                    </span>
                    <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {index === 0 &&
                      "The concept of GoExplore was born from a passion for making travel accessible and personalized for everyone."}
                    {index === 1 &&
                      "We successfully processed our first booking, marking the beginning of thousands of journeys to come."}
                    {index === 2 &&
                      "Expanded our network to cover over 150 destinations across 6 continents, making the world more accessible."}
                    {index === 3 &&
                      "Reached a milestone of 10,000 satisfied travelers who have trusted us with their adventures."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          Meet the Team
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          The passionate individuals behind GoExplore, dedicated to making your
          travel dreams a reality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="mb-4 mx-auto w-40 h-40 rounded-full overflow-hidden ring-4 ring-slate-200 dark:ring-slate-700 group-hover:ring-primary transition-all">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 px-4">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            Our Core Values
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            These principles guide everything we do at GoExplore
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "favorite",
                title: "Customer First",
                description:
                  "Every decision we make is centered around delivering the best experience for our travelers.",
              },
              {
                icon: "lightbulb",
                title: "Innovation",
                description:
                  "We constantly explore new ways to make travel booking simpler, faster, and more enjoyable.",
              },
              {
                icon: "verified_user",
                title: "Trust & Transparency",
                description:
                  "We build trust through honest communication and transparent pricing with no hidden fees.",
              },
              {
                icon: "diversity_3",
                title: "Inclusivity",
                description:
                  "Travel is for everyone. We strive to make our services accessible to travelers of all backgrounds.",
              },
              {
                icon: "eco",
                title: "Sustainability",
                description:
                  "We promote responsible travel practices and partner with eco-conscious hotels and airlines.",
              },
              {
                icon: "emoji_people",
                title: "Excellence",
                description:
                  "We are committed to excellence in every interaction, from booking to your return home.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-card-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="material-icons-outlined text-primary text-2xl">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          Got questions? We've got answers!
        </p>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-slate-800 text-white py-16">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=400&fit=crop"
            alt="Travel background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start exploring our destinations or let us help you plan your next
            great adventure. Your story awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Planning Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
