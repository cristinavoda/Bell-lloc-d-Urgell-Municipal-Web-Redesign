import { ArrowRight } from 'lucide-react'

import './NewsSection.css'

const news = [
  {
    id: 1,
    date: '23 JUL 2026',
    title:
      'L’Ajuntament de Bell-lloc d’Urgell dedicarà un parc a la figura de l’escriptor Josep Vallverdú',
    excerpt:
      'L’autor, reconegut per la seva trajectòria i prolífica obra s’ha guanyat el respecte de la nació per la seva defensa de la llengua.',
    image: '/noticies1.jpg',
    link:
      'https://www.bell-lloc.cat/noticies/l2019ajuntament-de-bell-lloc-d2019urgell-dedicara-un-parc-a-la-figura-de-l2019escriptor-josep-vallverdu'
  },

  {
    id: 2,
    date: '22 JUL 2026',
    title:
      'L’INCASÒL inicia la 2a fase de comercialització del sector d’activitat econòmica Vinyes del Mig a Bell-lloc d’Urgell',
    excerpt:
      'Es tracta d’un total de 9 ha repartides en 11 parcel·les de fins a 21.238 m².',
    image: '/noticies2.jpg',
    link:
      'https://www.bell-lloc.cat/noticies/l2019incasol-inicia-la-2a-fase-de-comercialitzacio-del-sector-d2019activitat-economica-vinyes-del-mig-a-bell-lloc-d2019urgell'
  },

  {
    id: 3,
    date: '20 JUL 2026',
    title:
      'Valoració de les propostes presentades al procés participatiu de l’espai de les piscines velles',
    excerpt:
      'També s’inclou informació sobre altres projectes relacionats amb la zona d’actuació o amb la mobilitat sostenible.',
    image: '/noticies3.png',
    link:
      'https://www.bell-lloc.cat/noticies/valoracio-de-les-propostes-presentades-al-proces-participatiu-de-lespai-de_les-piscines_velles'
  },

  {
    id: 4,
    date: '13 JUL 2026',
    title:
      'Resultats de la consulta popular sobre el projecte de recuperació de l’espai de les antigues piscines',
    excerpt:
      'El 78% dels votants a la consulta popular s’ha decantat per l’opció de fer una plaça oberta amb parc infantil, parc d’esports i sales per entitats.',
    image: '/noticies4.jpg',
    link:
      'https://www.bell-lloc.cat/noticies/resultats-de-la-consulta-sobre_lespai-de-les-piscines-velles'
  },

  {
    id: 5,
    date: '15 JUN 2026',
    title:
      'L’Ajuntament de Bell-lloc destina més de 4500 € a netejar abocaments il·legals de runa i residus',
    excerpt:
      'L’actuació s’ha dut a terme a la partida Lo Secanet a les finques de l’antic circuit de motos.',
    image: '/noticies5.jpg',
    link:
      'https://www.bell-lloc.cat/noticies/lajuntament-de-bell-lloc-destina-mes-de-450020ac-a-netejar-abocaments-il-legals-de-runa-i-residus'
  },

  {
    id: 6,
    date: '20 MAIG 2026',
    title:
      'L’Ajuntament de Bell-lloc, premiat amb el Reconeixement Administració Oberta 2025',
    excerpt:
      'El consistori ha obtingut la cinquena posició en els reconeixements Administració Oberta 2025, en la categoria de municipis d’entre 1001 i 5000 habitants.',
    image: '/noticies6.jpg',
    link:
      'https://www.bell-lloc.cat/noticies/l2019ajuntament-de-bell-lloc-premiat-amb-el-reconeixement-administracio-oberta-2025'
  }
]

function NewsSection() {
  return (
    <section className="news-section">

      <div className="news-container">

        <header className="news-header">

          <div>
            <span className="news-eyebrow">
              ACTUALITAT
            </span>

            <h2>
              Les últimes notícies
            </h2>

            <p>
              Informació i actualitat de Bell-lloc d’Urgell
            </p>
          </div>

        </header>


        <div className="news-list">

          {news.map((item, index) => (

            <article
              className={`news-item ${
                index % 2 !== 0 ? 'news-item-reverse' : ''
              }`}
              key={item.id}
            >

              <div className="news-image-wrapper">

                <img
                  src={item.image}
                  alt=""
                  className="news-image"
                  loading="lazy"
                />

              </div>


              <div className="news-content">

                <time>
                  {item.date}
                </time>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.excerpt}
                </p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-link"
                >
                  Llegir notícia

                  <ArrowRight
                    size={18}
                    strokeWidth={1.8}
                  />
                </a>

              </div>

            </article>

          ))}

        </div>


        <div className="news-footer">

          <a
            href="/actualitat"
            className="news-all-link"
          >
            Veure totes les notícies

            <ArrowRight
              size={20}
              strokeWidth={1.8}
            />

          </a>

        </div>

      </div>

    </section>
  )
}

export default NewsSection