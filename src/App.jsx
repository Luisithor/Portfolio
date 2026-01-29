import Contact from './sections/Contact'
import Cover from './sections/Cover'
import Manifesto from './sections/Manifesto'
import Navbar from './sections/Navbar'
import Notes from './sections/Notes'
import Process from './sections/Process'
import Projects from './sections/Projects'

function App() {
  return (
    <>
      <Navbar />
      <Cover />
      <Manifesto />
      <Process />
      <Projects />
      <Notes />
      <Contact />
    </>
  )
}

export default App
