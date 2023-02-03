import React from 'react'
import logo from '../assets/logo.png'
import { pageLink } from '../data'

const Navbar = () => {
  return (
    <nav>
    <div className="container bg-gradient-to-t from-gray-900 to-slate-800">
         <a href="#"><img src={logo} className="logo-img"/><h3>Portfolio</h3></a>
              <ul>
                  {pageLink.map((link) => { 
                      const { id, href, text } = link;
                      return (
                          <li key={id}><a href={href}>{ text}</a></li>
                      )
                  })}
         </ul>
         <button id="menu-btn"><i className="fas fa-bars btn-icon"></i></button>
         <button id="close-btn"><i className="far fa-times-circle btn-icon"></i></button>
    </div>
   </nav>
  )
}

export default Navbar
