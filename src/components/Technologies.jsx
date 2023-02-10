import React from "react";
import { skills } from "../data";

const Technologies = ({ skills }) => {
    const [fShow, setFShow] = React.useState(false);
    const [bShow, setBShow] = React.useState(false);
    const [dShow, setDShow] = React.useState(false);
    const [uShow, setUShow] = React.useState(false);
   
  const [frontend, setFrontend] = React.useState([
    "ReactJs",
    "Tailwind CSS/Bootstrap/CSS",
    "Material UI",
    "Styled Components",
    "HTML",
    "JavaScript/TypeScript",
    "Fusion Chart/Angrytools",
  ]);
  const [backend, setBackend] = React.useState([
    "NodeJs/ NodeTs",
    "ExpressJs",
    "MongoDB",
    "Postgres/ Sqlite",
    "GraphQL",
    "Jwt",
  ]);
  const [ux, setUx] = React.useState(["Adobe XD", "Figma", "Adobe Photoshop"]);
  const [devops, setDevops] = React.useState([
    "Docker",
    "Firebase",
    "Microservice",
  ]);

 
  const toggleShowFront = () => {
    setFShow(!fShow);
  }
  const toggleShowBack = () => {
    setBShow(!bShow);
  }
  const toggleShowDev = () => {
    setDShow(!dShow);
  };
  const toggleShowUx = () => {
    setUShow(!uShow);
  };

  return (
    <section className="skills" id="technologies">
      <h1 className="text-[3rem] text-slate-300">Technologies</h1>
      <div className="container">
            <div className="skill">
            <div
                className="head bg-gradient-to-r from-cyan-500 to-blue-500"
                onClick={toggleShowFront}
            >
                <div className="left">
                <i className="fas fa-pencil-ruler"></i>
                <h4>Frontend</h4>
                </div>
                <i className="fas fa-caret-down"></i>
            </div>
            {fShow && (
                <div className="items">
                {frontend.map((item, index) => {
                    return (
                    <div key={index} className="item">
                        <h4>{item}</h4>
                    </div>
                    );
                })}
                </div>
            )}
            </div>

            <div className="skill">
            <div
                className="head bg-gradient-to-r from-cyan-500 to-blue-500"
                onClick={toggleShowBack }
            >
                <div className="left">
                <i className="fas fa-pencil-ruler"></i>
                <h4>Backend</h4>
                </div>
                <i className="fas fa-caret-down"></i>
            </div>

            {bShow && (
                <div className="items">
                {backend.map((item, index) => {
                    return (
                    <div key={index} className="item">
                        <h4>{item}</h4>
                    </div>
                    );
                })}
                </div>
            )}
            </div>
            <div className="skill">
            <div
                className="head bg-gradient-to-r from-cyan-500 to-blue-500"
                onClick={ toggleShowDev}
            >
                <div className="left">
                <i className="fas fa-pencil-ruler"></i>
                <h4>Devops</h4>
                </div>
                <i className="fas fa-caret-down"></i>
            </div>

            {dShow && (
                <div className="items">
                {devops.map((item, index) => {
                    return (
                    <div key={index} className="item">
                        <h4>{item}</h4>
                    </div>
                    );
                })}
                </div>
            )}
            </div>
            <div className="skill">
            <div
                className="head bg-gradient-to-r from-cyan-500 to-blue-500"
                onClick={ toggleShowUx}
            >
                <div className="left">
                <i className="fas fa-pencil-ruler"></i>
                <h4>UX/UI</h4>
                </div>
                <i className="fas fa-caret-down"></i>
            </div>

            {uShow && (
                <div className="items">
                {ux.map((item, index) => {
                    return (
                    <div key={index} className="item">
                        <h4>{item}</h4>
                    </div>
                    );
                })}
                </div>
            )}
            </div>

        </div>
    </section>
  );
};

export default Technologies;
