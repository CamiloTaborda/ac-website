"use client";

import { useState } from 'react';
import { 
  HiOutlineCalculator,
  HiCheckCircle,
  HiShieldCheck,
  HiCurrencyDollar,
  HiCalendar,
  HiDocumentText,
  HiXMark,
  HiExclamationTriangle,
  HiInformationCircle,
  HiArrowDownTray // Nueva icon para el PDF
} from "react-icons/hi2";
import FadeInWhenVisible from 'app/components/Animations/FadeWhenVisible';
import RevealText from 'app/components/Animations/RevealText';
import { generarPDFLiquidacion } from 'app/utils/generatorPDFLiquidacion';

export default function CalculadoraLiquidacion() {
  const [salario, setSalario] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [fechaRetiro, setFechaRetiro] = useState('');
  const [tipoContrato, setTipoContrato] = useState('indefinido');
  const [causaRetiro, setCausaRetiro] = useState('renuncia');
  const [resultados, setResultados] = useState(null);
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const calcularDiasTrabajados = (inicio, fin) => {
    const fechaInicio = new Date(inicio);
    const fechaFin = new Date(fin);
    const diferencia = fechaFin - fechaInicio;
    return Math.floor(diferencia / (1000 * 60 * 60 * 24)) + 1;
  };

  const calcularLiquidacion = () => {
    if (!salario || !fechaIngreso || !fechaRetiro) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    const salarioNum = parseFloat(salario);
    const diasTrabajados = calcularDiasTrabajados(fechaIngreso, fechaRetiro);
    
    if (diasTrabajados < 0) {
        alert('La fecha de retiro debe ser posterior o igual a la fecha de ingreso.');
        return;
    }

    const cesantias = (salarioNum * diasTrabajados) / 360;
    const interesesCesantias = (cesantias * diasTrabajados * 0.12) / 360;
    const primaServicios = (salarioNum * diasTrabajados) / 360;
    const vacaciones = (salarioNum * diasTrabajados) / 720;

    let indemnizacion = 0;
    let indemnizacionTexto = '';

    if (causaRetiro === 'despido') {
      if (tipoContrato === 'indefinido') {
        const salarioDiario = salarioNum / 30;
        
        if (diasTrabajados <= 360) {
          indemnizacion = salarioNum;
          indemnizacionTexto = '30 días de salario por menos de un año de servicio.';
        } else {
          let diasIndemnizacion = 30;
          const anosAdicionales = (diasTrabajados - 360) / 360;
          diasIndemnizacion += Math.ceil(anosAdicionales) * 20;
          indemnizacion = diasIndemnizacion * salarioDiario;
          indemnizacionTexto = `30 días (primer año) + ${diasIndemnizacion - 30} días (años subsiguientes/fracción).`;
        }
      } else if (tipoContrato === 'fijo' || tipoContrato === 'obra') {
        indemnizacion = salarioNum * 0.5; 
        indemnizacionTexto = 'Valor estimado (legalmente es el salario del tiempo restante del contrato/obra).';
      }
    }

    const total = cesantias + interesesCesantias + primaServicios + vacaciones + indemnizacion;

    setResultados({
      cesantias,
      interesesCesantias,
      primaServicios,
      vacaciones,
      indemnizacion,
      total,
      diasTrabajados,
      aniosCompletos: Math.floor(diasTrabajados / 365), 
      salario: salarioNum,
      fechaIngreso,
      fechaRetiro,
      tipoContrato,
      causaRetiro,
      indemnizacionTexto
    });

    setMostrarResultados(true);
    setTimeout(() => {
      document.getElementById('resultados')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const limpiarFormulario = () => {
    setSalario('');
    setFechaIngreso('');
    setFechaRetiro('');
    setTipoContrato('indefinido');
    setCausaRetiro('renuncia');
    setResultados(null);
    setMostrarResultados(false);
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
            <FadeInWhenVisible delay={0.2}>Liquidación laboral</FadeInWhenVisible>
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-4">
          <RevealText delay={0.4}>Ingresa los datos del empleado</RevealText>
        </h2>
        <span className="font-sans text-gray-600 text-lg">
          <RevealText delay={0.5}>Completa la información para obtener el cálculo detallado</RevealText>
        </span>
      </div>

      {/* ADVERTENCIAS IMPORTANTES */}
      <div className="mb-8 space-y-4">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-r-xl">
          <div className="flex items-start gap-3">
            <HiExclamationTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-sans font-bold text-orange-900 mb-2">Advertencia sobre Salario Integral</h4>
              <p className="font-sans text-sm text-orange-800 leading-relaxed">
                <strong>NO ingresar el Salario Integral</strong> en esta calculadora. El salario integral (superior a 13 SMMLV) excluye automáticamente el pago de cesantías, intereses sobre cesantías, prima de servicios y, en algunos casos, la indemnización. Si tu caso es salario integral, consulta con un contador o abogado laboral.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-r-xl">
          <div className="flex items-start gap-3">
            <HiInformationCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-sans font-bold text-blue-900 mb-2">Información importante</h4>
              <ul className="font-sans text-sm text-blue-800 space-y-2 leading-relaxed">
                <li>• <strong>Salario base:</strong> Ingresa el salario mensual ordinario sin incluir horas extras, comisiones variables o bonificaciones ocasionales.</li>
                <li>• <strong>Auxilio de transporte:</strong> No se incluye en este cálculo. Si aplica, debe sumarse al resultado final.</li>
                <li>• <strong>Descuentos:</strong> Esta calculadora NO incluye descuentos por deudas con la empresa, préstamos, anticipos o aportes parafiscales pendientes.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gray-100">
        
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
          <div className="w-14 h-14 bg-[#1c9d9f]/10 rounded-2xl flex items-center justify-center">
            <HiOutlineCalculator className="w-7 h-7 text-[#1c9d9f]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#2d2d38]">
              Información laboral
            </h3>
            <span className="font-sans text-sm text-gray-500">
              Todos los campos son obligatorios
            </span>
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
              value={salario}
              onChange={(e) => setSalario(e.target.value)}
              placeholder="Ejemplo: 1500000"
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl font-sans text-lg focus:border-[#1c9d9f] focus:outline-none transition-all hover:border-gray-300 text-[#2d2d38]"
            />
            <p className="font-sans text-xs text-gray-500 mt-2 italic">
              * Salario base ordinario, sin incluir horas extras ni bonificaciones variables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="group">
              <label className="flex items-center gap-2 font-sans text-sm font-semibold text-[#2d2d38] mb-3">
                <div className="w-8 h-8 bg-[#1c9d9f]/10 rounded-lg flex items-center justify-center group-hover:bg-[#1c9d9f]/20 transition-colors">
                  <HiCalendar className="w-5 h-5 text-[#1c9d9f]" />
                </div>
                Fecha de ingreso *
              </label>
              <input
                type="date"
                value={fechaIngreso}
                onChange={(e) => setFechaIngreso(e.target.value)}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl font-sans text-lg focus:border-[#1c9d9f] focus:outline-none transition-all hover:border-gray-300 text-[#2d2d38]"
              />
            </div>

            <div className="group">
              <label className="flex items-center gap-2 font-sans text-sm font-semibold text-[#2d2d38] mb-3">
                <div className="w-8 h-8 bg-[#1c9d9f]/10 rounded-lg flex items-center justify-center group-hover:bg-[#1c9d9f]/20 transition-colors">
                  <HiCalendar className="w-5 h-5 text-[#1c9d9f]" />
                </div>
                Fecha de retiro *
              </label>
              <input
                type="date"
                value={fechaRetiro}
                onChange={(e) => setFechaRetiro(e.target.value)}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl font-sans text-lg focus:border-[#1c9d9f] focus:outline-none transition-all hover:border-gray-300 text-[#2d2d38]"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="group">
              <label className="flex items-center gap-2 font-sans text-sm font-semibold text-[#2d2d38] mb-3">
                <div className="w-8 h-8 bg-[#1c9d9f]/10 rounded-lg flex items-center justify-center group-hover:bg-[#1c9d9f]/20 transition-colors">
                  <HiDocumentText className="w-5 h-5 text-[#1c9d9f]" />
                </div>
                Tipo de contrato
              </label>
              <select
                value={tipoContrato}
                onChange={(e) => setTipoContrato(e.target.value)}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl font-sans text-lg focus:border-[#1c9d9f] focus:outline-none transition-all hover:border-gray-300 bg-white text-[#2d2d38]"
              >
                <option value="indefinido">Término indefinido</option>
                <option value="fijo">Término fijo</option>
                <option value="obra">Obra o labor</option>
              </select>
            </div>

            <div className="group">
              <label className="flex items-center gap-2 font-sans text-sm font-semibold text-[#2d2d38] mb-3">
                <div className="w-8 h-8 bg-[#1c9d9f]/10 rounded-lg flex items-center justify-center group-hover:bg-[#1c9d9f]/20 transition-colors">
                  <HiDocumentText className="w-5 h-5 text-[#1c9d9f]" />
                </div>
                Causa de retiro
              </label>
              <select
                value={causaRetiro}
                onChange={(e) => setCausaRetiro(e.target.value)}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl font-sans text-lg focus:border-[#1c9d9f] focus:outline-none transition-all hover:border-gray-300 bg-white text-[#2d2d38]"
              >
                <option value="renuncia">Renuncia voluntaria</option>
                <option value="despido">Despido sin justa causa</option>
                <option value="mutuo">Mutuo acuerdo</option>
                <option value="justa">Terminación con justa causa</option>
              </select>
            </div>

          </div>

          {/* NOTA SOBRE INDEMNIZACIÓN */}
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <div className="flex items-start gap-2">
              <HiInformationCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="font-sans text-sm text-amber-800">
                <strong>Nota sobre indemnización:</strong> Las indemnizaciones solo aplican si la <strong>Causa de Retiro</strong> es <strong>"Despido sin justa causa"</strong>. Para contratos a término fijo o por obra, la indemnización aquí mostrada es una estimación; legalmente debe ser el salario del tiempo restante del contrato.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
           <button
            onClick={calcularLiquidacion}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-sans font-semibold text-base bg-[#1c9d9f] text-white hover:bg-[#168788] transition-all flex items-center justify-center gap-2 duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
           >
           <HiOutlineCalculator className="w-5 h-5" />
           Calcular liquidación
         </button>

         <button
          onClick={limpiarFormulario}
          className="w-full sm:w-auto px-6 py-3 rounded-xl font-sans font-semibold text-base bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all flex items-center justify-center gap-2 hover:shadow-2xl hover:scale-105 cursor-pointer"
         >
          <HiXMark className="w-5 h-5" />
          Limpiar
         </button>
        </div>
        </div>
      </div>

      {/* RESULTADOS */}
      {mostrarResultados && resultados && (
        <section id="resultados" className="w-full bg-white py-20 border-t-4 border-[#1c9d9f] mt-20 rounded-2xl">
          <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 w-full">
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
                <HiCheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-sans text-green-700 font-semibold text-sm uppercase tracking-wider">
                  Cálculo completado
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d38] mb-4">
                Resultado de la liquidación
              </h2>
              <p className="font-sans text-gray-600 text-lg">
                Días trabajados: <strong>{resultados.diasTrabajados}</strong> días 
                (Aproximadamente <strong>{resultados.aniosCompletos}</strong> {resultados.aniosCompletos === 1 ? 'año' : 'años'})
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#1c9d9f]/30 hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2d2d38] mb-2">
                      Cesantías (Histórico Acumulado)
                    </h3>
                    <p className="font-sans text-sm text-gray-500">
                      (Salario × Días) / 360
                    </p>
                  </div>
                  <div className="w-14 h-14 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1c9d9f]/20 transition-colors">
                    <HiCurrencyDollar className="w-7 h-7 text-[#1c9d9f]" />
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-[#1c9d9f]">
                  {formatCurrency(resultados.cesantias)}
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#1c9d9f]/30 hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2d2d38] mb-2">
                      Intereses sobre cesantías
                    </h3>
                    <p className="font-sans text-sm text-gray-500">
                      12% anual
                    </p>
                  </div>
                  <div className="w-14 h-14 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1c9d9f]/20 transition-colors">
                    <HiCurrencyDollar className="w-7 h-7 text-[#1c9d9f]" />
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-[#1c9d9f]">
                  {formatCurrency(resultados.interesesCesantias)}
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#1c9d9f]/30 hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2d2d38] mb-2">
                      Prima de servicios
                    </h3>
                    <p className="font-sans text-sm text-gray-500">
                      Proporcional
                    </p>
                  </div>
                  <div className="w-14 h-14 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1c9d9f]/20 transition-colors">
                    <HiCurrencyDollar className="w-7 h-7 text-[#1c9d9f]" />
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-[#1c9d9f]">
                  {formatCurrency(resultados.primaServicios)}
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#1c9d9f]/30 hover:shadow-xl transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#2d2d38] mb-2">
                      Vacaciones
                    </h3>
                    <p className="font-sans text-sm text-gray-500">
                      15 días hábiles/año
                    </p>
                  </div>
                  <div className="w-14 h-14 bg-[#1c9d9f]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1c9d9f]/20 transition-colors">
                    <HiCurrencyDollar className="w-7 h-7 text-[#1c9d9f]" />
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-[#1c9d9f]">
                  {formatCurrency(resultados.vacaciones)}
                </p>
              </div>

            </div>

            {resultados.indemnizacion > 0 && (
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-xl border-2 border-orange-200 mb-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <HiShieldCheck className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-orange-900 mb-2">
                        Indemnización
                      </h3>
                      <p className="font-sans text-sm text-orange-700 mb-2">
                        Por despido sin justa causa • {resultados.indemnizacionTexto}
                      </p>
                      {resultados.tipoContrato === 'indefinido' && resultados.diasTrabajados > 360 && (
                        <p className="font-sans text-xs text-orange-800 italic">
                          * Cualquier fracción de año subsiguiente al primero se contabiliza como un año completo para efectos de indemnización (20 días adicionales por cada año o fracción).
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-orange-600">
                    {formatCurrency(resultados.indemnizacion)}
                  </p>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-br from-[#2d2d38] via-[#2d2d38] to-[#1c9d9f]/60 rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
    <div className="text-center lg:text-left w-full">
      <p className="font-sans text-white/70 text-xs sm:text-sm mb-2 uppercase tracking-widest">
        Total Derechos Generados
      </p>
      {/* Ajuste de tamaño de fuente para móviles (text-4xl) hasta escritorio (lg:text-7xl) */}
      <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 break-words">
        {formatCurrency(resultados.total)}
      </h3>
      <p className="font-sans text-white/60 text-xs sm:text-sm">
        Cálculo basado en normativa colombiana vigente
      </p>
    </div>
    
    {/* Botones al 100% de ancho en móviles (w-full) */}
    <div className="flex flex-col gap-4 w-full lg:w-auto">
      <button 
        onClick={() => generarPDFLiquidacion(resultados)}
        className="w-full lg:px-10 py-4 rounded-xl font-sans font-bold text-sm sm:text-base bg-[#1c9d9f] text-white hover:bg-[#168788] transition-all shadow-lg flex items-center justify-center gap-2"
      >
        <HiArrowDownTray className="w-5 h-5" />
        <span className="whitespace-nowrap">Descargar Reporte PDF</span>
      </button>

      <button 
        onClick={limpiarFormulario}
        className="w-full lg:px-10 py-4 rounded-xl font-sans font-medium text-sm sm:text-base bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
      >
        Nuevo cálculo
      </button>
    </div>
  </div>

  {/* EXPLICACIÓN DE ANUALIDAD - Ajuste de padding y texto para móviles */}
  <div className="p-4 sm:p-6 bg-blue-50 rounded-xl sm:rounded-2xl border border-blue-200 mt-8 sm:mt-10">
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
        <HiCalendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
      </div>
      <div>
        <h4 className="text-base sm:text-lg font-bold text-blue-900 mb-1">
          Nota sobre la acumulación de prestaciones
        </h4>
        <p className="font-sans text-xs sm:text-sm text-blue-800 leading-relaxed">
          Este cálculo muestra el total acumulado por <strong>{resultados.diasTrabajados} días</strong>. 
          Sin embargo, por ley en Colombia, las cesantías de años anteriores ya deberían haber sido consignadas en tu fondo. 
          Si el empleador ha cumplido con los pagos anuales, el valor que recibirás en efectivo será principalmente la 
          <strong> fracción del año en curso ({new Date(resultados.fechaRetiro).getFullYear()})</strong>.
        </p>
      </div>
    </div>
  </div>
</div>

            {/* NOTAS FINALES IMPORTANTES */}
            <div className="mt-8 space-y-4">
              <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-400">
                <div className="flex items-start gap-3">
                  <HiExclamationTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-red-900 mb-2">Descuentos NO incluidos</h4>
                    <p className="font-sans text-sm text-red-800 leading-relaxed">
                      Esta liquidación <strong>NO incluye descuentos</strong> por: deudas con la empresa, préstamos, anticipos de nómina, aportes a seguridad social pendientes, embargos judiciales, multas o sanciones disciplinarias. El valor final puede variar significativamente después de aplicar estos descuentos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-purple-50 rounded-xl border-l-4 border-purple-400">
                <div className="flex items-start gap-3">
                  <HiInformationCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-purple-900 mb-2">Conceptos adicionales que pueden aplicar</h4>
                    <ul className="font-sans text-sm text-purple-800 space-y-1 leading-relaxed">
                      <li>• <strong>Auxilio de transporte:</strong> Si aplica, debe sumarse al total (no incluido en este cálculo)</li>
                      <li>• <strong>Salario en especie:</strong> Vivienda, alimentación u otros beneficios en especie pueden modificar la base de cálculo</li>
                      <li>• <strong>Bonificaciones habituales:</strong> Comisiones o bonos recurrentes pueden formar parte del salario base</li>
                      <li>• <strong>Días de preaviso:</strong> En algunos casos puede haber pago adicional por falta de preaviso</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl border border-gray-300">
                <p className="font-sans text-sm text-gray-700 text-center leading-relaxed">
                  <strong>Nota Legal Final:</strong> Este cálculo es una <strong>estimación referencial</strong> basada en los datos ingresados y la normativa laboral colombiana general. Para casos complejos, salarios integrales, situaciones especiales o valores definitivos y oficiales, <strong>siempre es necesario consultar con un abogado laboral o contador certificado</strong>. Este resultado no constituye asesoría legal vinculante.
                </p>
              </div>
            </div>

          </div>
        </section>
      )}
    </>
  );
}