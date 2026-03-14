import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";
import "./Checkout.css";

function Checkout(){

  const { state } = useLocation();
  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [city,setCity] = useState("");
  const [pincode,setPincode] = useState("");
  const [payment,setPayment] = useState("COD");

  const placeOrder = async ()=>{

    try{

      await API.post("/orders/place",{
        productId:state.productId,
        productName:state.productName,
        image:state.image,
        price:state.price,
        quantity:state.quantity,
        customerName:name,
        phone,
        address,
        city,
        pincode,
        paymentMethod:payment
      });

      alert("Order Placed Successfully");

      navigate("/");

    }catch(error){

      console.error(error);
      alert("Order Failed");

    }
  };

  return(

    <div className="checkout-container">

      <div className="checkout-left">

        <h2>Shipping Address</h2>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />

        <input
          placeholder="Address"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />

        <input
          placeholder="City"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
        />

        <input
          placeholder="Pincode"
          value={pincode}
          onChange={(e)=>setPincode(e.target.value)}
        />

        <h3>Payment Method</h3>

        <select
          value={payment}
          onChange={(e)=>setPayment(e.target.value)}
        >
          <option value="COD">Cash on Delivery</option>
          <option value="UPI">UPI</option>
          <option value="CARD">Debit / Credit Card</option>
        </select>

      </div>

      <div className="checkout-right">

        <h2>Order Summary</h2>

        <img src={state.image} alt="" />

        <h3>{state.productName}</h3>

        <p>Price : ₹ {state.price}</p>

        <p>Quantity : {state.quantity}</p>

        <h3>Total : ₹ {state.price * state.quantity}</h3>

        <p className="delivery">
          Estimated Delivery : 3 - 5 Days
        </p>

        <button
          className="place-order"
          onClick={placeOrder}
        >
          Place Order
        </button>

        <button
          className="cancel-order"
          onClick={()=>navigate("/cart")}
        >
          Cancel
        </button>

      </div>

    </div>

  );
}

export default Checkout;