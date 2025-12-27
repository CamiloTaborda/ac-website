"use client";

import { HiOutlineChatBubbleLeftRight, HiArrowLeft } from "react-icons/hi2";
import RevealText from "../Animations/RevealText";
import FadeInWhenVisible from "../Animations/FadeWhenVisible";
import AnimatedCard from "../Animations/AnimatedCard";
import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/60 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 md:px-12 text-center">
        
        <h2 className="font-playfair text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1] mb-6">
          <RevealText>¿Listo para optimizar tu contabilidad?</RevealText>
        </h2>
        <FadeInWhenVisible delay={0.2}>
        <p className="font-montserrat text-[#9a9faf] text-lg md:text-xl mb-10 max-w-4xl mx-auto">
          Agenda una consulta gratuita y descubre cómo podemos transformar la gestión 
          contable de tu empresa con precisión y eficiencia.
        </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.4}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://wa.me/573146623630?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 rounded-xl font-montserrat font-bold text-lg bg-[#1c9d9f] text-white hover:bg-[#168788] transition-all duration-300 overflow-hidden shadow-xl hover:scale-105 flex items-center justify-center gap-3"
          >
            <span className="relative z-10 flex items-center gap-2">
              <HiOutlineChatBubbleLeftRight className="text-2xl" />
              Contactar por WhatsApp
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
          </Link>

          <Link
            href="https://cal.com/asesorias-contables-yxogzx/asesorias-contables-y-tributarias"
            target="_blank"
            className="px-10 py-5 rounded-xl font-montserrat font-bold text-lg border-2 border-white text-white hover:bg-white hover:text-[#2d2d38] transition-all duration-300 flex items-center justify-center gap-2"
          >
            Agendar asesoría
          </Link>
        </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
         <AnimatedCard>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-[#1c9d9f] mb-2">+20</div>
            <p className="font-montserrat text-[#9a9faf]">Años de experiencia</p>
          </div>
          </AnimatedCard>
          <AnimatedCard delay={0.2}>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-[#1c9d9f] mb-2">24h</div>
            <p className="font-montserrat text-[#9a9faf]">Tiempo de respuesta</p>
          </div>
          </AnimatedCard>
          <AnimatedCard delay={0.4}>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-[#1c9d9f] mb-2">100%</div>
            <p className="font-montserrat text-[#9a9faf]">Cumplimiento normativo</p>
          </div>
          </AnimatedCard>
        </div>

        <FadeInWhenVisible delay={0.6}>
        <div className="flex items-center justify-center gap-2 text-sm font-montserrat text-[#9a9faf] mt-10">
         <Link 
          href="/servicios" 
          className="flex items-center gap-2 hover:text-[#1c9d9f] transition-colors"
         >
         <HiArrowLeft className="text-base" />
         Volver a Servicios
        </Link>
       </div>
       </FadeInWhenVisible>

      </div>
    </section>
  );
};

export default FinalCTA;
