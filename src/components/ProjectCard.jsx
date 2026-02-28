import { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className={`project-card ${isEven ? 'bg-black' : 'bg-pink'}`}>
      <div className="project-content">
        {/* Imagen principal con efecto collage */}
        <div className="project-image-container">
          <div className="project-main-image">
            {project.coverVideo ? (
              <video
                src={project.coverVideo}
                className="project-cover-image"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : project.coverImage ? (
              <img 
                src={project.coverImage} 
                alt={project.title}
                className="project-cover-image"
              />
            ) : (
              <div className="image-placeholder">
                <span className="placeholder-icon">👗</span>
              </div>
            )}
            <div className="image-cutout">- - - cut here...</div>
          </div>
          
          {/* Elementos decorativos tipo paper dolls */}
          <div className="decoration-elements">
            <div className="paper-clip">📎</div>
            <div className="star-sticker">★</div>
          </div>
        </div>

        {/* Información del proyecto */}
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          
          <div className="project-meta">
            <span className="meta-tag">{project.category}</span>
            <span className="meta-tag">{project.year}</span>
          </div>

          <p className="project-description">
            {project.description}
          </p>

          <div className="project-keywords">
            {project.keywords.map((keyword, i) => (
              <span key={i} className="project-keyword">{keyword}</span>
            ))}
          </div>

          {/* Premio/Reconocimiento */}
          {project.award && (
            <div className="project-award">
              {project.award}
            </div>
          )}

          {/* Inspiración y referencias */}
          {project.inspiration && (
            <div className="project-inspiration cut-out">
              <strong>Inspiración:</strong> {project.inspiration}
            </div>
          )}

          {/* Materiales */}
          {project.materials && (
            <div className="project-materials">
              <strong className="highlight">Materiales:</strong> {project.materials}
            </div>
          )}

          {/* Botón para expandir galería */}
          <button 
            className="expand-button"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? '↑ Ocultar Galería' : '↓ Ver Galería'}
          </button>
        </div>
      </div>

      {/* Galería expandible */}
      {isExpanded && (
        <div className="project-gallery">
          <h4>PROCESO DE DISEÑO & DETALLES</h4>
          <div className={`gallery-grid ${project.verticalPhotos ? 'vertical-photos' : ''}`}>
            {project.gallery?.map((item, i) => (
              <div key={i} className="gallery-item">
                {typeof item === 'object' && item.src ? (
                  <img 
                    src={item.src} 
                    alt={item.title || `Imagen ${i + 1}`}
                    className="gallery-image"
                    title={item.title}
                  />
                ) : (
                  <div className="gallery-placeholder">
                    <span>📷 {i + 1}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Borde decorativo tipo recorte */}
      <div className="border-decoration">
        <span>- - - - - - - - - - - - - - - - - - - - - -</span>
      </div>
    </div>
  );
};

export default ProjectCard;
