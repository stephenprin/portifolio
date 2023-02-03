import { useState } from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Profile />
      
    </div>
  )
}

export default App
