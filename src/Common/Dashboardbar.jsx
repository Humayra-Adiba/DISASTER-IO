import { Button } from '@nextui-org/react'
import React from 'react'

function Dashboardbar({ firsttxt, secondtxt, btntxt }) {
  return (
    <div className='flex justify-between px-4 py-3' style={{backgroundColor: 'rgba(228, 228, 231, 0.5)'}}>
      <div className='flex flex-col justify-between items-start'>
        <p className='text-[12px] font-normal '>{firsttxt}</p>
        <h2 className='text-[26px] font-bold'>{secondtxt}</h2>
      </div>
      <div className='flex gap-2'>
        <div className='flex flex-col '>
            <img src="/search.svg" alt="" />
            <input type="text" placeholder='Search incident' />
        </div>
        <input type="text" placeholder='Sort by: Date modified' />
        <Button variant='danger' className="rounded-md">{btntxt}</Button>
      </div>
    </div>
  )
}

export default Dashboardbar
