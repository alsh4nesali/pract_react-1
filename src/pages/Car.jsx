import '../App.css'
import { useParams } from 'react-router-dom'

const Carpage = () => {

    const { id } = useParams()

    return (
      <div className="Carpage">

        <div className="shane">
          <h1>This is Carpage with an id of {id} </h1>
        </div>
        
      </div>
    )
  }
  
  export default Carpage
  