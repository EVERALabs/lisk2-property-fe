"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Search, Filter, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const properties = [
  {
    id: "property-1",
    name: "Luxury Villa Seminyak",
    location: "Bali, Indonesia",
    price: "$850,000",
    tokenPrice: "$100",
    progress: 75,
    totalRaised: "$637,500",
    target: "$850,000",
    image: "/placeholder.jpg",
    yield: "8.5%",
    type: "Residential",
  },
  {
    id: "property-2",
    name: "Commercial Space Plaza",
    location: "Jakarta, Indonesia",
    price: "$1,200,000",
    tokenPrice: "$150",
    progress: 60,
    totalRaised: "$720,000",
    target: "$1,200,000",
    image: "/placeholder.jpg",
    yield: "9.2%",
    type: "Commercial",
  },
  // Add more properties as needed
].concat(Array(4).fill(null).map((_, i) => ({
  id: `property-${i + 3}`,
  name: `Premium Property #${i + 3}`,
  location: "Various Locations, Indonesia",
  price: "$500,000",
  tokenPrice: "$100",
  progress: Math.floor(Math.random() * 40) + 40,
  totalRaised: "$300,000",
  target: "$500,000",
  image: "/placeholder.jpg",
  yield: "8.0%",
  type: "Mixed",
})))

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Property Marketplace</h1>
          <p className="text-gray-600">Discover and invest in tokenized real estate properties</p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <div className="border-b border-gray-100 p-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search properties..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Select>
                  <option>All Types</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Mixed Use</option>
                </Select>
                <Select>
                  <option>All Locations</option>
                  <option>Bali</option>
                  <option>Jakarta</option>
                  <option>Other Locations</option>
                </Select>
                <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                  <Filter className="h-4 w-4" />
                  More Filters
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* Property Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <Link href={`/token/${property.id}`} key={property.id}>
              <Card className="group overflow-hidden transition-all hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-[#14B8A6]">
                    {property.yield} Annual Yield
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{property.name}</h3>
                      <p className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        {property.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{property.price}</p>
                      <p className="text-xs text-gray-600">Token Price: {property.tokenPrice}</p>
                    </div>
                  </div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-gray-600">Investment Progress</span>
                    <span className="font-medium text-[#14B8A6]">{property.progress}%</span>
                  </div>
                  <Progress value={property.progress} className="mb-2 bg-gray-100" indicatorClassName="bg-[#14B8A6]" />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Raised: {property.totalRaised}</span>
                    <span>Target: {property.target}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="rounded-full bg-[#E5F7F6] px-2 py-1 text-xs font-medium text-[#14B8A6]">
                      {property.type}
                    </span>
                    <span className="text-sm font-medium text-[#14B8A6] group-hover:underline">
                      View Details →
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}