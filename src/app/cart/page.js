"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { placeOrder } from "@/lib/Actions/(products)/place-order";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  // Load cart from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(saved);
  }, []);

  const handleProceed = async () => {
    const userCookie = Cookies.get("user_info");

    if (!userCookie) {
      router.push("/login");
      return;
    }

    const user = JSON.parse(Cookies.get("user_info"));

    for (const item of cart) {
      console.log("Sending order:", {
        userId: user.id,
        productId: item.id,
        quantity: item.qty,
      });

      const response = await placeOrder({
        userId: Number(user.id),
        productId: Number(item.id),
        quantity: Number(item.qty),
      });

      console.log("Order API Response:", response);

      if (!response.success) {
        toast.error(response.message || "Order failed.");
        return;
      }
    }

    toast.success("Order placed successfully!");
    localStorage.removeItem("cart");
    router.push("/order/success");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>

        {/* ---------- IF CART EMPTY ---------- */}
        {cart.length === 0 && (
          <div className="text-center bg-white p-10 shadow rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mt-2">
              Looks like you haven’t added anything yet.
            </p>

            <a
              href="/product"
              className="mt-5 inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Browse Products
            </a>
          </div>
        )}

        {/* ---------- IF ITEMS EXIST ---------- */}
        {cart.length > 0 && (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow p-6 rounded-xl flex items-center gap-6"
              >
                {/* IMAGE */}
                <div className="relative w-28 h-28 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-yellow-600 font-bold text-lg">
                    ₹{item.price}
                  </p>

                  <p className="text-gray-500 mt-1">Qty: {item.qty}</p>
                </div>

                {/* REMOVE BUTTON */}
                <button
                  className="text-red-600 font-semibold hover:underline"
                  onClick={() => {
                    const updated = cart.filter((p) => p.id !== item.id);
                    setCart(updated);
                    localStorage.setItem("cart", JSON.stringify(updated));
                  }}
                >
                  Remove
                </button>
              </div>
            ))}

            {/* TOTAL SECTION */}
            <div className="bg-white shadow p-6 rounded-xl mt-8">
              <h2 className="text-xl font-bold">Total Amount</h2>
              <p className="text-2xl font-extrabold text-yellow-600 mt-2">
                ₹{cart.reduce((sum, item) => sum + item.price * item.qty, 0)}
              </p>

              <button
                className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg w-full font-semibold"
                onClick={handleProceed}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
