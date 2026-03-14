// import ProductCard from "../Components/ProductCard";
// import "./Shop.css";

// const products = [
//   { id: 1, name: "Nike Air Max", price: 7999, image: "https://via.placeholder.com/300" },
//   { id: 2, name: "Adidas UltraBoost", price: 8999, image: "https://via.placeholder.com/300" },
// ];

// function Shop() {
//   return (
//     <div className="shop">
//       <h2>Shop Sneakers</h2>
//       <div className="grid">
//         {products.map((p) => (
//           <ProductCard key={p.id} product={p} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Shop;


import ProductCard from "../Components/ProductCard";
import "./Shop.css";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";

const products = [
  { id: 1, name: "Nike Air Max", price: 7999, image: s1 },
  { id: 2, name: "Adidas UltraBoost", price: 8999, image: s2 },
  { id: 3, name: "Puma RS-X", price: 6999, image: s3 },
  { id: 4, name: "Jordan Retro", price: 11999, image: s4 },
];

function Shop() {
  return (
    <div className="shop">
      <h2>Shop Sneakers</h2>

    <div className="grid">
  {products.map((p, index) => (
    <ProductCard key={`${p.id}-${index}`} product={p} />
  ))}
</div>

    </div>
  );
}

export default Shop;
