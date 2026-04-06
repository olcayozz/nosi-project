const plans = [
  {
    name: 'Ücretsiz',
    price: '0',
    period: '/ay',
    desc: 'Bireysel kullanım için temel özellikler.',
    features: ['50 nota kadar', 'Temel AI özetleme', '1 GB depolama', 'Tek cihaz'],
    cta: 'Ücretsiz Başla',
    highlight: false
  },
  {
    name: 'Pro',
    price: '49',
    period: '/ay',
    desc: 'Profesyoneller için gelişmiş özellikler.',
    features: ['Sınırsız not', 'Gelişmiş AI özellikleri', '10 GB depolama', 'Tüm cihazlar', 'Öncelikli destek', 'API erişimi'],
    cta: 'Pro\'ya Geç',
    highlight: true
  },
  {
    name: 'Takım',
    price: '149',
    period: '/ay',
    desc: 'Ekipler için işbirliği ve yönetim.',
    features: ['Sınırsız everything', 'Takım yönetimi', '100 GB depolama', 'SSO & güvenlik', 'Özel AI eğitimi', '7/24 destek'],
    cta: 'İletişime Geç',
    highlight: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Fiyatlandırma
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            İhtiyacınıza uygun planı seçin. İstediğiniz zaman yükseltin.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-2xl p-8 ${p.highlight ? 'bg-indigo-600 text-white shadow-xl scale-105 border-0' : 'bg-white border border-gray-200'}`}>
              {p.highlight && (
                <span className="inline-block bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                  En Popüler
                </span>
              )}
              <h3 className={`text-lg font-semibold ${p.highlight ? 'text-white' : 'text-gray-900'}`}>{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className={`text-4xl font-bold ${p.highlight ? 'text-white' : 'text-gray-900'}`}>₺{p.price}</span>
                <span className={`text-sm ${p.highlight ? 'text-indigo-200' : 'text-gray-500'}`}>{p.period}</span>
              </div>
              <p className={`mt-2 text-sm ${p.highlight ? 'text-indigo-100' : 'text-gray-600'}`}>{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <svg className={`w-5 h-5 flex-shrink-0 ${p.highlight ? 'text-indigo-200' : 'text-indigo-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={p.highlight ? 'text-indigo-100' : 'text-gray-700'}>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 rounded-xl text-sm font-medium transition ${p.highlight ? 'bg-white text-indigo-600 hover:bg-gray-100' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
