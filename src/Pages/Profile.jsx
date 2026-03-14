import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Profile.css";

function Profile(){

  const [user,setUser] = useState({});
  const [orders,setOrders] = useState([]);
  const [editOpen,setEditOpen] = useState(false);

  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(()=>{

    if(!storedUser){
      navigate("/login");
      return;
    }

    loadUser();
    loadOrders();

  },[]);

  const loadUser = async ()=>{
    const res = await API.get(`/users/${storedUser.id}`);
    setUser(res.data);
  };

  const loadOrders = async ()=>{
    const res = await API.get("/orders");
    setOrders(res.data);
  };

  const updateProfile = async ()=>{
    await API.put(`/users/${user.id}`,user);
    setEditOpen(false);
  };

  const logout = ()=>{
    localStorage.removeItem("user");
    navigate("/");
  };

  return(

    <div className="profile-page">

      {/* COVER */}
      <div className="profile-cover"></div>

      {/* PROFILE HEADER */}
      <div className="profile-header">

        <img
        src="https://i.pravatar.cc/150"
        alt="profile"
        className="avatar"
        />

        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <button
        className="edit-btn"
        onClick={()=>setEditOpen(true)}
        >
        Edit Profile
        </button>

      </div>


      {/* PREMIUM CARD */}

      <div className="premium-card">

        <h3>👑 Trend-Foots Premium</h3>
        <p>Early sneaker drops & exclusive discounts</p>

        <button className="subscribe">
        Upgrade Membership
        </button>

      </div>


      {/* MENU */}

      <div className="profile-menu">

        <Link to="/orders" className="menu-item">
        📦 My Orders
        </Link>

        <Link to="/wishlist" className="menu-item">
        ❤️ Wishlist
        </Link>

        <Link to="/cart" className="menu-item">
        🛒 Cart
        </Link>

        <div className="menu-item">
        📍 Address Manager
        </div>

        <div className="menu-item logout" onClick={logout}>
        🚪 Logout
        </div>

      </div>


      {/* ORDER TIMELINE */}

      <div className="orders">

        <h3>Recent Orders</h3>

        {orders.map(order=>(

          <div className="order-card" key={order.id}>

            <img src={order.image} alt="" />

            <div>

              <h4>{order.productName}</h4>
              <p>₹ {order.totalAmount}</p>

              <div className="timeline">

                <span className="step active">Ordered</span>
                <span className="step active">Packed</span>
                <span className="step">Shipped</span>
                <span className="step">Delivered</span>

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* EDIT PROFILE MODAL */}

      {editOpen && (

        <div className="modal">

          <div className="modal-box">

            <h3>Edit Profile</h3>

            <input
            value={user.name}
            onChange={(e)=>setUser({...user,name:e.target.value})}
            />

            <input
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}
            />

            <div className="modal-buttons">

              <button onClick={updateProfile}>
              Save
              </button>

              <button
              onClick={()=>setEditOpen(false)}
              >
              Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Profile;


// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import API from "../services/api";
// import "./Profile.css";

// function Profile(){

//   const [user,setUser] = useState({});
//   const [orders,setOrders] = useState([]);

//   const navigate = useNavigate();

//   const storedUser = JSON.parse(localStorage.getItem("user"));

//   useEffect(()=>{

//     if(!storedUser){
//       navigate("/login");
//       return;
//     }

//     loadUser();
//     loadOrders();

//   },[]);

//   const loadUser = async () =>{
//     const res = await API.get(`/users/${storedUser.id}`);
//     setUser(res.data);
//   };

//   const loadOrders = async () =>{
//     const res = await API.get("/orders");
//     setOrders(res.data);
//   };

//   const logout = ()=>{
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   return(

//     <div className="profile-page">

//       {/* PROFILE HEADER */}

//       <div className="profile-header">

//         <img
//         src="https://i.pravatar.cc/150"
//         alt="profile"
//         className="avatar"
//         />

//         <h2>{user.name}</h2>
//         <p>{user.email}</p>

//       </div>


//       {/* PREMIUM CARD */}

//       <div className="premium-card">

//         <h3>👑 Join Trend-Foots Premium</h3>
//         <p>Unlock exclusive sneakers & early drops</p>

//         <div className="premium-buttons">
//           <button className="subscribe">Subscribe</button>
//           <button className="restore">Restore</button>
//         </div>

//       </div>


//       {/* PROFILE MENU */}

//       <div className="profile-menu">

//         <Link to="/orders" className="menu-item">
//           📦 My Orders
//         </Link>

//         <Link to="/wishlist" className="menu-item">
//           ❤️ Wishlist
//         </Link>

//         <Link to="/cart" className="menu-item">
//           🛒 My Cart
//         </Link>

//         <Link to="/address" className="menu-item">
//           📍 Address Manager
//         </Link>

//         <div className="menu-item">
//           🔔 Notification Settings
//         </div>

//         <div className="menu-item">
//           ⚙ Account Settings
//         </div>

//         <div className="menu-item logout" onClick={logout}>
//           🚪 Logout
//         </div>

//       </div>


//       {/* ORDER HISTORY */}

//       <div className="orders">

//         <h3>Recent Orders</h3>

//         {orders.length === 0 && <p>No orders yet</p>}

//         {orders.map(order=>(

//           <div className="order-card" key={order.id}>

//             <img src={order.image} alt="" />

//             <div>

//               <h4>{order.productName}</h4>

//               <p>₹ {order.totalAmount}</p>

//               <span className="status">
//                 Processing
//               </span>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>

//   );
// }

// export default Profile;