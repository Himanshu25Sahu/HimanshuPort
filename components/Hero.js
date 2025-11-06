"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 500])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Letter reveal animation
  const firstName = "HIMANSHU".split("")
  const lastName = "SAHU".split("")
  const colors = ['#22d3ee', '#ec4899', '#facc15', '#22c55e', '#a855f7', '#f97316', '#06b6d4', '#8b5cf6']
  
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  // Geometric shapes floating animation
  const shapes = [
    { size: "w-20 h-20", color: "bg-cyan-400", delay: 0.2, x: "10%", y: "20%" },
    { size: "w-16 h-16", color: "bg-pink-500", delay: 0.4, x: "85%", y: "15%" },
    { size: "w-24 h-24", color: "bg-yellow-400", delay: 0.6, x: "15%", y: "75%" },
    { size: "w-12 h-12", color: "bg-purple-500", delay: 0.8, x: "80%", y: "70%" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black border-b-8 border-cyan-400 pt-25 md:pt-0">
      
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(250, 204, 21, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.3) 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Floating Geometric Shapes */}
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.size} ${shape.color} border-4 border-black opacity-15`}
          style={{ left: shape.x, top: shape.y }}
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
            y: [0, -30, 0]
          }}
          transition={{
            delay: shape.delay,
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-4 md:px-8"
        style={{ y }}
      >
        {/* Animated Name with Letter Reveal - HIMANSHU */}
        <div className="mb-4 overflow-hidden">
          <div className="flex justify-center items-center gap-1 md:gap-2 flex-wrap">
            {firstName.map((letter, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ perspective: "1000px" }}
              >
                <motion.h1 
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter border-4 border-black px-2 md:px-4 py-1 md:py-2 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  style={{
                    backgroundColor: colors[i],
                    color: i === 2 || i === 6 ? '#000' : '#fff'
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    boxShadow: "8px 8px 0px 0px rgba(0, 0, 0, 1)",
                    y: -10
                  }}
                >
                  {letter}
                </motion.h1>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Last Name - SAHU (Stylized/Italic) */}
        <div className="mb-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center gap-1 md:gap-2"
          >
            {lastName.map((letter, i) => (
              <motion.h2
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic tracking-wide border-4 border-white px-2 md:px-3 py-1 bg-gradient-to-br from-purple-600 to-pink-500 text-white inline-block shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] transform -skew-x-12"
                whileHover={{ 
                  scale: 1.1,
                  skewX: -6,
                  y: -10,
                  boxShadow: "6px 6px 0px 0px rgba(255, 255, 255, 0.8)"
                }}
              >
                {letter}
              </motion.h2>
            ))}
          </motion.div>
        </div>

        {/* Title Box with Glitch Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="mb-12"
        >
          <motion.div
            className="inline-block bg-yellow-400 border-4 border-black px-6 md:px-8 py-3 md:py-4 transform -rotate-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            whileHover={{ 
              rotate: 2,
              scale: 1.05,
              boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)"
            }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-black font-black uppercase tracking-wide">
              Software Development Engineer
            </p>
          </motion.div>
        </motion.div>

        {/* Tag Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto"
        >
          {["System Design", "DSA", "React", "Node.js", "Next.js"].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.7 + i * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                y: -5,
                boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)"
              }}
              className="px-4 py-2 bg-gradient-to-br from-cyan-400 to-blue-500 border-4 border-black text-white font-black text-sm uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="#projects">
            <motion.button
              whileHover={{ 
                x: -4,
                y: -4,
                boxShadow: "8px 8px 0px 0px rgba(34, 211, 238, 1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-cyan-400 border-4 border-black text-black font-black text-lg uppercase shadow-[4px_4px_0px_0px_rgba(34,211,238,1)] hover:bg-cyan-300 transition-colors min-w-[200px]"
            >
              View Projects →
            </motion.button>
          </Link>

          <Link href="#contact">
            <motion.button
              whileHover={{ 
                x: -4,
                y: -4,
                boxShadow: "8px 8px 0px 0px rgba(236, 72, 153, 1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-pink-500 border-4 border-black text-white font-black text-lg uppercase shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] hover:bg-pink-400 transition-colors min-w-[200px]"
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-1 h-12 bg-cyan-400 border-2 border-black"></div>
            <div className="w-4 h-4 bg-yellow-400 border-2 border-black"></div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Corner Decorations */}
      <motion.div
        initial={{ x: -100, y: -100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-0 left-0 w-32 h-32 border-l-8 border-t-8 border-cyan-400"
      ></motion.div>
      
      <motion.div
        initial={{ x: 100, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-0 right-0 w-32 h-32 border-r-8 border-b-8 border-pink-500"
      ></motion.div>

      {/* Floating Accent Shapes */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="absolute top-20 right-20 w-16 h-16 bg-yellow-400 border-4 border-black rotate-45 opacity-20"
      ></motion.div>
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.7, type: "spring" }}
        className="absolute bottom-32 left-24 w-20 h-20 bg-purple-500 border-4 border-black rounded-full opacity-20"
      ></motion.div>
    </section>
  )
}