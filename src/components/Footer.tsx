import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SleepWell</h3>
            <p className="text-gray-300 mb-4">
              Providing quality sleep apnea treatments and solutions for better rest and improved health.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Sleep Apnea
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products?category=CPAP Machines"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  CPAP Machines
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=CPAP Masks"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  CPAP Masks
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Accessories"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Travel CPAP"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Travel CPAP
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Alternative Treatments"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Alternative Treatments
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1" />
                <span className="text-gray-300">
                  123 Sleep Street, Restful City, RC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:1-800-SLEEP-WELL" className="text-gray-300 hover:text-white transition-colors">
                  1-800-SLEEP-WELL
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@sleepwell.com" className="text-gray-300 hover:text-white transition-colors">
                  info@sleepwell.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">
            &copy; {currentYear} SleepWell. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors mx-2">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors mx-2">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors mx-2">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;