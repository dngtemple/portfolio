import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/navbar'
import Skills from './component/skills'
import Project from './component/project'


function App() {
  
  return (

    <BrowserRouter>
      <Routes>
         <Route path="/" element={ <> <Navbar/>  <Skills/> <Project/> </>
        }/>
      </Routes>    
    </BrowserRouter>
    
    
  )
}

export default App
