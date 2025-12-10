import { Toaster } from "sonner";
import "./globals.css";
import LayoutClient from "./LayoutClient";

export const metadata = {
  title: "Mirza Stationery Store",
  description: "Your one-stop shop for stationery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <LayoutClient>{children}</LayoutClient> <Toaster />
      </body>
    </html>
  );
}
