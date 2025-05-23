import React from "react";
import { Link } from "react-router-dom";

const HeroBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-brand-700 to-brand-500 text-white py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hear Better, Live Better
            </h1>
            <p className="text-lg mb-6 text-white/90">
              Discover our premium collection of wireless headphones and cutting-edge electronics designed to elevate your audio experience and modern lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-white text-brand-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                Explore Our Story
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Premium Wireless Headphones"
                className="w-full rounded-lg h-48 md:h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;