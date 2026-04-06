const testimonials = [
  {
    name: 'Ayşe Yılmaz',
    role: 'Yazılım Mühendisi',
    text: 'NosiAI sayesinde toplantı notlarımı otomatik özetleyebiliyorum. Artık hiçbir detayı kaçırmıyorum.',
    avatar: 'AY'
  },
  {
    name: 'Mehmet Kaya',
    role: 'Ürün Yöneticisi',
    text: 'Akıllı arama özelliği mükemmel. Eski notlarım arasında saniyeler içinde ihtiyacım olanı bulabiliyorum.',
    avatar: 'MK'
  },
  {
    name: 'Zeynep Demir',
    role: 'Akademisyen',
    text: 'Araştırma notlarımı organize etmek için harika bir araç. AI destekli etiketleme çok işime yarıyor.',
    avatar: 'ZD'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Kullanıcılar Ne Diyor?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Binlerce kullanıcı NosiAI ile daha verimli çalışıyor.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
