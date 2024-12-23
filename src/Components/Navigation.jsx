
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export const DisasterLogo = () => {
  return (
    <>
      <img src="/disasterio.svg" alt="" />
    </>
  );
};

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("Dashboard");

  const menuItems = [
    "Dashboard",
    "Incidents",
    "Customers",
    "Locations",
    "Activities",
    "Documents",
    "Cypher AI",
  ];

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
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
      className="border-b-3" style={{backgroundColor: 'rgba(228, 228, 231, 0.5)'}}
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
        {menuItems.map((item) => (
          <NavbarItem
            key={item}
            isActive={activeItem === item}
            
          >
            <Link
              aria-current={activeItem === item ? "page" : undefined}
              color={activeItem === item ? "primary" : "foreground"}
              onClick={() => handleItemClick(item)}
              href="#"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="flex flex-row gap-6">
          <img src="notification.svg" alt="" />
          <img src="manicon.svg" alt="" />
          <div>
            <span className="text-[16px] text-[#A1A1AA]">Usman Zafar</span>
            <br />
            <p className="text-[14px] text-[#A1A1AA]">usmanzafar@gmail.com</p>
          </div>
        </div>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                activeItem === item ? "primary" : "foreground"
              }
              href="#"
              size="lg"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}