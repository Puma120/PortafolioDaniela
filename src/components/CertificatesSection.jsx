import './CertificatesSection.css';

// Datos de ejemplo - reemplaza con tus certificados reales
const certificatesData = [
  {
    title: "Diseño de Moda Avanzado",
    institution: "Instituto de Moda",
    year: "2024",
    icon: "🎓"
  },
  {
    title: "Patronaje Industrial",
    institution: "Escuela Técnica",
    year: "2023",
    icon: "✂️"
  },
  {
    title: "Diseño Textil",
    institution: "Universidad de Arte",
    year: "2023",
    icon: "🧵"
  },
  {
    title: "Ilustración de Moda",
    institution: "Academia de Arte",
    year: "2022",
    icon: "🎨"
  },
  {
    title: "Marketing de Moda",
    institution: "Business School",
    year: "2022",
    icon: "📊"
  },
  {
    title: "Moda Sostenible",
    institution: "Eco Fashion Institute",
    year: "2024",
    icon: "🌿"
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
                  <span className="certificate-icon">{cert.icon}</span>
                </div>
                
                <div className="certificate-info">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-institution">{cert.institution}</p>
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
