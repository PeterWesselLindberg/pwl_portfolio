// import { Badge} from 'react-bootstrap'
import { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { motion } from "framer-motion";
function Skills() {
  // const skills = [
  //   'React',
  //   'TypeScript',
  //   'Vite',
  //   'Bootstrap',
  //   'JavaScript',
  // ]
  const skillCategories = {
    "Programming languages": [
      { name: "C#", level: 80 },
      { name: "Python", level: 80 },
      { name: "C/C++", level: 60 },
      { name: "Java", level: 60 },
      { name: "JavaScript/TypeScript", level: 60 },
      { name: "Haskell", level: 60 },
      { name: "Erlang", level: 80 },
      { name: "Lisp", level: 40 },
      { name: "Prolog", level: 60 },
      { name: "Bash", level: 60 },
      { name: "SQL", level: 60 },
      { name: "F#", level: 80 },
    ],

    "Game engines": [
      { name: "Unity", level: 60 },
      { name: "Godot", level: 60 },
    ],

    "Frontend Tools": [
      { name: "React", level: 60 },
      { name: "Bootstrap", level: 60 },
      { name: "Vite", level: 60 },
      { name: "Node.js", level: 60 },
      { name: "Html/Css", level: 80 },
      { name: "Framer", level: 60 },
    ],

    "Backend Tools": [
      { name: "Github/Gitlab", level: 80 },
      { name: "Docker", level: 60 },
    ],

    "Other Tools": [
      { name: "Isabelle proof assistant", level: 60 },
      { name: "Microsoft office 365", level: 80 },
      { name: "Latex", level: 80 },
    ],
  };
    const [selectedCategory, setSelectedCategory] =
      useState<keyof typeof skillCategories>("Programming languages");

  return (
    // <section>
    //             <h2>Evner</h2>

    //             <div>
    //             {skills.map((skill) => (
    //                 <Badge
    //                 bg="light"
    //                 text="dark"
    //                 key={skill}
    //                 className="p-3"
    //                 >
    //                 {skill}
    //                 </Badge>
    //             ))}
    //             </div>
    // </section>

    // <>
    //             <h2 className="section-title">Skills</h2>

    //             <div className="section-content">
    //             {skills.map((skill) => (
    //                 <Badge
    //                 bg="light"
    //                 text="dark"
    //                 key={skill}
    //                 className="p-3"
    //                 >
    //                 {skill}
    //                 </Badge>
    //             ))}
    //             </div>
    //             {/* <div className="bottom-left-text">
    //               React • TypeScript • Bootstrap
    //             </div> */}
    // </>
    
    <>
      <h2 className="section-title">IT-compentecies</h2>

      <div className="skills-layout">
        
        {/* LEFT SIDE */}
        <motion.div
          className="skills-buttons"

          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ amount: 0.3 }}

          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          
          {Object.keys(skillCategories).map((category) => (
            <Button
              key={category}
              variant={
                selectedCategory === category
                  ? "light"
                  : "outline-light"
              }
              onClick={() =>
                setSelectedCategory(
                  category as keyof typeof skillCategories
                )
              }
            >
              {category}
            </Button>
          ))}
          
        </motion.div>
        
        
        {/* RIGHT SIDE */}
        <motion.div
          className="skills-list"

          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ amount: 0.3 }}

          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {skillCategories[selectedCategory].map((skill) => (
            <div key={skill.name} className="skill-item">

              <div className="skill-header">
                <span>{skill.name}</span>
              </div>

              <ProgressBar now={skill.level} />

            </div>
          ))}
        </motion.div>
      </div>
  </>
  
  )
}

export default Skills