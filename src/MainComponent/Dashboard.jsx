import { Outlet } from "react-router-dom";
import SideBar from "../DashBoard/SideBar";

const Dashboard = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <SideBar></SideBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;