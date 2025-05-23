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
    title: "Elevate Your Audio Experience",
    description: "Discover premium wireless headphones with crystal-clear sound and all-day comfort",
    buttonText: "Shop Headphones",
    buttonLink: "/products?category=Headphones",
    buttonVariant: "primary",
    imageSrc: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    imageAlt: "Premium wireless headphones on modern desk",
    bgColor: "bg-gradient-to-r from-brand-600 to-brand-400",
  },
  {
    title: "Smart Tech for Modern Living",
    description: "Cutting-edge electronics that seamlessly integrate into your lifestyle",
    buttonText: "Explore Electronics",
    buttonLink: "/products?category=Electronics",
    buttonVariant: "secondary",
    imageSrc: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece",
    imageAlt: "Modern electronics and smart devices",
    bgColor: "bg-gradient-to-r from-purple-600 to-purple-400",
  },
  {
    title: "Gaming Audio Revolution",
    description: "Professional gaming headsets with immersive surround sound",
    buttonText: "View Gaming Gear",
    buttonLink: "/products?category=Gaming%20Audio",
    buttonVariant: "outline",
    imageSrc: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae",
    imageAlt: "Gaming headset with RGB lighting",
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