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
    } else {
      setNavColor("#ffffff");
      setNavTextColor("#ebbf1a");
    }
  }, []);

  return (
    <nav
      style={{ backgroundColor: `${navColor}` }}
      className={
        isHome
          ? "fixed top-0 left-0 z-10 w-full backdrop-blur-md duration-300 ease-in" // 👈 Added backdrop-blur-md
          : "top-0 left-0 w-full bg-white/85 shadow-xl backdrop-blur-md" // 👈 Added for non-home pages
      }
    >
      <div className="m-auto flex max-w-[1240px] items-center justify-between p-2 text-white">
        <Link href="/" className="flex pr-5">
          <Image
            src="/assets/images/NutriLogo.png"
            alt="Nutricalgaro Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <div
            style={{ color: `${navTextColor}` }}
            className="hidden items-center sm:flex md:text-xl"
          >
            <p>María Belén Calgaro</p>
          </div>
        </Link>

        <ul style={{ color: `${navTextColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/" className="group">
              Inicio
              <div className="bg-primary-color-700 h-[2px] w-0 transition-all duration-500 group-hover:w-full"></div>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/#sobremi" className="group">
              Sobre mí
              <div className="bg-primary-color-700 h-[2px] w-0 transition-all duration-500 group-hover:w-full"></div>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/#servicios" className="group">
              Servicios
              <div className="bg-primary-color-700 h-[2px] w-0 transition-all duration-500 group-hover:w-full"></div>
            </Link>
          </li>
          <li className="p-4">
            <Link href="/#contacto" className="group">
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
              <Link href="/" onClick={() => setNav(false)}>
                Inicio
              </Link>
            </li>
            <li className="p-4 text-4xl">
              <Link href="/#sobremi" onClick={() => setNav(false)}>
                Sobre mí
              </Link>
            </li>
            <li className="p-4 text-4xl">
              <Link href="/#servicios" onClick={() => setNav(false)}>
                Servicios
              </Link>
            </li>
            <li className="p-4 text-4xl">
              <Link href="/#contacto" onClick={() => setNav(false)}>
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
