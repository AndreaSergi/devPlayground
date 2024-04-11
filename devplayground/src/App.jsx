import './App.css'
import { Navbar } from './Navbar'

function App() {
  const contenuto = {
    height: "2000px"
  }

  return (
    <div>
      <Navbar />
      <div style={contenuto}></div>
    </div>
    
  )
}

export default App
