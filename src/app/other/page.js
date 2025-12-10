"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ExpandingPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-yellow-50 to-yellow-200 px-6 text-center">
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 10 }}
        className="text-6xl mb-6"
      >
        🏗️
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        We’re Expanding Our Business!
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-gray-700 text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        We are working hard behind the scenes to bring you a bigger and better
        stationery shopping experience.
        <br />
        Soon, you'll discover new products, improved features, and exciting
        updates.
        <br />
        Thank you for your patience — please check back again shortly!
      </motion.p>

      {/* Revisit Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <Link
          href="/"
          className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-6 py-3 rounded-lg font-medium shadow-md"
        >
          Return to Home
        </Link>
      </motion.div>

      {/* Footer note */}
      <motion.p
        className="text-sm text-gray-600 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        🌟 Stay tuned for something amazing!
      </motion.p>
    </div>
  );
}
