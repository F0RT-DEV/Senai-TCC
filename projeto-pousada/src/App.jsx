import Navbarra from './Components/Navbarra'
import { Outlet } from 'react-router-dom'
import './App.css'
function App() {

  return (
    <>
      <Navbarra />
      <Outlet />
    </>
  )
}

export default App
