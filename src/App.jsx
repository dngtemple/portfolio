import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/navbar'
import Skills from './component/skills'


function App() {
  
  return (

    <BrowserRouter>
      <Routes>
         <Route path="/" element={ <> <Navbar/>  <Skills/></>
        }/>
      </Routes>    
    </BrowserRouter>
    
    
  )
}

export default App
