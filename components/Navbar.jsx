"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    // 1. Close mobile menu if it's open
    setNav(false);

    // 2. If we are currently on the home page, take over the scroll behavior manually
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
          ? "fixed top-0 left-0 z-10 w-full backdrop-blur-md duration-300 ease-in"
          : "top-0 left-0 w-full bg-white/85 shadow-xl backdrop-blur-md"
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
        <div className="z-10 block sm:hidden" onClick={() => setNav(!nav)}>
          {nav ? (
            <AiOutlineClose style={{ color: `${navTextColor}` }} size={20} />
          ) : (
            <AiOutlineMenu style={{ color: `${navTextColor}` }} size={20} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "absolute top-0 right-0 bottom-0 left-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden"
              : "absolute top-0 right-0 bottom-0 -left-full flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden"
          }
        >
          <ul>
            <li className="p-4 text-4xl">
              <Link href="/" onClick={(e) => handleScroll(e, "top")}>
                Inicio
              </Link>
            </li>
            <li className="p-4 text-4xl">
              <Link
                href="/#sobremi"
                onClick={(e) => handleScroll(e, "sobremi")}
              >
                Sobre mí
              </Link>
            </li>
            <li className="p-4 text-4xl">
              <Link
                href="/#servicios"
                onClick={(e) => handleScroll(e, "servicios")}
              >
                Servicios
              </Link>
            </li>
            <li className="p-4 text-4xl">
              <Link
                href="/#contacto"
                onClick={(e) => handleScroll(e, "contacto")}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
