export interface ServiceData {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
  fullDescription: string;
  benefits: string[];
  preparation: string[];
  duration: string;
  faqs: { question: string; answer: string }[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "resonancia-magnetica",
    name: "Resonancia Magnética",
    shortDescription:
      "Diagnóstico de alta precisión sin radiación para estudios cerebrales, de columna, articulaciones, abdomen y pelvis.",
    icon: "Scan",
    fullDescription:
      "La resonancia magnética (RM) es una técnica de diagnóstico por imágenes que utiliza campos magnéticos y ondas de radio para crear imágenes detalladas de los órganos y tejidos del cuerpo. A diferencia de los rayos X y la tomografía, la resonancia magnética no utiliza radiación ionizante, lo que la convierte en una opción segura para estudios repetidos. En Medic Scan 360 contamos con equipos de última generación que permiten obtener imágenes de alta resolución para un diagnóstico preciso y confiable.",
    benefits: [
      "No utiliza radiación ionizante",
      "Imágenes de alta resolución de tejidos blandos",
      "Ideal para cerebro, columna, articulaciones y abdomen",
      "Detección temprana de patologías",
      "Estudio no invasivo e indoloro",
    ],
    preparation: [
      "No portar objetos metálicos (joyas, relojes, tarjetas magnéticas)",
      "Informar si tiene implantes metálicos, marcapasos o prótesis",
      "Vestir ropa cómoda sin cierres metálicos",
      "Algunos estudios requieren ayuno de 4-6 horas (se le indicará al momento de la cita)",
      "Traer estudios anteriores si los tiene disponibles",
    ],
    duration: "30 a 60 minutos dependiendo del área de estudio",
    faqs: [
      {
        question: "¿La resonancia magnética duele?",
        answer:
          "No, la resonancia magnética es un procedimiento completamente indoloro. Solo necesita permanecer quieto durante el estudio. El equipo puede generar ruidos, pero se le proporcionarán protectores auditivos.",
      },
      {
        question: "¿Es segura la resonancia magnética?",
        answer:
          "Sí, la resonancia magnética es muy segura ya que no utiliza radiación ionizante. Sin embargo, no es recomendable para personas con ciertos implantes metálicos o marcapasos. Siempre informe a nuestro equipo sobre cualquier implante o condición médica.",
      },
      {
        question: "¿Necesito orden médica para realizarme una resonancia?",
        answer:
          "Sí, la resonancia magnética requiere una orden médica que especifique el área de estudio y el diagnóstico presuntivo. Esto nos permite realizar el protocolo adecuado para su caso.",
      },
      {
        question: "¿Cuánto tiempo tardan los resultados?",
        answer:
          "Los resultados son analizados por nuestros médicos radiólogos especialistas y generalmente están disponibles en 24 a 48 horas hábiles.",
      },
    ],
  },
  {
    slug: "tomografia-computarizada",
    name: "Tomografía Computarizada",
    shortDescription:
      "Imágenes detalladas en 3D para diagnósticos rápidos. Detecta lesiones, tumores, fracturas complejas y enfermedades vasculares.",
    icon: "Layers",
    fullDescription:
      "La tomografía computarizada (TC) es un estudio de diagnóstico por imágenes que combina rayos X con tecnología computarizada para producir imágenes transversales detalladas del cuerpo. Permite visualizar con gran precisión huesos, órganos internos, vasos sanguíneos y tejidos blandos. En Medic Scan 360 utilizamos tomógrafos de última generación que ofrecen imágenes de alta resolución con menor dosis de radiación.",
    benefits: [
      "Imágenes detalladas en 3D de alta resolución",
      "Estudio rápido (minutos)",
      "Ideal para detección de tumores, lesiones y fracturas",
      "Evaluación de enfermedades vasculares",
      "Guía para procedimientos médicos",
    ],
    preparation: [
      "Algunos estudios requieren ayuno de 4-6 horas",
      "Informar sobre alergias, especialmente a medios de contraste yodados",
      "Traer resultados de creatinina reciente si el estudio requiere contraste",
      "Vestir ropa cómoda sin elementos metálicos en el área de estudio",
      "Informar si está embarazada o sospecha estarlo",
    ],
    duration: "15 a 30 minutos dependiendo del tipo de estudio",
    faqs: [
      {
        question: "¿La tomografía utiliza radiación?",
        answer:
          "Sí, la tomografía utiliza rayos X. Sin embargo, nuestros equipos de última generación están diseñados para utilizar la menor dosis de radiación posible, manteniendo la calidad diagnóstica.",
      },
      {
        question: "¿Qué es el medio de contraste?",
        answer:
          "Es una sustancia que se administra por vía intravenosa o por vía oral para mejorar la visualización de ciertos órganos y estructuras. No todos los estudios lo requieren; su médico indicará si es necesario.",
      },
      {
        question: "¿Puedo realizarme una tomografía si estoy embarazada?",
        answer:
          "En general, la tomografía no se recomienda durante el embarazo debido a la radiación. Si existe una necesidad médica urgente, nuestro equipo evaluará el caso de forma individual.",
      },
    ],
  },
  {
    slug: "ecografia",
    name: "Ecografía",
    shortDescription:
      "Estudio no invasivo para órganos abdominales, tiroides, mamas, sistema musculoesquelético y control obstétrico.",
    icon: "HeartPulse",
    fullDescription:
      "La ecografía es un estudio de diagnóstico por imágenes que utiliza ondas de ultrasonido para producir imágenes en tiempo real de los órganos internos del cuerpo. Es un procedimiento no invasivo, indoloro y seguro que no utiliza radiación. En Medic Scan 360 ofrecemos ecografías con equipos de alta resolución para una amplia variedad de estudios diagnósticos.",
    benefits: [
      "No utiliza radiación — completamente seguro",
      "Estudio en tiempo real",
      "Ideal para evaluación de órganos abdominales y pélvicos",
      "Seguimiento obstétrico durante el embarazo",
      "Evaluación de tiroides, mamas y sistema musculoesquelético",
    ],
    preparation: [
      "Ecografía abdominal: ayuno de 6-8 horas",
      "Ecografía pélvica/obstétrica: vejiga llena (tomar 4-6 vasos de agua 1 hora antes)",
      "Ecografía de tiroides y partes blandas: no requiere preparación especial",
      "Traer orden médica y estudios anteriores",
      "Vestir ropa cómoda y de fácil acceso al área de estudio",
    ],
    duration: "20 a 40 minutos dependiendo del tipo de ecografía",
    faqs: [
      {
        question: "¿La ecografía es segura durante el embarazo?",
        answer:
          "Sí, la ecografía es completamente segura durante el embarazo. No utiliza radiación y es el método de imagen preferido para el seguimiento del desarrollo del bebé.",
      },
      {
        question: "¿Por qué necesito tener la vejiga llena?",
        answer:
          "Para ecografías pélvicas y obstétricas, la vejiga llena actúa como una 'ventana acústica' que permite una mejor visualización de los órganos pélvicos y el útero.",
      },
      {
        question: "¿Cuántos tipos de ecografía ofrecen?",
        answer:
          "Ofrecemos ecografías abdominales, pélvicas, obstétricas, de tiroides, de mamas, musculoesquelética, Doppler vascular, y de partes blandas, entre otras. Su médico indicará cuál es la más adecuada para su caso.",
      },
    ],
  },
  {
    slug: "rayos-x",
    name: "Rayos X",
    shortDescription:
      "Diagnóstico rápido para fracturas, patologías pulmonares, evaluaciones ortopédicas y chequeos generales.",
    icon: "Bone",
    fullDescription:
      "La radiografía digital (rayos X) es uno de los estudios de diagnóstico por imágenes más utilizados en medicina. Permite obtener imágenes de los huesos, pulmones y otras estructuras del cuerpo de forma rápida y precisa. En Medic Scan 360 contamos con equipos de radiografía digital que ofrecen imágenes de alta calidad con menor exposición a la radiación comparado con sistemas convencionales.",
    benefits: [
      "Resultados inmediatos",
      "Menor dosis de radiación con tecnología digital",
      "Ideal para detección de fracturas y lesiones óseas",
      "Evaluación pulmonar y cardíaca",
      "Estudio rápido y accesible",
    ],
    preparation: [
      "Retirar joyas y objetos metálicos del área a estudiar",
      "Informar si está embarazada o sospecha estarlo",
      "No requiere ayuno ni preparación especial en la mayoría de casos",
      "Traer orden médica indicando el área de estudio",
      "Vestir ropa cómoda sin elementos metálicos",
    ],
    duration: "5 a 15 minutos",
    faqs: [
      {
        question: "¿Los rayos X son peligrosos?",
        answer:
          "La radiación de una radiografía convencional es muy baja. Nuestros equipos digitales utilizan aún menos radiación que los sistemas tradicionales. El beneficio diagnóstico supera ampliamente el riesgo mínimo de la exposición.",
      },
      {
        question: "¿Puedo realizarme rayos X si estoy embarazada?",
        answer:
          "En general se evitan los rayos X durante el embarazo, especialmente en el área abdominal. Sin embargo, si es médicamente necesario, se pueden tomar precauciones especiales. Siempre informe a nuestro equipo si está embarazada.",
      },
      {
        question: "¿Necesito cita previa para rayos X?",
        answer:
          "Si bien aceptamos pacientes con cita previa, los rayos X pueden realizarse de forma relativamente rápida. Le recomendamos contactarnos para verificar disponibilidad y asegurar una atención sin esperas.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
