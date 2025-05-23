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
          <h1 className="text-3xl font-bold mb-6 text-center">About Aetheris Lifestyle</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg mb-4">
              At Aetheris Lifestyle, we're passionate about delivering exceptional audio experiences that elevate your daily life. Our mission is to create premium headphones, speakers, and audio electronics that combine cutting-edge technology with sophisticated design, helping you discover the true essence of sound.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Audio Philosophy</h2>
            <p>
              We believe that great audio isn't just about technical specifications—it's about creating an emotional connection between you and your music. Every Aetheris product is meticulously engineered to deliver crystal-clear highs, rich mids, and deep, powerful bass that brings your favorite tracks to life with stunning clarity and detail.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Premium Quality & Innovation</h2>
            <p>
              From our flagship Phantom Pro wireless headphones to our studio-grade monitors, each Aetheris product represents the perfect fusion of form and function. We use only the finest materials—premium leather, aerospace-grade aluminum, and custom-tuned drivers—to ensure that your investment delivers exceptional performance for years to come.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Crafted for Audiophiles</h2>
            <p>
              Whether you're a professional musician, content creator, or simply someone who appreciates superior sound quality, Aetheris products are designed to meet the demands of discerning listeners. Our team of audio engineers and designers work tirelessly to push the boundaries of what's possible in personal audio technology.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Sustainable Excellence</h2>
            <p>
              We're committed to responsible manufacturing practices and sustainable design. Our packaging uses recycled materials, and we offer repair services to extend the life of your Aetheris products, because exceptional audio should be built to last.
            </p>
          </div>
          
          <hr className="my-12" />
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-4">
                  <Mail className="h-5 w-5 text-brand-600 mr-3" />
                  <span>hello@aetheris-lifestyle.com</span>
                </div>
                <div className="flex items-center mb-4">
                  <Phone className="h-5 w-5 text-brand-600 mr-3" />
                  <span>1-800-AETHERIS</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-brand-600 mr-3" />
                  <span>1234 Audio Drive, Austin, TX 78701</span>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Support Hours</h3>
                  <p className="text-sm text-gray-600">Monday - Friday: 9AM - 8PM EST</p>
                  <p className="text-sm text-gray-600">Saturday: 10AM - 6PM EST</p>
                  <p className="text-sm text-gray-600">Sunday: 12PM - 5PM EST</p>
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
                    placeholder="Tell us about your audio needs or ask any questions..."
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