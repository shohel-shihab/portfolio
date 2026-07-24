import { Toaster } from "react-hot-toast";
import Navbar from "../components/layout/Navbar";
import "./globals.css";

export const metadata = {
  title: "Shohel Rana Shihab",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar></Navbar>
      <body>
        {children}
        <Toaster position="top-right" />
        </body>
    </html>
  );
}