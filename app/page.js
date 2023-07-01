import Image from "next/image";

import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero
        title="Nutricalgaro"
        message="Acompaño procesos. Cambio de hábitos. Salud digestiva. Relación sana comida-cuerpo-mente"
      />
    </main>
  );
}
