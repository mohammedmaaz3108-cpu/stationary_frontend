"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  const brands = [
    { id: 1, name: "Camlin", image: "/camlin.jpg" },
    { id: 2, name: "Doms", image: "/doms.jpg" },
    { id: 3, name: "Apsara", image: "/apsara.jpg" },
    { id: 4, name: "Nataraj", image: "/nataraj.jpg" },
    { id: 5, name: "Classmate", image: "/classmate.jpg" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 py-24 px-6 text-center text-white">
        <motion.h1
          className="text-5xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to Mirza Stationery Store
        </motion.h1>

        <motion.p
          className="text-lg max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Your one-stop destination for premium stationery — notebooks, pens,
          markers, art supplies, office essentials, and more!
        </motion.p>

        <motion.a
          href="/product"
          className="inline-block bg-white text-yellow-700 font-semibold px-6 py-3 rounded-xl shadow hover:shadow-lg transition"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Shop Now
        </motion.a>
      </section>
      {/* ================= POPULAR CATEGORIES ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Shop by Category
          </h2>
          <p className="text-gray-600">
            Discover our complete range of stationery essentials
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              name: "Pens & Pencils",
              emoji: "✏️",
              color: "from-blue-400 to-blue-600",
            },
            {
              name: "Notebooks",
              emoji: "📓",
              color: "from-purple-400 to-purple-600",
            },
            {
              name: "Art Supplies",
              emoji: "🎨",
              color: "from-pink-400 to-pink-600",
            },
            {
              name: "Office Files",
              emoji: "📁",
              color: "from-green-400 to-green-600",
            },
            {
              name: "Sticky Notes",
              emoji: "📝",
              color: "from-yellow-400 to-yellow-600",
            },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Decorative background circle */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500" />

              <div className="relative text-center">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </div>
                <p className="text-sm font-semibold text-white">{item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* ================= BRAND ANIMATION SECTION ================= */}
      <section className="py-20 bg-white overflow-hidden">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Trusted Brands We Sell
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: [0, -brands.length * 192], // 192 = width (160px) + gap (32px)
            }}
            transition={{
              duration: brands.length * 3, // Adjust speed here
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Render brands twice for seamless loop */}
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition w-40 h-40 flex justify-center items-center flex-shrink-0"
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
