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
    <section>
                <h2 className="display-4 mb-5">
                Skills
                </h2>

                <div className="d-flex gap-3 flex-wrap">
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