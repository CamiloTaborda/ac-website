"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2d2d38] text-gray-300 pt-16 pb-6">
      <div className="max-w-[1800px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">

        {/* LOGO + FRASE */}
        <div className="col-span-1 lg:col-span-1">
          <Image
            src="/logos/log-ac.png"
            alt="AC Contadores"
            width={180}
            height={180}
            priority
            className="object-contain w-32 lg:w-48 h-auto mb-4"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            “La contabilidad no es solo números, es la base de las decisiones que construyen grandes empresas.”
          </p>
        </div>

        {/* SERVICIOS */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Servicios</h3>
          <ul className="space-y-2 text-sm">
  <li>
    <Link href="/servicios/asesoria-contable" className="hover:text-white transition">
      Asesoría Contable
    </Link>
  </li>

  <li>
    <Link href="/servicios/asesoria-financiera" className="hover:text-white transition">
      Asesoría Financiera
    </Link>
  </li>

  <li>
    <Link href="/servicios/asesoria-fiscal" className="hover:text-white transition">
      Asesoría Fiscal
    </Link>
  </li>

  <li>
    <Link href="/servicios/revisoria-fiscal" className="hover:text-white transition">
      Revisoría Fiscal
    </Link>
  </li>

  <li>
    <Link href="/servicios/capacitacion-empresarial" className="hover:text-white transition">
      Capacitación Empresarial
    </Link>
  </li>

  <li>
    <Link href="/servicios/tramites-entidades-control" className="hover:text-white transition">
      Trámites en Entidades de Control y Vigilancia
    </Link>
  </li>
</ul>
        </div>

        {/* HERRAMIENTAS */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Herramientas</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/herramientas/calculadora" className="hover:text-white transition">
                Calculadora
              </Link>
            </li>
            <li>
              <Link href="/herramientas/plantilla" className="hover:text-white transition">
                Plantilla
              </Link>
            </li>
          </ul>
        </div>

        {/* SOBRE NOSOTROS */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Sobre nosotros</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/sobre-nosotros" className="hover:text-white transition">
                Quiénes somos
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400 text-lg" />
              <Link href="https://wa.me/573146623630?text=Hola,%20me%20gustaría%20agendar%20una%20asesoría%20contable" target="_blank" className="hover:text-white transition">
                WhatsApp
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400 text-lg" />
              <a href="mailto:admon@actributaria.com" className="hover:text-white transition">
                admon@actributaria.com
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FaInstagram className="text-pink-400 text-lg" />
              <a href="https://www.instagram.com/ac_tributaria?igsh=dzljcW5qa2l5bGho" target="_blank" className="hover:text-white transition">
                Instagram
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FaFacebook className="text-blue-500 text-lg" />
              <a href="https://www.facebook.com/share/1BqEcng2gi/?mibextid=wwXIfr" target="_blank" className="hover:text-white transition">
                Facebook
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} AC Tributaria | Asesores Contables — Todos los derechos reservados.
      </div>
    </footer>
  );
}
