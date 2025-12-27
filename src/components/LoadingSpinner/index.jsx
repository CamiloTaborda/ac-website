"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingSpinner() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]">
      {/* Contenedor principal minimalista */}
      <div className="relative flex flex-col items-center gap-12">
        
        {/* Logo con círculo sutil */}
        <div className="relative flex items-center justify-center">
          {/* Círculo único elegante */}
          <div className="absolute w-32 h-32 rounded-full border border-foreground/20 animate-spin-slow"></div>
          
          {/* Logo central con resplandor suave */}
          <div className="relative w-20 h-20 z-10">
            <div className="absolute inset-0 bg-foreground/10 rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="relative w-full h-full">
              <Image
                src="/logos/logo-ac.png"
                alt="Cargando..."
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Barra de progreso minimalista */}
        <div className="w-72 space-y-4">
          {/* Barra ultra fina */}
          <div className="relative w-full h-px bg-foreground/10 overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-foreground transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Texto centrado simple */}
          <p className="font-heading text-foreground/60 text-xs text-center tracking-[0.3em] uppercase">
            Cargando Experiencia
          </p>
        </div>

      </div>
    </div>
  );
}