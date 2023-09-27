import css from './Header.module.css'
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" className={`${css.link}`}>Home</NavLink>
        </li>
        <li>
          <NavLink to="list" className={`${css.link}`}>List</NavLink>
        </li>
        <li>
          <NavLink to="products" className={`${css.link}`}>Products</NavLink>
        </li>
      </ul>
    </div>
  );
};
