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
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";
import s7 from "../assets/s7.jpg";

const products = [
  { id: 1, name: "Nike Air Max", price: 7999, image: s1 },
  { id: 2, name: "Adidas UltraBoost", price: 8999, image: s7 },
  { id: 3, name: "Puma RS-X", price: 6999, image: s5 },
  { id: 4, name: "Jordan Retro", price: 11999, image: s6 },
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
