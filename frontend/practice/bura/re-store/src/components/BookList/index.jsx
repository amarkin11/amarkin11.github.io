import React, { Component } from 'react';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { compose } from '../../utils';

import { fetchBooks, bookAddedToCart } from '../../actions';

import withBookstore from '../../hoc/WithBookstore';
import BookListItem from '../BookListItem';
import Spinner from '../Spinner';

import './index.scss';
import ErrorIndicator from '../ErrorIndicator';

class BookListContainer extends Component {

  componentDidMount() {
    // const {
    //   bookstoreService,
    //   booksLoaded,
    //   booksRequested,
    //   booksError
    // } = this.props;

    // booksRequested();
    // bookstoreService
    //   .getBooks()
    //   .then((data) => booksLoaded(data))
    //   .catch((err) => booksError(err));
    this.props.fetchBooks();
  };

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) return <Spinner />

    if (error) return <ErrorIndicator />

    return <BookList books={ books } onAddedToCart={ onAddedToCart }/>
  }
};

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className='book-list'>
      {
        books.map((book) => {
          return (
            <li key={ book.id }>
              <BookListItem
                book={ book }
                onAddedToCart={ () => onAddedToCart(book.id) }
              />
            </li>
          )
        })
      }
    </ul>
  )
};

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

// const mapDispatchToProps = {
//   booksLoaded,
//   booksRequested,
//   booksError
// };

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  };
};

export default compose(
  withBookstore(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
