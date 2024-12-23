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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime a tenetur molestias minima eligendi?</p>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default Chatbox;
