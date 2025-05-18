import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import CheckoutForm from "../components/CheckoutForm";
import CartSummary from "../components/CartSummary";
import { useCart } from "../contexts/CartContext";
import { getProductById } from "../data/products";

const CheckoutPage: React.FC = () => {
  const { cart, cartItemsCount } = useCart();

  // Redirect if cart is empty
  if (cartItemsCount === 0) {
    return (
      <Layout>
        <div className="container-custom py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Checkout</h1>
            <p className="text-gray-600 mb-6">
              Your cart is empty. Please add some items to your cart before proceeding to checkout.
            </p>
            <Link to="/products" className="btn-primary">
              Browse Products
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

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
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <CheckoutForm />
          </div>
          
          <div className="lg:w-1/3">
            <CartSummary checkoutButton={false} />
            
            <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
              
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {cartProducts.map(({ product, quantity }) => (
                  product && (
                    <div key={product.id} className="flex items-center py-2 border-b">
                      <div className="w-16 h-16 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="ml-4 flex-grow">
                        <h4 className="text-sm font-medium text-gray-800">
                          {product.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          Quantity: {quantity}
                        </p>
                      </div>
                      <div className="text-sm font-medium text-gray-800">
                        ${((product.salePrice || product.price) * quantity).toFixed(2)}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;