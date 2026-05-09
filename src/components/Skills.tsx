import { Badge} from 'react-bootstrap'

function Skills() {
  const skills = [
    'React',
    'TypeScript',
    'Vite',
    'Bootstrap',
    'JavaScript',
  ]

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

    <section className="snap-section skills-section">
                <h2 className="section-title">Evner</h2>

                <div className="section-content">
                {skills.map((skill) => (
                    <Badge
                    bg="light"
                    text="dark"
                    key={skill}
                    className="p-3"
                    >
                    {skill}
                    </Badge>
                ))}
                </div>
    </section>
  )
}

export default Skills