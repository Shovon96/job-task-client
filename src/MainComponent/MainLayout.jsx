import { Outlet } from "react-router-dom";
import MenuBar from "../Components/Navbar";
import Home from "../Pages/Home";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Outlet>
                <Home></Home>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;