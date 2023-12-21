import { Outlet } from "react-router-dom";
import MenuBar from "../Components/Navbar";
import Home from "../Pages/Home";
import Dashboard from "../Dashboard";

const MainLayout = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Outlet>
                <Home></Home>
                <Dashboard></Dashboard>
            </Outlet>
        </div>
    );
};

export default MainLayout;