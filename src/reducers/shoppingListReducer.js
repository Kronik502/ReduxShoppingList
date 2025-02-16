// src/reducers/shoppingListReducer.js
const initialState = {
  items: [],
  error: null,
};

const shoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS':
      return { ...state, items: action.payload };
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    // Optionally handle error actions
    // case 'FETCH_ITEMS_ERROR':
    //   return { ...state, error: action.payload };
    // case 'ADD_ITEM_ERROR':
    //   return { ...state, error: action.payload };
    // case 'UPDATE_ITEM_ERROR':
    //   return { ...state, error: action.payload };
    // case 'REMOVE_ITEM_ERROR':
    //   return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default shoppingListReducer;
