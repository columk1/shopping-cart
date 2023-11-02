import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx'
import Profile from './Profile.jsx'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'profile/:name',
      element: <Profile />,
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
