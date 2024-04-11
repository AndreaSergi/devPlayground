import './App.css'
import { Navbar } from './Navbar'
import { Navbar1 } from './Navbar1'

function App() {
  const contenuto = {
    height: "2000px"
  }

  return (
    <div>
      
      {/*<Navbar />*/}
      <Navbar1 />
      <div style={contenuto}></div>
    </div>
    
  )
}

export default App
