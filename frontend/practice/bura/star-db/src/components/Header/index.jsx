import { NavLink, Link } from 'react-router-dom';

import './index.css';

const Header = () => {

  return (
    <div className='header d-flex'>
      <h3>
        <Link to='/'>Star DB</Link>
      </h3>
      <ul className='d-flex'>
        <li>
          <NavLink to='/people/'>People</NavLink>
        </li>
        <li>
          <NavLink to='/planets/'>Planets</NavLink>
        </li>
        <li>
          <NavLink to='/starships/'>Starships</NavLink>
        </li>
      </ul>
    </div>
  )
};

export default Header;
