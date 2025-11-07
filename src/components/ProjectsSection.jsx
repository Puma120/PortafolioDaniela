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
    title: "PAPER DREAMS",
    category: "Alta Costura",
    year: "2024",
    description: "Inspirada en el arte del origami y los recortes de papel, esta colección juega con las formas geométricas y los pliegues estructurales para crear siluetas únicas.",
    keywords: ["ORIGAMI", "GEOMETRIC", "SCULPTURAL"],
    inspiration: "Arte japonés del papel, arquitectura brutalista",
    materials: "Tela estructurada, alambres de sostén, papel tratado",
    gallery: [1, 2, 3, 4, 5, 6]
  },
  {
    title: "GLITCH AESTHETIC",
    category: "Experimental",
    year: "2023",
    description: "Una fusión entre lo digital y lo físico. Patrones glitch, colores saturados y cortes asimétricos que desafían las convenciones de la moda tradicional.",
    keywords: ["DIGITAL", "GLITCH", "FUTURISTIC"],
    inspiration: "Arte digital, errores de software, cultura ciberpunk",
    materials: "Holográficos, neopreno, impresiones digitales sobre tela",
    gallery: [1, 2, 3]
  },
  {
    title: "NOSTALGIA 2000",
    category: "Ready-to-Wear",
    year: "2023",
    description: "Un viaje nostálgico a los inicios del milenio, reinterpretando los íconos fashion del Y2K con una mirada contemporánea y sostenible.",
    keywords: ["Y2K", "NOSTALGIC", "COLORFUL"],
    inspiration: "Revistas de moda 2000s, cultura rave, pop stars",
    materials: "Materiales reciclados, lentejuelas, vinilo",
    gallery: [1, 2, 3, 4, 5]
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
