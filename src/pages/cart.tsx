import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { MessageCircle, Trash2 } from "lucide-react";

const whatsappNumber = "918639619426";

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

      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">My Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty!</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 rounded object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-bold">{item.product.name}</h3>
                  <p className="text-gray-600">{item.product.price}</p>

                  {/* Qty buttons */}
                  <div className="flex items-center gap-3 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => decreaseQty(item.product.id)}
                    >
                      -
                    </Button>
                    <span className="font-semibold">{item.qty}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => increaseQty(item.product.id)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeItem(item.product.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}

            <div className="mt-6 p-4 bg-white shadow rounded-lg flex justify-between items-center">
              <p className="text-xl font-bold">Total: ₹{totalPrice}</p>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white flex gap-2 items-center"
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
