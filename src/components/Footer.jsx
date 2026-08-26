import {
  MapPin,
  Phone,
  Mail,
  Clock3
} from 'lucide-react'
import { Link } from 'react-router-dom'

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
{/* CONTACTE */}

<div className="footer-contact">

  <h2>
    Contacte
  </h2>

  <p>
    <MapPin
      size={18}
      strokeWidth={1.7}
      aria-hidden="true"
    />

    <span>
      Pl. Major, 8<br />
      25220 Bell-lloc d'Urgell
    </span>
  </p>

  <p>
    <Phone
      size={18}
      strokeWidth={1.7}
      aria-hidden="true"
    />

    <a href="tel:+34973560100">
      973 560 100
    </a>
  </p>

  <p>
    <Mail
      size={18}
      strokeWidth={1.7}
      aria-hidden="true"
    />

    <a href="mailto:ajuntament@bell-lloc.cat">
      ajuntament@bell-lloc.cat
    </a>
  </p>

  <p className="footer-contact-hours">
    <Clock3
      size={18}
      strokeWidth={1.7}
      aria-hidden="true"
    />

    <span>
      Dilluns a divendres · 8:00–14:00 h
    </span>
  </p>

  <Link
    to="/contacte"
    className="footer-contact-link"
  >
    Més informació de contacte →
  </Link>

</div>

      </div>


      

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <span>
            © {new Date().getFullYear()} Ajuntament de Bell-lloc d'Urgell
          </span>
<div className="footer-links">

  <span>
    Projecte desenvolupat per Cristina Voda
  </span>

  <a
    href="mailto:critinavoda483@gmail.com"
  >
    Contacte
  </a>

  <a href="/accessibilitat">
    Accessibilitat
  </a>

</div>
         
        </div>

      </div>

    </footer>
  )
}

export default Footer