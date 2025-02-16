import React from 'react';
import {Outlet} from 'react-router-dom';
import MainHeader from "../components/MainHeader.jsx";
import MainFooter from "../components/Footer/MainFooter.jsx";

function MainLayout() {
  return (
    <>
      <MainHeader/>
      <Outlet/>
      <MainFooter/>
    </>
  );
}

export default MainLayout;
