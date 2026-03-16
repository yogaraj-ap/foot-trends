


// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./Navbar.css";

// function Navbar() {

//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user"));

//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   return (
//     <>
    
//     <nav className="navbar">

//       {/* MENU ICON */}
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </div>

//       {/* LOGO */}
//       <div className="logo">
//         <Link to="/">
//           <h2>Trend-Foots 👟</h2>
//         </Link>
//       </div>

//       {/* DESKTOP MENU */}
//       <div className="nav-links desktop">
//         <Link to="/">Home</Link>
//         <Link to="/shop">Shop</Link>
//         <Link to="/cart">Cart</Link>

//         {user && (
//           <Link to="/profile" className="profile-link">
//             👤 {user.name || "Profile"}
//           </Link>
//         )}
//       </div>

//       {/* AUTH */}
//       <div className="auth-links desktop">
//         {user ? (
//           <button onClick={handleLogout} className="logout-btn">
//             Logout
//           </button>
//         ) : (
//           <>
//             <Link to="/login" className="login-btn">Login</Link>
//             <Link to="/register" className="register-btn">Register</Link>
//           </>
//         )}
//       </div>

//     </nav>

//     {/* OVERLAY */}
//     {menuOpen && <div className="overlay" onClick={()=>setMenuOpen(false)}></div>}

//     {/* MOBILE MENU */}
//     <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

//       <Link to="/" onClick={()=>setMenuOpen(false)}>Home</Link>
//       <Link to="/shop" onClick={()=>setMenuOpen(false)}>Shop</Link>
//       <Link to="/cart" onClick={()=>setMenuOpen(false)}>Cart</Link>

//       {user && (
//         <Link to="/profile" onClick={()=>setMenuOpen(false)}>
//           👤 {user.name || "Profile"}
//         </Link>
//       )}

//       {user ? (
//         <button onClick={handleLogout} className="logout-btn">
//           Logout
//         </button>
//       ) : (
//         <>
//           <Link to="/login" className="login-btn">Login</Link>
//           <Link to="/register" className="register-btn">Register</Link>
//         </>
//       )}

//     </div>

//     </>
//   );
// }

// export default Navbar;



import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
FaBars,
FaTimes,
FaShoppingCart,
FaSearch,
FaUser
} from "react-icons/fa";

import "./Navbar.css";

function Navbar({ cartItems = [] }) {

const navigate = useNavigate();
const user = JSON.parse(localStorage.getItem("user"));

const [menuOpen, setMenuOpen] = useState(false);

const handleLogout = () => {
localStorage.removeItem("user");
navigate("/");
};

const closeMenu = () => {
setMenuOpen(false);
};

return (
<>

<nav className="navbar">

{/* LEFT MENU ICON */}
<div className="menu-icon" onClick={()=>setMenuOpen(true)}>
<FaBars />
</div>

{/* LOGO */}
<div className="logo">
<Link to="/" onClick={closeMenu}>
<h2>Trend-Foots 👟</h2>
</Link>
</div>

{/* DESKTOP LINKS */}
<div className="nav-links desktop">
<Link to="/">Home</Link>
<Link to="/shop">Shop</Link>
<Link to="/new">New</Link>
<Link to="/brands">Brands</Link>
</div>

{/* RIGHT ICONS */}
<div className="nav-icons">

<FaSearch
className="icon"
onClick={()=>navigate("/search")}
/>

{/* CART ICON WITH BADGE */}
<Link to="/cart" className="cart-icon">

<FaShoppingCart className="icon"/>

{cartItems.length > 0 && (
<span className="cart-count">
{cartItems.length}
</span>
)}

</Link>

{user ? (
<Link to="/profile">
<FaUser className="icon"/>
</Link>
) : (
<Link to="/login" className="login-btn">
Login
</Link>
)}

</div>

</nav>

{/* OVERLAY */}
{menuOpen && (
<div
className="overlay"
onClick={closeMenu}
></div>
)}

{/* SIDE MENU */}
<div className={`side-menu ${menuOpen ? "open" : ""}`}>

<div className="menu-header">

<h3>Menu</h3>

<FaTimes
className="close-icon"
onClick={closeMenu}
/>

</div>

<Link to="/" onClick={closeMenu}>🏠 Home</Link>

<Link to="/shop" onClick={closeMenu}>👟 Shop</Link>

<Link to="/new" onClick={closeMenu}>🔥 New Arrivals</Link>

<Link to="/men" onClick={closeMenu}>👨 Men</Link>

<Link to="/women" onClick={closeMenu}>👩 Women</Link>

<Link to="/kids" onClick={closeMenu}>🧒 Kids</Link>

<Link to="/brands" onClick={closeMenu}>🏷 Brands</Link>

<hr/>

{user && (
<Link to="/orders" onClick={closeMenu}>
📦 My Orders
</Link>
)}

{user && (
<Link to="/profile" onClick={closeMenu}>
👤 Profile
</Link>
)}

{user ? (

<button
onClick={handleLogout}
className="logout-btn"
>
Logout
</button>

) : (

<>
<Link to="/login" onClick={closeMenu}>Login</Link>
<Link to="/register" onClick={closeMenu}>Register</Link>
</>

)}

</div>

</>
);
}

export default Navbar;