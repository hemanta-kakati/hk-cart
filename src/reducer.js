import React from "react";
import cart from "./data";

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    case "INCREASE":
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return { ...state, cart: tempCart };

    case "DECREASE":
      let tempCart2 = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);

      return { ...state, cart: tempCart2 };

    case "FIND_TOTALS":
      const { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          // get all quantity
          cartTotal.quantity += cartItem.quantity;

          // add each item totals
          cartTotal.total += cartItem.info.price * cartItem.quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      console.log(total);

      return { ...state, total, quantity };
  }
  return state;
};

export default reducer;
