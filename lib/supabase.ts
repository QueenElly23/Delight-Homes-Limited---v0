import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types
export interface Property {
  id: string
  title: string
  description: string
  price: number
  location: string
  property_type: string
  status: string
  bedrooms: number
  bathrooms: number
  area: string
  features: string[]
  images: string[]
  created_at: string
  updated_at: string
}

export interface AdminUser {
  id: string
  email: string
  full_name: string
  created_at: string
}
