import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-16 px-12 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-white">
              go<span className="text-primary">explore</span>
            </h3>
            <p className="text-sm">Your next adventure starts here.</p>

            <div className="flex flex-row gap-4">
              <Link href="#" className="flex text-white items-center gap-2">
                <FaApple className="w-4 h-4" />
                <span className="text-xs font-semibold">App Store</span>
              </Link>
              <Link href="#" className="flex text-white  items-center gap-2">
                <FaGooglePlay className="w-4 h-4" />
                <span className="text-xs font-semibold">Google Play</span>
              </Link>
            </div>
          </div>

          {/* Available Countries */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Available Countries</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {["Australia", "Canada", "Denmark", "Finland", "England"].map(
                (country) => (
                  <li key={country}>
                    <Link href="#" className="inline-block hover:text-primary">
                      {country}
                    </Link>
                  </li>
                )
              )}
              <li>
                <Link
                  href="#"
                  className="inline-block text-primary hover:underline"
                >
                  More Countries
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {["About", "Contact", "Careers", "Resources"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="inline-block hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Policies</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {["Privacy", "Terms of Service", "Terms & Conditions"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="inline-block hover:text-primary">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white">Help</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                "Support",
                "Contact",
                "Cancel a ticket",
                "Buy Ticket",
                "Book a trip",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="inline-block hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-sm">
          <p>© 2024 all rights reserved by goexplore inc.</p>
          <div className="flex flex-row gap-4">
            <Link href="#" className="inline-block hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="inline-block hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
