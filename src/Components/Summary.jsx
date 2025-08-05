import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

function Summary ()  {
      const skills = [
        { name: 'HTML5',      icon: <FaHtml5 />,          level: 80 },
        { name: 'CSS3',       icon: <FaCss3Alt />,        level: 75 },
        { name: 'JavaScript', icon: <IoLogoJavascript />, level: 65 },
        { name: 'React.JS',   icon: <FaReact />,          level: 75 },
        { name: 'Node.JS',    icon: <FaNodeJs />,         level: 65 },
        { name: 'MongoDB',    icon: <SiMongodb />,        level: 80 },
        
  
];

    return (<>
    
  <section id="summary">
    <h2>Professional Summary</h2>
    <p>
      MERN Stack Web Developer passionate about building performant, user-centric applications. Experienced with React, JavaScript, Node.js, and MongoDB. Adept at both solo and collaborative projects. My focus: continual learning and delivering real-world solutions.
    </p>
  </section>

    <section id="skills">
    <h2>Skills</h2>
    <ul>
      {skills.map(skill => (
        <li key={skill.name}>
          <span>{skill.icon} {skill.name}</span>
          
          <div style={{ 
            background: '#eee', 
            borderRadius: 5, 
            width: 200, height: 10, 
            display: 'inline-block', 
            marginLeft: 10 }}>
            
          <div style={{ 
            width: `${skill.level}%`, 
            background: '#007acc', 
            height: 10, 
            borderRadius: 5 }}></div>
          </div>
        </li>
      ))}
    </ul>
  </section>
    </>
  );
}

export default Summary;
