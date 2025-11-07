import './AboutMeSection.css';

const AboutMeSection = () => {
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
              <p>
                El diseño de moda es mi forma de <span className="highlight">expresión vital</span>. 
                Cada prenda cuenta una historia, cada textura evoca una emoción.
              </p>
            </div>

            <div className="text-block cut-out">
              <p>
                Mis inspiraciones vienen del <span className="highlight">arte contemporáneo</span>, 
                los <span className="highlight">videojuegos</span>, la cultura urbana y las 
                contradicciones de la vida moderna.
              </p>
            </div>

            <div className="text-block cut-out">
              <p>
                Creo en la moda como <span className="highlight">experimentación</span>, 
                como collage visual, como manifiesto personal. Mi trabajo es maximalista, 
                atrevido y auténtico.
              </p>
            </div>

            <div className="keywords-section">
              <span className="keyword">ARTE</span>
              <span className="keyword">EXPERIMENTACIÓN</span>
              <span className="keyword">CULTURA</span>
              <span className="keyword">EXPRESIÓN</span>
              <span className="keyword">VIDEOJUEGOS</span>
              <span className="keyword">MODA</span>
            </div>
          </div>

          {/* Columna de fotos estilo fotocabina */}
          <div className="about-photos">
            <div className="photobooth-strip">
              <div className="photo-frame">
                <div className="photo-placeholder photo-1">
                  <span>📸</span>
                </div>
                <p className="photo-caption">Proceso creativo</p>
              </div>

              <div className="photo-frame">
                <div className="photo-placeholder photo-2">
                  <span>✂️</span>
                </div>
                <p className="photo-caption">Experimentación</p>
              </div>

              <div className="photo-frame">
                <div className="photo-placeholder photo-3">
                  <span>🎨</span>
                </div>
                <p className="photo-caption">Arte & Diseño</p>
              </div>

              <div className="photo-frame">
                <div className="photo-placeholder photo-4">
                  <span>⚡</span>
                </div>
                <p className="photo-caption">Inspiración</p>
              </div>
            </div>

            <div className="tape tape-1"></div>
            <div className="tape tape-2"></div>
          </div>
        </div>

        {/* Decoración tipo recorte */}
        <div className="decoration-corner corner-1">✂</div>
        <div className="decoration-corner corner-2">★</div>
      </div>
    </section>
  );
};

export default AboutMeSection;
