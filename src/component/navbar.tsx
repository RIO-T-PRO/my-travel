"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Flights", href: "/flights" },
    { label: "Resorts", href: "/resorts" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const handleActiveLink = (link: string) => {
    return pathname === link;
  };

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
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                // onClick={() => setActiveLink(link.href)}
                className={`
                  ${
                    handleActiveLink(link.href)
                      ? "text-primary "
                      : " text-slate-200 "
                  }
                  hover:text-primary dark:hover:text-primary transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/signin">
              <button className="hidden md:block bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors">
                Sign In
              </button>
            </Link>
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
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`
                    block py-2 hover:text-primary
                    ${
                      handleActiveLink(link.href)
                        ? "text-primary font-semibold"
                        : "text-slate-600 dark:text-slate-300"
                    }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
