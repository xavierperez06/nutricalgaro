import "../styles/global.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:
      "Nutricionista en Rosario | María Belén Calgaro | Salud Digestiva y Cambio de Hábitos",
    template: "%s | Nutricalgaro",
  },
  description:
    "Nutricionista en Rosario especializada en salud digestiva y cambio de hábitos. Atención presencial y online para sanar tu relación con la comida.",
  keywords: [
    "nutricionista Rosario",
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
    "alimentación consciente",
    "atención online nutrición",
    "María Belén Calgaro nutricionista",
  ],
  metadataBase: new URL("https://www.nutricalgaro.com.ar"),
  authors: [{ name: "María Belén Calgaro" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Nutricionista en Rosario | Nutricalgaro – Salud Digestiva",
    description:
      "Me especializo en acompañar procesos de salud digestiva y cambio de hábitos con atención presencial y online.",
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
    title: "Nutricalgaro | Nutrición y Bienestar",
    description:
      "Te acompaño en tu camino hacia una alimentación saludable y consciente.",
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
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rosario",
    addressCountry: "AR",
  },
  description:
    "Nutricionista en Rosario especializada en salud digestiva, hábitos saludables y bienestar. Consultas online y presenciales.",
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
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
