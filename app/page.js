"use client"

import Hero from "@/components/Hero"
import ProjectsCarousel from "@/components/ProjectsCarousel"
import SkillsMonolith from "@/components/SkillsMonolith"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar/>
      <Hero />
      <ProjectsCarousel />
      <SkillsMonolith />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
