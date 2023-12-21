import React from "react";
import { Navbar, NavbarBrand, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";


const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    // "Activity",
    // "Analytics",
    // "System",
    // "Deployments",
    // "My Settings",
    // "Team Settings",
    // "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className='bg-white shadow-lg'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img className='h-14 w-72' src="https://media.discordapp.net/attachments/1177886803424976896/1187250535628288070/logo.png?ex=65963439&is=6583bf39&hm=8b8deb55d58d4524e9a61c4225be0c0b9175c881ffdcf746d0793633b89a79a0&=&format=webp&quality=lossless" alt="" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-600 font-bold" : "text-black"
            }
          >
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
        <NavLink
            to="/customer"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-600 font-bold" : "text-black"
            }
          >
            Customer
          </NavLink>
        </NavbarItem>
        <NavbarItem>
        <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-600 font-bold" : "text-black"
            }
          >
            Dashboard
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem> */}
        <NavbarItem>
          {/* <Button as={Link} color="primary" href="#" variant="flat">
            Sign In
          </Button> */}
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "bg-blue-600 text-white font-bold px-6 py-2 rounded-lg" : "bg-blue-400 text-white font-bold px-6 py-2 rounded-lg"
            }
          >
            Sign In
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default MenuBar;