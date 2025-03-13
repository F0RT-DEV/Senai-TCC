import Navbarra from './Components/Navbarra'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
function App() {

  return (
    <>
      <Navbarra />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
