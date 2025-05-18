import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : null;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products">
            <Button>Return to Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    toast.success(`Added ${quantity} ${product.name}${quantity > 1 ? 's' : ''} to your cart`);
  };

  const handleBuyNow = () => {
    addToCart(product.id, quantity);
    navigate('/cart');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-sm text-gray-500 hover:text-sleep-500">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <Link to="/products" className="text-sm text-gray-500 hover:text-sleep-500">
                    Products
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-sm text-gray-700">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden border border-gray-100">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">{product.rating.toFixed(1)} ({product.reviews.length} reviews)</span>
            </div>
            
            <div className="text-2xl font-bold text-sleep-500 mb-4">
              ${product.price.toFixed(2)}
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Key Features:</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-sleep-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="mr-6">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      type="button"
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 text-center border-0 focus:ring-0"
                    />
                    <button
                      type="button"
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center space-x-2 mt-auto">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sleep-100 text-sleep-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleAddToCart} 
                  size="lg"
                  className="flex-1 bg-sleep-400 hover:bg-sleep-500 text-white"
                >
                  Add to Cart
                </Button>
                <Button 
                  onClick={handleBuyNow} 
                  size="lg"
                  variant="outline"
                  className="flex-1 border-sleep-400 text-sleep-500 hover:bg-sleep-50"
                >
                  Buy Now
                </Button>
              </div>
            </div>
            
            <div className="text-sm">
              <div className="flex space-x-4 text-gray-600">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-sleep-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Free shipping over $75
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-sleep-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  30-day returns
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="w-full border-b border-gray-200 mb-6">
            <TabsTrigger value="description" className="px-6 py-3">Description</TabsTrigger>
            <TabsTrigger value="specifications" className="px-6 py-3">Specifications</TabsTrigger>
            <TabsTrigger value="reviews" className="px-6 py-3">Reviews ({product.reviews.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="p-4">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">About {product.name}</h3>
              <p className="mb-4">{product.description}</p>
              <p className="mb-4">
                This high-quality sleep apnea treatment product is designed to provide maximum comfort and effectiveness.
                Manufactured with premium materials and tested rigorously to ensure reliable performance night after night.
              </p>
              <h4 className="text-lg font-semibold mb-2">Why Choose This Product?</h4>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Clinically proven to reduce apnea events during sleep</li>
                <li>Designed for comfort and ease of use</li>
                <li>Quiet operation won't disturb your or your partner's sleep</li>
                <li>Durable construction ensures long-lasting performance</li>
                <li>Easy to clean and maintain</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="specifications" className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 border-b border-gray-100 py-2">
                    <span className="font-medium">Category</span>
                    <span>{product.category}</span>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100 py-2">
                    <span className="font-medium">SKU</span>
                    <span>ZS-{product.id.toUpperCase()}</span>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100 py-2">
                    <span className="font-medium">Warranty</span>
                    <span>2-Year Limited</span>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100 py-2">
                    <span className="font-medium">Care Instructions</span>
                    <span>See user manual for detailed cleaning instructions</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sleep-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Main product unit</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sleep-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>User manual</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sleep-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Quick start guide</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sleep-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Warranty card</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="p-4">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                <Button variant="outline" className="border-sleep-300 text-sleep-500">Write a Review</Button>
              </div>
              
              <div className="space-y-6">
                {product.reviews.length > 0 ? (
                  product.reviews.map(review => (
                    <div key={review.id} className="border-b border-gray-100 pb-6">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-sleep-100 flex items-center justify-center text-sleep-500 mr-3">
                            {review.username.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-medium">{review.username}</div>
                            <div className="text-sm text-gray-500">Verified Buyer</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                      
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p>No reviews yet. Be the first to leave a review!</p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">You may also like</h2>
          {/* You would implement related products here */}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;