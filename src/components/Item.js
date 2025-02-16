import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateItem, removeItem } from '../actions/shoppingListActions';
import './Item.css';

const Item = ({ item }) => {
  const dispatch = useDispatch();

  // Initialize state
  const [updatedItem, setUpdatedItem] = useState({
    id: item.id || "",
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    description: item.description || "",
  });

  const [isEditing, setIsEditing] = useState(false); // Manage edit mode

  useEffect(() => {
    setUpdatedItem({
      id: item.id || "",
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      description: item.description || "",
    });
  }, [item]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (!updatedItem.id) {
      console.error("Error: Item ID is undefined.");
      return;
    }
    dispatch(updateItem(updatedItem));
    setIsEditing(false); // Exit edit mode after saving
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));  // Dispatch remove action
  };

  return (
    <div className="item">
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={updatedItem.name}
            onChange={handleInputChange}
            placeholder="Item Name"
          />
          <input
            type="number"
            name="quantity"
            value={updatedItem.quantity}
            onChange={handleInputChange}
            placeholder="Quantity"
            min="1"
          />
          <input
            type="number"
            name="price"
            value={updatedItem.price}
            onChange={handleInputChange}
            placeholder="Price"
            min="0.01"
            step="any"
          />
          <input
            type="text"
            name="description"
            value={updatedItem.description}
            onChange={handleInputChange}
            placeholder="Description"
          />
          <div className="button-container">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div className="item-display">
            <h3>{updatedItem.name}</h3>
            <p><strong>Quantity:</strong> {updatedItem.quantity}</p>
            <p><strong>Price:</strong> ${updatedItem.price}</p>
            <p><strong>Description:</strong> {updatedItem.description || "No description available."}</p>
            <div className="button-container">
              <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
              <button className="remove-btn" onClick={handleRemove}>Remove</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
