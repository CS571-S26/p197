import './AboutPage.css';
 
export default function AboutPage() {
  const values = [
    {
      icon: '🎁',
      title: 'Para cada ocasión',
      description:
        'Bodas, quinceañeras, graduaciones, cumpleaños y más. Tenemos el regalo perfecto para cada momento especial de tu vida.',
    },
    {
      icon: '💛',
      title: 'Atención personalizada',
      description:
        'Nos tomamos el tiempo para conocerte y ayudarte a encontrar exactamente lo que buscas. Cada cliente es único para nosotros.',
    },
    {
      icon: '🌱',
      title: 'Raíces comunitarias',
      description:
        'Somos parte de esta comunidad. Creemos en apoyar a nuestros vecinos y en crecer juntos como familia.',
    },
  ];
 
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <span className="eyebrow">Nuestra historia</span>
          <h1>Más de 16 años regalando alegría</h1>
          <p>
            Desde nuestros inicios, en Novedades Angel y Chuy hemos tenido un
            solo propósito: ayudarte a celebrar los momentos que más importan
            con regalos llenos de cariño.
          </p>
        </div>
        <div className="about-hero-decoration" aria-hidden="true">
          <span>🎀</span>
          <span>🎊</span>
          <span>🎁</span>
          <span>🎉</span>
          <span>✨</span>
        </div>
      </section>
 
      {/* Story */}
      <section className="about-story">
        <div className="story-card">
          <div className="story-badge">Est. 2009</div>
          <h2>Quiénes somos</h2>
          <p>
            Novedades Angel y Chuy nació de una pasión simple: hacer feliz a la
            gente. Durante más de <strong>16 años</strong>, hemos sido parte de
            incontables celebraciones — desde los primeros pasos de un bebé
            hasta las graduaciones y bodas que marcan una vida.
          </p>
          <p>
            Somos una tienda de regalos con alma. Aquí no solo encontrarás
            productos bonitos — encontrarás personas que se preocupan
            genuinamente por ayudarte a expresar lo que sientes.
          </p>
          <p>
            Nos enorgullece <strong>servir a nuestra comunidad</strong> con
            dedicación, honestidad y mucho corazón. Porque para nosotros, cada
            regalo cuenta una historia.
          </p>
        </div>
      </section>
 
      {/* Values */}
      <section className="about-values">
        <h2>Lo que nos mueve</h2>
        <div className="values-grid">
          {values.map((v) => (
            <div className="value-card" key={v.title}>
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* CTA */}
      <section className="about-cta">
        <div className="cta-inner">
          <h2>¿Listo para encontrar el regalo perfecto?</h2>
          <p>
            Visítanos o contáctanos — con gusto te ayudamos a elegir algo
            especial.
          </p>
          <a href="/contact" className="cta-button">
            Contáctanos
          </a>
        </div>
      </section>
    </div>
  );
}