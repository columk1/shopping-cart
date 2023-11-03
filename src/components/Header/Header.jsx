import styles from './Header.module.css'
import NavBar from '../NavBar/NavBar'

const Header = ({ logo, links }) => {
  return (
    <header className={styles.header}>
      <img src={logo} alt='logo' className={styles.logo} />
      <NavBar links={links} />
    </header>
  )
}

export default Header
