import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Layout from "../components/Layout";

const OrderConfirmationPage: React.FC = () => {
  const navigate = useNavigate();
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  
  // Redirect to home if navigated directly to this page
  React.useEffect(() => {
    const timer = setTimeout(() => {
      // This would normally check if we have actual order data
      const hasOrderData = localStorage.getItem("cart") !== null;
      if (!hasOrderData) {
        navigate("/");
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={32} className="text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Order Confirmed!</h1>
            <p className="text-gray-600 mt-2">
              Thank you for your purchase. Your order has been received.
            </p>
          </div>
          
          <div className="border-t border-b border-gray-200 py-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Order Number</h3>
                <p className="font-semibold">{orderNumber}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Date</h3>
                <p className="font-semibold">{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                <p className="font-semibold">customer@example.com</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Payment Method</h3>
                <p className="font-semibold">Credit Card (•••• 1234)</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Status</h2>
            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 ml-5"></div>
              
              <div className="relative flex items-center mb-6">
                <div className="h-10 w-10 rounded-full border-2 border-brand-600 bg-brand-50 flex items-center justify-center z-10">
                  <CheckCircle size={20} className="text-brand-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Order Placed</h3>
                  <p className="text-sm text-gray-500">{new Date().toLocaleTimeString()}</p>
                </div>
              </div>
              
              <div className="relative flex items-center mb-6">
                <div className="h-10 w-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center z-10">
                  <span className="text-gray-500 font-medium">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Processing</h3>
                  <p className="text-sm text-gray-500">Your order is being processed</p>
                </div>
              </div>
              
              <div className="relative flex items-center mb-6">
                <div className="h-10 w-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center z-10">
                  <span className="text-gray-500 font-medium">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Shipping</h3>
                  <p className="text-sm text-gray-500">Your order will be shipped soon</p>
                </div>
              </div>
              
              <div className="relative flex items-center">
                <div className="h-10 w-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center z-10">
                  <span className="text-gray-500 font-medium">4</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Delivered</h3>
                  <p className="text-sm text-gray-500">Estimated delivery in 3-5 business days</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">What's Next?</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• You will receive an email confirmation shortly.</li>
              <li>• You can track your order status in your account.</li>
              <li>• For any questions about your order, please contact our customer service.</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="btn-primary">
              Continue Shopping
            </Link>
            <Link to="/orders" className="btn-outline">
              View My Orders
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmationPage;