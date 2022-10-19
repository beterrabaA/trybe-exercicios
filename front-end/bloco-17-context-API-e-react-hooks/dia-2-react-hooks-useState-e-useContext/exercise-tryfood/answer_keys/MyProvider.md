```javascript
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [orderList, setOrderList] = useState({
    comida: [],
    bebida: [],
    sobremesa: [],
  });
  const [updateCart, setUpdateCart] = useState(false);

  const showCart = () => {
    if (updateCart) {
      setUpdateCart(false);
    } else {
      setUpdateCart(true);
    }
  };

  const updateItem = (itemTypeList, indexPresentInList, item) => {
    itemTypeList.splice(indexPresentInList, 1, item);
    setOrderList({ ...orderList, [item.itemType]: itemTypeList });
  };

  const removeItem = (itemTypeList, indexPresentInList, item) => {
    itemTypeList.splice(indexPresentInList, 1);
    setOrderList({ ...orderList, [item.itemType]: itemTypeList });
  };

  const manageItemsInList = (newItem) => {
    const NO_QUANTITY = 0;
    const itemTypeList = orderList[newItem.itemType];
    const indexPresentInList = itemTypeList.findIndex((e) => e.id === newItem.id);
    if (Number(newItem.quantity) === NO_QUANTITY) {
      return removeItem(itemTypeList, indexPresentInList, newItem);
    }
    updateItem(itemTypeList, indexPresentInList, newItem);
  };

  const addNewItem = (newItem) => {
    setOrderList({ ...orderList,
      [newItem.itemType]: [...orderList[newItem.itemType], newItem] });
  };

  const handleChange = ({ target }, itemName, itemPrice, itemType) => {
    const { value } = target;

    const newItem = {
      id: itemName,
      quantity: value,
      totalPrice: value * itemPrice,
      itemType,
    };

    const isPresentInList = orderList[itemType].some((item) => itemName === item.id);

    if (!isPresentInList) {
      return addNewItem(newItem);
    }
    manageItemsInList(newItem);
  };

  return (
    <MyContext.Provider value={ { handleChange, orderList, updateCart, showCart } }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;


```