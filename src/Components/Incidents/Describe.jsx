import React from 'react'
import Progressbar from '../../Common/Progressbar'
import { useNavigate } from 'react-router-dom'

function Describe() {
    const navigate = useNavigate()
    function backfun(){
        navigate("/Incidents/GetStarted")
    }
    function nextfun(){
        navigate("/Incidents/GetStarted/Describe/IncidentTitle")
    }  

    const description=[
        {
            img: "/Avalanche.svg",
            incident: "Avalanche",
          },
          {
            img: "/Biological.svg",
            incident: "Biological",
          },
          {
            img: "/Blizzard.svg",
            incident: "Blizzard",
          },
          {
            img: "/ColdFreezing.svg",
            incident: "Cold/Freezing",
          },
          {
            img: "/Drought.svg",
            incident: "Drought",
          },
          {
            img: "/Earthquake.svg",
            incident: "Earthquake",
          },
          {
            img: "/Flooding.svg",
            incident: "Flooding",
          },
          {
            img: "/sun.svg",
            incident: "Heat Wave",
          },
          {
            img: "/Hail.svg",
            incident: "Hail",
          },
          {
            img: "/Lightning.svg",
            incident: "Lightning",
          },
          {
            img: "/Tornado.svg",
            incident: "Tornado",
          },
          {
            img: "/Mudslide.svg",
            incident: "Mudslide",
          },
          {
            img: "/SevereStorm.svg",
            incident: "Severe Storm",
          },
          {
            img: "/StrongWind.svg",
            incident: "Strong Wind",
          },
          {
            img: "/Tornado.svg",
            incident: "Tornado",
          },
          {
            img: "/Tsunami.svg",
            incident: "Tsunami",
          },
          {
            img: "/VolcanicEruption.svg",
            incident: "Volcanic Eruption",
          },
          {
            img: "/Wildfire.svg",
            incident: "Wildfire",
          }
    ]
    return (  
    <>
        <Progressbar nexttxt={"Next step"} backpath={backfun} nextpath={nextfun}/>
        <div className='md:mx-72 '>
        <div className="font-bold text-black text-[24px] mb-3 flex md:justify-start justify-center  py-5 text-wrap md:text-nowrap w-full ">
          <h1 className='text-wrap md:text-nowrap w-full'>Which of these best describes the incident?</h1>
        </div>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-col-1 text-center gap-3 justify-center items-center'>
          {description.map(({img,incident}, i) => (
            <div className='inline-flex justify-start items-center gap-2 w-44 px-3 py-4 border border-gray-300 rounded-md hover:cursor-pointer hover:bg-orange-500 transition-all duration-300 group' style={{backgroundColor:"rgba(244, 244, 245, 1)"}} key={i}>
                <img src={img}/>
                <p className="text-14" style={{color:"rgba(113, 113, 122, 1)"}}>{incident}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Describe
