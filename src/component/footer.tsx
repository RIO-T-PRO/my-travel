import Link from "next/link";

import {
  FaApple,
  FaGooglePlay,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 px-4 sm:px-6 md:px-8 lg:px-8 py-8 md:py-10 lg:py-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-12">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            go<span className="text-blue-500">explore</span>
          </h1>
          <p className="mt-3 text-gray-400 md:w-72">
            Discover the world with ease. Plan, book, and explore your next
            destination today.
          </p>
        </div>

        {/* Download Apps */}
        <div className="text-center md:text-right">
          <p className="text-white font-medium mb-4">Download the App</p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-4">
            <button className="flex items-center gap-3 border border-gray-600 rounded-lg px-4 py-2 hover:border-blue-500 transition">
              <FaApple className="text-2xl text-white" />
              <div className="text-left">
                <p className="text-xs">Download on the</p>
                <h3 className="text-sm font-semibold text-white">App Store</h3>
              </div>
            </button>

            <button className="flex items-center gap-3 border border-gray-600 rounded-lg px-4 py-2 hover:border-blue-500 transition">
              <FaGooglePlay className="text-2xl text-white" />
              <div className="text-left">
                <p className="text-xs">Get it on</p>
                <h3 className="text-sm font-semibold text-white">
                  Google Play
                </h3>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-16">
        {/* Countries */}
        <div>
          <h3 className="text-white font-semibold mb-4">Available Countries</h3>
          <ul className="flex flex-col gap-2">
            <li>Australia</li>
            <li>Canada</li>
            <li>United States</li>
            <li>Germany</li>
            <li>Japan</li>
            <li>UAE</li>
            <li className="text-blue-500 hover:underline cursor-pointer">
              More Countries →
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">Trips</Link>
            </li>
            <li>
              <Link href="#">Reviews</Link>
            </li>
            <li>
              <Link href="#">Resources</Link>
            </li>
            <li>
              <Link href="#">features</Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-white font-semibold mb-4">Policies</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="#">Privacy</Link>
            </li>
            <li>
              <Link href="#">Cookies</Link>
            </li>
            <li>
              <Link href="#">Terms of Use</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-semibold mb-4">Help</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="#">Support</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">Cancel a Ticket</Link>
            </li>
            <li>
              <Link href="#">Buy Ticket</Link>
            </li>
            <li>
              <Link href="#">Book a Trip</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-10"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        {/* Social Icons */}
        <div className="flex items-center gap-6 text-gray-400">
          <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer transition" />
          <FaLinkedinIn className="hover:text-blue-600 cursor-pointer transition" />
        </div>

        {/* Legal Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center">
          <Link href="#" className="hover:text-white transition">
            Terms of Service
          </Link>
          <Link href="#" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <p className="text-gray-500">
            © 2025 Riot-Pro-Alex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
