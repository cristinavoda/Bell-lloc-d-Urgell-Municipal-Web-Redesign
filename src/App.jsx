import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Municipi from './pages/Municipi'
import Ajuntament from './pages/Ajuntament'
import SeuElectronica from './pages/SeuElectronica'

import BellLlocSoluciona from './pages/BellLlocSoluciona'

import Ciutadania from './pages/Ciutadania'
import Activitats from './pages/Activitats'
import Contacte from './pages/Contacte'
function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />
          
          <Route
  path="/municipi"
  element={<Municipi />}
/>


  <Route
    path="/ajuntament"
    element={<Ajuntament />}
  />

<Route
  path="/seu-electronica"
  element={<SeuElectronica />}
/>

<Route
  path="/bell-lloc-soluciona"
  element={<BellLlocSoluciona />}
/>



<Route
  path="/ciutadania"
  element={<Ciutadania />}
/>


<Route
  path="/activitats"
  element={<Activitats />}
/>

<Route
  path="/contacte"
  element={<Contacte />}
/>

        </Routes>
        


        
      </main>

      <Footer />
    </>
  )
}

export default App