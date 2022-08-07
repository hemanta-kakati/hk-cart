import React, { useEffect } from "react";
import cartData from "./data";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { useGlobalContext } from "./context";
import img2 from "./img/2.jpg";
import img3 from "./img/3.webp";
import img4 from "./img/4.png";
import img3jpg from "./img/3.jpg";

const CartContainer = () => {
  const { cart, quantity, total, remove, increase, decrease } =
    useGlobalContext();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="header d-flex justify-content-between align-items-center p-4">
          <p className="lead p-0">{`My cart (${quantity})`} </p>
          <h3>${total}</h3>
        </div>
        <div className="cart p-4 text-center">
          <h3>Your cart is empty</h3>
          <p className="lead">please try to add items in your cart.</p>
        </div>
        <div className="footer d-flex justify-content-center align-items-center p-4">
          <h4>Pay Now</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="header d-flex justify-content-between align-items-center p-4">
        <p className="lead p-0">{`My cart (${quantity})`} </p>
        <h3>${total}</h3>
      </div>
      <div className="cart p-4">
        {cart.map(({ id, img, info: { title, colour, price }, quantity }) => {
          return (
            <div key={id} className="cart-item  pt-3 pb-3 mb-3 border ">
              <div className="d-flex justify-content-around align-items-center">
                <div className="img-wrapper">
                  <img src={img} className="img-fluid img" />
                </div>
                <div className="info w-50">
                  <h5>{title}</h5>
                  <p className="text-secondary"> Colour: {colour}</p>
                  <p className="text-secondary"> ${price}</p>
                </div>
                <div className="quantity">
                  <h5>
                    <AiOutlineUp
                      className="text-secondary"
                      onClick={() => increase(id)}
                    />{" "}
                    {quantity}{" "}
                    <AiOutlineDown
                      className="text-secondary"
                      onClick={() => decrease(id)}
                    />
                  </h5>
                </div>
              </div>
              <button className="remove-item" onClick={() => remove(id)}>
                <RiCloseLine />
              </button>
            </div>
          );
        })}
      </div>
      <div className="footer d-flex justify-content-center align-items-center p-4">
        <h4>Pay Now</h4>
      </div>
    </div>
  );
};

export default CartContainer;
