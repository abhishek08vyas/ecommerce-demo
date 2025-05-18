import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CheckCircle, Star, AlertTriangle, ShoppingCart, Heart, ArrowRight } from "lucide-react";
import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";
import { getProductById, getProductsByCategory } from "../data/products";
import { useCart } from "../contexts/CartContext";
import { Product } from "../types";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  // Find the product by ID
  const product = id ? getProductById(id) : undefined;
  
  useEffect(() => {
    if (product) {
      const related = getProductsByCategory(product.category).filter(
        (p) => p.id !== product.id
      );
      setRelatedProducts(related.slice(0, 4));
    }
  }, [product]);
  
  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">
              Sorry, the product you're looking for does not exist or may have been removed.
            </p>
            <Link to="/products" className="btn-primary">
              Browse All Products
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  return (
    <Layout>
      <div className="container-custom py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6">
          <ol className="flex text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-brand-600">Home</Link>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to="/products" className="hover:text-brand-600">Products</Link>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to={`/products?category=${product.category}`} className="hover:text-brand-600">
                {product.category}
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-800 font-medium">{product.name}</li>
          </ol>
        </nav>

        {/* Product Detail */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="bg-white rounded-lg overflow-hidden border border-gray-200 p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            {/* Title and Badges */}
            <div className="mb-4">
              {product.isNew && (
                <span className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                  New
                </span>
              )}
              {product.isOnSale && (
                <span className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Sale
                </span>
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < product.rating ? "currentColor" : "none"}
                    strokeWidth={i < product.rating ? 0 : 1.5}
                    className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              {product.salePrice ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-800">
                    ${product.salePrice.toFixed(2)}
                  </span>
                  <span className="ml-3 text-lg text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                    Save ${(product.price - product.salePrice).toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* Short Description */}
            <p className="text-gray-600 mb-6">
              {product.description}
            </p>
            
            {/* Availability */}
            <div className="flex items-center mb-6">
              {product.inStock ? (
                <>
                  <CheckCircle size={18} className="text-green-500 mr-2" />
                  <span className="text-green-700">In Stock</span>
                </>
              ) : (
                <>
                  <AlertTriangle size={18} className="text-amber-500 mr-2" />
                  <span className="text-amber-700">Out of Stock</span>
                </>
              )}
            </div>
            
            {/* Quantity and Add to Cart */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex mb-4">
                <button
                  type="button"
                  onClick={handleDecreaseQuantity}
                  className="bg-gray-100 border border-gray-300 text-gray-700 px-3 py-1 rounded-l-md hover:bg-gray-200"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="border-t border-b border-gray-300 text-center w-16 py-1"
                />
                <button
                  type="button"
                  onClick={handleIncreaseQuantity}
                  className="bg-gray-100 border border-gray-300 text-gray-700 px-3 py-1 rounded-r-md hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="btn-primary flex-1 flex items-center justify-center"
                  disabled={!product.inStock}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
                <button className="btn-outline flex items-center justify-center">
                  <Heart size={18} className="mr-2" />
                  Add to Wishlist
                </button>
              </div>
            </div>
            
            {/* Category */}
            <div className="mb-6">
              <span className="text-gray-700">Category:</span>{" "}
              <Link
                to={`/products?category=${product.category}`}
                className="text-brand-600 hover:text-brand-700"
              >
                {product.category}
              </Link>
            </div>
            
            {/* Shipping & Returns */}
            <div className="rounded-lg bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Shipping & Returns</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  Free shipping on orders over $100
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  30-day return policy
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  2-year warranty
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("description")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "description"
                    ? "border-brand-600 text-brand-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "features"
                    ? "border-brand-600 text-brand-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "reviews"
                    ? "border-brand-600 text-brand-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Reviews ({product.reviews})
              </button>
            </nav>
          </div>
          
          <div className="py-6">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p className="text-gray-600">
                  {product.description}
                </p>
                <p className="text-gray-600 mt-4">
                  Our {product.name} is designed with sleep apnea patients in mind, providing comfort and 
                  efficiency to help you get the restful sleep you deserve. Each product undergoes rigorous 
                  testing to ensure it meets our high standards for quality and performance.
                </p>
                <p className="text-gray-600 mt-4">
                  We stand behind our products with a comprehensive warranty and excellent customer support. 
                  If you have any questions about this product or how to use it, our sleep specialists are 
                  available 24/7 to assist you.
                </p>
              </div>
            )}
            
            {activeTab === "features" && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h3>
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Customer Reviews</h3>
                  <button className="text-sm text-brand-600 hover:text-brand-700 font-medium flex items-center">
                    Write a Review
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-100 rounded-full p-2 mr-4">
                      <span className="text-brand-700 font-bold text-xl">
                        {product.rating.toFixed(1)}
                      </span>
                    </div>
                    <div>
                      <div className="flex mb-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            fill={i < product.rating ? "currentColor" : "none"}
                            strokeWidth={i < product.rating ? 0 : 1.5}
                            className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm">
                        Based on {product.reviews} reviews
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center">
                        <span className="text-sm text-gray-600 w-8">{star} star</span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2">
                          <div
                            className="bg-yellow-400 h-2.5 rounded-full"
                            style={{
                              width: `${
                                (star === Math.round(product.rating)
                                  ? product.reviews
                                  : Math.floor(product.reviews / (6 - star))) /
                                product.reviews *
                                100
                              }%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-8">
                          {star === Math.round(product.rating)
                            ? product.reviews
                            : Math.floor(product.reviews / (6 - star))}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Sample Reviews */}
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium text-gray-800">John D.</h4>
                      <span className="text-sm text-gray-500">2 months ago</span>
                    </div>
                    <div className="flex mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < 5 ? "currentColor" : "none"}
                          strokeWidth={i < 5 ? 0 : 1.5}
                          className={i < 5 ? "text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      This product has been a game-changer for my sleep apnea. 
                      I'm finally getting restful sleep and waking up feeling refreshed. 
                      The quality is excellent and it's very comfortable to use.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium text-gray-800">Sarah T.</h4>
                      <span className="text-sm text-gray-500">1 month ago</span>
                    </div>
                    <div className="flex mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < 4 ? "currentColor" : "none"}
                          strokeWidth={i < 4 ? 0 : 1.5}
                          className={i < 4 ? "text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      Great product overall. It took me a few nights to get used to it, 
                      but now I can't imagine sleeping without it. My only small complaint 
                      is that I wish the instruction manual was a bit more detailed.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium text-gray-800">Michael R.</h4>
                      <span className="text-sm text-gray-500">3 weeks ago</span>
                    </div>
                    <div className="flex mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < 5 ? "currentColor" : "none"}
                          strokeWidth={i < 5 ? 0 : 1.5}
                          className={i < 5 ? "text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      Excellent product and even better customer service. When I had a question 
                      about setup, their support team was immediately helpful and walked me through 
                      everything. Highly recommend both the product and this company!
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <button className="text-brand-600 hover:text-brand-700 font-medium">
                    View All Reviews
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Related Products
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetailPage;