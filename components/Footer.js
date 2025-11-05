"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black border-t-4 border-cyan-400 py-12 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gray-400 font-mono text-sm">
            Crafted by Himanshu ✦
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            animate={{ opacity: showScroll ? 1 : 0, pointerEvents: showScroll ? "auto" : "none" }}
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 border-3 border-cyan-400 flex items-center justify-center hover:bg-cyan-400/20 transition-all"
          >
            ↑
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
