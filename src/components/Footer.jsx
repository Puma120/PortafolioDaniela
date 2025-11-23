import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Redes sociales */}
        <div className="social-links">
          <h3 className="footer-title">
            CONECTEMOS
          </h3>
          
          <div className="social-icons">
            <a 
              href="https://www.instagram.com/daniela.bvz?igsh=bjR3NDZ1NDdleXln&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <span className="icon">📷</span>
              <span className="label">Instagram</span>
            </a>

            <a 
              href="https://www.tiktok.com/@daniela.bvz?_r=1&_t=ZS-91LOe7DJUoR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link tiktok"
            >
              <span className="icon">🎵</span>
              <span className="label">TikTok</span>
            </a>

            <a 
              href="/CV_Daniela.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link cv"
            >
              <span className="icon">📁</span>
              <span className="label">CV</span>
            </a>
            
          </div>
        </div>

        {/* Línea divisoria decorativa */}
        <div className="footer-divider">
          <span>★ ◆ ★ ◆ ★ ◆ ★</span>
        </div>

        {/* Información adicional */}
        <div className="footer-info">
          <p className="footer-text">
            <span className="highlight">Diseño de Moda</span> · Experimentación · Cultura Visual
          </p>
          <p className="copyright">
            © 2025 GitHub Puma120 
          </p>
        </div>

        {/* Botón volver arriba */}
        <button 
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑ VOLVER ARRIBA
        </button>

        {/* Elementos decorativos */}
        <div className="footer-decorations">
          <div className="deco-element deco-1">★</div>
          <div className="deco-element deco-2">◆</div>
          <div className="deco-element deco-3">★</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
