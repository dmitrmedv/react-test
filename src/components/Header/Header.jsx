import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>List</Link>
        </li>
        <li>
          <Link>Help</Link>
        </li>
      </ul>
    </div>
  );
};
