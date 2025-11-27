"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-background-light dark:bg-card-dark/80 backdrop-blur-sm sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-slate-900 dark:text-white"
          >
            go<span className="text-primary">explore</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/flights"
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Flights
            </Link>
            <Link
              href="/resorts"
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Resorts
            </Link>
            <Link
              href="/resources"
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors">
              Sign In
            </button>
            <button
              className="md:hidden text-slate-900 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-icons-outlined">menu</span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-slate-600 dark:text-slate-300 hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/flights"
              className="block py-2 text-slate-600 dark:text-slate-300 hover:text-primary"
            >
              Flights
            </Link>
            <Link
              href="/resorts"
              className="block py-2 text-slate-600 dark:text-slate-300 hover:text-primary"
            >
              Resorts
            </Link>
            <Link
              href="/resources"
              className="block py-2 text-slate-600 dark:text-slate-300 hover:text-primary"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="block py-2 text-slate-600 dark:text-slate-300 hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-slate-600 dark:text-slate-300 hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
