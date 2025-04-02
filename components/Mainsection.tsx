"use client"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Mainsection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1599309329365-0a9ed45a1da3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Fashion model in elegant clothing"
    },
    {
      src: "https://www.kalkifashion.com/blogs/wp-content/uploads/2024/07/Top-Indo-Western-Fashion-Trends-For-Men-In-2024-2048x1303.jpg",
      alt: "Autumn collection item 2"
    },
    {
      src: "https://images.unsplash.com/photo-1630621655812-88e992e888fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Autumn collection item 3"
    },
    {
      src: "https://www.thefashionisto.com/wp-content/uploads/2023/05/Mens-Summer-Fashion.jpg",
      alt: "Autumn collection item 4"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index:number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 z-10 bg-black/20" />
      <div className="relative flex h-[80vh] items-center justify-center overflow-hidden">
        {/* Images */}
        <div 
          className="flex transition-transform duration-500 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full flex-shrink-0 relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto absolute z-20 px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">AUTUMN COLLECTION 2025</h1>
          <p className="mx-auto mb-8 max-w-lg text-lg">
            Discover our latest collection of timeless elegance and contemporary style.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Shop Women
            </Button>
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Shop Men
            </Button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute left-4 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-8 w-8 text-white" />
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-4 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-8 w-8 text-white" />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}