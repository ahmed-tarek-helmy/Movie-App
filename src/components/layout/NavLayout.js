import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/header";
import Footer from "../common/footer";

const NavLayout =()=>{
return(
    <>
    <Header />
      <div className="my-5 container">
        <Outlet />
      </div>
    <Footer/>
    </>
)

}
export default NavLayout;