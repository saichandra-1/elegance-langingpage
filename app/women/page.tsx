import Image from "next/image"
import Link from "next/link"
import { Filter, ChevronDown, Grid3X3, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This is a template for all product category pages (new-arrivals, women, men, accessories, collections)
// You can customize the title, description, and products based on the category

export default function CategoryPage() {
  // This can be fetched from an API based on the current route/category
  const pageInfo = {
    title: "New Arrivals",
    description: "Discover our latest collection of premium fashion items, featuring this season's most coveted styles and trends.",
    breadcrumb: "New Arrivals",
    // For other pages, you would change these values:
    // Women: "Women's Collection", "Explore our curated selection of women's apparel...", "Women"
    // Men: "Men's Collection", "Discover our premium selection of men's clothing...", "Men"
    // etc.
  }

  // These products would come from your database/API
  const products = [
    {
      id: 1,
      name: "Cotton Blend Oversized Shirt",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2070&auto=format&fit=crop",
      category: "Women",
      isNew: true,
      isSale: false,
    },
    {
      id: 2,
      name: "Tailored Wool Blend Trousers",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=987&auto=format&fit=crop",
      category: "Men",
      isNew: true,
      isSale: false,
    },
    {
      id: 3,
      name: "Silk Blend Scarf",
      price: 45.99,
      originalPrice: 65.99,
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=987&auto=format&fit=crop",
      category: "Accessories",
      isNew: true,
      isSale: true,
    },
    {
      id: 4,
      name: "Structured Shoulder Bag",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=876&auto=format&fit=crop",
      category: "Accessories",
      isNew: true,
      isSale: false,
    },
    {
      id: 5,
      name: "Cashmere Blend Sweater",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
      category: "Women",
      isNew: true,
      isSale: false,
    },
    {
      id: 6,
      name: "Linen Blend Blazer",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=992&auto=format&fit=crop",
      category: "Men",
      isNew: true,
      isSale: true,
    },
    {
      id: 7,
      name: "Leather Ankle Boots",
      price: 219.99,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1480&auto=format&fit=crop",
      category: "Women",
      isNew: true,
      isSale: false,
    },
    {
      id: 8,
      name: "Merino Wool Beanie",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=987&auto=format&fit=crop",
      category: "Accessories",
      isNew: true,
      isSale: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-2 flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <span className="font-medium text-foreground">{pageInfo.breadcrumb}</span>
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">{pageInfo.title}</h1>
            <p className="max-w-2xl text-muted-foreground">{pageInfo.description}</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Sidebar Filters - Only visible on desktop */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-medium">Filter Products</h3>
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="mb-4"
                  />
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="category">
                    <AccordionTrigger className="text-sm font-medium">Category</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="category-dresses" className="h-4 w-4" />
                          <label htmlFor="category-dresses" className="text-sm">Dresses</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="category-tops" className="h-4 w-4" />
                          <label htmlFor="category-tops" className="text-sm">Tops</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="category-bottoms" className="h-4 w-4" />
                          <label htmlFor="category-bottoms" className="text-sm">Bottoms</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="category-outerwear" className="h-4 w-4" />
                          <label htmlFor="category-outerwear" className="text-sm">Outerwear</label>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="size">
                    <AccordionTrigger className="text-sm font-medium">Size</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="cursor-pointer">XS</Badge>
                        <Badge variant="outline" className="cursor-pointer">S</Badge>
                        <Badge variant="outline" className="cursor-pointer">M</Badge>
                        <Badge variant="outline" className="cursor-pointer">L</Badge>
                        <Badge variant="outline" className="cursor-pointer">XL</Badge>
                        <Badge variant="outline" className="cursor-pointer">XXL</Badge>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="color">
                    <AccordionTrigger className="text-sm font-medium">Color</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-2">
                        <div className="h-6 w-6 rounded-full bg-black cursor-pointer border"></div>
                        <div className="h-6 w-6 rounded-full bg-white cursor-pointer border"></div>
                        <div className="h-6 w-6 rounded-full bg-red-500 cursor-pointer border"></div>
                        <div className="h-6 w-6 rounded-full bg-blue-500 cursor-pointer border"></div>
                        <div className="h-6 w-6 rounded-full bg-green-500 cursor-pointer border"></div>
                        <div className="h-6 w-6 rounded-full bg-yellow-500 cursor-pointer border"></div>
                        <div className="h-6 w-6 rounded-full bg-purple-500 cursor-pointer border"></div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="price">
                    <AccordionTrigger className="text-sm font-medium">Price Range</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-sm">$0</span>
                          <span className="text-sm">$500</span>
                        </div>
                        <input type="range" min="0" max="500" className="w-full" />
                        <div className="flex gap-2">
                          <Input type="number" placeholder="Min" className="w-full" />
                          <Input type="number" placeholder="Max" className="w-full" />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="pt-4">
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Mobile Filter Button */}
              <div className="mb-6 flex items-center justify-between lg:hidden">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Desktop Sort Options */}
              <div className="mb-6 hidden items-center justify-between lg:flex">
                <p className="text-sm text-muted-foreground">Showing {products.length} products</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                  <Separator orientation="vertical" className="h-6" />
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <div key={product.id} className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
                    <Link href={`/product/${product.id}`} className="relative block aspect-square overflow-hidden">
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <div className="absolute left-4 top-4 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                          New
                        </div>
                      )}
                      {product.isSale && (
                        <div className="absolute right-4 top-4 rounded-full bg-destructive px-2 py-1 text-xs font-medium text-destructive-foreground">
                          Sale
                        </div>
                      )}
                    </Link>
                    <div className="p-4">
                      <h3 className="mb-1 text-sm font-medium text-muted-foreground">{product.category}</h3>
                      <h2 className="mb-2 text-base font-semibold">{product.name}</h2>
                      <div className="flex items-center gap-2">
                        {product.originalPrice ? (
                          <>
                            <span className="font-medium">${product.price.toFixed(2)}</span>
                            <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                          </>
                        ) : (
                          <span className="font-medium">${product.price.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                    <div className="p-4 pt-0">
                      <Button variant="outline" className="w-full">Add to Cart</Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <span className="sr-only">Previous page</span>
                    <ChevronDown className="h-4 w-4 rotate-90" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">1</Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">2</Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">3</Button>
                  <span>...</span>
                  <Button variant="outline" size="sm" className="h-8 w-8">8</Button>
                  <Button variant="outline" size="icon">
                    <span className="sr-only">Next page</span>
                    <ChevronDown className="h-4 w-4 -rotate-90" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Recommendations - Optional */}
      <section className="border-t bg-muted py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold">You Might Also Like</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <div key={`rec-${product.id}`} className="group overflow-hidden rounded-lg bg-card transition-all hover:shadow-md">
                <Link href={`/product/${product.id}`} className="relative block aspect-square overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="p-3">
                  <h3 className="mb-1 truncate text-sm font-medium">{product.name}</h3>
                  <p className="text-sm font-medium">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}