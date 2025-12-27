// utils/generadorPDFLiquidacion.js

export const generarPDFLiquidacion = (resultados) => {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-CO', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getNombreTipoContrato = (tipo) => {
    const tipos = {
      'indefinido': 'Término indefinido',
      'fijo': 'Término fijo',
      'obra': 'Obra o labor'
    };
    return tipos[tipo] || tipo;
  };

  const getNombreCausaRetiro = (causa) => {
    const causas = {
      'renuncia': 'Renuncia voluntaria',
      'despido': 'Despido sin justa causa',
      'mutuo': 'Mutuo acuerdo',
      'justa': 'Terminación con justa causa'
    };
    return causas[causa] || causa;
  };

  const LOGO_URL = '/logos/logo-ac-negro.png'; 

  const contenidoHTML = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Liquidación Laboral - ${new Date().toLocaleDateString('es-CO')}</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Arial, sans-serif;
          padding: 50px;
          color: #2d2d38;
          line-height: 1.6;
          background: white;
        }
        
        .header {
          text-align: center;
          margin-bottom: 50px;
          padding-bottom: 30px;
          border-bottom: 4px solid #1c9d9f;
        }

        .header .logo img {
            max-width: 300px; 
            height: auto;
        }
        
        .header h1 {
          color: #2d2d38;
          font-size: 36px;
          margin-bottom: 15px;
          font-weight: 700;
        }
        
        .header .subtitle {
          color: #666;
          font-size: 16px;
          margin-bottom: 10px;
        }
        
        .header .fecha-generacion {
          color: #999;
          font-size: 13px;
          font-style: italic;
        }
        
        .section-title {
          color: #1c9d9f;
          font-size: 22px;
          margin: 40px 0 20px 0;
          padding-bottom: 12px;
          border-bottom: 3px solid #1c9d9f;
          font-weight: 600;
        }
        
        .info-table {
          width: 100%;
          margin: 25px 0;
          border-collapse: collapse;
          background: #f8f9fa;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .info-table tr {
          border-bottom: 1px solid #e0e0e0;
        }
        
        .info-table tr:last-child {
          border-bottom: none;
        }
        
        .info-table td {
          padding: 15px 20px;
        }
        
        .info-table td:first-child {
          font-weight: 600;
          color: #2d2d38;
          width: 40%;
        }
        
        .info-table td:last-child {
          color: #555;
        }
        
        .concepto-box {
          padding: 20px;
          margin: 15px 0;
          background: #f8f9fa;
          border-left: 5px solid #1c9d9f;
          border-radius: 6px;
          page-break-inside: avoid;
        }
        
        .concepto-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        
        .concepto-nombre {
          font-weight: 600;
          font-size: 18px;
          color: #2d2d38;
        }
        
        .concepto-monto {
          font-size: 22px;
          font-weight: 700;
          color: #1c9d9f;
        }
        
        .concepto-formula {
          font-size: 13px;
          color: #666;
          font-style: italic;
          margin-top: 5px;
        }

        /* ESTILO PARA LA NOTA DE ANUALIDAD */
        .anualidad-box {
          background: #e3f2fd;
          border: 1px solid #bbdefb;
          padding: 25px;
          margin: 30px 0;
          border-radius: 12px;
          page-break-inside: avoid;
        }

        .anualidad-titulo {
          color: #0d47a1;
          font-weight: 700;
          margin-bottom: 10px;
          display: block;
          font-size: 16px;
          text-transform: uppercase;
        }

        .anualidad-texto {
          font-size: 14px;
          color: #1565c0;
          margin: 0;
        }
        
        .indemnizacion-box {
          background: #fff8e1;
          border-left: 5px solid #ffa726;
          padding: 20px;
          margin: 15px 0;
          border-radius: 6px;
          page-break-inside: avoid;
        }
        
        .indemnizacion-box .concepto-nombre {
          color: #e65100;
        }
        
        .indemnizacion-box .concepto-monto {
          color: #ff6f00;
        }
        
        .total-box {
          background: linear-gradient(135deg, #2d2d38 0%, #1c9d9f 100%);
          color: white;
          padding: 35px;
          border-radius: 12px;
          margin: 40px 0;
          text-align: center;
          page-break-inside: avoid;
        }
        
        .total-label {
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 15px;
          opacity: 0.9;
          font-weight: 500;
        }
        
        .total-monto {
          font-size: 48px;
          font-weight: 700;
        }
        
        .footer {
          margin-top: 60px;
          padding-top: 30px;
          border-top: 2px solid #e0e0e0;
          text-align: center;
        }
        
        .footer-nota {
          background: #f5f5f5;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          font-size: 13px;
          color: #666;
          line-height: 1.8;
          text-align: justify;
        }
        
        .footer-nota strong {
          color: #333;
        }
        
        .footer-text {
          font-size: 12px;
          color: #999;
        }
        
        @media print {
          body {
            padding: 30px;
          }
          
          .no-print {
            display: none;
          }
        }
      </style>
    </head>
    <body>
      
      <div class="header">
        ${LOGO_URL !== 'URL_DE_TU_LOGO_AQUI' ? `
        <div class="logo">
            <img src="${LOGO_URL}" alt="Logo">
        </div>
        ` : ''}

        <h1>Reporte de Liquidación</h1>
        <p class="subtitle">Análisis detallado de prestaciones sociales</p>
        <p class="fecha-generacion">Generado el ${new Date().toLocaleDateString('es-CO', { 
          weekday: 'long',
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}</p>
      </div>

      <h2 class="section-title">Resumen Informativo</h2>
      <table class="info-table">
        <tr>
          <td>Salario mensual base</td>
          <td>${formatCurrency(resultados.salario)}</td>
        </tr>
        <tr>
          <td>Periodo evaluado</td>
          <td>Del ${formatDate(resultados.fechaIngreso)} al ${formatDate(resultados.fechaRetiro)}</td>
        </tr>
        <tr>
          <td>Total días laborados</td>
          <td>${resultados.diasTrabajados} días</td>
        </tr>
        <tr>
          <td>Tipo de contrato</td>
          <td>${getNombreTipoContrato(resultados.tipoContrato)}</td>
        </tr>
        <tr>
          <td>Motivo de terminación</td>
          <td>${getNombreCausaRetiro(resultados.causaRetiro)}</td>
        </tr>
      </table>

      <h2 class="section-title">Desglose de Conceptos</h2>

      <div class="concepto-box">
        <div class="concepto-header">
          <span class="concepto-nombre">Cesantías (Histórico Acumulado)</span>
          <span class="concepto-monto">${formatCurrency(resultados.cesantias)}</span>
        </div>
        <div class="concepto-formula">Fórmula legal: (Salario × Días) / 360</div>
      </div>

      <div class="concepto-box">
        <div class="concepto-header">
          <span class="concepto-nombre">Intereses sobre cesantías</span>
          <span class="concepto-monto">${formatCurrency(resultados.interesesCesantias)}</span>
        </div>
        <div class="concepto-formula">Fórmula legal: (Cesantías × Días × 12%) / 360</div>
      </div>

      <div class="concepto-box">
        <div class="concepto-header">
          <span class="concepto-nombre">Prima de servicios</span>
          <span class="concepto-monto">${formatCurrency(resultados.primaServicios)}</span>
        </div>
        <div class="concepto-formula">Fórmula legal: (Salario × Días) / 360</div>
      </div>

      <div class="concepto-box">
        <div class="concepto-header">
          <span class="concepto-nombre">Vacaciones (Proporcional)</span>
          <span class="concepto-monto">${formatCurrency(resultados.vacaciones)}</span>
        </div>
        <div class="concepto-formula">Fórmula legal: (Salario × Días) / 720</div>
      </div>

      ${resultados.indemnizacion > 0 ? `
      <div class="indemnizacion-box">
        <div class="concepto-header">
          <span class="concepto-nombre">Indemnización (Sin Justa Causa)</span>
          <span class="concepto-monto">${formatCurrency(resultados.indemnizacion)}</span>
        </div>
        <div class="concepto-formula">Detalle: ${resultados.indemnizacionTexto}</div>
      </div>
      ` : ''}

      <div class="anualidad-box">
        <span class="anualidad-titulo">Aviso sobre el pago efectivo</span>
        <p class="anualidad-texto">
          Este documento calcula el total de derechos generados durante <strong>toda la relación laboral</strong> (${resultados.diasTrabajados} días). 
          Es importante recordar que bajo la normativa colombiana, las cesantías de años anteriores ya deben haber sido consignadas anualmente en su fondo. 
          Por lo tanto, el valor que el empleador entrega directamente al retiro suele corresponder únicamente a la <strong>fracción del último año laborado</strong>.
        </p>
      </div>

      <div class="total-box">
        <div class="total-label">Total Derechos Generados</div>
        <div class="total-monto">${formatCurrency(resultados.total)}</div>
      </div>

      <div class="footer">
        <div class="footer-nota">
          <strong>Descargo de responsabilidad:</strong> Este reporte es una herramienta de orientación y no constituye una liquidación oficial ni asesoría jurídica vinculante. Los cálculos se basan exclusivamente en los datos proporcionados por el usuario. Se recomienda la validación por parte de un profesional en derecho laboral para emitir un paz y salvo definitivo.
        </div>
        <p class="footer-text">
          Generado por Calculadora Laboral Avanzada<br>
          AC Tributaria<br>
          © ${new Date().getFullYear()}
        </p>
      </div>

    </body>
    </html>
  `;

  const ventana = window.open('', '_blank');
  if (ventana) {
    ventana.document.write(contenidoHTML);
    ventana.document.close();
    ventana.onload = () => {
      ventana.print();
    };
  }
};