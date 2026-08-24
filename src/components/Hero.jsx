import { useEffect, useRef } from 'react'
import './Hero.css'
function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  return (
    <section
      className="hero"
      aria-label="Imatges de Bell-lloc d'Urgell"
    >
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/iglesia.jpg"
        aria-hidden="true"
      >
        <source
          src="/ayuntamiento-web.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  )
}

export default Hero