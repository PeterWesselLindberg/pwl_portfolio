import './App.css'
// import NavigationBar from './components/NavBar'
import Hero from './components/Hero'
// import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Education from './components/Education'

function App() {
  return (
    <div className="scroll-container">
      <section className="snap-section hero-section">
        <Hero />
      </section>

      {/* <section className="snap-section about-section">
        <About />
      </section> */}

      <section className="snap-section skills-section">
        <Skills />
      </section>

      <section className="snap-section projects-section">
        <Projects />
      </section>
      
      <section className='snap-section education-section'>
        <Education />
      </section>

      <section className='snap-section contact-section'>
        <Contact />
      </section>
    </div>
  )
}

export default App
