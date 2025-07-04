import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div className="bg-accent">
     <div className="sticky top-0 z-10">
       <Navbar></Navbar>
     </div>
      <div className=" max-w-[1600px] mx-auto min-h-[calc(100vh-412px)]">
        {isNavigating && (
          <div>
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        )}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
