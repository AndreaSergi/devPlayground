
import { Homepage } from './HOMEPAGE/Homepage'
import { ReactBootstrap } from 'react-bootstrap/dist/react-bootstrap'
import { MobileNavbar} from './navbar/Mobilenavbar'
import { Footer } from './Footer/Footer' 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    
    <section>
        <MobileNavbar/>
        <Homepage/>
        <Footer/>
    </section>
  )
}

export default App
