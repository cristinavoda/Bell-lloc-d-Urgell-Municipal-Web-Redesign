import Hero from '../components/Hero'
import './Home.css'
import PregoAvisos from '../components/PregoAvisos'

function Home() {
  return (
    <div className="home">

      <Hero />

       <PregoAvisos />

      <section className="home-content">
        <div className="home-container">
          <p>Web oficial de l'Ajuntament</p>

          <h1>
            Bell-lloc d'Urgell
          </h1>

          <p>
            Informació, serveis, activitats i actualitat del municipi.
          </p>
        </div>
      </section>

    </div>
  )
}

export default Home