import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/navbar'
import Project from './component/project'

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect
 } from 'react';


function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[])
  
  
  return (

    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
         <Route path="/" element={ <Navbar/>}/>
         <Route path="/projects" element={ <Project/>}/>
      </Routes>    
    </BrowserRouter>
    
    
  )
}

export default App
