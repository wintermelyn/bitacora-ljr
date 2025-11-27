import { Navbar } from '@/components/ui/navbar'
import { HeroSection } from '@/components/home/HeroSection'
import { GallerySection } from '@/components/home/GallerySection'
import { GamesSection } from '@/components/home/GamesSection'
import { SemesterSection } from '@/components/home/SemesterSection'
import { AboutSection } from '@/components/home/AboutSection'
import { CTASection } from '@/components/home/CTASection'
import { Footer } from '@/components/home/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <GamesSection />
      <SemesterSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  )
}
