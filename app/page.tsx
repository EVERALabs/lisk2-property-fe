"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Building2, Shield, Coins, ChartBar } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#E5F7F6] py-20">
        <div className="container relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
                Invest in Real Estate on the{" "}
                <span className="text-[#14B8A6]">Lisk Blockchain</span>
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                LandRa makes real estate investment accessible to everyone through tokenization.
                Own a piece of premium properties with as little as $100.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="rounded-lg bg-[#14B8A6] px-8 py-6 text-lg font-semibold text-white hover:bg-[#0D9488]"
                >
                  <Link href="/marketplace">
                    Explore Properties
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-lg border-gray-300 px-8 py-6 text-lg font-semibold text-gray-700 hover:bg-gray-50"
                >
                  <Link href="/create">Submit Property</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="/placeholder.jpg"
                alt="Modern building"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Why Choose LandRa?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <div className="mb-4 rounded-full bg-[#E5F7F6] p-3 w-fit">
                <Building2 className="h-6 w-6 text-[#14B8A6]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Premium Properties
              </h3>
              <p className="text-gray-600">
                Carefully curated selection of high-quality real estate assets with strong growth potential.
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 rounded-full bg-[#E5F7F6] p-3 w-fit">
                <Shield className="h-6 w-6 text-[#14B8A6]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Secure & Transparent
              </h3>
              <p className="text-gray-600">
                Built on Lisk blockchain technology ensuring transparency, security, and immutability.
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 rounded-full bg-[#E5F7F6] p-3 w-fit">
                <Coins className="h-6 w-6 text-[#14B8A6]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Low Entry Barrier
              </h3>
              <p className="text-gray-600">
                Start investing with as little as $100 and own a fraction of premium real estate.
              </p>
            </Card>
            <Card className="p-6">
              <div className="mb-4 rounded-full bg-[#E5F7F6] p-3 w-fit">
                <ChartBar className="h-6 w-6 text-[#14B8A6]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Regular Returns
              </h3>
              <p className="text-gray-600">
                Earn regular rental income and benefit from property value appreciation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-[#E5F7F6] p-4">
                  <span className="text-2xl font-bold text-[#14B8A6]">1</span>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Choose a Property
              </h3>
              <p className="text-gray-600">
                Browse our selection of premium properties and choose the one that matches your investment goals.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-[#E5F7F6] p-4">
                  <span className="text-2xl font-bold text-[#14B8A6]">2</span>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Purchase Tokens
              </h3>
              <p className="text-gray-600">
                Buy property tokens using Lisk (LSK) and become a fractional owner of the property.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-[#E5F7F6] p-4">
                  <span className="text-2xl font-bold text-[#14B8A6]">3</span>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Earn Returns
              </h3>
              <p className="text-gray-600">
                Receive regular rental income and benefit from property value appreciation over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-2xl bg-[#14B8A6] p-12 text-center text-white">
            <h2 className="mb-6 text-3xl font-bold">
              Ready to Start Investing in Real Estate?
            </h2>
            <p className="mb-8 text-lg">
              Join thousands of investors who are already earning passive income through property investments.
            </p>
            <Button
              asChild
              className="rounded-lg bg-white px-8 py-6 text-lg font-semibold text-[#14B8A6] hover:bg-gray-100"
            >
              <Link href="/marketplace">
                View Available Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}