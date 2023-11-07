import styles from './Cart.module.css'
import CartItem from '../CartItem/CartItem'
import { useOutletContext } from 'react-router-dom'

const Cart = () => {
  console.log('Cart Renders')
  const { cartItems, setCartItems } = useOutletContext()

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 0) return
    const newCartItems = cartItems.map((item) => {
      return item.id === id ? { ...item, quantity: newQuantity } : item
    })
    console.log(newCartItems)
    setCartItems(newCartItems)
  }

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Shopping Cart</h2>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <CartItem key={item.id} product={item} onChange={updateQuantity} />
        ))}
      </div>
      <button className={styles.checkoutBtn}>Checkout</button>
    </section>
  )
}
export default Cart
