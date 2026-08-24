import { useEffect, useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  // Cerrar con Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="site-header">

      <div className="header-container">

        {/* LOGO */}
        <NavLink
          to="/"
          className="site-logo"
          onClick={closeMenu}
          aria-label="Ajuntament de Bell-lloc d'Urgell"
        >
          <img
            src="/logo.png"
            alt="Ajuntament de Bell-lloc d'Urgell"
            className="logo-image"
          />

          <div className="logo-text">
            <strong>Bell-lloc d'Urgell</strong>
            <span>Ajuntament</span>
          </div>
        </NavLink>


        {/* DESKTOP NAV */}
        <nav
          className="main-nav"
          aria-label="Navegació principal"
        >
          <NavLink to="/" className="nav-link">
            Inici
          </NavLink>

          <NavLink to="/ajuntament" className="nav-link">
            Ajuntament
          </NavLink>

          <NavLink to="/ciutadania" className="nav-link">
            Ciutadania
          </NavLink>

          <NavLink to="/activitats" className="nav-link">
            Activitats
          </NavLink>

          <NavLink to="/actualitat" className="nav-link">
            Actualitat
          </NavLink>
        </nav>


        {/* ACTIONS */}
        <div className="header-actions">

          <button
            type="button"
            className="search-button"
            aria-label="Cercar al lloc web"
          >
            <Search size={20} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="Obrir menú"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu size={24} strokeWidth={1.8} />
          </button>

        </div>

      </div>


      {/* OVERLAY */}

      <div
        className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />


      {/* MOBILE SIDEBAR */}

      <aside
        id="mobile-navigation"
        className={`mobile-sidebar ${menuOpen ? 'open' : ''}`}
        aria-label="Menú de navegació"
      >

        <div className="mobile-sidebar-header">

          <span>Menú</span>

          <button
            type="button"
            className="mobile-close"
            onClick={closeMenu}
            aria-label="Tancar menú"
          >
            <X size={24} strokeWidth={1.8} />
          </button>

        </div>


        <nav
          className="mobile-nav"
          aria-label="Navegació mòbil"
        >

          <NavLink
            to="/"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Inici
          </NavLink>

          <NavLink
            to="/ajuntament"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Ajuntament
          </NavLink>

          <NavLink
            to="/ciutadania"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Ciutadania
          </NavLink>

          <NavLink
            to="/activitats"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Activitats
          </NavLink>

          <NavLink
            to="/actualitat"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Actualitat
          </NavLink>

        </nav>

      </aside>

    </header>
  )
}

export default Header