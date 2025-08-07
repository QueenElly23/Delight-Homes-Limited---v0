import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square } from 'lucide-react'
import { formatPrice } from "@/lib/properties"
import type { Property } from "@/lib/supabase"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`}>
      <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-slate-200">
        <div className="relative">
          <img
            src={property.images?.[0] || "/placeholder.svg?height=300&width=400"}
            alt={property.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-4 left-4 bg-navy-600 hover:bg-navy-700">{property.status}</Badge>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-navy-600 transition-colors">
            {property.title}
          </h3>
          <p className="text-2xl font-bold text-navy-600 mb-3">{formatPrice(property.price)}</p>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.area}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
