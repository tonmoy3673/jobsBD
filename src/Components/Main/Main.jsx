import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/Navbar";


const Main = () => {
    return (
     
        <div className="px-8 md:px-20 py-4 md:py-8">
        <NavBar/>
        <Outlet/>
        <Footer/>
        </div>
        
    );
};

export default Main;