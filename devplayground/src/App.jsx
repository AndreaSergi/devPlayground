import { useState } from 'react'
import { Homepage } from './HOMEPAGE/Homepage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
        <Homepage/>

    </section>
  )
}

export default App
