import React from 'react'

function ActivityCard({type}) {
  return (
    <div className='py-[15px] px-[10px] bg-[#F4F4F5] rounded-[10px] flex justify-start gap-4'>
      <img src="/smbuilding.svg" className='rounded-[10px] h-[78px] w-[78px]' alt=""/>
      <div className='flex flex-col gap-2 justify-start'>
        <p className='text-[16px] font-bold'>{type} name</p>
        <p className='text-[14px] text-[#A1A1AA]'>Location name ∙ 16.12212, -122.1424</p>
        <p className='text-[16px] font-bold'>$1,456,654.00</p>
      </div>
    </div>
  )
}

export default ActivityCard
