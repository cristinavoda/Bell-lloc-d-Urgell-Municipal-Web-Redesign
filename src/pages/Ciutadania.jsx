import {
  Baby,
  GraduationCap,
  HeartHandshake,
  Accessibility,
  Trophy,
  Theater,
  BookOpen,
  Home,
  BriefcaseBusiness,
  Leaf,
  PawPrint,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import BreadCrumb from '../components/BreadCrumb'
import '../styles/Ciutadania.css'


const ciutadaniaSections = [
  {
    title: 'Infants i famílies',
    description: 'Serveis, activitats i recursos per a famílies.',
    path: '/ciutadania/infants-families',
    icon: Baby,
  },
  {
    title: 'Joves',
    description: 'Activitats, recursos i oportunitats per a joves.',
    path: '/ciutadania/joves',
    icon: GraduationCap,
  },
  {
    title: 'Gent gran',
    description: 'Serveis, activitats i recursos per a la gent gran.',
    path: '/ciutadania/gent-gran',
    icon: HeartHandshake,
  },
  {
    title: 'Accessibilitat',
    description: 'Informació i recursos per a una ciutadania accessible.',
    path: '/ciutadania/accessibilitat',
    icon: Accessibility,
  },
  {
    title: 'Esports',
    description: 'Instal·lacions, clubs i activitats esportives.',
    path: '/ciutadania/esports',
    icon: Trophy,
  },
  {
    title: 'Cultura',
    description: 'Activitats culturals, festes i propostes del municipi.',
    path: '/ciutadania/cultura',
    icon: Theater,
  },
  {
    title: 'Educació',
    description: 'Centres educatius, serveis i recursos educatius.',
    path: '/ciutadania/educacio',
    icon: BookOpen,
  },
  {
    title: 'Habitatge',
    description: 'Informació i recursos relacionats amb l’habitatge.',
    path: '/ciutadania/habitatge',
    icon: Home,
  },
  {
    title: 'Ocupació',
    description: 'Feina, orientació i oportunitats laborals.',
    path: '/ciutadania/ocupacio',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Medi ambient',
    description: 'Residus, sostenibilitat i cura de l’entorn.',
    path: '/ciutadania/medi-ambient',
    icon: Leaf,
  },
  {
    title: 'Animals',
    description: 'Informació i serveis relacionats amb els animals.',
    path: '/ciutadania/animals',
    icon: PawPrint,
  },
]


function Ciutadania() {
  return (
    <main className="ciutadania-page">

      <div className="ciutadania-container">

        {/* BREADCRUMB */}

        <BreadCrumb
          items={[
            {
              label: 'Ciutadania',
            },
          ]}
        />


        {/* INTRO */}

        <section className="ciutadania-intro">

          <span className="section-eyebrow">
            SERVEIS PER A LA CIUTADANIA
          </span>

          <h1>
            Ciutadania
          </h1>

          <p>
            Informació, serveis i recursos pensats per a les
            diferents etapes de la vida i les necessitats
            de les persones que viuen a Bell-lloc d’Urgell.
          </p>

        </section>


        {/* CATEGORIES */}

        <section className="ciutadania-sections">

          <div className="ciutadania-heading">

            <span>
              TROBA EL QUE NECESSITES
            </span>

            <h2>
              Informació per a tu
            </h2>

          </div>


          <div className="ciutadania-list">

            {ciutadaniaSections.map((section) => {

              const Icon = section.icon

              return (
                <Link
                  key={section.path}
                  to={section.path}
                  className="ciutadania-item"
                >

                  <div className="ciutadania-item-icon">
                    <Icon
                      size={25}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="ciutadania-item-content">

                    <h3>
                      {section.title}
                    </h3>

                    <p>
                      {section.description}
                    </p>

                  </div>

                  <span
                    className="ciutadania-item-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>

                </Link>
              )
            })}

          </div>

        </section>

      </div>

    </main>
  )
}

export default Ciutadania