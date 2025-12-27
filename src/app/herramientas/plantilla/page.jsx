"use client";

import Link from 'next/link';
import { 
  HiArrowRight,
  HiCheckCircle,
  HiShieldCheck,
  HiClock,
  HiDocumentText,
  HiCalculator,
  HiChartBar,
  HiCog,
  HiOutlineBolt,
  HiEye,
  HiOutlineArrowDownTray,
  HiCurrencyDollar,
  HiArrowLeft,
  HiOutlineChatBubbleLeftRight
} from "react-icons/hi2";
import { TitleAnimation } from 'app/components/Animations/TitleAnimation';
import { TextAnimation } from 'app/components/Animations/TextAnimation';
import FadeInWhenVisible from 'app/components/Animations/FadeWhenVisible';
import useSmoothScroll from 'app/hooks/useSmoothScroll';
import ScrollIndicator from 'app/components/ScrollIndicator';
import RevealText from 'app/components/Animations/RevealText';
import AnimatedCard from 'app/components/Animations/AnimatedCard';

export default function PlantillaPage() {
  useSmoothScroll();

  const features = [
    {
      icon: HiCalculator,
      title: "Cálculos Automáticos",
      description: "Fórmulas preconfiguradas que calculan automáticamente retenciones, deducciones y saldo a pagar/favor."
    },
    {
      icon: HiDocumentText,
      title: "Formularios Oficiales",
      description: "Formato basado en los formularios oficiales de la DIAN para Personas Naturales."
    },
    {
      icon: HiShieldCheck,
      title: "100% Normativa Vigente",
      description: "Actualizada con la normativa tributaria colombiana 2025, incluyendo todas las tarifas vigentes."
    },
    {
      icon: HiChartBar,
      title: "Análisis Visual",
      description: "Gráficos y tablas dinámicas para visualizar tu situación tributaria de forma clara."
    },
    {
      icon: HiCog,
      title: "Completamente Personalizable",
      description: "Adapta la plantilla a tus necesidades específicas, añade o modifica campos según requieras."
    },
    {
      icon: HiOutlineBolt,
      title: "Fácil de Usar",
      description: "Interfaz intuitiva con instrucciones claras. No necesitas ser experto en Excel."
    }
  ];

  const included = [
    "Declaración de Renta Personas Naturales A.G. (Asalariados y Generales)",
    "Cédula de rentas de trabajo",
    "Cédula de rentas de capital",
    "Cédula de rentas no laborales",
    "Cálculo de retención en la fuente",
    "Determinación de saldo a pagar o saldo a favor",
    "Instructivo paso a paso",
    "Soporte por correo electrónico (30 días)",
    "Actualizaciones gratuitas durante el año 2025"
  ];

  const benefits = [
    {
      title: "Ahorra tiempo",
      description: "Reduce de horas a minutos el tiempo de preparación de tu declaración.",
      icon: HiClock
    },
    {
      title: "Evita errores",
      description: "Minimiza errores de cálculo con fórmulas validadas y probadas.",
      icon: HiShieldCheck
    },
    {
      title: "Maximiza deducciones",
      description: "Identifica todas las deducciones y beneficios fiscales aplicables.",
      icon: HiCurrencyDollar
    }
  ];

  const screenshots = [
    {
      title: "Vista General",
      description: "Panel principal con resumen ejecutivo"
    },
    {
      title: "Cédulas de Renta",
      description: "Detalle de todas las cédulas"
    },
    {
      title: "Análisis Tributario",
      description: "Gráficos y estadísticas"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION - DISEÑO LIMPIO SPLIT SCREEN */}
<section className="relative w-full min-h-screen bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/40 flex items-center overflow-hidden">
      <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 md:px-12 mt-20 mb-20">
        
        {/* Botón volver */}
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
</TitleAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* COLUMNA IZQUIERDA: Información */}
          <div>
            <TitleAnimation>
            <h1 className="w-full font-playfair text-left text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1]">
              Liquidador de Renta
            </h1>
            </TitleAnimation>
            <TextAnimation>
            <p className="font-montserrat text-[#9a9faf] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              Plantilla profesional en Excel para liquidar la declaración de renta de Personas Naturales Asalariados y Generales. 
              Ahorra tiempo, evita errores y cumple con la normativa DIAN 2025.
            </p>
            </TextAnimation>
            <TitleAnimation>
            <div className="flex items-center gap-3 pt-4 border-t border-white/10 w-fit">
              <HiShieldCheck className="w-5 h-5 text-[#1c9d9f]" />
              <span className="font-montserrat text-[#9a9faf] text-xs sm:text-sm">
                Garantía de satisfacción 100% • Actualizaciones 2025
              </span>
            </div>
            </TitleAnimation>
          </div>

          {/* COLUMNA DERECHA: Tarjeta de Compra */}
          <FadeInWhenVisible delay={0.2} initial>
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl lg:ml-auto w-full max-w-[500px]">
                
                {/* --- NUEVO ICONO DE PLANTILLA --- */}
                <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#1c9d9f]/20 flex items-center justify-center border border-[#1c9d9f]/30">
                        <HiDocumentText className="w-7 h-7 text-[#1c9d9f]" />
                    </div>
                    {/* Badge opcional de formato */}
                    <div className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">
                        <span className="text-xs font-montserrat text-white/60 font-semibold tracking-wide">XLSX</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 mb-2">
                    <span className="text-[#9a9faf] font-montserrat text-sm font-medium tracking-wide uppercase">Pago único</span>
                </div>

                <div className="flex items-baseline gap-3 mb-8">
                    <span className="font-playfair text-5xl sm:text-6xl font-bold text-white">
                        $150.000
                    </span>
                    <span className="font-montserrat text-[#9a9faf] text-xl">
                        COP
                    </span>
                </div>

                <div className="flex flex-col gap-4">
                    <Link href="https://wa.me/573146623630?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20sobre%20sus%20servicios"
                    target="_blank" 
                    className="w-full group relative px-8 py-4 rounded-xl font-montserrat font-semibold bg-[#1c9d9f] text-white hover:bg-[#168788] transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[#1c9d9f]/40 hover:scale-[1.02] flex items-center justify-center gap-3 text-base cursor-pointer">
                        <HiOutlineArrowDownTray className="w-5 h-5" />
                        <span className="relative z-10">Comprar ahora</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    </Link>
                    
                    <Link
                    href="https://wa.me/573146623630?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer" 
                    className="w-full px-8 py-4 rounded-xl font-montserrat font-semibold bg-white/5 text-white hover:bg-white/10 transition-all duration-300 border border-white/10 flex items-center justify-center gap-3 text-base">
                        <span className="relative z-10 flex items-center gap-2">
                                        <HiOutlineChatBubbleLeftRight className="text-xl" />
                                        Solicitar información
                                      </span>
                    </Link>
                </div>

                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#1c9d9f]/20 rounded-full blur-[60px]"></div>
            </div>
          </div>
          </FadeInWhenVisible>

        </div>
      </div>
      <ScrollIndicator />
    </section>

      {/* CARACTERÍSTICAS PRINCIPALES */}
      <section className="w-full bg-white py-20 md:py-32">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
          
          {/* Título */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#1c9d9f]/10 rounded-full mb-4">
              <span className="font-montserrat text-[#1c9d9f] font-semibold text-sm uppercase tracking-wider">
                <RevealText>Características principales</RevealText>
              </span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-4">
              <RevealText delay={0.2}>Todo lo que necesitas en una plantilla</RevealText>
            </h2>
            <span className="font-montserrat text-[#555] text-lg max-w-2xl mx-auto">
              <RevealText delay={0.4}>Diseñada por expertos contables para simplificar tu declaración de renta</RevealText>
            </span>
          </div>

          {/* Grid de características */}
          <AnimatedCard delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#1c9d9f]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1c9d9f]/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#1c9d9f]" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-[#2d2d38] mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-montserrat text-[#555] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
          </AnimatedCard>

        </div>
      </section>

      {/* QUÉ INCLUYE */}
<section className="w-full bg-gradient-to-b from-white to-[#f8f9fa] py-20 md:py-32">
  <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

      {/* Contenido */}
      <div className="bg-[#1c9d9f]/5 rounded-xl h-full flex flex-col p-10 justify-center items-center rounded-xl">
        <div className="inline-block px-4 py-2 bg-[#1c9d9f]/10 rounded-full mb-4">
          <span className="font-montserrat text-[#1c9d9f] font-semibold text-sm uppercase tracking-wider">
            <RevealText>Contenido completo</RevealText>
          </span>
        </div>

        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-6">
          <RevealText delay={0.2}>¿Qué incluye la plantilla?</RevealText>
        </h2>

        <span className="font-montserrat text-[#555] text-lg leading-relaxed mb-8">
          <RevealText delay={0.4}>
            Un paquete completo con todo lo necesario para liquidar tu declaración de renta de forma profesional.
          </RevealText>
        </span>
      </div>

      {/* Visual */}
      <FadeInWhenVisible delay={0.2}>
        <div className="space-y-4 bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/40 p-10 border border-0 rounded-xl h-full flex flex-col">
          {included.map((item, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div className="w-6 h-6 bg-[#1c9d9f]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#1c9d9f]/20 transition-colors duration-300">
                <HiCheckCircle className="w-4 h-4 text-[#1c9d9f]" />
              </div>
              <span className="font-montserrat text-white font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </FadeInWhenVisible>

    </div>
  </div>
</section>


      {/* BENEFICIOS */}
      <section className="w-full bg-white py-20 md:py-32">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
          
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-4">
              <RevealText>¿Por qué elegir nuestra plantilla?</RevealText>
            </h2>
          </div>
         <FadeInWhenVisible delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1c9d9f] to-[#168788] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-[#2d2d38] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-montserrat text-[#555] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
          </FadeInWhenVisible>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/40 py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
          
          <div className="mx-auto text-center">
            
            <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              <RevealText>Comienza a liquidar tu renta hoy mismo</RevealText>
            </h3>
            
            <span className="font-montserrat text-[#9a9faf] text-lg mb-10">
              <RevealText delay={0.2}>Descarga la plantilla y empieza a trabajar en menos de 5 minutos. 
              Pago único, actualizaciones incluidas para 2025.</RevealText>
            </span>

            {/* Precio destacado */}
            <FadeInWhenVisible delay={0.4}>
            <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 mb-10 border border-white/20 mt-10 
  flex-col sm:flex-row">
              <div>
                <span className="font-montserrat text-[#9a9faf] text-sm block mb-1">Inversión única</span>
                <span className="font-playfair text-4xl md:text-5xl font-bold text-white">$150.000 COP</span>
              </div>
              <div className="h-0 md:h-12 w-px bg-white/20"></div>
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <HiCheckCircle className="w-4 h-4 text-[#1c9d9f]" />
                  <span className="font-montserrat text-white text-sm">Actualizaciones 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCheckCircle className="w-4 h-4 text-[#1c9d9f]" />
                  <span className="font-montserrat text-white text-sm">Soporte 30 días</span>
                </div>
              </div>
            </div>
            </FadeInWhenVisible>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <FadeInWhenVisible delay={0.6}>
              <Link href="https://wa.me/573146623630?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20sobre%20sus%20servicios"
              target="_blank"
               className="group relative px-10 py-5 rounded-xl font-montserrat font-bold text-lg bg-[#1c9d9f] text-white hover:bg-[#168788] transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[#1c9d9f]/40 hover:scale-105 flex items-center gap-3 cursor-pointer">
                <HiOutlineArrowDownTray className="w-6 h-6" />
                <span className="relative z-10">Comprar plantilla</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </Link>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.8}>
              <Link
                href="https://wa.me/573146623630?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 rounded-xl font-montserrat font-semibold text-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 flex items-center gap-3"
              >
                ¿Tienes dudas? Contáctanos
                <HiArrowRight className="w-5 h-5" />
              </Link>
              </FadeInWhenVisible>
            </div>

            <p className="font-montserrat text-[#9a9faf] text-sm mt-8">
              Descarga inmediata después del pago • Garantía de satisfacción 100%
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}