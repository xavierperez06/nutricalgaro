import "../styles/global.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:
      "Nutricionista en Rosario | Salud hormonal, digestiva y hábitos sostenibles | María Belén Calgaro",
    template: "%s | Nutricalgaro",
  },
  description:
    "Nutricionista en Rosario especializada en salud hormonal femenina, salud digestiva y cambios de hábitos. Atención presencial y online con un enfoque integrativo basado en evidencia científica.",
  keywords: [
    "nutricionista Rosario",
    "nutricionista online",
    "nutricionista salud hormonal",
    "nutricionista salud digestiva",
    "nutricionista SOP",
    "nutricionista endometriosis",
    "síndrome de ovario poliquístico",
    "nutrición hormonal femenina",
    "salud hormonal femenina",
    "salud digestiva",
    "hábitos saludables",
    "nutrición integrativa",
    "consulta nutricional online",
    "nutricionista Rosario, Santa Fe",
    "nutrición Rosario",
    "nutrición consciente",
    "salud digestiva Rosario",
    "cambio de hábitos alimenticios",
    "nutricionista online",
    "nutricionista presencial Rosario",
    "nutricionista María Belén Calgaro",
    "nutricionista para digestión Rosario",
    "salud digestiva",
    "cambio de hábitos",
    "María Belén Calgaro",
    "María Belén Calgaro nutricionista",
  ],
  metadataBase: new URL("https://www.nutricalgaro.com.ar"),
  authors: [{ name: "María Belén Calgaro" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Nutricionista en Rosario | Salud hormonal y digestiva",
    description:
      "Nutricionista especializada en salud hormonal femenina y salud digestiva, con atención para personas que desean mejorar su bienestar a través de hábitos sostenibles y respaldados por evidencia científica.",
    url: "https://www.nutricalgaro.com.ar",
    siteName: "Nutricalgaro",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/assets/images/HeroBanner.jpg",
        width: 1200,
        height: 630,
        alt: "Nutricionista en Rosario María Belén Calgaro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutricionista en Rosario | Salud hormonal y digestiva",
    description:
      "Atención presencial y online para acompañarte en la construcción de hábitos sostenibles que mejoren tu salud hormonal y digestiva.",
    images: ["/assets/images/HeroBanner.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dietitian",
  inLanguage: "es",
  name: "María Belén Calgaro",
  jobTitle: "Nutricionista en Rosario",
  image: "https://www.nutricalgaro.com.ar/assets/images/HeroBanner.jpg",
  url: "https://www.nutricalgaro.com.ar",
  sameAs: ["https://www.instagram.com/nutricalgaro"],
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rosario",
    addressCountry: "AR",
  },
  description:
    "Nutricionista en Rosario especializada en salud hormonal femenina, salud digestiva y cambio de hábitos sostenibles. Atención presencial y online.",
  availableService: {
    "@type": "MedicalTherapy",
    name: "Asesoramiento nutricional",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="light">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={raleway.className}>
        <div className="main">
          <div className="background" />
        </div>
        <main className="app overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
