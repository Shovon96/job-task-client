import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { AiOutlineBars } from "react-icons/ai";
import toast from "react-hot-toast";

const SideBar = () => {
  const [isActive, setActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
        toast.success("Logged out successfully");
      })
      .catch((err) => toast.error(err));
  };
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="max-h-screen">
      <div className="bg-orange-100 h-20 text-gray-800 flex justify-between lg:hidden w-full">
        <div>
          <div className="block !w-32 cursor-pointer p-4 font-bold">
            <img src="https://media.discordapp.net/attachments/1177886803424976896/1187250535628288070/logo.png?ex=65963439&is=6583bf39&hm=8b8deb55d58d4524e9a61c4225be0c0b9175c881ffdcf746d0793633b89a79a0&=&format=webp&quality=lossless" alt="" />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className={`${
            !isActive ? "text-orange-500" : "text-Black"
          } p-4 focus:outline-none hover:text-orange-500 font-bold`}
        >
          <AiOutlineBars className="h-5 w-5 md:h-7 md:w-7" />
        </button>
      </div>
      <div
        className={`z-10  inset-y-0 fixed  left-0 overflow-x-hidden flex flex-col justify-between bg-orange-100 w-[320px] h-full transform ${
          isActive && "-translate-x-full"
        }  lg:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div className="flex flex-col  items-center pt-10  ">
          <div className="w-1/2 hidden lg:block">
            <img src="https://media.discordapp.net/attachments/1177886803424976896/1187250535628288070/logo.png?ex=65963439&is=6583bf39&hm=8b8deb55d58d4524e9a61c4225be0c0b9175c881ffdcf746d0793633b89a79a0&=&format=webp&quality=lossless" alt="" />
          </div>
          <NavLink
            className={`py-2 text-center mt-2 w-[80%] rounded-lg hover:text-orange-500  bg-orange-200 ${
              location.pathname === "/dashboard" && "text-orange-500"
            }`}
            to={"/dashboard"}
          >
            Dashboard
          </NavLink>
          <NavLink
            className={`py-2 text-center mt-2 w-[80%] rounded-lg hover:text-orange-500  bg-orange-200 ${
              location.pathname === "/dashboard/profile" && "text-orange-500"
            }`}
            to={"/dashboard/profile"}
          >
            Profile
          </NavLink>
        </div>
        <div className="flex flex-col  items-center pt-10 mb-10">
          <NavLink
            className={`py-2 text-center mt-2 w-[80%] rounded-lg hover:text-orange-500  bg-orange-200 ${
              location.pathname === "/" && "text-orange-500"
            }`}
            to={"/"}
          >
            Back to Home
          </NavLink>
          <button
            onClick={handleLogout}
            className={
              "py-2 text-center mt-2 w-[80%] rounded-lg hover:text-orange-500  bg-orange-200 "
            }
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;