import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCart, children }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + tax + shipping;
  // const total = cart.reduce((first, second) => first + second.price, 0);
  // let shipping = 0;
  // for (const product of cart) {
  //     shipping = shipping + product.shipping;
  // }
  // const tax = (total * 0.1).toFixed(2);

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Items : {quantity}</p>
      <p>Total Price : ${total}</p>
      <p>Total Shipping : ${shipping}</p>
      <p>Tax : {tax}</p>
      <h4>Grand Total : {grandTotal.toFixed(2)}</h4>
      {/* <button onClick={clearCart}>Clear All</button> */}
      {children}
    </div>
  );
};

export default Cart;
