import { AiFillProject } from 'react-icons/ai'
import { BiCodeCurly } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { RiKakaoTalkFill} from 'react-icons/ri'


export const pageLink = [
    {
        id: 1,
        href: "#project",
        text: "Projects",
    },
    {
        id: 2,
        href: "#technologies",
        text: "Technologies",
    },
    {
        id: 3,
        href: "#about",
        text: "About",
    },
    {
        id: 4,
        href: "#contact",
        text: "Contact",
    }
]

export const socialLinks = [
    {
        id: 1,
        href: "https://medium.com/@stephenprince427",
        icon: "fab fa-medium bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
        id: 2,
        href: "https://github.com/stephenprin",
        icon: "fab fa-github bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
        id: 3,
        href: "https://www.linkedin.com/in/prince-nmezi",
        icon: "fab fa-linkedin bg-gradient-to-r from-cyan-500 to-blue-500",
    }
]

export const projectData = [
    {
        id: 1,
        image: "src/assets/smooze.png",  
        title: "Smooze Music App",
        description: "Smooze web application allows users to play and manage their music library, stream songs, and access to a library of songs from various artists and genres. Additionally, many music apps also offer a premium version with added features such as ad-free listening",
        href1: "https://github.com/orgs/smoozepro/dashboard",
        href2: "https://smoozepro.netlify.app/",
        technology: "React, CSS, JavaScript, NodeJS,Express, Typescript, postgresql, swagger, testing, CI/CD"
    },
    {
        id: 2,
        image: "src/assets/github.png",  
        title: "Github User Search",
        description: "An application that allows users to search for a specific GitHub user by username and retrieve information about their profile and activity on the platform. This information can include the user's bio, location, email, number of followers, repositories, and recent activity such as pull requests and comments. The purpose of a GitHub user searcher is to help developers,recruiters, and others to quickly find and gather information about a specific GitHub user.",
        href1: "https://github.com/stephenprin/react-github-search-users",
        href2: "https://githuser.onrender.com/",
        technology: "React, Tailwind CSS, React Router, React Hooks, Context API, GitHub API, FusionCharts, CSS"
    },
    {
        id: 3,
        image: "src/assets/project4.png",
        title: "Admin sales Dashboard",
        description: "An interface designed to provide an overview of sales performance and activity for a business. It typically displays sales data in the form of charts, graphs, and tables, allowing administrators to quickly and easily monitor key performance metrics.The ultimate goal of an admin sales dashboard is to provide business owners and administrators with real-time visibility into their sales performance, enabling them to make data-driven decisions to improve their bottom line.",
        href1: "https://github.com/stephenprin/Responsive-admin-dashboard",
        href2: "https://admindashboardp.netlify.app/",
        technology: "HTML5, JavaScript, CSS"
    },
    {
        id: 4,
        image: "src/assets/photoboot.png",
        title: "Photo Gallery",
        description: "A photo gallery app built with React, the user interface is constructed using components, which are small, reusable building blocks of code. The app may allow users to search for images of their choice, and view in an organize way. The React library provides a variety of tools and features for building dynamic and responsive user interfaces, such as state management, event handling, and server-side rendering using an External API",
        href1: "https://github.com/stephenprin/Photo-boot",
        href2: "https://sparkly-treacle-fc57e2.netlify.app/",
        technology: "React, Tailwind CSS, React Router, React Hooks, Context API, Unsplash API, CSS"
    }
]

export const skills = [
    {
        id: 1,
      
        icon:"fas fa-pencil-ruler",
        technology: "Frontend",
        items: ["ReactJs", "Tailwind CSS/Bootstrap/CSS", "Material UI", "Styled Components", "HTML", "JavaScript/TypeScript","Fusion Chart/Angrytools"]
        
    },
    {
        id: 2,
        icon:"fas fa-pencil-ruler",
        technology: "Backend",
        items: ["NodeJs/ NodeTs", "ExpressJs", "MongoDB", "Postgres/ Sqlite", "GraphQL", "Jwt"]
        
    },
    {
        id: 3,
        icon: "fas fa-pencil-ruler",
        technology: "DevOps",
        items: ["Docker", "Firebase", "Microservice"]
    },
    {
        id: 4,
        icon: "fas fa-pencil-ruler",
        technology: "UI/UX Design",
        items: ["Adobe XD", "Figma", "Adobe Photoshop"]
    }
]

export const links = [
   
    {
      id: 2,
      url: '#project',
      text: 'Projects',
    //    icon: ''
    },
    {
      id: 3,
      url: '#technologies',
      text: 'Technologies',
    //   icon: 'BiCodeCurly'
    },
    {
      id: 4,
      url: '#about',
      text: 'About',
    //    icon: 'CgProfile'
    },
    {
      id: 5,
      url: '#contact',
      text: 'Contact',
    //   icon: 'RiKakaoTalkFill'
    }
]
