import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+256 701 234 567", "+256 702 345 678"],
      description: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@delighthomes.com", "sales@delighthomes.com"],
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Plot 123, Kampala Road", "Kampala, Uganda"],
      description: "Visit our main office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      description: "We're here to help"
    }
  ]

  const offices = [
    {
      name: "Main Office - Kampala",
      address: "Plot 123, Kampala Road, Kampala",
      phone: "+256 701 234 567",
      email: "kampala@delighthomes.com",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM"
    },
    {
      name: "Branch Office - Entebbe",
      address: "Plot 45, Entebbe Road, Entebbe",
      phone: "+256 702 345 678",
      email: "entebbe@delighthomes.com",
      hours: "Mon-Fri: 9AM-5PM, Sat: 10AM-3PM"
    },
    {
      name: "Branch Office - Jinja",
      address: "Plot 67, Main Street, Jinja",
      phone: "+256 703 456 789",
      email: "jinja@delighthomes.com",
      hours: "Mon-Fri: 9AM-5PM"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy-900 to-navy-700 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-navy-100 mb-8 max-w-3xl mx-auto">
            Ready to find your dream home? Get in touch with our expert team today. We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-navy-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-navy-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <info.icon className="h-8 w-8 text-navy-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium mb-1">{detail}</p>
                  ))}
                  <p className="text-gray-600 text-sm mt-2">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-navy-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-navy-900">
                  <MessageSquare className="h-5 w-5" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+256 701 234 567" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="buying">Buying Property</SelectItem>
                        <SelectItem value="selling">Selling Property</SelectItem>
                        <SelectItem value="renting">Property Rental</SelectItem>
                        <SelectItem value="valuation">Property Valuation</SelectItem>
                        <SelectItem value="investment">Investment Opportunities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budget">Budget Range (Optional)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50m">Under UGX 50M</SelectItem>
                        <SelectItem value="50m-100m">UGX 50M - 100M</SelectItem>
                        <SelectItem value="100m-200m">UGX 100M - 200M</SelectItem>
                        <SelectItem value="200m-500m">UGX 200M - 500M</SelectItem>
                        <SelectItem value="above-500m">Above UGX 500M</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your property needs..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-navy-600 hover:bg-navy-700">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Office Locations */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="border-navy-200">
                <CardHeader>
                  <CardTitle className="text-navy-900">Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Google Maps integration would go here</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Our main office is conveniently located in the heart of Kampala, easily accessible by public transport and with ample parking available.
                  </p>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card className="border-navy-200">
                <CardHeader>
                  <CardTitle className="text-navy-900">Our Offices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                        <h4 className="font-semibold text-navy-900 mb-2">{office.name}</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {office.address}
                          </p>
                          <p className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            {office.phone}
                          </p>
                          <p className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            {office.email}
                          </p>
                          <p className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {office.hours}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">How do I schedule a property viewing?</h3>
                <p className="text-gray-600">You can schedule a viewing by calling us, sending an email, or using our online contact form. We'll arrange a convenient time for you.</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Do you offer property management services?</h3>
                <p className="text-gray-600">Yes, we provide comprehensive property management services including tenant screening, rent collection, and maintenance coordination.</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">What areas do you cover?</h3>
                <p className="text-gray-600">We primarily serve Kampala and surrounding areas, with branch offices in Entebbe and Jinja. We also handle properties in other major Ugandan cities.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">How do you determine property values?</h3>
                <p className="text-gray-600">Our experienced team conducts thorough market analysis considering location, property condition, recent sales, and current market trends.</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Do you assist with property financing?</h3>
                <p className="text-gray-600">While we don't provide financing directly, we work with trusted financial partners and can connect you with mortgage specialists.</p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">What documents do I need to buy a property?</h3>
                <p className="text-gray-600">Typically you'll need identification, proof of income, bank statements, and pre-approval letter. We'll guide you through the complete process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-navy-100 mb-8">
            Don't wait any longer. Contact us today and let's find your perfect property together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
