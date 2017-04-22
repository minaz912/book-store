export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      state.push(action.book);
      /* falls through */
    default:
      return state;
  }
};