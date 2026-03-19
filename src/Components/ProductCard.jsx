


// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaHeart } from "react-icons/fa";
// import "./ProductCard.css";

// function ProductCard({ product, addToCart }) {

// const navigate = useNavigate();

// const handleNavigate = () => {
// navigate(`/product/${product.id}`);
// };

// const handleAddToCart = (e) => {
// e.stopPropagation();

// addToCart(product);

// toast.success(`${product.name} added to cart 🛒`);
// };

// return (

// <div className="product-card">

// <div className="image-wrapper" onClick={handleNavigate}>

// <img
// src={product.image}
// alt={product.name}
// className="product-img main"
// />

// {product.hoverImage && (
// <img
// src={product.hoverImage}
// alt=""
// className="product-img hover"
// />
// )}

// <div className="wishlist">
// <FaHeart />
// </div>

// </div>

// <div className="product-info">

// <h4>{product.name}</h4>

// <p className="price">₹{product.price}</p>

// <button className="cart-btn" onClick={handleAddToCart}>
// Add to Cart
// </button>

// </div>

// </div>

// );

// }

// export default ProductCard;

// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { useState } from "react";
// import "./ProductCard.css";

// function ProductCard({ product, addToCart }) {

//   const navigate = useNavigate();
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   const handleNavigate = () => {
//     navigate(`/product/${product.id}`);
//   };

//   const handleAddToCart = (e) => {
//     e.stopPropagation();
//     addToCart(product);
//     toast.success(`${product.name} added to cart 🛒`);
//   };

//   const handleWishlist = (e) => {
//     e.stopPropagation();
//     setIsWishlisted(!isWishlisted);

//     if (!isWishlisted) {
//       toast.success("Added to Wishlist ❤️");
//     } else {
//       toast.info("Removed from Wishlist");
//     }
//   };

//   return (
//     <div className="product-card">

//       <div className="image-wrapper" onClick={handleNavigate}>

//         <img
//           src={product.image}
//           alt={product.name}
//           className="product-img main"
//         />

//         {product.hoverImage && (
//           <img
//             src={product.hoverImage}
//             alt=""
//             className="product-img hover"
//           />
//         )}

//         {/* Wishlist */}
//         <div 
//           className={`wishlist ${isWishlisted ? "active" : ""}`}
//           onClick={handleWishlist}
//         >
//           {isWishlisted ? <FaHeart /> : <FaRegHeart />}
//         </div>

//         {/* Overlay Button */}
//         <div className="overlay">
//           <button onClick={handleAddToCart}>Add to Cart</button>
//         </div>

//       </div>

//       <div className="product-info">
//         <h4>{product.name}</h4>
//         <p className="price">₹{product.price}</p>
//       </div>

//     </div>
//   );
// }

// export default ProductCard;



import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product, addToCart }) {

  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart 🛒`);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="product-card" onClick={handleNavigate}>

      <div className="image-wrapper">

        <img
          src={product.image}
          alt={product.name}
          className="product-img"
        />

        {/* Wishlist */}
        <div 
          className={`wishlist ${isWishlisted ? "active" : ""}`}
          onClick={handleWishlist}
        >
          {isWishlisted ? <FaHeart /> : <FaRegHeart />}
        </div>

        {/* Add to Cart */}
        <div className="overlay">
          <button onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>

      </div>

      <div className="product-info">
        <h4>{product.name}</h4>
        <p className="price">₹{product.price}</p>
      </div>

    </div>
  );
}

export default ProductCard;