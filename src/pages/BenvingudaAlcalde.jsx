import BreadCrumb from '../components/BreadCrumb'
import '../styles/BenvingudaAlcalde.css'


function BenvingudaAlcalde() {
  return (
    <main className="benvinguda-alcalde-page">

      <div className="benvinguda-container">

        <BreadCrumb
          items={[
            {
              label: 'Ajuntament',
              path: '/ajuntament',
            },
            {
              label: 'Alcaldia',
              path: '/ajuntament/alcaldia',
            },
            {
              label: 'Benvinguda de l’Alcalde',
            },
          ]}
        />


        <section className="benvinguda-intro">

          <span className="section-eyebrow">
            ALCALDIA
          </span>

          <h1>
            Benvinguda de l’Alcalde
          </h1>

        </section>


        <article className="benvinguda-content">

          <img
            src="/foto-alcaldia-2023.jpg"
            alt="Carles Palau Boté, alcalde de Bell-lloc d’Urgell"
            className="alcalde-photo"
          />

          <p>
            <strong>Benvolguts/des,</strong>
          </p>

          <p>
            Esteu entrant a la pàgina web de l’Ajuntament
            de Bell-lloc d'Urgell. Aquesta és la porta
            d’entrada a un municipi que us ofereix una gran
            varietat de possibilitats.
          </p>

          <p>
            <strong>
              Tenim un municipi amb un gran potencial econòmic
            </strong>
            : disposem de terreny industrial molt ben
            comunicat i a uns preus competitius en diverses
            zones del municipi.
          </p>

          <p>
            <strong>
              Tenim unes bones comunicacions
            </strong>
            : la nostra situació estratègica a prop de grans
            nusos de comunicació ens fa atractius tant per a
            persones que hi volen viure com per a negocis que
            es vulguin implantar.
          </p>

          <p>
            La combinació de transport públic, tant per
            carretera com per tren, facilita la mobilitat de
            les persones, i la xarxa de fibra òptica facilita
            el teletreball i la conciliació de la vida
            familiar i laboral.
          </p>

          <p>
            <strong>
              Tenim el lloc ideal per créixer en família
            </strong>
            : som un poble amb una bona vida associativa,
            cultural, esportiva, educativa i social.
          </p>

          <p>
            Els diversos clubs i associacions ofereixen
            moltes possibilitats de lleure i d’activitats
            on involucrar-se i participar de la vida social.
          </p>

          <p>
            <strong>
              Tenim una administració moderna i transparent
            </strong>
            : l’Ajuntament de Bell-lloc d’Urgell és pioner
            en la implantació de l’administració electrònica
            i de la transparència.
          </p>

          <p>
            Per això hem estat reconeguts amb els premis
            Infoparticipa de la UAB i amb el segell
            Administració Oberta de la AOC en diverses
            edicions.
          </p>

          <p>
            <strong>Som bona gent</strong>: aquest és l’actiu
            més important del nostre municipi, la seva gent.
          </p>

          <p>
            Gent vinguda de molts llocs però, en definitiva,
            bell-lloquins i bell-lloquines que ens estimem
            el nostre poble i que el volem compartir amb
            tot aquell que ho vulgui.
          </p>

          <p>
            Desitjo que aquesta pàgina us sigui una eina útil
            i recordeu que teniu al vostre servei una
            administració moderna i eficient.
          </p>


          <div className="alcalde-signature">

            <p>
              Carles Palau Boté
            </p>

            <span>
              Alcalde de Bell-lloc d’Urgell
            </span>

          </div>

        </article>

      </div>

    </main>
  )
}

export default BenvingudaAlcalde