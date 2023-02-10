import React from 'react'
import profile from '../assets/prince.jpg'
import cv from  '/src/assets/CV(Node Engineer).pdf'

const About = () => {
  return (
    <section className="about-me" id="about">
    <h1 className="text-[3rem] text-left text-slate-200 ml-8">About Me</h1>
    <div className="container mb-6 mt-0 ">
        <div className="image ml-10">
            <img src={profile} alt="profile" className="rounded-lg"/>
        </div>
        <div className="info m-auto text-center pl-5  pt-0">
            <p className="pr-12 text-[1.2rem] text-slate-400">My name is Prince Nmezi, I am a React/Node engineer 👨🏽‍💻 with deep passion for the tech space, 
                building to scale web applications using modern technologies. Through practicing and personal projects 
                have leverage my abilities to successfully achieve organizational goal, using modern technology such as GraphQL, ReactJS and NodeJS. 
                Also handle database management systems with SQL like Postgres or No SQL such as MongoDB and Docker for containerization.
                 I have experience in UX design, unit, and integration testing 
            </p>
            <p className="pr-12 text-[1.2rem] text-slate-400">
                My background has prepared me to excel in any capacity, with plenty of hands-on classroom and practical experience in software development 
                for a variety of usages. My technical abilities, coupled with my adaptability and interpersonal skills, position me ready to thrive in this field.
                Additionally, I possess the agile mindset, which is the ability to work in a team environment. Currently, 
                I am enhancing my knowledge of Algorithms and Data structures to boost my problem-solving skills .
                I am constantly looking for a ways to improve my coding skills and ready to grow at all times.
            </p>
            <a href={cv} download className="btn btn-primary text-lg bg-gradient-to-r from-cyan-500 to-blue-500 
            rounded-full hover:btn btn-primary bg-gradient-to-r from-cyan-800 to-blue-400 rounded-">Download CV</a>
        </div>

    </div>
</section>
  )
}

export default About
