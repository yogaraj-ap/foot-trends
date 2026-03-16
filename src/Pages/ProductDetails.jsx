// import { useParams } from "react-router-dom";
// import "./ProductDetails.css";

// function ProductDetails() {
//   const { id } = useParams();

//   return (
//     <div className="product-details">
//       <h2>Product Details</h2>
//       <p>Product ID: {id}</p>
//       <p>This is detailed page for sneaker.</p>
//     </div>
//   );
// }

// export default ProductDetails;


import { useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "./ProductDetails.css";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";

function ProductDetails() {
  const { id } = useParams();

  const products = [
    { id: "1", name: "Nike Air Max", price: 7999, img: s1 },
    { id: "2", name: "Adidas Ultra Boost", price: 8999, img: s2 },
    { id: "3", name: "Puma RS-X", price: 6999, img: s5 },
    { id: "4", name: "Jordan Retro", price: 11999, img: s6 },
  ];

  const product = products.find((p) => p.id === id);

  const [size, setSize] = useState("8");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    toast.success("Added to Cart 🛒");
  };

  const handleBuyNow = () => {
    toast.success("Proceeding to Checkout 💳");
  };

  return (
    <div className="details-container">

      <div className="details-left">
        <img src={product?.img} alt={product?.name} />
      </div>

      <div className="details-right">
        <h2>{product?.name}</h2>
        <p className="price">₹ {product?.price}</p>

        <p className="desc">
          Premium quality sneaker designed for comfort and street style.
          Lightweight sole with breathable upper material.
        </p>

        {/* SIZE SELECT */}
        <div className="size-section">
          <h4>Select Size:</h4>
          <div className="sizes">
            {[6,7,8,9,10].map((s) => (
              <button
                key={s}
                className={size === s ? "active-size" : ""}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* QUANTITY */}
        <div className="quantity-section">
          <h4>Quantity:</h4>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        {/* BUTTONS */}
        <div className="buttons">
          <button className="cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>

          <button className="buy-btn" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="related">
        <h3>Related Shoes 🔥</h3>
        <div className="related-grid">
          {products.map((item, index) => (
  <div className="related-card" key={`${item.id}-${index}`}>

              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ProductDetails;
