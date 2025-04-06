import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ArrowLeft, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"

export default function CartPage() {
  // This would be fetched from your cart state (context, Redux, etc.)
  const cartItems = [
    {
      id: 1,
      name: "Cotton Blend Oversized Shirt",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2070&auto=format&fit=crop",
      size: "M",
      color: "White",
      quantity: 1,
    },
    {
      id: 5,
      name: "Cashmere Blend Sweater",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
      size: "L",
      color: "Beige",
      quantity: 1,
    },
    {
      id: 3,
      name: "Silk Blend Scarf",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=987&auto=format&fit=crop",
      size: "One Size",
      color: "Blue",
      quantity: 2,
    },
  ];

  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 12.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-muted py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start text-center">
            <div className="mb-2 flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <span className="font-medium text-foreground">Shopping Cart</span>
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Your Cart</h1>
            <p className="max-w-2xl text-muted-foreground">Review your items before proceeding to checkout.</p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                {/* Desktop Cart Table */}
                <div className="hidden md:block">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div className="flex items-center space-x-4">
                              <div className="h-16 w-16 overflow-hidden rounded-md">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  width={100}
                                  height={100}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium">{item.name}</p>
                                <div className="mt-1 text-sm text-muted-foreground">
                                  <span>{item.color}</span>
                                  <span className="mx-1">•</span>
                                  <span>Size {item.size}</span>
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>${item.price.toFixed(2)}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Mobile Cart Cards */}
                <div className="md:hidden space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={100}
                              height={100}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-medium">{item.name}</h3>
                            <div className="mt-1 text-sm text-muted-foreground">
                              <span>{item.color}</span>
                              <span className="mx-1">•</span>
                              <span>Size {item.size}</span>
                            </div>
                            <div className="mt-2 font-medium">${item.price.toFixed(2)}</div>
                            
                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                              <Button variant="ghost" size="icon">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <Link href="/new-arrivals" className="flex items-center text-sm font-medium text-primary">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                  
                  <div className="flex items-center space-x-4">
                    <Input 
                      placeholder="Promo code" 
                      className="w-40 text-sm md:w-64" 
                    />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Proceed to Checkout
                    </Button>
                  </CardFooter>
                </Card>

                <div className="mt-6 rounded-lg border bg-card p-4">
                  <h3 className="mb-3 font-medium">We Accept</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((payment) => (
                      <div key={payment} className="rounded border px-2 py-1 text-xs">
                        {payment}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-lg border bg-card p-4">
                  <h3 className="mb-3 font-medium">Need Help?</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="#" className="text-primary hover:underline">Shipping Information</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">Returns & Exchanges</Link>
                    </li>
                    <li>
                      <Link href="#" className="text-primary hover:underline">Contact Customer Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-6 rounded-full bg-muted p-6">
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
                  className="h-10 w-10 text-muted-foreground"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </div>
              <h2 className="mb-2 text-2xl font-bold">Your Cart is Empty</h2>
              <p className="mb-6 max-w-md text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
              <Button asChild>
                <Link href="/new-arrivals">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* You Might Also Like */}
      <section className="border-t bg-muted py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold">You Might Also Like</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              {
                id: 2,
                name: "Tailored Wool Blend Trousers",
                price: 129.99,
                image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=987&auto=format&fit=crop",
              },
              {
                id: 4,
                name: "Structured Shoulder Bag",
                price: 159.99,
                image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=876&auto=format&fit=crop",
              },
              {
                id: 6,
                name: "Linen Blend Blazer",
                price: 199.99,
                image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=992&auto=format&fit=crop",
              },
              {
                id: 8,
                name: "Merino Wool Beanie",
                price: 39.99,
                image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=987&auto=format&fit=crop",
              },
            ].map((product) => (
              <div key={product.id} className="group overflow-hidden rounded-lg bg-card transition-all hover:shadow-md">
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