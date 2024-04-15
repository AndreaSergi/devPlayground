import { useState } from 'react'
import { Homepage } from './HOMEPAGE/Homepage'
import { MobileNavbar } from './navbar/Mobilenavbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <section>
      <MobileNavbar/>
      <Homepage/>

    </section>
  )
}

export default App
