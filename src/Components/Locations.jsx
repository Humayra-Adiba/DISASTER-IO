import React from "react";
import { Button } from "@nextui-org/react";
import ActivityCard from "../Common/ActivityCard";
import {useNavigate} from 'react-router-dom'
function Locationsbar() {
  const navigate = useNavigate()
  function handleClick(){
    navigate("/Incidents")
  }
  return (
    <div
      className="flex lg:flex-row flex-col justify-between px-16 py-10"
      style={{ backgroundColor: "rgba(228, 228, 231, 0.5)" }}
    >
      <div className="flex flex-col justify-between items-start">
        <p className="text-[12px] font-normal ">
          Incidents - DR-4699 March 2023 Severe Storms{" "}
        </p>
        <div className="flex flex-row gap-3">
          <img src="/SevereStorm.svg" alt="" />
          <h2 className="text-[26px] font-bold">
            DR-4699 March 2023 Severe Storms
          </h2>
        </div>
      </div>
      <div className="flex md:gap-2 gap-3 py-2 md:flex-row flex-col">
        <div className="flex flex-row p-3 gap-2 rounded-md bg-white ">
          <img src="/search.svg" alt="" />
          <input
            type="text"
            placeholder="Search incident"
            className=" outline-none w-full"
          />
        </div>
        <input
          type="text"
          placeholder="Sort by: Date modified"
          className="rounded-md p-3 outline-none"
        />
        <Button
          color="warning"
          className="rounded-md px-5 hover:scale-105 md:py-3 py-3"
          style={{ height: "100%" }}
          onClick={handleClick}
        >
          + New Location
        </Button>
      </div>
    </div>
  );
}

function LocationCard({img}) {
  return (
    <div className="flex flex-col justify-between items-start gap-1 bg-whiteLight text-graybold rounded-[10px] shadow-sm shadow-slate-300 hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
      <img src={img} alt="" className="w-full" />
      <h1 className="text-[16px] text-black font-bold ml-2">Whitechapel Rd.</h1>
      <p className="text-[14px] leading-5 ml-2">Tulare County,  Los Angles, CA 23415</p>
      <h3 className="text-[16px] text-black font-bold ml-2">$1,456,654.00</h3>
    </div>
  );
}

function Locations() {
  return (
    <>
      <Locationsbar />
      <div className="flex md:flex-row flex-col md:gap-14 gap-4 md:justify-around mx-8 mt-6">
        <div className="md:w-1/2">
          <div className="flex flex-col gap-4 md:gap-6 ">
            <div className="flex flex-row justify-start items-center gap-2">
              <img src="/locationicon.svg" alt="" />
              <div>
                <p
                  className="text-[14px]"
                  style={{ color: "rgba(107, 114, 128, 1)" }}
                >
                  Location
                </p>
                <h1 className="text-[20px] font-bold">
                  Tulare County, Los Angles, CA 23415
                </h1>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center gap-2">
              <img src="/cameraicon.svg" alt="" />
              <div>
                <p
                  className="text-[14px]"
                  style={{ color: "rgba(107, 114, 128, 1)" }}
                >
                  Approx. Cost:
                </p>
                <h1 className="text-[20px] font-bold">$60,607,456.00</h1>
              </div>
            </div>
          </div>
          <hr
            className="w-full h-[2px] my-8"
            style={{ color: "rgba(228, 228, 231, 1)" }}
          />
          <div className="md:ms-0 ms-5">
            <h1 className="font-bold text-[14px] leading-6 ">Description</h1>
            <p
              className="text-[16px] leading-6"
              style={{ color: "rgba(113, 113, 122, 1)" }}
            >
              Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
              sit general sac mascho werhoLorem ipsum dolar sit general sac
              mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem
              ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
              general sac mascho werho
            </p>
          </div>
          <hr
            className="w-full h-[2px] my-8"
            style={{ color: "rgba(228, 228, 231, 1)" }}
          />
          <div className="flex justify-between mb-2"><p className="text-[14px] font-bold">Locations</p><p className="text-[#A1A1AA] underline cursor-pointer">See all</p></div>
          <div className="flex flex-wrap gap-6">
            <LocationCard img='/building.svg'/>
            <LocationCard img='/buidling2.svg'/>
            <LocationCard img='/building.svg'/>
            <LocationCard img='/building.svg'/>
          </div>
          <hr
            className="w-full h-[2px] my-8"
            style={{ color: "rgba(228, 228, 231, 1)" }}
          />
          <div className="flex justify-between mb-2"><p className="text-[14px] font-bold">Activities</p><p className="text-[#0A0A0A] text-[14px] underline cursor-pointer">See all</p></div>
          <div className="flex flex-col md:gap-4 gap-2">
          <ActivityCard type="Activity"/>
          <ActivityCard type="Activity"/>
          </div>
          <hr
            className="w-full h-[2px] my-8"
            style={{ color: "rgba(228, 228, 231, 1)" }}
          />
          <div className="flex justify-between mb-2"><p className="text-[14px] font-bold">Documents</p><p className="text-[#0A0A0A] text-[14px] underline cursor-pointer">See all</p></div>
          <div className="flex flex-col md:gap-4 gap-2">
          <ActivityCard type="Document"/>
          <ActivityCard type="Document"/>
          </div>

        </div>
        <div className="md:w-1/2">
          <img src="/Incident-Map.svg" className="w-full" alt="" />
        </div>
      </div>
    </>
  );
}

export default Locations;
