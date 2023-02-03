import React from 'react'
import profile from '../assets/profile.jpg'
import {socialLinks} from '../data'

const Profile = () => {
  return (
    <section className="profile-stepup">
        <div className="container bg-gradient-to-l from-gray-900 to-slate-900">
            <div className="social">
                  {socialLinks.map((link) => { 
                      const { id, href, icon } = link;
                      return (
                          <div key={id}>
                               <a href={href}><i className={icon}></i></a>
                       </div>
                      )
                  })}
                
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
  )
}

export default Profile