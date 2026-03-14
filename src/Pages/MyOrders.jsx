import { useEffect, useState } from "react";
import API from "../services/api";
import "./MyOrders.css";

function MyOrders(){

  const [orders,setOrders] = useState([]);

  useEffect(()=>{
    loadOrders();
  },[]);

  const loadOrders = async () => {

    try{

      const res = await API.get("/orders");
      setOrders(res.data);

    }catch(error){

      console.error(error);

    }

  };

  return(

    <div className="orders-page">

      <h2>My Orders</h2>

      {orders.length === 0 && <p>No Orders Yet</p>}

      {orders.map(order=>(

        <div className="order-card" key={order.id}>

          <img src={order.image} alt="" />

          <div className="order-info">

            <h3>{order.productName}</h3>

            <p>Price : ₹ {order.price}</p>

            <p>Quantity : {order.quantity}</p>

            <p>Total : ₹ {order.totalAmount}</p>

            <span className="status">Processing</span>

          </div>

        </div>

      ))}

    </div>

  );

}

export default MyOrders;