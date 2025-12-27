"use client";

import ScrollIndicator from 'app/components/ScrollIndicator';
import Link from 'next/link';
import { 
  HiOutlineShieldCheck,
  HiOutlineDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlinePresentationChartLine,
  HiOutlineCheckBadge,
  HiArrowLeft,
  HiOutlineChatBubbleLeftRight,
  HiOutlineEye,
  HiOutlineScale
} from "react-icons/hi2";
import useSmoothScroll from 'app/hooks/useSmoothScroll';
import FinalCTA from 'app/components/FinalCTA';
import { TitleAnimation } from 'app/components/Animations/TitleAnimation';
import { TextAnimation } from 'app/components/Animations/TextAnimation';
import AnimatedCard from 'app/components/Animations/AnimatedCard';
import RevealText from 'app/components/Animations/RevealText';
import FadeInWhenVisible from 'app/components/Animations/FadeWhenVisible';

export default function RevisoriaFiscal() {
  useSmoothScroll();

  const methodology = [
    {
      number: "01",
      title: "Determinar Objetivos",
      description: "Establecemos los objetivos específicos que se quieren lograr con la revisoría fiscal.",
      icon: HiOutlineClipboardDocumentList
    },
    {
      number: "02",
      title: "Definir Informes",
      description: "Estructuramos los informes que se deben presentar según normativa y necesidades.",
      icon: HiOutlineDocumentCheck
    },
    {
      number: "03",
      title: "Listar Actividades",
      description: "Detallamos todas las actividades que se ejecutarán durante el proceso de auditoría.",
      icon: HiOutlineClipboardDocumentList
    },
    {
      number: "04",
      title: "Plan de Actividades",
      description: "Llevamos a cabo el plan estructurado con seguimiento continuo de cada fase.",
      icon: HiOutlinePresentationChartLine
    },
    {
      number: "05",
      title: "Conclusiones y Dictamen",
      description: "Emitimos dictamen profesional sobre los estados financieros y control interno.",
      icon: HiOutlineCheckBadge
    }
  ];

  const benefits = [
    {
      icon: HiOutlineShieldCheck,
      title: "Fe Pública Garantizada",
      description: "Atribuimos fe pública sobre la razonabilidad de los estados financieros de tu empresa."
    },
    {
      icon: HiOutlineEye,
      title: "Validación Exhaustiva",
      description: "Validamos informes y damos conceptos objetivos sobre la situación financiera real."
    },
    {
      icon: HiOutlineScale,
      title: "Control Interno",
      description: "Evaluamos y emitimos opinión externa sobre el sistema de control interno de la organización."
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
              Revisoría{' '}
              <span className="text-[#1c9d9f]">Fiscal</span>
            </h1>
          </TitleAnimation>

          <TextAnimation>
            <p className="font-montserrat text-[#9a9faf] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              Atribuimos fe pública sobre la razonabilidad de los estados financieros, validamos 
              informes y damos conceptos profesionales para promover el buen funcionamiento de tu 
              empresa mediante procesos de auditoría rigurosos.
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

      {/* SECCIÓN: QUÉ ES REVISORÍA FISCAL */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
          
          <AnimatedCard>
            <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-3xl p-10 md:p-14 shadow-xl">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* IZQUIERDA */}
                <div>
                  <div className="inline-block px-4 py-2 bg-[#1c9d9f]/10 rounded-full mb-6">
                    <span className="font-montserrat text-[#1c9d9f] font-semibold text-sm uppercase tracking-wider">
                      Auditoría Profesional
                    </span>
                  </div>

                  <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-6">
                    Opinión externa confiable
                  </h2>

                  <p className="font-montserrat text-[#555] text-lg leading-relaxed mb-6">
                    Realizamos procesos de auditoría que resultan en una <span className="text-[#1c9d9f] font-semibold">opinión 
                    externa imparcial</span> sobre los estados financieros y el sistema de control interno de tu organización.
                  </p>

                  <p className="font-montserrat text-[#555] text-lg leading-relaxed">
                    Nuestras observaciones y conceptos profesionales están diseñados para promover la transparencia, 
                    el buen funcionamiento empresarial y la confianza de stakeholders.
                  </p>
                </div>

                {/* DERECHA - BENEFICIOS */}
                <div className="space-y-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div 
                        key={index}
                        className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="w-14 h-14 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#1c9d9f] transition-colors duration-300">
                          <Icon className="w-7 h-7 text-[#1c9d9f] group-hover:text-white transition-colors duration-300" />
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
                    );
                  })}
                </div>

              </div>
            </div>
          </AnimatedCard>

        </div>
      </section>

      {/* SECCIÓN: METODOLOGÍA (TIMELINE VERTICAL) */}
      <section className="w-full bg-gradient-to-b from-white to-[#f8f9fa] py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
          
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#2d2d38] mb-6">
              <RevealText>Nuestra Metodología</RevealText>
            </h2>
            <FadeInWhenVisible delay={0.2}>
              <p className="font-montserrat text-[#555] text-lg max-w-2xl mx-auto">
                Un proceso estructurado en cinco fases para garantizar una auditoría exhaustiva y confiable.
              </p>
            </FadeInWhenVisible>
          </div>

          {/* TIMELINE VERTICAL */}
          <div className="relative">
            {/* Línea vertical central */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#1c9d9f]/20 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {methodology.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <AnimatedCard key={index} delay={0.1 + index * 0.1}>
                    <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      
                      {/* CONTENIDO */}
                      <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                          
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-[#1c9d9f]" />
                            </div>
                            <span className="font-playfair text-4xl font-bold text-[#1c9d9f]/30">
                              {step.number}
                            </span>
                          </div>

                          <h3 className="font-playfair text-2xl font-bold text-[#2d2d38] mb-3">
                            {step.title}
                          </h3>

                          <div className="w-16 h-1 bg-[#1c9d9f] rounded-full mb-4"></div>

                          <p className="font-montserrat text-[#555] leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* CÍRCULO CENTRAL (solo desktop) */}
                      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#1c9d9f] rounded-full border-4 border-white shadow-lg z-10"></div>

                      {/* ESPACIO VACÍO PARA ALINEACIÓN */}
                      <div className="hidden md:block w-5/12"></div>

                    </div>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>

          {/* RESULTADO FINAL */}
          <AnimatedCard delay={0.8}>
            <div className="mt-16 bg-gradient-to-br from-[#1c9d9f] to-[#168788] rounded-3xl p-10 text-center shadow-2xl">
              <HiOutlineCheckBadge className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="font-playfair text-3xl font-bold text-white mb-4">
                Resultado: Dictamen Profesional
              </h3>
              <p className="font-montserrat text-white/90 text-lg max-w-2xl mx-auto">
                Al finalizar el proceso, emitimos un dictamen profesional completo que incluye nuestra 
                opinión sobre los estados financieros y recomendaciones para mejorar el control interno 
                de tu organización.
              </p>
            </div>
          </AnimatedCard>

        </div>
      </section>

      <FinalCTA />

    </main>
  );
}