import './index.scss';

const BookListItem = ({ book, onAddedToCart }) => {

  const { title, author, price, coverImage } = book;

  return (
    <div className='book-list-item'>
      <div className='book-cover'>
        <img src={ coverImage } alt='' />
      </div>
      <div className='book-details'>
        <h3 className='book-title'>{ title }</h3>
        <div className='book-author'>{ author }</div>
        <div className='book-price'>${ price }</div>
        <button
          className='btn btn-info add-to-cart'
          onClick={ onAddedToCart }
        >Add to cart</button>
      </div>
    </div>
  )
};

export default BookListItem;
