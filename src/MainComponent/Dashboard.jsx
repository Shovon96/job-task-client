import { Outlet } from "react-router-dom";
import SideBar from "../DashBoard/SideBar";

const Dashboard = () => {
    return (
        <div>
            <SideBar></SideBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;