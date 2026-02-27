"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">

      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-40 blur-3xl"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-6"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Nischay Kondai
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-300">
          AI / ML Engineer · Backend Systems · Research
        </p>

        <div className="mt-10 flex gap-6 justify-center">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition duration-300 shadow-lg shadow-purple-700/40">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-full border border-purple-500 hover:bg-purple-600 hover:scale-110 transition duration-300">
            Download CV
          </button>
        </div>
      </motion.div>
    </main>
  );
}