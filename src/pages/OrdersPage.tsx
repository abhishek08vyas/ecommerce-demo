import React from "react";
import Layout from "../components/Layout";
import { useUser } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Mock orders data for demonstration
const mockOrders = [
  {
    id: "ORD-1234",
    date: "2025-04-28",
    total: 249.97,
    status: "Delivered",
    items: 3
  },
  {
    id: "ORD-5678",
    date: "2025-05-10",
    total: 129.99,
    status: "Processing",
    items: 1
  },
  {
    id: "ORD-9012",
    date: "2025-05-01",
    total: 78.50,
    status: "Shipped",
    items: 2
  }
];

const OrdersPage: React.FC = () => {
  const { isAuthenticated, user } = useUser();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout>
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-8">My Orders</h1>
        
        {mockOrders.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>${order.total.toFixed(2)}</TableCell>
                    <TableCell>
                      <span 
                        className={`px-2 py-1 text-xs rounded-full ${
                          order.status === "Delivered" 
                            ? "bg-green-100 text-green-800" 
                            : order.status === "Processing" 
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell>
                      <Link 
                        to={`/orders/${order.id}`} 
                        className="text-brand-600 hover:text-brand-800"
                      >
                        View Details
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <div className="flex justify-center">
              <AlertCircle className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No orders yet</h3>
            <p className="mt-1 text-sm text-gray-500">
              You haven't placed any orders yet.
            </p>
            <div className="mt-6">
              <Link
                to="/products"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-600 hover:bg-brand-700"
              >
                Browse Products
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default OrdersPage;