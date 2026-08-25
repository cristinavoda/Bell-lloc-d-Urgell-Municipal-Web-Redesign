import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

import './BreadCrumb.css'

function Breadcrumb({ items = [] }) {
  return (
    <nav
      className="breadcrumb"
      aria-label="Fil d'Ariadna"
    >
      <Link
        to="/"
        className="breadcrumb-home"
        aria-label="Inici"
      >
        <Home size={16} strokeWidth={1.8} />
        <span>Inici</span>
      </Link>

      {items.map((item, index) => {

        const isLast = index === items.length - 1

        return (
          <div
            className="breadcrumb-item"
            key={`${item.label}-${index}`}
          >

            <ChevronRight
              size={15}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            {isLast ? (

              <span
                className="breadcrumb-current"
                aria-current="page"
              >
                {item.label}
              </span>

            ) : (

              <Link
                to={item.path}
                className="breadcrumb-link"
              >
                {item.label}
              </Link>

            )}

          </div>
        )
      })}
    </nav>
  )
}

export default Breadcrumb