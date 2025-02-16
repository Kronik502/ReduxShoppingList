import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/shoppingListActions';  // Import the action
import './AddItem.css';

const AddItem = () => {
  // State to manage form input fields
  const [item, setItem] = useState({
    name: '',
    quantity: '',
    description: '',
    price: '',
  });

  const dispatch = useDispatch();  // Redux dispatch to trigger actions

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent form from reloading the page

    // Additional validation for quantity and price to ensure positive values
    if (!item.name || !item.quantity || !item.description || !item.price) {
      alert('Please fill in all fields!');
      return;
    }

    if (isNaN(item.quantity) || item.quantity <= 0) {
      alert('Please enter a valid positive quantity.');
      return;
    }

    if (isNaN(item.price) || item.price <= 0) {
      alert('Please enter a valid positive price.');
      return;
    }

    // Dispatch the action to add the new item
    dispatch(addItem(item));

    // Clear the form after submission
    setItem({
      name: '',
      quantity: '',
      description: '',
      price: '',
    });
  };

  return (
    <div className="add-item-form">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleInputChange}
          placeholder="Item Name"
        />
        <input
          type="number"
          name="quantity"
          value={item.quantity}
          onChange={handleInputChange}
          placeholder="Quantity"
          min="1"
        />
        <input
          type="text"
          name="description"
          value={item.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="price"
          value={item.price}
          onChange={handleInputChange}
          placeholder="Price"
          min="0.01" 
          step="any"  // Allow decimal prices
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
