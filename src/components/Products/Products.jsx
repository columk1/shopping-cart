import Card from '../Card/Card'
import styles from './Products.module.css'
import { useOutletContext } from 'react-router-dom'

const Products = () => {
  const { products } = useOutletContext()
  return (
    <section className={styles.shop}>
      <div className={styles.grid}>
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

export default Products
