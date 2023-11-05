import Card from '../Card/Card'
import styles from './Products.module.css'
// import products from '../../products.js'

const Products = ({ products }) => {
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
