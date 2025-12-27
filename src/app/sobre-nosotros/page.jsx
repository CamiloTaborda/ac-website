"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineHeart,
  HiOutlineTrophy
} from "react-icons/hi2";
import useSmoothScroll from "app/hooks/useSmoothScroll";
import ScrollIndicator from "app/components/ScrollIndicator";
import { TitleAnimation } from "app/components/Animations/TitleAnimation";
import { TextAnimation } from "app/components/Animations/TextAnimation";
import RevealText from "app/components/Animations/RevealText";
import FadeInWhenVisible from "app/components/Animations/FadeWhenVisible";
import AnimatedCard from "app/components/Animations/AnimatedCard";

export default function AboutUs() {
  useSmoothScroll();
  const team = [
    {
      name: "Yeny Taborda",
      role: "CEO y Revisor Fiscal",
      image: "/photos/yeny.jpeg"
    },
    {
      name: "Santiago Ordoñez",
      role: "Contador Público",
      image: "/photos/santiago.jpeg"
    },
    {
      name: "Isabella Muñoz",
      role: "Contador Público",
      image: "/photos/isabella.jpeg"
    }
  ];

  const principles = [
    {
      icon: HiOutlineHeart,
      title: "Compromiso",
      description: "Con nuestros clientes, con visión en el futuro y conscientes del presente."
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Confiabilidad",
      description: "Respaldo profesional y seriedad en cada uno de nuestros servicios."
    },
    {
      icon: HiOutlineLightBulb,
      title: "Innovación",
      description: "Aplicamos metodologías internacionales y mejores prácticas actualizadas."
    },
    {
      icon: HiOutlineTrophy,
      title: "Excelencia",
      description: "La convicción de hacer las cosas bien desde el primer momento."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/40 flex items-center overflow-hidden">
        <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 md:px-12">
          <TitleAnimation>
          <h1 className="font-playfair text-left text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-8xl font-bold leading-[1.1] mt-20 2xl:mt-0">
            ¿Quiénes{' '}
            <span className="text-[#1c9d9f]">somos?</span>
          </h1>
          </TitleAnimation>
          <TextAnimation>
          <div className="mt-10 space-y-6 max-w-4xl">
            <p className="font-montserrat text-[#9a9faf] text-sm lg:text-md 2xl:text-xl leading-relaxed">
              Somos un equipo de profesionales especializados en Revisoría Fiscal, Contaduría Pública 
              y servicios contables, comprometidos con la <span className="text-[#1c9d9f] font-semibold">excelencia y transparencia</span> en 
              cada proyecto que emprendemos.
            </p>

            <p className="font-montserrat text-[#9a9faf] text-sm lg:text-md 2xl:text-xl leading-relaxed">
              <span className="text-white font-semibold">Nuestra misión</span> es entender las operaciones particulares 
              de cada compañía y brindar un acompañamiento integral que apoye a la administración en la 
              planeación, organización y dirección de sus negocios, siempre bajo los más altos estándares 
              de calidad profesional.
            </p>

            <p className="font-montserrat text-[#9a9faf] text-sm lg:text-md 2xl:text-xl leading-relaxed">
              <span className="text-white font-semibold">Nuestra visión</span> es ser el aliado estratégico de confianza 
              para empresas que buscan seguridad financiera y claridad en sus decisiones. Trabajamos con 
              <span className="text-[#1c9d9f] font-semibold"> Normas Internacionales de Auditoría (NIA)</span>, garantizando 
              razonabilidad y confiabilidad en cada uno de nuestros servicios.
            </p>

            <p className="font-montserrat text-[#9a9faf] text-sm lg:text-md 2xl:text-xl leading-relaxed">
              Nuestro compromiso es con el presente y el futuro de nuestros clientes, 
              <span className="text-white font-semibold"> con la convicción de hacer las cosas bien</span> desde el primer momento.
            </p>
          </div>
          </TextAnimation>
          <TitleAnimation>
          <div className="flex items-center gap-3 mt-10 mb-10 sm:mb-0">
            <div className="w-16 h-1.5 bg-[#1c9d9f] rounded-full"></div>
            <p className="text-[#9a9faf] font-montserrat text-sm uppercase tracking-wider">
              Compromiso, excelencia y confianza
            </p>
          </div>
          </TitleAnimation>
        </div>
        <ScrollIndicator />
      </section>

      {/* SECCIÓN: PRINCIPIOS */}
      <section className="w-full bg-white py-20 md:py-32">
        <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 md:px-12">
          
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#1c9d9f]/10 rounded-full mb-4">
              <span className="font-montserrat text-[#1c9d9f] font-semibold text-sm uppercase tracking-wider">
                <RevealText>Lo que nos define</RevealText>
              </span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-6">
              <RevealText delay={0.2}>Nuestros principios</RevealText>
            </h2>
            <span className="font-montserrat text-[#555] text-lg max-w-2xl mx-auto">
              <RevealText delay={0.4}>Los valores que guían cada una de nuestras acciones y decisiones empresariales.</RevealText>
            </span>
          </div>
          <FadeInWhenVisible delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center"
                >
                  <div className="w-16 h-16 bg-[#1c9d9f]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#1c9d9f] transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#1c9d9f]" />
                  </div>

                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-[#2d2d38] mb-4">
                    {principle.title}
                  </h3>

                  <div className="w-12 h-1 bg-[#1c9d9f] rounded-full mb-4 mx-auto"></div>

                  <p className="font-montserrat text-[#555] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
          </FadeInWhenVisible>

        </div>
      </section>

      {/* SECCIÓN: EXPERIENCIA */}
      <section className="w-full bg-gradient-to-b from-white to-[#f8f9fa] py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* IZQUIERDA */}
            <AnimatedCard>
            <div>
              <div className="inline-block px-4 py-2 bg-[#1c9d9f]/10 rounded-full mb-6">
                <span className="font-montserrat text-[#1c9d9f] font-semibold text-sm uppercase tracking-wider">
                  Trayectoria
                </span>
              </div>

              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-6">
                Años de experiencia que nos respaldan
              </h2>

              <div className="w-16 h-1.5 bg-[#1c9d9f] rounded-full mb-8"></div>

              <p className="font-montserrat text-[#555] text-lg leading-relaxed mb-6">
                Nuestro equipo cuenta con amplia experiencia en el manejo contable, tributario y 
                financiero en diversos sectores económicos.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1c9d9f] rounded-full"></div>
                  <span className="font-montserrat text-[#2d2d38] font-medium">Sector comercial e industrial</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1c9d9f] rounded-full"></div>
                  <span className="font-montserrat text-[#2d2d38] font-medium">Empresas de servicios</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1c9d9f] rounded-full"></div>
                  <span className="font-montserrat text-[#2d2d38] font-medium">Entidades sin ánimo de lucro</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1c9d9f] rounded-full"></div>
                  <span className="font-montserrat text-[#2d2d38] font-medium">Persona Natural</span>
                </div>
              </div>
            </div>
            </AnimatedCard>

            {/* DERECHA */}
            <AnimatedCard delay={0.2}>
            <div className="bg-gradient-to-br from-[#1c9d9f] to-[#168788] rounded-3xl p-12 md:p-16 text-white shadow-2xl">
              <HiOutlineUserGroup className="w-16 h-16 text-white/80 mb-6" />
              <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                Más de 20 años
              </h3>
              <p className="font-montserrat text-white/90 text-lg leading-relaxed">
                De trayectoria comprobada en servicios contables, fiscales y de auditoría que hablan 
                por sí solos de nuestra seriedad, compromiso y el respaldo que ofrecemos a cada cliente.
              </p>
            </div>
            </AnimatedCard>

          </div>
        </div>
      </section>

      {/* SECCIÓN: EQUIPO */}
      <section className="w-full bg-white py-20 md:py-32">
        <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 md:px-12">
          
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#1c9d9f]/10 rounded-full mb-4">
              <span className="font-montserrat text-[#1c9d9f] font-semibold text-sm uppercase tracking-wider">
                <RevealText>Conoce a</RevealText>
              </span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-6">
              <RevealText delay={0.2}>Nuestro equipo</RevealText>
            </h2>
            <span className="font-montserrat text-[#555] text-lg max-w-2xl mx-auto">
              <RevealText delay={0.4}>Profesionales altamente calificados comprometidos con tu éxito empresarial.</RevealText>
            </span>
          </div>
          <FadeInWhenVisible delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Foto completa */}
                <div className="relative w-full h-100 2xl:h-120 overflow-hidden bg-[#f8f9fa]">
                <Image
                src={member.image} 
                alt={member.name}
                fill
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d38]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </div>

                {/* Info debajo */}
                <div className="p-8 text-center">
                  <h3 className="font-playfair text-2xl md:text-2xl font-bold text-[#2d2d38] mb-2">
                    {member.name}
                  </h3>
                  
                  <div className="inline-block px-4 py-1.5 bg-[#1c9d9f]/10 rounded-full">
                    <span className="font-montserrat text-[#1c9d9f] font-semibold text-sm">
                      {member.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </FadeInWhenVisible>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/40 py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 md:px-12 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            <RevealText>¿Listo para trabajar con nosotros?</RevealText>
          </h2>
          <span className="font-montserrat text-[#9a9faf] text-lg max-w-2xl mx-auto mb-10">
            <RevealText delay={0.2}>Descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales con seguridad y confianza.</RevealText>
          </span>
          <FadeInWhenVisible delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="https://wa.me/573146623630?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20sobre%20sus%20servicios"
              target="_blank"
              className="group relative px-8 py-4 rounded-xl font-montserrat font-semibold bg-[#1c9d9f] text-white hover:bg-[#168788] transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[#1c9d9f]/40 hover:scale-105 flex items-center justify-center gap-3"
            >
              <span className="relative z-10">Solicitar asesoría</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </Link>
          </div>
          </FadeInWhenVisible>
        </div>
      </section>

    </main>
  );
}