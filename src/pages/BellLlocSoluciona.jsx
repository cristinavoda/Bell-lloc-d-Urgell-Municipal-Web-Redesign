import {
  AlertCircle,
  CheckCircle2,
  Search,
  ArrowRight,
  MapPin,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import BreadCrumb from '../components/BreadCrumb'
import '../styles/BellLlocSoluciona.css'


const sections = [
  {
    title: 'Comunica un problema',
    description:
      'Has detectat una incidència o un problema al municipi? Comunica-ho a l’Ajuntament.',
    path: '/bell-lloc-soluciona/comunica',
    icon: AlertCircle,
    primary: true,
  },
  {
    title: 'Problemes detectats',
    description:
      'Consulta les incidències que ja han estat comunicades al municipi.',
    path: '/bell-lloc-soluciona/detectats',
    icon: Search,
  },
  {
    title: 'Problemes solucionats',
    description:
      'Consulta les incidències que ja han estat resoltes.',
    path: '/bell-lloc-soluciona/solucionats',
    icon: CheckCircle2,
  },
]


function BellLlocSoluciona() {
  return (
    <main className="bell-lloc-soluciona-page">

      <div className="bell-lloc-container">

       

        <BreadCrumb
          items={[
            {
              label: 'Inici',
              path: '/',
            },
            {
              label: 'Bell-lloc Soluciona',
            },
          ]}
        />


        

        <section className="soluciona-intro">

          <span className="section-eyebrow">
            PARTICIPACIÓ CIUTADANA
          </span>

          <h1>
            Bell-lloc Soluciona
          </h1>

          <p>
            Ajuda’ns a millorar Bell-lloc. Comunica incidències
            de l’espai públic i consulta l’estat dels problemes
            detectats al municipi.
          </p>

        </section>


       

        <section className="soluciona-feature">

          <div className="soluciona-feature-icon">
            <AlertCircle
              size={32}
              strokeWidth={1.7}
            />
          </div>

          <div className="soluciona-feature-content">

            <span>
              NECESSITES AVISAR L’AJUNTAMENT?
            </span>
           
  <p>Bústia de suggeriments</p> 
            <h2>
              Comunica un problema
            </h2>

            <p>
              Pots comunicar desperfectes, incidències o
              problemes detectats als carrers, espais públics
              i equipaments del municipi.
            </p>

            <Link
              to="/bell-lloc-soluciona/comunica"
              className="soluciona-primary-link"
            >
              Comunicar un problema
              <ArrowRight
                size={19}
                strokeWidth={1.8}
              />
            </Link>

          </div>

        </section>


       

        <section className="soluciona-sections">

          <div className="soluciona-section-header">

            <span>
              SEGUIMENT
            </span>

            <h2>
              Consulta les incidències
            </h2>

          </div>


          <div className="soluciona-links">

            {sections
              .filter((section) => !section.primary)
              .map((section) => {

                const Icon = section.icon

                return (
                  <Link
                    key={section.path}
                    to={section.path}
                    className="soluciona-link"
                  >

                    <div className="soluciona-link-icon">
                      <Icon
                        size={24}
                        strokeWidth={1.7}
                      />
                    </div>

                    <div className="soluciona-link-content">

                      <h3>
                        {section.title}
                      </h3>

                      <p>
                        {section.description}
                      </p>

                    </div>

                    <ArrowRight
                      size={20}
                      strokeWidth={1.7}
                      className="soluciona-link-arrow"
                    />

                  </Link>
                )
              })}

          </div>

        </section>


       

        <section className="soluciona-info">

          <MapPin
            size={22}
            strokeWidth={1.7}
          />

          <p>
            Quan comuniquis una incidència, intenta indicar
            clarament on es troba i explicar què està passant.
          </p>

        </section>

      </div>

    </main>
  )
}

export default BellLlocSoluciona