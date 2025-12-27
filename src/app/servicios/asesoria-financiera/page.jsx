"use client";

import ScrollIndicator from 'app/components/ScrollIndicator';
import Link from 'next/link';
import { 
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineAcademicCap,
  HiOutlineCheckCircle,
  HiArrowLeft,
  HiOutlineChatBubbleLeftRight,
  HiOutlinePresentationChartLine,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlineDocumentText
} from "react-icons/hi2";
import useSmoothScroll from 'app/hooks/useSmoothScroll';
import FinalCTA from 'app/components/FinalCTA';
import { TitleAnimation } from 'app/components/Animations/TitleAnimation';
import { TextAnimation } from 'app/components/Animations/TextAnimation';
import AnimatedCard from 'app/components/Animations/AnimatedCard';
import RevealText from 'app/components/Animations/RevealText';
import FadeInWhenVisible from 'app/components/Animations/FadeWhenVisible';

export default function AsesoriaFinanciera() {
  useSmoothScroll();

  const pillars = [
    {
      icon: HiOutlineAcademicCap,
      title: "Educar",
      description: "Te educamos sobre productos financieros, activos y estrategias de inversión para que comprendas cada decisión."
    },
    {
      icon: HiOutlineLightBulb,
      title: "Informar",
      description: "Mantenemos transparencia absoluta informándote sobre características, riesgos y rentabilidades de tu cartera."
    },
    {
      icon: HiOutlinePresentationChartLine,
      title: "Asesorar",
      description: "Brindamos asesoría profesional personalizada para optimizar tu situación financiera y alcanzar tus objetivos."
    }
  ];

  const services = [
    {
      icon: HiOutlineDocumentText,
      title: "Plan financiero personalizado",
      description: "Elaboramos un plan de acuerdo con tus necesidades específicas."
    },
    {
      icon: HiOutlineCurrencyDollar,
      title: "Gestión de finanzas",
      description: "Administramos tus recursos procurando su óptimo rendimiento."
    },
    {
      icon: HiOutlineChartBar,
      title: "Pronóstico de escenarios",
      description: "Proyectamos diferentes escenarios económicos para tu empresa."
    },
    {
      icon: HiOutlineLightBulb,
      title: "Resolución de problemas",
      description: "Solucionamos problemas financieros de forma estratégica."
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Evaluación de riesgos",
      description: "Identificamos oportunidades y mitigamos riesgos potenciales."
    },
    {
      icon: HiOutlineCheckCircle,
      title: "Objetivos económicos",
      description: "Establecemos metas claras y alcanzables para tu crecimiento."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/40 flex items-center overflow-hidden">
        <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 md:px-12">
          
          <TitleAnimation>
            <div className="flex items-center gap-2 text-sm font-montserrat text-[#9a9faf] mb-2">
              <Link 
                href="/servicios" 
                className="flex items-center gap-2 hover:text-[#1c9d9f] transition-colors"
              >
                <HiArrowLeft className="text-base" />
                Servicios
              </Link>
            </div>

            <h1 className="font-playfair text-left text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1]">
              Asesoría{' '}
              <span className="text-[#1c9d9f]">Financiera</span>
            </h1>
          </TitleAnimation>

          <TextAnimation>
            <p className="font-montserrat text-[#9a9faf] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              Herramienta gerencial y analítica clave que determina las condiciones financieras actuales, 
              gestiona recursos disponibles y contribuye a predecir el futuro financiero de tu empresa.
            </p>
          </TextAnimation>

          <TitleAnimation>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/573146623630?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 rounded-xl font-montserrat font-semibold bg-[#1c9d9f] text-white hover:bg-[#168788] transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[#1c9d9f]/40 hover:scale-105 flex items-center justify-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <HiOutlineChatBubbleLeftRight className="text-xl" />
                  Solicitar información
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </Link>
            </div>
          </TitleAnimation>
        </div>
        <ScrollIndicator />
      </section>

      {/* SECCIÓN: NUESTRO OBJETIVO - 3 PILARES */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#2d2d38] mb-6">
              <RevealText>Nuestro Objetivo</RevealText>
            </h2>
            <FadeInWhenVisible delay={0.2}>
              <p className="font-montserrat text-[#555] text-lg max-w-3xl mx-auto">
                El objetivo principal de nuestro servicio es <span className="text-[#1c9d9f] font-semibold">educar, 
                informar y asesorar</span> al cliente sobre los productos y activos que componen su cartera, 
                explicando características, riesgos y posibles rentabilidades.
              </p>
            </FadeInWhenVisible>
          </div>

          {/* 3 PILARES EN CARDS DESTACADAS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <AnimatedCard key={index} delay={0.1 + index * 0.15}>
                  <div className="relative overflow-hidden bg-gradient-to-br from-white to-[#f8f9fa] rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group h-full">
                    
                    {/* Decoración de fondo */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1c9d9f]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                      {/* Icono grande */}
                      <div className="w-20 h-20 bg-[#1c9d9f]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1c9d9f] transition-colors duration-300 mx-auto">
                        <Icon className="w-10 h-10 text-[#1c9d9f] group-hover:text-white transition-colors duration-300" />
                      </div>

                      {/* Título */}
                      <h3 className="font-playfair text-3xl font-bold text-[#2d2d38] mb-4 text-center group-hover:text-[#1c9d9f] transition-colors duration-300">
                        {pillar.title}
                      </h3>

                      {/* Línea decorativa */}
                      <div className="w-16 h-1 bg-[#1c9d9f] rounded-full mb-6 mx-auto group-hover:w-24 transition-all duration-300"></div>

                      {/* Descripción */}
                      <p className="font-montserrat text-[#555] text-center leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECCIÓN: SERVICIOS - GRID 2x3 */}
      <section className="w-full bg-gradient-to-b from-white to-[#f8f9fa] py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#2d2d38] mb-6">
              <RevealText>¿Qué Ofrecemos?</RevealText>
            </h2>
            <FadeInWhenVisible delay={0.2}>
              <p className="font-montserrat text-[#555] text-lg max-w-2xl mx-auto">
                Servicios integrales diseñados para optimizar la gestión financiera de tu empresa.
              </p>
            </FadeInWhenVisible>
          </div>

          {/* GRID DE SERVICIOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedCard key={index} delay={0.1 + index * 0.08}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group h-full">
                    
                    {/* Icono */}
                    <div className="w-14 h-14 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1c9d9f] group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-[#1c9d9f] group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Título */}
                    <h3 className="font-playfair text-xl font-bold text-[#2d2d38] mb-3 group-hover:text-[#1c9d9f] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Línea */}
                    <div className="w-12 h-1 bg-[#1c9d9f] rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>

                    {/* Descripción */}
                    <p className="font-montserrat text-[#555] leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECCIÓN: ENFOQUE INTEGRAL */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12">
          
          <AnimatedCard>
            <div className="bg-gradient-to-br from-[#1c9d9f] to-[#168788] rounded-3xl p-10 md:p-16 shadow-2xl">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* IZQUIERDA */}
                <div>
                  <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                    <HiOutlineChartBar className="w-6 h-6 text-white" />
                    <span className="font-montserrat text-white font-semibold text-sm uppercase tracking-wider">
                      Enfoque estratégico
                    </span>
                  </div>

                  <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Gestión integral de tu futuro financiero
                  </h2>

                  <p className="font-montserrat text-white/90 text-lg leading-relaxed mb-6">
                    Determinamos las condiciones financieras en el presente, gestionamos los recursos 
                    disponibles y contribuimos a predecir el futuro financiero de tu empresa.
                  </p>

                  <p className="font-montserrat text-white/90 text-lg leading-relaxed">
                    Nuestro enfoque combina análisis profundo, transparencia absoluta y asesoría 
                    continua para que cada decisión financiera esté respaldada por datos y experiencia.
                  </p>
                </div>

                {/* DERECHA - ESTADÍSTICAS/BENEFICIOS */}
                <div className="grid grid-cols-1 gap-6">
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <HiOutlineShieldCheck className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-white">
                        Transparencia Total
                      </h3>
                    </div>
                    <p className="font-montserrat text-white/80 leading-relaxed">
                      Claridad absoluta sobre riesgos, características y rentabilidades de tu cartera.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <HiOutlinePresentationChartLine className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-white">
                        Proyección Estratégica
                      </h3>
                    </div>
                    <p className="font-montserrat text-white/80 leading-relaxed">
                      Escenarios económicos proyectados para anticipar oportunidades y desafíos.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <HiOutlineAcademicCap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-white">
                        Educación Continua
                      </h3>
                    </div>
                    <p className="font-montserrat text-white/80 leading-relaxed">
                      Te capacitamos para que entiendas y tomes decisiones financieras informadas.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </AnimatedCard>

        </div>
      </section>

      <FinalCTA />

    </main>
  );
}