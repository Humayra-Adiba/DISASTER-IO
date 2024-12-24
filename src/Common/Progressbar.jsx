import { Button, Progress } from '@nextui-org/react'
import React from 'react'

function Progressbar({ nexttxt, backpath, nextpath }) {

  return (
    <div className='flex justify-between items-center py-3 lg:gap-40 gap-9 lg:flex-row flex-col px-8' style={{backgroundColor: "rgba(228, 228, 231, 0.5)"}}>
      <div className='flex items-center gap-1'>
        <img src="/x-full.svg" alt="" className='p-3 rounded' style={{backgroundColor:"rgba(244, 244, 245, 1)"}}/>
        <div className='flex flex-col gap-2'>
            <p className='text-[12px] font-normal'>Home - Incidents - New Incident</p>
            <h1 className='text-[26px] font-bold'>New Incident</h1>
        </div>
      </div>
      <Progress aria-label='Progress' className='mx-5' size="sm" value={20} color='warning'/>
      <div className='flex flex-row gap-4'>
        <Button className='text-black px-14 border border-gray-600' onClick={backpath}>Back</Button>
        <Button className='px-10' style={{backgroundColor: "rgba(242, 105, 34, 1)", color:"white"}} onClick={nextpath}>{nexttxt}</Button>
      </div>
    </div>
  )
}

export default Progressbar
