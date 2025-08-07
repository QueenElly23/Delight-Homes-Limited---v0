"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, User, Building, Bell, Shield, Database } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

export default function AdminSettingsPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  
  // Company Settings
  const [companySettings, setCompanySettings] = useState({
    name: "DELIGHT HOMES LIMITED",
    email: "info@delighthomes.com",
    phone: "+256 701 234 567",
    address: "Kampala, Uganda",
    description: "Your trusted partner in finding the perfect home. We specialize in premium residential properties across Kampala and beyond.",
    website: "www.delighthomes.com"
  })

  // Admin Profile
  const [adminProfile, setAdminProfile] = useState({
    fullName: "Admin User",
    email: "admin@delighthomes.com",
    phone: "+256 701 234 567",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  })

  // Notification Settings
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    newPropertyAlerts: true,
    inquiryAlerts: true,
    systemUpdates: true
  })

  // System Settings
  const [systemSettings, setSystemSettings] = useState({
    maintenanceMode: false,
    allowRegistrations: true,
    requireApproval: false,
    maxFileSize: "10",
    backupFrequency: "daily"
  })

  const handleCompanySettingsChange = (field: string, value: string) => {
    setCompanySettings(prev => ({ ...prev, [field]: value }))
  }

  const handleAdminProfileChange = (field: string, value: string) => {
    setAdminProfile(prev => ({ ...prev, [field]: value }))
  }

  const handleNotificationChange = (field: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [field]: value }))
  }

  const handleSystemSettingsChange = (field: string, value: string | boolean) => {
    setSystemSettings(prev => ({ ...prev, [field]: value }))
  }

  const handleSaveSettings = async (section: string) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Success",
        description: `${section} settings saved successfully`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your application settings and preferences</p>
        </div>

        <Tabs defaultValue="company" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="company" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              Company
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              System
            </TabsTrigger>
          </TabsList>

          {/* Company Settings */}
          <TabsContent value="company">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Company Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      value={companySettings.name}
                      onChange={(e) => handleCompanySettingsChange("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="companyEmail">Email</Label>
                    <Input
                      id="companyEmail"
                      type="email"
                      value={companySettings.email}
                      onChange={(e) => handleCompanySettingsChange("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="companyPhone">Phone</Label>
                    <Input
                      id="companyPhone"
                      value={companySettings.phone}
                      onChange={(e) => handleCompanySettingsChange("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="companyWebsite">Website</Label>
                    <Input
                      id="companyWebsite"
                      value={companySettings.website}
                      onChange={(e) => handleCompanySettingsChange("website", e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="companyAddress">Address</Label>
                  <Input
                    id="companyAddress"
                    value={companySettings.address}
                    onChange={(e) => handleCompanySettingsChange("address", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="companyDescription">Description</Label>
                  <Textarea
                    id="companyDescription"
                    rows={3}
                    value={companySettings.description}
                    onChange={(e) => handleCompanySettingsChange("description", e.target.value)}
                  />
                </div>
                <Button 
                  onClick={() => handleSaveSettings("Company")} 
                  disabled={loading}
                  className="bg-navy-600 hover:bg-navy-700"
                >
                  <Save className="mr-2 h-4 w-4" />
                  {loading ? "Saving..." : "Save Company Settings"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Admin Profile */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Admin Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={adminProfile.fullName}
                      onChange={(e) => handleAdminProfileChange("fullName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="adminEmail">Email</Label>
                    <Input
                      id="adminEmail"
                      type="email"
                      value={adminProfile.email}
                      onChange={(e) => handleAdminProfileChange("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="adminPhone">Phone</Label>
                    <Input
                      id="adminPhone"
                      value={adminProfile.phone}
                      onChange={(e) => handleAdminProfileChange("phone", e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        value={adminProfile.currentPassword}
                        onChange={(e) => handleAdminProfileChange("currentPassword", e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          value={adminProfile.newPassword}
                          onChange={(e) => handleAdminProfileChange("newPassword", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={adminProfile.confirmPassword}
                          onChange={(e) => handleAdminProfileChange("confirmPassword", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleSaveSettings("Profile")} 
                  disabled={loading}
                  className="bg-navy-600 hover:bg-navy-700"
                >
                  <Save className="mr-2 h-4 w-4" />
                  {loading ? "Saving..." : "Save Profile Settings"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailNotifications">Email Notifications</Label>
                      <p className="text-sm text-gray-600">Receive notifications via email</p>
                    </div>
                    <Switch
                      id="emailNotifications"
                      checked={notifications.emailNotifications}
                      onCheckedChange={(checked) => handleNotificationChange("emailNotifications", checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="smsNotifications">SMS Notifications</Label>
                      <p className="text-sm text-gray-600">Receive notifications via SMS</p>
                    </div>
                    <Switch
                      id="smsNotifications"
                      checked={notifications.smsNotifications}
                      onCheckedChange={(checked) => handleNotificationChange("smsNotifications", checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="newPropertyAlerts">New Property Alerts</Label>
                      <p className="text-sm text-gray-600">Get notified when new properties are added</p>
                    </div>
                    <Switch
                      id="newPropertyAlerts"
                      checked={notifications.newPropertyAlerts}
                      onCheckedChange={(checked) => handleNotificationChange("newPropertyAlerts", checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="inquiryAlerts">Inquiry Alerts</Label>
                      <p className="text-sm text-gray-600">Get notified about property inquiries</p>
                    </div>
                    <Switch
                      id="inquiryAlerts"
                      checked={notifications.inquiryAlerts}
                      onCheckedChange={(checked) => handleNotificationChange("inquiryAlerts", checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="systemUpdates">System Updates</Label>
                      <p className="text-sm text-gray-600">Receive system maintenance and update notifications</p>
                    </div>
                    <Switch
                      id="systemUpdates"
                      checked={notifications.systemUpdates}
                      onCheckedChange={(checked) => handleNotificationChange("systemUpdates", checked)}
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleSaveSettings("Notification")} 
                  disabled={loading}
                  className="bg-navy-600 hover:bg-navy-700"
                >
                  <Save className="mr-2 h-4 w-4" />
                  {loading ? "Saving..." : "Save Notification Settings"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Settings */}
          <TabsContent value="system">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  System Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <Database className="h-4 w-4" />
                  <AlertDescription>
                    These settings affect the entire system. Please be careful when making changes.
                  </AlertDescription>
                </Alert>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                      <p className="text-sm text-gray-600">Enable maintenance mode to restrict access</p>
                    </div>
                    <Switch
                      id="maintenanceMode"
                      checked={systemSettings.maintenanceMode}
                      onCheckedChange={(checked) => handleSystemSettingsChange("maintenanceMode", checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="allowRegistrations">Allow New Registrations</Label>
                      <p className="text-sm text-gray-600">Allow new users to register accounts</p>
                    </div>
                    <Switch
                      id="allowRegistrations"
                      checked={systemSettings.allowRegistrations}
                      onCheckedChange={(checked) => handleSystemSettingsChange("allowRegistrations", checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="requireApproval">Require Admin Approval</Label>
                      <p className="text-sm text-gray-600">New properties require admin approval before publishing</p>
                    </div>
                    <Switch
                      id="requireApproval"
                      checked={systemSettings.requireApproval}
                      onCheckedChange={(checked) => handleSystemSettingsChange("requireApproval", checked)}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="maxFileSize">Max File Size (MB)</Label>
                    <Input
                      id="maxFileSize"
                      type="number"
                      value={systemSettings.maxFileSize}
                      onChange={(e) => handleSystemSettingsChange("maxFileSize", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="backupFrequency">Backup Frequency</Label>
                    <select
                      id="backupFrequency"
                      value={systemSettings.backupFrequency}
                      onChange={(e) => handleSystemSettingsChange("backupFrequency", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleSaveSettings("System")} 
                  disabled={loading}
                  className="bg-navy-600 hover:bg-navy-700"
                >
                  <Save className="mr-2 h-4 w-4" />
                  {loading ? "Saving..." : "Save System Settings"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
