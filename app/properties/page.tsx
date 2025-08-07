"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { PropertyFilters } from "@/components/property-filters"
import { SearchBar } from "@/components/search-bar"
import { getProperties, searchProperties } from "@/lib/properties"
import type { Property } from "@/lib/supabase"

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    priceRange: "",
    location: "",
    propertyType: "",
    bedrooms: "",
  })

  useEffect(() => {
    loadProperties()
  }, [])

  const loadProperties = async () => {
    try {
      const data = await getProperties()
      setProperties(data)
      setFilteredProperties(data)
    } catch (error) {
      console.error("Error loading properties:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (term: string) => {
    setSearchTerm(term)
    await filterProperties(term, filters)
  }

  const handleFilterChange = async (newFilters: typeof filters) => {
    setFilters(newFilters)
    await filterProperties(searchTerm, newFilters)
  }

  const filterProperties = async (search: string, currentFilters: typeof filters) => {
    try {
      // Convert price range to numbers
      let minPrice: number | undefined
      let maxPrice: number | undefined

      if (currentFilters.priceRange) {
        const [min, max] = currentFilters.priceRange.split("-")
        minPrice = min ? Number.parseInt(min) : undefined
        maxPrice = max ? Number.parseInt(max) : undefined
      }

      const searchFilters = {
        search: search || undefined,
        location: currentFilters.location || undefined,
        propertyType: currentFilters.propertyType || undefined,
        minBedrooms: currentFilters.bedrooms ? Number.parseInt(currentFilters.bedrooms) : undefined,
        minPrice,
        maxPrice,
      }

      const filtered = await searchProperties(searchFilters)
      setFilteredProperties(filtered)
    } catch (error) {
      console.error("Error filtering properties:", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg p-4">
                  <div className="bg-gray-300 h-48 rounded mb-4"></div>
                  <div className="bg-gray-300 h-4 rounded mb-2"></div>
                  <div className="bg-gray-300 h-4 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Properties</h1>
          <p className="text-lg text-gray-600">Discover your perfect home from our extensive collection</p>
        </div>

        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <PropertyFilters onFilterChange={handleFilterChange} />
          </div>

          <div className="lg:w-3/4">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {filteredProperties.length} of {properties.length} properties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
