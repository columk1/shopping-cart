import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'

export default function Root() {
  const navigation = useNavigation()

  return (
    <>
      <Header logo='..src/assets/react.svg' links={['Home', 'Shop']} />
      <div id='detail' className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />
      </div>
    </>
  )
}
