"use client";

import { 
  HiOutlineCalendar, 
  HiOutlineChatBubbleLeftRight, 
  HiCheckCircle, 
  HiArrowUpRight,
  HiUsers,
  HiOutlineCalculator,
  HiOutlineArrowDownTray,
  HiCheckBadge  
} from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";
import useSmoothScroll from "app/hooks/useSmoothScroll";
import ScrollIndicator from "app/components/ScrollIndicator";
import ClientLogosSection from "app/components/ClientLogosSection";
import { TitleAnimation } from "app/components/Animations/TitleAnimation";
import { TextAnimation } from "app/components/Animations/TextAnimation";
import RevealText from "app/components/Animations/RevealText";
import Link from "next/link";
import FadeInWhenVisible from "app/components/Animations/FadeWhenVisible";
import AnimatedCard from "app/components/Animations/AnimatedCard";
import FAQSection from "app/components/FAQSection";

export default function Home() {
  useSmoothScroll();

  return (
    <main className="min-h-screen">
      <section className="w-full h-screen bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/40 flex items-center">
        <div className="max-w-[1800px] mx-auto w-full mt-20 px-6 sm:px-8 md:px-12">

          {/* TÍTULO */}
          <TitleAnimation>
          <h1
            className="font-playfair text-left text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1]"
          >
            Contabilidad clara, confiable<br />
            y <span className="text-[#1c9d9f]">sin complicaciones.</span>
            
          </h1>
          </TitleAnimation>
          {/* SUBTÍTULO */}
          <TextAnimation>
          <p
            className="text-[#9a9faf] font-montserrat text-left text-lg md:text-xl mt-6 max-w-xl"
          >
            Servicios contables, fiscales y financieros diseñados para que tu
            empresa crezca con total tranquilidad.
          </p>
          </TextAnimation>
          {/* BOTONES */}
          <TitleAnimation>
<div className="flex flex-col sm:flex-row gap-4 mt-10">

  {/* BOTÓN AGENDA */}
  <Link
  href="https://cal.com/asesorias-contables-yxogzx/asesorias-contables-y-tributarias"
  target="_blank"
  className="group relative px-8 py-3 rounded-xl font-montserrat font-semibold bg-[#1c9d9f] text-white hover:bg-[#168788] transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[#1c9d9f]/40 hover:scale-105 flex items-center gap-3 cursor-pointer"
>
    {/* Contenido */}
    <span className="relative z-10 flex items-center gap-2">
      <HiOutlineCalendar className="text-xl" />
      Agendar asesoría
    </span>

    {/* Efecto brillo */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
</Link>

  {/* BOTÓN WHATSAPP */}
  <Link
    href="https://wa.me/573146623630?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20contable"
    target="_blank"
    className="group relative px-8 py-3 rounded-xl font-montserrat font-semibold border border-[#1c9d9f] text-[#1c9d9f] hover:bg-[#1c9d9f] hover:text-white transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[#1c9d9f]/40 hover:scale-105 flex items-center gap-3"
  >
    {/* Contenido */}
    <span className="relative z-10 flex items-center gap-2">
      <HiOutlineChatBubbleLeftRight className="text-xl" />
      WhatsApp
    </span>

    {/* Efecto brillo */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
  </Link>

</div>
</TitleAnimation>
        </div>
        <ScrollIndicator />
      </section>

      <section className="w-full min-h-screen bg-white flex items-center py-20 md:py-24">
  <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">

    {/* TÍTULO */}
    <h2 className="font-playfair text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#2d2d38] text-left">
      <RevealText>¿Qué hacemos?</RevealText>
    </h2>

    {/* SUBTÍTULO */}
    <FadeInWhenVisible delay={0.2}>
    <p className="font-montserrat text-[#2d2d38]/70 text-lg md:text-xl mt-4 text-left">
      Prestamos un servicio oportuno, confiable y eficaz gracias a profesionales
      altamente calificados. <span className="text-[#1c9d9f]">Acompañamos el proceso financiero, contable y fiscal de tu empresa,</span>
      anticipándonos a los hechos económicos y minimizando riesgos para una gestión clara
      y eficiente.
    </p>
   </FadeInWhenVisible>

    {/* CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-14">

      {/* CARD 1 */}
      
      <div className="group relative overflow-hidden border border-[#e5e7eb] rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-[#1c9d9f] hover:-translate-y-2 transition-all duration-300 bg-white">
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#1c9d9f]/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
        <AnimatedCard>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1c9d9f] group-hover:scale-110 transition-all duration-300">
            <HiCheckCircle className="w-6 h-6 text-[#1c9d9f] group-hover:text-white transition-colors duration-300" />
          </div>
          
          <h3 className="font-playfair text-2xl md:text-xl lg:text-2xl font-bold text-[#2d2d38] group-hover:text-[#1c9d9f] transition-colors duration-300">
            Servicio Confiable
          </h3>
          
          <div className="w-10 h-1 bg-[#1c9d9f] mt-3 mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
          
          <p className="font-montserrat text-[#555] group-hover:text-[#2d2d38] text-base md:text-sm lg:text-base transition-colors duration-300">
            Atendemos tus necesidades contables con precisión, seriedad y acompañamiento permanente.
          </p>
        </div>
        </AnimatedCard>
      </div>

      {/* CARD 2 */}
      
      <div className="group relative overflow-hidden border border-[#e5e7eb] rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-[#1c9d9f] hover:-translate-y-2 transition-all duration-300 bg-white">
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#1c9d9f]/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
        <AnimatedCard delay={0.2}>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1c9d9f] group-hover:scale-110 transition-all duration-300">
            <HiArrowUpRight className="w-6 h-6 text-[#1c9d9f] group-hover:text-white transition-colors duration-300"/>
          </div>
          
          <h3 className="font-playfair text-2xl md:text-xl lg:text-2xl font-bold text-[#2d2d38] group-hover:text-[#1c9d9f] transition-colors duration-300">
            Anticipación Financiera
          </h3>
          
          <div className="w-10 h-1 bg-[#1c9d9f] mt-3 mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
          
          <p className="font-montserrat text-[#555] group-hover:text-[#2d2d38] text-base md:text-sm lg:text-base transition-colors duration-300">
            Prevenimos y anticipamos hechos económicos clave para mejorar la toma de decisiones.
          </p>
        </div>
        </AnimatedCard>
      </div>

      {/* CARD 3 */}
      
      <div className="group relative overflow-hidden border border-[#e5e7eb] rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-[#1c9d9f] hover:-translate-y-2 transition-all duration-300 bg-white">
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#1c9d9f]/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
        <AnimatedCard delay={0.4}>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1c9d9f] group-hover:scale-110 transition-all duration-300">
            <HiUsers className="w-6 h-6 text-[#1c9d9f] group-hover:text-white transition-colors duration-300" />
          </div>
          
          <h3 className="font-playfair text-2xl md:text-xl lg:text-2xl font-bold text-[#2d2d38] group-hover:text-[#1c9d9f] transition-colors duration-300">
            Acompañamiento Integral
          </h3>
          
          <div className="w-10 h-1 bg-[#1c9d9f] mt-3 mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
          
          <p className="font-montserrat text-[#555] group-hover:text-[#2d2d38] text-base md:text-sm lg:text-base transition-colors duration-300">
            Asesoramos y apoyamos todo el proceso contable y financiero de tu empresa.
          </p>
        </div>
        </AnimatedCard>
      </div>

      {/* CARD 4 */}
      
      <div className="group relative overflow-hidden border border-[#e5e7eb] rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-[#1c9d9f] hover:-translate-y-2 transition-all duration-300 bg-white">
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#1c9d9f]/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
        <AnimatedCard delay={0.6}>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1c9d9f] group-hover:scale-110 transition-all duration-300">
            <AiFillStar className="w-6 h-6 text-[#1c9d9f] group-hover:text-white transition-colors duration-300" />
          </div>
          
          <h3 className="font-playfair text-2xl md:text-xl lg:text-2xl font-bold text-[#2d2d38] group-hover:text-[#1c9d9f] transition-colors duration-300">
            Calidad y Eficiencia
          </h3>
          
          <div className="w-10 h-1 bg-[#1c9d9f] mt-3 mb-4 rounded-full group-hover:w-16 transition-all duration-300"></div>
          
          <p className="font-montserrat text-[#555] group-hover:text-[#2d2d38] text-base md:text-sm lg:text-base transition-colors duration-300">
            Más de 20 años de experiencia y respuestas en menos de 24 horas.
          </p>
        </div>
        </AnimatedCard>
      </div>

    </div>

  </div>
</section>

{/* SECCIÓN 3 - NUESTROS SERVICIOS */}
<section className="w-full min-h-screen bg-[#f8f9fa] flex items-center py-20 md:py-24">
  <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">

    {/* TÍTULO */}
    <h2 className="font-playfair text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#2d2d38] text-left">
      <RevealText>Nuestros Servicios</RevealText>
    </h2>

    {/* SUBTÍTULO */}
    <FadeInWhenVisible delay={0.2}>
    <p className="font-montserrat text-[#2d2d38]/70 text-lg md:text-xl mt-4 text-left">
      Proporcionar información a los diferentes stakeholders y demás grupos de interés de una empresa 
      sobre la situación económica, los resultados operacionales y contables de la compañía con el fin 
      de brindar razonabilidad y <span className="text-[#1c9d9f]">confiabilidad en la evaluación y presentación de estados financieros.</span>
    </p>
   </FadeInWhenVisible>

    {/* GRID DE SERVICIOS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">

      {/* SERVICIO 1 */}
      <Link 
        href="/servicios/asesoria-contable"
        className="group relative overflow-hidden border border-[#e5e7eb] rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-[#1c9d9f] transition-all duration-300 bg-white cursor-pointer"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#1c9d9f]/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
        <AnimatedCard>
        <h3 className="font-playfair text-2xl md:text-xl lg:text-2xl font-bold text-[#2d2d38] group-hover:text-[#1c9d9f] transition-colors duration-300 relative z-10">
          Asesoría<br />Contable
        </h3>
        <div className="w-12 h-1 bg-[#1c9d9f] mt-4 mb-4 group-hover:w-20 transition-all duration-300"></div>
        <p className="font-montserrat text-[#555] group-hover:text-[#2d2d38] text-base md:text-sm lg:text-base transition-colors duration-300">
          Gestión integral de tu contabilidad con precisión y cumplimiento normativo actualizado.
        </p>
        </AnimatedCard>
      </Link>


      {/* SERVICIO 2 */}
      <Link 
        href="/servicios/asesoria-fiscal"
        className="group relative overflow-hidden border border-[#e5e7eb] rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-[#1c9d9f] transition-all duration-300 bg-white cursor-pointer"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#1c9d9f]/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
        <AnimatedCard delay={0.1}>
        <h3 className="font-playfair text-2xl md:text-xl lg:text-2xl font-bold text-[#2d2d38] group-hover:text-[#1c9d9f] transition-colors duration-300 relative z-10">
          Asesoría<br />Fiscal
        </h3>
        <div className="w-12 h-1 bg-[#1c9d9f] mt-4 mb-4 group-hover:w-20 transition-all duration-300"></div>
        <p className="font-montserrat text-[#555] group-hover:text-[#2d2d38] text-base md:text-sm lg:text-base transition-colors duration-300">
          Optimización tributaria y cumplimiento de obligaciones fiscales de forma estratégica.
        </p>
        </AnimatedCard>
      </Link>

      {/* SERVICIO 3 */}
      <Link 
        href="/servicios/asesoria-financiera"
        className="group relative overflow-hidden border border-[#e5e7eb] rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-[#1c9d9f] transition-all duration-300 bg-white cursor-pointer"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#1c9d9f]/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
        <AnimatedCard delay={0.3}>
        <h3 className="font-playfair text-2xl md:text-xl lg:text-2xl font-bold text-[#2d2d38] group-hover:text-[#1c9d9f] transition-colors duration-300 relative z-10">
          Asesoría<br />Financiera
        </h3>
        <div className="w-12 h-1 bg-[#1c9d9f] mt-4 mb-4 group-hover:w-20 transition-all duration-300"></div>
        <p className="font-montserrat text-[#555] group-hover:text-[#2d2d38] text-base md:text-sm lg:text-base transition-colors duration-300">
          Análisis y planeación financiera para la toma de decisiones estratégicas de tu empresa.
        </p>
        </AnimatedCard>
      </Link>

      {/* SERVICIO 4 */}
      <Link 
        href="/servicios/revisoria-fiscal"
        className="group relative overflow-hidden border border-[#e5e7eb] rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-[#1c9d9f] transition-all duration-300 bg-white cursor-pointer"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#1c9d9f]/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
        <AnimatedCard delay={0.5}>
        <h3 className="font-playfair text-2xl md:text-xl lg:text-2xl font-bold text-[#2d2d38] group-hover:text-[#1c9d9f] transition-colors duration-300 relative z-10">
          Revisoría<br />Fiscal
        </h3>
        <div className="w-12 h-1 bg-[#1c9d9f] mt-4 mb-4 group-hover:w-20 transition-all duration-300"></div>
        <p className="font-montserrat text-[#555] group-hover:text-[#2d2d38] text-base md:text-sm lg:text-base transition-colors duration-300">
          Evaluación independiente y certificación de la información financiera de tu organización.
        </p>
        </AnimatedCard>
      </Link>

      {/* SERVICIO 5 */}
      <Link 
        href="/servicios/capacitacion-empresarial"
        className="group relative overflow-hidden border border-[#e5e7eb] rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-[#1c9d9f] transition-all duration-300 bg-white cursor-pointer"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#1c9d9f]/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
        <AnimatedCard delay={0.7}>
        <h3 className="font-playfair text-2xl md:text-xl lg:text-2xl font-bold text-[#2d2d38] group-hover:text-[#1c9d9f] transition-colors duration-300 relative z-10">
          Capacitación<br />Empresarial
        </h3>
        <div className="w-12 h-1 bg-[#1c9d9f] mt-4 mb-4 group-hover:w-20 transition-all duration-300"></div>
        <p className="font-montserrat text-[#555] group-hover:text-[#2d2d38] text-base md:text-sm lg:text-base transition-colors duration-300">
          Formación especializada en temas contables, fiscales y financieros para tu equipo.
        </p>
        </AnimatedCard>
      </Link>

      {/* SERVICIO 6 */}
      <Link 
        href="/servicios/tramites-entidades-control"
        className="group relative overflow-hidden border border-[#e5e7eb] rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-[#1c9d9f] transition-all duration-300 bg-white cursor-pointer"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#1c9d9f]/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
        <AnimatedCard delay={0.9}>
        <h3 className="font-playfair text-2xl md:text-xl lg:text-2xl font-bold text-[#2d2d38] group-hover:text-[#1c9d9f] transition-colors duration-300 relative z-10">
          Trámites en Entidades<br />de Control y Vigilancia
        </h3>
        <div className="w-12 h-1 bg-[#1c9d9f] mt-4 mb-4 group-hover:w-20 transition-all duration-300"></div>
        <p className="font-montserrat text-[#555] group-hover:text-[#2d2d38] text-base md:text-sm lg:text-base transition-colors duration-300">
          Representación y gestión ante organismos oficiales y entidades reguladoras.
        </p>
        </AnimatedCard>
      </Link>

    </div>

  </div>
</section>

{/* SECCIÓN 4 - HERRAMIENTAS */}
<section className="w-full min-h-screen bg-white flex items-center py-20 md:py-24">
  <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">

    {/* TÍTULO */}
    <h2 className="font-playfair text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#2d2d38] text-left">
      <RevealText>Herramientas Disponibles</RevealText>
    </h2>

    {/* SUBTÍTULO */}
    <FadeInWhenVisible delay={0.2}>
    <p className="font-montserrat text-[#2d2d38]/70 text-lg md:text-xl mt-4 text-left">
      <span className="text-[#1c9d9f]">Facilitamos la gestión de tu empresa</span> con herramientas diseñadas para optimizar 
      procesos y ayudarte a tomar decisiones informadas de manera rápida y eficiente.
    </p>
    </FadeInWhenVisible>

    {/* GRID DE HERRAMIENTAS */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mt-12 md:mt-16">

      {/* HERRAMIENTA 1 - CALCULADORA */}
      
      <Link 
      href="/herramientas/calculadora"
      className="group relative overflow-hidden border-2 border-[#e5e7eb] rounded-3xl p-10 md:p-12 shadow-lg hover:shadow-2xl hover:border-[#1c9d9f] transition-all duration-500 bg-gradient-to-br from-white to-[#f8f9fa] cursor-pointer">
        
        {/* Decoración de fondo */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#1c9d9f]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#1c9d9f]/5 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
        <AnimatedCard>
        {/* Icono decorativo */}
        <div className="relative z-10 w-16 h-16 bg-[#1c9d9f]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1c9d9f] group-hover:scale-110 transition-all duration-300">
          <HiOutlineCalculator className="w-8 h-8 text-[#1c9d9f] group-hover:text-white transition-colors duration-300" />
        </div>

        <h3 className="font-playfair text-3xl md:text-2xl lg:text-3xl font-bold text-[#2d2d38] group-hover:text-[#1c9d9f] transition-colors duration-300 relative z-10">
          Calculadoras de Liquidación y Horas Extras
        </h3>
        
        <div className="w-16 h-1.5 bg-[#1c9d9f] mt-5 mb-6 rounded-full group-hover:w-32 transition-all duration-500"></div>
        
        <p className="font-montserrat text-[#555] group-hover:text-[#2d2d38] text-lg md:text-base lg:text-lg transition-colors duration-300 relative z-10 leading-relaxed">
          Gestiona tu nómina con precisión: calcula <span className="text-[#1c9d9f] font-bold">liquidaciones laborales completas</span> y realiza el desglose detallado de <span className="text-[#1c9d9f] font-bold">horas extras y recargos</span>. Una solución integral adaptada a la normativa colombiana vigente.
        </p>

        <div className="mt-8 relative z-10">
          <p className="inline-flex items-center gap-2 px-6 py-3 bg-[#1c9d9f] text-white font-montserrat font-semibold rounded-xl hover:bg-[#168788] hover:gap-3 transition-all duration-300"
          >
            Usar calculadoras
            <HiArrowRight className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />

          </p>
        </div>
         </AnimatedCard>
      </Link>
     

      {/* HERRAMIENTA 2 - PLANTILLA */}
      <Link
      href="/herramientas/plantilla" 
      className="group relative overflow-hidden border-2 border-[#e5e7eb] rounded-3xl p-10 md:p-12 shadow-lg hover:shadow-2xl hover:border-[#1c9d9f] transition-all duration-500 bg-gradient-to-br from-white to-[#f8f9fa] cursor-pointer">
        
        {/* Decoración de fondo */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#1c9d9f]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#1c9d9f]/5 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
        <AnimatedCard delay={0.2}>
        {/* Icono decorativo */}
        <div className="relative z-10 w-16 h-16 bg-[#1c9d9f]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1c9d9f] group-hover:scale-110 transition-all duration-300">
          <HiOutlineArrowDownTray className="w-8 h-8 text-[#1c9d9f] group-hover:text-white transition-colors duration-300" />
        </div>

        <h3 className="font-playfair text-3xl md:text-2xl lg:text-3xl font-bold text-[#2d2d38] group-hover:text-[#1c9d9f] transition-colors duration-300 relative z-10">
          Plantilla de Gestión Contable
        </h3>
        
        <div className="w-16 h-1.5 bg-[#1c9d9f] mt-5 mb-6 rounded-full group-hover:w-32 transition-all duration-500"></div>
        
        <p className="font-montserrat text-[#555] group-hover:text-[#2d2d38] text-lg md:text-base lg:text-lg transition-colors duration-300 relative z-10 leading-relaxed">
          Optimiza tu declaración de renta con nuestra <span className="text-[#1c9d9f] font-bold">plantilla automatizada para personas naturales.</span> Una herramienta técnica diseñada bajo la normativa de la DIAN para ahorrarte horas de trabajo y garantizar precisión en tus impuestos
        </p>

        <div className="mt-8 relative z-10">
          <p className="inline-flex items-center gap-2 px-6 py-3 bg-[#1c9d9f] text-white font-montserrat font-semibold rounded-xl hover:bg-[#168788] hover:gap-3 transition-all duration-300"
          >
            Descargar plantilla
            <HiOutlineArrowDownTray className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />

          </p>
        </div>
        </AnimatedCard>
      </Link>

    </div>

    {/* MENSAJE ADICIONAL */}
    <div className="mt-12 md:mt-16 text-center">
      <p className="font-montserrat text-[#2d2d38]/60 text-base md:text-lg">
        Herramientas diseñadas por profesionales para profesionales. 
        <span className="text-[#1c9d9f] font-semibold"> Listas para usar.</span>
      </p>
    </div>

  </div>
</section>

<section>
  <ClientLogosSection />
</section>

<section>
  <FAQSection />
</section>

{/* SECCIÓN 5 - CTA FINAL */}
<section className="relative w-full min-h-screen bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/40 flex items-center overflow-hidden py-20">
  
  <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full relative z-10">
    
    {/* Contenedor principal con borde y backdrop */}
    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16 lg:p-20 text-center overflow-hidden">
      {/* Título impactante */}
      <FadeInWhenVisible>
      <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 relative">
        ¿Listo para transformar la{' '}
        <span className="relative inline-block">
          <span className="relative z-10 text-[#1c9d9f]">gestión financiera</span>
        </span>
        {' '}de tu empresa?
      </h2>
      </FadeInWhenVisible>

      {/* Subtítulo persuasivo */}
      <FadeInWhenVisible delay={0.2}>
      <p className="text-[#9a9faf] font-montserrat text-lg md:text-xl lg:text-2xl mt-6 mb-10 mx-auto leading-relaxed">
        Deja de preocuparte por números complicados y dedícate a hacer crecer tu negocio. 
        Nosotros nos encargamos de tu contabilidad con{' '}
        <span className="text-white font-semibold">profesionalismo, precisión y transparencia total</span>.
      </p>
      </FadeInWhenVisible>

      {/* CTA Principal */}
      <FadeInWhenVisible delay={0.4}>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <Link href="https://wa.me/573146623630?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20contable"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-10 py-5 bg-[#1c9d9f] text-white font-montserrat font-bold text-lg rounded-2xl hover:bg-[#168788] transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-[#1c9d9f]/50 hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-3">
            Conversemos por WhatsApp
            <HiOutlineChatBubbleLeftRight className="text-xl" />
          </span>
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
        </Link>
      </div>
      </FadeInWhenVisible>

      {/* Mensaje de confianza final */}
      <p className="text-[#9a9faf] font-montserrat text-sm md:text-base mt-10 flex items-center justify-center gap-2">
        <HiCheckBadge className="w-5 h-5 text-[#1c9d9f]" />
        Primera consulta totalmente gratuita · Sin compromiso · Atención inmediata
      </p>

    </div>

  </div>
</section>
    </main>
  );
}


