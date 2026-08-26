import { Link } from 'react-router-dom'

import BreadCrumb from '../components/BreadCrumb'
import '../styles/Alcaldia.css'


function Alcaldia() {
  return (
    <main className="alcaldia-page">

      <div className="alcaldia-container">

       

        <BreadCrumb
          items={[
            {
              label: 'Ajuntament',
              path: '/ajuntament',
            },
            {
              label: 'Alcaldia',
            },
          ]}
        />


       

        <section className="alcaldia-intro">

          <span className="section-eyebrow">
            AJUNTAMENT
          </span>

          <h1>
            Alcaldia
          </h1>

          <p>
            Coneix l’Alcaldia de Bell-lloc d’Urgell,
            la benvinguda de l’alcalde i el canal de
            contacte directe amb l’Alcaldia.
          </p>

        </section>


       

        <section className="alcaldia-options">

        

          <Link
            to="/ajuntament/alcaldia/benvinguda"
            className="alcaldia-option"
          >

            <div className="alcaldia-option-content">

              <span className="alcaldia-option-label">
                MISSATGE DE L’ALCALDE
              </span>

              <h2>
                Benvinguda de l’Alcalde
              </h2>

              <p>
                Un missatge de l’alcalde sobre Bell-lloc
                d’Urgell, el municipi i la seva ciutadania.
              </p>

            </div>

            <span
              className="alcaldia-option-arrow"
              aria-hidden="true"
            >
              →
            </span>

          </Link>


         

          <Link
            to="/ajuntament/alcaldia/contacte"
            className="alcaldia-option"
          >

            <div className="alcaldia-option-content">

              <span className="alcaldia-option-label">
                CONTACTE DIRECTE
              </span>

              <h2>
                Contacta amb l’Alcalde
              </h2>

              <p>
                Envia una consulta, proposta o missatge
                directament a l’Alcaldia.
              </p>

            </div>

            <span
              className="alcaldia-option-arrow"
              aria-hidden="true"
            >
              →
            </span>

          </Link>

        </section>


        

        <section className="alcaldia-note">

          <p>
            L’Alcaldia posa a disposició de la ciutadania
            un canal directe per fer arribar consultes
            i propostes.
          </p>

        </section>

      </div>

    </main>
  )
}

export default Alcaldia