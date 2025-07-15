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
          setNavColor("#ffffff");
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
          ? "fixed left-0 top-0 w-full z-10 ease-in duration-300"
          : "left-0 top-0 w-full shadow-xl"
      }
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-2 text-white">
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
            className="hidden sm:flex items-center md:text-xl"
          >
            <p>María Belén Calgaro</p>
          </div>
        </Link>

        <ul style={{ color: `${navTextColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/" className="group">
              Inicio
              <div className="bg-primary-color-700 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>
          </li>
          <li className="p-4">
            <Link href="#sobremi" className="group">
              Sobre mí
              <div className="bg-primary-color-700 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>
          </li>
          <li className="p-4">
            <Link href="#servicios" className="group">
              Servicios
              <div className="bg-primary-color-700 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>
          </li>
          <li className="p-4">
            <Link href="#contacto" className="group">
              Contacto
              <div className="bg-primary-color-700 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>
          </li>
          <li className="p-4 flex align-middle">
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
        <div className="block sm:hidden z-10" onClick={() => setNav(!nav)}>
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
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-black"
              : "sm:hidden absolute top-0 -left-full right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 bg-black"
          }
        >
          <ul>
            <li className="p-4 text-4xl">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl">
              <Link href="/#services">Servicios</Link>
            </li>
            <li className="p-4 text-4xl">
              <Link href="/">Contacto</Link>
            </li>
            <li className="p-4 text-4xl">
              <Link href="/">Horarios</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
