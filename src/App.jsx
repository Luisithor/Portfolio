import Navbar from './sections/Navbar'
import Cover from './sections/Cover'
import Manifesto from './sections/Manifesto'
import About from './sections/About'
import Process from './sections/Process'
import Projects from './sections/Projects'
import Notes from './sections/Notes'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <section id="cover">
          <Cover />
        </section>
        
        <section id="manifesto">
          <Manifesto />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="notes">
          <Notes />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App