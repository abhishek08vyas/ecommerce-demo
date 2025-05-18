import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { useCart } from "../contexts/CartContext";
import { getProductById } from "../data/products";
import { ShoppingCart, ArrowLeft } from "lucide-react";

const CartPage: React.FC = () => {
  const { cart, clearCart, cartItemsCount } = useCart();
  
  const cartProducts = cart.items.map(item => {
    const product = getProductById(item.productId);
    return {
      product,
      quantity: item.quantity,
    };
  }).filter(item => item.product !== undefined);

  return (
    <Layout>
      <div className="container-custom py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Shopping Cart</h1>
        
        {cartItemsCount === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="border-b pb-4 mb-4">
                  <h2 className="text-lg font-semibold">
                    Cart Items ({cartItemsCount})
                  </h2>
                </div>
                
                {cartProducts.map(({ product, quantity }) => (
                  product && (
                    <CartItem
                      key={product.id}
                      product={product}
                      quantity={quantity}
                    />
                  )
                ))}
                
                <div className="mt-6 flex justify-between">
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Clear Cart
                  </button>
                  
                  <Link
                    to="/products"
                    className="text-brand-600 hover:text-brand-700 flex items-center text-sm font-medium"
                  >
                    <ArrowLeft size={16} className="mr-1" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Cart Summary */}
            <div className="lg:w-1/3">
              <CartSummary />
              
              <div className="mt-6 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Need Help?</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/shipping" className="text-brand-600 hover:text-brand-700">
                      Shipping Information
                    </Link>
                  </li>
                  <li>
                    <Link to="/returns" className="text-brand-600 hover:text-brand-700">
                      Returns & Exchanges
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-brand-600 hover:text-brand-700">
                      Contact Customer Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;