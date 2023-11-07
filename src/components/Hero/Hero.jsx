import styles from './Hero.module.css'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>A revolution begins with new shoes</h1>
        <p>
          This website has some subtext that goes here under the main title. It's a smaller font and
          it says something about shoes.
        </p>
        <NavLink
          to={'/shop'}
          // When the user is at the URL in the NavLink, then isActive will be true. When it's about to be active (the data is still loading) then isPending will be true.
          className={({ isActive, isPending }) =>
            isActive ? 'active' : isPending ? 'pending' : ''
          }
        >
          <button>Start Shopping</button>
        </NavLink>
      </div>
      <div className={styles.heroImg}>
        <span className='material-symbols-outlined'>favorite</span>
      </div>
    </section>
  )
}

export default Hero
