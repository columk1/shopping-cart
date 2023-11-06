import { Outlet, useNavigation, useLoaderData } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import Loading from '../components/Loading/Loading.jsx'

export async function loader() {
  let products
  setTimeout(async () => {
    products = await (await fetch('https://fakestoreapi.com/products')).json()
  }, 2000)
  // const products = await (await fetch('https://fakestoreapi.com/products')).json()

  return { products }
}

export default function Root() {
  const navigation = useNavigation()
  const { products } = useLoaderData()

  return (
    <>
      <Header
        logo='..src/assets/react.svg'
        links={[
          { title: 'Home', route: '/' },
          { title: 'Shop', route: '/shop' },
          {
            title: <span className='material-symbols-outlined'>shopping_cart</span>,
            route: '/cart',
          },
        ]}
      />
      <div id='detail'>
        {navigation.state === 'loading' ? <Loading /> : <Outlet context={{ products }} />}
      </div>
    </>
  )
}
