import Header from './Components/Header'
import './App.css'
import Body from './Components/body/Body'
import { Outlet } from 'react-router-dom'

function App() {
 

  return (
   <div className = "App">
   <Header/> 
   <Outlet/>
   </div>
  )
}

export default App
