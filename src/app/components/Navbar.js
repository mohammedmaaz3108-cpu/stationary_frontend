"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, ShoppingBag } from "lucide-react";
import Cookies from "js-cookie";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = Cookies.get("user_info");
    console.log("Stored user in cookie:", storedUser);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("User cookie parsing failed:", error);
      }
    }
  }, []);

  // Extract initials
  // Extract initial from user email
  const Initials = user?.email ? user.email[0].toUpperCase() : null;

  const navItems = [
    { name: "Products", path: "/product" },
    { name: "Stationery", path: "/stationery" },
    { name: "Others", path: "/other" },
  ];

  return (
    <header className="shadow-sm sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Left - Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-3xl font-bold">
            <span className="text-blue-600">M</span>
            <span className="text-red-600">i</span>
            <span className="text-yellow-600">r</span>
            <span className="text-blue-600">z</span>
            <span className="text-green-600">a</span>{" "}
            <span className="text-red-600">S</span>
            <span className="text-blue-600">o</span>
            <span className="text-green-600">l</span>
            <span className="text-yellow-600">u</span>
            <span className="text-red-600">t</span>
            <span className="text-blue-600">i</span>
            <span className="text-green-600">o</span>
            <span className="text-red-600">n</span>
            <span className="text-yellow-600">s</span>
          </Link>
        </div>

        {/* Center - Nav Links */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="hover:text-pink-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 px-3 py-1 rounded-md">
            <Search className="h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search for stationery items..."
              className="bg-transparent outline-none px-2 w-52"
            />
          </div>

          {/* Cart Icon */}
          <Link href="/cart">
            <ShoppingBag className="h-6 w-6 text-gray-700 hover:text-pink-600" />
          </Link>

          {/* If user NOT logged in → only Login button */}
          {!user && (
            <Link
              href="/login"
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              Login
            </Link>
          )}

          {/* If user IS logged in → initials + logout */}
          {user && (
            <div className="flex items-center gap-4">
              {/* Initials Circle */}
              {user && (
                <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {Initials}
                </div>
              )}

              {/* Logout Button */}
              <button
                onClick={() => {
                  Cookies.remove("token");
                  Cookies.remove("user_info");
                  window.location.href = "/";
                }}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
