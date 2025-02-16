// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';  // Import Redux hooks
import { fetchItems } from './actions/shoppingListActions';  // Import action creator
import ItemList from '../src/components/ItemList';  // Import ItemList component
import AddItem from '../src/components/AddItem';  // Import AddItem component
import './App.css';  // Add your styling

const App = () => {
  const dispatch = useDispatch();  // Initialize dispatch function
  const items = useSelector((state) => state);  // Get shopping list from Redux store

  // Fetch items from the server when the app first loads
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Shopping List</h1>
      
      {/* AddItem Component - For adding new items */}
      <AddItem />

      {/* ItemList Component - For displaying the list of items */}
      <ItemList />

      {/* If there are no items, display a message */}
      {items.length === 0 && (
        <p>No items in the shopping list!</p>
      )}
    </div>
  );
}

export default App;
