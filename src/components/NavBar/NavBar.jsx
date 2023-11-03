import styles from './NavBar.module.css'
import NavLink from '../NavLink/NavLink.jsx'

const NavBar = ({ links }) => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <NavLink key={link} link={link} />
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
