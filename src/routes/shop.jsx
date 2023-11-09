import { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading.jsx'
import { Outlet, useOutletContext, useLoaderData } from 'react-router-dom'

export async function loader() {
  const data = await (await fetch('https://fakestoreapi.com/products')).json()
  const products = data.map((product) => ({ ...product, price: product.price.toFixed(2) }))
  return { products }
}

const Shop = () => {
  const { products } = useLoaderData()
  const { cartItems, setCartItems } = useOutletContext()

  // const [data, setData] = useState(null)
  // const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (products) {
      // setData(products)
      setLoading(false)
    } else {
      throw new Error('Server error')
    }
  }, [])
  return loading ? <Loading /> : <Outlet context={{ products, cartItems, setCartItems }} />
}
//       console.log('no context products')
//       const getData = async () => {
//         try {
//           const response = await fetch('https://fakestoreapi.com/products')
//           if (!response.ok) {
//             throw new Error(`This is an HTTP error: The status is ${response.status}`)
//           }
//           let actualData = await response.json()
//           setData(actualData)
//           setError(null)
//         } catch (err) {
//           setError(err.message)
//           setData(null)
//         } finally {
//           setLoading(false)
//         }
//       }
//       getData()
//     }
//   }, [])

//   return error ? error : loading ? <Loading /> : <Products products={data} />
//   // return products ? <Products products={products} /> : <Loading />
// }

export default Shop
