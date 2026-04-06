import './Testimonials.css'

const testimonials = [
  {
    name: 'Ayşe Y.',
    role: 'Yazılım Geliştirici',
    text: 'Toplantı notlarımı hızlıca almak için kullanıyorum. Çevrimdışı çalışması büyük avantaj.'
  },
  {
    name: 'Mehmet K.',
    role: 'Öğrenci',
    text: 'Ders notlarımı burada tutuyorum. Arama özelliği sayesinde istediğim notu saniyelerde buluyorum.'
  },
  {
    name: 'Zeynep A.',
    role: 'Proje Yöneticisi',
    text: 'Basit ve etkili. Karmaşık not uygulamalarından bıkanlar için birebir.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Kullanıcı Yorumları</h2>
        <p className="section-subtitle">
          Not Defteri kullanan insanların deneyimleri.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-text">{t.text}</div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.name[0]}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
