import React from 'react'
import Progressbar from '../../Common/Progressbar'
import { useNavigate } from 'react-router-dom'


function IncidentTitle() {
  const navigate = useNavigate()
      function backfun(){
          navigate("/Incidents/GetStarted/Describe")
      }
      function nextfun(){
          navigate("/Incidents/GetStarted/Describe/IncidentTitle/MapIncident")
      }  


  return (
    <div>
      <Progressbar nexttxt={"Next step"} backpath={backfun} nextpath={nextfun}/> 
      <div className='md:mx-80 mx-10 flex flex-col gap-4 mt-5'>
        <div className='w-full flex flex-col gap-4'>
          <h1 className='text-[24px] font-bold'>Let’s give the incident a title?</h1>
          <p className='text-[14px]' style={{color:"rgba(113, 113, 122, 1)"}}>Make a title that will easily identify the incidents</p>
          <input type="text" placeholder='Add title here' className='rounded-md p-3 border-none outline-none w-full' style={{backgroundColor:"rgba(244, 244, 245, 1)"}} />
        </div>
        <div className='w-full flex flex-col gap-4'>
          <h1 className='text-[24px] font-bold'>Describe what happened during the incident?</h1>
          <p className='text-[14px]' style={{color:"rgba(113, 113, 122, 1)"}}> Share some information about the incident. The when, where, how. </p>
          <textarea name="text" rows="5" id="text" className='rounded-md p-3 border-none outline-none w-full' placeholder='Type here' style={{backgroundColor:"rgba(244, 244, 245, 1)"}}></textarea>
        </div>

      </div>
    </div>
  )
}

export default IncidentTitle
