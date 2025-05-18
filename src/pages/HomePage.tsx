import React from "react";
import Layout from "../components/Layout";
import CarouselBanner from "../components/CarouselBanner";
import HeroBanner from "../components/HeroBanner";
import CategorySection from "../components/CategorySection";
import ProductGrid from "../components/ProductGrid";
import TestimonialSection from "../components/TestimonialSection";
import InfoBanner from "../components/InfoBanner";
import { getFeaturedProducts, getNewArrivals, getOnSaleProducts } from "../data/products";
import { useUser } from "../contexts/UserContext";

const HomePage: React.FC = () => {
  const { isAuthenticated } = useUser();
  
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const onSaleProducts = getOnSaleProducts();

  return (
    <Layout>
      <CarouselBanner />
      
      <InfoBanner type="middle" />
      
      <div className="container-custom">
        <ProductGrid products={newArrivals} title="New Arrivals" />
        
        <CategorySection />
      </div>
      
      <HeroBanner />
      
      <div className="container-custom">
        <ProductGrid products={featuredProducts} title="Featured Products" />
        
        {isAuthenticated && (
          <ProductGrid products={onSaleProducts} title="Deals for You" />
        )}
      </div>
      
      <TestimonialSection />
      
      <div className="container-custom">
        <InfoBanner type="end" />
      </div>
    </Layout>
  );
};

export default HomePage;