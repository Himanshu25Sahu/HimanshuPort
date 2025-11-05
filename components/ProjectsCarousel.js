"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { projects } from "@/data/projects"

export default function ProjectsCarousel() {
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Full Stack", "Systems Programming", "DevOps"]
  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400 opacity-10 rotate-45"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-pink-500 opacity-10 rotate-12"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400 opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header - Neo-Brutal Style */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight inline-block"
          >
            Featured{" "}
            <span className="bg-cyan-400 text-black px-4 py-2 border-4 border-white inline-block transform -rotate-2 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
              Projects
            </span>
          </motion.h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-bold mt-6">
            Recent projects showcasing skills and passion for development
          </p>
        </div>

        {/* Filters - Neo-Brutal Style */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ 
                scale: 1.05,
                x: -2,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-none font-black text-base border-4 transition-all uppercase ${
                filter === category
                  ? "bg-yellow-400 border-black text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                  : "bg-white border-black text-black hover:bg-cyan-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid - 2 per row */}
        <motion.div 
          layout
          className="grid grid-cols-1 xl:grid-cols-2 gap-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State - Neo-Brutal Style */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="inline-block bg-pink-500 border-4 border-black px-8 py-6 transform rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-white text-xl font-black uppercase">
                No projects found in {filter}
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}