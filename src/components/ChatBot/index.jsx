"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
    HiOutlineChatBubbleLeftRight, 
    HiXMark, 
    HiPaperAirplane,
    HiSparkles,
    HiOutlineCalendar
} from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';

// --- Base de Conocimiento y Mapeo ---

// Base de conocimiento COMPLETA con toda la información del portafolio
const knowledgeBase = {
    saludos: {
        keywords: ['hola', 'buenos dias', 'buenas tardes', 'buenas noches', 'hey', 'saludos', 'hi', 'hello', 'como estas'],
        response: '¡Hola! 👋 Bienvenido a AC Tributaria.\n\nSoy tu asistente virtual y estoy aquí para ayudarte con información sobre nuestros servicios profesionales de:\n\n✅ Revisoría Fiscal\n✅ Contabilidad\n✅ Asesoría Tributaria\n✅ Asesoría Financiera\n✅ Capacitación Empresarial\n✅ Tramites antes entidades\n\n¿En qué puedo asistirte hoy?',
        quickReplies: ['Ver todos los servicios', '¿Quiénes son?', 'Agendar asesoría']
    },

    quienes_somos: {
        keywords: ['quienes son', 'quien es', 'empresa', 'ustedes', 'conocerlos', 'sobre ustedes', 'acerca de'],
        response: '🏢 **AC Tributaria - Asesores Contables**\n\nSomos un equipo de profesionales con años de experiencia en:\n\n📊 Manejo contable, tributario y financiero\n🏭 Sector comercial, industrial y de servicios\n🤝 Entidades sin ánimo de lucro\n\n**Nuestro compromiso:** Visión en el futuro, conscientes del presente y con la convicción de hacer las cosas bien.\n\nContamos con innumerables clientes que hablan por sí solos de nuestra seriedad, compromiso y respaldo.',
        quickReplies: ['Ver servicios', '¿Qué hacen?', 'Contactar']
    },

    que_hacemos: {
        keywords: ['que hacen', 'que ofrecen', 'ayuda', 'enfoque', 'como trabajan'],
        response: '💼 **¿Qué hacemos?**\n\n🎯 Prestamos servicio de manera **oportuna, confiable y eficaz** mediante profesionales altamente calificados.\n\n📈 **Preparamos, prevenimos y anticipamos** hechos económicos para la empresa y toma de decisiones.\n\n🛡️ Asesoramos y apoyamos el proceso financiero y contable, **minimizando riesgos** y enfocados en calidad y eficiencia.\n\n📋 Aplicamos **Normas Internacionales de Auditoría (NIA)** para dar asesoría oportuna en inversión, crédito y control.',
        quickReplies: ['Ver los 6 servicios', 'Agendar reunión', 'WhatsApp']
    },

    servicios_general: {
        keywords: ['servicios', 'que ofrecen', 'lista de servicios', 'todos los servicios', 'catalogo', 'ver servicios', 'ver todos los servicios', 'ver los 6 servicios'],
        response: '📋 **Nuestros 6 Servicios Profesionales:**\n\n1️⃣ **Asesoría Contable**\n   Gestión integral de contabilidad\n\n2️⃣ **Asesoría Fiscal**\n   Optimización tributaria y fiscal\n\n3️⃣ **Asesoría Financiera**\n   Análisis y planeación financiera\n\n4️⃣ **Revisoría Fiscal**\n   Auditoría y certificación\n\n5️⃣ **Capacitación Empresarial**\n   Formación especializada\n\n6️⃣ **Trámites ante Entidades**\n   Gestión con organismos de control\n\n¿Sobre cuál servicio quieres información detallada?',
        quickReplies: ['Asesoría Contable', 'Asesoría Fiscal', 'Asesoría Financiera', 'Revisoría Fiscal', 'Capacitación Empresarial', 'Trámites ante Entidades'] // Incluyo todos los servicios
    },

    // SERVICIO 1 - ASESORÍA CONTABLE (COMPLETO)
    asesoria_contable: {
        keywords: ['contable', 'contabilidad', 'contador', 'estados financieros', 'libros contables', 'servicio 1', 'asesoría contable'],
        response: '📊 **ASESORÍA CONTABLE**\n\n**Objetivo:** Proporcionar información a stakeholders sobre la situación económica y resultados operacionales con razonabilidad y confiabilidad.\n\n**EJECUCIÓN:**\n✅ Velar por la información contable\n✅ Digitación de documentación (facturas electrónicas, compras, egresos)\n✅ Nómina electrónica, análisis y revisión\n✅ Conciliaciones bancarias y obligaciones\n✅ Cálculo de Retención en la Fuente e ICA\n✅ Presentación de impuestos y retenciones\n✅ Emisión de certificados\n\n**INCLUYE:**\n• Entendimiento del negocio\n• Conciliaciones bancarias\n• Informes financieros\n• Declaraciones de renta\n• Índices y opinión del negocio\n• Interpretación y registro\n• Análisis y depuración\n• Informes auxiliares\n\n💡 Entregamos informes oportunos y en línea.',
        quickReplies: ['Solicitar cotización', 'Ver otro servicio', 'WhatsApp']
    },

    // SERVICIO 2 - ASESORÍA FISCAL (COMPLETO)
    asesoria_fiscal: {
        keywords: ['fiscal', 'tributaria', 'impuestos', 'dian', 'renta', 'iva', 'tributos', 'servicio 2', 'asesoría fiscal', 'asesoria tributaria'],
        response: '💼 **ASESORÍA FISCAL**\n\n**Herramienta gerencial** clave que determina condiciones financieras en el presente y contribuye a predecir el futuro financiero.\n\n**NUESTROS SERVICIOS:**\n\n📋 Elaboramos plan financiero según necesidades del cliente\n💰 Gestionamos finanzas procurando buena administración\n📊 Pronóstico de escenarios económicos\n🔧 Resolvemos problemas de tipo financiero\n⚖️ Evaluamos oportunidades y riesgos potenciales\n🎯 Establecemos objetivos y metas económicas\n\n**ESPECIALIDADES:**\n• Declaraciones de renta\n• Optimización tributaria\n• IVA y retenciones\n• Planeación fiscal estratégica\n• Representación ante la DIAN\n\n¿Necesitas asesoría fiscal personalizada?',
        quickReplies: ['Agendar cita', 'Ver precios', 'WhatsApp directo']
    },

    // SERVICIO 3 - ASESORÍA FINANCIERA (COMPLETO)
    asesoria_financiera: {
        keywords: ['financiera', 'finanzas', 'análisis financiero', 'presupuesto', 'flujo de caja', 'servicio 3', 'asesoría financiera'],
        response: '💰 **ASESORÍA FINANCIERA**\n\n**Herramienta gerencial y analítica** clave que determina condiciones financieras presentes, gestiona recursos disponibles y predice el futuro financiero.\n\n**OBJETIVO PRINCIPAL:**\n🎓 Educar, informar y asesorar sobre productos y activos que componen su cartera, explicando características, riesgos y posibles rentabilidades.\n\n**SERVICIOS INCLUIDOS:**\n\n📈 Plan financiero personalizado\n💵 Gestión y administración de finanzas\n🔮 Pronóstico de escenarios económicos\n🔧 Resolución de problemas financieros\n⚖️ Evaluación de oportunidades y riesgos\n🎯 Establecimiento de objetivos económicos\n\n**ENTREGABLES:**\n• Análisis de rentabilidad\n• Proyecciones financieras\n• Presupuestos estratégicos\n• Gestión de flujo de caja\n• Informes gerenciales\n\n¿Quieres una consulta inicial gratuita?',
        quickReplies: ['Sí, agendar', 'Ver más servicios', 'Contactar']
    },

    // SERVICIO 4 - REVISORÍA FISCAL (COMPLETO)
    revisoria_fiscal: {
        keywords: ['revisoría', 'revisor fiscal', 'auditoría', 'auditoria', 'certificación', 'dictamen', 'servicio 4', 'revisoría fiscal'],
        response: '🔍 **REVISORÍA FISCAL**\n\n**Objetivo:** Atribuir fe pública sobre la razonabilidad de estados financieros, validar informes y promover el buen funcionamiento empresarial.\n\n**PROCESO PROFESIONAL:**\n\n1️⃣ **Determinar objetivos** que se quieren lograr\n2️⃣ **Definir informes** a presentar\n3️⃣ **Listar actividades** que se ejecutarán\n4️⃣ **Llevar a cabo** plan de actividades\n5️⃣ **Conclusiones** y dictamen profesional\n\n**APLICAMOS:**\n✅ Normas Internacionales de Auditoría (NIA)\n✅ Auditoría de cuentas\n✅ Validación de informes\n✅ Conceptos y observaciones\n✅ Opinión externa de estados financieros\n✅ Evaluación de sistema de control interno\n\n📌 Revisor fiscal certificado con años de experiencia.\n\n¿Tu empresa necesita revisor fiscal?',
        quickReplies: ['Solicitar reunión', 'Ver requisitos', 'WhatsApp']
    },

    // SERVICIO 5 - CAPACITACIÓN EMPRESARIAL (COMPLETO)
    capacitacion: {
        keywords: ['capacitación', 'capacitacion', 'curso', 'formación', 'formacion', 'entrenamiento', 'taller', 'servicio 5', 'capacitación empresarial'],
        response: '📚 **CAPACITACIÓN EMPRESARIAL**\n\n**Formación especializada** para tu equipo de trabajo en temas contables, tributarios y financieros.\n\n**TEMAS DISPONIBLES:**\n\n📊 Normativa contable y fiscal actualizada\n🌐 NIIF para empresas\n💻 Manejo de software contable\n💼 Planeación tributaria estratégica\n📈 Finanzas para no financieros\n⚖️ Obligaciones legales empresariales\n🔍 Auditoría y control interno\n\n**MODALIDADES:**\n• Presencial\n• Virtual\n• In-house (en tu empresa)\n• Talleres prácticos\n• Certificación incluida\n\n**BENEFICIOS:**\n✅ Equipo actualizado en normativa\n✅ Reducción de errores contables\n✅ Mejor toma de decisiones\n✅ Cumplimiento normativo\n\n¿Qué tema te interesa capacitar?',
        quickReplies: ['Solicitar cotización', 'Ver temarios', 'Contactar asesor']
    },

    // SERVICIO 6 - TRÁMITES (COMPLETO)
    tramites: {
        keywords: ['trámites', 'tramites', 'entidades de control', 'cámara de comercio', 'superintendencia', 'registro', 'servicio 6', 'trámites ante entidades'],
        response: '📄 **TRÁMITES EN ENTIDADES DE CONTROL Y VIGILANCIA**\n\n**Gestionamos y representamos** a tu empresa ante organismos oficiales y entidades reguladoras.\n\n**ENTIDADES CON LAS QUE TRABAJAMOS:**\n\n🏛️ DIAN (Dirección de Impuestos)\n🏢 Cámara de Comercio\n⚖️ Superintendencias\n📋 Entidades de control y vigilancia\n🔐 Organismos reguladores\n\n**SERVICIOS DE TRÁMITE:**\n\n✅ Registro mercantil\n✅ Renovación de matrícula\n✅ Certificados y constancias\n✅ Inscripciones y actualizaciones\n✅ Reportes y declaraciones\n✅ Solicitudes y recursos\n✅ Representación legal\n\n**VENTAJAS:**\n• Ahorro de tiempo\n• Evitas desplazamientos\n• Seguimiento constante\n• Experiencia en trámites\n• Cumplimiento garantizado\n\n¿Qué trámite necesitas realizar?',
        quickReplies: ['Solicitar asesoría', 'Ver otros servicios', 'WhatsApp']
    },

    experiencia: {
        keywords: ['experiencia', 'años', 'trayectoria', 'clientes', 'confiable', 'respaldo'],
        response: '⭐ **NUESTRA EXPERIENCIA Y RESPALDO**\n\n🏆 Años de experiencia en:\n• Sector comercial\n• Sector industrial\n• Sector de servicios\n• Entidades sin ánimo de lucro\n\n👥 **Innumerables clientes** que hablan por sí solos de nuestra:\n✅ Seriedad profesional\n✅ Compromiso total\n✅ Respaldo garantizado\n\n🎯 **Nuestro compromiso:**\nVisión en el futuro, conscientes del presente y con la convicción de hacer las cosas bien.\n\n📋 Aplicamos **Normas Internacionales de Auditoría (NIA)** en todos nuestros procesos.\n\n¿Te gustaría ser parte de nuestros clientes satisfechos?',
        quickReplies: ['Agendar reunión', 'Ver servicios', 'WhatsApp']
    },

    precios: {
        keywords: ['precio', 'costo', 'cuanto', 'tarifa', 'cotización', 'cotizacion', 'presupuesto', 'valor', 'ver precios', 'solicitar cotización'],
        response: '💵 **COTIZACIÓN PERSONALIZADA**\n\nNuestros precios varían según:\n\n📊 Tamaño de tu empresa\n📈 Volumen de operaciones\n🎯 Servicios específicos requeridos\n⏱️ Periodicidad del servicio\n🏢 Sector económico\n\n**BENEFICIOS:**\n✅ Primera consulta 100% GRATUITA\n✅ Sin compromiso\n✅ Análisis de necesidades\n✅ Propuesta personalizada\n✅ Mejor relación calidad-precio\n\n**SIGUIENTE PASO:**\n👉 Agenda una reunión sin costo para analizar tu caso y darte un presupuesto exacto.\n\n¿Prefieres agendar o hablar directo por WhatsApp?',
        quickReplies: ['Agendar ahora', 'WhatsApp directo', 'Ver servicios']
    },

    agendar: {
        keywords: ['agendar', 'cita', 'reunión', 'reunion', 'consulta', 'asesoría', 'asesoria', 'appointment', 'agendar asesoría', 'agendar reunión', 'agendar cita'],
        response: '📅 **AGENDA TU ASESORÍA GRATUITA**\n\n¡Perfecto! Puedes agendar de 2 formas:\n\n1️⃣ **AGENDA ONLINE** (Inmediato)\n   → Selecciona fecha y hora\n   → Confirmación automática\n   → Recordatorios por email\n\n2️⃣ **WHATSAPP** (Personal)\n   → Atención directa\n   → Coordina horarios flexibles\n   → Respuesta rápida\n\n🎁 **Primera consulta 100% GRATIS**\n⏱️ Duración: 30-45 minutos\n💼 Sin compromiso\n\n¿Cómo prefieres agendar?',
        quickReplies: ['📅 Agenda online', '💬 WhatsApp', 'Ver servicios']
    },

    contacto: {
        keywords: ['contacto', 'teléfono', 'telefono', 'email', 'correo', 'dirección', 'direccion', 'ubicación', 'ubicacion', 'contactar', 'contactar asesor'],
        response: '📞 **INFORMACIÓN DE CONTACTO**\n\n💬 **WhatsApp:** [Tu número]\n📧 **Email:** info@actributaria.com\n📍 **Ubicación:** Barbosa, Antioquia, Colombia\n\n⏰ **Horario de atención:**\nLunes a Viernes: 8:00 AM - 6:00 PM\nSábados: 9:00 AM - 1:00 PM\n\n**TIEMPO DE RESPUESTA:**\n✅ WhatsApp: Inmediato\n✅ Email: Menos de 24 horas\n✅ Llamadas: En horario laboral\n\n¿Por dónde prefieres contactarnos?',
        quickReplies: ['💬 WhatsApp ahora', '📅 Agendar cita', 'Ver servicios']
    },

    herramientas: {
        keywords: ['calculadora', 'plantilla', 'herramienta', 'gratis', 'gratuita', 'descarga', 'liquidación', 'liquidacion'],
        response: '🎁 **HERRAMIENTAS GRATUITAS**\n\nTenemos 2 herramientas profesionales para ti:\n\n🧮 **1. Calculadora de Liquidación Laboral**\n   • Cálculo preciso e instantáneo\n   • Actualizada con normativa vigente\n   • Cesantías, intereses, primas, vacaciones\n\n📊 **2. Plantilla de Gestión Contable**\n   • Formato profesional en Excel\n   • Lista para usar\n   • Completamente personalizable\n\n✅ **100% Gratuitas**\n✅ Diseñadas por profesionales\n✅ Actualizadas 2024\n\nEstas herramientas están disponibles en nuestra web. ¿Te gustaría más información sobre nuestros servicios profesionales?',
        quickReplies: ['Ver servicios', 'Agendar asesoría', 'WhatsApp']
    },

    gracias: {
        keywords: ['gracias', 'thank you', 'thanks', 'excelente', 'perfecto', 'ok', 'vale'],
        response: '😊 ¡De nada! Es un placer ayudarte.\n\n¿Hay algo más en lo que pueda asistirte?\n\nRecuerda que puedes:\n✅ Agendar una asesoría gratuita\n✅ Contactarnos por WhatsApp\n✅ Conocer más de nuestros 6 servicios',
        quickReplies: ['Ver servicios', 'Agendar cita', 'WhatsApp']
    },

    adios: {
        keywords: ['adios', 'adiós', 'chao', 'hasta luego', 'bye', 'nos vemos'],
        response: '👋 ¡Hasta pronto!\n\nGracias por contactarnos. Estamos aquí cuando nos necesites.\n\n📞 Si tienes alguna duda, escríbenos por WhatsApp o agenda tu asesoría gratuita.\n\n¡Que tengas un excelente día! 😊',
        quickReplies: ['WhatsApp', 'Agendar', 'Inicio']
    },

    no_entiendo: {
        response: '🤔 **Disculpa, no entendí tu mensaje**\n\nPuedo ayudarte con información sobre:\n\n📋 Nuestros 6 servicios profesionales\n💼 Asesoría contable, fiscal y financiera\n📅 Agendar una consulta gratuita\n💰 Cotizaciones personalizadas\n📞 Información de contacto\n\nPara una respuesta más específica y personalizada, te invito a que hables directamente con uno de nuestros asesores.\n\n¿Te gustaría contactarnos por WhatsApp?',
        quickReplies: ['💬 Sí, ir a WhatsApp', 'Ver servicios', 'Agendar cita']
    }
};

// Mapeo inverso de Quick Replies a las claves de la base de conocimiento para una coincidencia EXACTA
// Esto es la clave para que las opciones rápidas funcionen 100%
const createQuickReplyMap = (kb) => {
    const map = {};
    for (const [key, data] of Object.entries(kb)) {
        if (data.quickReplies) {
            data.quickReplies.forEach(reply => {
                // Normaliza el texto de la respuesta rápida para una búsqueda exacta
                map[reply.toLowerCase().trim()] = key;
            });
        }
    }
    // Añadir las claves de servicios/temas que pueden ser Quick Replies en otros contextos
    map['asesoría contable'] = 'asesoria_contable';
    map['asesoría fiscal'] = 'asesoria_fiscal';
    map['asesoría financiera'] = 'asesoria_financiera';
    map['revisoría fiscal'] = 'revisoria_fiscal';
    map['capacitación empresarial'] = 'capacitacion';
    map['trámites ante entidades'] = 'tramites';
    map['ver servicios'] = 'servicios_general';
    map['ver otro servicio'] = 'servicios_general'; // Agrego esta opción
    map['ver más servicios'] = 'servicios_general'; // Agrego esta opción
    map['ver todos los servicios'] = 'servicios_general'; // Agrego esta opción
    map['ver los 6 servicios'] = 'servicios_general'; // Agrego esta opción
    map['quiénes son'] = 'quienes_somos';
    map['qué hacen'] = 'que_hacemos';
    map['ver requisitos'] = 'revisoria_fiscal'; // Asumo que al preguntar por requisitos, quiere más de Revisoría
    map['ver temarios'] = 'capacitacion'; // Asumo que al preguntar por temarios, quiere más de Capacitación
    map['ver precios'] = 'precios';
    map['agendar asesoría'] = 'agendar';
    map['agendar cita'] = 'agendar';
    map['solicitar reunión'] = 'agendar';
    map['agendar ahora'] = 'agendar';
    map['sí, agendar'] = 'agendar';
    map['solicitar asesoría'] = 'agendar';
    map['solicitar cotización'] = 'precios'; // Se mapea a precios para que dé el flujo de agendar
    map['inicio'] = 'saludos';
    map['contactar'] = 'contacto';
    map['whatsapp'] = 'contacto';
    map['whatsapp directo'] = 'contacto';
    map['whatsapp ahora'] = 'contacto';
    
    return map;
};

const quickReplyMap = createQuickReplyMap(knowledgeBase);


const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const [showQuickReplies, setShowQuickReplies] = useState(true);
    // const [currentContext, setCurrentContext] = useState(null); // No usado, se elimina o ignora

    // Quick replies iniciales
    const initialQuickReplies = [
        'Ver todos los servicios', // Coincide con servicios_general
        'Agendar asesoría', // Coincide con agendar
        '¿Quiénes son?', // Coincide con quienes_somos
        'Precios' // Coincide con precios
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Mensaje de bienvenida y Quick Replies iniciales
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setTimeout(() => {
                addBotMessage(
                    knowledgeBase.saludos.response, // Uso el texto de saludos para consistencia
                    initialQuickReplies // Uso los initialQuickReplies
                );
            }, 500);
        }
    }, [isOpen]);

    const addBotMessage = (text, quickReplies = null) => {
        const botMessage = {
            id: Date.now(),
            text,
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }),
            quickReplies
        };
        setMessages(prev => [...prev, botMessage]);
        setShowQuickReplies(!!quickReplies);
    };

    const addUserMessage = (text) => {
        const userMessage = {
            id: Date.now(),
            text,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, userMessage]);
        setShowQuickReplies(false);
    };

    /**
     * @description Busca la mejor respuesta basada en coincidencia exacta de Quick Replies o por Keywords.
     * @param {string} userInput El texto del usuario.
     * @returns {object} El objeto de respuesta de la knowledgeBase.
     */
    const findBestResponse = (userInput) => {
        const input = userInput.toLowerCase().trim();
        
        if (!input || input.length < 2) {
            return knowledgeBase.no_entiendo;
        }

        // --- 1. Prioridad: Búsqueda Exacta de Quick Replies (La Corrección Clave) ---
        // Esto asegura que si el usuario da clic en un botón, funciona 100%
        const exactMatchKey = quickReplyMap[input];
        if (exactMatchKey) {
            return knowledgeBase[exactMatchKey];
        }

        // --- 2. Búsqueda por Palabras Clave (Para entrada manual) ---
        let bestMatch = null;
        let maxMatches = 0;

        for (const [key, data] of Object.entries(knowledgeBase)) {
            if (data.keywords) {
                let matches = 0;
                for (const keyword of data.keywords) {
                    // Usar .includes(keyword) sigue siendo un buen enfoque para preguntas abiertas
                    if (input.includes(keyword)) {
                        matches++;
                    }
                }
                if (matches > maxMatches) {
                    maxMatches = matches;
                    bestMatch = data;
                }
            }
        }
        
        // Si hay un match con más de 1 palabra clave, es una buena respuesta
        if (maxMatches > 0) {
            return bestMatch;
        }

        // --- 3. Coincidencia por la palabra clave más fuerte (mínimo 1) ---
        if (maxMatches === 1) {
            return bestMatch;
        }


        // --- 4. Respuesta por defecto ---
        return knowledgeBase.no_entiendo;
    };

    const handleSendMessage = (messageText = null) => {
        // Enviar el mensaje solo si no es un evento de objeto (evitar enviar accidentalmente el objeto de evento)
        if (messageText && typeof messageText === 'object' && messageText.target) {
            messageText = null;
        }

        const textToSend = (messageText ?? inputValue).trim();

        if (!textToSend) return;

        // Limpiar el input antes de procesar el mensaje
        setInputValue('');

        // Añadir el mensaje del usuario
        addUserMessage(textToSend);
        
        // Mostrar que el bot está escribiendo
        setIsTyping(true);

        // Procesar y enviar la respuesta del bot
        setTimeout(() => {
            setIsTyping(false);
            const response = findBestResponse(textToSend);
            
            // Lógica especial para las redirecciones que NO deben mostrar el quick reply, 
            // sino el mensaje de confirmación de redirección.
            const isRedirection = 
                textToSend === '📅 Agenda online' ||
                textToSend === 'Agendar ahora' ||
                textToSend === 'Sí, agendar' ||
                textToSend === '💬 WhatsApp ahora' ||
                textToSend === 'WhatsApp directo' ||
                textToSend === '💬 Sí, ir a WhatsApp';

            if (isRedirection) {
                 if (textToSend.includes('Agenda')) {
                    handleAgendarClick();
                    addBotMessage(
                        '✅ ¡Perfecto! Te he abierto nuestra agenda en una nueva ventana.\n\nSelecciona el día y hora que mejor te convenga. Si tienes alguna duda, también puedes contactarnos por WhatsApp.',
                        ['WhatsApp', 'Ver servicios']
                    );
                } else if (textToSend.includes('WhatsApp')) {
                    handleWhatsAppRedirect();
                    addBotMessage(
                        '✅ ¡Excelente! Te he redirigido a WhatsApp.\n\nUno de nuestros asesores te atenderá de inmediato para resolver todas tus dudas de forma personalizada. 😊',
                        ['Ver servicios', 'Agendar cita']
                    );
                } else {
                    // Si 'Sí, agendar' fue presionado
                    handleAgendarClick();
                    addBotMessage(
                        '✅ ¡Perfecto! Te he abierto nuestra agenda en una nueva ventana.\n\nSelecciona el día y hora que mejor te convenga. Si tienes alguna duda, también puedes contactarnos por WhatsApp.',
                        ['WhatsApp', 'Ver servicios']
                    );
                }

            } else {
                // Mensaje normal de la base de conocimiento
                addBotMessage(response.response, response.quickReplies || null);
            }
        }, 1000 + Math.random() * 1000);
    };


    const handleQuickReply = (reply) => {
        // Redirigir la lógica de quick replies a handleSendMessage, 
        // donde se gestionará si es una respuesta de la KB o una acción (Agendar/WhatsApp)
        handleSendMessage(reply);
    };

    const handleWhatsAppRedirect = () => {
        const phoneNumber = '573146623630'; 
        const message = encodeURIComponent('Hola, vengo del chatbot de la web y me gustaría información sobre sus servicios de AC Tributaria.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    const handleAgendarClick = () => {
        window.open('https://cal.com/asesorias-contables-yxogzx/asesorias-contables-y-tributarias', '_blank');
    };

    return (
        <>
            {/* BOTÓN FLOTANTE */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
                    aria-label="Abrir chat"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#1c9d9f] rounded-full ping-delay opacity-75"></div>

                        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#1c9d9f] to-[#168788] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <HiOutlineChatBubbleLeftRight className="w-7 h-7 md:w-8 md:h-8 text-white" />
                        </div>

                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">1</span>
                        </div>
                    </div>

                    {/* Tooltip solo desktop */}
                    <div className="hidden md:flex absolute items-center gap-2 bottom-full right-0 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
                        <HiOutlineChatBubbleLeftRight className="w-4 h-4" />
                        ¿Necesitas ayuda? ¡Pregúntame!
                    </div>
                </button>
            )}

            {/* VENTANA DEL CHAT */}
            {isOpen && (
                <div
                    className="
                        fixed z-50 flex flex-col overflow-hidden bg-white border border-gray-200 shadow-2xl
                        inset-0 rounded-none
                        md:inset-auto md:bottom-6 md:right-6 md:w-[400px] md:h-[650px] md:rounded-2xl
                    "
                >
                    {/* HEADER */}
                    <div className="sticky top-0 z-10 bg-gradient-to-r from-[#1c9d9f] to-[#168788] p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md">
                                <HiSparkles className="w-6 h-6 text-[#1c9d9f]" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-base">AC Tributaria</h3>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <p className="text-white/90 text-xs">En línea • Resp. inmediata</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                            aria-label="Cerrar chat"
                        >
                            <HiXMark className="w-6 h-6" />
                        </button>
                    </div>

                    {/* MENSAJES */}
                    <div className="flex-1 overflow-y-auto px-4 py-3 bg-gray-50 space-y-3">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${
                                    message.sender === "user" ? "justify-end" : "justify-start"
                                }`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                                        message.sender === "user"
                                            ? "bg-[#1c9d9f] text-white rounded-br-none"
                                            : "bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100"
                                    }`}
                                >
                                    <p className="text-sm leading-relaxed whitespace-pre-line">
                                        {message.text}
                                    </p>
                                    <p
                                        className={`text-xs mt-1 ${
                                            message.sender === "user"
                                                ? "text-white/70"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        {message.timestamp}
                                    </p>

                                    {/* QUICK REPLIES */}
                                    {message.sender === "bot" &&
                                        message.quickReplies &&
                                        showQuickReplies && (
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {message.quickReplies.map((reply, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleQuickReply(reply)}
                                                        className="px-3 py-1.5 bg-[#1c9d9f]/10 text-[#1c9d9f] text-xs font-medium rounded-full hover:bg-[#1c9d9f] hover:text-white transition-all border border-[#1c9d9f]/30"
                                                    >
                                                        {reply}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                </div>
                            </div>
                        ))}

                        {/* TYPING */}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-100">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                        <div
                                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                            style={{ animationDelay: "150ms" }}
                                        />
                                        <div
                                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                            style={{ animationDelay: "300ms" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* ACCIONES RÁPIDAS */}
                    <div className="px-4 py-2 bg-white border-t border-gray-200 flex gap-2">
                        <button
                            onClick={handleWhatsAppRedirect}
                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-500 text-white text-xs font-semibold rounded-lg hover:bg-green-600 transition"
                        >
                            <FaWhatsapp className="w-4 h-4" />
                            WhatsApp
                        </button>
                        <button
                            onClick={handleAgendarClick}
                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#1c9d9f] text-white text-xs font-semibold rounded-lg hover:bg-[#168788] transition"
                        >
                            <HiOutlineCalendar className="w-4 h-4" />
                            Agendar
                        </button>
                    </div>

                    {/* INPUT */}
                    <div className="p-4 bg-white border-t border-gray-200">
                        <div className="flex gap-2">
                           <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => {
                             if (e.key === "Enter") {
                               e.preventDefault();
                               handleSendMessage();
                             }
                            }}
                            placeholder="Escribe tu pregunta..."
                            className="flex-1 px-4 py-3 text-base md:text-sm border border-gray-300 rounded-full focus:outline-none focus:border-[#1c9d9f]"
                            inputMode="text"
                            autoComplete="off"
                            />

                           <button
                            type="button"
                            onClick={() => handleSendMessage()} 
                            disabled={!inputValue.trim()}
                            className="w-11 h-11 bg-[#1c9d9f] text-white rounded-full flex items-center justify-center hover:bg-[#168788] transition disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Enviar mensaje"
                            >
                           <HiPaperAirplane className="w-5 h-5" />
                           </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;