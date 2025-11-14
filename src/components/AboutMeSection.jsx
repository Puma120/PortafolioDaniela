import { useState } from 'react';
import './AboutMeSection.css';

const AboutMeSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src, alt) => {
    setSelectedImage({ src, alt });
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            SOBRE <span className="highlight">MÍ</span>
          </h2>
        </div>

        <div className="about-content">
          {/* Columna de texto con estética de papel rasgado */}
          <div className="about-text">
            <div className="text-block cut-out">
              <h3 style={{marginBottom: '1rem', fontSize: '1.3rem'}}>DOMINIOS</h3>
              <p>
                <span className="highlight">Adobe Illustrator</span> · 
                <span className="highlight"> Procreate</span> · 
                <span className="highlight"> Photoshop</span>
              </p>
            </div>

            <div className="text-block cut-out">
              <h3 style={{marginBottom: '1rem', fontSize: '1.3rem'}}>COMPETENCIAS ESPECÍFICAS</h3>
              <p>
                • Expresión de tendencias textiles con base en mercados específicos<br/>
                • Gestión de vínculos de colaboración y emprendimiento en el ámbito textil<br/>
                • Fundamentación teórica e histórica de proyectos textiles
              </p>
            </div>

            <div className="text-block cut-out">
              <h3 style={{marginBottom: '1rem', fontSize: '1.3rem'}}>COMPETENCIAS GENÉRICAS</h3>
              <p>
                • Compromiso humanista<br/>
                • Creatividad, innovación y emprendimiento<br/>
                • Trabajo colaborativo
              </p>
            </div>

            <div className="text-block cut-out">
              <h3 style={{marginBottom: '1rem', fontSize: '1.3rem'}}>ÁREAS DE INTERÉS</h3>
              <p>
                • Diseño y creación de nuevos artículos textiles<br/>
                • Innovación en tendencias y su aplicación<br/>
                • Creación de nuevos conceptos dirigidos y justificados al mercado que se busca<br/>
                • <span className="highlight">Creación de contenido en TikTok</span><br/>
                • <span className="highlight">Servicio de estilismo</span>
              </p>
            </div>

            <div className="keywords-section">
              <span className="keyword">DISEÑO TEXTIL</span>
              <span className="keyword">TENDENCIAS</span>
              <span className="keyword">INNOVACIÓN</span>
              <span className="keyword">ESTILISMO</span>
              <span className="keyword">CREADORA TIKTOK</span>
              <span className="keyword">INGLÉS</span>
            </div>
          </div>

          {/* Columna de fotos estilo fotocabina */}
          <div className="about-photos">
            <div className="photobooth-strip">
              <div className="photo-frame" onClick={() => openImage('/Sobre_mi/Sobre_mi_Estilizando.jpeg', 'Estilismo')}>
                <img 
                  src="/Sobre_mi/Sobre_mi_Estilizando.jpeg" 
                  alt="Estilismo"
                  className="photo-real photo-1"
                />
                <div className="photo-overlay">
                  <span>Click para ver completa</span>
                </div>
                <p className="photo-caption">Estilismo</p>
              </div>

              <div className="photo-frame" onClick={() => openImage('/Sobre_mi/Creación_Cont_tiktok_Estilismo.jpeg', 'Creación de contenido')}>
                <img 
                  src="/Sobre_mi/Creación_Cont_tiktok_Estilismo.jpeg" 
                  alt="Creación de contenido"
                  className="photo-real photo-2"
                />
                <div className="photo-overlay">
                  <span>Click para ver completa</span>
                </div>
                <p className="photo-caption">Creación de Contenido</p>
              </div>

              <div className="photo-frame" onClick={() => openImage('/Sobre_mi/Creación_Cont_tiktok_Estilismo (2).jpeg', 'TikTok Creator')}>
                <img 
                  src="/Sobre_mi/Creación_Cont_tiktok_Estilismo (2).jpeg" 
                  alt="TikTok Creator"
                  className="photo-real photo-3"
                />
                <div className="photo-overlay">
                  <span>Click para ver completa</span>
                </div>
                <p className="photo-caption">TikTok Creator</p>
              </div>
            </div>

            <div className="tape tape-1"></div>
            <div className="tape tape-2"></div>
          </div>
        </div>

        {/* Decoración tipo recorte */}
        <div className="decoration-corner corner-1">◆</div>
        <div className="decoration-corner corner-2">★</div>
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <div className="modal-content">
            <button className="close-modal" onClick={closeImage}>✕</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutMeSection;
