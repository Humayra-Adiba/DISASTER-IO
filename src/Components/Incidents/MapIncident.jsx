import React from 'react'
import Progressbar from '../../Common/Progressbar'
import { useNavigate } from 'react-router-dom'

function MapIncident() {
    const navigate = useNavigate()
    function backfun(){
        navigate("/Incidents/GetStarted/Describe/IncidentTitle")
    }
    function nextfun(){
        navigate("/Locations")
    }
  return (
    <>
      <Progressbar nexttxt={"Next step"} backpath={backfun} nextpath={nextfun}/>
      <div className='lg:mx-80 md:mx-28 mx-8 mt-10 flex flex-col md:gap-4 gap-6 mb-10'>
        <h1 className='text-[24px] font-bold'>Where’s the incident?</h1>
        <p className='text-[14px] font-normal' style={{color: "rgba(113, 113, 122, 1)"}}>Enter a GPS, address. or pin point on the map. Try to be as accurate as <br/>possible, or click:Jurisdiction Wide</p>
        <img src="/maps.svg" alt="" />
      </div>
    </>
  )
}

export default MapIncident
