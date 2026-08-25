import { useEffect, useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SearchOverlay from './SearchOverlay'


import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }
const [searchOpen, setSearchOpen] = useState(false)
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
            <strong> Ajuntament de Bell-lloc d'Urgell</strong>
            
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
          
          <NavLink to="/municipi" className="nav-link">
            Municipi
          </NavLink>
          
          <NavLink to="/seu-electronica" className="nav-link">
            Seu Electronica
          </NavLink>

          <NavLink to="/ciutadania" className="nav-link">
            Ciutadania
          </NavLink>

          <NavLink to="/activitats" className="nav-link">
            Activitats
          </NavLink>

          <NavLink to="/bell-lloc-soluciona" className="nav-link">
        Bell-lloc soluciona
          </NavLink>
           
          <NavLink to="/contacte" className="nav-link">
         Contacte
          </NavLink>
        </nav>


<div className="header-actions">

  <button
    type="button"
    className="search-button"
    aria-label="Cercar al lloc web"
    onClick={() => setSearchOpen(true)}
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
  to="/municipi"
  className="mobile-nav-link"
  onClick={closeMenu}
>
  Municipi
</NavLink>
          
          <NavLink to="/seu-electronica" className="mobile-nav-link">
            Seu Electronica
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
  to="/bell-lloc-soluciona"
  className="mobile-nav-link"
  onClick={closeMenu}
>
  Bell-lloc Soluciona
</NavLink>

<NavLink
  to="/contacte"
  className="mobile-nav-link"
  onClick={closeMenu}
>
  Contacte
</NavLink>
         
<button
  type="button"
  className="search-button"
  onClick={() => {
    closeMenu()
    setSearchOpen(true)
  }}
  aria-label="Cercar al lloc web"
>
  <Search size={20} strokeWidth={1.8} />
</button>

        </nav>
          </aside>

  <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />



    </header>
  )
}

export default Header