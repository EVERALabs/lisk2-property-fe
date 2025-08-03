"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { ArrowUpRight, ArrowDownRight, Search, Filter } from "lucide-react"

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Transaction History</h1>
          <p className="text-gray-600">View and track all your property investment transactions</p>
        </div>

        <Card className="mb-8">
          <div className="border-b border-gray-100 p-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search transactions..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Select>
                  <option>All Types</option>
                  <option>Investment</option>
                  <option>Withdrawal</option>
                  <option>Yield</option>
                </Select>
                <Select>
                  <option>All Time</option>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                </Select>
                <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                  <Filter className="h-4 w-4" />
                  More Filters
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              {[...Array(10)].map((_, i) => {
                const transactionId = `transaction-${i + 1}`
                return (
                <div key={transactionId} className="flex items-center justify-between border-b border-gray-100 pb-6 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className={`rounded-full p-2 ${i % 2 === 0 ? "bg-green-100" : "bg-red-100"}`}>
                      {i % 2 === 0 ? (
                        <ArrowUpRight className="h-5 w-5 text-green-600" />
                      ) : (
                        <ArrowDownRight className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {i % 2 === 0 ? "Investment in Property #" + (i + 1) : "Withdrawal from Property #" + (i + 1)}
                      </p>
                      <p className="text-sm text-gray-600">March {10 + i}, 2024 at 14:30</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-semibold ${i % 2 === 0 ? "text-green-600" : "text-red-600"}`}>
                      {i % 2 === 0 ? "+" : "-"}$
                      {(15000 + i * 1000).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      {i % 2 === 0 ? "Investment" : "Withdrawal"} #{1000 + i}
                    </p>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </Card>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing 10 of 50 transactions</p>
          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
              Previous
            </button>
            <button className="rounded-lg bg-[#14B8A6] px-4 py-2 text-sm font-medium text-white hover:bg-[#0D9488]">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}