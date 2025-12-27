"use client";

import AnimatedCard from 'app/components/Animations/AnimatedCard';
import FadeInWhenVisible from 'app/components/Animations/FadeWhenVisible';
import RevealText from 'app/components/Animations/RevealText';
import { TextAnimation } from 'app/components/Animations/TextAnimation';
import { TitleAnimation } from 'app/components/Animations/TitleAnimation';
import ScrollIndicator from 'app/components/ScrollIndicator';
import useSmoothScroll from 'app/hooks/useSmoothScroll';
import Link from 'next/link';
import { 
  HiOutlineCalculator,
  HiOutlineDocumentArrowDown,
  HiArrowRight,
  HiSparkles,
  HiCheckCircle,
  HiClock
} from "react-icons/hi2";

export default function Herramientas() {
  useSmoothScroll();
  const tools = [
    {
      title: "Calculadora de Liquidación",
      slug: "calculadora",
      description: "Calcula de forma precisa e instantánea la liquidación laboral de tus empleados con la normativa vigente colombiana.",
      icon: HiOutlineCalculator,
      color: "from-[#1c9d9f] to-[#168788]",
      features: ["Cesantías automáticas", "Intereses calculados", "Primas y bonificaciones", "Vacaciones proporcionales"],
      badge: "Gratis",
      highlight: "Resultados instantáneos"
    },
    {
      title: "Plantilla Contable Profesional",
      slug: "plantilla",
      description: "Descarga nuestra plantilla profesional en Excel para facilitar el control y seguimiento de tus operaciones contables.",
      icon: HiOutlineDocumentArrowDown,
      color: "from-[#2d2d38] to-[#1c9d9f]/60",
      features: ["Lista para usar", "100% personalizable", "Formato profesional", "Fácil implementación"],
      badge: "Premium",
      highlight: "Actualizada 2025"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/40 flex items-center overflow-hidden">
        <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 md:px-12">
          <TitleAnimation>
          <h1 className="font-playfair text-left text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1]">
            Herramientas que simplifican<br />
            <span className="text-[#1c9d9f]">tu trabajo diario.</span>
          </h1>
          </TitleAnimation>
          <TextAnimation>
          <p className="font-montserrat text-[#9a9faf] text-lg md:text-xl max-w-3xl leading-relaxed mb-8 mt-6">
            Recursos diseñados para facilitar la gestión financiera y contable de tu empresa. 
            Ahorra tiempo y minimiza errores con nuestras herramientas profesionales.
          </p>
          </TextAnimation>
          <TitleAnimation>
          <div className="flex items-center gap-3 mt-10">
            <div className="w-16 h-1.5 bg-[#1c9d9f] rounded-full"></div>
            <p className="text-[#9a9faf] font-montserrat text-sm uppercase tracking-wider">
              2 Herramientas disponibles
            </p>
          </div>
          </TitleAnimation>
        </div>
        <ScrollIndicator />
      </section>

      {/* SECCIÓN: HERRAMIENTAS - LAYOUT ALTERNADO */}
      <section className="w-full bg-white py-20 md:py-32">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">

          {/* TÍTULO PRINCIPAL */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#1c9d9f]/10 rounded-full mb-4">
              <span className="font-montserrat text-[#1c9d9f] font-semibold text-sm uppercase tracking-wider">
                <RevealText>Recursos gratuitos y premium</RevealText>
              </span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38]">
              <RevealText delay={0.2}>Elige tu herramienta</RevealText>
            </h2>
          </div>

          {/* HERRAMIENTAS */}
          <AnimatedCard>
          <div className="space-y-16 md:space-y-24">
            
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={tool.slug}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  
                  {/* COLUMNA 1: CONTENIDO */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1c9d9f]/10 rounded-full mb-6">
                      <HiSparkles className="w-4 h-4 text-[#1c9d9f]" />
                      <span className="font-montserrat text-[#1c9d9f] font-semibold text-sm">
                        {tool.badge}
                      </span>
                    </div>

                    {/* Título */}
                    <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-4">
                      {tool.title}
                    </h3>

                    {/* Línea decorativa */}
                    <div className="w-16 h-1.5 bg-[#1c9d9f] rounded-full mb-6"></div>

                    {/* Descripción */}
                    <p className="font-montserrat text-[#555] text-lg leading-relaxed mb-8">
                      {tool.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-[#1c9d9f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <HiCheckCircle className="w-4 h-4 text-[#1c9d9f]" />
                          </div>
                          <span className="font-montserrat text-[#2d2d38] font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/herramientas/${tool.slug}`}
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1c9d9f] text-white font-montserrat font-semibold rounded-xl hover:bg-[#168788] hover:gap-4 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {tool.slug === 'calculadora' ? 'Usar calculadora' : 'Ver plantilla'}
                      <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>

                  </div>

                  {/* COLUMNA 2: VISUAL CARD */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className={`relative group overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br ${tool.color} p-12 md:p-16 min-h-[400px] flex flex-col justify-between hover:scale-105 transition-all duration-500`}>
                      
                      {/* Decoración de fondo */}
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>

                      {/* Icono grande */}
                      <div className="relative z-10">
                        <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mb-8 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-12 h-12 text-white" />
                        </div>

                        {/* Highlight */}
                        <div className="flex items-center gap-2 mb-4">
                          <HiClock className="w-5 h-5 text-white/80" />
                          <span className="font-montserrat text-white/90 text-sm font-medium">
                            {tool.highlight}
                          </span>
                        </div>

                        <h4 className="font-playfair text-3xl md:text-4xl font-bold text-white">
                          {tool.title}
                        </h4>
                      </div>

                      {/* Número decorativo */}
                      <div className="relative z-10 text-right">
                        <span className="font-playfair text-8xl md:text-9xl font-bold text-white/10">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>
          </AnimatedCard>

        </div>
      </section>

      {/* SECCIÓN: CTA COMPARATIVO */}
      <section className="w-full bg-gradient-to-b from-white to-[#f8f9fa] py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
          
          <div className="bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/40 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            
            <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              <RevealText>¿No sabes cuál herramienta usar?</RevealText>
            </h3>
            
            <span className="font-montserrat text-[#9a9faf] text-lg max-w-2xl mx-auto mb-10">
              <RevealText delay={0.2}>Nuestro equipo puede ayudarte a identificar la herramienta perfecta para tus necesidades específicas.</RevealText>
            </span>
            <FadeInWhenVisible delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-5">
              <Link
                href="https://wa.me/573146623630?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 rounded-xl font-montserrat font-semibold bg-[#1c9d9f] text-white hover:bg-[#168788] transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[#1c9d9f]/40 hover:scale-105 flex items-center gap-3"
              >
                <span className="relative z-10">Solicitar asesoría</span>
                <HiArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </Link>
            </div>
            </FadeInWhenVisible>

          </div>

        </div>
      </section>

    </main>
  );
}