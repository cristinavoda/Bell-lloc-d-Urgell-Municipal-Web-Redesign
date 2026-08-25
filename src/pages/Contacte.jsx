import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
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


            <form className="contacte-form">

              <div className="form-row">

                <div className="form-field">

                  <label htmlFor="nom">
                    Nom
                  </label>

                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    placeholder="Introduïu el vostre nom complet"
                    autoComplete="name"
                  />

                </div>


                <div className="form-field">

                  <label htmlFor="email">
                    Correu electrònic
                    <span>*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Escriviu la vostra adreça de correu electrònic"
                    autoComplete="email"
                    required
                  />

                </div>

              </div>


              <div className="form-field">

                <label htmlFor="assumpte">
                  Assumpte <span>*</span>
                </label>

                <input
                  id="assumpte"
                  name="assumpte"
                  type="text"
                  placeholder="Assumpte del missatge"
                  required
                />

              </div>


              <div className="form-field">

                <label htmlFor="missatge">
                  Missatge <span>*</span>
                </label>

                <textarea
                  id="missatge"
                  name="missatge"
                  rows="7"
                  placeholder="Escriviu el missatge que voleu enviar."
                  required
                />

              </div>


              <button
                type="submit"
                className="contacte-submit"
              >
                Enviar missatge
                <Send
                  size={18}
                  strokeWidth={1.8}
                />
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


            <div className="location-map">

              <div className="location-placeholder">

                <MapPin
                  size={34}
                  strokeWidth={1.5}
                />

                <strong>
                  Plaça Major, 8
                </strong>

                <span>
                  25220 Bell-lloc d'Urgell
                </span>

              </div>

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