import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {links} from '../data'
import { useGlobalContext } from '../context'
import { AiOutlineGithub, AiFillLinkedin,AiFillMediumSquare } from 'react-icons/ai'

const Sidebar = () => {
  const{isSidebarOpen, setIsSidebarOpen,closeSidebar} = useGlobalContext()
   
   

    return (
    <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
            <div className='sidebar'>
                <button className='close-btn' onClick={closeSidebar}> <FaTimes /> </button>
                <div className='sidebar-links'>
                    {links.map((item) => {
                        const { id, url,text} = item
                        return (
                            <article key={id}>
                                <div className='sidebar-sublinks'>
                                    <a href={url} className="flex gap-4">
                                        {/* <item.icon className={icon } /> */}
                                        <h4>{ text}</h4>
                                    </a>
                                    
                                </div>

                            </article>
                           
                        )
                    })}
                    
                    <div className='flex gap-6 mt-10'>
                        
                        <a href='https://github.com/stephenprin'><AiOutlineGithub className='text-[1.5rem] text-blue-300' /></a>
                       <a href=' https://www.linkedin.com/in/prince-nmezi'> <AiFillLinkedin className='text-[1.5rem] text-blue-300'/></a>
                        <a href=' https://medium.com/@stephenprince427'><AiFillMediumSquare className='text-[1.5rem] text-blue-300' /></a>
                    </div>
                </div>
            </div>
        </aside>
       
    )
}

export default Sidebar