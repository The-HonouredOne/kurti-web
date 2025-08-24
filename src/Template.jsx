import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Floral Kurti",
    price: 999,
    image: "https://via.placeholder.com/300x400.png?text=Floral+Kurti",
  },
  {
    id: 2,
    name: "Cotton Printed Kurti",
    price: 799,
    image: "https://via.placeholder.com/300x400.png?text=Cotton+Kurti",
  },
  {
    id: 3,
    name: "Anarkali Kurti",
    price: 1499,
    image: "https://via.placeholder.com/300x400.png?text=Anarkali+Kurti",
  },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0">
        <h1 className="text-2xl font-bold text-pink-600">KurtiStore</h1>
        <div className="flex items-center gap-4">
          <ShoppingCart className="w-6 h-6 text-gray-600" />
          <span className="font-semibold">{cart.length}</span>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="bg-pink-100 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Trendy Kurtis for Every Occasion
        </h2>
        <p className="text-gray-600 mt-2">Shop the latest designs now</p>
        <button className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700">
          Shop Now
        </button>
      </section>

      {/* Products Grid */}
      <section className="px-6 py-10">
        <h3 className="text-xl font-semibold mb-6">Our Collection</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <img src={p.image} alt={p.name} className="w-full h-72 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{p.name}</h4>
                <p className="text-pink-600 font-bold">₹{p.price}</p>
                <button
                  onClick={() => addToCart(p)}
                  className="mt-3 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} KurtiStore. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
