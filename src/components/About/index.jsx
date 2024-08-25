
import "./About.css"

import { profile12 } from "../../assets/images"

const About = () => {
  return (
    <section id='about'>
      <div className="container">
         <div className="photo__container">
            <img className="img" src={profile12} alt="profile_picture" />
          </div>
         <div className="details">
          <h3><span className="text__gradient" style={{fontSize:"20px"}}>About</span> Me</h3>
          <p className=" description" style={{fontSize:"17px"}}>
            I am an innovative and solution-focused developer, excelling in web application development across various programming languages. From analyzing requirements to implementing and testing solutions, I am dedicated to delivering high-quality results. My passion for technology and continuous learning keeps me at the forefront of modern development practices. I thrive in both team environments and independent work, and I am always eager to tackle new challenges and contribute to impactful projects.
          </p>
          <a href="#contact" className='btn btn__primary'>Contact Me</a>
         </div>
      </div>
    </section>
  )
}

export default About
