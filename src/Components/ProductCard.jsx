// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "./ProductCard.css";

// function ProductCard({ product }) {
//   const navigate = useNavigate();

//   return (
//     <div className="card">
//       <img src={product.image} alt="" />
//       <h4>{product.name}</h4>
//       <p>₹ {product.price}</p>
//       <button onClick={() => navigate(`/product/${product.id}`)}>
//         View
//       </button>
//       <button onClick={() => toast.success("Added to Cart!")}>
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default ProductCard;

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./ProductCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent redirect
    toast.success(`${product.name} added to cart 🛒`);
  };

  return (
    <div className="product-card">

      {/* IMAGE CLICK → DETAILS */}
      <div className="image-wrapper" onClick={handleNavigate}>
        <img src={product.image} alt={product.name} />
      </div>

      <h4>{product.name}</h4>
      <p className="price">₹ {product.price}</p>

      <div className="card-buttons">
        <button className="view-btn" onClick={handleNavigate}>
          View Details
        </button>

        <button className="cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductCard;
