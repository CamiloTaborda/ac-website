"use client";

import ScrollIndicator from 'app/components/ScrollIndicator';
import Link from 'next/link';
import { 
  HiOutlineCalculator,
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiOutlineCheckCircle,
  HiArrowLeft,
  HiOutlineChatBubbleLeftRight
} from "react-icons/hi2";
import useSmoothScroll from 'app/hooks/useSmoothScroll';
import FinalCTA from 'app/components/FinalCTA';
import { TitleAnimation } from 'app/components/Animations/TitleAnimation';
import { TextAnimation } from 'app/components/Animations/TextAnimation';
import AnimatedCard from 'app/components/Animations/AnimatedCard';
import RevealText from 'app/components/Animations/RevealText';
import FadeInWhenVisible from 'app/components/Animations/FadeWhenVisible';

export default function AsesoriaContable() {
  useSmoothScroll();

  const features = [
    "Entendimiento del negocio",
    "Conciliaciones bancarias",
    "Informes financieros",
    "Declaraciones de renta",
    "Índices y opinión sobre el negocio",
    "Interpretación y registro",
    "Análisis y depuración",
    "Informes auxiliares"
  ];

  const process = [
    {
      number: "01",
      title: "Revisión de Información",
      description: "Análisis exhaustivo de la documentación contable y financiera de tu empresa.",
      icon: HiOutlineDocumentText
    },
    {
      number: "02",
      title: "Proceso Contable",
      description: "Registro, clasificación y procesamiento de todas las operaciones económicas.",
      icon: HiOutlineCalculator
    },
    {
      number: "03",
      title: "Informes y Análisis",
      description: "Entrega de informes financieros, tributarios y análisis estratégicos del negocio.",
      icon: HiOutlineChartBar
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/40 flex items-center overflow-hidden">
        <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 md:px-12">
          
          {/* Breadcrumb */}
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


          {/* Título */}
          <h1 className="font-playfair text-left text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1]">
            Asesoría{' '}
            <span className="text-[#1c9d9f]">Contable</span>
          </h1>
</TitleAnimation>
          {/* Descripción principal */}
          <TextAnimation>
          <p className="font-montserrat text-[#9a9faf] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            Prestamos un servicio de manera oportuna, confiable y eficaz mediante profesionales 
            altamente calificados y con experiencia afines a sus necesidades.
          </p>
          </TextAnimation>

          {/* Botones CTA */}
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

      {/* SECCIÓN: QUÉ HACEMOS */}
      <section className="w-full min-h-screen bg-white flex items-center py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* IZQUIERDA - Contenido */}
            <AnimatedCard>
            <div className='bg-gradient-to-br from-[#f8f9fa] to-white rounded-3xl p-8 md:p-10 shadow-xl h-full'>
              <div className="inline-block px-4 py-2 bg-[#1c9d9f]/10 rounded-full mb-6">
                <span className="font-montserrat text-[#1c9d9f] font-semibold text-sm uppercase tracking-wider">
                  Nuestro enfoque
                </span>
              </div>

              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-6">
                Preparamos, prevenimos y anticipamos
              </h2>

              <div className="space-y-4 font-montserrat text-[#555] text-lg leading-relaxed">
                <p>
                  Asesoramos y apoyamos el proceso financiero y contable de la empresa, 
                  <span className="text-[#1c9d9f] font-semibold"> minimizando los riesgos</span> y 
                  enfocados en la prestación de un servicio con calidad y eficiencia.
                </p>
                <p>
                  Cumplimos las funciones propias del contador para su empresa, entregando 
                  informes oportunos y en línea, aplicando nuestro proceso integral que 
                  abarca desde la revisión hasta el análisis financiero estratégico.
                </p>
              </div>

              <div className="mt-8 flex items-start gap-4 p-6 bg-[#f8f9fa] rounded-2xl border-l-4 border-[#1c9d9f]">
                <HiOutlineCheckCircle className="w-6 h-6 text-[#1c9d9f] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair text-xl font-bold text-[#2d2d38] mb-2">
                    Compromiso de calidad
                  </h3>
                  <p className="font-montserrat text-[#555]">
                    Informes oportunos, análisis detallados y toma de decisiones basada en datos reales.
                  </p>
                </div>
              </div>
            </div>
            </AnimatedCard>

            {/* DERECHA - Lista de características */}
            <AnimatedCard delay={0.2}>
            <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-3xl p-8 md:p-10 shadow-xl h-full">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#2d2d38] mb-8">
                ¿Qué incluye?
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-[#1c9d9f]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1c9d9f] transition-colors duration-300">
                      <HiOutlineCheckCircle className="w-5 h-5 text-[#1c9d9f] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-montserrat text-[#2d2d38] font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            </AnimatedCard>

          </div>
        </div>
      </section>

      {/* SECCIÓN: NUESTRO PROCESO */}
      <section className="w-full min-h-screen bg-white flex items-center py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
          
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#2d2d38] mb-6">
              <RevealText>Nuestro Proceso</RevealText>
            </h2>
            <FadeInWhenVisible delay={0.2}>
            <p className="font-montserrat text-[#555] text-lg max-w-2xl mx-auto">
              Un enfoque estructurado en tres fases para garantizar precisión y resultados óptimos.
            </p>
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {process.map((step, index) => {
    const Icon = step.icon;
    return (
      <div key={index} className="relative group">

        {index < process.length - 1 && (
          <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-[#1c9d9f]/20"></div>
        )}

        <AnimatedCard delay={0.4}>
          <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 min-h-[300px] flex flex-col">

            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#1c9d9f] rounded-2xl flex items-center justify-center shadow-xl">
              <span className="font-playfair text-2xl font-bold text-white">
                {step.number}
              </span>
            </div>

            <div className="w-16 h-16 bg-[#1c9d9f]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1c9d9f] transition-colors duration-300">
              <Icon className="w-8 h-8 text-[#1c9d9f] group-hover:text-white transition-colors duration-300" />
            </div>

            <h3 className="font-playfair text-xl md:text-2xl font-bold text-[#2d2d38] mb-4">
              {step.title}
            </h3>

            <div className="w-12 h-1 bg-[#1c9d9f] rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>

            <p className="font-montserrat text-[#555] leading-relaxed">
              {step.description}
            </p>
          </div>
        </AnimatedCard>
      </div>
    );
  })}
</div>


        </div>
      </section>

      {/* SECCIÓN: CTA FINAL */}
      <FinalCTA />

    </main>
  );
}