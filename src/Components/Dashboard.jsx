import React from 'react'
import Dashboardbar from '../Common/Dashboardbar'
import Chatbox from './Chatbox'

const info = [
    {
        img:"disaster.svg",
        title:"Whitechapel Rd.",
        location:"Tulare County,  Los Angles, CA 23415",
        amount:"$1,456,654.00"
    },
    {
        img:"fighter.svg",
        title:"Whitechapel Rd.",
        location:"Tulare County,  Los Angles, CA 23415",
        amount:"$1,456,654.00"
    },
    {
        img:"plain.svg",
        title:"Tulare County",
        location:"Tulare County,  Los Angles, CA 23415",
        amount:"$1,456,654.00"
    },
    {
        img:"firefighter.svg",
        title:"Tulare County",
        location:"Tulare County,  Los Angles, CA 23415",
        amount:"$1,456,654.00"
    },
    {
        img:"fire.svg",
        title:"Tulare County",
        location:"Tulare County,  Los Angles, CA 23415",
        amount:"$1,456,654.00"
    },
    {
        img:"brokenbuilding.svg",
        title:"Tulare County",
        location:"Tulare County,  Los Angles, CA 23415",
        amount:"$1,456,654.00"
    },
]
function Dashboard() {
  return (
    <>
      <Dashboardbar firsttxt={"Welcome back"} secondtxt={"Dashboard"} btntxt={"Cypher AI"}/>
      <div className="flex flex-wrap gap-7 px-5 py-7">
      {info.map((item, index)=>(
        <div key={index} className='flex flex-col justify-between items-start gap-1 bg-whiteLight text-graybold rounded-[10px] shadow-sm shadow-slate-300 hover:shadow-lg hover:scale-105 transition-transform duration-300'>
            <img src={item.img} alt="" />
            <h1 className="text-[16px] text-black font-bold ml-2">{item.title}</h1>
            <p className="text-[14px] leading-5 ml-2">{item.location}</p>
            <h3 className="text-[16px] text-black font-bold ml-2">{item.amount}</h3>
        </div>

      ))}
      </div>
      <Chatbox/>
    </>
  )
}

export default Dashboard
