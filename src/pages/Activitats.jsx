import {
  Music,
  Theater,
  Trophy,
  Baby,
  UsersRound,
  Footprints,
  Palette,
  PartyPopper,
  CalendarDays,
  MapPin,
  Clock3,
  ArrowRight,
} from 'lucide-react'

import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import BreadCrumb from '../components/BreadCrumb'
import '../styles/Activitats.css'


const categories = [
  { id: 'totes', label: 'Totes', icon: CalendarDays },
  { id: 'cultura', label: 'Cultura', icon: Theater },
  { id: 'musica', label: 'Música', icon: Music },
  { id: 'esports', label: 'Esports', icon: Trophy },
  { id: 'infants', label: 'Infants', icon: Baby },
  { id: 'joves', label: 'Joves', icon: UsersRound },
  { id: 'caminades', label: 'Caminades', icon: Footprints },
  { id: 'festes', label: 'Festes', icon: PartyPopper },
]


const audienceFilters = [
  { id: 'tothom', label: 'Tothom' },
  { id: 'infants', label: 'Infants' },
  { id: 'joves', label: 'Joves' },
  { id: 'gent-gran', label: 'Gent gran' },
  { id: 'families', label: 'Famílies' },
]


const activities = [
  {
    id: 1,
    date: '27',
    month: 'AGO',
    day: 'Dijous',
    time: '20:30',
    title: 'Nit de teatre',
    description:
      'Proposta cultural per gaudir d’una vetllada de teatre al municipi.',
    category: 'cultura',
    audiences: ['tothom', 'joves', 'gent-gran', 'families'],
    location: 'Sala Multifuncional',
    demo: true,
  },
  {
    id: 2,
    date: '30',
    month: 'AGO',
    day: 'Diumenge',
    time: '22:00',
    title: 'Concert a la plaça',
    description:
      'Una nit de música i trobada al centre del municipi.',
    category: 'musica',
    audiences: ['tothom', 'joves', 'families'],
    location: 'Plaça Major',
    demo: true,
  },
  {
    id: 3,
    date: '31',
    month: 'AGO',
    day: 'Dilluns',
    time: '18:00',
    title: 'Partit de futbol',
    description:
      'Activitat esportiva al camp municipal.',
    category: 'esports',
    audiences: ['tothom', 'joves'],
    location: 'Camp municipal',
    demo: true,
  },
  {
    id: 4,
    date: '02',
    month: 'SET',
    day: 'Dimecres',
    time: '17:30',
    title: 'Taller creatiu per a infants',
    description:
      'Activitat pensada per estimular la creativitat dels més petits.',
    category: 'infants',
    audiences: ['infants', 'families'],
    location: 'La Cultural',
    demo: true,
  },
  {
    id: 5,
    date: '04',
    month: 'SET',
    day: 'Divendres',
    time: '19:00',
    title: 'Activitat per a joves',
    description:
      'Proposta de lleure i participació pensada per al jovent.',
    category: 'joves',
    audiences: ['joves'],
    location: 'Espai jove',
    demo: true,
  },
  {
    id: 6,
    date: '06',
    month: 'SET',
    day: 'Diumenge',
    time: '08:30',
    title: 'Caminada XISC',
    description:
      'Sortida per gaudir de l’entorn i compartir una activitat saludable.',
    category: 'caminades',
    audiences: ['tothom', 'gent-gran', 'families'],
    location: 'Plaça Major',
    demo: true,
  },
  {
    id: 7,
    date: '08',
    month: 'SET',
    day: 'Dimarts',
    time: '17:00',
    title: 'Activitat per a la gent gran',
    description:
      'Espai de trobada, activitat i participació per a persones grans.',
    category: 'gent-gran',
    audiences: ['gent-gran'],
    location: 'Llar del Jubilat',
    demo: true,
  },
  {
    id: 8,
    date: '12',
    month: 'SET',
    day: 'Dissabte',
    time: '18:00',
    title: 'Festa Major',
    description:
      'Programa d’activitats i propostes per a totes les edats.',
    category: 'festes',
    audiences: ['tothom', 'infants', 'joves', 'gent-gran', 'families'],
    location: 'Bell-lloc d’Urgell',
    demo: true,
  },
]


function Activitats() {
  const [activeCategory, setActiveCategory] = useState('totes')
  const [activeAudience, setActiveAudience] = useState('tothom')

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      const categoryMatch =
        activeCategory === 'totes' ||
        activity.category === activeCategory

      const audienceMatch =
        activeAudience === 'tothom' ||
        activity.audiences.includes(activeAudience)

      return categoryMatch && audienceMatch
    })
  }, [activeCategory, activeAudience])


  return (
    <main className="activitats-page">

      <div className="activitats-container">

        <BreadCrumb
          items={[
            {
              label: 'Activitats',
            },
          ]}
        />


       

        <section className="activitats-intro">

          <span className="section-eyebrow">
            VIDA AL MUNICIPI
          </span>

          <h1>
            Activitats
          </h1>

          <p>
            Descobreix què pots fer a Bell-lloc d’Urgell:
            cultura, música, esports, caminades, festes
            i activitats per a totes les edats.
          </p>

        </section>


        

        <section className="activitat-destacada">

          <div className="destacada-label">
            PROPOSTA DESTACADA · DEMO
          </div>

          <div className="destacada-content">

            <div>

              <span className="destacada-date">
                06 SET
              </span>

              <h2>
                Caminada XISC
              </h2>

              <p>
                Una activitat per sortir, caminar i gaudir
                de l’entorn de Bell-lloc en companyia.
              </p>

            </div>

            <Link
              to="/actualitat/agenda"
              className="destacada-link"
            >
              Veure a l’agenda
              <ArrowRight
                size={19}
                strokeWidth={1.8}
              />
            </Link>

          </div>

        </section>


      

        <section className="activitats-filters">

          <div className="filter-group">

            <span>
              Què t’interessa?
            </span>

            <div className="filter-list">

              {categories.map((category) => {

                const Icon = category.icon

                const isActive =
                  activeCategory === category.id

                return (
                  <button
                    key={category.id}
                    type="button"
                    className={`filter-button ${
                      isActive ? 'active' : ''
                    }`}
                    onClick={() =>
                      setActiveCategory(category.id)
                    }
                    aria-pressed={isActive}
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                    />
                    {category.label}
                  </button>
                )
              })}

            </div>

          </div>


          <div className="filter-group">

            <span>
              Per a qui?
            </span>

            <div className="audience-list">

              {audienceFilters.map((audience) => {

                const isActive =
                  activeAudience === audience.id

                return (
                  <button
                    key={audience.id}
                    type="button"
                    className={`audience-button ${
                      isActive ? 'active' : ''
                    }`}
                    onClick={() =>
                      setActiveAudience(audience.id)
                    }
                    aria-pressed={isActive}
                  >
                    {audience.label}
                  </button>
                )
              })}

            </div>

          </div>

        </section>


        

        <section className="activitats-results">

          <div className="results-header">

            <div>
              <span>
                PROPERES ACTIVITATS
              </span>

              <h2>
                Què hi ha al municipi?
              </h2>
            </div>

            <Link
              to="/actualitat/agenda"
              className="results-agenda-link"
            >
              Veure agenda completa
              <ArrowRight
                size={18}
                strokeWidth={1.8}
              />
            </Link>

          </div>


          {filteredActivities.length > 0 ? (

            <div className="activities-list">

              {filteredActivities.map((activity) => (

                <article
                  key={activity.id}
                  className="activity-item"
                >

                  <div className="activity-date">

                    <strong>
                      {activity.date}
                    </strong>

                    <span>
                      {activity.month}
                    </span>

                    <small>
                      {activity.day}
                    </small>

                  </div>


                  <div className="activity-main">

                    <div className="activity-category">
                      {activity.category}
                    </div>

                    <h3>
                      {activity.title}
                    </h3>

                    <p>
                      {activity.description}
                    </p>

                    <div className="activity-meta">

                      <span>
                        <Clock3
                          size={16}
                          strokeWidth={1.8}
                        />
                        {activity.time}
                      </span>

                      <span>
                        <MapPin
                          size={16}
                          strokeWidth={1.8}
                        />
                        {activity.location}
                      </span>

                    </div>

                  </div>


                  <ArrowRight
                    className="activity-arrow"
                    size={21}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                </article>

              ))}

            </div>

          ) : (

            <div className="activities-empty">

              <CalendarDays
                size={32}
                strokeWidth={1.5}
              />

              <h3>
                No hi ha activitats amb aquests filtres
              </h3>

              <p>
                Prova una altra categoria o amplia la cerca.
              </p>

            </div>

          )}

        </section>


        

        <section className="activities-footer">

          <Palette
            size={23}
            strokeWidth={1.7}
          />

          <p>
            Les activitats poden provenir de l’Ajuntament,
            entitats, clubs esportius i altres agents del municipi.
          </p>

        </section>

      </div>

    </main>
  )
}

export default Activitats