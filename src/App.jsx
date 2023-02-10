import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Divider from './components/Divider'
import Project from './components/Project'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import About from './components/About'
import Sidebar from './components/Sidebar'
import loader from  './assets/loader.svg'





function App() {
  
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { 
    setTimeout(() => { 
      setIsLoading(false)
    }, 2000)
  }, [])
  if (isLoading) { 
    return <div className="loading">
      <img src={loader} alt="loader" className='' />
      </div>
  }

  return (
   
    <div>
      <Navbar />
      <Sidebar/>
      <Profile />
      <Divider />
      <Project />
      < Technologies />
      <Divider />
      <About />
      <Contact/>
      
    </div>
  )
}

export default App
