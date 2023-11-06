import styles from './Cart.module.css'
import CartItem from '../CartItem/CartItem'
const Cart = ({ cartItems }) => {
  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Shopping Cart</h2>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      <button className={styles.checkoutBtn}>Checkout</button>
    </section>
  )
}
export default Cart
