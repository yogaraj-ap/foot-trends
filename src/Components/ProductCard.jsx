

// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "./ProductCard.css";

// function ProductCard({ product }) {
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate(`/product/${product.id}`);
//   };

//   const handleAddToCart = (e) => {
//     e.stopPropagation(); // Prevent redirect
//     toast.success(`${product.name} added to cart 🛒`);
//   };

//   return (
//     <div className="product-card">

//       {/* IMAGE CLICK → DETAILS */}
//       <div className="image-wrapper" onClick={handleNavigate}>
//         <img src={product.image} alt={product.name} />
//       </div>

//       <h4>{product.name}</h4>
//       <p className="price">₹ {product.price}</p>

//       <div className="card-buttons">
//         <button className="view-btn" onClick={handleNavigate}>
//           View Details
//         </button>

//         <button className="cart-btn" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>

//     </div>
//   );
// }

// export default ProductCard;



import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";
import "./ProductCard.css";

function ProductCard({ product, addToCart }) {

const navigate = useNavigate();

const handleNavigate = () => {
navigate(`/product/${product.id}`);
};

const handleAddToCart = (e) => {
e.stopPropagation();

addToCart(product);

toast.success(`${product.name} added to cart 🛒`);
};

return (

<div className="product-card">

<div className="image-wrapper" onClick={handleNavigate}>

<img
src={product.image}
alt={product.name}
className="product-img main"
/>

{product.hoverImage && (
<img
src={product.hoverImage}
alt=""
className="product-img hover"
/>
)}

<div className="wishlist">
<FaHeart />
</div>

</div>

<div className="product-info">

<h4>{product.name}</h4>

<p className="price">₹{product.price}</p>

<button className="cart-btn" onClick={handleAddToCart}>
Add to Cart
</button>

</div>

</div>

);

}

export default ProductCard;