import styles from './Product.module.css'
import { useParams, useLoaderData } from 'react-router-dom'

const Product = () => {
  //   const id = useParams()
  const { product } = useLoaderData()
  console.log(product)

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
          <button className='addToCart btn' type='submit'>
            Add to cart
          </button>
        </form>
      </div>
    </div>
  )
}

export default Product
