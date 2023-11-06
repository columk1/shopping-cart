import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './ErrorPage.jsx'
import Hero from './components/Hero/Hero'
import Shop, { loader as productLoader } from './routes/shop.jsx'
// import { loader as productLoader } from './routes/shop.jsx'
// import Shop from './routes/shop.jsx'
import Product from './components/Product/Product'
import Cart from './components/Cart/Cart.jsx'

let cartData = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
]

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Hero /> },
        {
          path: 'shop',
          element: <Shop />,
        },
        {
          path: 'shop/:productId',
          element: <Product />,
          loader: productLoader,
        },
        {
          path: 'cart',
          element: <Cart cartItems={cartData} />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default Router
