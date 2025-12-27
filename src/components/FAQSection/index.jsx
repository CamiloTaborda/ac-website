"use client";

import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import RevealText from "../Animations/RevealText";
import FadeInWhenVisible from "../Animations/FadeWhenVisible";
import AnimatedCard from "../Animations/AnimatedCard";

const faqData = [
  {
    question: "¿Qué riesgos tengo si llevo la contabilidad solo para cumplir con la DIAN?",
    answer: "Puedes enfrentar sanciones, mala toma de decisiones y pérdida de control financiero del negocio."
  },
  {
    question: "¿Me pueden sancionar aunque no tenga ingresos?",
    answer: "Sí. La omisión de declaraciones o reportes obligatorios genera sanciones aun sin ingresos."
  },
  {
    question: "¿Qué pasa si mi empresa es pequeña y no llevo contabilidad organizada?",
    answer: "Pierdes control del dinero, beneficios tributarios y credibilidad ante bancos y proveedores."
  },
  {
    question: "¿La asesoría contable es un gasto o una inversión?",
    answer: "Es una inversión que previene sanciones, optimiza impuestos y mejora la rentabilidad."
  },
  {
    question: "¿Puedo mejorar mis finanzas solo con una buena contabilidad?",
    answer: "Sí. Una contabilidad bien gestionada permite identificar costos, mejorar rentabilidad y planear crecimiento."
  },
  {
    question: "¿Qué procesos contables puedo delegar a un outsourcing contable?",
    answer: "Registro contable, impuestos, nómina, estados financieros, reportes y cumplimiento normativo."
  },
  {
    question: "¿El outsourcing contable reemplaza a un contador interno?",
    answer: "Sí, total o parcialmente, reduciendo costos sin perder calidad ni control."
  },
  {
    question: "¿Cómo se garantiza el cumplimiento ante la DIAN y otras entidades?",
    answer: "Con seguimiento permanente a calendarios tributarios y revisión técnica especializada."
  },
  {
    question: "¿Quién responde ante errores o requerimientos fiscales?",
    answer: "El equipo contable acompaña y gestiona las respuestas con responsabilidad profesional."
  },
  {
    question: "¿El outsourcing contable apoya la toma de decisiones gerenciales?",
    answer: "Sí. Proporciona análisis financiero y recomendaciones estratégicas."
  },
  {
    question: "¿Cómo manejas la planificación fiscal para minimizar impuestos legalmente?",
    answer: "Revisar proyecciones financieras para modelar escenarios fiscales, identificar deducciones reales y justificables, preparación de declaraciones provisionales y ajustar en tiempo real ante reformas legales."
  },
  {
    question: "¿Cuánto cuestan sus servicios de contabilidad mensual?",
    answer: "Depende del cliente y sus necesidades específicas."
  },
  {
    question: "¿Ofrecen paquetes para personas físicas o solo empresas?",
    answer: "Para todo tipo de empresa y personas naturales."
  },
  {
    question: "¿Hay costos adicionales por declaraciones de impuestos?",
    answer: "Esto se pacta con la necesidad de cada cliente."
  },
  {
    question: "¿Pueden ayudarme con la apertura de una empresa nueva?",
    answer: "Sí, claro. Hacemos toda gestión con las entidades de control como DIAN y Cámara de Comercio para ayudarte en tu emprendimiento."
  },
  {
    question: "¿Qué software usan para llevar mis libros contables?",
    answer: "El que utilice usted, o se pueden dar recomendaciones según se requiera. Manejamos sistemas como Siesa CG1, Siigo, Alegra, Word Office, Aliaddo, Contapyme."
  },
  {
    question: "¿Cómo inicio el servicio?",
    answer: "Con una cita gratuita."
  },
  {
    question: "¿Qué muestra un Balance General?",
    answer: "Proporciona una instantánea de activos, pasivos y patrimonio en un momento específico, siguiendo la ecuación contable."
  },
  {
    question: "¿Cómo se prepara un Estado de Flujo de Efectivo?",
    answer: "Rastrea movimientos de efectivo en actividades operativas, de inversión y financiación durante un período."
  }
];

const FAQItem = ({ question, answer, index, isOpen, toggleOpen }) => {
  return (
    <AnimatedCard delay={index * 0.1}>
      <div className="group border border-[#e5e7eb] rounded-2xl bg-white overflow-hidden hover:border-[#1c9d9f] transition-all duration-300 hover:shadow-xl">
        <button
          onClick={toggleOpen}
          className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-[#f8f9fa] transition-colors duration-300  cursor-pointer"
        >
          <h3 className="font-playfair text-lg md:text-xl font-bold text-[#2d2d38] group-hover:text-[#1c9d9f] transition-colors duration-300 pr-4">
            {question}
          </h3>
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c9d9f]/10 flex items-center justify-center group-hover:bg-[#1c9d9f] transition-all duration-300">
            {isOpen ? (
              <HiChevronUp className="w-5 h-5 text-[#1c9d9f] group-hover:text-white transition-colors duration-300" />
            ) : (
              <HiChevronDown className="w-5 h-5 text-[#1c9d9f] group-hover:text-white transition-colors duration-300" />
            )}
          </div>
        </button>
        
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 md:px-8 pb-6">
            <div className="w-16 h-1 bg-[#1c9d9f] mb-4 rounded-full"></div>
            <p className="font-montserrat text-[#555] text-base leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayedFAQs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <section className="w-full min-h-screen bg-white flex items-center py-20 md:py-24">
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
        
        {/* TÍTULO */}
        <h2 className="font-playfair text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#2d2d38] text-left">
          <RevealText>Preguntas Frecuentes</RevealText>
        </h2>

        {/* SUBTÍTULO */}
        <FadeInWhenVisible delay={0.2}>
          <p className="font-montserrat text-[#2d2d38]/70 text-lg md:text-xl mt-4 text-left">
            Resolvemos las dudas más comunes sobre nuestros servicios contables, fiscales y financieros. 
            <span className="text-[#1c9d9f]"> Si tienes alguna otra pregunta, no dudes en contactarnos.</span>
          </p>
        </FadeInWhenVisible>

        {/* LISTA DE PREGUNTAS */}
        <div className="mt-12 md:mt-16 space-y-4">
          {displayedFAQs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openIndex === index}
              toggleOpen={() => toggleOpen(index)}
            />
          ))}
        </div>

        {/* BOTÓN VER MÁS / VER MENOS */}
        {faqData.length > 5 && (
          <FadeInWhenVisible delay={0.3}>
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group relative px-8 py-4 rounded-xl font-montserrat font-semibold border-2 border-[#1c9d9f] text-[#1c9d9f] hover:bg-[#1c9d9f] hover:text-white transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[#1c9d9f]/40 hover:scale-105 flex items-center gap-3 cursor-pointer"
              >
                <span className="relative z-10">
                  {showAll ? "Ver menos" : `Ver más (${faqData.length - 5} preguntas)`}
                </span>
                <div className="relative z-10">
                  {showAll ? (
                    <HiChevronUp className="w-5 h-5" />
                  ) : (
                    <HiChevronDown className="w-5 h-5" />
                  )}
                </div>
                
                {/* Efecto brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </button>
            </div>
          </FadeInWhenVisible>
        )}

      </div>
    </section>
  );
}