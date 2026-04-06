import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            Fikirlerini <span className="highlight">Hızca</span> Not Et
          </h1>
          <p className="hero-description">
            Basit, hızlı ve çevrimdışı çalışan not defteri uygulaması. Notların
            tarayıcında güvende, internet bağlantısı gerekmez.
          </p>
          <div className="hero-actions">
            <a href="#cta" className="btn btn-primary">Ücretsiz Dene</a>
            <a href="#features" className="btn btn-outline">Özellikleri Gör</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-mockup">
            <div className="mockup-sidebar">
              <div className="mockup-sidebar-header">
                <div className="mockup-dot red"></div>
                <div className="mockup-dot yellow"></div>
                <div className="mockup-dot green"></div>
              </div>
              <div className="mockup-search"></div>
              <div className="mockup-note selected">
                <div className="mockup-note-title"></div>
                <div className="mockup-note-preview"></div>
              </div>
              <div className="mockup-note">
                <div className="mockup-note-title"></div>
                <div className="mockup-note-preview"></div>
              </div>
              <div className="mockup-note">
                <div className="mockup-note-title"></div>
                <div className="mockup-note-preview"></div>
              </div>
            </div>
            <div className="mockup-editor">
              <div className="mockup-editor-title"></div>
              <div className="mockup-editor-line w100"></div>
              <div className="mockup-editor-line w80"></div>
              <div className="mockup-editor-line w90"></div>
              <div className="mockup-editor-line w60"></div>
              <div className="mockup-editor-line w75"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--bg-alt)"/>
        </svg>
      </div>
    </section>
  )
}
