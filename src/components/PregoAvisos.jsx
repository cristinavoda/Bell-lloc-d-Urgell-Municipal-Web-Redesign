import { Megaphone } from 'lucide-react'
import './PregoAvisos.css'
function PregoAvisos() {
  return (
    <section
      className="prego-section"
      aria-labelledby="prego-title"
    >
      <div className="prego-container">

       
<div className="prego-icon" aria-hidden="true">
          <Megaphone size={28} strokeWidth={1.8} />
        </div>

        <div className="prego-content">

          <span className="prego-label">
            AVÍS IMPORTANT
          </span>

          <h2 id="prego-title">
            Informació per a la ciutadania
          </h2>

          <p>
            Aquí apareixeran els avisos i pregons més importants
            de l'Ajuntament de Bell-lloc d'Urgell.
          </p>

          <button className="prego-button">
            Més informació
          </button>

        </div>

      </div>
    </section>
  )
}

export default PregoAvisos