"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  HiOutlineCalculator,
  HiOutlineDocumentText,
  HiOutlineBuildingLibrary,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineAcademicCap,
  HiArrowRight
} from "react-icons/hi2";
import useSmoothScroll from "app/hooks/useSmoothScroll";
import { TitleAnimation } from 'app/components/Animations/TitleAnimation';
import { TextAnimation } from 'app/components/Animations/TextAnimation';
import ScrollIndicator from 'app/components/ScrollIndicator';
import RevealText from 'app/components/Animations/RevealText';
import AnimatedCard from 'app/components/Animations/AnimatedCard';
import FadeInWhenVisible from 'app/components/Animations/FadeWhenVisible';

export default function ServicesPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  useSmoothScroll();

  const services = [
    {
      title: "Asesoría Contable",
      slug: "asesoria-contable",
      icon: HiOutlineCalculator,
      description: "Gestión integral de registros contables, preparación de estados financieros y cumplimiento de normas internacionales de información financiera (NIIF). Brindamos soporte continuo para mantener tu contabilidad al día y sin errores.",
      number: "01"
    },
    {
      title: "Asesoría Fiscal",
      slug: "asesoria-fiscal",
      icon: HiOutlineDocumentText,
      description: "Optimización tributaria, planeación fiscal estratégica y cumplimiento de obligaciones ante la DIAN. Te ayudamos a minimizar cargas impositivas de forma legal y eficiente.",
      number: "02"
    },
    {
      title: "Asesoría Financiera",
      slug: "asesoria-financiera",
      icon: HiOutlineChartBar,
      description: "Análisis financiero profundo, proyecciones económicas y planeación estratégica para la toma de decisiones empresariales. Convertimos números en estrategias de crecimiento.",
      number: "03"
    },
    {
      title: "Revisoría Fiscal",
      slug: "revisoria-fiscal",
      icon: HiOutlineShieldCheck,
      description: "Evaluación independiente y certificación de información financiera conforme a estándares profesionales. Garantizamos transparencia y confiabilidad en tus reportes ante terceros.",
      number: "04"
    },
    {
      title: "Capacitación Empresarial",
      slug: "capacitacion-empresarial",
      icon: HiOutlineAcademicCap,
      description: "Programas de formación especializada en temas contables, fiscales y financieros. Empoderamos a tu equipo con conocimiento actualizado y práctico para mejorar la gestión interna.",
      number: "05"
    },
    {
      title: "Trámites en Entidades de Control y Vigilancia",
      slug: "tramites-entidades-control",
      icon: HiOutlineBuildingLibrary,
      description: "Representación y gestión integral ante organismos oficiales como Dirección de impuestos y aduanas Nacionales (DIAN), Cámara de Comercio, Superintendencias y demás entidades reguladoras. Facilitamos todos tus trámites legales y administrativos.",
      number: "06"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="w-full h-screen bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/40 flex items-center">
        <div className="max-w-[1800px] mx-auto w-full mt-20 px-6 sm:px-8 md:px-12">
          <TitleAnimation>
          <h1 className="font-playfair text-left text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1]">
            Servicios que impulsan el<br />
            <span className="text-[#1c9d9f]">éxito de tu empresa.</span>
          </h1>
          </TitleAnimation>
          <TextAnimation>
          <p className="text-[#9a9faf] font-montserrat text-left text-lg md:text-xl mt-6 max-w-5xl leading-relaxed">
            Proporcionamos información precisa y confiable a los diferentes stakeholders y grupos 
            de interés de tu empresa sobre la situación económica y resultados operacionales. 
            Brindamos razonabilidad en la evaluación y presentación de estados financieros para 
            que tomes decisiones informadas con total seguridad.
          </p>
          </TextAnimation>
          <TitleAnimation>
          <div className="flex items-center gap-3 mt-10">
            <div className="w-16 h-1.5 bg-[#1c9d9f] rounded-full"></div>
            <p className="text-[#9a9faf] font-montserrat text-sm uppercase tracking-wider">
              6 Servicios especializados
            </p>
          </div>
         </TitleAnimation>
        </div>
        <ScrollIndicator />
      </section>

      {/* SERVICES SECTION */}
      <section className="w-full min-h-screen bg-white py-20 md:py-32">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">

          {/* TÍTULO */}
          <div className="mb-16 md:mb-20">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38]">
              <RevealText>Nuestros Servicios</RevealText>
            </h2>
            <div className="w-24 h-1.5 bg-[#1c9d9f] mt-6 rounded-full"></div>
          </div>

          {/* LISTA DE SERVICIOS */}
          <div className="space-y-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredIndex === index;

              return (
                <Link
                  key={index}
                  href={`/servicios/${service.slug}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative cursor-pointer block"
                >
                  
                  {/* CONTENEDOR PRINCIPAL */}
                  <div className={`
                    relative overflow-hidden rounded-2xl transition-all duration-500
                    ${isHovered 
                      ? 'bg-gradient-to-r from-[#1c9d9f] to-[#168788] shadow-2xl scale-[1.02]' 
                      : 'bg-white border-b-2 border-[#e5e7eb]'
                    }
                  `}>
                    
                    {/* FILA PRINCIPAL */}
                    <AnimatedCard>
                    <div className="relative z-10 flex items-center justify-between p-8 md:p-10">
                      
                      {/* IZQUIERDA: NÚMERO + ICONO + TÍTULO */}
                      <div className="flex items-center gap-6 md:gap-8 flex-1">
                        
                        {/* NÚMERO */}
                        <span className={`
                          font-playfair text-5xl md:text-6xl lg:text-7xl font-bold transition-all duration-500
                          ${isHovered ? 'text-white/30' : 'text-[#1c9d9f]/20'}
                        `}>
                          {service.number}
                        </span>

                        {/* ICONO */}
                        <div className={`
                          w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                          ${isHovered 
                            ? 'bg-white/20 scale-110' 
                            : 'bg-[#1c9d9f]/10'
                          }
                        `}>
                          <Icon className={`
                            w-7 h-7 md:w-8 md:h-8 transition-colors duration-500
                            ${isHovered ? 'text-white' : 'text-[#1c9d9f]'}
                          `} />
                        </div>

                        {/* TÍTULO */}
                        <h3 className={`
                          font-playfair text-2xl md:text-3xl lg:text-4xl font-bold transition-colors duration-500
                          ${isHovered ? 'text-white' : 'text-[#2d2d38]'}
                        `}>
                          {service.title}
                        </h3>
                      </div>

                      {/* DERECHA: FLECHA */}
                      <div className={`
                        transition-all duration-500
                        ${isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'}
                      `}>
                        <HiArrowRight className="w-8 h-8 text-white" />
                      </div>

                    </div>
                   </AnimatedCard>
                    {/* DESCRIPCIÓN EXPANDIBLE */}
                    <div className={`
                      overflow-hidden transition-all duration-500
                      ${isHovered ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <div className="px-8 md:px-10 pb-8 md:pb-10">
                        <div className="pl-0 md:pl-32 lg:pl-40">
                          <p className="font-montserrat text-white/90 text-base md:text-lg leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* DECORACIÓN DE FONDO */}
                    {isHovered && (
                      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    )}

                  </div>
                </Link>
              );
            })}
          </div>

          {/* MENSAJE FINAL */}
          <FadeInWhenVisible>
          <div className="mt-20 text-center">
            <p className="font-montserrat text-[#2d2d38]/60 text-base md:text-lg">
              ¿Necesitas más información sobre algún servicio?
            </p>
            <Link href="https://wa.me/573146623630?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20sobre%20sus%20servicios"
               target="_blank"
              className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-[#1c9d9f] text-white font-montserrat font-semibold rounded-xl hover:bg-[#168788] hover:gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contáctanos
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
          </FadeInWhenVisible>
        </div>
      </section>

    </main>
  );
}