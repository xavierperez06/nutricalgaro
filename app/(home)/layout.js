import "@/styles/global.css";
import { Raleway } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const raleway = Raleway({ subsets: ["latin"] });

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar isHome={true} />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
