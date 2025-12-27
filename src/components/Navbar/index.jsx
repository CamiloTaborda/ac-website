"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { TextAnimation } from "../Animations/TextAnimation";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false); 
  const [scrolled, setScrolled] = useState(false); 
  const [lastScroll, setLastScroll] = useState(0);

  // Lógica de scroll
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // Aparece con BG negro al subir
      if (current < lastScroll) {
        setHidden(false);
        setScrolled(current > 0);
      }

      // Desaparece al bajar
      if (current > lastScroll && current > 50) {
        setHidden(true);
      }

      // Si está arriba del todo → transparente
      if (current === 0) {
        setScrolled(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Clases dinámicas de navbar
  const navbarClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${hidden ? "-translate-y-full" : "translate-y-0"}
    ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}
  `;

  // Classes normales del menú:
  const linkClass = (path) =>
    `relative text-gray-100 hover:text-white transition-colors font-sans 
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:rounded-full
     after:bg-white after:transition-all after:duration-300
     ${pathname === path ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  const mobileLinkClass = (path) =>
    `block text-lg py-3 text-gray-200 hover:text-white transition 
     ${pathname === path ? "font-semibold" : ""}`;

  return (
    <>
      {/* NAVBAR */}
      <TextAnimation>
      <nav className={navbarClasses}>
        <div className="w-full max-w-[1800px] mx-auto flex items-center justify-between py-3 px-6 sm:px-8 md:px-12">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/log-ac.png"
              alt="AC Contadores"
              width={180}
              height={180}
              priority
              className="object-contain w-32 lg:w-48 h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-base">
            <Link href="/" className={linkClass("/")}>Inicio</Link>
            <Link href="/servicios" className={linkClass("/servicios")}>Servicios</Link>
            <Link href="/herramientas" className={linkClass("/herramientas")}>Herramientas</Link>
            <Link href="/sobre-nosotros" className={linkClass("/sobre-nosotros")}>Sobre nosotros</Link>
            <Link href="/contacto" className={linkClass("/contacto")}>Contacto</Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-3xl"
          >
            <HiOutlineMenu />
          </button>
        </div>
      </nav>
      </TextAnimation>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-gray-800 z-50 
        transform transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
          <span className="text-white font-semibold text-lg">Menú</span>
          <button onClick={() => setOpen(false)} className="text-white text-3xl">
            <HiX />
          </button>
        </div>

        <div className="flex flex-col px-6 mt-4 space-y-2">
          <Link href="/" className={mobileLinkClass("/")} onClick={() => setOpen(false)}>Inicio</Link>
          <Link href="/servicios" className={mobileLinkClass("/servicios")} onClick={() => setOpen(false)}>Servicios</Link>
          <Link href="/herramientas" className={mobileLinkClass("/herramientas")} onClick={() => setOpen(false)}>Herramientas</Link>
          <Link href="/sobre-nosotros" className={mobileLinkClass("/sobre-nosotros")} onClick={() => setOpen(false)}>Sobre nosotros</Link>
          <Link href="/contacto" className={mobileLinkClass("/contacto")} onClick={() => setOpen(false)}>Contacto</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
