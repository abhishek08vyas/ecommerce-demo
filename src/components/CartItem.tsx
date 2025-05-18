import React from "react";
import { Product } from "../types";
import { Trash, Plus, Minus } from "lucide-react";
import { useCart } from "../contexts/CartContext";

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const increaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  const price = product.salePrice || product.price;
  const subtotal = price * quantity;

  return (
    <div className="flex flex-col sm:flex-row items-center py-4 border-b">
      <div className="flex-shrink-0 w-24 h-24 mb-4 sm:mb-0 sm:mr-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex-grow sm:mr-6">
        <h3 className="font-medium text-gray-800">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.category}</p>
        
        <div className="mt-2 flex items-center">
          <span className="font-semibold">
            ${price.toFixed(2)}
          </span>
          {product.salePrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center mt-4 sm:mt-0">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            onClick={decreaseQuantity}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          <span className="px-3 py-1 text-center w-10">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
        
        <button
          onClick={handleRemove}
          className="ml-4 text-red-500 hover:text-red-700"
          aria-label="Remove item"
        >
          <Trash size={18} />
        </button>
      </div>

      <div className="mt-4 sm:mt-0 sm:ml-6 text-right">
        <span className="font-semibold text-lg">${subtotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartItem;