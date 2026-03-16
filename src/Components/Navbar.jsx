// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {

//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/"); // better than window.location.href
//   };

//   return (
//     <nav className="navbar">

//       {/* LOGO */}
//       <div className="logo">
//         <Link to="/">
//           <h2>Trend-Foots 👟</h2>
//         </Link>
//       </div>

//       {/* NAV LINKS */}
//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/shop">Shop</Link>
//         <Link to="/cart">Cart</Link>

//         {user && (
//           <Link to="/profile" className="profile-link">
//             👤 {user.name || "Profile"}
//           </Link>
//         )}
//       </div>

//       {/* AUTH SECTION */}
//       <div className="auth-links">

//         {user ? (

//           <button
//             onClick={handleLogout}
//             className="logout-btn"
//           >
//             Logout
//           </button>

//         ) : (

//           <>
//             <Link to="/login" className="login-btn">
//               Login
//             </Link>

//             <Link to="/register" className="register-btn">
//               Register
//             </Link>
//           </>

//         )}

//       </div>

//     </nav>
//   );
// }

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">

      {/* MOBILE MENU ICON */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* LOGO */}
      <div className="logo">
        <Link to="/">
          <h2>Trend-Foots 👟</h2>
        </Link>
      </div>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={()=>setMenuOpen(false)}>Home</Link>
        <Link to="/shop" onClick={()=>setMenuOpen(false)}>Shop</Link>
        <Link to="/cart" onClick={()=>setMenuOpen(false)}>Cart</Link>

        {user && (
          <Link 
            to="/profile" 
            className="profile-link"
            onClick={()=>setMenuOpen(false)}
          >
            👤 {user.name || "Profile"}
          </Link>
        )}

        {/* AUTH SECTION */}
        <div className="auth-links">

          {user ? (
            <button
              onClick={handleLogout}
              className="logout-btn"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/register" className="register-btn">Register</Link>
            </>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;