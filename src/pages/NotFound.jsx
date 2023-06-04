import '../App.css'
import { Link } from 'react-router-dom'

const NotFoundpage = () => {

    return (
      <div className="NotFoundpage">
        This URL is not found. <Link to="/">Go back home</Link>
      </div>
    )
  }
  
  export default NotFoundpage
  