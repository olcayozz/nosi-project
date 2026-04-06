import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          <span className="logo-icon">&#9998;</span>
          Not Defteri
        </a>

        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü aç/kapat"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Özellikler</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>Nasıl Çalışır</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Yorumlar</a>
          <a href="#cta" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Hemen Başla</a>
        </nav>
      </div>
    </header>
  )
}
