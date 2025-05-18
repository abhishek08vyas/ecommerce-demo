import React from "react";
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";
import { useUser } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const { isAuthenticated } = useUser();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="max-w-md mx-auto">
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;