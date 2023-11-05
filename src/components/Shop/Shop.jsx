import { useEffect, useState } from 'react'
import Products from '../Products/Products.jsx'
import Loading from '../Loading/Loading.jsx'

const Shop = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`)
        }
        let actualData = await response.json()
        setData(actualData)
        setError(null)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  return error ? error : loading ? <Loading /> : <Products products={data} />
}

export default Shop
