import styles from './CartItem.module.css'

const CartItem = ({ product }) => {
  return (
    <div className={styles.item}>
      <button className={styles.deleteBtn}>x</button>
      <div className={styles.image}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.info}>
        <span className={styles.price}>{product.title}</span>
        <span>${product.price}</span>
      </div>
      <div className={styles.quantity}>
        <button>-</button>
        <input type='text' name='quantity' value='1'></input>
        <button>+</button>
      </div>
      <div className={styles.totalPrice}>${product.price}</div>
    </div>
  )
}
export default CartItem
