import React, { createContext, useContext, useState, useEffect } from "react";
import type { Cart } from "../types";
import { getProductById } from "../data/products";
import { toast } from "sonner";

interface CartContextType {
  cart: Cart;
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartItemsCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({ items: [] });
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    }
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Calculate total items
    const itemsCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    setCartItemsCount(itemsCount);
    
    // Calculate total price
    const total = cart.items.reduce((sum, item) => {
      const product = getProductById(item.productId);
      if (!product) return sum;
      const price = product.salePrice || product.price;
      return sum + price * item.quantity;
    }, 0);
    setCartTotal(total);
  }, [cart]);

  const addToCart = (productId: string, quantity = 1) => {
    const product = getProductById(productId);
    if (!product) {
      console.error(`Product with id ${productId} not found`);
      return;
    }

    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(item => item.productId === productId);
      
      if (existingItemIndex >= 0) {
        // Update quantity if item already exists
        const updatedItems = [...prevCart.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        
        toast.success(`Updated ${product.name} quantity in cart`);
        return { ...prevCart, items: updatedItems };
      } else {
        // Add new item
        toast.success(`Added ${product.name} to cart`);
        return {
          ...prevCart,
          items: [...prevCart.items, { productId, quantity }]
        };
      }
    });
  };

  const removeFromCart = (productId: string) => {
    const product = getProductById(productId);
    
    setCart(prevCart => ({
      ...prevCart,
      items: prevCart.items.filter(item => item.productId !== productId)
    }));
    
    if (product) {
      toast.info(`Removed ${product.name} from cart`);
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(item => item.productId === productId);
      
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevCart.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity
        };
        
        return { ...prevCart, items: updatedItems };
      }
      
      return prevCart;
    });
  };

  const clearCart = () => {
    setCart({ items: [] });
    toast.info("Cart cleared");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartItemsCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};