// src/components/ItemList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../actions/shoppingListActions';
import Item from './Item';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="item-list">
      {items.length === 0 ? (
        <p>No items in your shopping list!</p>
      ) : (
        items.map((item) => <Item key={item.id} item={item} />)
      )}
    </div>
  );
};

export default ItemList;
