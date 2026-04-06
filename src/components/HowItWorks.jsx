import './HowItWorks.css'

const steps = [
  {
    number: '1',
    title: 'Uygulamayı Aç',
    desc: 'Tarayıcınızda Not Defteri sayfasını açın. Kurulum veya kayıt gerekmez.'
  },
  {
    number: '2',
    title: 'Notunu Yaz',
    desc: 'Yeni not butonuna tıklayın ve başlığınızı ile içeriğinizi yazmaya başlayın.'
  },
  {
    number: '3',
    title: 'Otomatik Kaydedilir',
    desc: 'Yazdıklarınız anında kaydedilir. Sayfayı kapatsanız bile notlarınız güvende.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <h2 className="section-title">Nasıl Çalışır?</h2>
        <p className="section-subtitle">
          Üç basit adımda notlarınızı yönetmeye başlayın.
        </p>
        <div className="steps">
          {steps.map((step, i) => (
            <div className="step" key={i}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
