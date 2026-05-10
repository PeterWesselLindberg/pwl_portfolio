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
    Frontend: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "Vite", level: 75 },
    ],

    Backend: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 65 },
    ],

    Tools: [
      { name: "Git", level: 85 },
      { name: "Figma", level: 60 },
      { name: "Docker", level: 50 },
    ],
  };
    const [selectedCategory, setSelectedCategory] =
      useState<keyof typeof skillCategories>("Frontend");

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
      <h2 className="section-title">Skills</h2>

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