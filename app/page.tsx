import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProperties } from "@/components/featured-properties"
import { Footer } from "@/components/footer"
import { DatabaseStatus } from "@/components/database-status"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <DatabaseStatus />
      <HeroSection />
      <FeaturedProperties />
      <Footer />
    </div>
  )
}
