import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  
} from 'lucide-react'

import BreadCrumb from '../components/BreadCrumb'
import '../styles/Contacte.css'


function Contacte() {
  return (
    <main className="contacte-page">

      <div className="contacte-container">

        <BreadCrumb
          items={[
            {
              label: 'Inici',
              path: '/',
            },
            {
              label: 'Contacte',
            },
          ]}
        />


        {/* INTRO */}

        <section className="contacte-intro">

          <span className="section-eyebrow">
            AJUNTAMENT
          </span>

          <h1>
            Contacte
          </h1>

          <p>
            Tens alguna consulta? Contacta amb l’Ajuntament
            de Bell-lloc d’Urgell o envia’ns el teu missatge
            a través del formulari.
          </p>

        </section>


        {/* INFORMACIÓ DE CONTACTE */}

        <section className="contacte-info">

          <div className="contacte-info-item">

            <MapPin
              size={24}
              strokeWidth={1.7}
            />

            <div>
              <span>Adreça</span>

              <strong>
                Pl. Major, 8
              </strong>

              <p>
                25220 Bell-lloc d'Urgell
              </p>
            </div>

          </div>


          <div className="contacte-info-item">

            <Phone
              size={24}
              strokeWidth={1.7}
            />

            <div>
              <span>Telèfon</span>

              <a href="tel:+34973560100">
                973 560 100
              </a>
            </div>

          </div>


          <div className="contacte-info-item">

            <Mail
              size={24}
              strokeWidth={1.7}
            />

            <div>
              <span>Correu electrònic</span>

              <a href="mailto:ajuntament@bell-lloc.cat">
                ajuntament@bell-lloc.cat
              </a>
            </div>

          </div>


          <div className="contacte-info-item">

            <Clock3
              size={24}
              strokeWidth={1.7}
            />

            <div>
              <span>Horari d'atenció</span>

              <strong>
                De dilluns a divendres
              </strong>

              <p>
                De 8:00 a 14:00 h
              </p>
            </div>

          </div>

        </section>


        {/* FORMULARI + MAPA */}

        <section className="contacte-main">

          <div className="contacte-form-wrapper">

            <div className="contacte-section-heading">

              <span>
                ESCRIU-NOS
              </span>

              <h2>
                Formulari de contacte
              </h2>

            </div>
 <form className="contact-form">

          <div className="contact-form-row">

            <div className="contact-field">

              <label htmlFor="contact-name">
                Nom
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Introdui el vostre nom complet"
              />

            </div>


            <div className="contact-field">

              <label htmlFor="contact-email">
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="tu@email.com"
              />

            </div>

          </div>


          <div className="contact-field">

            <label htmlFor="contact-subject">
              Assumpte
            </label>

            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="Assumpte del missatge"
            />

          </div>


          <div className="contact-field">

            <label htmlFor="contact-message">
              Mensaje
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Escribiu el missatge que voleu enviar..."
            />

          </div>


          <button
            type="submit"
            className="contacte-submit"
          >
            Envia missatge
          </button>

        </form>



            
          </div>



 
          {/* MAPA / UBICACIÓ */}

          <aside className="contacte-location">

            <div className="location-heading">

              <span>
                ON SOM
              </span>

              <h2>
                Ajuntament de Bell-lloc d’Urgell
              </h2>

            </div>


          <div className="situacio-map">

 <iframe
      src="https://www.google.com/maps?q=Plaça+Major,+8,+25220+Bell-lloc+d'Urgell&output=embed"
      title="Mapa de l'Ajuntament de Bell-lloc d'Urgell"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
</div>






            <a
              href="https://www.google.com/maps/search/?api=1&query=Ajuntament+Bell-lloc+d'Urgell"
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              Com arribar-hi →
            </a>

          </aside>

        </section>

      </div>

    </main>
  )
}

export default Contacte