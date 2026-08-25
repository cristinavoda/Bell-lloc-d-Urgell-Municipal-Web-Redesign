import { useEffect, useRef, useState } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { searchContent } from '../utils/searchEngine'

import './SearchOverlay.css'


function SearchOverlay({ isOpen, onClose }) {

  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  const navigate = useNavigate()

  // ─────────────────────────────────────
  // FOCUS AL ABRIR
  // ─────────────────────────────────────

  useEffect(() => {

    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 50)
    }

  }, [isOpen])


  // ─────────────────────────────────────
  // ESC PARA CERRAR
  // ─────────────────────────────────────

  useEffect(() => {

    function handleKeyDown(event) {

      if (event.key === 'Escape') {
        onClose()
      }

    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }

  }, [isOpen, onClose])


  // ─────────────────────────────────────
  // BLOQUEAR SCROLL DEL BODY
  // ─────────────────────────────────────

  useEffect(() => {

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }

  }, [isOpen])


  // ─────────────────────────────────────
  // RESULTADOS
  // ─────────────────────────────────────

  const results = query.trim()
    ? searchContent(query, {
        limit: 8,
        minScore: 10,
      })
    : []


  // ─────────────────────────────────────
  // NAVEGAR
  // ─────────────────────────────────────

  function handleResultClick(path) {

    onClose()
    setQuery('')

    navigate(path)
  }


  // ─────────────────────────────────────
  // CERRAR
  // ─────────────────────────────────────

  function handleClose() {
    setQuery('')
    onClose()
  }


  if (!isOpen) {
    return null
  }


  return (

    <div
      className="search-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-title"
    >

      <div className="search-overlay-inner">


        {/* HEADER */}

        <div className="search-overlay-header">

          <div>

            <span className="search-eyebrow">
              Cerca en el lloc
            </span>

            <h2 id="search-title">
              Què estàs buscant?
            </h2>

          </div>


          <button
            type="button"
            className="search-close"
            onClick={handleClose}
            aria-label="Tancar cerca"
          >
            <X size={24} strokeWidth={1.8} />
          </button>

        </div>


        {/* SEARCH INPUT */}

        <div className="search-input-wrapper">

          <Search
            className="search-input-icon"
            size={25}
            strokeWidth={1.7}
            aria-hidden="true"
          />

          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Biblioteca, activitats, cita prèvia..."
            aria-label="Cercar al lloc web"
            autoComplete="off"
            spellCheck="false"
          />

          {query && (

            <button
              type="button"
              className="search-clear"
              onClick={() => setQuery('')}
              aria-label="Esborrar cerca"
            >
              <X size={18} strokeWidth={2} />
            </button>

          )}

        </div>


        {/* CONTENT */}

        <div className="search-results">


          {/* ESTADO INICIAL */}

          {!query.trim() && (

            <div className="search-welcome">

              <p className="search-help">
                Pots cercar per paraules com:
              </p>

              <div className="search-suggestions">

                {[
                  'biblioteca',
                  'activitats',
                  'jubilats',
                  'cita prèvia',
                  'telèfons',
                  'recollida de mobles',
                ].map((suggestion) => (

                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => setQuery(suggestion)}
                    className="search-suggestion"
                  >
                    {suggestion}
                  </button>

                ))}

              </div>

            </div>

          )}


          {/* RESULTADOS */}

          {query.trim() && results.length > 0 && (

            <div>

              <div className="search-results-header">

                <span>
                  Resultats de la cerca
                </span>

                <span className="search-results-count">
                  {results.length}
                </span>

              </div>


              <div className="search-results-list">

                {results.map((result) => (

                  <button
                    key={result.id}
                    type="button"
                    className="search-result"
                    onClick={() => handleResultClick(result.path)}
                  >

                    <div className="search-result-content">

                      <span className="search-result-category">
                        {result.category}
                      </span>

                      <h3>
                        {result.title}
                      </h3>

                      <p>
                        {result.description}
                      </p>

                    </div>


                    <ArrowRight
                      className="search-result-arrow"
                      size={22}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />

                  </button>

                ))}

              </div>

            </div>

          )}


          {/* SIN RESULTADOS */}

          {query.trim() && results.length === 0 && (

            <div className="search-empty">

              <div className="search-empty-icon">
                <Search size={30} strokeWidth={1.5} />
              </div>

              <h3>
                No hem trobat resultats
              </h3>

              <p>
                No hem trobat informació relacionada amb
                <strong> "{query}"</strong>.
              </p>

              <span>
                Prova amb altres paraules com biblioteca,
                activitats, serveis o tràmits.
              </span>

            </div>

          )}

        </div>

      </div>

    </div>

  )
}


export default SearchOverlay