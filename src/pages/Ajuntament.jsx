import { Link } from 'react-router-dom'

import BreadCrumb from '../components/BreadCrumb'
import '../styles/Ajuntament.css'


const sections = [
  {
    title: 'Alcaldia',
    description: 'Informació de l’alcaldia i agenda institucional.',
    path: '/ajuntament/alcaldia',
  },
  {
    title: 'Corporació municipal',
    description: 'Equip de govern, organigrama i informació dels càrrecs electes.',
    path: '/ajuntament/corporacio-municipal',
  },
  {
    title: 'Òrgans de govern',
    description: 'Plens, Junta de Govern i altres òrgans municipals.',
    path: '/ajuntament/plens',
  },
  {
    title: 'Ordenances',
    description: 'Normativa i ordenances municipals.',
    path: '/ajuntament/ordenances',
  },
  {
    title: 'Informació econòmica',
    description: 'Pressupostos, finances, factures i patrimoni municipal.',
    path: '/ajuntament/informacio-economica-i-financera',
  },
  {
    title: 'Contractació',
    description: 'Perfil del contractant i contractes municipals.',
    path: '/ajuntament/contractacio',
  },
  {
    title: 'Promoció econòmica',
    description: 'Empresa, ocupació i desenvolupament econòmic local.',
    path: '/ajuntament/promocio-economica',
  },
  {
    title: 'Transparència',
    description: 'Informació pública i transparència municipal.',
    path: '/ajuntament/transparencia',
  },
  {
    title: 'Premsa i comunicació',
    description: 'Comunicació municipal, xarxes i revista del poble.',
    path: '/ajuntament/premsa-i-comunicacio',
  },
  {
    title: 'Participació ciutadana',
    description: 'Processos participatius i canals de participació.',
    path: '/ajuntament/participacio-ciutadana',
  },
  {
    title: 'Veu pública',
    description: 'Pregons i comunicacions municipals.',
    path: '/ajuntament/el-prego',
  },
  {
    title: 'Serveis i horaris',
    description: 'Horaris i informació dels serveis municipals.',
    path: '/ajuntament/serveis-i-horaris',
  },
  {
    title: 'Tràmits presencials',
    description: 'Impresos i gestions que es poden fer presencialment.',
    path: '/ajuntament/tramits-presencials',
  },
  {
    title: "Telèfons d'interès",
    description: 'Telèfons municipals i serveis d’interès.',
    path: '/ajuntament/telefons-dinteres',
  },
  {
    title: 'Llar d’infants',
    description: 'Informació, horaris, matrícula i serveis de la llar d’infants.',
    path: '/ajuntament/llar-infants',
  },
  {
    title: 'Projectes i obres',
    description: 'Projectes municipals i obres d’urbanització.',
    path: '/ajuntament/projectes-i-obres-durbanitzacio',
  },
]


function Ajuntament() {
  return (
    <main className="ajuntament-page">

      <BreadCrumb
        items={[
          {
            label: 'Inici',
            path: '/',
          },
          {
            label: 'Ajuntament',
          },
        ]}
      />


      <section className="ajuntament-intro">

        <div className="ajuntament-container">

          <span className="section-eyebrow">
            Ajuntament
          </span>

          <h1>
            Ajuntament
          </h1>

          <p>
            Informació institucional, serveis municipals,
            transparència i canals de participació ciutadana.
          </p>

        </div>

      </section>


      <section className="ajuntament-sections">

        <div className="ajuntament-container">

          <div className="ajuntament-grid">

            {sections.map((section) => (

              <Link
                key={section.path}
                to={section.path}
                className="ajuntament-item"
              >

                <div className="ajuntament-item-content">

                  <h2>
                    {section.title}
                  </h2>

                  <p>
                    {section.description}
                  </p>

                </div>

                <span
                  className="ajuntament-item-arrow"
                  aria-hidden="true"
                >
                  →
                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>
  )
}

export default Ajuntament