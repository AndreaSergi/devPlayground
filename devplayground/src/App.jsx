import './App.css'
import { MobileNavbar } from './navbar/Mobilenavbar'

function App() {
  const contenuto = {
    height: "2000px"
  }

  return (
    <div>
      
      <MobileNavbar />
      <div style={contenuto}></div>
    </div>
    
  )
}

export default App
