"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-10 bg-gradient-to-b from-gray-900 via-black to-gray-900 border-t-4 border-cyan-400 relative overflow-hidden"
    >
      {/* Decorative Brutalist Elements */}
      <div className="absolute top-20 left-16 w-28 h-28 bg-yellow-400 opacity-10 rotate-12"></div>
      <div className="absolute bottom-24 right-12 w-32 h-32 bg-pink-500 opacity-10 -rotate-6"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-400 opacity-10 rotate-45"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tight">
          <span className="bg-cyan-400 text-black px-4 py-2 border-4 border-white inline-block transform -rotate-2 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
            Get In Touch
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-16 font-bold max-w-xl mx-auto">
          Have an idea, project, or opportunity? Let’s connect and make something awesome together.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap">
          <motion.a
            href="mailto:himpreetak@gmail.com"
            whileHover={{
              scale: 1.05,
              rotate: -2,
              x: -2,
              y: -2,
            }}
            className="flex items-center gap-3 px-10 py-5 bg-yellow-400 border-4 border-black text-black font-black text-lg uppercase rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <Mail size={24} />
            Email Me
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/himanshu-sahu-303b2b25a/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              rotate: 2,
              x: 2,
              y: -2,
            }}
            className="flex items-center gap-3 px-10 py-5 bg-pink-500 border-4 border-black text-white font-black text-lg uppercase rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <Linkedin size={24} />
            LinkedIn
          </motion.a>
        </div>

        {/* Footer Note */}

      </motion.div>
    </section>
  )
}
