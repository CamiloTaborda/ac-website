"use client";

import ScrollIndicator from 'app/components/ScrollIndicator';
import Link from 'next/link';
import { 
  HiOutlineBuildingLibrary,
  HiOutlineDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineCheckCircle,
  HiArrowLeft,
  HiOutlineChatBubbleLeftRight,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineScale,
  HiOutlineUserGroup
} from "react-icons/hi2";
import useSmoothScroll from 'app/hooks/useSmoothScroll';
import FinalCTA from 'app/components/FinalCTA';
import { TitleAnimation } from 'app/components/Animations/TitleAnimation';
import { TextAnimation } from 'app/components/Animations/TextAnimation';
import AnimatedCard from 'app/components/Animations/AnimatedCard';
import RevealText from 'app/components/Animations/RevealText';
import FadeInWhenVisible from 'app/components/Animations/FadeWhenVisible';

export default function TramitesEntidades() {
  useSmoothScroll();

  const entities = [
    {
      name: "Cámara de Comercio",
      icon: HiOutlineBuildingLibrary,
      services: [
        "Registro mercantil y renovación",
        "Inscripción de documentos",
        "Certificados de existencia",
        "Reformas estatutarias"
      ]
    },
    {
      name: "DIAN",
      icon: HiOutlineDocumentCheck,
      services: [
        "Inscripción RUT",
        "Actualización de información",
        "Devoluciones y compensaciones",
        "Respuestas a requerimientos"
      ]
    },
    {
      name: "Superintendencias",
      icon: HiOutlineScale,
      services: [
        "Reportes de información",
        "Atención a requerimientos",
        "Trámites de vigilancia",
        "Inscripciones y registros"
      ]
    },
    {
      name: "Entidades Públicas",
      icon: HiOutlineShieldCheck,
      services: [
        "Gestión de certificados",
        "Trámites municipales",
        "Licencias y permisos",
        "Registro de contratos"
      ]
    }
  ];

  const advantages = [
    {
      icon: HiOutlineClock,
      title: "Ahorro de tiempo",
      description: "Nosotros gestionamos todos los trámites mientras te enfocas en tu negocio."
    },
    {
      icon: HiOutlineUserGroup,
      title: "Experiencia especializada",
      description: "Conocemos los procesos, requisitos y contactos en cada entidad."
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Cumplimiento garantizado",
      description: "Evita sanciones y mantén tu empresa en regla con todas las obligaciones."
    },
    {
      icon: HiOutlineDocumentCheck,
      title: "Documentación correcta",
      description: "Preparamos todos los documentos necesarios sin errores ni devoluciones."
    }
  ];

  const process = [
    {
      step: "Identificación",
      description: "Analizamos tus necesidades y el trámite específico que requieres."
    },
    {
      step: "Preparación",
      description: "Recopilamos y preparamos toda la documentación necesaria."
    },
    {
      step: "Gestión",
      description: "Representamos a tu empresa ante la entidad correspondiente."
    },
    {
      step: "Seguimiento",
      description: "Monitoreamos el proceso hasta su finalización exitosa."
    },
    {
      step: "Entrega",
      description: "Te entregamos los documentos finales y certificaciones obtenidas."
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
              Trámites en Entidades de <br />
              <span className="text-[#1c9d9f]">Control y Vigilancia</span>
            </h1>
          </TitleAnimation>

          <TextAnimation>
            <p className="font-montserrat text-[#9a9faf] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              Representación y gestión integral ante organismos oficiales, entidades reguladoras y 
              de vigilancia. Facilitamos todos tus trámites legales y administrativos para que tu 
              empresa opere sin contratiempos ni sanciones.
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

      {/* SECCIÓN: ENTIDADES QUE GESTIONAMOS */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#2d2d38] mb-6">
              <RevealText>Entidades que Gestionamos</RevealText>
            </h2>
            <FadeInWhenVisible delay={0.2}>
              <p className="font-montserrat text-[#555] text-lg max-w-3xl mx-auto">
                Representamos a tu empresa ante las principales entidades de control, vigilancia 
                y regulación en Colombia.
              </p>
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {entities.map((entity, index) => {
              const Icon = entity.icon;
              return (
                <AnimatedCard key={index} delay={0.1 + index * 0.1}>
                  <div className="bg-gradient-to-br from-white to-[#f8f9fa] rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-2 border-transparent hover:border-[#1c9d9f] h-full">
                    
                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-16 h-16 bg-[#1c9d9f]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-[#1c9d9f]" />
                      </div>
                      <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#2d2d38]">
                        {entity.name}
                      </h3>
                    </div>

                    <div className="w-20 h-1 bg-[#1c9d9f] rounded-full mb-6"></div>

                    <ul className="space-y-3">
                      {entity.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
                          <HiOutlineCheckCircle className="w-5 h-5 text-[#1c9d9f] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                          <span className="font-montserrat text-[#555] group-hover/item:text-[#2d2d38] transition-colors">
                            {service}
                          </span>
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

      {/* SECCIÓN: NUESTRO PROCESO (HORIZONTAL STEPS) */}
      <section className="w-full bg-gradient-to-b from-white to-[#f8f9fa] py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#2d2d38] mb-6">
              <RevealText>¿Cómo Trabajamos?</RevealText>
            </h2>
            <FadeInWhenVisible delay={0.2}>
              <p className="font-montserrat text-[#555] text-lg max-w-2xl mx-auto">
                Un proceso claro y eficiente que garantiza resultados exitosos en cada trámite.
              </p>
            </FadeInWhenVisible>
          </div>

          {/* PASOS HORIZONTALES CON FLECHAS */}
          <div className="relative">
            
            {/* Línea conectora (solo desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-[#1c9d9f]/20"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
              {process.map((item, index) => (
                <AnimatedCard key={index} delay={0.1 + index * 0.08}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col">
                    
                    {/* Número circular */}
                    <div className="w-24 h-24 bg-gradient-to-br from-[#1c9d9f] to-[#168788] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="font-playfair text-3xl font-bold text-white">
                        {index + 1}
                      </span>
                    </div>

                    {/* Título */}
                    <h3 className="font-playfair text-xl font-bold text-[#2d2d38] mb-3">
                      {item.step}
                    </h3>

                    {/* Línea decorativa */}
                    <div className="w-12 h-1 bg-[#1c9d9f] rounded-full mx-auto mb-3"></div>

                    {/* Descripción */}
                    <p className="font-montserrat text-[#555] text-sm leading-relaxed flex-grow">
                      {item.description}
                    </p>

                  </div>
                </AnimatedCard>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECCIÓN: VENTAJAS */}
      <section className="w-full bg-white py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-6">
              <RevealText>¿Por Qué Dejarlo en Nuestras Manos?</RevealText>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <AnimatedCard key={index} delay={0.1 + index * 0.1}>
                  <div className="flex items-start gap-6 bg-gradient-to-br from-[#f8f9fa] to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    
                    <div className="w-16 h-16 bg-[#1c9d9f]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-[#1c9d9f]" />
                    </div>

                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-[#2d2d38] mb-3">
                        {advantage.title}
                      </h3>
                      <p className="font-montserrat text-[#555] leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>

                  </div>
                </AnimatedCard>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECCIÓN: LLAMADO A LA ACCIÓN ESPECIAL */}
      <section className="w-full bg-gradient-to-br from-[#f8f9fa] to-white py-20 md:py-24">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12">
          
          <AnimatedCard>
            <div className="bg-gradient-to-br from-[#1c9d9f] to-[#168788] rounded-3xl p-10 md:p-14 shadow-2xl text-center">
              
              <HiOutlineBuildingLibrary className="w-20 h-20 text-white mx-auto mb-6" />
              
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
                Olvídate de las filas y trámites engorrosos
              </h2>
              
              <p className="font-montserrat text-white/90 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Deja que nosotros nos encarguemos de toda la gestión ante entidades oficiales. 
                Ahorra tiempo, evita errores y mantén tu empresa siempre en regla.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wa.me/573146623630?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-white text-[#1c9d9f] font-montserrat font-bold text-lg rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:scale-105"
                >
                  Solicitar asesoría gratuita
                </Link>
              </div>

            </div>
          </AnimatedCard>

        </div>
      </section>

      <FinalCTA />

    </main>
  );
}