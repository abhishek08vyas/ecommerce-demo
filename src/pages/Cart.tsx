import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from "@/components/ui/button";
import { useCart } from '@/context/CartContext';
import { getProductById } from '@/data/products';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    getCartTotal 
  } = useCart();

  const total = getCartTotal();
  const shipping = total > 75 ? 0 : 9.99;
  const tax = total * 0.07; // 7% tax rate for example
  const orderTotal = total + shipping + tax;

  return (
    <Layout>
      <div className="bg-sleep-50/50 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Your Cart</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-100">
                  {cartItems.map(item => {
                    const product = getProductById(item.productId);
                    if (!product) return null;
                    
                    return (
                      <div key={item.productId} className="p-6 flex flex-col md:flex-row md:items-center">
                        <div className="md:flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-24 h-24 object-cover rounded-md"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-wrap justify-between mb-2">
                            <Link to={`/product/${product.id}`}>
                              <h3 className="text-lg font-medium text-sleep-800 hover:text-sleep-500 transition-colors">
                                {product.name}
                              </h3>
                            </Link>
                            <span className="font-medium text-sleep-500">
                              ${(product.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                          
                          <p className="text-sm text-gray-500 mb-4 line-clamp-1">
                            {product.description}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <div className="flex items-center mb-3 sm:mb-0">
                              <label htmlFor={`quantity-${item.productId}`} className="text-sm text-gray-600 mr-2">
                                Qty:
                              </label>
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                  type="button"
                                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                  onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  id={`quantity-${item.productId}`}
                                  name={`quantity-${item.productId}`}
                                  min="1"
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.productId, Math.max(1, parseInt(e.target.value) || 1))}
                                  className="w-10 text-center border-0 focus:ring-0"
                                />
                                <button
                                  type="button"
                                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            
                            <Button
                              variant="ghost"
                              onClick={() => removeFromCart(item.productId)}
                              className="text-gray-500 hover:text-red-600 p-0 h-auto hover:bg-transparent"
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <div className="flex justify-between">
                    <Button
                      variant="ghost"
                      onClick={clearCart}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Clear Cart
                    </Button>
                    <Link to="/products">
                      <Button variant="outline" className="border-sleep-300 text-sleep-500">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-gray-200 my-2"></div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <Link to="/checkout">
                    <Button className="w-full bg-sleep-400 hover:bg-sleep-500 text-white">
                      Proceed to Checkout
                    </Button>
                  </Link>
                </div>
                
                <div className="text-sm text-gray-500">
                  <div className="flex items-center mb-2">
                    <svg className="w-4 h-4 mr-2 text-sleep-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure checkout
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-sleep-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Free shipping on orders over $75
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/products">
              <Button size="lg" className="bg-sleep-400 hover:bg-sleep-500 text-white">
                Browse Products
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;