
const Education = () => {
  return (
    <>
        <h2 className="section-title">Education</h2>
        <div className="section-content">
            <div className="center-columns">
                <div className="column">
                <h1>Master's degree in computer science</h1>
                <h6 className="text-soft-gray"> University of Copenhagen ● graduated: February 2026</h6>
                    <p>
                    General profile in computer science with a focus on machine learning, human computer interaction, understanding research, 
                    softwaredesign and -implementation.
                    </p>
                    <p>
                        <u>Master thesis:</u> “To Your Heart's Content: A Toolkit for Designing Danish Woven Christmas Hearts”
                    </p>
                    <ul>
                        <li>Developing software for designing and creating Danish woven Christmas hearts.</li>
                        <li>A toolkit, which can help user's design, print, cut and weave their own personal Danish woven Christmas hearts.</li>
                        <li>Facilitates the design process through templates and design tools as well as teach/show user how to weave their heart correctly.</li>
                        <li>The software also has a built in guide on how to use the software effectively.</li>
                    </ul>
                </div>

                <div className="column">
                    <h1>Bachelor's degree in computer science</h1>
                    <h6 className="text-soft-gray"> University of Copenhagen ● graduated: June 2023</h6>
                    <p>
                        General profile in computer science with a focus on building a solid theoretical, ethical and practical foundation within 
                        algorithms, data structures and software development. The curriculum combined core areas such as software development, 
                        optimization, hardware design, internet protocols, system architectures, machine learning, databases, algorithms and datastructures, 
                        programming languages and compiler design. 
                    </p>
                    <p>
                        <u>Bachelor thesis:</u> “Design of a High-order Declarative ScriptingLanguage”
                    </p>
                    <ul>
                        <li>Involved development of a high-order declarative scripting language for file management and scripting.</li>
                        <li>Developed specific semantics for the language as well as a type system for the language and illustrated 
                            the language's practical application in hypothetical scenarios using examples and theoretical comparisons 
                            between similar languages such as Bash and Python.</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Education