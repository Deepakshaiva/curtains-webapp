import React, { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "Wireless Headphones", price: 2999, qty: 1 },
    { id: 2, name: "Smart Watch", price: 4999, qty: 2 },
    { id: 3, name: "Gaming Mouse", price: 1999, qty: 1 },
  ]);

  const updateQuantity = (id, qty) => {
    if (qty < 1) return; // Prevent qty below 1
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-blsck-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-3xl mx-auto space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-xl p-4 flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg text-black font-semibold">{item.name}</h2>
                <p className="text-600 text-black">₹{item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.qty - 1)}
                    className="px-2 py-1 bg-green-300 text-black rounded"
                  >
                    -
                  </button>
                  <span className="px-3 text-black">{item.qty}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.qty + 1)}
                    className="px-2 py-1 bg-green-300 text-black rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="font-semibold text-black">₹{item.price * item.qty}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="bg-white shadow rounded-xl p-4 text-right">
            <h2 className="text-xl font-bold text-black">
              Total: ₹{getTotal()}
            </h2>
            <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
