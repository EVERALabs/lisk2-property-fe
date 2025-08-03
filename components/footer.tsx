import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[#E5F7F6] bg-white py-12">
      <div className="container grid gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/LandRa-Logo1.png"
              alt="LandRa Logo"
                             width={240}
               height={65}
               className="h-16 w-auto"
            />
          </div>
          <p className="text-sm text-gray-600">Launch and trade liquid real-world assets instantly</p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-medium text-[#0D9488]">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="#" className="hover:text-gray-900">
                Website
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-900">
                RWA Explorer
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-900">
                Mobile App
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-medium text-[#0D9488]">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="#" className="hover:text-gray-900">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-900">
                Docs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-900">
                Fees
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 flex flex-col justify-between border-t border-[#E5F7F6] pt-8 sm:flex-row">
        <p className="text-sm text-gray-600">© 2025 LandRa. All rights reserved.</p>
        <div className="mt-4 flex space-x-4 sm:mt-0">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
