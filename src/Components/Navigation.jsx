
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Outlet, NavLink } from "react-router-dom";

export const DisasterLogo = () => {
  return (
    <>
      <img src="/disasterio.svg" alt="" />
    </>
  );
};

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  const menuItems = [
    {link: '/', txt: "Dashboard"},
    {link: '/Incidents', txt: "Incidents"},
    {link: "/Locations", txt:"Locations"},
    {link: "/Activities", txt:"Activities"},
    {link: "/Documents", txt:"Documents"},
    {link: "/Cypher AI", txt:"Cypher AI"},
  ];

  

  return (
    <>
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      className="border-b-3 py-0" style={{backgroundColor: 'rgba(228, 228, 231, 0.5)'}}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <DisasterLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, i) => (
          <NavbarItem
            key={i}
            
            
          >
            <NavLink
              to={item.link}
            >
              {item.txt}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="flex flex-row lg:gap-6 md:gap-4 gap-1">
          <img src="notification.svg" alt="" />
          <img src="manicon.svg" alt="" />
          <div className="lg:block hidden">
            <span className="text-[16px] text-[#A1A1AA]">Usman Zafar</span>
            <br />
            <p className="text-[14px] text-[#A1A1AA]">usmanzafar@gmail.com</p>
          </div>
        </div>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}
              
              to={item.link
              }
              size="lg"
            >  
              {item.txt}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    <Outlet/>
    </>
    
  );
}