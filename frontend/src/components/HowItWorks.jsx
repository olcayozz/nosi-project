const steps = [
  {
    step: '01',
    title: 'Hesap Oluşturun',
    desc: 'E-posta adresinizle saniyeler içinde ücretsiz hesabınızı oluşturun.'
  },
  {
    step: '02',
    title: 'Notlarınızı Yazın',
    desc: 'Fikirlerinizi, toplantı notlarınızı veya günlük düşüncelerinizi yazmaya başlayın.'
  },
  {
    step: '03',
    title: 'AI\'ı Kullanın',
    desc: 'Özetleme, etiketleme ve arama gibi AI özelliklerinden yararlanın.'
  },
  {
    step: '04',
    title: 'Organize Edin',
    desc: 'Notlarınızı kategorilere ayırın, etiketleyin ve kolayca bulun.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Nasıl Çalışır?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Dört basit adımda NosiAI ile notlarınızı akıllıca yönetin.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center">
              <div className="text-5xl font-bold text-indigo-200 mb-4">{s.step}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full">
                  <svg className="w-8 h-8 text-indigo-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
