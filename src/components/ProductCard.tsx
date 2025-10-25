import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  price: string;
  image: string;
  isVeg: boolean;
}

const ProductCard = ({ name, category, price, image, isVeg }: ProductCardProps) => {
  const phoneNumber = "9185208765"; // 🔹 Replace with your actual WhatsApp number

  const handleOrderNow = () => {
    const message = `Hello! I’d like to order *${name}* priced at ${price}. Please share more details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Card className="overflow-hidden group hover:shadow-warm transition-all duration-300 hover:scale-105">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg leading-tight">{name}</h3>
          {isVeg && (
            <Badge variant="outline" className="border-accent text-accent shrink-0">
              <Leaf className="w-3 h-3 mr-1" />
              Veg
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-2">{category}</p>
        <p className="text-lg font-bold text-primary">{price}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          variant="default"
          className="w-full flex items-center justify-center gap-2"
          onClick={handleOrderNow}
        >
          <MessageCircle className="w-4 h-4" />
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
