"use client";

import { fetchProductsById } from "@/lib/Actions/(products)/fetch-single-products";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetchProductsById(id);
      setProduct(response);
    };
    fetchProduct();
  }, []);

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl">
        Loading Product...
      </div>
    );
  }

  // Quantity handlers
  const increaseQty = () => setQty((q) => Math.min(q + 1, 20));
  const decreaseQty = () => setQty((q) => Math.max(1, q - 1));

  const handleQty = (e) => {
    const val = Number(e.target.value);
    if (val >= 1 && val <= 20) setQty(val);
  };

  // Add to Cart
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existing = cart.find((item) => item.id === product.id);

    if (existing) existing.qty += qty;
    else cart.push({ ...product, qty });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  // Buy Now
  const buyNow = () => {
    addToCart();
    router.push("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ============ PRODUCT IMAGE ============ */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md h-96 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={product?.image || "/pens.png"}
                alt={product?.name || "Product Image"}
                fill
                className="object-contain p-6"
              />
            </div>
          </div>

          {/* ============ PRODUCT DETAILS ============ */}
          <div className="flex flex-col justify-between">
            {/* Name */}
            <h1 className="text-3xl font-bold text-gray-900">
              {product?.name}
            </h1>

            {/* Description */}
            <p className="text-gray-600 mt-4 leading-relaxed">
              {product?.description}
            </p>

            {/* Price */}
            <p className="text-3xl font-extrabold text-yellow-600 mt-4">
              ₹{product?.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-3">
              <span className="bg-green-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
                ⭐ {product?.rating || 4.4}
              </span>
            </div>

            {/* Features List */}
            {product?.features && (
              <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-1">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <label className="text-sm text-gray-700 font-medium">
                Quantity
              </label>

              <div className="flex items-center gap-4 mt-2">
                <div className="flex border rounded-lg overflow-hidden">
                  <button
                    onClick={decreaseQty}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    –
                  </button>

                  <input
                    type="number"
                    value={qty}
                    min={1}
                    max={20}
                    onChange={handleQty}
                    className="w-16 text-center outline-none border-x"
                  />

                  <button
                    onClick={increaseQty}
                    className="px-3 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <span className="text-sm text-gray-500">
                  In stock: {product?.stock}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={buyNow}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold shadow"
              >
                Buy Now
              </button>

              <button
                onClick={addToCart}
                className="flex-1 border border-gray-300 hover:bg-gray-100 py-3 rounded-lg font-semibold"
              >
                Add to Cart
              </button>
            </div>

            <p className="text-sm mt-3 text-gray-500">
              Free Delivery & Easy Returns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
