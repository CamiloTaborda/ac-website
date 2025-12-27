"use client";

import ScrollIndicator from 'app/components/ScrollIndicator';
import Link from 'next/link';
import { 
  HiOutlineAcademicCap,
  HiOutlineUsers,
  HiOutlinePresentationChartLine,
  HiOutlineCheckCircle,
  HiArrowLeft,
  HiOutlineChatBubbleLeftRight,
  HiOutlineDocumentText,
  HiOutlineCalculator,
  HiOutlineScale,
  HiOutlineChartBar
} from "react-icons/hi2";
import useSmoothScroll from 'app/hooks/useSmoothScroll';
import FinalCTA from 'app/components/FinalCTA';
import { TitleAnimation } from 'app/components/Animations/TitleAnimation';
import { TextAnimation } from 'app/components/Animations/TextAnimation';
import AnimatedCard from 'app/components/Animations/AnimatedCard';
import RevealText from 'app/components/Animations/RevealText';
import FadeInWhenVisible from 'app/components/Animations/FadeWhenVisible';

export default function CapacitacionEmpresarial() {
  useSmoothScroll();

  const trainingAreas = [
    {
      icon: HiOutlineCalculator,
      title: "Contabilidad y NIIF",
      topics: [
        "Normas Internacionales de Información Financiera",
        "Gestión contable bajo estándares colombianos",
        "Preparación de estados financieros",
        "Cierre contable y ajustes"
      ]
    },
    {
      icon: HiOutlineScale,
      title: "Tributación y Fiscal",
      topics: [
        "Reforma tributaria y actualizaciones DIAN",
        "Obligaciones fiscales empresariales",
        "Optimización tributaria legal",
        "Declaraciones de renta e IVA"
      ]
    },
    {
      icon: HiOutlineChartBar,
      title: "Gestión Financiera",
      topics: [
        "Análisis e interpretación financiera",
        "Presupuestos y proyecciones",
        "Flujo de caja y capital de trabajo",
        "Indicadores financieros clave"
      ]
    },
    {
      icon: HiOutlineDocumentText,
      title: "Control Interno y Auditoría",
      topics: [
        "Sistemas de control interno empresarial",
        "Auditoría interna y externa",
        "Gestión de riesgos operativos",
        "Cumplimiento normativo"
      ]
    }
  ];

  const benefits = [
    {
      title: "Equipo capacitado y competente",
      description: "Personal con conocimientos actualizados que agregan valor a tu empresa."
    },
    {
      title: "Reducción de errores operativos",
      description: "Menor riesgo de incumplimiento y errores en procesos contables y fiscales."
    },
    {
      title: "Toma de decisiones informada",
      description: "Tu equipo comprende mejor los números y puede contribuir estratégicamente."
    },
    {
      title: "Actualización normativa constante",
      description: "Mantén a tu empresa al día con cambios en leyes y regulaciones."
    }
  ];

  const methodology = [
    {
      number: "01",
      title: "Diagnóstico de necesidades",
      description: "Identificamos las áreas de capacitación prioritarias para tu equipo."
    },
    {
      number: "02",
      title: "Diseño personalizado",
      description: "Creamos un programa adaptado a tu industria y nivel de conocimiento."
    },
    {
      number: "03",
      title: "Capacitación interactiva",
      description: "Sesiones prácticas con casos reales y ejercicios aplicables."
    },
    {
      number: "04",
      title: "Seguimiento y certificación",
      description: "Evaluamos el aprendizaje y entregamos certificados oficiales."
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
              Capacitación{' '}
              <span className="text-[#1c9d9f]">Empresarial</span>
            </h1>
          </TitleAnimation>

          <TextAnimation>
            <p className="font-montserrat text-[#9a9faf] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              Programas de formación especializada en temas contables, fiscales y financieros diseñados 
              para empoderar a tu equipo con conocimiento actualizado y herramientas prácticas que 
              mejoran la gestión interna de tu empresa.
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

      {/* SECCIÓN: ÁREAS DE CAPACITACIÓN */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#2d2d38] mb-6">
              <RevealText>Áreas de Capacitación</RevealText>
            </h2>
            <FadeInWhenVisible delay={0.2}>
              <p className="font-montserrat text-[#555] text-lg max-w-3xl mx-auto">
                Formación integral en las áreas clave que tu empresa necesita para operar con 
                excelencia y cumplimiento normativo.
              </p>
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <AnimatedCard key={index} delay={0.1 + index * 0.1}>
                  <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-[#1c9d9f]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-[#1c9d9f]" />
                      </div>
                      <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#2d2d38]">
                        {area.title}
                      </h3>
                    </div>

                    <div className="w-20 h-1 bg-[#1c9d9f] rounded-full mb-6"></div>

                    <ul className="space-y-3">
                      {area.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <HiOutlineCheckCircle className="w-5 h-5 text-[#1c9d9f] flex-shrink-0 mt-0.5" />
                          <span className="font-montserrat text-[#555]">{topic}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </AnimatedCard>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECCIÓN: METODOLOGÍA */}
      <section className="w-full bg-gradient-to-b from-white to-[#f8f9fa] py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#2d2d38] mb-6">
              <RevealText>Nuestra Metodología</RevealText>
            </h2>
            <FadeInWhenVisible delay={0.2}>
              <p className="font-montserrat text-[#555] text-lg max-w-2xl mx-auto">
                Un proceso estructurado que garantiza aprendizaje efectivo y aplicable.
              </p>
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((step, index) => (
              <AnimatedCard key={index} delay={0.1 + index * 0.1}>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-[#1c9d9f] rounded-xl flex items-center justify-center shadow-xl">
                    <span className="font-playfair text-xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-playfair text-xl font-bold text-[#2d2d38] mb-4 mt-2">
                    {step.title}
                  </h3>

                  <div className="w-12 h-1 bg-[#1c9d9f] rounded-full mb-4"></div>

                  <p className="font-montserrat text-[#555] leading-relaxed flex-grow">
                    {step.description}
                  </p>

                </div>
              </AnimatedCard>
            ))}
          </div>

        </div>
      </section>

      {/* SECCIÓN: BENEFICIOS */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12">
          
          <AnimatedCard>
            <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-3xl p-10 md:p-14 shadow-xl">
              
              <div className="text-center mb-12">
                <div className="inline-block px-5 py-3 bg-[#1c9d9f]/10 rounded-full mb-6">
                  <span className="font-montserrat text-[#1c9d9f] font-semibold text-sm uppercase tracking-wider">
                    Beneficios para tu empresa
                  </span>
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2d2d38] mb-4">
                  ¿Por qué invertir en capacitación?
                </h2>
                <p className="font-montserrat text-[#555] text-lg max-w-2xl mx-auto">
                  La capacitación de tu equipo es una inversión estratégica que genera resultados 
                  medibles y duraderos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <HiOutlineCheckCircle className="w-6 h-6 text-[#1c9d9f]" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-[#2d2d38] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="font-montserrat text-[#555] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </AnimatedCard>

        </div>
      </section>

      {/* SECCIÓN: MODALIDADES */}
      <section className="w-full bg-gradient-to-b from-white to-[#f8f9fa] py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12">
          
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2d2d38] mb-4">
              <RevealText>Modalidades de Capacitación</RevealText>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <AnimatedCard delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                <div className="w-16 h-16 bg-[#1c9d9f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <HiOutlineUsers className="w-8 h-8 text-[#1c9d9f]" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#2d2d38] mb-3">
                  Presencial
                </h3>
                <p className="font-montserrat text-[#555] leading-relaxed">
                  Sesiones en tu empresa o nuestras instalaciones con interacción directa.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                <div className="w-16 h-16 bg-[#1c9d9f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <HiOutlinePresentationChartLine className="w-8 h-8 text-[#1c9d9f]" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#2d2d38] mb-3">
                  Virtual
                </h3>
                <p className="font-montserrat text-[#555] leading-relaxed">
                  Capacitaciones en línea en tiempo real con plataformas interactivas.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                <div className="w-16 h-16 bg-[#1c9d9f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <HiOutlineAcademicCap className="w-8 h-8 text-[#1c9d9f]" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#2d2d38] mb-3">
                  Híbrida
                </h3>
                <p className="font-montserrat text-[#555] leading-relaxed">
                  Combinación de sesiones presenciales y virtuales según tus necesidades.
                </p>
              </div>
            </AnimatedCard>

          </div>

        </div>
      </section>

      <FinalCTA />

    </main>
  );
}