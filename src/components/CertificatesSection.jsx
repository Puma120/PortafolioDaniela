import './CertificatesSection.css';

// Certificados reales
const certificatesData = [
  {
    title: "Programa de Arte",
    institution: "Academia Europea di Firenze",
    year: "2024",
    duration: "1 mes",
    location: "Florencia, Italia",
    icon: "🎓",
    image: "/Certificados/foto_en_academia_europea_di_Firenze.jpeg"
  },
  {
    title: "Curso de Historia del Arte",
    institution: "Universidad Autónoma de México",
    year: "2024",
    icon: "🎨",
    image: "/Certificados/historia_arte_Constancia_Daniela_Baltazar 2_page-0001.jpg"
  },
  {
    title: "1er Lugar - La Repentina 2023",
    institution: "Concurso de Diseño Textil",
    year: "2023",
    theme: "El poder de lo femenino",
    icon: "🏆",
    image: "/Certificados/Reconocimiento_1erLugar_Repentina2023_page-0001.jpg"
  }
];

const CertificatesSection = () => {
  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-container">
        <div className="certificates-header">
          <h2 className="certificates-title">
            CERTIFICADOS & <span className="highlight">FORMACIÓN</span>
          </h2>
          <p className="certificates-subtitle">
            Aprendizaje continuo · Especialización · Crecimiento profesional
          </p>
        </div>

        <div className="certificates-grid">
          {certificatesData.map((cert, index) => (
            <div 
              key={index} 
              className="certificate-card"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Estilo polaroid */}
              <div className="certificate-polaroid">
                <div className="certificate-image">
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="certificate-photo"
                    />
                  ) : (
                    <span className="certificate-icon">{cert.icon}</span>
                  )}
                </div>
                
                <div className="certificate-info">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-institution">{cert.institution}</p>
                  {cert.duration && (
                    <p className="certificate-duration">Duración: {cert.duration}</p>
                  )}
                  {cert.location && (
                    <p className="certificate-location">📍 {cert.location}</p>
                  )}
                  <span className="certificate-year">{cert.year}</span>
                </div>

                {/* Sello decorativo */}
                <div className="certificate-seal">✓</div>
              </div>

              {/* Chincheta decorativa */}
              <div className="pin">📌</div>
            </div>
          ))}
        </div>

        {/* Decoración de fondo */}
        <div className="background-elements">
          <div className="bg-shape shape-1"></div>
          <div className="bg-shape shape-2"></div>
          <div className="bg-shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
