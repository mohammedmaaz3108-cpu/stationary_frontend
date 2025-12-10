export default function ContactAboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* ===================== ABOUT US SECTION ===================== */}
        <section className="bg-white shadow-lg rounded-xl p-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            About Us
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Welcome to <span className="font-semibold">Mirza Stationery</span> —
            your trusted destination for high-quality stationery essentials.
            Whether you're a student, artist, office worker, or professional, we
            bring a wide range of products including pens, notebooks, markers,
            folders, notice boards, and much more.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our mission is simple: to provide top-quality stationery at
            affordable prices with fast service and a smooth shopping
            experience. With a passion for creativity and productivity, we are
            here to make your work, study, and writing experience better.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Thank you for choosing{" "}
            <span className="font-semibold">Mirza Stationery</span>. We are
            committed to serving you with excellence and care.
          </p>
        </section>
        {/* ===================== CONTACT SECTION ===================== */}
        <section className="bg-white shadow-xl rounded-2xl p-10 md:p-14 border border-gray-100">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 text-center tracking-wide">
            Contact Us
          </h2>

          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            We’re here to help! For product inquiries, order details, or general
            support — reach out to us using the contact details below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Office Location */}
            <div className="space-y-6">
              <div className="pb-5 border-b border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
                  <span className="text-3xl">📍</span> Office Location
                </h3>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  Mirza Stationery Store
                  <br />
                  MG Road, Hyderabad
                  <br />
                  Telangana, India — 500001
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="pb-5 border-b border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
                  <span className="text-3xl">📞</span> Phone
                </h3>
                <p className="text-gray-600 mt-3">+91 98765 43210</p>
              </div>

              <div className="pb-5 border-b border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
                  <span className="text-3xl">✉️</span> Email
                </h3>
                <p className="text-gray-600 mt-3">
                  support@mirzastationery.com
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
                  <span className="text-3xl">🌐</span> Social Links
                </h3>
                <div className="flex items-center gap-6 mt-4 text-gray-600 text-lg">
                  <a href="#" className="hover:text-yellow-500 transition">
                    📘 Facebook
                  </a>
                  <a href="#" className="hover:text-yellow-500 transition">
                    📸 Instagram
                  </a>
                  <a href="#" className="hover:text-yellow-500 transition">
                    🐦 Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
