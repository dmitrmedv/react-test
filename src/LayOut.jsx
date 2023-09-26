import React from 'react';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
  return <>
  <div>HEADER</div>
  <Outlet />
  <div>FOTTER</div>
  </>;
  
};

export default LayOut;

