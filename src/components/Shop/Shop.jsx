import Card from '../Card/Card'
import styles from './Shop.module.css'
import products from '../../products.js'
const Shop = () => {
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

export default Shop
