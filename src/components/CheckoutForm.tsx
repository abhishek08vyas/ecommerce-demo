import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";
import { toast } from "sonner";

const CheckoutForm: React.FC = () => {
  const navigate = useNavigate();
  const { cartTotal, clearCart } = useCart();
  const { isAuthenticated } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    paymentMethod: "credit-card",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    saveInfo: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Order placed successfully!");
      clearCart();
      navigate("/order-confirmation");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
              required
            />
          </div>
        </div>
      </div>

      {/* Shipping Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                required
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State / Province
              </label>
              <input
                id="state"
                name="state"
                type="text"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                ZIP / Postal Code
              </label>
              <input
                id="zipCode"
                name="zipCode"
                type="text"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                required
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                required
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
        <div className="space-y-4">
          <div>
            <div className="flex space-x-4 mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit-card"
                  checked={formData.paymentMethod === "credit-card"}
                  onChange={handleChange}
                  className="h-4 w-4 text-brand-600"
                />
                <span className="ml-2 text-gray-700">Credit Card</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleChange}
                  className="h-4 w-4 text-brand-600"
                />
                <span className="ml-2 text-gray-700">PayPal</span>
              </label>
            </div>

            {formData.paymentMethod === "credit-card" && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    placeholder="XXXX XXXX XXXX XXXX"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiration Date
                    </label>
                    <input
                      id="cardExpiry"
                      name="cardExpiry"
                      type="text"
                      placeholder="MM/YY"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cardCvc" className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      id="cardCvc"
                      name="cardCvc"
                      type="text"
                      placeholder="CVC"
                      value={formData.cardCvc}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="saveInfo"
          name="saveInfo"
          type="checkbox"
          checked={formData.saveInfo}
          onChange={handleChange}
          className="h-4 w-4 text-brand-600 focus:ring-brand-500"
        />
        <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-700">
          Save this information for next time
        </label>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-brand-600 text-white py-3 rounded-md font-medium hover:bg-brand-700 transition-colors"
          disabled={isSubmitting || cartTotal === 0}
        >
          {isSubmitting ? "Processing..." : `Complete Order • $${(cartTotal + (cartTotal > 100 ? 0 : 9.99) + (cartTotal * 0.08)).toFixed(2)}`}
        </button>
        
        {!isAuthenticated && (
          <div className="mt-4 text-sm text-center text-gray-600">
            Creating an account is optional, but it will allow you to track your orders and save your information for future purchases.
          </div>
        )}
      </div>
    </form>
  );
};

export default CheckoutForm;