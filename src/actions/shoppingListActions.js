// src/actions/shoppingListActions.js
import axiosInstance from '../axiosInstance';
import axios from 'axios';
// Fetch items from the shopping list
export const fetchItems = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/shoppingList');
    const items = response.data.map(item => ({
      ...item,
      quantity: Number(item.quantity),  // Convert quantity to number
      price: Number(item.price) || 0,   // Convert price to number (use 0 if not valid)
    }));
    console.log('Fetched items:', items);  // Log the data to ensure conversion
    dispatch({ type: 'FETCH_ITEMS', payload: items });
  } catch (error) {
    // Error is already handled by the interceptor
    // Optionally, dispatch an action to update the state with the error
    // dispatch({ type: 'FETCH_ITEMS_ERROR', payload: error });
  }
};

// Add a new item to the shopping list
export const addItem = (item) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/shoppingList', item);
    dispatch({ type: 'ADD_ITEM', payload: response.data });
  } catch (error) {
    // Error is already handled by the interceptor
    // Optionally, dispatch an action to update the state with the error
    // dispatch({ type: 'ADD_ITEM_ERROR', payload: error });
  }
};

// Update an item in the shopping list
export const updateItem = (item) => async (dispatch) => {
  if (!item.id) {
    console.error("Item ID is missing! Cannot update item.");
    return;
  }

  try {
    const response = await axios.put(`http://localhost:5000/shoppingList/${item.id}`, item);
    dispatch({
      type: 'UPDATE_ITEM',
      payload: response.data,
    });
  } catch (error) {
    console.error("API Error:", error);
    // Dispatch error action if needed
  }
};

// Remove an item from the shopping list
export const removeItem = (id) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/shoppingList/${id}`);
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  } catch (error) {
    // Error is already handled by the interceptor
    // Optionally, dispatch an action to update the state with the error
    // dispatch({ type: 'REMOVE_ITEM_ERROR', payload: error });
  }
};
