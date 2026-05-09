import './App.css'
// import NavigationBar from './components/NavBar'
import Hero from './components/Hero'
// import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
//import Contact from './components/Contact'

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

      <section className="snap-section">
        <Projects />
      </section>
    </div>
  )
}

export default App
