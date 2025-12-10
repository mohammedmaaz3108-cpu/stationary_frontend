"use client";

import Image from "next/image";

export default function KidsStationeryPage() {
  const items = [
    {
      id: 1,
      name: "Notebook",
      desc: "Helps children write notes, learn handwriting, and practice homework.",
      image: "/notebook.png",
      width: 200,
      height: 150,
    },
    {
      id: 2,
      name: "Pencil",
      desc: "Useful for writing, sketching, math, and daily school tasks.",
      image: "/pencil.png",
      width: 120,
      height: 120,
    },
    {
      id: 3,
      name: "Crayons",
      desc: "Great for improving creativity, imagination, and coloring skills.",
      image: "/crayons.png",
      width: 180,
      height: 150,
    },
    {
      id: 4,
      name: "Markers",
      desc: "Used for coloring, drawing charts, and school projects.",
      image: "/markers.png",
      width: 180,
      height: 140,
    },
    {
      id: 5,
      name: "Geometry Box",
      desc: "Helps kids learn shapes, angles, measurement, and diagrams.",
      image: "/geometry.png",
      width: 160,
      height: 130,
    },
    {
      id: 6,
      name: "School Bag",
      desc: "Carries books, lunch, stationery, and essentials every day.",
      image: "/bag.png",
      width: 180,
      height: 150,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Essential Stationery for Children
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          These stationery items are useful for children's daily school and home
          activities. They support creativity, organization, and learning.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              {/* Image with adjustable size */}
              <div className="flex justify-center mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-800 text-center">
                {item.name}
              </h3>

              <p className="text-gray-600 text-center mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
