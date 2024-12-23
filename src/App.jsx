
import './App.css'
import Dashboard from './Components/Dashboard'
import Navigation from './Components/Navigation'
import Incidents from './Components/Incidents'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetStarted from './Components/Incidents/GetStarted';
function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/Incidents' element={<Incidents/>}/>
          <Route path='/Incidents/GetStarted' element={<GetStarted/>}/>
      </Routes>
    
    {/* <Navigation/>
    <Dashboard/>
    <Incidents/> */}
    </BrowserRouter>
  )
}

export default App
