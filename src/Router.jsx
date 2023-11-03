import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './ErrorPage.jsx'
import Hero from './components/Hero/Hero'
// import Profile from './Profile.jsx'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <Hero /> }],
    },
    {
      path: 'shop/:product',
      // element: <Product />,
      // children: [
      //   { index: true, element: <DefaultProfile /> },
      //   { path: 'spinach', element: <Spinach /> },
      //   { path: 'popeye', element: <Popeye /> },
      // ],
    },
  ])
  return <RouterProvider router={router} />
}

export default Router
