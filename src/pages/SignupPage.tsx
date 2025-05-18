import React from "react";
import Layout from "../components/Layout";
import SignupForm from "../components/SignupForm";
import { useUser } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const SignupPage: React.FC = () => {
  const { isAuthenticated } = useUser();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="max-w-md mx-auto">
          <SignupForm />
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;