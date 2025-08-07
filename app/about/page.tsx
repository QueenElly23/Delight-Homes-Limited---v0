import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Home, Target, CheckCircle, MapPin } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { label: "Properties Sold", value: "500+", icon: Home },
    { label: "Happy Clients", value: "1000+", icon: Users },
    { label: "Years Experience", value: "15+", icon: Award },
    { label: "Locations Covered", value: "25+", icon: MapPin },
  ]

  const values = [
    {
      title: "Integrity",
      description: "We conduct our business with the highest level of honesty and transparency.",
      icon: CheckCircle,
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery.",
      icon: Award,
    },
    {
      title: "Customer Focus",
      description: "Our clients' needs and satisfaction are at the center of everything we do.",
      icon: Users,
    },
    {
      title: "Innovation",
      description: "We embrace modern technology and innovative solutions in real estate.",
      icon: Target,
    },
  ]

  const team = [
    {
      name: "Sarah Nakamya",
      position: "Chief Executive Officer",
      image: "/placeholder.svg?height=300&width=300",
      description: "With over 15 years in real estate, Sarah leads our vision of transforming Uganda's property market.",
    },
    {
      name: "David Mukasa",
      position: "Head of Sales",
      image: "/placeholder.svg?height=300&width=300",
      description: "David brings 12 years of sales expertise, helping clients find their perfect homes.",
    },
    {
      name: "Grace Namuli",
      position: "Property Manager",
      image: "/placeholder.svg?height=300&width=300",
      description: "Grace oversees our property portfolio with meticulous attention to detail and client care.",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy-900 to-navy-700 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About DELIGHT HOMES</h1>
          <p className="text-xl text-navy-100 mb-8 max-w-3xl mx-auto">
            Your trusted partner in Uganda's real estate market. We've been helping families find their dream homes and
            investors discover profitable opportunities for over 15 years.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-navy-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-navy-600" />
                </div>
                <h3 className="text-3xl font-bold text-navy-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2008, DELIGHT HOMES LIMITED began as a small family business with a simple mission: to help
                  Ugandans find quality, affordable homes. What started as a local operation in Kampala has grown into
                  one of Uganda's most trusted real estate companies.
                </p>
                <p>
                  Over the years, we've expanded our services to cover residential sales, property management, and real
                  estate consultation across major cities and towns in Uganda. Our commitment to excellence and customer
                  satisfaction has earned us the trust of thousands of families and investors.
                </p>
                <p>
                  Today, we continue to innovate and adapt to the changing needs of the Ugandan real estate market,
                  leveraging technology to provide better services while maintaining the personal touch that has defined
                  us from the beginning.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="DELIGHT HOMES Office"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-navy-200">
              <CardContent className="p-8">
                <div className="bg-navy-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                  <Target className="h-6 w-6 text-navy-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To provide exceptional real estate services that exceed our clients' expectations while contributing to
                  the development of Uganda's property sector through innovation, integrity, and professional excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-navy-200">
              <CardContent className="p-8">
                <div className="bg-navy-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                  <Award className="h-6 w-6 text-navy-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be Uganda's leading real estate company, recognized for transforming lives through quality housing
                  solutions and setting the standard for excellence in property services across East Africa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our relationships with clients, partners, and the
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-navy-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-navy-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-navy-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced team of real estate professionals is dedicated to helping you achieve your property goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-navy-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">{member.name}</h3>
                  <p className="text-navy-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-navy-100 mb-8">
            Let our experienced team help you navigate Uganda's real estate market with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/properties"
              className="bg-white text-navy-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Browse Properties
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-navy-900 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
