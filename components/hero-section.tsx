import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-navy-900 to-navy-700 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Your
          <span className="text-navy-200 block">Dream Home</span>
        </h1>
        <p className="text-xl text-navy-100 mb-8 max-w-3xl mx-auto">
          Discover exceptional properties with DELIGHT HOMES LIMITED. Your trusted partner in finding the perfect home
          that matches your lifestyle in Uganda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/properties">
            <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-3">
              <Search className="mr-2 h-5 w-5" />
              Browse Properties
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy-900 px-8 py-3 bg-transparent"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
