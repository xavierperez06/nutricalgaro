import Hero from "../components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Instagram from "@/components/Instagram";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero
        title="Nutricalgaro"
        message="Acompaño procesos. Cambio de hábitos. Salud digestiva. Relación sana comida-cuerpo-mente"
      />
      <div className="flex flex-col justify-center text-center items-center ">
        <AboutMe />
        <ServiceCard />
        <Instagram />
      </div>
    </main>
  );
}
