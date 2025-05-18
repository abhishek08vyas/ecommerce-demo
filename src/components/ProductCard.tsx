import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product.id);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
            New
          </span>
        )}
        {product.isOnSale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Sale
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-gray-800 group-hover:text-brand-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center mb-2">
          <div className="flex items-center text-yellow-500">
            <Star size={16} fill="currentColor" strokeWidth={0} />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-gray-600">{product.reviews} reviews</span>
        </div>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            {product.salePrice ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-gray-900">
                  ${product.salePrice.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="p-2 rounded-full bg-brand-50 text-brand-600 hover:bg-brand-100 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;