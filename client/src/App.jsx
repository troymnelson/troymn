import HamburgerMenu from "./components/HamburgerMenu";
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from "./components/NotFound"
import { Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <HamburgerMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />  
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </>
  )
}

export default App
