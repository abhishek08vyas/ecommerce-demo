import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

interface CartSummaryProps {
  checkoutButton?: boolean;
}

const CartSummary: React.FC<CartSummaryProps> = ({ checkoutButton = true }) => {
  const { cartTotal } = useCart();
  
  const shippingCost = cartTotal > 100 ? 0 : 9.99;
  const estimatedTax = cartTotal * 0.08; // 8% tax
  const orderTotal = cartTotal + shippingCost + estimatedTax;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${cartTotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          {shippingCost === 0 ? (
            <span className="text-green-600">Free</span>
          ) : (
            <span className="font-medium">${shippingCost.toFixed(2)}</span>
          )}
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Estimated Tax</span>
          <span className="font-medium">${estimatedTax.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex justify-between">
            <span className="text-gray-800 font-semibold">Total</span>
            <span className="text-gray-800 font-bold">${orderTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      {cartTotal > 0 && shippingCost === 0 && (
        <div className="mt-4 bg-green-50 text-green-800 p-3 rounded-md text-sm">
          You've qualified for free shipping!
        </div>
      )}
      
      {cartTotal > 0 && shippingCost > 0 && (
        <div className="mt-4 bg-blue-50 text-blue-800 p-3 rounded-md text-sm">
          Add ${(100 - cartTotal).toFixed(2)} more to get free shipping!
        </div>
      )}
      
      {checkoutButton && (
        <Link
          to="/checkout"
          className="mt-6 w-full bg-brand-600 text-white py-3 rounded-md font-medium hover:bg-brand-700 transition-colors text-center block"
        >
          Proceed to Checkout
        </Link>
      )}
      
      <div className="mt-4 text-center text-sm text-gray-500">
        We accept all major credit cards and PayPal
      </div>
    </div>
  );
};

export default CartSummary;