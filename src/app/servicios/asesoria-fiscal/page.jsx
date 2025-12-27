"use client";

import { TitleAnimation } from "app/components/Animations/TitleAnimation";
import FinalCTA from "app/components/FinalCTA";
import { 
  HiOutlineDocumentText,
  HiOutlineChartBar,
  HiOutlineScale,
  HiOutlineCheckCircle,
  HiArrowLeft,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCalculator,
  HiOutlineClipboardDocumentCheck,
  HiOutlinePresentationChartLine
} from "react-icons/hi2";
import Link from 'next/link';
import { TextAnimation } from "app/components/Animations/TextAnimation";
import ScrollIndicator from "app/components/ScrollIndicator";
import useSmoothScroll from 'app/hooks/useSmoothScroll';
import RevealText from "app/components/Animations/RevealText";
import FadeInWhenVisible from "app/components/Animations/FadeWhenVisible";
import AnimatedCard from "app/components/Animations/AnimatedCard";

export default function AsesoriaFiscal() {
  useSmoothScroll();

  const features = [
  "Preparación y revisión de declaraciones de renta (Persona Jurídica y Natural)",
  "Planeación tributaria estratégica para la optimización de impuestos",
  "Gestión y liquidación de impuestos territoriales (ICA, Avisos y Tableros)",
  "Auditoría preventiva de archivos tributarios y medios magnéticos",
  "Asesoría en el cumplimiento de facturación y nómina electrónica",
  "Representación y respuesta ante requerimientos de la DIAN y UGPP",
  "Trámite de solicitudes de devolución y compensación de saldos a favor",
  "Consultoría permanente en cambios y reformas a la ley fiscal colombiana"
];

  const benefits = [
  {
    title: "Cumplimiento Legal",
    description: "Garantizamos que tu empresa cumpla rigurosamente con el calendario tributario y las normas de la DIAN.",
    icon: HiOutlineScale
  },
  {
    title: "Eficiencia Tributaria",
    description: "Identificamos beneficios y deducciones legales para optimizar el pago de impuestos de forma ética.",
    icon: HiOutlineCalculator
  },
  {
    title: "Protección Jurídica",
    description: "Blindamos tu operación frente a posibles sanciones o requerimientos de entes gubernamentales.",
    icon: HiOutlineClipboardDocumentCheck
  }
];

  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION - IDÉNTICO */}
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
            <span className="text-[#1c9d9f]">Fiscal</span>
          </h1>
          </TitleAnimation>
          <TextAnimation>
          <p className="font-montserrat text-[#9a9faf] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Estrategia integral para el cumplimiento de obligaciones tributarias, 
            mitigación de riesgos legales y optimización de la carga impositiva bajo el 
            marco legal vigente en Colombia.
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

      {/* SECCIÓN: BENEFICIOS PRINCIPALES - 3 COLUMNAS */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
          
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#1c9d9f]/10 rounded-full mb-4">
              <span className="font-montserrat text-[#1c9d9f] font-semibold text-sm uppercase tracking-wider">
                <RevealText>¿Por qué elegirnos?</RevealText>
              </span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-6">
              <RevealText delay={0.2}>Ventajas competitivas</RevealText>
            </h2>
            <FadeInWhenVisible delay={0.4}>
            <p className="font-montserrat text-[#555] text-lg max-w-2xl mx-auto">
              Ofrecemos un respaldo técnico y jurídico de alto nivel, diseñado para brindarte 
              <span className="text-[#1c9d9f] font-semibold"> seguridad frente a los entes de control</span> y 
              una estructura impositiva optimizada que protege tu patrimonio.
            </p>
            </FadeInWhenVisible>
          </div>
          <AnimatedCard delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                
                <div key={index} className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  
                  <div className="w-16 h-16 bg-[#1c9d9f]/10 rounded-2xl flex items-center justify-center mb-6 hover:bg-[#1c9d9f] transition-colors duration-300 group">
                    <Icon className="w-8 h-8 text-[#1c9d9f] group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-[#2d2d38] mb-4">
                    {benefit.title}
                  </h3>

                  <div className="w-12 h-1 bg-[#1c9d9f] rounded-full mb-4"></div>

                  <p className="font-montserrat text-[#555] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                
              );
            })}
          </div>
          </AnimatedCard>

        </div>
      </section>

      {/* SECCIÓN: METODOLOGÍA CON IMAGEN LATERAL */}
      <section className="w-full bg-gradient-to-b from-white to-[#f8f9fa] py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            
            {/* COLUMNA ANCHA - CONTENIDO */}
            <div className="lg:col-span-3">
              <div className="inline-block px-4 py-2 bg-[#1c9d9f]/10 rounded-full mb-6">
                <span className="font-montserrat text-[#1c9d9f] font-semibold text-sm uppercase tracking-wider">
                  <RevealText>Nuestra metodología</RevealText>
                </span>
              </div>

              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-6">
                <RevealText delay={0.2}>Estrategia tributaria preventiva</RevealText>
              </h2>

              <div className="space-y-4 font-montserrat text-[#555] text-lg leading-relaxed mb-8">
                <FadeInWhenVisible delay={0.4}>
                <p>
                  Optimizamos la carga impositiva de tu empresa mediante una <span className="text-[#1c9d9f] font-semibold">planeación fiscal rigurosa</span>, asegurando que cada beneficio tributario aplicado esté plenamente respaldado por la normativa legal vigente.
                </p>
                <p>
                  Monitoreamos constantemente los cambios en la legislación y reformas tributarias para anticipar impactos, mitigar riesgos de sanciones y garantizar una relación transparente con los entes de control como la DIAN.
                </p>
                </FadeInWhenVisible>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border-l-4 border-[#1c9d9f] shadow-lg">
                <HiOutlineCheckCircle className="w-6 h-6 text-[#1c9d9f] flex-shrink-0 mt-1" />
                <FadeInWhenVisible delay={0.6}>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-[#2d2d38] mb-2">
                    Seguridad Jurídica
                  </h3>
                  <p className="font-montserrat text-[#555]">
                    Blindamos tu operación bajo un marco ético y legal, transformando tus obligaciones fiscales en una ventaja competitiva.
                  </p>
                </div>
                </FadeInWhenVisible>
              </div>
            </div>

            {/* COLUMNA ESTRECHA - STATS/ICONOS */}
            <div className="lg:col-span-2">
              <AnimatedCard>
              <div className="bg-gradient-to-br from-[#1c9d9f] to-[#168788] rounded-3xl p-8 md:p-10 shadow-2xl text-white">
                <div className="space-y-8">
                  
                  <div className="text-center pb-6 border-b border-white/20">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <HiOutlineChartBar className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-2xl font-bold mb-2">Diagnóstico Fiscal</h4>
                    <p className="font-montserrat text-sm text-white/80">Revisión exhaustiva de cumplimientos y pasivos tributarios</p>
                  </div>

                  <div className="text-center pb-6 border-b border-white/20">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <HiOutlineScale className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-2xl font-bold mb-2">Mitigación</h4>
                    <p className="font-montserrat text-sm text-white/80">Reducción efectiva de riesgos y posibles sanciones</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <HiOutlineDocumentText className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-playfair text-2xl font-bold mb-2">Certidumbre</h4>
                    <p className="font-montserrat text-sm text-white/80">Claridad total sobre el calendario y pagos de impuestos</p>
                  </div>

                </div>
              </div>
              </AnimatedCard>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN: SERVICIOS - LISTA VERTICAL CON NÚMEROS */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
          
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-6">
              <RevealText>Servicios incluidos</RevealText>
            </h2>
            <div className="font-montserrat text-[#555] text-lg max-w-2xl mx-auto">
              <RevealText delay={0.2}>Soluciones integrales para garantizar la salud fiscal y el cumplimiento normativo de tu organización.</RevealText>
            </div>
          </div>
          <AnimatedCard delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-[#f8f9fa] to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#1c9d9f]/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1c9d9f] transition-colors duration-300">
                      <span className="font-playfair text-lg font-bold text-[#1c9d9f] group-hover:text-white transition-colors duration-300">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-montserrat text-[#2d2d38] font-semibold text-base leading-relaxed">
                      {feature}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </AnimatedCard>

        </div>
      </section>

      {/* CTA FINAL */}
      <FinalCTA />

    </main>
  );
}