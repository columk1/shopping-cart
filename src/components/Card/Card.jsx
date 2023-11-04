import styles from './Card.module.css'
const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.title} />
      <div className={styles.info}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.price}>{props.price}</p>
      </div>
    </div>
  )
}

export default Card
