import ProjectCard from './ProjectCard';
import './ProjectsSection.css';

// Datos de ejemplo - puedes reemplazar con tus proyectos reales
const projectsData = [
  {
    title: "AQUARIUM",
    category: "Colección Conceptual",
    year: "2024",
    description: "Una colección inspirada en la belleza y misterio del mundo submarino. Cada diseño captura la fluidez del agua, los colores vibrantes de la fauna marina y las texturas orgánicas de la flora acuática, traduciendo la esencia del océano en prendas únicas.",
    keywords: ["ACUÁTICO", "ORGÁNICO", "FLUIDO"],
    inspiration: "Mundo submarino, fauna y flora marina, movimiento del agua y sus reflejos",
    materials: "Telas fluidas, transparencias, bordados en tonos azules y verdes, texturas orgánicas",
    coverImage: "/Trabajo_AquaRium/Portada.png",
    gallery: [
      { src: "/Trabajo_AquaRium/Board_Inspiracion.png", title: "Board de Inspiración" },
      { src: "/Trabajo_AquaRium/Board_Tendencia.png", title: "Board de Tendencia" },
      { src: "/Trabajo_AquaRium/Dibujos_Prendas.png", title: "Diseños de Prendas" },
      { src: "/Trabajo_AquaRium/Dibujos_Prendas2.png", title: "Diseños de Prendas 2" },
      { src: "/Trabajo_AquaRium/Ficha_Tecnica.png", title: "Ficha Técnica" },
      { src: "/Trabajo_AquaRium/Patrones_Creados.png", title: "Patrones Creados" },
      { src: "/Trabajo_AquaRium/Shooting.png", title: "Shooting" }
    ]
  },
  {
    title: "SOFT POWER",
    category: "Diseño Automotriz de Interiores",
    year: "2024",
    description: "Un proyecto innovador de diseño de interiores automotrices que reimagina el espacio interior del vehículo como una extensión del estilo de vida contemporáneo. Combinando funcionalidad, confort y estética vanguardista para crear una experiencia de conducción única.",
    keywords: ["AUTOMOTRIZ", "INTERIORES", "INNOVACIÓN"],
    inspiration: "Diseño industrial contemporáneo, minimalismo funcional y ergonomía avanzada",
    materials: "Materiales premium, textiles técnicos, acabados de alta calidad",
    coverImage: "/Trabajo_SoftPower/Portada.png",
    gallery: [
      { src: "/Trabajo_SoftPower/PrimeraFoto.png", title: "Concepto Principal" },
      { src: "/Trabajo_SoftPower/SegundaFoto.png", title: "Vista Detallada" },
      { src: "/Trabajo_SoftPower/TerceraFoto.png", title: "Perspectiva Interior" },
      { src: "/Trabajo_SoftPower/CuartaFoto.png", title: "Detalles de Diseño" },
      { src: "/Trabajo_SoftPower/Paleta-de-color.png", title: "Paleta de Color" },
      { src: "/Trabajo_SoftPower/UltimaFoto.png", title: "Render Final" },
      { src: "/Trabajo_SoftPower/Fichas-Tecnicas.png", title: "Fichas Técnicas" },
      
    ]
  },
  {
    title: "LUCHA",
    category: "Moda y Activismo",
    year: "2024",
    description: "Una colección poderosa que explora la fuerza femenina, la identidad de género y el feminismo contemporáneo a través del lente de las luchadoras. Cada pieza es una declaración de empoderamiento, resistencia y transformación, celebrando la lucha por la igualdad y el cambio social. Trabajo en equipo galardonado con diploma.",
    keywords: ["FEMINISMO", "IDENTIDAD", "EMPODERAMIENTO"],
    inspiration: "Luchadoras mexicanas, movimientos feministas, fuerza femenina y resistencia social",
    materials: "Textiles resistentes, estampados gráficos, elementos de lucha libre reinterpretados",
    award: "🏆 Diploma - Primer lugar en la 'Repentina' 2023 de diseño textil con el tema 'El poder de lo femenino'",
    coverImage: "/Trabajo_Lucha/Portada.png",
    gallery: [
      { src: "/Trabajo_Lucha/FraseInspiracion.png", title: "Frase de Inspiración" },
      { src: "/Trabajo_Lucha/Lluvia-De-Ideas.png", title: "Lluvia de Ideas" },
      { src: "/Trabajo_Lucha/5.png", title: "Concepto 1" },
      { src: "/Trabajo_Lucha/7.png", title: "Concepto 2" },
      { src: "/Trabajo_Lucha/8.png", title: "Concepto 3" },
      { src: "/Trabajo_Lucha/9.png", title: "Diseño 1" },
      { src: "/Trabajo_Lucha/11.png", title: "Diseño 2" },
      { src: "/Trabajo_Lucha/12.png", title: "Diseño 3" },
      { src: "/Trabajo_Lucha/13.png", title: "Diseño 4" },
      { src: "/Trabajo_Lucha/14.png", title: "Diseño 5" },
      { src: "/Trabajo_Lucha/15.png", title: "Diseño 6" },
      { src: "/Trabajo_Lucha/16.png", title: "Diseño 7" },
      { src: "/Trabajo_Lucha/17.png", title: "Diseño 8" },
      { src: "/Trabajo_Lucha/18.png", title: "Diseño 9" },
      { src: "/Trabajo_Lucha/19.png", title: "Diseño 10" },
      { src: "/Trabajo_Lucha/20.png", title: "Diseño 11" },
      { src: "/Trabajo_Lucha/21.png", title: "Diseño 12" },
      { src: "/Trabajo_Lucha/22.png", title: "Diseño 13" },
      { src: "/Trabajo_Lucha/24.png", title: "Diseño 14" },
      { src: "/Trabajo_Lucha/25.png", title: "Diseño 15" },
      { src: "/Trabajo_Lucha/26.png", title: "Diseño 16" }
    ]
  },
  {
    title: "SERES",
    category: "Macrotendencia Futurista",
    year: "2024",
    description: "Una exploración visionaria que fusiona lo extraterrestre con la moda contemporánea. Este proyecto de macrotendencia investiga la estética alienígena y sus múltiples microtendencias, creando un universo de diseño que trasciende lo terrenal y explora nuevas formas de expresión a través de lo desconocido.",
    keywords: ["ALIEN", "FUTURISTA", "AVANT-GARDE"],
    inspiration: "Estética extraterrestre, ciencia ficción, formas orgánicas alienígenas y futurismo experimental",
    materials: "Materiales innovadores, texturas metálicas, holográficos, textiles tecnológicos",
    coverImage: "/Proyecto_Seres/Portada.png",
    gallery: [
      { src: "/Proyecto_Seres/25.png", title: "Microtendencia 1" },
      { src: "/Proyecto_Seres/32.png", title: "Microtendencia 2" },
      { src: "/Proyecto_Seres/35.png", title: "Microtendencia 3" },
      { src: "/Proyecto_Seres/38.png", title: "Concepto Alien 1" },
      { src: "/Proyecto_Seres/41.png", title: "Concepto Alien 2" },
      { src: "/Proyecto_Seres/51.png", title: "Desarrollo 1" },
      { src: "/Proyecto_Seres/58.png", title: "Desarrollo 2" },
      { src: "/Proyecto_Seres/59.png", title: "Desarrollo 3" },
      { src: "/Proyecto_Seres/60.png", title: "Desarrollo 4" },
      { src: "/Proyecto_Seres/61.png", title: "Desarrollo 5" },
      { src: "/Proyecto_Seres/62.png", title: "Desarrollo 6" },
      { src: "/Proyecto_Seres/63.png", title: "Desarrollo 7" },
      { src: "/Proyecto_Seres/64.png", title: "Desarrollo 8" },
      { src: "/Proyecto_Seres/65.png", title: "Desarrollo 9" },
      { src: "/Proyecto_Seres/66.png", title: "Desarrollo 10" },
      { src: "/Proyecto_Seres/67.png", title: "Desarrollo 11" },
      { src: "/Proyecto_Seres/68.png", title: "Desarrollo 12" },
      { src: "/Proyecto_Seres/69.png", title: "Desarrollo 13" }
    ]
  },
  {
    title: "LITTLE DRAGON",
    category: "Fotografía de Moda",
    year: "2024",
    description: "Una sesión fotográfica conceptual inspirada en el videoclip 'Little Dragon'. Un trabajo colaborativo en equipo que traduce la atmósfera visual y narrativa del video en una propuesta de moda editorial. Cada imagen captura la esencia artística y el mood del videoclip original.",
    keywords: ["EDITORIAL", "VIDEOCLIP", "COLABORATIVO"],
    inspiration: "Videoclip 'Little Dragon', cinematografía musical, estética audiovisual contemporánea",
    materials: "Producción fotográfica, styling conceptual, dirección de arte",
    award: "🎬 Trabajo en Equipo",
    verticalPhotos: true,
    coverImage: "/Trabajo_LittleDragon/Portada.png",
    gallery: [
      { src: "/Trabajo_LittleDragon/2.png", title: "Foto 1" },
      { src: "/Trabajo_LittleDragon/3.png", title: "Foto 2" },
      { src: "/Trabajo_LittleDragon/4.png", title: "Foto 3" },
      { src: "/Trabajo_LittleDragon/5.png", title: "Foto 4" },
      { src: "/Trabajo_LittleDragon/6.png", title: "Foto 5" },
      { src: "/Trabajo_LittleDragon/7.png", title: "Foto 6" },
      { src: "/Trabajo_LittleDragon/8.png", title: "Foto 7" },
      { src: "/Trabajo_LittleDragon/9.png", title: "Foto 8" },
      { src: "/Trabajo_LittleDragon/10.png", title: "Foto 9" },
      { src: "/Trabajo_LittleDragon/11.png", title: "Foto 10" }
    ]
  },
  {
    title: "PRÁCTICAS PROFESIONALES",
    category: "Experiencia Profesional - Modatrends",
    year: "2024",
    description: "Experiencia profesional en la empresa Modatrends, especializada en investigación y análisis de tendencias de moda. Durante las prácticas, participé en la investigación de tendencias emergentes, colaboré en la organización y producción de dos pasarelas de moda, y desarrollé visuales para presentaciones y comunicación de tendencias.",
    keywords: ["TENDENCIAS", "PASARELAS", "VISUAL DESIGN"],
    inspiration: "Investigación de mercado, coolhunting, análisis de tendencias globales y producción de eventos",
    materials: "Investigación visual, organización de eventos, diseño gráfico, presentaciones",
    award: "💼 Experiencia Profesional",
    coverImage: "/Trabajo_Practicas/Portada.png",
    gallery: [
      { src: "/Trabajo_Practicas/2.png", title: "Investigación de Tendencias 1" },
      { src: "/Trabajo_Practicas/3.png", title: "Investigación de Tendencias 2" },
      { src: "/Trabajo_Practicas/4.png", title: "Investigación de Tendencias 3" },
      { src: "/Trabajo_Practicas/5.png", title: "Organización de Pasarela 1" },
      { src: "/Trabajo_Practicas/6.png", title: "Organización de Pasarela 2" },
      { src: "/Trabajo_Practicas/7.png", title: "Visuales 1" },
      { src: "/Trabajo_Practicas/8.png", title: "Visuales 2" },
      { src: "/Trabajo_Practicas/9.png", title: "Visuales 3" },
      { src: "/Trabajo_Practicas/10.png", title: "Visuales 4" },
      { src: "/Trabajo_Practicas/11.png", title: "Visuales 5" },
      { src: "/Trabajo_Practicas/12.png", title: "Visuales 6" },
      { src: "/Trabajo_Practicas/13.png", title: "Visuales 7" },
      { src: "/Trabajo_Practicas/14.png", title: "Visuales 8" },
      { src: "/Trabajo_Practicas/15.png", title: "Visuales 9" }
    ]
  },
  {
    title: "ESPLENDOR",
    category: "Colección de Diseño Textil",
    year: "2024",
    description: "Una colección que celebra el lujo, la elegancia y el detalle meticuloso en el diseño textil. ESPLENDOR explora la riqueza visual, las texturas exquisitas y los acabados refinados, creando piezas que irradian sofisticación y magnificencia en cada detalle.",
    keywords: ["LUJO", "ELEGANCIA", "SOFISTICACIÓN"],
    inspiration: "Arquitectura barroca, detalles ornamentales, textiles de alta calidad y estética opulenta",
    materials: "Telas premium, bordados elaborados, acabados de lujo, texturas ricas",
    coverImage: "/Trabajo_Esplendor/Portada.png",
    gallery: [
      { src: "/Trabajo_Esplendor/2.png", title: "Concepto 1" },
      { src: "/Trabajo_Esplendor/3.png", title: "Concepto 2" },
      { src: "/Trabajo_Esplendor/4.png", title: "Concepto 3" },
      { src: "/Trabajo_Esplendor/5.png", title: "Diseño 1" },
      { src: "/Trabajo_Esplendor/6.png", title: "Diseño 2" },
      { src: "/Trabajo_Esplendor/7.png", title: "Diseño 3" },
      { src: "/Trabajo_Esplendor/8.png", title: "Diseño 4" },
      { src: "/Trabajo_Esplendor/9.png", title: "Diseño 5" },
      { src: "/Trabajo_Esplendor/10.png", title: "Diseño 6" },
      { src: "/Trabajo_Esplendor/11.png", title: "Diseño 7" },
      { src: "/Trabajo_Esplendor/12.png", title: "Diseño 8" },
      { src: "/Trabajo_Esplendor/13.png", title: "Diseño 9" },
      { src: "/Trabajo_Esplendor/14.png", title: "Diseño 10" },
      { src: "/Trabajo_Esplendor/15.png", title: "Diseño 11" },
      { src: "/Trabajo_Esplendor/16.png", title: "Diseño 12" },
      { src: "/Trabajo_Esplendor/17.png", title: "Diseño 13" },
      { src: "/Trabajo_Esplendor/18.png", title: "Diseño 14" },
      { src: "/Trabajo_Esplendor/19.png", title: "Diseño 15" },
      { src: "/Trabajo_Esplendor/20.png", title: "Diseño 16" },
      { src: "/Trabajo_Esplendor/21.png", title: "Diseño 17" },
      { src: "/Trabajo_Esplendor/22.png", title: "Diseño 18" },
      { src: "/Trabajo_Esplendor/23.png", title: "Diseño 19" },
      { src: "/Trabajo_Esplendor/24.png", title: "Diseño 20" },
      { src: "/Trabajo_Esplendor/25.png", title: "Diseño 21" },
      { src: "/Trabajo_Esplendor/26.png", title: "Diseño 22" },
      { src: "/Trabajo_Esplendor/27.png", title: "Diseño 23" },
      { src: "/Trabajo_Esplendor/28.png", title: "Diseño 24" },
      { src: "/Trabajo_Esplendor/29.png", title: "Diseño 25" },
      { src: "/Trabajo_Esplendor/30.png", title: "Diseño 26" },
      { src: "/Trabajo_Esplendor/31.png", title: "Diseño 27" },
      { src: "/Trabajo_Esplendor/32.png", title: "Diseño 28" },
      { src: "/Trabajo_Esplendor/33.png", title: "Diseño 29" },
      { src: "/Trabajo_Esplendor/34.png", title: "Diseño 30" },
      { src: "/Trabajo_Esplendor/35.png", title: "Diseño 31" },
      { src: "/Trabajo_Esplendor/36.png", title: "Diseño 32" },
      { src: "/Trabajo_Esplendor/37.png", title: "Diseño 33" },
      { src: "/Trabajo_Esplendor/38.png", title: "Diseño 34" },
      { src: "/Trabajo_Esplendor/39.png", title: "Diseño 35" },
      { src: "/Trabajo_Esplendor/40.png", title: "Diseño 36" },
      { src: "/Trabajo_Esplendor/41.png", title: "Diseño 37" },
      { src: "/Trabajo_Esplendor/42.png", title: "Diseño 38" },
      { src: "/Trabajo_Esplendor/43.png", title: "Diseño 39" },
      { src: "/Trabajo_Esplendor/44.png", title: "Diseño 40" },
      { src: "/Trabajo_Esplendor/45.png", title: "Diseño 41" },
      { src: "/Trabajo_Esplendor/46.png", title: "Diseño 42" }
    ]
  },
  {
    title: "HERENCIA",
    category: "Colección Cultural",
    year: "2024",
    description: "Una colección que honra las raíces, tradiciones y legado cultural. HERENCIA es un viaje a través del tiempo que reinterpreta elementos ancestrales y los fusiona con la estética contemporánea, celebrando la identidad cultural y el patrimonio textil como fuente de inspiración infinita.",
    keywords: ["CULTURAL", "TRADICIÓN", "LEGADO"],
    inspiration: "Patrimonio cultural, artesanía tradicional, simbolismo ancestral y reinterpretación contemporánea",
    materials: "Textiles tradicionales, técnicas artesanales, bordados culturales, telas con historia",
    coverImage: "/Trabajo_Herencia/Portada.jpg",
    gallery: [
      { src: "/Trabajo_Herencia/2.jpg", title: "Concepto 1" },
      { src: "/Trabajo_Herencia/3.jpg", title: "Concepto 2" },
      { src: "/Trabajo_Herencia/4.jpg", title: "Diseño 1" },
      { src: "/Trabajo_Herencia/5.jpg", title: "Diseño 2" },
      { src: "/Trabajo_Herencia/6.jpg", title: "Diseño 3" },
      { src: "/Trabajo_Herencia/7.jpg", title: "Diseño 4" },
      { src: "/Trabajo_Herencia/8.jpg", title: "Diseño 5" },
      { src: "/Trabajo_Herencia/9.jpg", title: "Diseño 6" },
      { src: "/Trabajo_Herencia/10.jpg", title: "Diseño 7" }
    ]
  },
  {
    title: "NANOTECNOLOGÍA",
    category: "Diseño Innovador y Tecnológico",
    year: "2024",
    description: "Un proyecto visionario que explora la intersección entre la moda y la nanotecnología. Esta propuesta investiga cómo las innovaciones tecnológicas a escala nanométrica pueden revolucionar el diseño textil, creando materiales inteligentes, funcionales y futuristas que transforman la manera en que experimentamos las prendas.",
    keywords: ["TECNOLOGÍA", "INNOVACIÓN", "FUTURO"],
    inspiration: "Nanotecnología aplicada, ciencia de materiales, textiles inteligentes y funcionalidad avanzada",
    materials: "Materiales nanotecnológicos, textiles inteligentes, fibras innovadoras, tecnología aplicada",
    coverImage: "/Trabajo_Nanotecnologia/Portada.jpg",
    gallery: [
      { src: "/Trabajo_Nanotecnologia/1.jpg", title: "Investigación 1" },
      { src: "/Trabajo_Nanotecnologia/2.jpg", title: "Investigación 2" },
      { src: "/Trabajo_Nanotecnologia/3.jpg", title: "Desarrollo 1" },
      { src: "/Trabajo_Nanotecnologia/4.jpg", title: "Desarrollo 2" },
      { src: "/Trabajo_Nanotecnologia/5.jpg", title: "Aplicación 1" },
      { src: "/Trabajo_Nanotecnologia/6.jpg", title: "Aplicación 2" },
      { src: "/Trabajo_Nanotecnologia/7.jpg", title: "Resultado Final" }
    ]
  }
];

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2 className="projects-title">
          MIS <span className="highlight">PROYECTOS</span>
        </h2>
        <p className="projects-subtitle">
          Cada colección cuenta una historia · Experimentación sin límites
        </p>
      </div>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            index={index}
          />
        ))}
      </div>

      {/* Decoración divisoria */}
      <div className="section-divider">
        <span>★ ✂ ★ ✂ ★</span>
      </div>
    </section>
  );
};

export default ProjectsSection;
