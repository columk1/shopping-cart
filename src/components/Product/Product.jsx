import styles from './Product.module.css'
import { useParams, useLoaderData, useOutletContext, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Product = () => {
  const { product } = useLoaderData()
  const { cartItems, setCartItems } = useOutletContext()

  let navigate = useNavigate()

  const addToCart = (e) => {
    e.preventDefault()
    console.log(product)
    console.log(cartItems)
    setCartItems([...cartItems, product])
    navigate('/cart')
  }

  // const { products } = useOutletContext()
  // const id = useParams().productId
  // const product = products.find((product) => product.id == id)

  // const [product, setProduct] = useState(fetchedProduct)

  // useEffect(() => {
  //   if (contextProduct) setProduct(contextProduct)
  // }, [])

  return (
    <div className={styles.container}>
      <div className={styles.productImg}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.productInfo}>
        <h2>{product.title}</h2>
        <div className={styles.price}>${product.price}</div>
        <p className={styles.description}>{product.description}</p>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor='quantity'>Quantity</label>
            <input type='number' id='quantity' name='quantity' defaultValue='1'></input>
          </div>
          <button className='addToCart btn' type='submit' onClick={addToCart}>
            Add to cart
          </button>
        </form>
      </div>
    </div>
  )
}

export default Product
