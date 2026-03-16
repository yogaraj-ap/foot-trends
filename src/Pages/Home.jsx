

// import "./Home.css";
// import { Link } from "react-router-dom";
// import API from "../services/api";
// import { toast } from "react-toastify";

// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";

// import s1 from "../assets/s1.jpg";
// import s2 from "../assets/s2.jpg";
// import s5 from "../assets/s5.jpg";
// import s6 from "../assets/s6.jpg";

// import nike from "../assets/brands/nike.png";
// import adidas from "../assets/brands/adidas.png";
// import puma from "../assets/brands/puma.png";
// import reebok from "../assets/brands/reebok.png";
// import vans from "../assets/brands/vans.png";
// import converse from "../assets/brands/converse.png";
// import newbalance from "../assets/brands/newbalance.jpg";
// import asic from "../assets/brands/asic.png";

// function Home() {

//   const sneakers = [
//     { id: 1, name: "Nike Air Max", price: 7999, img: s1 },
//     { id: 2, name: "Adidas Ultra Boost", price: 8999, img: s2 },
//     { id: 3, name: "Puma RS-X", price: 6999, img: s5 },
//     { id: 4, name: "Jordan Retro", price: 11999, img: s6 },
//     { id: 5, name: "Jordan Retro", price: 11999, img: s6 },
//     { id: 6, name: "Jordan Retro", price: 11999, img: s6 },
//     { id: 7, name: "Jordan Retro", price: 11999, img: s6 },
//     { id: 8, name: "Jordan Retro", price: 11999, img: s6 },
//     { id: 9, name: "Puma RS-X", price: 6999, img: s5 },
//     { id: 10, name: "Puma RS-X", price: 6999, img: s5 },
//     { id: 11, name: "Puma RS-X", price: 6999, img: s5 },
//     { id: 12, name: "Puma RS-X", price: 6999, img: s5 },
//   ];

//   // ADD TO CART FUNCTION
// const addToCart = async (item) => {
//   try {

//     const cartItem = {
//       productId: item.id,
//       productName: item.name,
//       image: item.img,  // keep this simple
//       price: item.price,
//       quantity: 1
//     };

//     await API.post("/cart/add", cartItem);

//     toast.success("Added to Cart 🛒");

//   } catch (error) {
//     console.error(error);
//     toast.error("Failed to add to cart");
//   }
// };

//   return (
//     <>
//       <Navbar />

//       <div className="home">

//         {/* HERO */}
//         <section className="hero">
//           <div className="hero-text">
//             <h1>Step Into Style 👟</h1>
//             <p>Discover the latest premium sneakers at Trend-Foots</p>
//             <button>Shop Now</button>
//           </div>

//           <div className="hero-image">
//             <img src={s1} alt="Sneaker" className="rotate-img" />
//           </div>
//         </section>

//         {/* BRAND SLIDER */}
//         <section className="brands">
//           <div className="brand-slider">
//             <div className="brand-track">

//               <img src={nike} alt="Nike" />
//               <img src={adidas} alt="Adidas" />
//               <img src={puma} alt="Puma" />
//               <img src={newbalance} alt="New Balance" />
//               <img src={reebok} alt="Reebok" />
//               <img src={asic} alt="ASICS" />
//               <img src={vans} alt="Vans" />
//               <img src={converse} alt="Converse" />

//               <img src={nike} alt="Nike" />
//               <img src={adidas} alt="Adidas" />
//               <img src={puma} alt="Puma" />
//               <img src={newbalance} alt="New Balance" />
//               <img src={reebok} alt="Reebok" />
//               <img src={asic} alt="ASICS" />
//               <img src={vans} alt="Vans" />
//               <img src={converse} alt="Converse" />

//             </div>
//           </div>
//         </section>

//         {/* COLLECTION */}
//         <section className="collection">
//           <h2>Trending Sneakers 🔥</h2>

//           <div className="grid">
//             {sneakers.map((item, index) => (

//               <div className="card" key={`${item.id}-${index}`}>

//                 <Link to={`/product/${item.id}`}>
//                   <img src={item.img} alt={item.name} />
//                 </Link>

//                 <h4>{item.name}</h4>
//                 <p>₹ {item.price}</p>

//                 <button onClick={() => addToCart(item)}>
//                   Add to Cart
//                 </button>

//               </div>

//             ))}
//           </div>

//         </section>

//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Home;


import "./Home.css";
import { Link } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";
import { useRef } from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";

import nike from "../assets/brands/nike.png";
import adidas from "../assets/brands/adidas.png";
import puma from "../assets/brands/puma.png";
import reebok from "../assets/brands/reebok.png";
import vans from "../assets/brands/vans.png";
import converse from "../assets/brands/converse.png";
import newbalance from "../assets/brands/newbalance.jpg";
import asic from "../assets/brands/asic.png";

function Home() {

const scrollRef = useRef();

const scrollLeft = () => {
scrollRef.current.scrollBy({
left: -300,
behavior: "smooth"
});
};

const scrollRight = () => {
scrollRef.current.scrollBy({
left: 300,
behavior: "smooth"
});
};

const sneakers = [
{ id: 1, name: "Nike Air Max", price: 7999, img: s1 },
{ id: 2, name: "Adidas Ultra Boost", price: 8999, img: s2 },
{ id: 3, name: "Puma RS-X", price: 6999, img: s5 },
{ id: 4, name: "Jordan Retro", price: 11999, img: s6 },
{ id: 5, name: "Jordan Retro", price: 11999, img: s6 },
{ id: 6, name: "Jordan Retro", price: 11999, img: s6 },
{ id: 7, name: "Jordan Retro", price: 11999, img: s6 },
{ id: 8, name: "Jordan Retro", price: 11999, img: s6 },
];

const addToCart = async (item) => {
try {

const cartItem = {
productId: item.id,
productName: item.name,
image: item.img,
price: item.price,
quantity: 1
};

await API.post("/cart/add", cartItem);

toast.success("Added to Cart 🛒");

} catch (error) {
toast.error("Failed to add to cart");
}
};

return (

<>
<Navbar/>

<div className="home">

{/* HERO */}

<section className="hero">

<div className="hero-text">
<h1>Step Into Style 👟</h1>
<p>Discover premium sneakers at Trend-Foots</p>
<button>Shop Now</button>
</div>

<div className="hero-image">
<img src={s1} alt="Sneaker" className="rotate-img"/>
</div>

</section>


{/* BRANDS */}

<section className="brands">

<div className="brand-slider">

<div className="brand-track">

<img src={nike}/>
<img src={adidas}/>
<img src={puma}/>
<img src={newbalance}/>
<img src={reebok}/>
<img src={asic}/>
<img src={vans}/>
<img src={converse}/>

<img src={nike}/>
<img src={adidas}/>
<img src={puma}/>
<img src={newbalance}/>
<img src={reebok}/>
<img src={asic}/>
<img src={vans}/>
<img src={converse}/>

</div>

</div>

</section>


{/* COLLECTION */}

<section className="collection">

<h2>Trending Sneakers 🔥</h2>

<div className="slider-wrapper">

<button className="scroll-btn left" onClick={scrollLeft}>
❮
</button>

<div className="grid-slider" ref={scrollRef}>

{sneakers.map((item)=>(

<div className="card" key={item.id}>

<Link to={`/product/${item.id}`}>
<img src={item.img} alt={item.name}/>
</Link>

<h4>{item.name}</h4>
<p>₹ {item.price}</p>

<button onClick={()=>addToCart(item)}>
Add to Cart
</button>

</div>

))}

</div>

<button className="scroll-btn right" onClick={scrollRight}>
❯
</button>

</div>

</section>

</div>

<Footer/>
</>

);
}

export default Home;