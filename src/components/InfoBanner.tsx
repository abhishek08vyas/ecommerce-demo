import React from "react";
import { Truck, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface InfoBannerProps {
  type: "middle" | "end";
}

const InfoBanner: React.FC<InfoBannerProps> = ({ type }) => {
  if (type === "middle") {
    return (
      <section className="bg-purple-50 py-12 my-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Truck className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
                <p className="text-gray-600">
                  On all orders over $100. Fast, reliable delivery right to your door.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <ShieldCheck className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">
                  30-day return policy on all products. Your satisfaction is our priority.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <HelpCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Our audio specialists are always available to help with your tech needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="bg-gradient-to-r from-brand-700 to-brand-500 text-white py-12 my-12">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Not sure which headphones are right for you?
          </h2>
          <p className="text-xl mb-8">
            Take our quick audio profile quiz to find the perfect sound experience for your lifestyle.
          </p>
          <Link
            to="/audio-quiz"
            className="inline-flex items-center bg-white text-brand-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Take the Audio Quiz
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InfoBanner;