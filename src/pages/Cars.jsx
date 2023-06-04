import '../App.css'

import { Link } from 'react-router-dom'

const Carspage = () => {

    return (
      <div className="Carspage">
    
    <Link to="/cars/add">Add Car</Link><br></br>
    <Link to="/cars/1">Car 1</Link><br></br>
    <Link to="/cars/2">Car 2</Link><br></br>
    <Link to="/cars/3">Car 3</Link><br></br>
    <Link to="/cars/4">Car 4</Link>
        
      </div>
    )
  }
  
  export default Carspage
  