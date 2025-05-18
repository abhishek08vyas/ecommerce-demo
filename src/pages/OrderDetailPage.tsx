import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useUser } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, Truck, CheckCircle, Clock, CreditCard } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// Mock order data for demonstration
const mockOrderDetails = {
  "ORD-1234": {
    id: "ORD-1234",
    date: "2025-04-28",
    total: 249.97,
    subtotal: 229.97,
    shipping: 10.00,
    tax: 10.00,
    status: "Delivered",
    trackingNumber: "TRK123456789",
    paymentMethod: {
      type: "Credit Card",
      lastFour: "4242",
      expiryDate: "04/26"
    },
    shippingAddress: {
      name: "John Doe",
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      country: "United States"
    },
    items: [
      {
        id: "PROD-001",
        name: "ResMed AirSense 11 AutoSet",
        price: 129.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      },
      {
        id: "PROD-002",
        name: "Philips DreamWear Nasal Mask",
        price: 59.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      }
    ]
  },
  "ORD-5678": {
    id: "ORD-5678",
    date: "2025-05-10",
    total: 129.99,
    subtotal: 119.99,
    shipping: 5.00,
    tax: 5.00,
    status: "Processing",
    paymentMethod: {
      type: "PayPal"
    },
    shippingAddress: {
      name: "Jane Smith",
      address: "456 Oak Ave",
      city: "Somewhere",
      state: "NY",
      zipCode: "54321",
      country: "United States"
    },
    items: [
      {
        id: "PROD-003",
        name: "Travel CPAP Machine",
        price: 129.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      }
    ]
  },
  "ORD-9012": {
    id: "ORD-9012",
    date: "2025-05-01",
    total: 78.50,
    subtotal: 69.50,
    shipping: 5.00,
    tax: 4.00,
    status: "Shipped",
    trackingNumber: "TRK987654321",
    paymentMethod: {
      type: "Credit Card",
      lastFour: "1234",
      expiryDate: "09/25"
    },
    shippingAddress: {
      name: "Bob Johnson",
      address: "789 Pine St",
      city: "Elsewhere",
      state: "TX",
      zipCode: "98765",
      country: "United States"
    },
    items: [
      {
        id: "PROD-004",
        name: "CPAP Cleaning Supplies Kit",
        price: 29.25,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      },
      {
        id: "PROD-005",
        name: "CPAP Pillow",
        price: 49.25,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      }
    ]
  }
};

const OrderDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useUser();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  const order = id ? mockOrderDetails[id as keyof typeof mockOrderDetails] : undefined;
  
  if (!order) {
    return (
      <Layout>
        <div className="container-custom py-12">
          <div className="flex items-center mb-8">
            <Link to="/orders" className="text-brand-600 hover:text-brand-800 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Orders
            </Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h2>
            <p className="text-gray-600 mb-6">We couldn't find the order you're looking for.</p>
            <Link
              to="/orders"
              className="bg-brand-600 text-white px-4 py-2 rounded hover:bg-brand-700 transition-colors"
            >
              View All Orders
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="h-5 w-5" />;
      case "Shipped":
        return <Truck className="h-5 w-5" />;
      case "Processing":
        return <Package className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="flex items-center mb-8">
          <Link to="/orders" className="text-brand-600 hover:text-brand-800 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Orders
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Order #{order.id}</CardTitle>
                    <CardDescription>Placed on {order.date}</CardDescription>
                  </div>
                  <Badge className={getStatusColor(order.status)} variant="secondary">
                    <span className="flex items-center">
                      {getStatusIcon(order.status)}
                      <span className="ml-1">{order.status}</span>
                    </span>
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  {order.trackingNumber && (
                    <div className="bg-blue-50 rounded-lg p-3 flex items-start">
                      <Truck className="text-blue-600 mr-2 h-5 w-5 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-800">Tracking Information</h4>
                        <p className="text-blue-700 text-sm">Tracking Number: {order.trackingNumber}</p>
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">Order Items</h3>
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[80px]">Image</TableHead>
                            <TableHead>Product</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                            <TableHead className="text-right">Qty</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {order.items.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell>
                                <div className="h-14 w-14 rounded border overflow-hidden">
                                  <img 
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                              </TableCell>
                              <TableCell className="font-medium">{item.name}</TableCell>
                              <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                              <TableCell className="text-right">{item.quantity}</TableCell>
                              <TableCell className="text-right">
                                ${(item.price * item.quantity).toFixed(2)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>
                    <span>${order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Shipping</span>
                    <span>${order.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tax</span>
                    <span>${order.tax.toFixed(2)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">{order.paymentMethod?.type}</p>
                    {order.paymentMethod?.lastFour && (
                      <p className="text-sm text-gray-500">
                        **** **** **** {order.paymentMethod.lastFour}
                        {order.paymentMethod.expiryDate && (
                          <span className="ml-2">Exp: {order.paymentMethod.expiryDate}</span>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Shipping Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="font-medium">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.address}</p>
                  <p>
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                  </p>
                  <p>{order.shippingAddress.country}</p>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Link
                to="/orders"
                className="block w-full bg-brand-600 text-white text-center py-2 rounded-md hover:bg-brand-700 transition-colors"
              >
                Back to My Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetailPage;