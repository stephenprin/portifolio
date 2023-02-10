import React from 'react'
import prince from '../assets/prince.jpg'
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
                  <p> As a highly motivated and skilled software developer with experience
                      in developing and implementing software solutions,
                      I am eager to bring my technical expertise and passion for technology to a new opportunity. I am committed to staying up-to-date with
                      the latest technologies and methodologies to ensure that I am providing the best possible solutions for clients and end-users..</p>
                     <a href="#contact" className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-900 rounded-full">Let's Talk</a>
            </div>
            <div className="profile-zone">
                <div className="outer-zone">
                    <i className="fas fa-code"></i>
                    <i className="fab fa-node-js"></i>
                    <i className="fas fa-server"></i>
                    <i className="fab fa-react"></i>
                </div>
                <div className="inner-zone">
                    <img src={prince} alt="prince"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile