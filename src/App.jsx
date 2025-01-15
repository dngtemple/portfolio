import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './component/navbar'
import WorkExperience from './component/experience'
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect} from 'react';



function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  },[])
  
  
  return (

    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
         <Route path="/" element={<> <Navbar/> <WorkExperience/> </>}/>

      </Routes>    
    </BrowserRouter>
    
    
  )
}

export default App
