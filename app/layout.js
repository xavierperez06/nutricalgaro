import "../styles/global.css";
import { Raleway } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Nutricalgaro",
  description: "Nutricalgaro webpage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={raleway.className}>
        <div className="main">
          <div className="background" />
        </div>
        <main className="app">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
