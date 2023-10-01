import { BookstoreConsumer } from '../../components/BookstoreContext';

const withBookstore = () => (Wrapped) => {

  return (props) => {

    return (
      <BookstoreConsumer>
        {
          (bookstoreService) => {
            // const serviceProps = mapMethodsToProps(bookStoreService);

            return (
              <Wrapped {...props} bookstoreService={ bookstoreService } />
            )
          }
        }
      </BookstoreConsumer>
    )
  }
};

export default withBookstore;
