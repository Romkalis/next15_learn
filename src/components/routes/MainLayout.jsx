import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from "../MainHeader.jsx";

function MainLayout() {
  return (
    <>
    <MainHeader />
    <Outlet />
    </>
  );
}

export default MainLayout;
