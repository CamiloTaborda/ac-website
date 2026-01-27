"use client";

import { useState } from 'react';
import { 
  HiOutlineCalculator,
  HiCheckCircle,
  HiCurrencyDollar,
  HiClock,
  HiXMark,
  HiMoon,
  HiSun
} from "react-icons/hi2";
import RevealText from 'app/components/Animations/RevealText';

export default function CalculadoraHorasExtras() {
  const [salarioHoras, setSalarioHoras] = useState('');
  const [horasDiurnas, setHorasDiurnas] = useState('');
  const [horasNocturnas, setHorasNocturnas] = useState('');
  const [horasDominicalesDiurnas, setHorasDominicalesDiurnas] = useState('');
  const [horasDominicalesNocturnas, setHorasDominicalesNocturnas] = useState('');
  const [resultadosHoras, setResultadosHoras] = useState(null);
  const [mostrarResultadosHoras, setMostrarResultadosHoras] = useState(false);

  const calcularHorasExtras = () => {
    if (!salarioHoras) {
      alert('Por favor ingresa el salario mensual');
      return;
    }

    const salarioNum = parseFloat(salarioHoras);
    // CAMBIO: Se ajusta de 240 a 220 horas mensuales (44h semanales)
    const valorHoraOrdinaria = salarioNum / 220;

    const diurnas = parseFloat(horasDiurnas || 0) * valorHoraOrdinaria * 1.25;
    const nocturnas = parseFloat(horasNocturnas || 0) * valorHoraOrdinaria * 1.75;
    const dominicalesDiurnas = parseFloat(horasDominicalesDiurnas || 0) * valorHoraOrdinaria * 2.0;
    const dominicalesNocturnas = parseFloat(horasDominicalesNocturnas || 0) * valorHoraOrdinaria * 2.5;

    const totalHoras = diurnas + nocturnas + dominicalesDiurnas + dominicalesNocturnas;

    setResultadosHoras({
      valorHoraOrdinaria,
      diurnas,
      nocturnas,
      dominicalesDiurnas,
      dominicalesNocturnas,
      total: totalHoras,
      salario: salarioNum,
      horasDiurnas: parseFloat(horasDiurnas || 0),
      horasNocturnas: parseFloat(horasNocturnas || 0),
      horasDominicalesDiurnas: parseFloat(horasDominicalesDiurnas || 0),
      horasDominicalesNocturnas: parseFloat(horasDominicalesNocturnas || 0)
    });

    setMostrarResultadosHoras(true);
    setTimeout(() => {
      document.getElementById('resultados-horas')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const limpiarFormularioHoras = () => {
    setSalarioHoras('');
    setHorasDiurnas('');
    setHorasNocturnas('');
    setHorasDominicalesDiurnas('');
    setHorasDominicalesNocturnas('');
    setResultadosHoras(null);
    setMostrarResultadosHoras(false);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <>
      {/* FORMULARIO */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-[#1c9d9f]/10 rounded-full mb-4">
          <span className="font-sans text-[#1c9d9f] font-semibold text-sm uppercase tracking-wider">
            <RevealText>Horas extras</RevealText>
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-4">
          <RevealText delay={0.2}>Calcula el pago de horas extras</RevealText>
        </h2>
        <span className="font-sans text-gray-600 text-lg">
          <RevealText delay={0.4}>Ingresa la cantidad de horas trabajadas según su tipo</RevealText>
        </span>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-100">
        
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
          <div className="w-14 h-14 bg-[#1c9d9f]/10 rounded-2xl flex items-center justify-center">
            <HiClock className="w-7 h-7 text-[#1c9d9f]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#2d2d38]">
              Información de horas trabajadas
            </h3>
            <p className="font-sans text-sm text-gray-500">
              Recargos según normativa Colombiana
            </p>
          </div>
        </div>

        <div className="space-y-6">
          
          <div className="group">
            <label className="flex items-center gap-2 font-sans text-sm font-semibold text-[#2d2d38] mb-3">
              <div className="w-8 h-8 bg-[#1c9d9f]/10 rounded-lg flex items-center justify-center group-hover:bg-[#1c9d9f]/20 transition-colors">
                <HiCurrencyDollar className="w-5 h-5 text-[#1c9d9f]" />
              </div>
              Salario mensual *
            </label>
            <input
              type="number"
              value={salarioHoras}
              onChange={(e) => setSalarioHoras(e.target.value)}
              placeholder="Ejemplo: 1500000"
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl font-sans text-lg focus:border-[#1c9d9f] focus:outline-none transition-all hover:border-gray-300 text-[#2d2d38]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="group">
              <label className="flex items-center gap-2 font-sans text-sm font-semibold text-[#2d2d38] mb-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                  <HiSun className="w-5 h-5 text-yellow-600" />
                </div>
                Horas extras diurnas (+25%)
              </label>
              <input
                type="number"
                value={horasDiurnas}
                onChange={(e) => setHorasDiurnas(e.target.value)}
                placeholder="Cantidad de horas"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl font-sans text-lg focus:border-[#1c9d9f] focus:outline-none transition-all hover:border-gray-300 text-[#2d2d38]"
              />
              {/* CAMBIO: Texto informativo a 7:00 PM */}
              <p className="font-sans text-xs text-gray-500 mt-2">6:00 AM - 7:00 PM</p>
            </div>

            <div className="group">
              <label className="flex items-center gap-2 font-sans text-sm font-semibold text-[#2d2d38] mb-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                  <HiMoon className="w-5 h-5 text-indigo-600" />
                </div>
                Horas extras nocturnas (+75%)
              </label>
              <input
                type="number"
                value={horasNocturnas}
                onChange={(e) => setHorasNocturnas(e.target.value)}
                placeholder="Cantidad de horas"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl font-sans text-lg focus:border-[#1c9d9f] focus:outline-none transition-all hover:border-gray-300 text-[#2d2d38]"
              />
              {/* CAMBIO: Texto informativo a 7:00 PM */}
              <p className="font-sans text-xs text-gray-500 mt-2">7:00 PM - 6:00 AM</p>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="group">
              <label className="flex items-center gap-2 font-sans text-sm font-semibold text-[#2d2d38] mb-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <HiSun className="w-5 h-5 text-orange-600" />
                </div>
                Dominicales/Festivos diurnas (+100%)
              </label>
              <input
                type="number"
                value={horasDominicalesDiurnas}
                onChange={(e) => setHorasDominicalesDiurnas(e.target.value)}
                placeholder="Cantidad de horas"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl font-sans text-lg focus:border-[#1c9d9f] focus:outline-none transition-all hover:border-gray-300 text-[#2d2d38]"
              />
              {/* CAMBIO: Texto informativo a 7:00 PM */}
              <p className="font-sans text-xs text-gray-500 mt-2">Domingos y festivos 6:00 AM - 7:00 PM</p>
            </div>

            <div className="group">
              <label className="flex items-center gap-2 font-sans text-sm font-semibold text-[#2d2d38] mb-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <HiMoon className="w-5 h-5 text-purple-600" />
                </div>
                Dominicales/Festivos nocturnas (+150%)
              </label>
              <input
                type="number"
                value={horasDominicalesNocturnas}
                onChange={(e) => setHorasDominicalesNocturnas(e.target.value)}
                placeholder="Cantidad de horas"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl font-sans text-lg focus:border-[#1c9d9f] focus:outline-none transition-all hover:border-gray-300 text-[#2d2d38]"
              />
              {/* CAMBIO: Texto informativo a 7:00 PM */}
              <p className="font-sans text-xs text-gray-500 mt-2">Domingos y festivos 7:00 PM - 6:00 AM</p>
            </div>

          </div>

          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <p className="font-sans text-sm text-blue-800">
              {/* CAMBIO: Texto de nota actualizado a 220 */}
              <strong>Nota:</strong> Los recargos se calculan sobre el valor de la hora ordinaria (salario mensual ÷ 220 horas).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
           <button
            onClick={calcularHorasExtras}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-sans font-semibold text-base bg-[#1c9d9f] text-white hover:bg-[#168788] transition-all flex items-center justify-center gap-2 duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
           >
           <HiOutlineCalculator className="w-5 h-5" />
           Calcular Horas Extras
         </button>

         <button
          onClick={limpiarFormularioHoras}
          className="w-full sm:w-auto px-6 py-3 rounded-xl font-sans font-semibold text-base bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all flex items-center justify-center gap-2 hover:shadow-2xl hover:scale-105 cursor-pointer"
         >
          <HiXMark className="w-5 h-5" />
          Limpiar
         </button>
        </div>

        </div>

      </div>

      {/* RESULTADOS */}
      {mostrarResultadosHoras && resultadosHoras && (
        <section id="resultados-horas" className="w-full bg-white py-20 border-t-4 border-[#1c9d9f] mt-20">
          <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
                <HiCheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-sans text-green-700 font-semibold text-sm uppercase tracking-wider">
                  Cálculo completado
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-4">
                Resultado de horas extras
              </h2>
              <p className="font-sans text-gray-600 text-lg">
                Valor hora ordinaria: <strong>{formatCurrency(resultadosHoras.valorHoraOrdinaria)}</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              {resultadosHoras.horasDiurnas > 0 && (
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 shadow-lg border-2 border-yellow-200 hover:shadow-xl transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-yellow-900 mb-2">
                        Horas extras diurnas
                      </h3>
                      <p className="font-sans text-sm text-yellow-700">
                        {resultadosHoras.horasDiurnas} horas × {formatCurrency(resultadosHoras.valorHoraOrdinaria)} × 1.25
                      </p>
                    </div>
                    <div className="w-14 h-14 bg-yellow-200 rounded-xl flex items-center justify-center group-hover:bg-yellow-300 transition-colors">
                      <HiSun className="w-7 h-7 text-yellow-600" />
                    </div>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-yellow-700">
                    {formatCurrency(resultadosHoras.diurnas)}
                  </p>
                </div>
              )}

              {resultadosHoras.horasNocturnas > 0 && (
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 shadow-lg border-2 border-indigo-200 hover:shadow-xl transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-indigo-900 mb-2">
                        Horas extras nocturnas
                      </h3>
                      <p className="font-sans text-sm text-indigo-700">
                        {resultadosHoras.horasNocturnas} horas × {formatCurrency(resultadosHoras.valorHoraOrdinaria)} × 1.75
                      </p>
                    </div>
                    <div className="w-14 h-14 bg-indigo-200 rounded-xl flex items-center justify-center group-hover:bg-indigo-300 transition-colors">
                      <HiMoon className="w-7 h-7 text-indigo-600" />
                    </div>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-indigo-700">
                    {formatCurrency(resultadosHoras.nocturnas)}
                  </p>
                </div>
              )}

              {resultadosHoras.horasDominicalesDiurnas > 0 && (
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg border-2 border-orange-200 hover:shadow-xl transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-orange-900 mb-2">
                        Dominicales diurnas
                      </h3>
                      <p className="font-sans text-sm text-orange-700">
                        {resultadosHoras.horasDominicalesDiurnas} horas × {formatCurrency(resultadosHoras.valorHoraOrdinaria)} × 2.0
                      </p>
                    </div>
                    <div className="w-14 h-14 bg-orange-200 rounded-xl flex items-center justify-center group-hover:bg-orange-300 transition-colors">
                      <HiSun className="w-7 h-7 text-orange-600" />
                    </div>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-orange-700">
                    {formatCurrency(resultadosHoras.dominicalesDiurnas)}
                  </p>
                </div>
              )}

              {resultadosHoras.horasDominicalesNocturnas > 0 && (
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg border-2 border-purple-200 hover:shadow-xl transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-purple-900 mb-2">
                        Dominicales nocturnas
                      </h3>
                      <p className="font-sans text-sm text-purple-700">
                        {resultadosHoras.horasDominicalesNocturnas} horas × {formatCurrency(resultadosHoras.valorHoraOrdinaria)} × 2.5
                      </p>
                    </div>
                    <div className="w-14 h-14 bg-purple-200 rounded-xl flex items-center justify-center group-hover:bg-purple-300 transition-colors">
                      <HiMoon className="w-7 h-7 text-purple-600" />
                    </div>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-purple-700">
                    {formatCurrency(resultadosHoras.dominicalesNocturnas)}
                  </p>
                </div>
              )}

            </div>

            <div className="bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/60 rounded-3xl p-10 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <p className="font-sans text-white/70 text-sm mb-2 uppercase tracking-widest">
                    Total horas extras
                  </p>
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                    {formatCurrency(resultadosHoras.total)}
                  </h3>
                  <p className="font-sans text-white/60 text-sm">
                    Cálculo basado en 220 horas mensuales
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={limpiarFormularioHoras}
                    className="px-10 py-4 rounded-xl font-sans font-medium text-base bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
                  >
                    Nuevo cálculo
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <p className="font-sans text-sm text-blue-800">
                {/* CAMBIO: Etiquetas de horario nocturno actualizadas a 7:00 PM */}
                <strong>Nota:</strong> Los recargos se aplican así:
                <br/>• Horas extras diurnas (6:00 AM - 7:00 PM): +25%
                <br/>• Horas extras nocturnas (7:00 PM - 6:00 AM): +75%
                <br/>• Dominicales/festivos diurnas: +100%
                <br/>• Dominicales/festivos nocturnas: +150%
              </p>
            </div>

          </div>
        </section>
      )}
    </>
  );
}