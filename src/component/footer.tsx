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
    <footer className="bg-slate-900 text-slate-400 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-2">
              go<span className="text-primary">explore</span>
            </h3>
            <p className="text-sm mb-4">Your next adventure starts here.</p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="bg-slate-800 text-white p-2 rounded-md hover:bg-slate-700"
              >
                <span className="text-xs">App Store</span>
              </Link>
              <Link
                href="#"
                className="bg-slate-800 text-white p-2 rounded-md hover:bg-slate-700"
              >
                <span className="text-xs">Google Play</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">
              Available Countries
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary">
                  Australia
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Canada
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Denmark
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Finland
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  England
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline">
                  More Countries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Cancel a ticket
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Buy Ticket
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Book a trip
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 all rights reserved by goexplore inc.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
