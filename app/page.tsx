import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Stats from "@/components/stats"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Projects />
      <Footer />
    </main>
  )
}
