import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navList}>
          <li className={css.item}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="search">Search</NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="info">Info</NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="counter">Counter</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
