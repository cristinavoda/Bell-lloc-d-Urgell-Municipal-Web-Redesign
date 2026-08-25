import { MapPin, Users, Ruler, Building2 } from 'lucide-react'

import BreadCrumb from '../components/BreadCrumb'

import './styles/DadesSituacio.css'

function DadesSituacio() {
  return (
    <main className="dades-situacio">

      <div className="page-container">

        <BreadCrumb
          items={[
            {
              label: 'Municipi',
              path: '/municipi',
            },
            {
              label: 'Dades i situació',
            },
          ]}
        />


        {/* INTRO */}

        <section className="page-intro">

          <span className="section-eyebrow">
            MUNICIPI
          </span>

          <h1>Dades i situació</h1>

          <p>
            Bell-lloc d'Urgell és un municipi del Pla d'Urgell,
            situat a l'extrem occidental de la Plana d'Urgell,
            a només 14 km de Lleida.
          </p>

        </section>


        {/* XIFRES */}

        <section className="municipi-xifres">

          <div className="xifra">
            <Users size={24} strokeWidth={1.6} />

            <strong>2.347</strong>

            <span>habitants</span>
          </div>


          <div className="xifra">
            <Ruler size={24} strokeWidth={1.6} />

            <strong>34,90</strong>

            <span>km² de superfície</span>
          </div>


          <div className="xifra">
            <Building2 size={24} strokeWidth={1.6} />

            <strong>196 m</strong>

            <span>d'altitud</span>
          </div>


          <div className="xifra">
            <MapPin size={24} strokeWidth={1.6} />

            <strong>14 km</strong>

            <span>de Lleida</span>
          </div>

        </section>


        {/* SITUACIÓ */}

        <section className="situacio-section">

          <div className="situacio-text">

            <span className="section-eyebrow">
              SITUACIÓ
            </span>

            <h2>On és Bell-lloc d'Urgell?</h2>

            <p>
              Bell-lloc d'Urgell es troba a la comarca del
              Pla d'Urgell, en una zona central de la Plana
              d'Urgell i molt ben comunicada amb Lleida.
            </p>

            <p>
              El terme municipal té una extensió de
              34,90 km² i està envoltat pels municipis
              de Bellvís, Vilanova de la Barca, Torregrossa,
              Els Alamús, Sidamon, El Palau d'Anglesola
              i Alcoletge.
            </p>

          </div>


          <div className="situacio-map">

            <img
              src="/mapagran.gif"
              alt="Mapa de situació de Bell-lloc d'Urgell"
            />

          </div>

        </section>


        {/* CLIMA */}

        <section className="clima-section">

          <span className="section-eyebrow">
            ENTORN
          </span>

          <h2>Clima i paisatge</h2>

          <p>
            La situació del municipi, en plena plana i
            propera al riu Segre, determina un clima
            mediterrani continental, amb estius calorosos
            i secs i hiverns freds i humits.
          </p>

        </section>


        {/* NAVEGACIÓ RELACIONADA */}

        <section className="related-section">

          <span className="section-eyebrow">
            CONTINUA EXPLORANT
          </span>

          <h2>També t'interessa</h2>

          <div className="related-links">

            <a href="/municipi/com-arribar-hi">
              Com arribar-hi →
            </a>

            <a href="/municipi/historia-i-patrimoni">
              Història i patrimoni →
            </a>

            <a href="/municipi/llocs-interes">
              Llocs d'interès →
            </a>

          </div>

        </section>

      </div>

    </main>
  )
}

export default DadesSituacio