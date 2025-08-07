"use client"

import { useState, useEffect } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Database, AlertTriangle } from "lucide-react"
import { supabase } from "@/lib/supabase"

export function DatabaseStatus() {
  const [dbStatus, setDbStatus] = useState<"checking" | "connected" | "error">("checking")
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    checkDatabaseConnection()
  }, [])

  const checkDatabaseConnection = async () => {
    try {
      const { error } = await supabase.from("properties").select("id").limit(1)
      if (error) {
        setDbStatus("error")
        setShowAlert(true)
      } else {
        setDbStatus("connected")
        setShowAlert(false)
      }
    } catch {
      setDbStatus("error")
      setShowAlert(true)
    }
  }

  if (!showAlert || dbStatus === "connected") {
    return null
  }

  return (
    <Alert className="mb-6 border-yellow-200 bg-yellow-50">
      <AlertTriangle className="h-4 w-4 text-yellow-600" />
      <AlertDescription className="flex items-center justify-between">
        <div>
          <strong>Database Setup Required:</strong> The app is currently using demo data. To enable full functionality,
          please set up your Supabase database by running the SQL scripts.
        </div>
        <div className="flex items-center gap-2 ml-4">
          <Button
            variant="outline"
            size="sm"
            onClick={checkDatabaseConnection}
            className="border-yellow-300 text-yellow-700 hover:bg-yellow-100 bg-transparent"
          >
            <Database className="h-4 w-4 mr-1" />
            Retry
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAlert(false)}
            className="text-yellow-700 hover:bg-yellow-100"
          >
            Dismiss
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}
