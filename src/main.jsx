import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './ErrorPage.jsx'
import Hero from './components/Hero/Hero'
import Shop, { loader as shopLoader } from './routes/shop.jsx'
import Products from './components/Products/Products'
import Product from './components/Product/Product'
import Cart from './components/Cart/Cart.jsx'

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
        loader: shopLoader,
        children: [
          { index: true, element: <Products /> },
          { path: ':productId', element: <Product /> },
        ],
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
