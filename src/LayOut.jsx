import { Header } from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
  return <>
  <Header/>
  <Outlet />
  <div>FOTTER</div>
  </>;
  
};

export default LayOut;

