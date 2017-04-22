export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      state.push(action.book);
    default:
      return state;
  }
};
