
import { Homepage } from './HOMEPAGE/Homepage'
import { ReactBootstrap } from 'react-bootstrap/dist/react-bootstrap'
import { MobileNavbar} from './navbar/Mobilenavbar'
import { Footer } from './Footer/Footer' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Wordify } from './WORDIFY/Wordify'
import { HrefTrix} from './tris/HrefTrix'
import { Href} from './pingPong/Href'

function App() {

  return (
   <>
    <MobileNavbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/wordify' element={<Wordify/>}></Route>
      <Route path='/trix' element={<HrefTrix/>}></Route>
      <Route path='/pingpong' element={<Href/>}></Route>
      
    </Routes>

    <Footer/></>
  )
}

export default App
