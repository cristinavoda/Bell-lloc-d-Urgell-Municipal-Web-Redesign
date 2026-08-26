import { Send } from 'lucide-react'

import BreadCrumb from '../components/BreadCrumb'
import '../styles/ContactaAlcalde.css'


function ContactaAlcalde() {
  return (
    <main className="contacta-alcalde-page">

      <div className="contacta-alcalde-container">

        

        <BreadCrumb
          items={[
            {
              label: 'Ajuntament',
              path: '/ajuntament',
            },
            {
              label: 'Alcaldia',
              path: '/ajuntament/alcaldia',
            },
            {
              label: 'Contacta amb l’Alcalde',
            },
          ]}
        />


        

        <section className="contacta-alcalde-intro">

          <span className="section-eyebrow">
            ALCALDIA
          </span>

          <h1>
            Contacta amb l’Alcalde
          </h1>

          <p>
            Tens una consulta, proposta o missatge que
            vols fer arribar directament a l’Alcaldia?
          </p>

        </section>


        

        <section className="contacta-alcalde-form-section">

          <div className="contacta-alcalde-heading">

            <span>
              ESCRIU AL’ALCALDE
            </span>

            <h2>
              Envia el teu missatge
            </h2>

          </div>


          <form className="contacta-alcalde-form">

            <div className="form-row">

              <div className="form-field">

                <label htmlFor="alcalde-nom">
                  Nom
                </label>

                <input
                  id="alcalde-nom"
                  name="nom"
                  type="text"
                  placeholder="El teu nom"
                  autoComplete="name"
                />

              </div>


              <div className="form-field">

                <label htmlFor="alcalde-email">
                  Correu electrònic <span>*</span>
                </label>

                <input
                  id="alcalde-email"
                  name="email"
                  type="email"
                  placeholder="El teu correu electrònic"
                  autoComplete="email"
                  required
                />

              </div>

            </div>


            <div className="form-field">

              <label htmlFor="alcalde-assumpte">
                Assumpte <span>*</span>
              </label>

              <input
                id="alcalde-assumpte"
                name="assumpte"
                type="text"
                placeholder="De què vols parlar?"
                required
              />

            </div>


            <div className="form-field">

              <label htmlFor="alcalde-missatge">
                Missatge <span>*</span>
              </label>

              <textarea
                id="alcalde-missatge"
                name="missatge"
                rows="8"
                placeholder="Escriu el teu missatge..."
                required
              />

            </div>


            <button
              type="submit"
              className="contacta-alcalde-submit"
            >
              Enviar missatge

              <Send
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </button>

          </form>


          {/* AVÍS */}

          <p className="contacta-alcalde-note">
            Aquest formulari és una proposta de la nova web
            municipal. En la versió definitiva, els missatges
            es dirigiran al canal oficial que determini
            l’Ajuntament.
          </p>

        </section>

      </div>

    </main>
  )
}

export default ContactaAlcalde