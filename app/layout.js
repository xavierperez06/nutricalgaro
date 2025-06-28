import "../styles/global.css";
import { Raleway } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title:
    "Nutricalgaro | Nutricionista en Rosario – Hábitos, Digestión, Bienestar",
  description:
    "Acompaño procesos de cambio de hábitos, salud digestiva y una relación sana entre comida, cuerpo y mente. Atención online y presencial.",
  keywords: [
    "nutricionista Rosario",
    "salud digestiva",
    "cambio de hábitos",
    "alimentación consciente",
    "atención online nutrición",
    "María Belén Calgaro nutricionista",
  ],
  authors: [{ name: "María Belén Calgaro" }],
  openGraph: {
    title: "Nutricalgaro | Nutricionista en Rosario",
    description:
      "Me especializo en acompañar procesos de salud digestiva y cambio de hábitos con atención presencial y online.",
    url: "https://nutricalgaro.com.ar",
    siteName: "Nutricalgaro",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/assets/images/HeroBanner.jpg",
        width: 1200,
        height: 630,
        alt: "Nutricalgaro portada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutricalgaro | Nutrición y Bienestar",
    description:
      "Te acompaño en tu camino hacia una alimentación saludable y consciente.",
    images: ["/assets/images/HeroBanner.jpg"],
  },
  metadataBase: new URL("https://nutricalgaro.com.ar"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={raleway.className}>
        <div className="main">
          <div className="background" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
