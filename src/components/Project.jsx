import React from 'react'

import {inprogress, projectData} from "../data"


const Project = () => {
  return (
    <section className="portifo" id="project">
       
        <div className="container">
            <h2>Projects</h2>
            
              <div className="portifos">
                 {projectData.map((project) => {
                      const { id, image, description, title,href1, href2 ,technology} = project;
                      return (
                        <div key={id} className="porti shadow shadow-blue-600/40 md:shadow-slate-600/40">
                        <div className="thumbnail">
                            <img src={image} alt="project"/>
                        </div>
                       
                        <div>
                                  <h3 className="text-cyan-600 text-[1.4rem] text-center mb-4">{ title}</h3>
                        <hr className="w-[50px] h-[3px] bg-gradient-to-r from-cyan-500 via-cyan-100 to-cyan-800 m-auto"/>
                                  <p className="text-sm px-4 text-slate-400 text-justify mt-3">{ description}</p>
                             <div className="port-link mt-4 flex gap-4 ml-4 text-cyan-600 mb-8">
                                <a className="text-[0.7rem]" href={href1}>GITHUB</a>
                                <a className="text-[0.7rem] text" href={href2}>LIVE DEMO</a>
                                      
                                  </div>
                                  <div className='p-4 technology'>
                                      <span className="text-sm text-slate-400">Technologies used:</span>
                                      <span className="text-sm text-cyan-600"> { technology}</span>
                                  </div>
                                 
                        </div>
                    </div>
                      )
                  })}
                
                
        </div>
        {/* <h2 className='progress-project'>Project in Progress</h2>
        <div className="portifos">
                 { inprogress.map((project) => {
                      const { id, image, description, title,href1, href2 ,technology} = project;
                      return (
                        <div key={id} className="porti shadow shadow-blue-600/40 md:shadow-slate-600/40">
                        <div className="thumbnail">
                            <img src={image} alt="project"/>
                        </div>
                       
                        <div>
                                  <h3 className="text-cyan-600 text-[1.4rem] text-center mb-4">{ title}</h3>
                        <hr className="w-[50px] h-[3px] bg-gradient-to-r from-cyan-500 via-cyan-100 to-cyan-800 m-auto"/>
                                  <p className="text-sm px-4 text-slate-400 text-justify mt-3">{ description}</p>
                             <div className="port-link mt-4 flex gap-4 ml-4 text-cyan-600 mb-8">
                                <a className="text-[0.7rem]" href={href1}>GITHUB</a>
                                <a className="text-[0.7rem] text" href={href2}>LIVE DEMO</a>
                                      
                                  </div>
                                  <div className='p-4 technology'>
                                      <span className="text-sm text-slate-400">Technologies used:</span>
                                      <span className="text-sm text-cyan-600"> { technology}</span>
                                  </div>
                                 
                        </div>
                    </div>
                      )
                 })}
          </div> */}

        </div>
     </section>
  )
}

export default Project