import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-gray-900">
            Nosi<span className="text-indigo-600">AI</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition">Özellikler</a>
            <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition">Nasıl Çalışır</a>
            <a href="#testimonials" className="text-sm text-gray-600 hover:text-gray-900 transition">Yorumlar</a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition">Fiyatlandırma</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition">Giriş Yap</a>
            <a href="#cta" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Ücretsiz Başla</a>
          </div>

          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-3 pt-4">
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>Özellikler</a>
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>Nasıl Çalışır</a>
              <a href="#testimonials" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>Yorumlar</a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>Fiyatlandırma</a>
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Giriş Yap</a>
                <a href="#cta" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-center">Ücretsiz Başla</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
