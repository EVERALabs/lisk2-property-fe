"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Wallet } from "lucide-react"
import { ConnectButton, useConnectModal } from "@xellar/kit"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const { open } = useConnectModal();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/LandRa-Logo1.png"
              alt="LandRa Logo"
              width={240}
              height={65}
              className="h-16 w-auto"
            />
          </Link>
          <nav className="hidden items-center space-x-1 md:flex">
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-[#E5F7F6] hover:text-[#14B8A6]"
            >
              Home
            </Link>
            <Link
              href="/marketplace"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-[#E5F7F6] hover:text-[#14B8A6]"
            >
              Marketplace
            </Link>
            <Link
              href="/dashboard"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-[#E5F7F6] hover:text-[#14B8A6]"
            >
              Dashboard
            </Link>
            <Link
              href="/transactions"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-[#E5F7F6] hover:text-[#14B8A6]"
            >
              Transactions
            </Link>
            <Link
              href="/create"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-[#E5F7F6] hover:text-[#14B8A6]"
            >
              Submit Property
            </Link>
          </nav>
        </div>

        {/* Right Side - Network & Wallet */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium text-gray-600">Lisk Network</span>
            </div>

            <ConnectButton.Custom>
              {({ openConnectModal, disconnect, isConnected, openChainModal, openProfileModal, account, chain }) => (
                <Button onClick={isConnected ? openProfileModal : openConnectModal}>{isConnected ? <>
                  <Wallet className="h-4 w-4" />
                  {account?.address.slice(0, 6)}...{account?.address.slice(-4)}
                  <ChevronDown className="h-4 w-4" />
                </> : "Connect Wallet"}</Button>
              )}
            </ConnectButton.Custom>

            {/* {walletAddress ? (
              <button className="flex items-center gap-2 rounded-lg bg-[#E5F7F6] px-4 py-2 text-sm font-medium text-[#14B8A6]">
                <Wallet className="h-4 w-4" />
                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                <ChevronDown className="h-4 w-4" />
              </button>
            ) : (
              
              <Button
                onClick={open}
                className="rounded-lg bg-[#14B8A6] px-6 py-2 text-white hover:bg-[#0D9488]"
              >
                Connect Wallet
              </Button>
            )} */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 hover:bg-gray-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="container flex flex-col space-y-1 py-4">
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-[#E5F7F6] hover:text-[#14B8A6]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/marketplace"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-[#E5F7F6] hover:text-[#14B8A6]"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link
              href="/dashboard"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-[#E5F7F6] hover:text-[#14B8A6]"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/transactions"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-[#E5F7F6] hover:text-[#14B8A6]"
              onClick={() => setIsMenuOpen(false)}
            >
              Transactions
            </Link>
            <Link
              href="/create"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-[#E5F7F6] hover:text-[#14B8A6]"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit Property
            </Link>
            <div className="border-t border-gray-100 pt-4">
              <div className="mb-4 flex items-center gap-2 px-4">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-gray-600">Lisk Network</span>
              </div>
              <Button
                onClick={() => {
                  setWalletAddress("0x1234...5678")
                  setIsMenuOpen(false)
                }}
                className="mx-4 w-[calc(100%-32px)] rounded-lg bg-[#14B8A6] px-6 py-2 text-white hover:bg-[#0D9488]"
              >
                Connect Wallet
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}