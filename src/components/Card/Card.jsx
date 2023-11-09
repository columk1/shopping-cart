import styles from './Card.module.css'
import { Link } from 'react-router-dom'
const Card = (props) => {
  return (
    <Link to={'/shop/' + props.id}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.info}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.price}>{`$${props.price}`}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
