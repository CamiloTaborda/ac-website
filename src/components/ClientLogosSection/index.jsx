"use client";

import Image from "next/image";
import RevealText from "../Animations/RevealText";
import FadeInWhenVisible from "../Animations/FadeWhenVisible";

export default function ClientLogosSection() {
  const logos = [
    '/logos/logo-1.png',
    '/logos/logo-2.png',
    '/logos/logo-3.png',
    '/logos/logo-4.png',
    // '/logos/logo-5.png',
    '/logos/logo-6.png',
    '/logos/logo-7.png',
    '/logos/logo-8.png',
    '/logos/logo-9.png'
  ];

  // Duplicamos los logos 3 veces para efecto infinito
  const logosForScroll = logos.concat(logos, logos);

  return (
    <section className="w-full bg-[#f8f9fa] py-20 md:py-24 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full  mt-20 mb-20">

        {/* ENCABEZADO */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-[#2d2d38]">
            <RevealText>Empresas que Confían en Nosotros</RevealText>
          </h2>
          <FadeInWhenVisible delay={0.2}>
          <p className="font-montserrat text-[#2d2d38]/70 text-lg md:text-xl mt-6 max-w-3xl mx-auto">
            Hemos ayudado a numerosas empresas a optimizar su gestión contable
            con un acompañamiento profesional, <span className="text-[#1c9d9f] font-semibold">cercano y adaptado a sus necesidades.</span>
          </p>
          </FadeInWhenVisible>
          <div className="w-24 h-1.5 bg-[#1c9d9f] mx-auto mt-8 rounded-full"></div>
        </div>

        {/* CARRUSEL INFINITO */}
        <div className="relative">
          {/* Gradientes laterales */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10"></div>

          {/* Contenedor del carrusel */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {logosForScroll.map((logo, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 mx-8 md:mx-12 lg:mx-16 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48"
                >
                  <Image
                    src={logo}
                    alt={`Cliente ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MENSAJE ADICIONAL */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="font-montserrat text-[#2d2d38]/60 text-base md:text-lg">
            Únete a las empresas que ya transformaron su gestión contable.
            <span className="text-[#1c9d9f] font-semibold"> Tu tranquilidad financiera es nuestra prioridad.</span>
          </p>
        </div>

      </div>

      {/* Animación del carrusel */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}} />
    </section>
  );
}
