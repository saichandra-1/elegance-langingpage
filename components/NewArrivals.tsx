import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Jackets",
    price: "$129",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1935&auto=format&fit=crop",
    link: "/products/silk-blouse"
  },
  {
    name: "Tailored Trousers",
    price: "$149",
    image: "https://campussutra.com/cdn/shop/files/CSWSSPT5918_1.jpg?v=1713014721",
    link: "/products/tailored-trousers"
  },
  {
    name: "Cashmere Sweater",
    price: "$199",
    image: "https://images.quince.com/6gbqiZkEPCXJ9xYWwpAEGf/6a000c08929d521a388f5e46b3a8fb93/W-SWT-150-TEAK_1372_EDITED_copy.jpg?w=1582&q=50&h=1978&reqOrigin=website-ssr",
    link: "/products/cashmere-sweater"
  },
  {
    name: "Leather Handbag",
    price: "$249",
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/14360356/2021/10/19/e347d2a7-54b7-4131-9591-2a3987fbef331634646005504-ZOUK-Women-Black-Geometric-Printed-Leather-Structured-Sustai-11.jpg",
    link: "/products/leather-handbag"
  }
];

export function NewArrivals() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">New Arrivals</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <Link href={product.link} key={index} className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={450}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-muted-foreground">{product.price}</p>
                <Button variant="ghost" className="mt-2 p-0">
                  Add to Cart
                </Button>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/products">
            <Button size="lg">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
