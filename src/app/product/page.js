"use client";
import { fetchProducts } from "@/lib/Actions/(products)/fetch-products";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data?.data);
    });
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Our Products
        </h1>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Explore our high-quality stationery items for school, office & home!
        </p>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              {/* IMAGE */}
              <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.image} // /pen.jpg, /pencil.jpg, etc
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* NAME */}
              <h2 className="text-lg font-semibold mt-4 text-gray-800">
                {product.name}
              </h2>

              {/* PRICE */}
              <p className="text-yellow-600 font-bold text-xl mt-2">
                ₹{product.price}
              </p>

              {/* BUTTON */}
              <a
                href={`/product/${product.id}`}
                className="mt-4 block text-center bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg transition font-medium"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
