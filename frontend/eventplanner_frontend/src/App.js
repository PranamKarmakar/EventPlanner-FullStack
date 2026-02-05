
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AdminHome from "./COMPONENT/ADMIN/AdminHome";
 import AdminLog from "./COMPONENT/ADMIN/AdminLog";
 import AdminServiceCurd from "./COMPONENT/ADMIN/AdminServiceCurd";

import Home from "./COMPONENT/Home";
import Navbar from "./COMPONENT/HOME/NAVBAR/Navbar";
// import UserCreateAccount from "./COMPONENT/USER/UserCreateAccount";
 import UserLog from "./COMPONENT/USER/UserLog";
// import VendorCreateAccount from "./COMPONENT/VENDOR/VendorCreateAccount";
import VendorLog from "./COMPONENT/VENDOR/VendorLog";
import About from "./COMPONENT/HOME/About";
import Footer from "./COMPONENT/HOME/Footer";
import Services from "./COMPONENT/HOME/Services";
import Contact from "./COMPONENT/HOME/Contact";
import UserCreateAccount from "./COMPONENT/USER/UserCreateAccount";
import UserHome from "./COMPONENT/USER/UserHome";
import AdminHome from "./COMPONENT/ADMIN/AdminHome";
import VendorCreateAccount from "./COMPONENT/VENDOR/vendorCreateApplication";
import VendorDetail from "./COMPONENT/VENDOR/VendorDetail";
import AdminUserCurd from "./COMPONENT/ADMIN/AdminUserCurd";
import AdminVendorCurd from "./COMPONENT/ADMIN/AdminVendorCurd";
import Carousel from "./COMPONENT/HOME/CAROUSEL/Carousel";
import UserCreate from "./COMPONENT/ADMIN/CURD/UserCreate";
import UserUpdate from "./COMPONENT/ADMIN/CURD/UserUpdate";
import Userdelete from "./COMPONENT/ADMIN/CURD/Userdelete";
import VendorUpdate from "./COMPONENT/ADMIN/CURD/VendorUpdate";
import VendorCreate from "./COMPONENT/ADMIN/CURD/VendorCreate";
import Vendordelete from "./COMPONENT/ADMIN/CURD/Vendordelete";
import ServiceUpdate from "./COMPONENT/ADMIN/CURD/ServiceUpdate";
import ServiceCreate from "./COMPONENT/ADMIN/CURD/ServiceCreate";
import Servicedelete from "./COMPONENT/ADMIN/CURD/Servicedelete";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/*INSIDE HOME : FOLDER*/}
        <Route path="/" element={<Home />} /> {/*HOME */}
        <Route path="/Navbar" element={<Navbar />} />    {/* NAVBAR */}
        <Route path="/Footer" element={<Footer />} />   {/* FOOTER */}
        <Route path="/About" element={<About />} />    {/* ABOUT */}
        <Route path="/Services" element={<Services />} />    {/* ABOUT */}
        <Route path="/Contact" element={<Contact />} />    {/* ABOUT */}
        {/*INSIDE USER : FOLDER */}
        <Route path="/UserLog" element={<UserLog />} />    {/* USER LOGIN */}
        <Route path="/UserCreateAccount" element={<UserCreateAccount/>}/>    {/*USER CREATE ACCOUNT */}
        <Route path="/VendorLog" element={<VendorLog/>}/> 
        <Route path="/UserHome" element={<UserHome />} />    {/* USER LOGIN */}

        <Route path="/AdminLog" element={<AdminLog/>}/>   {/* FOOTER*/}
        <Route path="/AdminHome" element={<AdminHome />} /> 
        <Route path="/vendorCreateAccount" element={<VendorCreateAccount />} /> 
        <Route path="/VendorDetail" element={<VendorDetail />} /> 
        <Route path="/AdminServiceCurd" element={<AdminServiceCurd />} />
        
        <Route path="/AdminUserCurd" element={<AdminUserCurd/>}/>   {/* FOOTER*/}
        <Route path="/AdminVendorCurd" element={<AdminVendorCurd />} /> 
        <Route path="/Carousel" element={<Carousel />} /> 
         <Route path="/UserCreate" element={<UserCreate/>}/>
         <Route path="/UserUpdate" element = {<UserUpdate/>}/>
         <Route path="/Userdelete" element = {<Userdelete/ >}/>
         <Route path="/VendorUpdate" element={<VendorUpdate/>} />
         <Route path="/VendorCreate" element={<VendorCreate/>}/>
         <Route path="/Vendordelete" element={<Vendordelete/>}/>
         <Route path="/ServiceUpdate" element={<ServiceUpdate/>}/>
         <Route path="/ServiceCreate" element={<ServiceCreate/>}/>
         <Route path="/Servicedelete" element={<Servicedelete/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
