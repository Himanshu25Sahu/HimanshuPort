"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github, BookOpen, Play, Pause } from "lucide-react"

export default function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState({})
  const [zoomed, setZoomed] = useState(false)

  const videoRefs = useRef({})

  const currentMedia = project.images[currentImageIndex]
  const isVideo = currentMedia?.type === "video"

  const togglePlayPause = (index) => {
    const video = videoRefs.current[index]
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying((prev) => ({ ...prev, [index]: true }))
    } else {
      video.pause()
      setIsPlaying((prev) => ({ ...prev, [index]: false }))
    }
  }

  const nextImage = () => {
    if (isVideo) {
      const video = videoRefs.current[currentImageIndex]
      if (video) {
        video.pause()
        setIsPlaying((prev) => ({ ...prev, [currentImageIndex]: false }))
      }
    }
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    if (isVideo) {
      const video = videoRefs.current[currentImageIndex]
      if (video) {
        video.pause()
        setIsPlaying((prev) => ({ ...prev, [currentImageIndex]: false }))
      }
    }
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  const goToMedia = (index) => {
    if (isVideo) {
      const video = videoRefs.current[currentImageIndex]
      if (video) {
        video.pause()
        setIsPlaying((prev) => ({ ...prev, [currentImageIndex]: false }))
      }
    }
    setCurrentImageIndex(index)
  }

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -8,
        rotateX: 2,
        rotateY: 2,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="w-full bg-black border-4 border-cyan-400 rounded-none overflow-hidden cursor-pointer shadow-[8px_8px_0px_0px_rgba(34,211,238,1)] hover:shadow-[12px_12px_0px_0px_rgba(34,211,238,1)] transition-all duration-300"
    >
      {/* Media Carousel */}
<div className="relative h-72 overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 border-b-4 border-cyan-400">


        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isVideo ? (
              <div
                className="relative w-full h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <video
                  ref={(el) => (videoRefs.current[currentImageIndex] = el)}
                  src={currentMedia.url}
                  className="w-full h-full object-cover"
                  loop
                  playsInline
                />

                {/* Play/Pause Button - visible only when paused OR hovered */}
                <AnimatePresence>
                  {(!isPlaying[currentImageIndex] || isHovered) && (
                    <motion.button
                      key="control-button"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        togglePlayPause(currentImageIndex)
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 border-4 border-black text-black p-4 rounded-full transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:scale-110 z-10"
                    >
                      {isPlaying[currentImageIndex] ? (
                        <Pause size={32} fill="currentColor" />
                      ) : (
                        <Play size={32} fill="currentColor" />
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <img
                src={currentMedia?.url || currentMedia || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 border-4 border-black text-black p-3 rounded-none transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black hover:bg-yellow-300 z-20"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 border-4 border-black text-black p-3 rounded-none transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black hover:bg-yellow-300 z-20"
            >
              <ChevronRight size={24} />
            </button>

            {/* Media Indicators */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {project.images.map((media, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    goToMedia(index)
                  }}
                  className={`w-3 h-3 rounded-full border-2 border-black transition-all ${
                    index === currentImageIndex
                      ? "bg-cyan-400 scale-110"
                      : "bg-white hover:bg-yellow-300"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap bg-white p-4 justify-center border-b-4 border-black">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[150px] bg-cyan-400 hover:bg-cyan-300 border-4 border-black text-black font-black py-3 px-5 rounded-none text-sm uppercase flex items-center justify-center gap-2 transition-all shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[150px] bg-yellow-400 hover:bg-yellow-300 border-4 border-black text-black font-black py-3 px-5 rounded-none text-sm uppercase flex items-center justify-center gap-2 transition-all shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
          >
            <Github size={18} />
            Source Code
          </a>
        )}

        <a
          href={`/blogs/${project.slug}`}
          onClick={(e) => e.stopPropagation()}
          className="min-w-[150px] bg-pink-500 hover:bg-pink-400 border-4 border-black text-white font-black py-3 px-5 rounded-none text-sm uppercase flex items-center justify-center gap-2 transition-all shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
        >
          <BookOpen size={18} />
          Case Study
        </a>
      </div>

      {/* Content Section */}
      <div className="p-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-14 h-14 bg-cyan-400 transform rotate-45 translate-x-6 -translate-y-6"></div>
        <div className="absolute bottom-0 left-0 w-10 h-10 bg-pink-500"></div>
        <div className="absolute top-1/2 right-0 w-6 h-6 bg-yellow-400 transform translate-x-3"></div>

        <div className="mb-5 relative z-10">
          <h3 className="text-2xl font-black text-black mb-3 uppercase tracking-tight transform -rotate-1 inline-block bg-yellow-400 px-3 py-1 border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            {project.title}
          </h3>
          <p className="text-black text-sm leading-relaxed font-bold mt-3">
            {project.description}
          </p>
        </div>

        {project.features && (
          <div className="mb-5 bg-cyan-100 border-4 border-black p-3 transform rotate-1 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] relative z-10">
            <h4 className="text-black font-black text-sm mb-2 uppercase">Key Features</h4>
            <ul className="text-black text-xs space-y-1 font-semibold">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-pink-500 mt-1 flex-shrink-0 text-lg">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-4 relative z-10">
          <h4 className="text-black font-black text-sm mb-2 uppercase">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-br from-pink-400 to-purple-500 border-4 border-black text-white font-black text-xs uppercase rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
