import './CTA.css'

export default function CTA() {
  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-inner">
          <h2 className="cta-title">Hemen Not Almaya Başla</h2>
          <p className="cta-desc">
            Kayıt yok, kurulum yok. Tarayıcını aç ve notlarını yazmaya başla.
          </p>
          <a href="./html/index.html" className="btn btn-white">Not Defteri'ni Aç</a>
        </div>
      </div>
    </section>
  )
}
