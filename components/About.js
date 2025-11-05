"use client"

import { motion } from "framer-motion"
import { Code2, Rocket, Heart, Zap, Users, Coffee, Cpu, Lightbulb, Gamepad2, Music } from "lucide-react"

export default function About() {
const stats = [
{ label: "Years Experience Building Stuff", value: "2+", icon: Zap, color: "cyan" },
{ label: "Projects Built", value: "10+", icon: Rocket, color: "pink" },
{ label: "Tech Stack", value: "15+", icon: Code2, color: "yellow" },
{ label: "Problems Solved", value: "270+", icon: Cpu, color: "purple" }
]

const interests = [
{ name: "System Design", icon: Lightbulb, color: "bg-cyan-400" },
{ name: "Problem Solving", icon: Zap, color: "bg-pink-500" },
{ name: "Team Collaboration", icon: Users, color: "bg-green-500" },
{ name: "Gaming", icon: Gamepad2, color: "bg-purple-500" },
{ name: "Music", icon: Music, color: "bg-yellow-400" },
{ name: "Learning", icon: Rocket, color: "bg-orange-500" }
]

const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: { staggerChildren: 0.2, delayChildren: 0.1 }
}
}

const itemVariants = {
hidden: { opacity: 0, y: 30 },
visible: {
opacity: 1,
y: 0,
transition: { duration: 0.6, ease: "easeOut" }
}
}

return ( <section id="about" className="min-h-screen bg-black py-20 px-4 md:px-8 relative overflow-hidden">
{/* Background decorations */} <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400 opacity-5 rotate-45"></div> <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500 opacity-5"></div> <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400 opacity-5 rounded-full"></div>

```
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="max-w-7xl mx-auto relative z-10"
  >
    {/* Header */}
    <motion.div variants={itemVariants} className="text-center mb-16">
      <motion.h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight inline-block">
        About{" "}
        <span className="bg-cyan-400 text-black px-6 py-2 border-4 border-white inline-block transform rotate-2 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)]">
          Me
        </span>
      </motion.h2>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Left Column - Main Content */}
      <motion.div variants={itemVariants} className="space-y-8">
        {/* Introduction */}
        <div className="bg-white border-4 border-cyan-400 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(34,211,238,1)] relative">
          <div className="absolute -top-6 -left-6 bg-cyan-400 border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Heart className="w-8 h-8 text-white" fill="white" />
          </div>

          <div className="pt-4">
            <h3 className="text-2xl md:text-3xl font-black text-black mb-4 uppercase">
              Hey, I'm Himanshu! 👋
            </h3>
            <p className="text-black text-base md:text-lg leading-relaxed font-semibold mb-4">
              I'm a passionate <span className="bg-cyan-200 px-2 py-1 border-2 border-black font-black">Software Developer</span> who loves creating impactful products — from designing system logic to crafting intuitive user interfaces.
            </p>
            <p className="text-black text-base md:text-lg leading-relaxed font-semibold">
              I blend my <span className="bg-pink-200 px-2 py-1 border-2 border-black font-black">Full Stack</span> experience with a strong <span className="bg-yellow-200 px-2 py-1 border-2 border-black font-black">SDE</span> mindset — optimizing algorithms, ensuring scalability, and building solutions that perform well in the real world.
            </p>
          </div>
        </div>

        {/* What I Do */}
        <div className="bg-white border-4 border-pink-500 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(236,72,153,1)] relative transform rotate-1">
          <div className="absolute -top-6 -right-6 bg-pink-500 border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-12">
            <Code2 className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-black mb-4 uppercase">What I Do</h3>
          <div className="space-y-3">
            {[
              "Build scalable, full-stack web applications (MERN)",
              "Solve algorithmic challenges and design efficient logic",
              "Develop APIs and microservices with performance in mind",
              "Work with databases, authentication, and cloud (AWS)",
              "Collaborate in agile teams and contribute to open source"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-pink-500 font-black text-xl flex-shrink-0">▸</span>
                <span className="text-black font-bold text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Currently */}
        <div className="bg-white border-4 border-yellow-400 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(250,204,21,1)] relative">
          <div className="absolute -top-6 -left-6 bg-yellow-400 border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Rocket className="w-8 h-8 text-black" />
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-black mb-4 uppercase pt-4">Currently</h3>
          <div className="space-y-3 text-black font-semibold text-base">
            <p>🎯 Exploring <span className="bg-yellow-200 px-2 py-1 border-2 border-black font-black">Software Development</span> and <span className="bg-yellow-200 px-2 py-1 border-2 border-black font-black">System Design</span></p>
            <p>🧠 Practicing <span className="bg-yellow-200 px-2 py-1 border-2 border-black font-black">DSA & Low-level Design</span></p>
            <p>🚀 Building side projects and integrating new tools</p>
            <p>🤝 Collaborating with developers and contributing to open source</p>
          </div>
        </div>
      </motion.div>

      {/* Right Column - Stats & Interests */}
      <motion.div variants={itemVariants} className="space-y-8">
        {/* Stats */}
        <div className="bg-white border-4 border-purple-500 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(168,85,247,1)] relative transform -rotate-1">
          <div className="absolute -top-6 -right-6 bg-purple-500 border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-12">
            <Zap className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-black mb-6 uppercase">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              const bgColor = {
                cyan: 'bg-cyan-100',
                pink: 'bg-pink-100',
                yellow: 'bg-yellow-100',
                purple: 'bg-purple-100'
              }[stat.color]

              return (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.05,
                    x: -2,
                    y: -2,
                    boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)"
                  }}
                  className={`${bgColor} border-4 border-black p-4 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                >
                  <Icon className="w-8 h-8 mx-auto mb-2 text-black" />
                  <div className="text-3xl font-black text-black mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-black uppercase">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white border-4 border-green-500 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] relative">
          <div className="absolute -top-6 -left-6 bg-green-500 border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Heart className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-black mb-6 uppercase pt-4">Interests</h3>
          <div className="grid grid-cols-2 gap-3">
            {interests.map((interest, i) => {
              const Icon = interest.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -3, 3, 0],
                    boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)"
                  }}
                  className={`${interest.color} border-4 border-black p-4 flex flex-col items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-default`}
                >
                  <Icon className="w-6 h-6 text-white" />
                  <span className="font-black text-white text-sm uppercase text-center">{interest.name}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Fun Fact */}
        <div className="bg-gradient-to-br from-orange-400 to-red-500 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative transform rotate-2">
          <h3 className="text-xl font-black text-white mb-2 uppercase">💡 Fun Fact</h3>
          <p className="text-white font-bold text-base">
            Whether it's debugging a tricky API or solving a DP problem — I love the “aha!” moment that comes after persistence. 😄
          </p>
        </div>
      </motion.div>
    </div>
  </motion.div>
</section>


)
}
