import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";
import { getAllCategories } from "../data/products";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";

const categories = getAllCategories();

const Navbar: React.FC = () => {
  const { cartItemsCount } = useCart();
  const { user, isAuthenticated, logout } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-brand-600 font-bold text-2xl">
            Aetheris-Lifestyle
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-brand-600 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-brand-600 transition-colors flex items-center">
                Products
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/products?category=${category}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50"
                  >
                    {category}
                  </Link>
                ))}
                <Link
                  to="/products"
                  className="block px-4 py-2 text-sm text-brand-600 font-semibold hover:bg-brand-50"
                >
                  View All Products
                </Link>
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-brand-600 transition-colors">
              About Aetheris-Lifestyle
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-brand-600 transition-colors"
            >
              <Search size={20} />
            </button>

            {/* Cart */}
            <Link to="/cart" className="text-gray-700 hover:text-brand-600 transition-colors relative">
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* User Menu */}
            {isAuthenticated ? (
              <div className="relative group">
                <button className="text-gray-700 hover:text-brand-600 transition-colors">
                  <User size={20} />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="px-4 py-2 text-sm text-gray-500">
                    Hello, {user?.name}
                  </div>
                  <Link
                    to="/account"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50"
                  >
                    My Account
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50"
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-brand-50"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-brand-600 transition-colors">
                <User size={20} />
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-brand-600 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Bar - Conditionally rendered */}
        {isSearchOpen && (
          <div className="mt-4 flex">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button className="bg-brand-600 text-white px-4 py-2 rounded-r-md hover:bg-brand-700 transition-colors">
              <Search size={20} />
            </button>
          </div>
        )}

        {/* Mobile Menu - Conditionally rendered */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-2 border-t">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              All Products
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="block py-2 pl-4 text-sm text-gray-700 hover:text-brand-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {category}
              </Link>
            ))}
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Aetheris-Lifestyle
            </Link>
            {!isAuthenticated && (
              <Link
                to="/login"
                className="block py-2 text-gray-700 hover:text-brand-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;