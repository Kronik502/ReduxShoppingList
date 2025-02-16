import { createSlice } from '@reduxjs/toolkit';

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: [],
  reducers: {
    fetchItems: (state, action) => {
      // Replace the state with the fetched items
      return action.payload;
    },
    addItem: (state, action) => {
      // Add the new item to the state
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      // Remove the item by filtering out the one with the matching id
      return state.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      // Find the item and update it, if it exists
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { fetchItems, addItem, removeItem, updateItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
