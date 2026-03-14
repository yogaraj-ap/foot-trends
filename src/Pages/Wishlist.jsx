import { useEffect, useState } from "react";
import API from "../services/api";
import "./Wishlist.css";

function Wishlist(){

  const [items,setItems] = useState([]);

  useEffect(()=>{
    loadWishlist();
  },[]);

  const loadWishlist = async ()=>{

    const res = await API.get("/wishlist");
    setItems(res.data);

  };

  const removeItem = async(id)=>{

    await API.delete(`/wishlist/${id}`);

    loadWishlist();

  };

  return(

    <div className="wishlist-page">

      <h2>My Wishlist ❤️</h2>

      {items.map(item=>(

        <div className="wish-card" key={item.id}>

          <img src={item.image} alt="" />

          <div>

            <h3>{item.productName}</h3>

            <p>₹ {item.price}</p>

          </div>

          <button onClick={()=>removeItem(item.id)}>
          Remove
          </button>

        </div>

      ))}

    </div>

  );

}

export default Wishlist;