"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpDown, MapPin, Calendar, Users, Home, FileText } from "lucide-react"
import TokenChart from "@/components/token-chart"
import TokenInfo from "@/components/token-info"
import LiveActivity from "@/components/live-activity"
import TopHolders from "@/components/top-holders"

interface TokenPageProps {
  params: {
    id: string
  }
}

export default function TokenPage({ params }: TokenPageProps) {
  // In a real app, you would fetch this data based on the ID
  const property = {
    id: params.id,
    name: "Luxury Villa Seminyak",
    symbol: "SMYK01",
    image: "/placeholder.jpg",
    description:
      "A stunning luxury villa located in the heart of Seminyak, Bali. This property features 5 bedrooms, a private pool, and modern amenities. Currently generating steady rental income from luxury vacation rentals.",
    price: "$850,000",
    tokenPrice: "$100",
    marketCap: "$637,500",
    fullyDilutedMarketCap: "$850,000",
    tokensSold: "6,375",
    totalSupply: "8,500",
    annualYield: "8.5%",
    location: "Seminyak, Bali, Indonesia",
    propertyType: "Residential Villa",
    size: "750 sqm",
    yearBuilt: "2021",
    tokenAddress: "0x6BBtbfd2hRVUjJpahHsQzD7qvu3YoQrYsdwdDKmet8a",
    documents: [
      { name: "Property Deed", url: "#" },
      { name: "Valuation Report", url: "#" },
      { name: "Rental History", url: "#" },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        {/* Property Header */}
        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div className="flex items-start gap-6">
            <div className="relative aspect-square w-24 overflow-hidden rounded-lg">
              <Image 
                src={property.image} 
                alt={property.name} 
                fill 
                className="object-cover" 
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{property.name}</h1>
              <div className="mt-2 flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{property.location}</span>
              </div>
              <div className="mt-4 flex gap-3">
                <Badge className="bg-[#E5F7F6] text-[#14B8A6]">
                  {property.propertyType}
                </Badge>
                <Badge className="bg-[#E5F7F6] text-[#14B8A6]">
                  {property.annualYield} Annual Yield
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Property Value</p>
              <p className="text-2xl font-bold text-gray-900">{property.price}</p>
              <p className="text-sm text-gray-600">Token Price: {property.tokenPrice}</p>
            </div>
            <Button className="rounded-lg bg-[#14B8A6] px-6 py-2 text-white hover:bg-[#0D9488]">
              Buy Tokens
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* Property Images */}
            <div className="mb-8 aspect-video overflow-hidden rounded-xl">
              <Image
                src={property.image}
                alt={property.name}
                width={1200}
                height={675}
                className="w-full object-cover"
              />
            </div>

            {/* Property Details */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-gray-900">Property Details</h2>
              <div className="mb-6 grid grid-cols-2 gap-6 md:grid-cols-4">
                <div>
                  <div className="mb-2 rounded-full bg-[#E5F7F6] p-2 w-fit">
                    <Home className="h-5 w-5 text-[#14B8A6]" />
                  </div>
                  <p className="text-sm text-gray-600">Property Type</p>
                  <p className="font-medium text-gray-900">{property.propertyType}</p>
                </div>
                <div>
                  <div className="mb-2 rounded-full bg-[#E5F7F6] p-2 w-fit">
                    <Calendar className="h-5 w-5 text-[#14B8A6]" />
                  </div>
                  <p className="text-sm text-gray-600">Year Built</p>
                  <p className="font-medium text-gray-900">{property.yearBuilt}</p>
                </div>
                <div>
                  <div className="mb-2 rounded-full bg-[#E5F7F6] p-2 w-fit">
                    <Users className="h-5 w-5 text-[#14B8A6]" />
                  </div>
                  <p className="text-sm text-gray-600">Token Holders</p>
                  <p className="font-medium text-gray-900">{property.tokensSold} / {property.totalSupply}</p>
                </div>
                <div>
                  <div className="mb-2 rounded-full bg-[#E5F7F6] p-2 w-fit">
                    <FileText className="h-5 w-5 text-[#14B8A6]" />
                  </div>
                  <p className="text-sm text-gray-600">Documents</p>
                  <p className="font-medium text-gray-900">{property.documents.length} Files</p>
                </div>
              </div>
              <p className="text-gray-600">{property.description}</p>
            </div>

            {/* Investment Performance */}
            {/* <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-gray-900">Investment Performance</h2>
              <TokenChart />
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Investment Summary */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-gray-900">Investment Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Value</span>
                  <span className="font-medium text-gray-900">{property.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Token Price</span>
                  <span className="font-medium text-gray-900">{property.tokenPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Yield</span>
                  <span className="font-medium text-green-600">{property.annualYield}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Supply</span>
                  <span className="font-medium text-gray-900">{property.totalSupply} Tokens</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tokens Sold</span>
                  <span className="font-medium text-gray-900">{property.tokensSold} Tokens</span>
                </div>
              </div>
              <Button className="mt-6 w-full rounded-lg bg-[#14B8A6] text-white hover:bg-[#0D9488]">
                Buy Tokens
              </Button>
            </div>

            {/* Documents */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-gray-900">Documents</h3>
              <div className="space-y-3">
                {property.documents.map((doc, index) => (
                  <a
                    key={index}
                    href={doc.url}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-3 hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-[#14B8A6]" />
                      <span className="text-gray-900">{doc.name}</span>
                    </div>
                    <ArrowUpDown className="h-4 w-4 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Top Holders */}
            {/* <TopHolders /> */}
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-8">
          <TokenInfo token={{
            ...property,
            realWorldValue: property.price,
          }} />
          {/* <LiveActivity /> */}
        </div>
      </div>
    </div>
  )
}