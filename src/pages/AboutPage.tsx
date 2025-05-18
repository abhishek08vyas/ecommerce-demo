import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const AboutPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Thank you! Your message has been sent.");
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">About Sleep Apnea</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg mb-4">
              At SleepWell, we're dedicated to improving the quality of life for people with sleep apnea and other sleep-related conditions. Our mission is to provide the highest quality CPAP machines, masks, and accessories to help you breathe easier and sleep better.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding Sleep Apnea</h2>
            <p>
              Sleep apnea is a serious sleep disorder that occurs when a person's breathing is interrupted during sleep. People with untreated sleep apnea stop breathing repeatedly during their sleep, sometimes hundreds of times. This means the brain and the rest of the body may not get enough oxygen.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
            <p>
              We believe that everyone deserves a good night's sleep. Our team of sleep specialists works tirelessly to curate the best selection of sleep apnea therapy products, ensuring that you have access to the latest technology and most comfortable options available.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Expert Support</h2>
            <p>
              Our customer support team includes certified sleep specialists who can help guide you through the process of choosing the right equipment for your needs. We understand that adjusting to sleep therapy can be challenging, and we're here to support you every step of the way.
            </p>
          </div>
          
          <hr className="my-12" />
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-4">
                  <Mail className="h-5 w-5 text-brand-600 mr-3" />
                  <span>support@sleepwell.com</span>
                </div>
                <div className="flex items-center mb-4">
                  <Phone className="h-5 w-5 text-brand-600 mr-3" />
                  <span>1-800-SLEEP-WELL</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-brand-600 mr-3" />
                  <span>1234 Sleep Street, Reston, VA 20190</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-brand-600 text-white py-2 rounded-md hover:bg-brand-700 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;