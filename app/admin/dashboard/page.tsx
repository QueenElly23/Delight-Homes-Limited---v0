"use client"

import { useState, useEffect } from "react"
import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Home, Plus, Eye, Edit, Trash2, TrendingUp, Users, MapPin, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { getProperties, getPropertyStats, deleteProperty, deleteProperties, formatPrice } from "@/lib/properties"
import type { Property } from "@/lib/supabase"
import { useToast } from "@/hooks/use-toast"

export default function AdminDashboard() {
  const [properties, setProperties] = useState<Property[]>([])
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    sold: 0,
    totalValue: 0,
  })
  const [selectedProperties, setSelectedProperties] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [isDemoMode, setIsDemoMode] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [propertiesData, statsData] = await Promise.all([getProperties(), getPropertyStats()])

      setProperties(propertiesData)
      setStats(statsData)

      // Check if we're in demo mode (using mock data)
      setIsDemoMode(propertiesData.length > 0 && propertiesData[0].id === "1")
    } catch (error) {
      console.error("Error loading data:", error)
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSelectProperty = (id: string) => {
    setSelectedProperties((prev) => (prev.includes(id) ? prev.filter((propId) => propId !== id) : [...prev, id]))
  }

  const handleDeleteSelected = async () => {
    if (selectedProperties.length === 0) return

    if (isDemoMode) {
      toast({
        title: "Demo Mode",
        description: "Database operations are disabled in demo mode. Please set up your Supabase database.",
        variant: "destructive",
      })
      return
    }

    try {
      const success = await deleteProperties(selectedProperties)
      if (success) {
        toast({
          title: "Success",
          description: `${selectedProperties.length} properties deleted successfully`,
        })
        setSelectedProperties([])
        loadData() // Reload data
      } else {
        throw new Error("Failed to delete properties")
      }
    } catch (error) {
      console.error("Error deleting properties:", error)
      toast({
        title: "Error",
        description: "Failed to delete properties",
        variant: "destructive",
      })
    }
  }

  const handleDeleteSingle = async (id: string) => {
    if (isDemoMode) {
      toast({
        title: "Demo Mode",
        description: "Database operations are disabled in demo mode. Please set up your Supabase database.",
        variant: "destructive",
      })
      return
    }

    try {
      const success = await deleteProperty(id)
      if (success) {
        toast({
          title: "Success",
          description: "Property deleted successfully",
        })
        loadData() // Reload data
      } else {
        throw new Error("Failed to delete property")
      }
    } catch (error) {
      console.error("Error deleting property:", error)
      toast({
        title: "Error",
        description: "Failed to delete property",
        variant: "destructive",
      })
    }
  }

  const statsCards = [
    {
      title: "Total Properties",
      value: stats.total.toString(),
      icon: Home,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Active Listings",
      value: stats.active.toString(),
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Properties Sold",
      value: stats.sold.toString(),
      icon: Users,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Total Value",
      value: formatPrice(stats.totalValue),
      icon: MapPin,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  if (loading) {
    return (
      <AdminLayout>
        <div className="space-y-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg p-6 h-24"></div>
              ))}
            </div>
            <div className="bg-white rounded-lg p-6 h-96"></div>
          </div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Demo Mode Alert */}
        {isDemoMode && (
          <Alert className="border-yellow-200 bg-yellow-50">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <AlertDescription>
              <strong>Demo Mode:</strong> You're viewing sample data. Database operations (create, update, delete) are
              disabled. Please set up your Supabase database by running the SQL scripts to enable full functionality.
            </AlertDescription>
          </Alert>
        )}

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Manage your properties and view analytics</p>
          </div>
          <Link href="/admin/properties/new">
            <Button className="bg-yellow-600 hover:bg-yellow-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Property
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Properties Table */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle>Recent Properties</CardTitle>
              {selectedProperties.length > 0 && (
                <Button variant="destructive" size="sm" onClick={handleDeleteSelected} disabled={isDemoMode}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Selected ({selectedProperties.length})
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedProperties(properties.map((p) => p.id))
                          } else {
                            setSelectedProperties([])
                          }
                        }}
                        checked={selectedProperties.length === properties.length && properties.length > 0}
                        disabled={isDemoMode}
                      />
                    </th>
                    <th className="text-left py-3 px-4">Property</th>
                    <th className="text-left py-3 px-4">Price</th>
                    <th className="text-left py-3 px-4">Location</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((property) => (
                    <tr key={property.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <input
                          type="checkbox"
                          checked={selectedProperties.includes(property.id)}
                          onChange={() => handleSelectProperty(property.id)}
                          disabled={isDemoMode}
                        />
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={property.images?.[0] || "/placeholder.svg?height=50&width=50"}
                            alt={property.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium text-gray-900">{property.title}</p>
                            <p className="text-sm text-gray-600">{property.property_type}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-semibold text-yellow-600">{formatPrice(property.price)}</td>
                      <td className="py-3 px-4 text-gray-600">{property.location}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={property.status === "For Sale" ? "default" : "secondary"}
                          className={
                            property.status === "For Sale" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                          }
                        >
                          {property.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <Link href={`/properties/${property.id}`}>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Link href={`/admin/properties/${property.id}/edit`}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className={isDemoMode ? "opacity-50 cursor-not-allowed" : ""}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => handleDeleteSingle(property.id)}
                            disabled={isDemoMode}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {properties.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No properties found. Add your first property to get started.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
