import Contact from './sections/Contact'
import Cover from './sections/Cover'
import Manifesto from './sections/Manifesto'
import Navbar from './sections/Navbar'
import Notes from './sections/Notes'
import Process from './sections/Process'
import Projects from './sections/Projects'
import About from './sections/About'

function App() {
  return (
    <>
      <Navbar />
      <Cover />
      <Manifesto />
      <About />
      <Process />
      <Projects />
      <Notes />
      <Contact />
    </>
  )
}

export default App
