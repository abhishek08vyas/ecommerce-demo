import React from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../data/products";

const categories = getAllCategories();

interface CategoryCardProps {
  category: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, image }) => {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(category)}`}
      className="group relative overflow-hidden rounded-lg"
    >
      <img
        src={image}
        alt={category}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
        <div>
          <h3 className="text-white text-lg font-semibold group-hover:text-brand-200 transition-colors">
            {category}
          </h3>
          <span className="text-white/70 text-sm group-hover:text-white/90 transition-colors">
            Shop Now
          </span>
        </div>
      </div>
    </Link>
  );
};

const CategorySection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category}
              category={category}
              image="https://plus.unsplash.com/premium_photo-1721829502786-982bcedd20d8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;