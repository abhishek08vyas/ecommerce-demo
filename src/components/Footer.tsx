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
            <h3 className="text-xl font-bold mb-4">Aetheris-Lifestyle</h3>
            <p className="text-gray-300 mb-4">
              Elevating your audio experience with premium headphones and cutting-edge electronics for the modern lifestyle.
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
                  About Us
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
                  to="/products?category=Headphones"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Headphones
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Wireless%20Earbuds"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Wireless Earbuds
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Gaming%20Audio"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gaming Audio
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Smart%20Electronics"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Smart Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Audio%20Accessories"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Audio Accessories
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
                  456 Tech Avenue, Innovation District, ID 67890
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:1-800-AETHERIS" className="text-gray-300 hover:text-white transition-colors">
                  1-800-AETHERIS
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@aetheris-lifestyle.com" className="text-gray-300 hover:text-white transition-colors">
                  info@aetheris-lifestyle.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">
            &copy; {currentYear} Aetheris-Lifestyle. All rights reserved.
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