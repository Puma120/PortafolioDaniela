import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Redes sociales */}
        <div className="social-links">
          <h3 className="footer-title">
            CONECTEMOS <span className="highlight">✂</span>
          </h3>
          
          <div className="social-icons">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <span className="icon">📷</span>
              <span className="label">Instagram</span>
            </a>

            <a 
              href="https://behance.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link behance"
            >
              <span className="icon">🎨</span>
              <span className="label">Behance</span>
            </a>

            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link tiktok"
            >
              <span className="icon">🎵</span>
              <span className="label">TikTok</span>
            </a>

            <a 
              href="https://pinterest.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link pinterest"
            >
              <span className="icon">📌</span>
              <span className="label">Pinterest</span>
            </a>

            <a 
              href="mailto:contacto@ejemplo.com" 
              className="social-link email"
            >
              <span className="icon">✉️</span>
              <span className="label">Email</span>
            </a>
          </div>
        </div>

        {/* Línea divisoria decorativa */}
        <div className="footer-divider">
          <span>★ ✂ ★ ✂ ★ ✂ ★</span>
        </div>

        {/* Información adicional */}
        <div className="footer-info">
          <p className="footer-text">
            <span className="highlight">Diseño de Moda</span> · Experimentación · Cultura Visual
          </p>
          <p className="copyright">
            © {currentYear} · Hecho con ♥ y mucha creatividad
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
          <div className="deco-element deco-2">✂</div>
          <div className="deco-element deco-3">◆</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
