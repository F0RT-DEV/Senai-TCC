import { NavLink } from 'react-router-dom'
import styles from './CSS/Navbarra.module.css'

const NavBarra = () => {
  return (
    <div className={styles.menu}>
    <div className={styles.logo}>
        <img src="https://static.wixstatic.com/media/b87f83_9f4625b043a944daaf5fddefc7d73d0e~mv2.png/v1/fill/w_80,h_80,al_c,q_85,enc_avif,quality_auto/logo-pousada-quinta-do-ypua.png" alt="" />
    </div>
    <nav className={styles.navbar}>
    <NavLink className={styles.link} to="/">INICIO</NavLink>
    <NavLink className={styles.link} to="/sobre">SOBRE</NavLink>
    <NavLink className={styles.link} to="/sobre">QUARTOS</NavLink>
    <NavLink className={styles.link} to="/contato">CONTATO</NavLink>
    <NavLink className={styles.link} to="/login">LOGIN</NavLink>
  </nav>
  </div>
  )
}

export default NavBarra

