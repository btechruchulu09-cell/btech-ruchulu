import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/btech-logo.jpg"; // ✅ Add this import

const Navigation = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const total = cart.reduce((sum: any, item: any) => sum + item.qty, 0);
    setCartCount(total);
  };

  updateCart();

  // ✅ Listen for changes in the same tab
  const interval = setInterval(updateCart, 500);

  // ✅ Also listen for other tabs
  window.addEventListener("storage", updateCart);

  return () => {
    clearInterval(interval);
    window.removeEventListener("storage", updateCart);
  };
}, []);


  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo + Brand */}
<Link to="/" className="flex items-center gap-3">
  <img
    src={logo}
    alt="Btech Logo"
    className="h-10 w-10 object-contain rounded-full"
  />
  <span className="text-2xl font-bold tracking-wide">
    Btech Ruchulu
  </span>
</Link>


        {/* Nav Links */}
        <div className="flex gap-8 items-center text-lg font-medium">
          <Link
            to="/"
            className="hover:text-green-400 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-green-400 transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-green-400 transition"
          >
            Contact Us
          </Link>

          {/* Cart Button */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-7 h-7 hover:text-green-400 transition" />

            {/* ✅ Live Cart Qty */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
