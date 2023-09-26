
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="list">List</Link>
        </li>
        <li>
          <Link to="products">Products</Link>
        </li>
      </ul>
    </div>
  );
};
