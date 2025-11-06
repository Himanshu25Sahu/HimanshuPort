"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Target, Zap, AlertCircle, TrendingUp, Lightbulb, Users, Code2, ChevronLeft, ChevronRight } from "lucide-react"
import { projects } from "@/data/projects"

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!images || images.length === 0) return null

  const currentItem = images[currentIndex]
  const isVideo = typeof currentItem === 'object' && currentItem.type === 'video'

  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
      className="mt-12"
    >
      <h2 className="text-2xl md:text-3xl font-black mb-6 text-black uppercase inline-block bg-cyan-400 px-6 py-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        Project Gallery ({images.length} Items)
      </h2>
      
      <div className="relative mt-8">
        {/* Main Media Display */}
        <div className="relative border-4 border-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,255,255,0.5)] bg-black aspect-video">
          <AnimatePresence mode="wait">
            {isVideo ? (
              <motion.video
                key={currentIndex}
                src={currentItem.url}
                controls
                autoPlay
                loop
                muted
                className="w-full h-full object-contain"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.img
                key={currentIndex}
                src={typeof currentItem === 'string' ? currentItem : currentItem.url}
                alt={`Screenshot ${currentIndex + 1}`}
                className="w-full h-full object-contain"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <motion.button
                whileHover={{ x: -4, boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-cyan-400 border-4 border-black w-12 h-12 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-cyan-300 transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-black" strokeWidth={3} />
              </motion.button>

              <motion.button
                whileHover={{ x: 4, boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-cyan-400 border-4 border-black w-12 h-12 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-cyan-300 transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-black" strokeWidth={3} />
              </motion.button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black border-4 border-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
            <span className="text-white font-black text-sm">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
            {images.map((item, i) => {
              const isThumbVideo = typeof item === 'object' && item.type === 'video'
              const thumbSrc = isThumbVideo ? null : (typeof item === 'string' ? item : item.url)
              
              return (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex-shrink-0 w-20 h-20 border-4 overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all ${
                    i === currentIndex
                      ? "border-cyan-400 scale-110"
                      : "border-white opacity-60 hover:opacity-100"
                  }`}
                >
                  {isThumbVideo ? (
                    <div className="w-full h-full bg-purple-500 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                      </svg>
                    </div>
                  ) : (
                    <img
                      src={thumbSrc}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        )}
      </div>
    </motion.section>
  )
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-block bg-pink-500 border-4 border-white px-8 py-6 transform -rotate-2 shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3)] mb-8">
            <h1 className="text-4xl font-black uppercase">Project Not Found</h1>
          </div>
          <Link href="/">
            <motion.div
              whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px 0px rgba(34, 211, 238, 1)" }}
              className="inline-block bg-cyan-400 border-4 border-white text-black font-black px-8 py-4 uppercase cursor-pointer shadow-[4px_4px_0px_0px_rgba(34,211,238,1)]"
            >
              ← Back to Portfolio
            </motion.div>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <motion.article 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 opacity-5 transform -translate-x-48 -translate-y-48 rotate-45"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 opacity-5 transform translate-x-48 translate-y-48"></div>

      {/* Hero Header */}
      <div className="relative border-b-8 border-cyan-400">
        <div className="relative h-[50vh] overflow-hidden">
          <img 
            src={project.images?.[0] || project.image || "/placeholder.svg"} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-yellow-400 border-4 border-black px-6 py-3 transform -rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-4"
              >
                <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight">
                  {project.title}
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block bg-white border-4 border-cyan-400 px-4 py-2 font-black text-black uppercase text-sm"
              >
                Case Study
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 space-y-12 relative z-10">
        
        {/* Problem Statement */}
        {project.problem && (
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white border-4 border-pink-500 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(236,72,153,1)] relative">
              <div className="absolute -top-6 -left-6 bg-pink-500 border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-black uppercase pt-4">The Problem</h2>
              <p className="text-black text-base md:text-lg leading-relaxed font-semibold">{project.problem}</p>
            </div>
          </motion.section>
        )}

        {/* Solution */}
        {project.solution && (
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white border-4 border-green-500 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] relative transform rotate-1">
              <div className="absolute -top-6 -right-6 bg-green-500 border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-12">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-black uppercase">My Solution</h2>
              <p className="text-black text-base md:text-lg leading-relaxed font-semibold">{project.solution}</p>
            </div>
          </motion.section>
        )}

        {/* Development Process / How I Built It */}
        {project.buildProcess && (
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white border-4 border-purple-500 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(168,85,247,1)] relative">
              <div className="absolute -top-6 -left-6 bg-purple-500 border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-black mb-6 text-black uppercase pt-4">Development Process</h2>
              <div className="space-y-4">
                {project.buildProcess.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="bg-purple-500 border-4 border-black text-white font-black px-4 py-2 text-lg min-w-[3rem] text-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-black font-bold text-base md:text-lg flex-1 pt-2">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Technical Challenges */}
        {project.challenges && (
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white border-4 border-orange-500 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] relative transform -rotate-1">
              <div className="absolute -top-6 -right-6 bg-orange-500 border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-12">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-black mb-6 text-black uppercase">Technical Challenges</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-orange-100 border-4 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-orange-500 font-black text-xl flex-shrink-0">⚡</span>
                      <div className="flex-1">
                        <h3 className="font-black text-black mb-2">{challenge.title}</h3>
                        <p className="text-black font-semibold text-sm">{challenge.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Key Learnings */}
        {project.learnings && (
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-white border-4 border-cyan-400 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(34,211,238,1)] relative">
              <div className="absolute -top-6 -left-6 bg-cyan-400 border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-black mb-6 text-black uppercase pt-4">Key Learnings</h2>
              
              {Array.isArray(project.learnings) ? (
                <div className="space-y-3">
                  {project.learnings.map((learning, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-cyan-400 font-black text-2xl flex-shrink-0">▸</span>
                      <p className="text-black font-bold text-base md:text-lg flex-1">{learning}</p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-black text-base md:text-lg leading-relaxed font-semibold">{project.learnings}</p>
              )}
            </div>
          </motion.section>
        )}

        {/* Impact / Results */}
        {project.impact && (
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-white border-4 border-yellow-400 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(250,204,21,1)] relative transform rotate-1">
              <div className="absolute -top-6 -right-6 bg-yellow-400 border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-12">
                <Zap className="w-8 h-8 text-black" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-black uppercase">Impact & Results</h2>
              
              {Array.isArray(project.impact) ? (
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {project.impact.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: -2, y: -2, boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)" }}
                      className="bg-yellow-100 border-4 border-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <div className="text-3xl font-black text-yellow-600 mb-1">{item.metric}</div>
                      <div className="text-black font-bold text-sm">{item.description}</div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-black text-base md:text-lg leading-relaxed font-semibold">{project.impact}</p>
              )}
            </div>
          </motion.section>
        )}

        {/* Team & Role (if applicable) */}
        {project.role && (
          <motion.section
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <div className="bg-white border-4 border-blue-500 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] relative">
              <div className="absolute -top-6 -left-6 bg-blue-500 border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Users className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-black mb-4 text-black uppercase pt-4">My Role</h2>
              <p className="text-black text-base md:text-lg leading-relaxed font-semibold">{project.role}</p>
              
              {project.teamSize && (
                <div className="mt-4 inline-block bg-blue-100 border-4 border-black px-4 py-2">
                  <span className="text-black font-black">Team Size: {project.teamSize}</span>
                </div>
              )}
            </div>
          </motion.section>
        )}

        {/* Image Gallery with Carousel */}
        {project.images && project.images.length > 1 && (
          <ImageCarousel images={project.images.slice(0)} />
        )}
 
        {/* Back Button */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="pt-8"
        >
          <Link href="/#">
            <motion.div
              whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px 0px rgba(34, 211, 238, 1)" }}
              className="inline-flex items-center gap-3 bg-cyan-400 border-4 border-white text-black font-black px-8 py-4 uppercase text-lg cursor-pointer shadow-[4px_4px_0px_0px_rgba(34,211,238,1)]"
            >
              <ArrowLeft size={24} />
              Back to Projects
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Bottom decoration */}
      <div className="border-t-8 border-cyan-400 mt-16">
        <div className="bg-white py-4">
          <div className="max-w-6xl mx-auto px-8 flex justify-center gap-4">
            <div className="w-12 h-2 bg-cyan-400"></div>
            <div className="w-12 h-2 bg-pink-500"></div>
            <div className="w-12 h-2 bg-yellow-400"></div>
            <div className="w-12 h-2 bg-green-500"></div>
            <div className="w-12 h-2 bg-purple-500"></div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}