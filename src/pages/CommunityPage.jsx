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
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80"
              alt="Voluntarios en comunidad"
            />
            <p>Voluntarios ayudando en la entrega de paquetes y apoyo local.</p>
          </div>
          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80"
              alt="Donaciones para la comunidad"
            />
            <p>Acopio de donaciones que llegan a familias necesitadas.</p>
          </div>
          <div className="gallery-card">
            <img
              src="https://images.unsplash.com/photo-1521790797524-b2497295b8b5?w=800&q=80"
              alt="Evento comunitario"
            />
            <p>Eventos especiales para celebrar la colaboración local.</p>
          </div>
        </div>
      </section>

      <section className="community-media">
        <h2>Videos destacados</h2>
        <div className="media-grid">
          <div className="media-card">
            <video controls poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80">
              <source
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                type="video/mp4"
              />
              Tu navegador no soporta reproducir este video.
            </video>
            <p>Resumen del evento "Apoyo para la comunidad".</p>
          </div>
          <div className="media-card">
            <video controls poster="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80">
              <source
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                type="video/webm"
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
