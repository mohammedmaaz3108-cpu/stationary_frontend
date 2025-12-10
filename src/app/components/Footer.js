export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-80">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Mirza Stationery
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Your trusted destination for premium stationery — pens, notebooks,
            markers, and more! We help bring creativity and organization to your
            workspace, classroom, or home.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">
            Categories
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="/products/pens"
                className="hover:text-yellow-400 transition"
              >
                Pens
              </a>
            </li>
            <li>
              <a
                href="/products/notebooks"
                className="hover:text-yellow-400 transition"
              >
                Notebooks
              </a>
            </li>
            <li>
              <a
                href="/products/pencils"
                className="hover:text-yellow-400 transition"
              >
                Pencils
              </a>
            </li>
            <li>
              <a
                href="/products/markers"
                className="hover:text-yellow-400 transition"
              >
                Markers
              </a>
            </li>
            <li>
              <a
                href="/products/boards"
                className="hover:text-yellow-400 transition"
              >
                Notice Boards
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">
            Connect With Us
          </h3>
          <div className="flex flex-col space-y-3 text-sm">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-yellow-400 transition"
            >
              📘 Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-yellow-400 transition"
            >
              📸 Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-yellow-400 transition"
            >
              🐦 Twitter
            </a>
          </div>

          <div className="mt-5 text-sm space-y-1">
            <p>📞 +91 9100679652</p>
            <p>✉️ support@mirzastationery.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-2 text-center text-sm text-gray-400">
        <p className="tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-semibold">
            Mirza Stationery Store
          </span>{" "}
          — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
