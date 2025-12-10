"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { signUpUser } from "@/lib/Actions/auth/signUpUser";
import { sendOtp } from "@/lib/Actions/auth/send_otp";
import { Loader } from "lucide-react";
import { toast } from "sonner";

function VerifyOtpContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const resendOtp = async () => {
    const details = Cookies.get("user_signup");
    const userDetails = JSON.parse(details);
    const finalData = { email: userDetails.email };
    await sendOtp({ form: finalData });
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);

    const details = Cookies.get("user_signup");
    const userDetails = JSON.parse(details);

    const finalData = {
      email: userDetails?.email,
      fullName: userDetails?.fullName,
      otp,
      password: userDetails?.password,
      mobile: "1234567890",
    };

    const response = await signUpUser({ form: finalData });
    setLoading(false);

    if (!response.success) {
      toast.error(response.message || "Invalid OTP");
      return;
    }

    toast.success("Otp Verified successfully");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl p-10 rounded-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Enter OTP
        </h2>

        <p className="text-gray-600 text-center mb-6">
          We sent a 6-digit verification code to:
          <br />
          <span className="font-semibold text-gray-800">{email}</span>
        </p>

        <form onSubmit={handleVerify} className="space-y-6">
          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 6-digit OTP"
            className="w-full px-4 py-3 border rounded-lg text-center tracking-widest text-lg focus:ring focus:ring-yellow-400 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? <Loader className="animate-spin storke-1" /> : ""} Verify
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Didn’t receive the code?{" "}
          <button
            className="text-yellow-600 font-semibold hover:underline"
            onClick={resendOtp}
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
}

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyOtpContent />
    </Suspense>
  );
}
