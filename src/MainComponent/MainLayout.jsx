import { Outlet } from "react-router-dom";
import MenuBar from "../Components/Navbar";
import Home from "../Pages/Home";

const MainLayout = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Outlet>
                <Home></Home>
            </Outlet>
        </div>
    );
};

export default MainLayout;