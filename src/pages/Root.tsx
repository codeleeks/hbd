import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

interface RootProps {}

const RootPage = (_: RootProps) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default RootPage
