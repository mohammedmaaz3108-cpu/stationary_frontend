"use client";
import { useSearchParams } from "next/navigation";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendOtp } from "@/lib/Actions/auth/send_otp";
import Cookies from "js-cookie";
import { Loader } from "lucide-react";
import { toast } from "sonner";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const finalData = {
      email: form.email,
    };
    const response = await sendOtp({ form: finalData });
    console.log(response);
    setLoading(false);

    if (!response.success) {
      toast.error(response.message || "Signup Failed");
    }

    Cookies.set("user_signup", JSON.stringify(form));
    toast.success("Otp Sent successfully");
    router.push("/signup/verify");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl p-10 rounded-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* FULL NAME */}
          <div>
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring focus:ring-yellow-400 outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring focus:ring-yellow-400 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring focus:ring-yellow-400 outline-none"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            disabled={loading}
          >
            {" "}
            {loading && <Loader className="animate-spin w-5 h-5 stroke-1" />}
            Continue
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-600 font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
