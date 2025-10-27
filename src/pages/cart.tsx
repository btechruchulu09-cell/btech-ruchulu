import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { MessageCircle, Trash2 } from "lucide-react";

const whatsappNumber = "917036912867";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  isVeg: boolean;
  type: "pickle" | "snack" | "podi";
  subCategory?: string;
}

const Cart = () => {
  const [cart, setCart] = useState<{ product: Product; qty: number }[]>(() =>
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== id));
  };

  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + parseInt(item.product.price.replace("₹", "")) * item.qty,
    0
  );

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return alert("Your cart is empty!");

    const message = encodeURIComponent(
      `Hello! I want to order:\n\n${cart
        .map(
          (item, i) =>
            `${i + 1}. ${item.product.name} - ${item.qty} qty - ${item.product.price}`
        )
        .join("\n")}\n\nTotal Items: ${cart.reduce(
        (t, item) => t + item.qty,
        0
      )}\nTotal Price: ₹${totalPrice}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 text-center sm:text-left">
          My Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-center sm:text-left text-base sm:text-lg">
            Your cart is empty!
          </p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white p-4 sm:p-6 rounded-lg shadow-md"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-cover"
                />

                {/* Product Details */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-semibold text-lg sm:text-xl">
                    {item.product.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {item.product.price}
                  </p>

                  {/* Qty buttons */}
                  <div className="flex justify-center sm:justify-start items-center gap-3 mt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => decreaseQty(item.product.id)}
                    >
                      -
                    </Button>
                    <span className="font-semibold text-base sm:text-lg">
                      {item.qty}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => increaseQty(item.product.id)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Delete Button */}
                <div className="self-center sm:self-start">
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeItem(item.product.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}

            {/* Checkout Section */}
            <div className="mt-8 p-4 sm:p-6 bg-white shadow-md rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-lg sm:text-xl font-bold text-gray-800">
                Total: ₹{totalPrice}
              </p>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto flex justify-center items-center gap-2 text-sm sm:text-base py-2 sm:py-3"
                onClick={checkoutWhatsApp}
              >
                <MessageCircle className="w-5 h-5" />
                Checkout on WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
