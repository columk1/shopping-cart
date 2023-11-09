import styles from './CartItem.module.css'
import { Link } from 'react-router-dom'

const CartItem = ({ product, onChange, onDelete }) => {
  const increment = () => onChange(product.id, product.quantity + 1)
  const decrement = () => onChange(product.id, product.quantity - 1)
  const deleteProduct = () => onDelete(product.id)

  return (
    <div className={styles.item}>
      <button className={styles.deleteBtn} onClick={deleteProduct}>
        x
      </button>
      <Link to={`/shop/${product.id}`}>
        <div className={styles.productInfo}>
          <div className={styles.image}>
            <img src={product.image} alt={product.title} />
          </div>
          <div className={styles.info}>
            <span className={styles.price}>{product.title}</span>
            <span>${product.price}</span>
          </div>
        </div>
      </Link>
      <div className={styles.quantity}>
        <button onClick={decrement}>-</button>
        <input type='text' name='quantity' value={product.quantity} readOnly></input>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <span className={styles.totalPrice}>${(product.price * product.quantity).toFixed(2)}</span>
      </div>
    </div>
  )
}
export default CartItem
