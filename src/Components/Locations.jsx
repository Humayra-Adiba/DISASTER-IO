import React from "react";
import { Button } from "@nextui-org/react";

function Locations() {



  return (
    <div className='flex lg:flex-row flex-col justify-between px-16 py-10' style={{backgroundColor: 'rgba(228, 228, 231, 0.5)'}}>
      <div className='flex flex-col justify-between items-start'>
        <p className='text-[12px] font-normal '>Incidents - DR-4699 March 2023 Severe Storms </p>
        <div className="flex flex-row gap-3">
            <img src="/SevereStorm.svg" alt="" />
            <h2 className='text-[26px] font-bold'>DR-4699 March 2023 Severe Storms</h2>
        </div>
      </div>
      <div className='flex md:gap-2 gap-3 py-2 md:flex-row flex-col'>
        <div className='flex flex-row p-3 gap-2 rounded-md bg-white '>
            <img src="/search.svg" alt="" />
            <input type="text" placeholder='Search incident' className=' outline-none w-full'/>
        </div>
        <input type="text" placeholder='Sort by: Date modified' className='rounded-md p-3 outline-none'/>
        <Button color='warning' className="rounded-md px-5 hover:scale-105 md:py-3 py-3"  style={{height: "100%"}}>+ New Location</Button>
      </div>
    </div>
  );
}

export default Locations;
