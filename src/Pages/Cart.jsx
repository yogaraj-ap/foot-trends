import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Cart.css";

function Cart(){

  const [cartItems,setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    loadCart();
  },[]);

 const loadCart = async () => {
  const res = await API.get("/cart");
  console.log("Cart API response:", res.data);   // DEBUG
  setCartItems(res.data);
};

  const removeItem = async(id)=>{
    await API.delete(`/cart/${id}`);
    loadCart();
  };

  // 🔹 BUY NOW → GO TO CHECKOUT PAGE
  const buyNow = (item)=>{
    navigate("/checkout", { state: item });
  };

  const total = cartItems.reduce(
    (sum,item)=>sum + item.price * item.quantity,
    0
  );

  return(

    <div className="cart">

      <h2>Your Cart</h2>

      {cartItems.map(item=>(
        <div className="cart-item" key={item.id}>

          <img src={item.image} alt="" />

          <div className="info">
            <h3>{item.productName}</h3>
            <p>₹ {item.price}</p>
          </div>

          <div className="actions">

            <button
              onClick={()=>buyNow(item)}
              className="buy"
            >
              Buy Now
            </button>

            <button
              onClick={()=>removeItem(item.id)}
              className="remove"
            >
              Remove
            </button>

          </div>

        </div>
      ))}

      <h2>Total : ₹ {total}</h2>

    </div>

  );
}

export default Cart;