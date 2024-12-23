import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

function Chatbox() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="text-end">
      <div className="inline">
        <Popover
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
          
        >
          <PopoverTrigger className="mb-8 mr-5">
            <Button className="p-4 rounded-full py-10" color="warning">
              {isOpen ? <img src="x.svg" /> : <img src="C.svg" />}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
          <div className="bg-whiteLight h-[475px] w-[331px]  text-graybold rounded-[7px] ">
              <div>
                <div className=" rounded-t-[12px] h-[63px] text-[18px] text-white font-bold " style={{backgroundColor:"rgba(242, 105, 34, 1)"}}>
                  <h2 className="p-4">Chat with Cypher</h2>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="bg-[#3F3F46] rounded-[7px] w-[213px] h-[57px] text-white text-[12px] flex justify-start items-center px-3 m-2 mt-6">
                  <p>Lorem ipsum dolar sit general sac mascho werho</p>
                </div>
              </div>

              <div>
                <div className="border border-gray-300 rounded-[7px] w-[213px] h-[57px] text-graybold text-[12px] flex justify-start items-center px-3 m-2 mt-3">
                  <p>Lorem ipsum dolar sit general sac mascho werho</p>
                </div>
              </div>

              <div>
                <div className="border border-gray-300 rounded-[7px] w-[213px] h-[57px] text-graybold text-[12px] flex justify-start items-center px-3 m-2 mt-3">
                  <p>Lorem ipsum dolar sit general sac mascho werho</p>
                </div>
              </div>

              <div>
                <div className="bg-[#3F3F46] rounded-[7px] w-[213px] h-[57px] text-white text-[12px] flex justify-start items-center px-3 m-2 mt-3">
                  <p>Lorem ipsum dolar sit general sac mascho werho</p>
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Enter your questions..."
                  className="border border-gray-300 rounded-[6px] w-[301px] h-[42px] text-graybold text-[12px] flex justify-start items-center px-3 m-2 mt-3 bg-gray-200"
                />
              </div>

              <div className="flex justify-between mx-2 m-2 mt-5">
                <div className="flex text-graybold justify-start size-[24px] gap-2">
                  <img src="/camera.svg" alt="" />
                  <img src="/gallary.svg" alt="" />
                  <img src="/edit.svg" alt="" />
                </div>
                <div>
                  <Button className="rounded-[15.5px] gap-10 h-[30px] w-[80px] mr-4 "  style={{backgroundColor:"rgba(242, 105, 34, 1)"}}>
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default Chatbox;
