import { Button } from '@nextui-org/react'
import React from 'react'
import {useNavigate} from 'react-router-dom'



function Dashboardbar({ firsttxt, secondtxt, btntxt }) {
  const navigate = useNavigate()
  const handleClick = () => {
    btntxt === "+ New Incident" ? navigate("/Incidents/GetStarted") : navigate("/")
  }
  return (
    <div className='flex lg:flex-row flex-col justify-between px-16 py-10' style={{backgroundColor: 'rgba(228, 228, 231, 0.5)'}}>
      <div className='flex flex-col justify-between items-start'>
        <p className='text-[12px] font-normal '>{firsttxt}</p>
        <h2 className='text-[26px] font-bold'>{secondtxt}</h2>
      </div>
      <div className='flex gap-2 py-2 md:flex-row flex-col'>
        <div className='flex flex-row p-3 gap-2 rounded-md bg-white '>
            <img src="/search.svg" alt="" />
            <input type="text" placeholder='Search incident' className='border-none outline-none w-full'/>
        </div>
        <input type="text" placeholder='Sort by: Date modified' className='rounded-md p-3 border-none outline-none'/>
        <Button color='warning' className="rounded-md px-5 hover:scale-105 md:py-3 py-3" onClick={handleClick} style={{height: "100%"}}>{btntxt}</Button>
      </div>
    </div>
  )
}

export default Dashboardbar
