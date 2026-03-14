// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import Home from "./Pages/Home";
// import Shop from "./Pages/Shop";
// import ProductDetails from "./Pages/ProductDetails";
// import Cart from "./Pages/Cart";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Checkout from "./Pages/Checkout";
// import Profile from "./Pages/Profile";
// import AdminDashboard from "./Pages/AdminDashboard";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;


// import { useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import SockJS from "sockjs-client";
// import { Client } from "@stomp/stompjs";

// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import Home from "./Pages/Home";
// import Shop from "./Pages/Shop";
// import ProductDetails from "./Pages/ProductDetails";
// import Cart from "./Pages/Cart";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Checkout from "./Pages/Checkout";
// import Profile from "./Pages/Profile";
// import AdminDashboard from "./Pages/AdminDashboard";
// import "./App.css";

// function App() {

//   useEffect(() => {

//     const socket = new SockJS("http://localhost:8080/ws");

//     const stompClient = new Client({
//       webSocketFactory: () => socket,

//       onConnect: () => {
//         console.log("✅ WebSocket Connected");

//         // Subscribe to product updates
//         stompClient.subscribe("/topic/products", (message) => {
//           alert(message.body);
//         });
//       },

//       onStompError: (error) => {
//         console.error("WebSocket Error:", error);
//       }
//     });

//     stompClient.activate();

//     return () => {
//       stompClient.deactivate();
//     };

//   }, []);

//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;


// import { Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import Home from "./Pages/Home";
// import Shop from "./Pages/Shop";
// import ProductDetails from "./Pages/ProductDetails";
// import Cart from "./Pages/Cart";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Checkout from "./Pages/Checkout";
// import Profile from "./Pages/Profile";
// import AdminDashboard from "./Pages/AdminDashboard";

// import "./App.css";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Checkout from "./Pages/Checkout";
import Profile from "./Pages/Profile";
import AdminDashboard from "./Pages/AdminDashboard";
import MyOrders from "./Pages/MyOrders";
import Wishlist from "./Pages/Wishlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/orders" element={<MyOrders />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
}

export default App;