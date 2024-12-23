import { Button } from '@nextui-org/react'
import React from 'react'

const cardinfo=[
    {
        img: "/Frame.svg", 
        title: "What type of incident?",
        description:"Choose the category that best describes the incident."
    },
    {
        img: "/Frame-1.svg", 
        title: "Tell us about the incident?",
        description:"Let’s connect the dots and see where to start."
    },
    {
        img: "/Frame-2.svg", 
        title: "Where did the incident occur?",
        description:"Lorem ipsum dolar sit general sac mascho werho"
    }
]



function GetStarted() {
  return (
    <div className='mt-16 '>
      <div className="flex flex-col justify-center items-center mt-3 gap-0 md:gap-3">
        <h1 className="text-[32px] font-bold text-black">Let’s get started</h1>
        <h3 className="text-[16px] text-graybold">
          Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br /> dolar
          sit general sac mascho werhoLorem ipsum dolar sit gene
        </h3>
      </div>

      <div className="flex justify-center items-center lg:w-[598px] md:w-[485px] sm:w-[355px] w-[250px] mx-auto mt-5">
        <div className="lg:w-7 w-5 lg:h-7 h-5 rounded-full" style={{backgroundColor: "rgba(228, 228, 231, 1)"}}></div>
        <hr className="w-[299px] h-[3px]" style={{backgroundColor: "rgba(228, 228, 231, 1)"}} />
        <div className="lg:w-7 w-5 lg:h-7 h-5 rounded-full" style={{backgroundColor: "rgba(228, 228, 231, 1)"}}></div>
        <hr className="  w-[299px] h-[3px]" style={{backgroundColor: "rgba(228, 228, 231, 1)"}} />
        <div className="lg:w-7 w-5 lg:h-7 h-5 rounded-full" style={{backgroundColor: "rgba(228, 228, 231, 1)"}}></div>
      </div>

        <div className='flex justify-center items-center gap-10 mx-80 mt-10'>
            {cardinfo.map(({img, title, description}) => (
                <div className='flex flex-col gap-16 p-5  rounded-xl flex-wrap' style={{backgroundColor: "rgba(244, 244, 245, 1)"}}>
                    <img src={img} className='w-[54px]'/>
                    <div className='flex flex-col gap-3'>
                    <h1 className='text-[20px] font-bold '>{title}</h1>
                    <p className='text-[14px]' style={{color:"rgba(113, 113, 122, 1)"}}>{description}</p>
                    </div>
                </div>
            ))}
        </div>
      <div className='text-center mt-10 mb-5'><Button className='py-5 px-8 text-white' style={{backgroundColor: "rgba(242, 105, 34, 1)"}}>Get Started</Button></div>
    </div>
  )
}

export default GetStarted
