import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "../types";
import { toast } from "sonner";

interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
  }
];

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Check for stored user on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in a real app this would call an API
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock validation
      if (!email || !password) {
        toast.error("Please enter both email and password");
        return false;
      }
      
      // Check if user exists (mock)
      const foundUser = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem("user", JSON.stringify(foundUser));
        toast.success(`Welcome back, ${foundUser.name}`);
        return true;
      } else {
        toast.error("Invalid email or password");
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login");
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock validation
      if (!name || !email || !password) {
        toast.error("Please fill out all fields");
        return false;
      }
      
      // Check if user already exists
      const userExists = mockUsers.some(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (userExists) {
        toast.error("An account with this email already exists");
        return false;
      }
      
      // Create new user (mock)
      const newUser: User = {
        id: `${mockUsers.length + 1}`,
        name,
        email,
      };
      
      // In a real app, we would save to database
      mockUsers.push(newUser);
      
      // Log the user in
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      
      toast.success("Account created successfully!");
      return true;
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred during signup");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.info("You have been logged out");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};