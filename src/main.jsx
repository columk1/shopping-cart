import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { loader as rootLoader } from './routes/root'
import ErrorPage from './ErrorPage.jsx'
import Hero from './components/Hero/Hero'
import Shop, { loader as productLoader } from './routes/shop.jsx'
// import { loader as productLoader } from './routes/shop.jsx'
// import Shop from './routes/shop.jsx'
import Product from './components/Product/Product'
import Cart from './components/Cart/Cart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      { index: true, element: <Hero /> },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'shop/:productId',
        element: <Product />,
        // loader: productLoader,
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
