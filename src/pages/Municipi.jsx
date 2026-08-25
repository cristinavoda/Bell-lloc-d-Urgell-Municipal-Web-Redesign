import {
  MapPin,
  Navigation,
  Landmark,
  CalendarDays,
  Utensils,
  Camera,
  Building2,
  Bus,
  Users,
  HeartHandshake,
} from 'lucide-react'

import BreadCrumb from '../components/BreadCrumb'

import '../styles/Municipi.css'
import { Link } from 'react-router-dom'

const municipiSections = [
  {
    title: 'Dades i situació',
    description: 'Coneix el municipi, la seva situació i les principals dades.',
    path: '/municipi/dades-i-situacio',
    icon: MapPin,
  },
  {
    title: 'Com arribar-hi?',
    description: 'Informació per arribar a Bell-lloc d’Urgell.',
    path: '/municipi/com-arribar-hi',
    icon: Navigation,
  },
  {
    title: 'Història i patrimoni',
    description: 'Descobreix la història i el patrimoni del municipi.',
    path: '/municipi/historia-i-patrimoni',
    icon: Landmark,
  },
  {
    title: 'Calendari de festes',
    description: 'Festes, tradicions i celebracions de Bell-lloc.',
    path: '/municipi/calendari-de-festes',
    icon: CalendarDays,
  },
  {
    title: 'On menjar',
    description: 'Restaurants, bars i establiments de restauració.',
    path: '/municipi/on-menjar',
    icon: Utensils,
  },
  {
    title: 'Llocs d’interès',
    description: 'Espais, racons i llocs que val la pena descobrir.',
    path: '/municipi/llocs-dinteres',
    icon: Camera,
  },
  {
    title: 'Equipaments',
    description: 'Equipaments municipals, culturals, esportius i socials.',
    path: '/municipi/equipaments',
    icon: Building2,
  },
  {
    title: 'Transport públic',
    description: 'Informació sobre autobusos, tren i mobilitat.',
    path: '/municipi/transport-public',
    icon: Bus,
  },
  {
    title: 'Entitats i Associacions',
    description: 'Clubs, associacions i vida social del municipi.',
    path: '/municipi/entitats',
    icon: Users,
  },
  {
    title: 'XISC',
    description: 'Xarxa d’informació i serveis per a la ciutadania.',
    path: '/municipi/xisc',
    icon: HeartHandshake,
  },
]


function Municipi() {
  return (
    <main className="municipi-page">

      <div className="municipi-container">

        {/* BREADCRUMB */}

        <BreadCrumb
          items={[
            {
              label: 'Municipi',
            },
          ]}
        />


        {/* INTRO */}

        <section className="municipi-intro">

          <span className="municipi-eyebrow">
            BELL-LLOC D'URGELL
          </span>

          <h1>Municipi</h1>

          <p>
            Descobreix Bell-lloc d’Urgell, el seu entorn,
            la seva història, els seus equipaments i tot
            allò que forma part de la vida del municipi.
          </p>

        </section>


        {/* NAVEGACIÓ MUNICIPI */}

        <section className="municipi-navigation">

          <div className="municipi-section-heading">

            <span>
              CONEIX EL MUNICIPI
            </span>

            <h2>
              Informació del municipi
            </h2>

          </div>


          <div className="municipi-links">

            {municipiSections.map((section) => {

              const Icon = section.icon

              return (
                <a
                  key={section.path}
                  href={section.path}
                  className="municipi-link"
                >

                  <div className="municipi-link-icon">
                    <Icon
                      size={24}
                      strokeWidth={1.6}
                    />
                  </div>


                  <div className="municipi-link-content">

                      <h2>{section.title}</h2>
                    <p>
                      {section.description}
                    </p>

                  </div>


                  <span
                    className="municipi-link-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>

                </a>
              )
            })}

          </div>

        </section>

      </div>

    </main>
  )
}


export default Municipi