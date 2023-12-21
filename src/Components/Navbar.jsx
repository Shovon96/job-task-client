import React, { useContext } from "react";
import { Navbar, NavbarBrand, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((err) => toast.error(err));
  };

  const menuItems = [
    "Profile",
    "Dashboard",
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
        <NavbarItem>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-blue-600 text-white font-bold px-6 py-2 rounded-lg"
            >
              Log Out
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="bg-blue-600 text-white font-bold px-6 py-2 rounded-lg">
                Log in
              </button>
            </Link>
          )}
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