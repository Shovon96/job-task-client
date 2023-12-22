import { Outlet } from "react-router-dom";
import SideBar from "../DashBoard/SideBar";

const DashboardLayout = () => {
  return (
    <div className="relative lg:flex max-h-screen ">
      <SideBar />
      <div className="flex-1 lg:ml-[320px]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;