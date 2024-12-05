import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default SharedLayout;
