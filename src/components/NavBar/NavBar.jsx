import styles from './NavBar.module.css'
// import NavLink from '../NavLink/NavLink.jsx'
import { NavLink } from 'react-router-dom'

const NavBar = ({ links }) => {
  return (
    <nav id='mainNav'>
      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <NavLink to={link.route}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
