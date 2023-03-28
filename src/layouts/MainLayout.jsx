// static parent component for react-router using for big dip routers with childrens:
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="wrapper">
          <Header />
          <div className="content">
            <Outlet/>
          </div>
        </div >
    )

};

export default MainLayout;