import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  testimonial: string;
  rating: number;
  product: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Michael Johnson",
    avatar: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonial: "The Aurora Pro headphones completely transformed my music experience. The sound quality is incredible and they're so comfortable I can wear them all day. Best investment I've made!",
    rating: 5,
    product: "Aurora Pro Wireless Headphones"
  },
  {
    id: "2",
    name: "Sarah Thompson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonial: "I was amazed by the Phantom Gaming Headset's spatial audio. The microphone quality is crystal clear and my teammates can finally hear me perfectly during late-night sessions!",
    rating: 4,
    product: "Phantom Gaming Headset"
  },
  {
    id: "3",
    name: "David Rodriguez",
    avatar: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimonial: "As someone who travels constantly for work, the Echo Buds Pro are perfect. The noise cancellation is outstanding and the battery life easily gets me through long flights.",
    rating: 5,
    product: "Echo Buds Pro"
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
          <div className="flex text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < testimonial.rating ? "currentColor" : "none"}
                strokeWidth={i < testimonial.rating ? 0 : 1.5}
                className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-2 italic">"{testimonial.testimonial}"</p>
      <p className="text-sm text-gray-500">Product: {testimonial.product}</p>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Discover how our premium audio products have elevated the listening experience for music lovers, gamers, and professionals alike.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;