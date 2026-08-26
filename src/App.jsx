import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Municipi from './pages/Municipi'

import Ajuntament from './pages/Ajuntament'
import Alcaldia from './pages/Alcaldia'
import BenvingudaAlcalde from './pages/BenvingudaAlcalde'
import ContactaAlcalde from './pages/ContactaAlcalde'


import SeuElectronica from './pages/SeuElectronica'


import BellLlocSoluciona from './pages/BellLlocSoluciona'

import Ciutadania from './pages/Ciutadania'
import Activitats from './pages/Activitats'
import Contacte from './pages/Contacte'
import DadesSituacio from './pages/DadesSituacio'

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
  path="/ajuntament/alcaldia"
  element={<Alcaldia />}
/>

  <Route
  path="/ajuntament/alcaldia/benvinguda"
  element={<BenvingudaAlcalde />}
/>

<Route
  path="/ajuntament/alcaldia/contacte"
  element={<ContactaAlcalde />}
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

   <Route
  path="/municipi/dades-i-situacio"
  element={<DadesSituacio />}
/>
   
        </Routes>
        


        
      </main>

      <Footer />
    </>
  )
}

export default App