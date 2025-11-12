import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="hidden lg:flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      {/* Logo */}
      <h1 className="text-3xl font-semibold text-gray-900">
        go<span className="text-blue-600">explore</span>
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-10 font-medium text-lg text-gray-700">
        <li className="hover:text-blue-600 transition-colors">
          <Link href="/">Discover</Link>
        </li>
        <li className="hover:text-blue-600 transition-colors">
          <Link href="/">Trips</Link>
        </li>
        <li className="hover:text-blue-600 transition-colors">
          <Link href="/">Review</Link>
        </li>
        <li className="hover:text-blue-600 transition-colors">
          <Link href="/">Resources</Link>
        </li>
        <li className="hover:text-blue-600 transition-colors">
          <Link href="/">About</Link>
        </li>
      </ul>

      {/* CTA Button */}
      <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition">
        Sign in
      </button>
    </nav>
  );
};

export default NavBar;
