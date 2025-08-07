import { supabase } from "./supabase"
import type { Property } from "./supabase"

// Mock data as fallback when database isn't set up yet
const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern Family Villa",
    description:
      "This stunning modern family villa offers the perfect blend of luxury and comfort. Located in the prestigious Lekki area, this property features contemporary design, spacious rooms, and premium finishes throughout.",
    price: 180000000,
    location: "Kololo, Kampala",
    property_type: "Villa",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 3,
    area: "350 sqm",
    features: [
      "Modern kitchen with island",
      "Spacious living areas",
      "Master bedroom with walk-in closet",
      "Private garden",
      "Parking for 3 cars",
      "24/7 security",
      "Swimming pool",
    ],
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    created_at: "2024-01-15T00:00:00Z",
    updated_at: "2024-01-15T00:00:00Z",
  },
  {
    id: "2",
    title: "Luxury Apartment",
    description:
      "Experience luxury living in this beautifully designed apartment located in the heart of Nakasero. Features premium finishes and stunning city views.",
    price: 95000000,
    location: "Nakasero, Kampala",
    property_type: "Apartment",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 2,
    area: "180 sqm",
    features: ["City views", "Modern kitchen", "Gym access", "Swimming pool", "Concierge service", "Parking space"],
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    created_at: "2024-01-10T00:00:00Z",
    updated_at: "2024-01-10T00:00:00Z",
  },
  {
    id: "3",
    title: "Executive Duplex",
    description:
      "Spacious executive duplex in the serene environment of Bugolobi. Perfect for families looking for comfort and elegance.",
    price: 140000000,
    location: "Bugolobi, Kampala",
    property_type: "Duplex",
    status: "For Sale",
    bedrooms: 5,
    bathrooms: 4,
    area: "280 sqm",
    features: [
      "Two living rooms",
      "Modern kitchen",
      "Master suite",
      "Guest rooms",
      "Garden",
      "Parking for 2 cars",
      "Generator backup",
    ],
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    created_at: "2024-01-05T00:00:00Z",
    updated_at: "2024-01-05T00:00:00Z",
  },
  {
    id: "4",
    title: "Waterfront Penthouse",
    description: "Stunning penthouse with lake views in the prestigious Munyonyo area.",
    price: 320000000,
    location: "Munyonyo, Kampala",
    property_type: "Penthouse",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 5,
    area: "450 sqm",
    features: [
      "Lake views",
      "Private terrace",
      "Jacuzzi",
      "Modern kitchen",
      "Master suite",
      "Parking for 3 cars",
      "24/7 security",
    ],
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "5",
    title: "Family Bungalow",
    description: "Comfortable family bungalow in a quiet neighborhood perfect for growing families.",
    price: 75000000,
    location: "Ntinda, Kampala",
    property_type: "Bungalow",
    status: "For Sale",
    bedrooms: 3,
    bathrooms: 2,
    area: "200 sqm",
    features: ["Garden", "Modern kitchen", "Living room", "Dining area", "Parking for 2 cars", "Security"],
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    created_at: "2023-12-28T00:00:00Z",
    updated_at: "2023-12-28T00:00:00Z",
  },
  {
    id: "6",
    title: "Contemporary Townhouse",
    description: "Modern townhouse in a gated community with excellent amenities.",
    price: 125000000,
    location: "Muyenga, Kampala",
    property_type: "Townhouse",
    status: "For Sale",
    bedrooms: 4,
    bathrooms: 3,
    area: "250 sqm",
    features: ["Gated community", "Swimming pool", "Gym", "Modern kitchen", "Garden", "Parking space"],
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    created_at: "2023-12-25T00:00:00Z",
    updated_at: "2023-12-25T00:00:00Z",
  },
]

// Format price to UGX
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

// Check if database is available
async function isDatabaseAvailable(): Promise<boolean> {
  try {
    const { error } = await supabase.from("properties").select("id").limit(1)
    return !error
  } catch {
    return false
  }
}

// Get all properties
export async function getProperties(): Promise<Property[]> {
  try {
    const dbAvailable = await isDatabaseAvailable()

    if (!dbAvailable) {
      console.log("Database not available, using mock data")
      return mockProperties
    }

    const { data, error } = await supabase.from("properties").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching properties:", error)
      return mockProperties
    }

    return data || mockProperties
  } catch (error) {
    console.error("Error fetching properties:", error)
    return mockProperties
  }
}

// Get property by ID
export async function getPropertyById(id: string): Promise<Property | null> {
  try {
    const dbAvailable = await isDatabaseAvailable()

    if (!dbAvailable) {
      console.log("Database not available, using mock data")
      return mockProperties.find((p) => p.id === id) || null
    }

    const { data, error } = await supabase.from("properties").select("*").eq("id", id).single()

    if (error) {
      console.error("Error fetching property:", error)
      return mockProperties.find((p) => p.id === id) || null
    }

    return data
  } catch (error) {
    console.error("Error fetching property:", error)
    return mockProperties.find((p) => p.id === id) || null
  }
}

// Create new property
export async function createProperty(
  propertyData: Omit<Property, "id" | "created_at" | "updated_at">,
): Promise<Property | null> {
  try {
    const dbAvailable = await isDatabaseAvailable()

    if (!dbAvailable) {
      console.error("Database not available. Please set up your Supabase database first.")
      throw new Error("Database not available. Please set up your Supabase database first.")
    }

    const { data, error } = await supabase.from("properties").insert([propertyData]).select().single()

    if (error) {
      console.error("Error creating property:", error)
      throw error
    }

    return data
  } catch (error) {
    console.error("Error creating property:", error)
    throw error
  }
}

// Update property
export async function updateProperty(id: string, propertyData: Partial<Property>): Promise<Property | null> {
  try {
    const dbAvailable = await isDatabaseAvailable()

    if (!dbAvailable) {
      console.error("Database not available. Please set up your Supabase database first.")
      throw new Error("Database not available. Please set up your Supabase database first.")
    }

    const { data, error } = await supabase
      .from("properties")
      .update({ ...propertyData, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("Error updating property:", error)
      throw error
    }

    return data
  } catch (error) {
    console.error("Error updating property:", error)
    throw error
  }
}

// Delete property
export async function deleteProperty(id: string): Promise<boolean> {
  try {
    const dbAvailable = await isDatabaseAvailable()

    if (!dbAvailable) {
      console.error("Database not available. Please set up your Supabase database first.")
      throw new Error("Database not available. Please set up your Supabase database first.")
    }

    const { error } = await supabase.from("properties").delete().eq("id", id)

    if (error) {
      console.error("Error deleting property:", error)
      throw error
    }

    return true
  } catch (error) {
    console.error("Error deleting property:", error)
    throw error
  }
}

// Delete multiple properties
export async function deleteProperties(ids: string[]): Promise<boolean> {
  try {
    const dbAvailable = await isDatabaseAvailable()

    if (!dbAvailable) {
      console.error("Database not available. Please set up your Supabase database first.")
      throw new Error("Database not available. Please set up your Supabase database first.")
    }

    const { error } = await supabase.from("properties").delete().in("id", ids)

    if (error) {
      console.error("Error deleting properties:", error)
      throw error
    }

    return true
  } catch (error) {
    console.error("Error deleting properties:", error)
    throw error
  }
}

// Search and filter properties
export async function searchProperties(filters: {
  search?: string
  location?: string
  propertyType?: string
  minPrice?: number
  maxPrice?: number
  minBedrooms?: number
  status?: string
}): Promise<Property[]> {
  try {
    const dbAvailable = await isDatabaseAvailable()

    if (!dbAvailable) {
      console.log("Database not available, filtering mock data")
      let filtered = mockProperties

      // Apply filters to mock data
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        filtered = filtered.filter(
          (p) =>
            p.title.toLowerCase().includes(searchLower) ||
            p.location.toLowerCase().includes(searchLower) ||
            p.description.toLowerCase().includes(searchLower),
        )
      }

      if (filters.location) {
        filtered = filtered.filter((p) => p.location.toLowerCase().includes(filters.location!.toLowerCase()))
      }

      if (filters.propertyType) {
        filtered = filtered.filter((p) => p.property_type === filters.propertyType)
      }

      if (filters.minPrice) {
        filtered = filtered.filter((p) => p.price >= filters.minPrice!)
      }

      if (filters.maxPrice) {
        filtered = filtered.filter((p) => p.price <= filters.maxPrice!)
      }

      if (filters.minBedrooms) {
        filtered = filtered.filter((p) => p.bedrooms >= filters.minBedrooms!)
      }

      if (filters.status) {
        filtered = filtered.filter((p) => p.status === filters.status)
      }

      return filtered
    }

    let query = supabase.from("properties").select("*")

    // Search filter
    if (filters.search) {
      query = query.or(
        `title.ilike.%${filters.search}%,location.ilike.%${filters.search}%,description.ilike.%${filters.search}%`,
      )
    }

    // Location filter
    if (filters.location) {
      query = query.ilike("location", `%${filters.location}%`)
    }

    // Property type filter
    if (filters.propertyType) {
      query = query.eq("property_type", filters.propertyType)
    }

    // Price range filter
    if (filters.minPrice) {
      query = query.gte("price", filters.minPrice)
    }
    if (filters.maxPrice) {
      query = query.lte("price", filters.maxPrice)
    }

    // Bedrooms filter
    if (filters.minBedrooms) {
      query = query.gte("bedrooms", filters.minBedrooms)
    }

    // Status filter
    if (filters.status) {
      query = query.eq("status", filters.status)
    }

    query = query.order("created_at", { ascending: false })

    const { data, error } = await query

    if (error) {
      console.error("Error searching properties:", error)
      return mockProperties
    }

    return data || mockProperties
  } catch (error) {
    console.error("Error searching properties:", error)
    return mockProperties
  }
}

// Get property statistics
export async function getPropertyStats() {
  try {
    const dbAvailable = await isDatabaseAvailable()

    if (!dbAvailable) {
      console.log("Database not available, using mock stats")
      const total = mockProperties.length
      const active = mockProperties.filter((p) => p.status === "For Sale").length
      const sold = mockProperties.filter((p) => p.status === "Sold").length
      const totalValue = mockProperties.reduce((sum, p) => sum + (p.price || 0), 0)

      return {
        total,
        active,
        sold,
        totalValue,
      }
    }

    const { data: properties, error } = await supabase.from("properties").select("status, price")

    if (error) {
      console.error("Error fetching property stats:", error)
      // Return mock stats as fallback
      const total = mockProperties.length
      const active = mockProperties.filter((p) => p.status === "For Sale").length
      const sold = mockProperties.filter((p) => p.status === "Sold").length
      const totalValue = mockProperties.reduce((sum, p) => sum + (p.price || 0), 0)

      return {
        total,
        active,
        sold,
        totalValue,
      }
    }

    const total = properties.length
    const active = properties.filter((p) => p.status === "For Sale").length
    const sold = properties.filter((p) => p.status === "Sold").length
    const totalValue = properties.reduce((sum, p) => sum + (p.price || 0), 0)

    return {
      total,
      active,
      sold,
      totalValue,
    }
  } catch (error) {
    console.error("Error fetching property stats:", error)
    // Return mock stats as fallback
    const total = mockProperties.length
    const active = mockProperties.filter((p) => p.status === "For Sale").length
    const sold = mockProperties.filter((p) => p.status === "Sold").length
    const totalValue = mockProperties.reduce((sum, p) => sum + (p.price || 0), 0)

    return {
      total,
      active,
      sold,
      totalValue,
    }
  }
}
