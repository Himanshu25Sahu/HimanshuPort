"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function ComputerSetup() {
  const [hoveredSection, setHoveredSection] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // Floating particles effect
  const FloatingParticles = ({ color }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 ${color} rounded-none`}
          style={{ 
            left: `${Math.random() * 100}%`, 
            top: `${Math.random() * 100}%` 
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )

  return (
    <section className="min-h-screen bg-black p-4 md:p-8 flex items-center justify-center relative overflow-hidden" id="tech" >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 opacity-5 transform -translate-x-32 -translate-y-32 rotate-45"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 opacity-5 transform translate-x-48 translate-y-48"></div>

      <motion.div className="w-full max-w-7xl relative z-10" variants={containerVariants} initial="hidden" animate="visible">
        
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter inline-block relative"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10">TECH</span>{" "}
            <span className="bg-cyan-400 text-black px-6 py-2 inline-block transform rotate-2 border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)]">
              STACK
            </span>
          </motion.h1>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-16 bg-cyan-400"></div>
            <p className="text-yellow-400 font-black text-lg uppercase tracking-wider">Software Development</p>
            <div className="h-1 w-16 bg-pink-500"></div>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Frontend Section */}
          <motion.div 
            variants={itemVariants}
            className="group"
            onHoverStart={() => setHoveredSection("frontend")}
            onHoverEnd={() => setHoveredSection(null)}
          >
            <motion.div
              className="bg-white border-4 border-cyan-400 rounded-none p-8 h-full relative overflow-hidden"
              whileHover={{ 
                y: -8,
                boxShadow: "12px 12px 0px 0px rgba(34, 211, 238, 1)"
              }}
              style={{
                boxShadow: "8px 8px 0px 0px rgba(34, 211, 238, 1)"
              }}
            >
              {hoveredSection === "frontend" && <FloatingParticles color="bg-cyan-400" />}
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 transform translate-x-10 -translate-y-10 rotate-45"></div>
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-6 h-6 bg-cyan-400 border-4 border-black"></div>
                <h2 className="text-3xl font-black text-black tracking-tight uppercase">Frontend</h2>
              </div>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  { name: "React", level: "Advanced" },
                  { name: "Next.js", level: "Advanced" },
                  { name: "TypeScript", level: "Intermediate" },
                  { name: "Tailwind CSS", level: "Advanced" },
                  { name: "JavaScript", level: "Advanced" },
                  { name: "Framer Motion", level: "Intermediate" }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-cyan-100 border-4 border-black p-4 hover:bg-cyan-200 transition-colors relative"
                    whileHover={{ 
                      scale: 1.05,
                      x: -2,
                      y: -2,
                      boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)"
                    }}
                  >
                    <div className="font-black text-black text-base mb-1 uppercase">{skill.name}</div>
                    <div className="text-black/60 text-xs font-bold">{skill.level}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Backend Section */}
          <motion.div 
            variants={itemVariants}
            className="group"
            onHoverStart={() => setHoveredSection("backend")}
            onHoverEnd={() => setHoveredSection(null)}
          >
            <motion.div
              className="bg-white border-4 border-pink-500 rounded-none p-8 h-full relative overflow-hidden"
              whileHover={{ 
                y: -8,
                boxShadow: "12px 12px 0px 0px rgba(236, 72, 153, 1)"
              }}
              style={{
                boxShadow: "8px 8px 0px 0px rgba(236, 72, 153, 1)"
              }}
            >
              {hoveredSection === "backend" && <FloatingParticles color="bg-pink-500" />}
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-400"></div>
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-6 h-6 bg-pink-500 border-4 border-black"></div>
                <h2 className="text-3xl font-black text-black tracking-tight uppercase">Backend</h2>
              </div>

              <div className="space-y-6 relative z-10">
                <div>
                  <h3 className="text-black font-black text-sm mb-4 uppercase tracking-wider bg-yellow-400 inline-block px-3 py-1 border-2 border-black">Frameworks</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Node.js", "Express.js", "REST APIs", "Redis"].map((tech) => (
                      <motion.div
                        key={tech}
                        className="bg-pink-100 border-4 border-black p-3 text-center hover:bg-pink-200 transition-colors"
                        whileHover={{ 
                          scale: 1.03,
                          x: -2,
                          y: -2,
                          boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)"
                        }}
                      >
                        <div className="font-black text-black text-sm uppercase">{tech}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-black font-black text-sm mb-4 uppercase tracking-wider bg-yellow-400 inline-block px-3 py-1 border-2 border-black">Databases</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["MongoDB", "Redis", "MySQL"].map((db) => (
                      <motion.div
                        key={db}
                        className="bg-pink-100 border-4 border-black p-3 text-center hover:bg-pink-200 transition-colors"
                        whileHover={{ 
                          scale: 1.03,
                          x: -2,
                          y: -2,
                          boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)"
                        }}
                      >
                        <div className="font-black text-black text-sm uppercase">{db}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Tools & DevOps */}
          <motion.div 
            variants={itemVariants}
            className="group"
            onHoverStart={() => setHoveredSection("tools")}
            onHoverEnd={() => setHoveredSection(null)}
          >
            <motion.div
              className="bg-white border-4 border-green-500 rounded-none p-8 h-full relative overflow-hidden"
              whileHover={{ 
                y: -8,
                boxShadow: "12px 12px 0px 0px rgba(34, 197, 94, 1)"
              }}
              style={{
                boxShadow: "8px 8px 0px 0px rgba(34, 197, 94, 1)"
              }}
            >
              {hoveredSection === "tools" && <FloatingParticles color="bg-green-500" />}
              
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-pink-500 transform -translate-x-6 -translate-y-6 rotate-45"></div>
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-6 h-6 bg-green-500 border-4 border-black"></div>
                <h2 className="text-3xl font-black text-black tracking-tight uppercase">Tools</h2>
              </div>

              <div className="space-y-6 relative z-10">
                <div>
                  <h3 className="text-black font-black text-sm mb-4 uppercase tracking-wider bg-yellow-400 inline-block px-3 py-1 border-2 border-black">Development</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Git", "Docker", "VS Code", "Linux"].map((tool) => (
                      <motion.div
                        key={tool}
                        className="bg-green-100 border-4 border-black p-3 text-center hover:bg-green-200 transition-colors"
                        whileHover={{ 
                          scale: 1.03,
                          x: -2,
                          y: -2,
                          boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)"
                        }}
                      >
                        <div className="font-black text-black text-sm uppercase">{tool}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-black font-black text-sm mb-4 uppercase tracking-wider bg-yellow-400 inline-block px-3 py-1 border-2 border-black">Cloud & CI/CD</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["AWS", "CI/CD", "Ansible","Nginx"].map((item) => (
                      <motion.div
                        key={item}
                        className="bg-green-100 border-4 border-black p-3 text-center hover:bg-green-200 transition-colors"
                        whileHover={{ 
                          scale: 1.03,
                          x: -2,
                          y: -2,
                          boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)"
                        }}
                      >
                        <div className="font-black text-black text-sm uppercase">{item}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Skills */}
          <motion.div 
            variants={itemVariants}
            className="group"
            onHoverStart={() => setHoveredSection("cloud")}
            onHoverEnd={() => setHoveredSection(null)}
          >
            <motion.div
              className="bg-white border-4 border-purple-500 rounded-none p-8 h-full relative overflow-hidden"
              whileHover={{ 
                y: -8,
                boxShadow: "12px 12px 0px 0px rgba(168, 85, 247, 1)"
              }}
              style={{
                boxShadow: "8px 8px 0px 0px rgba(168, 85, 247, 1)"
              }}
            >
              {hoveredSection === "cloud" && <FloatingParticles color="bg-purple-500" />}
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-400 transform translate-x-12 translate-y-12"></div>
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-6 h-6 bg-purple-500 border-4 border-black"></div>
                <h2 className="text-3xl font-black text-black tracking-tight uppercase">Core Skills</h2>
              </div>

              <div className="space-y-6 relative z-10">
                <div>
                  <h3 className="text-black font-black text-sm mb-4 uppercase tracking-wider bg-yellow-400 inline-block px-3 py-1 border-2 border-black">Programming</h3>
                  <div className="flex flex-wrap gap-3">
                    {["C++", "Python", "Java", "Shell Script"].map((lang) => (
                      <motion.div
                        key={lang}
                        className="bg-purple-100 border-4 border-black px-4 py-3 hover:bg-purple-200 transition-colors"
                        whileHover={{ 
                          scale: 1.05,
                          x: -2,
                          y: -2,
                          boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)"
                        }}
                      >
                        <div className="font-black text-black text-sm uppercase">{lang}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-black font-black text-sm mb-4 uppercase tracking-wider bg-yellow-400 inline-block px-3 py-1 border-2 border-black">Concepts</h3>
                  <div className="flex flex-wrap gap-3">
                    {["System Design", "Algorithms", "DSA", "OOP"].map((concept) => (
                      <motion.div
                        key={concept}
                        className="bg-purple-100 border-4 border-black px-4 py-3 hover:bg-purple-200 transition-colors"
                        whileHover={{ 
                          scale: 1.05,
                          x: -2,
                          y: -2,
                          boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)"
                        }}
                      >
                        <div className="font-black text-black text-sm uppercase">{concept}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Bottom decoration */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 flex justify-center gap-4"
        >
          <div className="w-16 h-2 bg-cyan-400"></div>
          <div className="w-16 h-2 bg-pink-500"></div>
          <div className="w-16 h-2 bg-yellow-400"></div>
          <div className="w-16 h-2 bg-green-500"></div>
          <div className="w-16 h-2 bg-purple-500"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}