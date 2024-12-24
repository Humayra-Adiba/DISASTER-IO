
import './App.css'
import Dashboard from './Components/Dashboard'
import Navigation from './Components/Navigation'
import Incidents from './Components/Incidents'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetStarted from './Components/Incidents/GetStarted';
import Describe from './Components/Incidents/Describe';
import IncidentTitle from './Components/Incidents/IncidentTitle';
import MapIncident from './Components/Incidents/MapIncident';
function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/Incidents' element={<Incidents/>}/>
          <Route path='/Incidents/GetStarted' element={<GetStarted/>}/>
          <Route path="/Incidents/GetStarted/Describe" element={<Describe/>}/>
          <Route path='/Incidents/GetStarted/Describe/IncidentTitle' element={<IncidentTitle/>}/>
          <Route path='/Incidents/GetStarted/Describe/IncidentTitle/MapIncident' element={<MapIncident/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
