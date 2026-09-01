import { useEffect, useState } from 'react'
import {
  Sun,
  Cloud,
  CloudSun,
  CloudRain,
  CloudLightning,
  CloudFog,
  Snowflake,
} from 'lucide-react'

import '../styles/UtilityBar.css'

const LATITUDE = 41.629324
const LONGITUDE = 0.780884

function UtilityBar() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,weather_code,is_day&timezone=Europe%2FMadrid`
        )

        if (!response.ok) {
          throw new Error('No se pudo obtener el tiempo')
        }

        const data = await response.json()

        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          weatherCode: data.current.weather_code,
          isDay: data.current.is_day,
        })
      } catch (error) {
        console.error('Error obteniendo el tiempo:', error)
      }
    }

    fetchWeather()

    // Actualizamos cada 15 minutos
    const interval = setInterval(fetchWeather, 15 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  const getWeatherIcon = () => {
    if (!weather) return <CloudSun size={17} strokeWidth={1.7} />

    const { weatherCode, isDay } = weather

    // Despejado
    if (weatherCode === 0) {
      return isDay ? (
        <Sun size={17} strokeWidth={1.7} />
      ) : (
        <CloudSun size={17} strokeWidth={1.7} />
      )
    }

    // Parcialmente nuboso
    if (weatherCode === 1 || weatherCode === 2) {
      return <CloudSun size={17} strokeWidth={1.7} />
    }

    // Nuboso
    if (weatherCode === 3) {
      return <Cloud size={17} strokeWidth={1.7} />
    }

    // Niebla
    if ([45, 48].includes(weatherCode)) {
      return <CloudFog size={17} strokeWidth={1.7} />
    }

    // Lluvia
    if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) {
      return <CloudRain size={17} strokeWidth={1.7} />
    }

    // Nieve
    if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
      return <Snowflake size={17} strokeWidth={1.7} />
    }

    // Tormenta
    if ([95, 96, 99].includes(weatherCode)) {
      return <CloudLightning size={17} strokeWidth={1.7} />
    }

    return <CloudSun size={17} strokeWidth={1.7} />
  }

  const formatDate = () => {
    const today = new Date()

    return new Intl.DateTimeFormat('ca-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(today)
  }

  return (
    <div className="utility-bar">

      <div className="utility-container">

        <span className="utility-date">
          {formatDate()}
        </span>

        <div
          className="utility-weather"
          aria-label={
            weather
              ? `Temperatura actual: ${weather.temperature} graus`
              : 'Consultant el temps'
          }
        >

          {getWeatherIcon()}

          <span>
            {weather ? `${weather.temperature}°` : '—'}
          </span>

        </div>

      </div>

    </div>
  )
}

export default UtilityBar