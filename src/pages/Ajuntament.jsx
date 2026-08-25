import {
  Landmark,
  Users,
  Scale,
  FileText,
  Euro,
  BriefcaseBusiness,
  Building2,
  ShieldCheck,
  Newspaper,
  MessageSquare,
  Megaphone,
  Phone,
  Clock,
  ClipboardList,
  Baby,
  HardHat,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import BreadCrumb from '../components/BreadCrumb'
import '../styles/Ajuntament.css'


const sections = [
  {
    title: 'Alcaldia',
    description: 'Informació de l’alcaldia i agenda institucional.',
    path: '/ajuntament/alcaldia',
    icon: Landmark,
  },
  {
    title: 'Corporació municipal',
    description: 'Equip de govern, organigrama i informació dels càrrecs electes.',
    path: '/ajuntament/corporacio-municipal',
    icon: Users,
  },
  {
    title: 'Òrgans de govern',
    description: 'Plens, Junta de Govern i altres òrgans municipals.',
    path: '/ajuntament/plens',
    icon: Scale,
  },
  {
    title: 'Ordenances',
    description: 'Normativa i ordenances municipals.',
    path: '/ajuntament/ordenances',
    icon: FileText,
  },
  {
    title: 'Informació econòmica',
    description: 'Pressupostos, finances, factures i patrimoni municipal.',
    path: '/ajuntament/informacio-economica-i-financera',
    icon: Euro,
  },
  {
    title: 'Contractació',
    description: 'Perfil del contractant i contractes municipals.',
    path: '/ajuntament/contractacio',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Promoció econòmica',
    description: 'Empresa, ocupació i desenvolupament econòmic local.',
    path: '/ajuntament/promocio-economica',
    icon: Building2,
  },
  {
    title: 'Transparència',
    description: 'Informació pública i transparència municipal.',
    path: '/ajuntament/transparencia',
    icon: ShieldCheck,
  },
  {
    title: 'Premsa i comunicació',
    description: 'Comunicació municipal, xarxes i revista del poble.',
    path: '/ajuntament/premsa-i-comunicacio',
    icon: Newspaper,
  },
  {
    title: 'Participació ciutadana',
    description: 'Processos participatius i canals de participació.',
    path: '/ajuntament/participacio-ciutadana',
    icon: MessageSquare,
  },
  {
    title: 'Veu pública',
    description: 'Pregons i comunicacions municipals.',
    path: '/ajuntament/el-prego',
    icon: Megaphone,
  },
  {
    title: 'Serveis i horaris',
    description: 'Horaris i informació dels serveis municipals.',
    path: '/ajuntament/serveis-i-horaris',
    icon: Clock,
  },
  {
    title: 'Tràmits presencials',
    description: 'Impresos i gestions que es poden fer presencialment.',
    path: '/ajuntament/tramits-presencials',
    icon: ClipboardList,
  },
  {
    title: "Telèfons d'interès",
    description: 'Telèfons municipals i serveis d’interès.',
    path: '/ajuntament/telefons-dinteres',
    icon: Phone,
  },
  {
    title: 'Llar d’infants',
    description: 'Informació, horaris, matrícula i serveis de la llar d’infants.',
    path: '/ajuntament/llar-infants',
    icon: Baby,
  },
  {
    title: 'Projectes i obres',
    description: 'Projectes municipals i obres d’urbanització.',
    path: '/ajuntament/projectes-i-obres-durbanitzacio',
    icon: HardHat,
  },
]


function Ajuntament() {
  return (
    <main className="ajuntament-page">

      {/* =====================================
          BREADCRUMB
      ===================================== */}

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


      {/* =====================================
          INTRO
      ===================================== */}

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


      {/* =====================================
          SECTIONS
      ===================================== */}

      <section className="ajuntament-sections">

        <div className="ajuntament-container">

          <div className="ajuntament-grid">

            {sections.map((section) => {

              const Icon = section.icon

              return (
                <Link
                  key={section.path}
                  to={section.path}
                  className="ajuntament-item"
                >

                  <div className="ajuntament-item-icon">
                    <Icon
                      size={24}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="ajuntament-item-content">

                    <h2>
                      {section.title}
                    </h2>

                    <p>
                      {section.description}
                    </p>

                  </div>

                  <span className="ajuntament-item-arrow">
                    →
                  </span>

                </Link>
              )
            })}

          </div>

        </div>

      </section>

    </main>
  )
}

export default Ajuntament