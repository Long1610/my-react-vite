import { Outlet } from 'react-router-dom'
import Sidebar from 'components/sidebar'
import Header from 'components/header'

function Layout() {
  return (
    <>
      <Sidebar />
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
