import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface BannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonVariant: "primary" | "secondary" | "outline";
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
}

const bannerData: BannerProps[] = [
  {
    title: "Experience Better Sleep Tonight",
    description: "Discover our premium CPAP machines with whisper-quiet technology",
    buttonText: "Shop CPAP Machines",
    buttonLink: "/products?category=CPAP%20Machines",
    buttonVariant: "primary",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    imageAlt: "Person sleeping peacefully with CPAP machine",
    bgColor: "bg-gradient-to-r from-brand-600 to-brand-400",
  },
  {
    title: "Sleep Comfortably Every Night",
    description: "Find the perfect mask with our comfort-fit collection",
    buttonText: "Explore Masks",
    buttonLink: "/products?category=CPAP%20Masks",
    buttonVariant: "secondary",
    imageSrc: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    imageAlt: "CPAP Mask Collection",
    bgColor: "bg-gradient-to-r from-purple-600 to-purple-400",
  },
  {
    title: "Travel Without Compromising Therapy",
    description: "Compact devices designed for your journey",
    buttonText: "View Travel CPAPs",
    buttonLink: "/products?category=Travel%20CPAP",
    buttonVariant: "outline",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    imageAlt: "Travel CPAP",
    bgColor: "bg-gradient-to-r from-brand-700 to-brand-500",
  },
];

const CarouselBanner: React.FC = () => {
  const [api, setApi] = useState<any | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full py-4 relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {bannerData.map((banner, index) => (
            <CarouselItem key={index}>
              <div className={`${banner.bgColor} text-white w-full rounded-lg overflow-hidden`}>
                <div className="container-custom py-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                      <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        {banner.title}
                      </h2>
                      <p className="text-lg mb-6 text-white/90">
                        {banner.description}
                      </p>
                      <Link
                        to={banner.buttonLink}
                        className={
                          banner.buttonVariant === "primary"
                            ? "bg-white text-brand-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block"
                            : banner.buttonVariant === "secondary"
                            ? "bg-purple-800 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-900 transition-colors inline-block"
                            : "border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors inline-block"
                        }
                      >
                        {banner.buttonText}
                      </Link>
                    </div>
                    <div className="md:w-1/2">
                      <div className="bg-white rounded-xl p-4 shadow-lg">
                        <img
                          src={banner.imageSrc}
                          alt={banner.imageAlt}
                          className="w-full rounded-lg h-48 md:h-64 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-y-1/2 left-4 -translate-y-1/2">
          <CarouselPrevious className="relative left-0 border-brand-400 text-brand-600 hover:bg-brand-100 hover:text-brand-700" />
        </div>
        <div className="absolute inset-y-1/2 right-4 -translate-y-1/2">
          <CarouselNext className="relative right-0 border-brand-400 text-brand-600 hover:bg-brand-100 hover:text-brand-700" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;