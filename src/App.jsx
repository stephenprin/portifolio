import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from './assets/logo.png'
import profile from './assets/profile.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <nav>
       <div className="container bg-gradient-to-t from-gray-900 to-slate-800">
            <a href="#"><img src={logo} className="logo-img"/><h3>Portfolio</h3></a>
            <ul>
                <li><a href="#project">Project</a></li>
                <li><a href="#skills">Technologies</a></li>
                <li><a href="#about">About</a></li> 
                <li><a href="#contact">Let's Talk</a></li>
            </ul>
            <button id="menu-btn"><i className="fas fa-bars btn-icon"></i></button>
            <button id="close-btn"><i className="far fa-times-circle btn-icon"></i></button>
       </div>
      </nav>
      <section className="profile-stepup">
        <div className="container bg-gradient-to-l from-gray-900 to-slate-900">
            <div className="social">
                
                <a href="https://medium.com/@stephenprince427"><i className="fab fa-medium bg-gradient-to-r from-cyan-500 to-blue-500"></i></a>
                <a href="https://github.com/stephenprin"><i className="fab fa-github bg-gradient-to-r from-cyan-500 to-blue-500"></i></a>
                <a href="https://www.linkedin.com/in/prince-nmezi/"><i className="fab fa-linkedin bg-gradient-to-r from-cyan-500 to-blue-500"></i></a>
            </div>
            <div className="profile-intro">
                <h1>Software developer...</h1>
                <h3>hi, I'm Prince Nmezi,</h3>
                <p> with deep passion for software development,
                    algorithms and problem-solving. Through years of practicing and personal
                    project have leverage my abilities to successfully achieve organizational
                    goal. Strong focus on comprehensive product knowledge in order to meet client requirement
                    and maximize sales.</p>
                     <a href="#contact" className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:btn btn-primary bg-gradient-to-r from-cyan-800 to-blue-400 rounded-">Let's Talk</a>
            </div>
            <div className="profile-zone">
                <div className="outer-zone">
                    <i className="fas fa-code"></i>
                    <i className="fab fa-node-js"></i>
                    <i className="fas fa-server"></i>
                    <i className="fab fa-react"></i>
                </div>
                <div className="inner-zone">
                    <img src={profile} alt="profile"/>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default App
