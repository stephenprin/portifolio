import { useState } from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Divider from './components/Divider'
import Project from './components/Project'
import Technologies from './components/Technologies'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Profile />
      <Divider />
      <Project />
      < Technologies/>
      
    </div>
  )
}

export default App
