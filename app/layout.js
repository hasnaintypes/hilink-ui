import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hilink - Explore the World with Ease",
  description:
    "Hilink is your all-in-one travel companion for hiking, camping, and outdoor exploration. Discover trails, plan adventures, and navigate with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
