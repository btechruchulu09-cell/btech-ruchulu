import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/btech-logo.jpg";

const Navigation = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Update cart count dynamically
  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const total = cart.reduce((sum: any, item: any) => sum + item.qty, 0);
      setCartCount(total);
    };
    updateCart();
    const interval = setInterval(updateCart, 500);
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

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center text-lg font-medium">
          <Link to="/" className="hover:text-green-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-400 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-green-400 transition">
            Contact Us
          </Link>

          {/* Cart Button */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-7 h-7 hover:text-green-400 transition" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          {/* Cart Button beside Menu */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-7 h-7 hover:text-green-400 transition" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 hover:text-green-400 transition" />
            ) : (
              <Menu className="w-7 h-7 hover:text-green-400 transition" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col items-center gap-4 py-4 text-lg font-medium transition-all">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-green-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-green-400"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-green-400"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
