"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, Code2, Mail, Github, Linkedin, MessageSquare } from "lucide-react"

export default function NeoBrutalVerticalNav() {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const navItems = [
    { icon: Home, name: "Home", href: "#", color: "bg-cyan-400" },
    { icon: User, name: "About", href: "#about", color: "bg-yellow-400" },
    { icon: Briefcase, name: "Projects", href: "#projects", color: "bg-pink-500" },
    { icon: Code2, name: "Skills", href: "#tech", color: "bg-purple-500" },
    { icon: Mail, name: "Contact", href: "#contact", color: "bg-green-500" },
  ]

  const socialItems = [
    { icon: Github, name: "GitHub", href: "https://github.com/Himanshu25Sahu/", color: "bg-gray-700",newTab:true },
    { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/himanshu-sahu-303b2b25a/", color: "bg-blue-500",newTab:true },
  ]

  const NavButton = ({ item, index, isSocial = false }) => (
    <motion.div
      className="relative"
      initial={hasAnimated ? false : { x: 100, opacity: 0 }}
      animate={hasAnimated ? false : { x: 0, opacity: 1 }}
      transition={hasAnimated ? false : { delay: index * 0.1, type: "spring" }}
      onAnimationComplete={() => setHasAnimated(true)}
      onMouseEnter={() => setHoveredItem(item.name)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <motion.a
        href={item.href}
        whileHover={{ 
          scale: 1.1,
          x: -4,
          boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 1)"
        }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 ${item.color} border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:brightness-110 transition-all relative group`}
      >
        <item.icon className={`w-6 h-6 ${item.color === 'bg-yellow-400' || item.color === 'bg-cyan-400' ? 'text-black' : 'text-white'}`} strokeWidth={3} />
      </motion.a>

      {/* Tooltip/Label Box */}
      <AnimatePresence>
        {hoveredItem === item.name && (
          <motion.div
            initial={{ x: 20, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 20, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-full top-1/2 -translate-y-1/2 mr-4 pointer-events-none"
          >
            <div className="relative">
              {/* Arrow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-black"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[6px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-white"></div>
              
              {/* Label Box */}
              <div className="bg-white border-4 border-black px-5 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                <span className="font-black text-black uppercase text-sm tracking-wide">
                  {item.name}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )

  return (
    <>
      {/* Fixed Right Sidebar Navigation - Desktop Only */}
      <nav className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3"
        >
          {/* Main Navigation Items */}
          <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-4 border-black p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3">
            {navItems.map((item, index) => (
              <NavButton key={item.name} item={item} index={index} />
            ))}
          </div>

          {/* Divider */}
          <div className="h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>

          {/* Social Links */}
          <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-4 border-black p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-3">
            {socialItems.map((item, index) => (
              <NavButton key={item.name} item={item} index={index + navItems.length} isSocial />
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Top Navigation Bar - Mobile/Tablet Only */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-b-4 border-black shadow-[0px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="flex justify-between items-center p-3 px-4 gap-2 overflow-x-auto">
            {/* Main Nav Items */}
            {navItems.map((item, index) => ( 
<motion.a
  key={item.name}
  href={item.href}
  target={item.newTab ? "_blank" : "_self"}
  rel={item.newTab ? "noopener noreferrer" : undefined}
  whileHover={{ 
    scale: 1.1,
    x: -4,
    boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 1)"
  }}
  whileTap={{ scale: 0.95 }}
  className={`w-14 h-14 ${item.color} border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:brightness-110 transition-all relative group`}
>

                <item.icon className={`w-5 h-5 ${item.color === 'bg-yellow-400' || item.color === 'bg-cyan-400' ? 'text-black' : 'text-white'}`} strokeWidth={3} />
              </motion.a>
            ))}
            
            {/* Divider */}
            <div className="w-1 h-10 bg-gradient-to-b from-cyan-400 via-pink-500 to-yellow-400 border-2 border-black flex-shrink-0"></div>
            
            {/* Social Items */}
            {socialItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: (navItems.length + index) * 0.05 }}
                whileTap={{ scale: 0.9 }}
                className={`flex-shrink-0 w-10 h-10 ${item.color} border-4 border-black flex flex-col items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]`}
              >
                <item.icon className={`w-4 h-4 ${item.color === 'bg-cyan-400' ? 'text-black' : 'text-white'}`} strokeWidth={3} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </nav>

    </>
  )
}