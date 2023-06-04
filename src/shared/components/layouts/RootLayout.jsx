

import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { Link, Outlet } from 'react-router-dom'

const RootLayout = ({children}) => {

  return (
    <div className='root-main'>

    <Link to="/">Home</Link><br></br>
    <Link to="/about">About</Link><br></br>
    <Link to="/cars">Cars</Link><br></br>
    <Link to="/cars">Car</Link>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout
