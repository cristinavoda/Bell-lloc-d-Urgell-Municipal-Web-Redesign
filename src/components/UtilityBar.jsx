import { CloudSun } from 'lucide-react'

import '../styles/UtilityBar.css'

function UtilityBar() {
  return (
    <div className="utility-bar">

      <div className="utility-container">

        <span className="utility-date">
          Dimarts, 25 d'agost de 2026
        </span>

        <div className="utility-weather">
          <CloudSun
            size={17}
            strokeWidth={1.7}
            aria-hidden="true"
          />

          <span>
            35° / 19°
          </span>
        </div>

      </div>

    </div>
  )
}

export default UtilityBar