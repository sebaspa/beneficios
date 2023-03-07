import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'

export const MainLayout = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
