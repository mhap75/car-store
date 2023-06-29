import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "Car rental",
  description: "Easily find, book, and rent any cars in your area",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
