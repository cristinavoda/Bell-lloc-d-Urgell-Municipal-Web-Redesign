import {
  ExternalLink,
  FileText,
  MessageSquare,
  Building2,
  HardHat,
  GraduationCap,
  Users,
  ShieldCheck,
  Euro,
  FolderOpen,
  FileCheck2,
  Bell,
  HelpCircle,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import BreadCrumb from '../components/BreadCrumb'
import '../styles/SeuElectronica.css'


const tramitsDestacats = [
  {
    title: 'Instància General',
    description: 'Presenta una sol·licitud general a l’Ajuntament.',
    url: 'https://bell-lloc.eadministracio.cat/info.0',
    icon: FileText,
  },
  {
    title: 'Queixes i suggeriments',
    description: 'Fes arribar una incidència, queixa o suggeriment.',
    url: 'https://bell-lloc.eadministracio.cat/info.0',
    icon: MessageSquare,
  },
  {
    title: 'Ús temporal d’espais i material',
    description: 'Sol·licita l’ús d’espais o material municipal.',
    url: 'https://bell-lloc.eadministracio.cat/info.0',
    icon: Building2,
  },
  {
    title: 'Comunicació d’obres menors',
    description: 'Consulta i inicia el tràmit relacionat amb obres menors.',
    url: 'https://bell-lloc.eadministracio.cat/info.0',
    icon: HardHat,
  },
  {
    title: 'Tràmits d’educació',
    description: 'Accedeix als tràmits relacionats amb educació.',
    url: 'https://bell-lloc.eadministracio.cat/info.0',
    icon: GraduationCap,
  },
  {
    title: 'Padró d’habitants',
    description: 'Accedeix als serveis relacionats amb el padró.',
    url: 'https://bell-lloc.eadministracio.cat/census',
    icon: Users,
  },
]


const accessosElectroniques = [
  {
    title: 'Els meus expedients',
    description: 'Consulta l’estat dels teus expedients.',
    url: 'https://bell-lloc.eadministracio.cat/expedientes',
    icon: FolderOpen,
  },
  {
    title: 'Registres presentats',
    description: 'Consulta els registres que has presentat.',
    url: 'https://bell-lloc.eadministracio.cat/registro',
    icon: FileCheck2,
  },
  {
    title: 'Bústia electrònica',
    description: 'Consulta les notificacions electròniques.',
    url: 'https://bell-lloc.eadministracio.cat/enotifications',
    icon: Bell,
  },
  {
    title: 'Les meves dades',
    description: 'Consulta i gestiona les teves dades.',
    url: 'https://bell-lloc.eadministracio.cat/my-data',
    icon: Users,
  },
]


function SeuElectronica() {
  return (
    <main className="seu-electronica-page">

      <div className="seu-container">

        <BreadCrumb
          items={[
            {
              label: 'Inici',
              path: '/',
            },
            {
              label: 'Seu electrònica',
            },
          ]}
        />


        {/* INTRO */}

        <section className="seu-intro">

          <span className="section-eyebrow">
            TRÀMITS I GESTIONS
          </span>

          <h1>
            Seu electrònica
          </h1>

          <p>
            Fes tràmits, presenta sol·licituds i consulta
            les teves gestions amb l’Ajuntament de
            Bell-lloc d’Urgell.
          </p>

          <a
            href="https://bell-lloc.eadministracio.cat/info.0"
            target="_blank"
            rel="noopener noreferrer"
            className="seu-main-button"
          >
            Accedir a la Seu electrònica
            <ExternalLink size={18} strokeWidth={1.8} />
          </a>

        </section>


        {/* TRÀMITS DESTACATS */}

        <section className="seu-section">

          <div className="seu-section-header">
            <span>EL MÉS BUSCAT</span>

            <h2>
              Tràmits destacats
            </h2>
          </div>


          <div className="seu-tramits">
         {tramitsDestacats.map((item) => (

  <a
    key={item.title}
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    className="seu-tramit"
  >

    <div className="seu-tramit-content">

      <h3>
        {item.title}
      </h3>

      <p>
        {item.description}
      </p>

    </div>

    
<span
  className="seu-tramit-arrow"
  aria-hidden="true"
>
  →
</span>
  </a>
))}
            
          </div>

        </section>


        {/* LA MEVA CARPETA */}

        <section className="seu-section seu-folder-section">

          <div className="seu-section-header">
            <span>GESTIONA LES TEVES GESTIONS</span>

            <h2>
              La meva carpeta electrònica
            </h2>
          </div>

<div className="seu-access-grid">

  {accessosElectroniques.map((item) => (

    <a
      key={item.title}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="seu-access"
    >

      <div>
        <h3>
          {item.title}
        </h3>

        <p>
          {item.description}
        </p>
      </div>

      <span
        className="seu-access-arrow"
        aria-hidden="true"
      >
        →
      </span>

    </a>

  ))}

</div>
          

        </section>


        {/* INFORMACIÓ */}

        <section className="seu-info-grid">

  <a
    href="https://bell-lloc.eadministracio.cat/official-time"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>
      Data i hora oficial
    </span>

    <span
      className="seu-info-arrow"
      aria-hidden="true"
    >
      →
    </span>
  </a>


  <a
    href="https://bell-lloc.eadministracio.cat/accessibility"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>
      Accessibilitat
    </span>

    <span
      className="seu-info-arrow"
      aria-hidden="true"
    >
      →
    </span>
  </a>


  <a
    href="https://bell-lloc.eadministracio.cat/faqs"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>
      Preguntes freqüents
    </span>

    <span
      className="seu-info-arrow"
      aria-hidden="true"
    >
      →
    </span>
  </a>

</section>

        {/* AVÍS */}

        <section className="seu-note">

          
          <p>
            Els tràmits electrònics es realitzen a través
            de la Seu electrònica oficial de l’Ajuntament
            de Bell-lloc d’Urgell.
          </p>

        </section>

      </div>

    </main>
  )
}






export default SeuElectronica