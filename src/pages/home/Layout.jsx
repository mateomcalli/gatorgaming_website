import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import MobileNavbar from '../../components/navbar/MobileNavbar'
import Footer from '../../components/footer/Footer'

const Layout = ({ isMobile, maxMd }) => {
  return (
    <div className='bg-ggbg w-fit scroll-smooth'>
      {isMobile ? <MobileNavbar/> : <Navbar/>}
      <Outlet/>
      <Footer maxMd={maxMd}/>
    </div>
  )
}

export default Layout