import { connect } from 'react-redux';

import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
} from '../../actions';

import './index.scss';

const Cart = ({ items, total, onIncrease, onDecrease, onDelete }) => {

  const renderRow = (item, i) => {
    const { id, title, count, total } = item;
    return (
      <tr key={ id }>
        <td>{ i + 1 }</td>
        <td>{ title }</td>
        <td>{ count }</td>
        <td>${ total }</td>
        <td>
          <button
            className='btn btn-outline-warning'
            onClick={ () => onDecrease(id) }
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
            </svg>
          </button>
          <button
            className='btn btn-outline-success'
            onClick={ () => onIncrease(id) }
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
          </button>
          <button
            className='btn btn-outline-danger'
            onClick={ () => onDelete(id) }>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
            </svg>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className='cart'>
      <h2>Your Order</h2>
      <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Count</th>
              <th>Total price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { items.map(renderRow) }
          </tbody>
      </table>

      <div className='total'>
        Total: ${ total }
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: cartItems.length ? cartItems.reduce((acc, item) => acc + item.total, 0) : orderTotal
  };
};

const mapDispathToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispathToProps)(Cart);
