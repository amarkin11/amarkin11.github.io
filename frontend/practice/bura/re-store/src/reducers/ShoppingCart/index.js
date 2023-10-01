const updateCartItems = (cartItems, item, i) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, i),
    ...cartItems.slice(i + 1)
    ]
  }

  if (i === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, i),
    item,
    ...cartItems.slice(i + 1)
  ];
};

const updateCartItem = (book, item = {}, quantity) => {

  const {
    id = book.id,
    count = 0,
    title = book.title,
    total = 0
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*book.price
  };
};

const updateOrder = (state, bookId, quantity) => {
  const { bookList: { books }, shoppingCart: { cartItems } } = state;
  const book = books.find(({id}) => id === bookId),
        itemIndex = cartItems.findIndex(({id}) => id === bookId),
        item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);

  return {
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
    orderTotal: 0
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    };
  }

  switch(action.type) {
    case 'BOOKS_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);
    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);
    case 'ALL_BOOKS_REMOVED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    default:
      return state.shoppingCart;
  };
};

export default updateShoppingCart;
