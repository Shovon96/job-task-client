import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
        </div>
    );
};

export default SideBar;