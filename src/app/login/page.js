"use client";
import { loginUser } from "@/lib/Actions/auth/loginUser";
import Cookies from "js-cookie";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // ⭐ If user already logged in → redirect to cart
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) router.push("/cart");
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await loginUser({ form });
    setLoading(false);

    if (!response.success) {
      toast.error("Invalid login credentials");
      return;
    }

    toast.success("Login Successfully");

    // Save token
    Cookies.set("token", response?.data?.access_token);

    Cookies.set("user_info", JSON.stringify(response.data.user));

    router.push("/");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Login to Your Account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg flex justify-center items-center gap-2"
          disabled={loading}
        >
          {loading && <Loader className="animate-spin stroke-1" />}
          Login
        </button>
      </form>

      <p className="text-center text-sm mt-4 text-gray-600">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-yellow-500 underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
