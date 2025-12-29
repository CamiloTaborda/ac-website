"use client";

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { 
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlinePaperAirplane,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheckCircle // Icono para el mensaje de éxito
} from "react-icons/hi2";
import useSmoothScroll from 'app/hooks/useSmoothScroll';
import { TitleAnimation } from 'app/components/Animations/TitleAnimation';
import { TextAnimation } from 'app/components/Animations/TextAnimation';
import ScrollIndicator from 'app/components/ScrollIndicator';
import AnimatedCard from 'app/components/Animations/AnimatedCard';
import Link from 'next/link';

export default function Contacto() {
  useSmoothScroll();
  const formRef = useRef();
  const recaptchaRef = useRef();

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  
  // NUEVO: Estado para manejar la visualización del mensaje de éxito
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!captchaToken) {
      alert("Por favor, confirma que no eres un robot.");
      return;
    }

    setIsSubmitting(true);
    
    const SERVICE_ID = "service_diie36s"; 
    const TEMPLATE_ID = "template_dgyzerf";
    const PUBLIC_KEY = "M9VvqrZHupG8xcJFZ";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setShowSuccessMessage(true);
        
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          mensaje: ''
        });
        recaptchaRef.current.reset();
        setCaptchaToken(null);

        setTimeout(() => setShowSuccessMessage(false), 5000);
      })
      .catch((error) => {
        console.error("Error EmailJS:", error);
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION - Se mantiene igual */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/40 flex items-center overflow-hidden">
        <div className="max-w-[1800px] mx-auto w-full px-6 sm:px-8 md:px-12">
          <TitleAnimation>
          <h1 className="font-playfair text-left text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[1.1]">
            Hablemos de tu{' '}
            <span className="text-[#1c9d9f]">próximo proyecto.</span>
          </h1>
          </TitleAnimation>
          <TextAnimation>
          <p className="font-montserrat text-[#9a9faf] text-lg md:text-xl max-w-3xl leading-relaxed mb-8 mt-8">
            Estamos aquí para ayudarte. Contáctanos y resolveremos tus dudas lo antes posible.
          </p>
          </TextAnimation>
          <TitleAnimation>
          <div className="flex items-center gap-3 mt-10">
            <div className="w-16 h-1.5 bg-[#1c9d9f] rounded-full"></div>
            <p className="text-[#9a9faf] font-montserrat text-sm uppercase tracking-wider">
              Respuesta en menos de 24 horas
            </p>
          </div>
          </TitleAnimation>
        </div>
        <ScrollIndicator />
      </section>

      {/* SECCIÓN: FORMULARIO Y MAPA */}
      <section className="w-full bg-white py-20 md:py-32">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            <AnimatedCard>
            <div className="relative overflow-hidden">
              <div className="inline-block px-4 py-2 bg-[#1c9d9f]/10 rounded-full mb-6">
                <span className="font-montserrat text-[#1c9d9f] font-semibold text-sm uppercase tracking-wider">
                  Envíanos un mensaje
                </span>
              </div>

              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-4">
                Estamos para ayudarte
              </h2>

              <div className="w-16 h-1.5 bg-[#1c9d9f] rounded-full mb-8"></div>

              {/* LÓGICA CONDICIONAL: Si se envió con éxito, mostrar mensaje, si no, mostrar formulario */}
              {showSuccessMessage ? (
                <div className="bg-[#f0fdfa] border-2 border-[#1c9d9f]/30 p-8 rounded-2xl flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
                  <HiOutlineCheckCircle className="text-6xl text-[#1c9d9f] mb-4" />
                  <h3 className="font-playfair text-2xl font-bold text-[#2d2d38] mb-2">¡Enviado con éxito!</h3>
                  <p className="font-montserrat text-[#555] mb-6">
                    Gracias por escribirnos. Hemos recibido tu mensaje correctamente y nos pondremos en contacto contigo en menos de 24 horas.
                  </p>
                  <button 
                    onClick={() => setShowSuccessMessage(false)}
                    className="text-[#1c9d9f] font-montserrat font-semibold underline hover:text-[#168788]"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 mb-10">
                  <div>
                    <label className="block font-montserrat text-[#2d2d38] font-semibold mb-2 text-sm">Nombre completo</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#e5e7eb] focus:border-[#1c9d9f] focus:outline-none transition-colors duration-300 font-montserrat"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block font-montserrat text-[#2d2d38] font-semibold mb-2 text-sm">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#e5e7eb] focus:border-[#1c9d9f] focus:outline-none transition-colors duration-300 font-montserrat"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-montserrat text-[#2d2d38] font-semibold mb-2 text-sm">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#e5e7eb] focus:border-[#1c9d9f] focus:outline-none transition-colors duration-300 font-montserrat"
                      placeholder="+57"
                    />
                  </div>

                  <div>
                    <label className="block font-montserrat text-[#2d2d38] font-semibold mb-2 text-sm">Mensaje</label>
                    <textarea
                      name="mensaje"
                      required
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#e5e7eb] focus:border-[#1c9d9f] focus:outline-none transition-colors duration-300 font-montserrat resize-none"
                      placeholder="¿Cómo podemos ayudarte?"
                    />
                  </div>

                  <div className="py-2">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeByTgsAAAAAA-yRprrBHC09PatRnqDBlxnIRyM"
                      onChange={onCaptchaChange}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 rounded-xl font-montserrat font-semibold bg-[#1c9d9f] text-white hover:bg-[#168788] transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[#1c9d9f]/40 hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <HiOutlinePaperAirplane className="text-xl" />
                          Enviar mensaje
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  </button>
                </form>
              )}
            </div>
            </AnimatedCard>

            {/* COLUMNA DERECHA - Se mantiene igual */}
            <AnimatedCard delay={0.2}>
              <div>
                <div className="inline-block px-4 py-2 bg-[#1c9d9f]/10 rounded-full mb-6">
                  <span className="font-montserrat text-[#1c9d9f] font-semibold text-sm uppercase tracking-wider">
                    Nuestra ubicación
                  </span>
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-4">
                  Visítanos
                </h2>
                <div className="w-16 h-1.5 bg-[#1c9d9f] rounded-full mb-8"></div>
                <div className="rounded-3xl overflow-hidden shadow-2xl mb-8 h-[400px]">
                 <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5663600680796!2d-76.5233154!3d3.4215862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a63f4e86d3f7%3A0x9b2f0de8cfba6378!2sCra.%2062a%20%232a-83%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses-419!2sco!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación oficina"
                  ></iframe>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl">
                    <div className="w-12 h-12 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <HiOutlineMapPin className="w-6 h-6 text-[#1c9d9f]" />
                    </div>
                    <div>
                      <p className="font-montserrat text-[#2d2d38] font-semibold">62a #2a-83</p>
                      <p className="font-montserrat text-[#555] text-sm">Cali – Colombia</p>
                    </div>
                  </div>
                  <Link
                    href="https://wa.me/573146623630?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20sobre%20sus%20servicios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gradient-to-br from-[#1c9d9f]/10 to-white rounded-xl hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#1c9d9f] transition-colors duration-300">
                      <HiOutlineChatBubbleLeftRight className="w-6 h-6 text-[#1c9d9f] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-montserrat text-[#2d2d38] font-semibold">WhatsApp</p>
                      <p className="font-montserrat text-[#555] text-sm">Chat directo</p>
                    </div>
                  </Link>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </main>
  );
}