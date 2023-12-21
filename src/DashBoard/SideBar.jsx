import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="flex justify-center gap-6 py-4 shadow-md">
            <NavLink to="/">Home</NavLink>
            <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-600 font-bold" : "text-black"
            }
          >
            Dashboard
          </NavLink>
        </div>
    );
};

export default SideBar;