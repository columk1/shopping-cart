import styles from './Card.module.css'
const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.price}>{`$${props.price.toFixed(2)}`}</p>
      </div>
    </div>
  )
}

export default Card
