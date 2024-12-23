import React from 'react'
import Dashboardbar from '../Common/Dashboardbar'

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

    </>
  )
}

export default Dashboard
