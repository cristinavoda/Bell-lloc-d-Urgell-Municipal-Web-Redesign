import {
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react'

import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* IDENTITAT */}

        <div className="footer-brand">

          <img
            src="/logo.png"
            alt="Ajuntament de Bell-lloc d'Urgell"
            className="footer-logo"
          />

          <p>
            Ajuntament de Bell-lloc d'Urgell
          </p>

          <span>
            Informació i serveis municipals
          </span>

        </div>


        {/* AJUNTAMENT */}

        <div className="footer-column">

          <h2>
            Ajuntament
          </h2>

          <a href="/ajuntament">
            Organització
          </a>

          <a href="/ajuntament/serveis">
            Serveis municipals
          </a>

          <a href="/ajuntament/actualitat">
            Actualitat
          </a>

        </div>


        {/* CIUTADANIA */}

        <div className="footer-column">

          <h2>
            Ciutadania
          </h2>

          <a href="/ciutadania">
            Serveis
          </a>

          <a href="/activitats">
            Activitats
          </a>

          <a href="/actualitat">
            Notícies
          </a>

        </div>


        {/* CONTACTE */}

        <div className="footer-contact">

          <h2>
            Contacte
          </h2>

          <p>
            <MapPin size={18} aria-hidden="true" />
            <span>
              Bell-lloc d'Urgell
            </span>
          </p>

          <p>
            <Phone size={18} aria-hidden="true" />
            <span>
              Telèfon de l'Ajuntament
            </span>
          </p>

          <p>
            <Mail size={18} aria-hidden="true" />
            <span>
              info@bell-lloc.cat
            </span>
          </p>

        </div>

      </div>


      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <span>
            © {new Date().getFullYear()} Ajuntament de Bell-lloc d'Urgell
          </span>

          <div className="footer-links">

            <a href="/accessibilitat">
              Accessibilitat
            </a>

            <a href="/privacitat">
              Privacitat
            </a>

            <a href="/cookies">
              Cookies
            </a>

            <a href="/mapa-web">
              Mapa web
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer