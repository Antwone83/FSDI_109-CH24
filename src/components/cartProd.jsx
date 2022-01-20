import "./cartProd.css";
import { useContext } from "react";
import storeContext from "../context/storeContext";


const CartProd = (props) => {
  const removeFromCart = useContext(storeContext).removeProductFromCart;


  const getTotal = () => {
    let total = props.data.price * props.data.quantity;
    return total.toFixed(2);
  };

  const handleRemove =() => {
    removeFromCart(props.data._id);

  }

  return (
    <div className="cart-prod">
      <img src={"/images/" + props.data.image} alt="Heat"/>
      <h6>{props.data.title}</h6>
      <label className="price">Price: ${props.data.price}</label>
      <label className="quantity">Quantity: {props.data.quantity}</label>
      <label className="total">Total: ${getTotal()}</label>
      <button className="btn btn-sm btn-danger">Delete</button>
    </div>
  );
};

export default CartProd;
