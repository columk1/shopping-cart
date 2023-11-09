import styles from './Cart.module.css'
import CartItem from '../../components/CartItem/CartItem'
import { useOutletContext, Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, setCartItems } = useOutletContext()

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 0) return
    const newCartItems = cartItems.map((item) => {
      return item.id === id ? { ...item, quantity: newQuantity } : item
    })
    setCartItems(newCartItems)
  }

  const deleteCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const sum = (numArray) => numArray.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className={styles.status}>
          <h3>Your cart is empty</h3>
          <Link to={'/shop'}>
            <button>Start Shopping</button>
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                onChange={updateQuantity}
                onDelete={deleteCartItem}
              />
            ))}
          </div>
          <div className={styles.checkout}>
            <p className={styles.total}>Total: ${sum(cartItems)}</p>
            <button className={styles.btn}>Checkout</button>
          </div>
        </>
      )}
    </section>
  )
}
export default Cart
