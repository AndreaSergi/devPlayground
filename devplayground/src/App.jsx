
import { Homepage } from './HOMEPAGE/Homepage'
import { ReactBootstrap } from 'react-bootstrap/dist/react-bootstrap'
import { MobileNavbar} from './navbar/Mobilenavbar'
import { Footer } from './Footer/Footer' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Wordify } from './WORDIFY/Wordify'

function App() {

  return (
   <>
    <MobileNavbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
    </Routes>
    <Routes>
      <Route path='/wordify' element={<Wordify/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
