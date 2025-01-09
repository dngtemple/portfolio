import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/navbar'
import Skills from './component/skills'
import Project from './component/project'
import Testimonials from './component/testimonials'
import Experience from './component/experience'
import Footer from './component/footer'


function App() {
  
  return (

    <BrowserRouter>
      <Routes>
         <Route path="/" element={ <> <Navbar/>  <Skills/> <Experience/> <Project/>  <Testimonials/> <Footer/> </>
        }/>
      </Routes>    
    </BrowserRouter>
    
    
  )
}

export default App
