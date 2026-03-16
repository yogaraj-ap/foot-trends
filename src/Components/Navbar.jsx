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
import { FaBars, FaTimes } from "react-icons/fa";
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
    <>
    
    <nav className="navbar">

      {/* MENU ICON */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* LOGO */}
      <div className="logo">
        <Link to="/">
          <h2>Trend-Foots 👟</h2>
        </Link>
      </div>

      {/* DESKTOP MENU */}
      <div className="nav-links desktop">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>

        {user && (
          <Link to="/profile" className="profile-link">
            👤 {user.name || "Profile"}
          </Link>
        )}
      </div>

      {/* AUTH */}
      <div className="auth-links desktop">
        {user ? (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="register-btn">Register</Link>
          </>
        )}
      </div>

    </nav>

    {/* OVERLAY */}
    {menuOpen && <div className="overlay" onClick={()=>setMenuOpen(false)}></div>}

    {/* MOBILE MENU */}
    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

      <Link to="/" onClick={()=>setMenuOpen(false)}>Home</Link>
      <Link to="/shop" onClick={()=>setMenuOpen(false)}>Shop</Link>
      <Link to="/cart" onClick={()=>setMenuOpen(false)}>Cart</Link>

      {user && (
        <Link to="/profile" onClick={()=>setMenuOpen(false)}>
          👤 {user.name || "Profile"}
        </Link>
      )}

      {user ? (
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      ) : (
        <>
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/register" className="register-btn">Register</Link>
        </>
      )}

    </div>

    </>
  );
}

export default Navbar;