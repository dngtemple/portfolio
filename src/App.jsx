
import './App.css'
import Header from './component/Header'
import Side from './component/Side'

function App() {
  
  return (
    <div  className='both_parent' style={{display:"flex",position:"relative",width:"100%",height:"100vh"}}>
      <Header/>

      <Side/>

    </div>
    
  )
}

export default App
