import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Instagram, Facebook, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mainsection } from "@/components/Mainsection"
import { FeaturedCategories } from "@/components/FeaturedCategories"
import { NewArrivals } from "@/components/NewArrivals"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-wider">ELEGANCE</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/new-arrivals" className="text-sm font-medium transition-colors hover:text-primary">
              New Arrivals
            </Link>
            <Link href="/women" className="text-sm font-medium transition-colors hover:text-primary">
              Women
            </Link>
            <Link href="/men" className="text-sm font-medium transition-colors hover:text-primary">
              Men
            </Link>
            <Link href="/accessories" className="text-sm font-medium transition-colors hover:text-primary">
              Accessories
            </Link>
            <Link href="/collections" className="text-sm font-medium transition-colors hover:text-primary">
              Collections
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/account" className="text-sm font-medium transition-colors hover:text-primary md:block hidden">
              Account
            </Link>
            <Link href="/cart" className="text-sm font-medium transition-colors hover:text-primary">
              Cart (0)
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Mainsection/>

       <FeaturedCategories/>

        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Story</h2>
                <p className="mb-6 text-muted-foreground">
                  Founded in 2010, Elegance has been at the forefront of sustainable fashion, creating timeless pieces
                  that transcend seasonal trends. Our commitment to quality craftsmanship and ethical production sets us
                  apart in the industry.
                </p>
                <p className="mb-8 text-muted-foreground">
                  Each garment is thoughtfully designed with attention to detail, using premium fabrics sourced from
                  responsible suppliers. We believe in creating fashion that not only looks good but feels good to wear
                  and good to support.
                </p>
                <Button>Learn More About Us</Button>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1566206091558-7f218b696731?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Fashion atelier"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <NewArrivals/>

        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Join Our Community</h2>
            <p className="mx-auto mb-8 max-w-md text-primary-foreground/90">
              Subscribe to our newsletter for exclusive offers, new arrivals, and styling inspiration.
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground text-foreground"
                required
              />
              <Button type="submit" className="bg-background text-foreground hover:bg-background/90">
                Subscribe
              </Button>
            </form>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Follow Us on Instagram</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="group relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`https://images.unsplash.com/photo-1563045848-6fc8a43f32d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxmYXNoaW9ufGVufDB8fDB8fHww${item}`}
                    alt={`Instagram post ${item}`}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <Instagram className="h-8 w-8 text-white" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline">
                <Instagram className="mr-2 h-4 w-4" /> @elegance_fashion
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container mx-auto py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-medium">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/new-arrivals" className="text-muted-foreground hover:text-foreground">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="/women" className="text-muted-foreground hover:text-foreground">
                    Women
                  </Link>
                </li>
                <li>
                  <Link href="/men" className="text-muted-foreground hover:text-foreground">
                    Men
                  </Link>
                </li>
                <li>
                  <Link href="/accessories" className="text-muted-foreground hover:text-foreground">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="/sale" className="text-muted-foreground hover:text-foreground">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
              <div className="mt-6">
                <h4 className="mb-2 text-sm font-medium">We Accept</h4>
                <div className="flex space-x-2">
                  {["Visa", "Mastercard", "Amex", "PayPal"].map((payment) => (
                    <div key={payment} className="rounded border px-2 py-1 text-xs">
                      {payment}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Elegance. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}