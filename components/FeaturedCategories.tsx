import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Dresses",
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/categories/dresses",
  },
  {
    name: "Outerwear",
    image: "https://media.istockphoto.com/id/1357323248/photo/man-on-a-gray-background-is-warmly-dressed-in-a-black-down-jacket.webp?a=1&b=1&s=612x612&w=0&k=20&c=r5HjBXVBLcdUwEzHXMaENiQ5SRCqlm-McTbyuK6CPB4=",
    link: "/categories/outerwear",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1551533257-bbd74dff1f8a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/categories/accessories",
  },
  {
    name: "Footwear",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/categories/footwear",
  }
];

export function FeaturedCategories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Featured Categories</h2>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link href={category.link} key={category.name} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-square w-full overflow-hidden bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <div>
                  <h3 className="text-xl font-medium">{category.name}</h3>
                  <Button variant="link" className="mt-2 p-0 text-white">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
