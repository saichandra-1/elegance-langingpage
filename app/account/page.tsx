import Image from "next/image"
import Link from "next/link"
import { 
  User, 
  Package, 
  MapPin, 
  CreditCard, 
  Heart, 
  Settings, 
  LogOut,
  Edit,
  Trash,
  Plus
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AccountPage() {
  // Mock user data - this would come from your auth system/API
  const user = {
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    joinDate: "March 2023"
  }

  // Mock orders - would come from your database
  const orders = [
    {
      id: "ORD-39471",
      date: "April 2, 2025",
      status: "Delivered",
      items: 3,
      total: 329.97,
      tracking: "USPS-392441891",
      products: [
        {
          id: 1,
          name: "Cashmere Blend Sweater",
          price: 189.99,
          image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
          color: "Ivory",
          size: "M",
          quantity: 1
        },
        {
          id: 2,
          name: "Silk Blend Scarf",
          price: 45.99,
          image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=987&auto=format&fit=crop",
          color: "Blue",
          quantity: 1
        },
        {
          id: 3,
          name: "Leather Ankle Boots",
          price: 93.99,
          image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1480&auto=format&fit=crop",
          color: "Black",
          size: "38",
          quantity: 1
        }
      ]
    },
    {
      id: "ORD-38215",
      date: "March 15, 2025",
      status: "Delivered",
      items: 2,
      total: 229.98,
      tracking: "FEDEX-841029384",
      products: [
        {
          id: 4,
          name: "Cotton Blend Oversized Shirt",
          price: 89.99,
          image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2070&auto=format&fit=crop",
          color: "White",
          size: "S",
          quantity: 1
        },
        {
          id: 5,
          name: "Structured Shoulder Bag",
          price: 139.99,
          image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=876&auto=format&fit=crop",
          color: "Tan",
          quantity: 1
        }
      ]
    }
  ]

  // Mock addresses
  const addresses = [
    {
      id: 1,
      name: "Home",
      isDefault: true,
      line1: "123 Park Avenue",
      line2: "Apt 4B",
      city: "New York",
      state: "NY",
      zipcode: "10033",
      country: "United States"
    },
    {
      id: 2,
      name: "Work",
      isDefault: false,
      line1: "456 Madison Ave",
      line2: "Floor 12",
      city: "New York",
      state: "NY",
      zipcode: "10022",
      country: "United States"
    }
  ]

  // Mock payment methods
  const paymentMethods = [
    {
      id: 1,
      isDefault: true,
      type: "Visa",
      last4: "4242",
      expiry: "09/27"
    },
    {
      id: 2,
      isDefault: false,
      type: "Mastercard",
      last4: "8394",
      expiry: "03/26"
    }
  ]

  // Mock wishlist
  const wishlist = [
    {
      id: 1,
      name: "Merino Wool Beanie",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=987&auto=format&fit=crop",
      inStock: true
    },
    {
      id: 2,
      name: "Leather Crossbody Bag",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1169&auto=format&fit=crop",
      inStock: true
    },
    {
      id: 3,
      name: "Linen Blend Dress",
      price: 129.99,
      originalPrice: 179.99,
      image: "https://images.unsplash.com/photo-1586078130702-d208859b6223?q=80&w=987&auto=format&fit=crop",
      inStock: false
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start">
            <div className="mb-2 flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <span className="font-medium text-foreground">My Account</span>
            </div>
            <h1 className="mb-2 text-3xl font-bold tracking-tight">My Account</h1>
            <p className="text-muted-foreground">Manage your account details and preferences</p>
          </div>
        </div>
      </section>

      {/* Account Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            
            {/* Account Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <p className="text-xs text-muted-foreground">Member since {user.joinDate}</p>
                </div>
                
                <Separator />
                
                <nav className="flex flex-col space-y-1">
                <Tabs>
                        
                  <TabsList className="grid w-full grid-cols-1 mb-6">
                    <TabsTrigger value="overview" className="flex items-center justify-start px-3 text-sm">
                      <User className="mr-2 h-4 w-4" />
                      Account Overview
                    </TabsTrigger>
                    <TabsTrigger value="orders" className="flex items-center justify-start px-3 text-sm">
                      <Package className="mr-2 h-4 w-4" />
                      Orders
                    </TabsTrigger>
                    <TabsTrigger value="addresses" className="flex items-center justify-start px-3 text-sm">
                      <MapPin className="mr-2 h-4 w-4" />
                      Addresses
                    </TabsTrigger>
                    <TabsTrigger value="payment" className="flex items-center justify-start px-3 text-sm">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Payment Methods
                    </TabsTrigger>
                    <TabsTrigger value="wishlist" className="flex items-center justify-start px-3 text-sm">
                      <Heart className="mr-2 h-4 w-4" />
                      Wishlist
                    </TabsTrigger>
                    <TabsTrigger value="settings" className="flex items-center justify-start px-3 text-sm">
                      <Settings className="mr-2 h-4 w-4" />
                      Account Settings
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                  
                  <Button variant="outline" className="flex w-full items-center justify-start">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </nav>
              </div>
            </div>
            
            {/* Account Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="overview" className="w-full">
                
                {/* Account Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Recent Orders Summary */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Recent Orders</CardTitle>
                        <CardDescription>Your last 2 orders</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {orders.slice(0, 2).map(order => (
                            <li key={order.id} className="flex justify-between border-b pb-2">
                              <div>
                                <p className="font-medium">{order.id}</p>
                                <p className="text-sm text-muted-foreground">{order.date}</p>
                                <Badge variant={order.status === 'Delivered' ? 'outline' : 'default'} className="mt-1">
                                  {order.status}
                                </Badge>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">${order.total.toFixed(2)}</p>
                                <p className="text-sm text-muted-foreground">{order.items} items</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="#orders">View All Orders</Link>
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Account Info Summary */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Account Information</CardTitle>
                        <CardDescription>Your personal details</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <dl className="space-y-2">
                          <div className="flex justify-between py-1">
                            <dt className="text-sm font-medium text-muted-foreground">Name:</dt>
                            <dd className="text-sm">{user.name}</dd>
                          </div>
                          <div className="flex justify-between py-1">
                            <dt className="text-sm font-medium text-muted-foreground">Email:</dt>
                            <dd className="text-sm">{user.email}</dd>
                          </div>
                          <div className="flex justify-between py-1">
                            <dt className="text-sm font-medium text-muted-foreground">Password:</dt>
                            <dd className="text-sm">••••••••</dd>
                          </div>
                          <div className="flex justify-between py-1">
                            <dt className="text-sm font-medium text-muted-foreground">Default Address:</dt>
                            <dd className="text-sm">{addresses.find(a => a.isDefault)?.line1}</dd>
                          </div>
                        </dl>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="#settings">Edit Profile</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  {/* Wishlist Preview */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Recently Saved Items</CardTitle>
                      <CardDescription>Items in your wishlist</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {wishlist.slice(0, 3).map(item => (
                          <div key={item.id} className="group relative overflow-hidden rounded-md border">
                            <div className="aspect-square w-full overflow-hidden">
                              <Image 
                                src={item.image} 
                                alt={item.name}
                                width={200}
                                height={200}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <div className="p-3">
                              <h3 className="text-sm font-medium line-clamp-1">{item.name}</h3>
                              <div className="flex items-center gap-2 mt-1">
                                {item.originalPrice ? (
                                  <>
                                    <span className="text-sm font-medium">${item.price.toFixed(2)}</span>
                                    <span className="text-xs text-muted-foreground line-through">${item.originalPrice.toFixed(2)}</span>
                                  </>
                                ) : (
                                  <span className="text-sm font-medium">${item.price.toFixed(2)}</span>
                                )}
                              </div>
                              {!item.inStock && (
                                <Badge variant="outline" className="mt-1 bg-muted">Out of Stock</Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="#wishlist">View Wishlist</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                {/* Orders Tab */}
                <TabsContent value="orders" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Orders</CardTitle>
                      <CardDescription>View and track your orders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {orders.length > 0 ? (
                        <div className="space-y-6">
                          {orders.map(order => (
                            <div key={order.id} className="rounded-lg border">
                              <div className="flex flex-wrap items-center justify-between border-b p-4">
                                <div>
                                  <p className="font-medium">{order.id}</p>
                                  <p className="text-sm text-muted-foreground">{order.date}</p>
                                </div>
                                <div className="text-right">
                                  <Badge variant={order.status === 'Delivered' ? 'outline' : 'default'} className="mb-1">
                                    {order.status}
                                  </Badge>
                                  <p className="font-medium">${order.total.toFixed(2)}</p>
                                </div>
                              </div>
                              <div className="p-4">
                                <div className="mb-4 grid gap-4">
                                  {order.products.map(product => (
                                    <div key={product.id} className="flex items-start gap-4">
                                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                                        <Image 
                                          src={product.image} 
                                          alt={product.name}
                                          width={64}
                                          height={64}
                                          className="h-full w-full object-cover"
                                        />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-sm font-medium">{product.name}</h4>
                                        <div className="mt-1 flex flex-wrap text-xs text-muted-foreground">
                                          {product.color && <span className="mr-2">Color: {product.color}</span>}
                                          {product.size && <span className="mr-2">Size: {product.size}</span>}
                                          <span>Qty: {product.quantity}</span>
                                        </div>
                                        <p className="mt-1 text-sm font-medium">${product.price.toFixed(2)}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <div className="flex flex-wrap gap-2 border-t pt-4">
                                  <Button size="sm" variant="outline">Track Order</Button>
                                  <Button size="sm" variant="outline">Invoice</Button>
                                  <Button size="sm" variant="outline">Return Items</Button>
                                  <Button size="sm" variant="outline">Buy Again</Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                          <Package className="mb-2 h-12 w-12 text-muted-foreground" />
                          <h3 className="mt-2 text-lg font-medium">No orders yet</h3>
                          <p className="mt-1 text-sm text-muted-foreground">When you place orders, they will appear here</p>
                          <Button className="mt-4" asChild>
                            <Link href="/">Start Shopping</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Addresses Tab */}
                <TabsContent value="addresses" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Addresses</CardTitle>
                      <CardDescription>Manage your shipping and billing addresses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {addresses.map(address => (
                          <div key={address.id} className="relative rounded-lg border p-4">
                            {address.isDefault && (
                              <Badge className="absolute right-2 top-2">Default</Badge>
                            )}
                            <h3 className="font-medium">{address.name}</h3>
                            <div className="mt-2 space-y-1 text-sm">
                              <p>{address.line1}</p>
                              {address.line2 && <p>{address.line2}</p>}
                              <p>{address.city}, {address.state} {address.zipcode}</p>
                              <p>{address.country}</p>
                            </div>
                            <div className="mt-4 flex gap-2">
                              <Button size="sm" variant="outline">
                                <Edit className="mr-2 h-3 w-3" />
                                Edit
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash className="mr-2 h-3 w-3" />
                                Remove
                              </Button>
                              {!address.isDefault && (
                                <Button size="sm" variant="outline">
                                  Set as Default
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}

                        {/* Add new address card */}
                        <div className="flex min-h-[200px] flex-col items-center justify-center rounded-lg border border-dashed p-4">
                          <Plus className="mb-2 h-8 w-8 text-muted-foreground" />
                          <p className="mb-2 text-sm font-medium">Add New Address</p>
                          <Button size="sm" variant="outline">Add Address</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Payment Methods Tab */}
                <TabsContent value="payment" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Methods</CardTitle>
                      <CardDescription>Manage your saved payment methods</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {paymentMethods.map(payment => (
                          <div key={payment.id} className="relative rounded-lg border p-4">
                            {payment.isDefault && (
                              <Badge className="absolute right-2 top-2">Default</Badge>
                            )}
                            <div className="flex items-center gap-2">
                              <div className="rounded border px-2 py-1 text-xs font-medium">
                                {payment.type}
                              </div>
                              <p className="text-sm">•••• {payment.last4}</p>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">Expires: {payment.expiry}</p>
                            <div className="mt-4 flex gap-2">
                              <Button size="sm" variant="outline">
                                <Edit className="mr-2 h-3 w-3" />
                                Edit
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash className="mr-2 h-3 w-3" />
                                Remove
                              </Button>
                              {!payment.isDefault && (
                                <Button size="sm" variant="outline">
                                  Set as Default
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}

                        {/* Add new payment method card */}
                        <div className="flex min-h-[150px] flex-col items-center justify-center rounded-lg border border-dashed p-4">
                          <Plus className="mb-2 h-8 w-8 text-muted-foreground" />
                          <p className="mb-2 text-sm font-medium">Add Payment Method</p>
                          <Button size="sm" variant="outline">Add Payment Method</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Wishlist Tab */}
                <TabsContent value="wishlist" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Wishlist</CardTitle>
                      <CardDescription>Items you've saved for later</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {wishlist.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                          {wishlist.map(item => (
                            <div key={item.id} className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
                              <Link href={`/product/${item.id}`} className="relative block aspect-square overflow-hidden">
                                <Image 
                                  src={item.image} 
                                  alt={item.name}
                                  width={300}
                                  height={300}
                                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {!item.inStock && (
                                  <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                                    <Badge variant="outline" className="bg-muted">Out of Stock</Badge>
                                  </div>
                                )}
                              </Link>
                              <div className="p-4">
                                <h3 className="mb-1 text-base font-medium">{item.name}</h3>
                                <div className="flex items-center gap-2">
                                  {item.originalPrice ? (
                                    <>
                                      <span className="font-medium">${item.price.toFixed(2)}</span>
                                      <span className="text-sm text-muted-foreground line-through">${item.originalPrice.toFixed(2)}</span>
                                    </>
                                  ) : (
                                    <span className="font-medium">${item.price.toFixed(2)}</span>
                                  )}
                                </div>
                                <div className="mt-4 flex gap-2">
                                  <Button variant="default" className="flex-1" disabled={!item.inStock}>
                                    {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                                  </Button>
                                  <Button variant="outline" size="icon">
                                    <Trash className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                          <Heart className="mb-2 h-12 w-12 text-muted-foreground" />
                          <h3 className="mt-2 text-lg font-medium">Your wishlist is empty</h3>
                          <p className="mt-1 text-sm text-muted-foreground">Save items you like for future reference</p>
                          <Button className="mt-4" asChild>
                            <Link href="/">Start Shopping</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Account Settings Tab */}
                <TabsContent value="settings" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>Update your account details</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="flex flex-col space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">Name</label>
                          <Input id="name" defaultValue={user.name} />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">Email</label>
                          <Input id="email" type="email" defaultValue={user.email} />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                          <Input id="phone" type="tel" placeholder="Enter your phone number" />
                        </div>
                        <div className="flex items-center gap-4">
                          <Button>Save Changes</Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Change Password</CardTitle>
                      <CardDescription>Update your password</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="flex flex-col space-y-2">
                          <label htmlFor="current-password" className="text-sm font-medium">Current Password</label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label htmlFor="new-password" className="text-sm font-medium">New Password</label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label htmlFor="confirm-password" className="text-sm font-medium">Confirm New Password</label>
                          <Input id="confirm-password" type="password" />
                        </div>
                        <div className="flex items-center gap-4">
                          <Button>Update Password</Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                      <CardDescription>Manage your notification settings</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <h4 className="text-sm font-medium">Order Updates</h4>
                            <p className="text-xs text-muted-foreground">Receive notifications about your orders</p>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4" id="order-updates" defaultChecked />
                          </div>
                        </li>
                        <Separator />
                        <li className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <h4 className="text-sm font-medium">Promotions and Sales</h4>
                            <p className="text-xs text-muted-foreground">Receive notifications about special offers</p>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4" id="promotions" defaultChecked />
                          </div>
                        </li>
                        <Separator />
                        <li className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <h4 className="text-sm font-medium">Wishlist Updates</h4>
                            <p className="text-xs text-muted-foreground">Receive notifications about wishlist items</p>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4" id="wishlist-updates" />
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button>Save Preferences</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}