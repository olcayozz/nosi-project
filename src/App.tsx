import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    {
      title: "İleri Teknoloji",
      description: "En son teknolojileri kullanarak Size en iyi çözümleri sunuyoruz.",
      icon: "🚀"
    },
    {
      title: "Uzman Takım",
      description: "Sektörde uzun yıllar deneyim sahibi uzman kadromuz Size hizmet veriyor.",
      icon: "👥"
    },
    {
      title: "Özelleştirilmiş Çözümler",
      description: "Şirketinizin ihtiyaçlarına özel çözümler geliştiriyoruz.",
      icon: "🔧"
    },
    {
      title: "7/24 Destek",
      description: "Sorularınız için her zaman yanımızda.",
      icon: "🌟"
    }
  ]

  const navLinks = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Hakkımızda", href: "#about" },
    { name: "Hizmetler", href: "#services" },
    { name: "İletişim", href: "#contact" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-blue-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NOSİ
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-blue-800/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 hover:bg-slate-700"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Geleceği Şekillendiriyoruz
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Nosi olarak, şirketinizin dijital dönüşümünü gerçekleştirmek için
            yenilikçi çözümler sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            >
              Ücretsiz Danışmanlık Alın
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold text-lg transition-all"
            >
              Daha Fazla Bilgi
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hizmetlerimiz</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Şirketinizin ihtiyaçlarına özel, kaliteli çözüm sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Nosi Hakkında</h2>
              <p className="text-gray-300 text-lg mb-6">
                Nosi olarak, 2024 yılında kurulduğumuzdan beri dijital teknoloji
                alanında hızlı bir gelişim gösteriyoruz. Müşterilerimize en kaliteli
                hizmeti sunmak için sürekli kendimizi geliştiriyor, yenilikçi çözümler
                üretiyoruz.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Our team consists of experienced professionals who are passionate
                about delivering excellence in every project we undertake.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-400">100+</div>
                  <div className="text-gray-400">Müşteri</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400">50+</div>
                  <div className="text-gray-400">Proje</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-400">10+</div>
                  <div className="text-gray-400">Yıl</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-slate-800 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl">💡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">İletişime Geçin</h2>
            <p className="text-gray-300 text-lg">
              Projeleriniz için bize ulaşın, gemeinsam geleceği şekillendirelim
            </p>
          </div>

          <form className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 mb-2">Adınız</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Adınızı girin"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Soyadınız</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Soyadınızı girin"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">E-posta</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                placeholder="email@örnek.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Mesajınız</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                placeholder="Mesajınızı buraya yazın..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            >
              Mesajı Gönder
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NOSİ
              </span>
              <p className="text-gray-400 mt-4">
                Geleceği şekillendiren yenilikçi çözümler
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Bağlantılar</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-blue-400">Ana Sayfa</a></li>
                <li><a href="#about" className="hover:text-blue-400">Hakkımızda</a></li>
                <li><a href="#services" className="hover:text-blue-400">Hizmetler</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">İletişim</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📧 info@nosi.com</li>
                <li>📞 +90 (123) 456 78 90</li>
                <li>📍 İstanbul, Türkiye</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nosi. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
