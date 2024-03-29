import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import './index.scss';

const Header = ({ numItems, total }) => {
  return (
    <header className='header'>
      <Link className='logo text-dark' to='/'>ReStore</Link>
      <Link className='shopping-cart' to='/cart/'>
        <div className='cart-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        </div>
        { numItems } items (${ total })
      </Link>
    </header>
  )
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {

  return {
    numItems: cartItems.length,
    total: cartItems.length ? cartItems.reduce((acc, item) => acc + item.total, 0) : orderTotal
  }
};

export default connect(mapStateToProps)(Header);
