"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, TrendingUp, History, Wallet } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Manage your property investments and track performance</p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-[#E5F7F6] p-3">
                <Building2 className="h-6 w-6 text-[#14B8A6]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Properties</p>
                <p className="text-2xl font-bold text-gray-900">5</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-[#E5F7F6] p-3">
                <TrendingUp className="h-6 w-6 text-[#14B8A6]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Value</p>
                <p className="text-2xl font-bold text-gray-900">$125,000</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-[#E5F7F6] p-3">
                <History className="h-6 w-6 text-[#14B8A6]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Yield</p>
                <p className="text-2xl font-bold text-gray-900">8.5%</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-[#E5F7F6] p-3">
                <Wallet className="h-6 w-6 text-[#14B8A6]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Available Balance</p>
                <p className="text-2xl font-bold text-gray-900">$2,500</p>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="properties" className="space-y-6">
          <TabsList className="bg-white">
            <TabsTrigger value="properties">My Properties</TabsTrigger>
            <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
            <TabsTrigger value="yield">Yield History</TabsTrigger>
          </TabsList>

          <TabsContent value="properties" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100"></div>
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Property #{i}</h3>
                    <p className="mb-4 text-sm text-gray-600">
                      A beautiful property with great potential for long-term investment.
                    </p>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-gray-600">Investment Progress</span>
                      <span className="font-medium text-[#14B8A6]">75%</span>
                    </div>
                    <Progress value={75} className="mb-4 bg-gray-100" indicatorClassName="bg-[#14B8A6]" />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Invested: $75,000</span>
                      <span>Target: $100,000</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="transactions">
            <Card>
              <div className="p-6">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#E5F7F6] p-2">
                          <TrendingUp className="h-4 w-4 text-[#14B8A6]" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Property #{i} Investment</p>
                          <p className="text-sm text-gray-600">March {i + 10}, 2024</p>
                        </div>
                      </div>
                      <p className="font-medium text-[#14B8A6]">+$15,000</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="yield">
            <Card>
              <div className="p-6">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#E5F7F6] p-2">
                          <History className="h-4 w-4 text-[#14B8A6]" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Property #{i} Yield</p>
                          <p className="text-sm text-gray-600">Q{i} 2024</p>
                        </div>
                      </div>
                      <p className="font-medium text-[#14B8A6]">8.{i}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}