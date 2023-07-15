import "@/styles/global.css";
import { Raleway } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Nutricalgaro",
  description: "Nutricalgaro webpage",
};

export default function ServicesLayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
