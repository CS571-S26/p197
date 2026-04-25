import './CommunityPage.css';

export default function CommunityPage() {
  return (
    <div className="community-page">
      <section className="community-hero">
        <div className="community-hero-content">
          <span className="eyebrow">Por la Comunidad</span>
          <h1>Celebrando el apoyo local</h1>
          <p>
            Encuentra fotos y videos de nuestro equipo trabajando con vecinos,
            contribuyendo con donaciones y participando en eventos comunitarios.
          </p>
        </div>
      </section>

      <section className="community-gallery">
        <h2>Galería de momentos</h2>
        <div className="gallery-grid">
          <div className="gallery-card">
            <img
              src={`${import.meta.env.BASE_URL}c1.jpg`}
              alt="Voluntarios en comunidad"
            />
            <p>Voluntarios ayudando en la entrega de paquetes y apoyo local.</p>
          </div>
          <div className="gallery-card">
            <img
              src={`${import.meta.env.BASE_URL}c3.jpg`}
              alt="Donaciones para la comunidad"
            />
            <p>Acopio de donaciones que llegan a familias necesitadas.</p>
          </div>
        </div>
      </section>

      <section className="community-media">
        <h2>Videos destacados</h2>
        <div className="media-grid">
          <div className="media-card">
            <video controls poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80">
              <source
                src={`${import.meta.env.BASE_URL}c2.mp4`}
                type="video/mp4"
              />
              Tu navegador no soporta reproducir este video.
            </video>
            <p>Resumen del evento "Apoyo para la comunidad".</p>
          </div>
          <div className="media-card">
            <video controls poster="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80">
              <source
                src={`${import.meta.env.BASE_URL}c4.mp4`}
                type="video/mp4"
              />
              Tu navegador no soporta reproducir este video.
            </video>
            <p>Historias de agradecimiento de familias locales.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
