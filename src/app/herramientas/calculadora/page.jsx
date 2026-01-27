"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  HiArrowRight,
  HiShieldCheck,
  HiArrowLeft,
  HiDocumentText,
  HiClock
} from "react-icons/hi2";
import useSmoothScroll from 'app/hooks/useSmoothScroll';
import ScrollIndicator from 'app/components/ScrollIndicator';
import { TitleAnimation } from 'app/components/Animations/TitleAnimation';
import { TextAnimation } from 'app/components/Animations/TextAnimation';
import FadeInWhenVisible from 'app/components/Animations/FadeWhenVisible';
import CalculadoraLiquidacion from 'app/components/SettlementCalculator';
import CalculadoraHorasExtras from 'app/components/OvertimeCalculator';

export default function CalculadoraPage() {
  const [pestanaActiva, setPestanaActiva] = useState('liquidacion');
  const currentYear = new Date().getFullYear();
  useSmoothScroll();

  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/40 flex items-center overflow-hidden">
        <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 md:px-12">
          <TitleAnimation>
            <div className="flex items-center gap-2 text-sm font-montserrat text-[#9a9faf]">
              <Link 
                href="/herramientas" 
                className="flex items-center gap-2 hover:text-[#1c9d9f] transition-colors"
              >
                <HiArrowLeft className="text-base" />
                Herramientas
              </Link>
            </div>

            <h1 className="text-left text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1]">
              Calculadoras <br />
              <span className="text-[#1c9d9f]">Laborales Colombia</span>
            </h1>
          </TitleAnimation>
          
          <TextAnimation>
            <p className="font-sans text-[#9a9faf] text-lg md:text-xl max-w-3xl leading-relaxed mb-8 mt-6">
              Herramientas precisas para calcular liquidaciones laborales y horas extras según la normativa colombiana vigente {currentYear}.
            </p>
          </TextAnimation>

          <div className="flex items-center justify-center gap-3 pt-6 border-t border-white/10 w-fit">
            <HiShieldCheck className="w-5 h-5 text-[#1c9d9f]" />
            <span className="font-sans text-[#9a9faf] text-sm">
              100% Gratis • Normativa colombiana {currentYear}
            </span>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* SECCIÓN PESTAÑAS */}
      <section className="w-full bg-gradient-to-b from-white to-[#f8f9fa] py-20 md:py-32">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
          
          {/* Tabs */}
          <FadeInWhenVisible>
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-white rounded-2xl p-2 shadow-xl border-2 border-gray-100">
                <button
                  onClick={() => setPestanaActiva('liquidacion')}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl font-sans font-semibold text-base transition-all cursor-pointer ${
                    pestanaActiva === 'liquidacion'
                      ? 'bg-[#1c9d9f] text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <HiDocumentText className="w-5 h-5" />
                  Liquidación laboral
                </button>
                <button
                  onClick={() => setPestanaActiva('horas')}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl font-sans font-semibold text-base transition-all cursor-pointer ${
                    pestanaActiva === 'horas'
                      ? 'bg-[#1c9d9f] text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <HiClock className="w-5 h-5" />
                  Horas extras
                </button>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* CONTENIDO DINÁMICO */}
          {pestanaActiva === 'liquidacion' ? (
            <CalculadoraLiquidacion />
          ) : (
            <CalculadoraHorasExtras />
          )}

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/40 py-20">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full text-center">
          
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Necesitas asesoría personalizada?
          </h3>
          
          <p className="font-sans text-[#9a9faf] text-lg mb-10 max-w-2xl mx-auto">
            Nuestro equipo de expertos puede ayudarte con casos especiales, bonificaciones adicionales y situaciones particulares.
          </p>

          <Link 
            href="https://wa.me/573146623630?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20sobre%20sus%20servicios"
            target='_blank'
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-sans font-semibold bg-[#1c9d9f] text-white hover:bg-[#168788] transition-all duration-300 shadow-xl hover:scale-105"
          >
            Solicitar asesoría
            <HiArrowRight className="w-5 h-5" />
          </Link>

        </div>
      </section>

    </main>
  );
}