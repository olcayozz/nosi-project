import './Features.css'

const features = [
  {
    icon: '⚡',
    title: 'Anında Açılır',
    desc: 'Sayfa yüklenir yüklenmez not almaya başlayın. Bekleme süresi yok, kayıt yok.'
  },
  {
    icon: '🔒',
    title: 'Güvenli ve Özel',
    desc: 'Notlarınız yalnızca tarayıcınızda saklanır. Hiçbir veri sunucuya gönderilmez.'
  },
  {
    icon: '📱',
    title: 'Mobil Uyumlu',
    desc: 'Telefon, tablet veya bilgisayarda sorunsuz çalışır. Responsive tasarım.'
  },
  {
    icon: '🔍',
    title: 'Gerçek Zamanlı Arama',
    desc: 'Notlarınız arasında anında arama yapın. Başlık ve içerikte filtreleme.'
  },
  {
    icon: '💾',
    title: 'Otomatik Kayıt',
    desc: 'Her değişiklik otomatik olarak kaydedilir. Veri kaybı yaşamazsınız.'
  },
  {
    icon: '🌐',
    title: 'Çevrimdışı Çalışır',
    desc: 'İnternet bağlantısı gerektirmez. Her yerde notlarınızı kullanın.'
  }
]

export default function Features() {
  return (
    <section id="features" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Özellikler</h2>
        <p className="section-subtitle">
          Not Defteri, günlük not ihtiyaçlarınız için ihtiyacınız olan her şeye sahip.
        </p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
