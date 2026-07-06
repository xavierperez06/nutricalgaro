"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Navbar = ({ isHome = false }) => {
  const [nav, setNav] = useState(false);
  const [navColor, setNavColor] = useState("transparent");
  const [navTextColor, setNavTextColor] = useState("#ffffff");

  useEffect(() => {
    if (isHome) {
      const changeColor = () => {
        if (window.scrollY >= 90) {
          setNavColor("rgba(255, 255, 255, 0.85)");
          setNavTextColor("#ebbf1a");
        } else {
          setNavColor("transparent");
          setNavTextColor("#ffffff");
        }
      };
      window.addEventListener("scroll", changeColor);
      return () => window.removeEventListener("scroll", changeColor);
    } else {
      setNavColor("#ffffff");
      setNavTextColor("#ebbf1a");
    }
  }, []);

  const handleScroll = (e, targetId) => {
    setNav(false);

    if (window.location.pathname === "/") {
      e.preventDefault();

      if (targetId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `/#${targetId}`);
        }
      }
    }
  };

  return (
    <nav
      style={{ backgroundColor: `${navColor}` }}
      className={
        isHome
          ? "fixed top-0 left-0 z-50 w-full backdrop-blur-md duration-300 ease-in"
          : "sticky top-0 left-0 z-50 w-full bg-white/85 shadow-xl backdrop-blur-md"
      }
    >
      <div className="m-auto flex max-w-[1240px] items-center justify-between p-2 text-white">
        <Link href="/" className="flex pr-5">
          <div
            style={{ color: `${navTextColor}` }}
            className="hidden items-center font-bold sm:flex md:text-3xl"
          >
            <p>María Belén Calgaro</p>
          </div>
        </Link>

        <ul
          style={{ color: `${navTextColor}` }}
          className="hidden align-middle text-xl sm:flex"
        >
          <li className="p-4">
            <Link
              href="/"
              onClick={(e) => handleScroll(e, "top")}
              className="group"
            >
              Inicio
              <div className="bg-primary-color-700 h-[2px] w-0 transition-all duration-500 group-hover:w-full"></div>
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="/#sobremi"
              onClick={(e) => handleScroll(e, "sobremi")}
              className="group"
            >
              Sobre mí
              <div className="bg-primary-color-700 h-[2px] w-0 transition-all duration-500 group-hover:w-full"></div>
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="/#servicios"
              onClick={(e) => handleScroll(e, "servicios")}
              className="group"
            >
              Servicios
              <div className="bg-primary-color-700 h-[2px] w-0 transition-all duration-500 group-hover:w-full"></div>
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="/#contacto"
              onClick={(e) => handleScroll(e, "contacto")}
              className="group"
            >
              Contacto
              <div className="bg-primary-color-700 h-[2px] w-0 transition-all duration-500 group-hover:w-full"></div>
            </Link>
          </li>
          <li className="flex p-4 align-middle">
            <Link
              href="https://www.instagram.com/nutricalgaro/"
              target="_blank"
              className="flex"
            >
              <FaInstagram size={25} />
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          className="relative z-50 block cursor-pointer p-2 sm:hidden"
          onClick={() => setNav(!nav)}
        >
          {nav ? (
            <AiOutlineClose
              style={{ color: "white" }}
              size={32}
              className="rotate-90 transition-transform duration-300"
            />
          ) : (
            <AiOutlineMenu
              style={{ color: `${navTextColor}` }}
              size={32}
              className="transition-transform duration-300"
            />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-slate-900/95 opacity-100 backdrop-blur-xl duration-500 ease-in-out sm:hidden"
              : "fixed top-0 -left-full z-40 flex h-screen w-full flex-col items-center justify-center bg-slate-900/95 opacity-0 backdrop-blur-xl duration-500 ease-in-out sm:hidden"
          }
        >
          {/* Decorative Background Effects for Mobile Menu */}
          <div className="pointer-events-none absolute top-20 left-10 h-64 w-64 rounded-full bg-[var(--color-primary-color-500)]/20 blur-3xl"></div>
          <div className="pointer-events-none absolute right-10 bottom-20 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl"></div>

          <ul className="relative z-10 flex w-full flex-col items-center gap-8 px-6">
            <li className="w-full text-center">
              <Link
                href="/"
                onClick={(e) => handleScroll(e, "top")}
                className="inline-block text-3xl font-bold tracking-wider text-white transition-all duration-300 hover:scale-110 hover:text-[var(--color-primary-color-400)]"
              >
                Inicio
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                href="/#sobremi"
                onClick={(e) => handleScroll(e, "sobremi")}
                className="inline-block text-3xl font-bold tracking-wider text-white transition-all duration-300 hover:scale-110 hover:text-[var(--color-primary-color-400)]"
              >
                Sobre mí
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                href="/#servicios"
                onClick={(e) => handleScroll(e, "servicios")}
                className="inline-block text-3xl font-bold tracking-wider text-white transition-all duration-300 hover:scale-110 hover:text-[var(--color-primary-color-400)]"
              >
                Servicios
              </Link>
            </li>
            <li className="w-full text-center">
              <Link
                href="/#contacto"
                onClick={(e) => handleScroll(e, "contacto")}
                className="inline-block text-3xl font-bold tracking-wider text-white transition-all duration-300 hover:scale-110 hover:text-[var(--color-primary-color-400)]"
              >
                Contacto
              </Link>
            </li>

            {/* Mobile Social Link */}
            <li className="mt-8">
              <Link
                href="https://www.instagram.com/nutricalgaro/"
                target="_blank"
                className="flex items-center justify-center rounded-full bg-white/10 p-4 text-white ring-1 ring-white/20 transition-all duration-300 hover:scale-110 hover:bg-[var(--color-primary-color-500)] hover:text-slate-900 hover:ring-transparent"
              >
                <FaInstagram size={32} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
