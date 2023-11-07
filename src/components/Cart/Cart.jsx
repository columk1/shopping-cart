import styles from './Cart.module.css'
import CartItem from '../CartItem/CartItem'
import { useOutletContext } from 'react-router-dom'

const Cart = () => {
  const { cartItems, setCartItems } = useOutletContext()
  console.log('Cart Renders')
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
