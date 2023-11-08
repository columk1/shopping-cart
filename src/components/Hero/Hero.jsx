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
        <NavLink to={'/shop'}>
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
