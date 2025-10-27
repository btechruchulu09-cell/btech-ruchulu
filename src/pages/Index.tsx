import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { MessageCircle, Search } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

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

const whatsappNumber = "918639619426";

const products: Product[] = [
  // 🥒 VEG PICKLES
  { id: 1, name: "Tomato Pickle", category: "Pickles", price: "₹150", image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/tomato-pickle-recipe.jpg", isVeg: true, type: "pickle" },
  { id: 2, name: "Mango Pickle", category: "Pickles", price: "₹180", image: "https://cinnamonsnail.com/wp-content/uploads/2023/07/Mango-pickle-05.jpg", isVeg: true, type: "pickle" },
  { id: 3, name: "Sweet Mango Pickle", category: "Pickles", price: "₹190", image: "https://vellankifoods.com/cdn/shop/products/sweet_mango_pickle_bellam_avakaya_pickles.jpg?v=1680181742", isVeg: true, type: "pickle" },
  { id: 4, name: "Garlic Mango Pickle", category: "Pickles", price: "₹200", image: "https://srinus.in/wp-content/uploads/2025/04/1-4.jpg", isVeg: true, type: "pickle" },
  { id: 5, name: "Allam Mango Pickle", category: "Pickles", price: "₹195", image: "https://lalithasbhimavarampickles.com/cdn/shop/files/mamidi-alllam-pickle_jpg_f413620c-ae47-4902-9ef2-14e117fe257e.webp?v=1748082839", isVeg: true, type: "pickle" },
  { id: 6, name: "Drumstick Pickle", category: "Pickles", price: "₹170", image: "https://i.ytimg.com/vi/3fGHSo9HVCs/sddefault.jpg", isVeg: true, type: "pickle" },
  { id: 7, name: "Red Chilli Pickle", category: "Pickles", price: "₹160", image: "https://www.whiskaffair.com/wp-content/uploads/2021/04/Lal-Mirch-Ka-Achar-2-3-1.jpg", isVeg: true, type: "pickle" },
  { id: 8, name: "Gongura Pickle", category: "Pickles", price: "₹180", image: "https://i0.wp.com/foodonfarmpickles.com/wp-content/uploads/2024/07/Gongura-scaled.webp?fit=1920%2C1281&ssl=1", isVeg: true, type: "pickle" },
  { id: 9, name: "Red Chilli Gongura Pickle", category: "Pickles", price: "₹185", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwl6FB5787mBnHskzHcTS3tc5u0k5dhfSYxQ&s", isVeg: true, type: "pickle" },
  { id: 10, name: "Amla Pickle", category: "Pickles", price: "₹165", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcelo0HgQpObKoilB3vQYBk4T055nuYKiNgQ&s", isVeg: true, type: "pickle" },
  { id: 11, name: "Tamarind Pickle", category: "Pickles", price: "₹155", image: "https://vellankifoods.com/cdn/shop/products/tamarind_pickle.jpg?v=1680181752", isVeg: true, type: "pickle" },
  { id: 12, name: "Podhina Pickle", category: "Pickles", price: "₹145", image: "https://cdn.dotpe.in/longtail/store-items/5739802/tHXOPtOe.jpeg", isVeg: true, type: "pickle" },
  { id: 13, name: "Kothimeera Pickle", category: "Pickles", price: "₹145", image: "https://images.aasaan.shop/stores/pavifoods/products/product_images/product_1668409144363.jpeg", isVeg: true, type: "pickle" },
  { id: 14, name: "Kakara Pickle", category: "Pickles", price: "₹175", image: "https://aahaaramonline.com/wp-content/uploads/2020/02/Kakarakaya_Nilava_Pachadi_1.jpg", isVeg: true, type: "pickle" },
  { id: 15, name: "Karivepaku Pickle", category: "Pickles", price: "₹140", image: "https://vismaifood.com/storage/app/uploads/public/70e/340/bcf/thumb__1200_0_0_0_auto.jpg", isVeg: true, type: "pickle" },
  { id: 16, name: "Lemon Pickle", category: "Pickles", price: "₹150", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAbgc4_KiZePzHkgj4EUjRQJBZUPAR5mlcdQ&s", isVeg: true, type: "pickle" },
  { id: 17, name: "Mango Thurumu Pickle", category: "Pickles", price: "₹185", image: "https://hadvifoods.com/cdn/shop/files/Instant-Grated-Mango-Pickle-Mango-Thokku-V2.jpg?v=1727722255&width=1445", isVeg: true, type: "pickle" },
  { id: 18, name: "Carrot Pickle", category: "Pickles", price: "₹155", image: "https://cinnamonsnail.com/wp-content/uploads/2023/07/Carrot-pickle-06.jpg", isVeg: true, type: "pickle" },
  { id: 19, name: "Green Chilli Pickle", category: "Pickles", price: "₹160", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHhuUx3O1SANz-DDJxQ-2qXVYmF3ALniK_A&s", isVeg: true, type: "pickle" },
  { id: 20, name: "Garlic Pickle", category: "Pickles", price: "₹170", image: "https://static.toiimg.com/photo/58413147.cms", isVeg: true, type: "pickle" },
  { id: 21, name: "Allam Pickle", category: "Pickles", price: "₹165", image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/allam-pachadi-recipe-2.jpg", isVeg: true, type: "pickle" },

  // 🍗 NON-VEG PICKLES
  { id: 22, name: "Chicken Bones Pickle", category: "Pickles", price: "₹260", image: "https://i0.wp.com/foodonfarmpickles.com/wp-content/uploads/2023/03/chicken-bone-pickle.jpg?resize=1024%2C671&ssl=1", isVeg: false, type: "pickle" },
  { id: 23, name: "Chicken Boneless Pickle", category: "Pickles", price: "₹280", image: "https://m.media-amazon.com/images/X/bxt1/M/rbxt1RaiMBxzUks._SL640_QL75_FMwebp_.jpg", isVeg: false, type: "pickle" },
  { id: 24, name: "Gongura Chicken Pickle", category: "Pickles", price: "₹290", image: "https://sitarafoods.com/wp-content/uploads/2022/07/02-1.jpg", isVeg: false, type: "pickle" },
  { id: 25, name: "Prawns Pickle", category: "Pickles", price: "₹300", image: "https://www.licious.in/blog/wp-content/uploads/2022/03/shutterstock_617174738-min-600x600.jpg", isVeg: false, type: "pickle" },
  { id: 26, name: "Mutton Pickle", category: "Pickles", price: "₹320", image: "https://i0.wp.com/ahahomefoods.com/wp-content/uploads/2023/02/Mutton-Pickle.jpg?fit=600%2C600&ssl=1", isVeg: false, type: "pickle" },

  // 🧂 KARAMS & PODIS
  { id: 27, name: "Kakara Karam", category: "Karam Podis", price: "₹110", image: "https://vellankifoods.com/cdn/shop/products/kakarakaya_karam_bittergourd_1200x1200.jpg?v=1680180505", isVeg: true, type: "podi" },
  { id: 28, name: "Palli Karam", category: "Karam Podis", price: "₹100", image: "https://www.godavarivantillu.com/cdn/shop/products/PalliKaramPodi.jpg?v=1627681911", isVeg: true, type: "podi" },
  { id: 29, name: "Nalleru Karam", category: "Karam Podis", price: "₹115", image: "https://i0.wp.com/swathihomefoods.in/wp-content/uploads/2025/02/nalla-karam.webp?fit=800%2C800&ssl=1", isVeg: true, type: "podi" },
  { id: 30, name: "Kothimeera Karam", category: "Karam Podis", price: "₹105", image: "https://bandarmithai.in/cdn/shop/products/WhatsAppImage2021-07-27at7.59.28PM.jpg?v=1628176093", isVeg: true, type: "podi" },
  { id: 31, name: "Kandi Podi", category: "Karam Podis", price: "₹95", image: "https://www.vahrehvah.com/indianfood_org/wp-content/uploads/2010/12/ygVUQXjHId.jpg", isVeg: true, type: "podi" },
  { id: 32, name: "Pappula Karam", category: "Karam Podis", price: "₹100", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jDB89NyoYyN3dhVHw7cQXCSJ1syg_Xu1bA&s", isVeg: true, type: "podi" },
  { id: 33, name: "Karivepaku Karam", category: "Karam Podis", price: "₹110", image: "https://www.whiskaffair.com/wp-content/uploads/2021/01/Karivepaku-Podi-2-3.jpg", isVeg: true, type: "podi" },
  { id: 34, name: "Nuvvula Karam", category: "Karam Podis", price: "₹105", image: "https://bandarmithai.in/cdn/shop/products/nuvvula_karam.jpg?v=1617381294", isVeg: true, type: "podi" },
  { id: 35, name: "Avisaginjalu Karam", category: "Karam Podis", price: "₹120", image:"https://vismaifood.com/storage/app/uploads/public/b03/67c/ea7/thumb__700_0_0_0_auto.jpg", isVeg: true, type: "podi" },
  { id: 36, name: "Kobbari Karam", category: "Karam Podis", price: "₹115", image: "https://i0.wp.com/ahahomefoods.com/wp-content/uploads/2023/02/Kobbari-karam-Podi.jpg?fit=600%2C600&ssl=1", isVeg: true, type: "podi" },
  { id: 37, name: "Vellulli Karam", category: "Karam Podis", price: "₹110", image: "https://sitarafoods.com/wp-content/uploads/2022/07/02-36.jpg", isVeg: true, type: "podi" },
  { id: 38, name: "Miriyala Karam", category: "Karam Podis", price: "₹100", image: "https://momssnacksbox.com/wp-content/uploads/2021/05/nalla-karam-podi-2.jpg", isVeg: true, type: "podi" },
  { id: 39, name: "Munagaku Karam", category: "Karam Podis", price: "₹105", image: "https://nmfoodsofficial.com/wp-content/uploads/2024/08/mungaku-karam.jpg", isVeg: true, type: "podi" },
  { id: 40, name: "Nalla Karam", category: "Karam Podis", price: "₹95", image: "https://cdn.dotpe.in/longtail/store-items/6934651/i4qwAyhw.jpeg", isVeg: true, type: "podi" },

// 🍪 SNACKS & SWEETS
{ id: 101, name: "Ariselu", category: "Sweets", subCategory: "Traditional Sweets", price: "₹140", image: "https://vellankifoods.com/cdn/shop/products/ariselu_ghee_1200x1200.jpg?v=1679896343", isVeg: true, type: "snack" },
{ id: 102, name: "Nuvvula Ariselu", category: "Sweets", subCategory: "Traditional Sweets", price: "₹150", image: "https://savithrammas.com/site/image/cache/catalog/products/Nuvvula-Ariselu(Ghee)/Nuvvula%20Ariselu-800x800.jpg", isVeg: true, type: "snack" },
{ id: 103, name: "Bhatani Green/Red", category: "Snacks", subCategory: "Savory Snacks", price: "₹130", image: "https://thepeskyvegan.com/wp-content/uploads/2022/06/roasted-peas-feature.jpg", isVeg: true, type: "snack" },
{ id: 104, name: "Masala Bundhi", category: "Snacks", subCategory: "Savory Snacks", price: "₹120", image: "https://madhurasrecipe.com/wp-content/uploads/2020/10/Masala-Boondi-post.jpg", isVeg: true, type: "snack" },
{ id: 105, name: "Minapa Chakkarallu", category: "Snacks", subCategory: "Savory Snacks", price: "₹130", image: "https://i.ytimg.com/vi/8XLhUARI5rk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDW-RPA28_Xo1Ns7vLRrzILGzW9Sg", isVeg: true, type: "snack" },
{ id: 106, name: "Minapa Sanna Chakkaralu", category: "Snacks", subCategory: "Savory Snacks", price: "₹135", image: "https://sakalavarisyamfoods.com/wp-content/uploads/2022/11/Minapa-Chakralu.jpg", isVeg: true, type: "snack" },
{ id: 107, name: "Janthikalu", category: "Snacks", subCategory: "Savory Snacks", price: "₹120", image: "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/sujatha-ratnala145571392356c46e826052e.jpeg", isVeg: true, type: "snack" },
{ id: 108, name: "Chekkalu", category: "Snacks", subCategory: "Savory Snacks", price: "₹110", image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/06/chekkalu-recipe-480x270.jpg", isVeg: true, type: "snack" },
{ id: 110, name: "Gavvalu Spice", category: "Snacks", subCategory: "Savory Snacks", price: "₹130", image: "https://www.godavarivantillu.com/cdn/shop/products/KaramGavvalu_HotGavvalu.png?v=1604850541", isVeg: true, type: "snack" },
{ id: 111, name: "Sugar Gavvalu", category: "Sweets", subCategory: "Traditional Sweets", price: "₹140", image: "https://www.telanganapindivantalu.in/wp-content/uploads/2019/12/gavvalu-sugar.jpg", isVeg: true, type: "snack" },
{ id: 112, name: "Ballam Gavvalu", category: "Sweets", subCategory: "Traditional Sweets", price: "₹145", image: "https://www.godavarivantillu.com/cdn/shop/products/bellam-gavvalu-original-godavari-recipe-445.png?v=1638882730", isVeg: true, type: "snack" },
{ id: 113, name: "Cornflex", category: "Snacks", subCategory: "Savory Snacks", price: "₹130", image: "https://cherrypick.city/cdn/shop/products/Corn_Flakes-_1_-720x400.jpg?v=1647819712", isVeg: true, type: "snack" },
{ id: 114, name: "Atukula Mixter", category: "Snacks", subCategory: "Savory Snacks", price: "₹125", image: "https://www.godavarivantillu.com/cdn/shop/files/peacocklife4555-Edit_a8244da5-23d8-4e38-a9ad-edb81416d3fd-removebg-preview_1.png?v=1709700897", isVeg: true, type: "snack" },
{ id: 115, name: "Misurpak", category: "Sweets", subCategory: "Traditional Sweets", price: "₹180", image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/mysore-pak.jpg", isVeg: true, type: "snack" },
{ id: 116, name: "Gulabjamun", category: "Sweets", subCategory: "Traditional Sweets", price: "₹190", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30Cs6kNaab0eF8hWt37Htc4SVSIG3rNj3WQ&s", isVeg: true, type: "snack" },
{ id: 117, name: "Kajalu", category: "Sweets", subCategory: "Traditional Sweets", price: "₹160", image: "https://www.godavarivantillu.com/cdn/shop/products/tapeswaram-madatha-kaja-331_1200x1200.jpg?v=1637866872", isVeg: true, type: "snack" },
{ id: 118, name: "Dal Pappu", category: "Snacks", subCategory: "Savory Snacks", price: "₹120", image: "https://anusharaji.wordpress.com/wp-content/uploads/2017/02/chana_fried.jpg", isVeg: true, type: "snack" },
{ id: 119, name: "Channa Masala", category: "Snacks", subCategory: "Savory Snacks", price: "₹125", image: "https://sinfullyspicy.com/wp-content/uploads/2023/03/1200-by-1200-images-6.jpg", isVeg: true, type: "snack" },
{ id: 120, name: "Palli Pakodi", category: "Snacks", subCategory: "Savory Snacks", price: "₹135", image: "https://minnieintiruchulu.com/wp-content/uploads/2025/03/1000212314.jpg", isVeg: true, type: "snack" },
{ id: 121, name: "Chakodi", category: "Snacks", subCategory: "Savory Snacks", price: "₹125", image: "https://ayrahomefoods.com/wp-content/uploads/2025/05/AHF-16.jpg", isVeg: true, type: "snack" },
{ id: 122, name: "Pappu Chakodi", category: "Snacks", subCategory: "Savory Snacks", price: "₹130", image: "https://www.godavarivantillu.com/cdn/shop/products/SpecialNarayanaLankaPappuChegodiwithourfoodcolor.png?v=1596976258", isVeg: true, type: "snack" },
{ id: 123, name: "Kobari Loveju", category: "Sweets", subCategory: "Traditional Sweets", price: "₹150", image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2013/10/coconut-laddu-recipe-with-jaggery.webp", isVeg: true, type: "snack" },
{ id: 124, name: "Bundhi Metaee", category: "Sweets", subCategory: "Traditional Sweets", price: "₹140", image: "https://vellankifoods.com/cdn/shop/products/boondi_mithai_atchu_1200x1200.jpg?v=1680179384", isVeg: true, type: "snack" },
{ id: 125, name: "Kajjikayalu", category: "Sweets", subCategory: "Traditional Sweets", price: "₹160", image: "https://www.masalakorb.com/wp-content/uploads/2015/03/Kajjikayalu-Recipe-Traditional-Baked-V6-500x500.jpg", isVeg: true, type: "snack" },
// 🍯 LADDUS (Under Sweets)
{ id: 139, name: "Minapa Laddu(no sugar)", category: "Sweets", subCategory: "Laddus", price: "₹160", image: "https://www.laddupallem.com/cdn/shop/files/MinapaLaddu.jpg?v=1746120121", isVeg: true, type: "snack" },
{ id: 140, name: "Jonna Laddu(no sugar)", category: "Sweets", subCategory: "Laddus", price: "₹150", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jH1mv75-29HgxADs5DwFS-N4js5qCkiRCQ&s", isVeg: true, type: "snack" },
{ id: 141, name: "Koralu Laddu(no sugar)", category: "Sweets", subCategory: "Laddus", price: "₹160", image: "https://laddubox.in/cdn/shop/products/rendered_fa297f57-0ca3-4d65-a7a5-c5ac4c4dbd35_2048x.jpg?v=1603863150", isVeg: true, type: "snack" },
{ id: 142, name: "Nuvvula Laddu(no sugar)", category: "Sweets", subCategory: "Laddus", price: "₹150", image: "https://savithrammas.com/site/image/cache/catalog/products/Nuvvula-Laddu/Nuvvula%20Laddu%201-800x800.jpg", isVeg: true, type: "snack" },
{ id: 143, name: "Avisaginjala Laddu(no sugar)", category: "Sweets", subCategory: "Laddus", price: "₹170", image: "https://kandrafoods.com/wp-content/uploads/2021/06/flaxseed-ladoo-recipe-3.jpg", isVeg: true, type: "snack" },
{ id: 144, name: "Ragi Laddu(no sugar)", category: "Sweets", subCategory: "Laddus", price: "₹150", image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/ragi-ladoo-1-500x500.jpg", isVeg: true, type: "snack" },
{ id: 145, name: "Pappu Undalu(no sugar)", category: "Sweets", subCategory: "Laddus", price: "₹150", image: "https://3.bp.blogspot.com/-2xXMUdJAujs/TXzwAQSHrfI/AAAAAAAABdI/kgX0070Cuq0/s1600/Putnala%2Bpappu%2Bvundalu.JPG", isVeg: true, type: "snack" },

// 🍪 BISCUITS (Under Snacks)
{ id: 147, name: "Munagaku Biscuits(no maida)", category: "Snacks", subCategory: "Biscuits", price: "₹130", image: "https://i.ytimg.com/vi/GQbdZutcJTM/sddefault.jpg", isVeg: true, type: "snack" },
{ id: 148, name: "Ragi Biscuits(no maida)", category: "Snacks", subCategory: "Biscuits", price: "₹125", image: "https://nativespecial.com/wp-content/uploads/2019/11/Ragi-Bicuit_DP.jpg", isVeg: true, type: "snack" },
{ id: 149, name: "Jonna Biscuits(no maida)", category: "Snacks", subCategory: "Biscuits", price: "₹120", image: "https://cdn.dotpe.in/longtail/store-items/4882616/caXWIc4X.jpeg", isVeg: true, type: "snack" },
{ id: 150, name: "Badam Biscuits(no maida)", category: "Snacks", subCategory: "Biscuits", price: "₹140", image: "https://www.yummytummyaarthi.com/wp-content/uploads/2018/05/1-6.jpg", isVeg: true, type: "snack" },
{ id: 151, name: "Kaju Biscuits(no maida)", category: "Snacks", subCategory: "Biscuits", price: "₹140", image: "https://ollisbakehouse.com/cdn/shop/files/square_9ccc1756-5d4d-47bc-890b-160925cb8d26.jpg?v=1703763925", isVeg: true, type: "snack" },
{ id: 152, name: "Dry Fruit Mixed Biscuits(no maida)", category: "Snacks", subCategory: "Biscuits", price: "₹150", image: "https://www.naario.com/cdn/shop/articles/0e5abe56-f8a9-4dcd-bd55-f898361b1027-60d9e89672a53a000199bd9c.jpg?v=1705669828&width=2000", isVeg: true, type: "snack" },

];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const [cart, setCart] = useState<{ product: Product; qty: number }[]>(() =>
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add to Cart
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.product.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  // ✅ WhatsApp Checkout including Total Price
  const checkoutWhatsApp = () => {
    if (cart.length === 0) return alert("Your cart is empty!");

    const totalPrice = cart.reduce(
      (sum, item) => sum + parseInt(item.product.price.replace("₹", "")) * item.qty,
      0
    );

    const message = encodeURIComponent(
      `Hello! I want to order:\n\n${cart
        .map(
          (item, i) =>
            `${i + 1}. ${item.product.name} - ${item.qty} qty - ₹${
              parseInt(item.product.price.replace("₹", "")) * item.qty
            }`
        )
        .join("\n")}\n\nTotal Price: ₹${totalPrice}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  // ✅ Search + Filter
  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" || p.category === selectedCategory)
  );

  const totalQty = cart.reduce((t, item) => t + item.qty, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <img className="absolute inset-0 w-full h-full object-cover opacity-40" src={heroImage} />
        
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Authentic Indian Flavors Delivered
          </h1>

          <Button
            className="mt-6"
            onClick={() =>
              document.getElementById("products-section")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Explore Products
          </Button>
        </div>
      </section>

      {/* Products */}
      <section id="products-section" className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Our Products</h2>

          {/* ✅ Search Bar Visible & Styled */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-lg pl-10 py-2 w-64 shadow-sm focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const found = cart.find((i) => i.product.id === product.id);

            return (
              <div key={product.id} className="border rounded-xl shadow bg-white p-3 relative">
                {/* Veg Icon ✅ */}
                <span
                  className={`absolute top-2 left-2 w-4 h-4 rounded-full ${
                    product.isVeg ? "bg-green-600" : "bg-red-600"
                  }`}
                />

                <img src={product.image} className="w-full h-48 object-cover rounded-md" />

                <div className="mt-3 text-center">
                  <h3 className="font-bold">{product.name}</h3>
                  <p className="text-gray-500">{product.price}</p>

                  {/* ✅ Updated Quantity UI Logic */}
                  <div className="mt-3">
                    {!found ? (
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart 🛒
                      </Button>
                    ) : (
                      <div className="flex justify-center items-center gap-2">
                        <Button
                          className="bg-red-500 hover:bg-red-600 text-white px-3"
                          onClick={() =>
                            setCart((prev) =>
                              prev
                                .map((item) =>
                                  item.product.id === product.id
                                    ? { ...item, qty: item.qty - 1 }
                                    : item
                                )
                                .filter((item) => item.qty > 0)
                            )
                          }
                        >
                          -1
                        </Button>

                        <span className="font-bold">{found.qty}</span>

                        <Button
                          className="bg-green-500 hover:bg-green-600 text-white px-3"
                          onClick={() => addToCart(product)}
                        >
                          +1
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ✅ Floating WhatsApp Button */}
      <Button
        onClick={checkoutWhatsApp}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl"
      >
        <MessageCircle className="w-7 h-7" />
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">
            {totalQty}
          </span>
        )}
      </Button>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
    {/* Left Section: Brand and Copyright */}
    <div>
      <h2 className="text-xl font-semibold">© 2025 Btech Ruchulu</h2>
      <p className="text-gray-400 text-sm">All Rights Reserved</p>
    </div>

    {/* Right Section: Contact Info */}
    <div className="text-gray-300">
      <ul className="space-y-1">
        <li>
          📞 <span className="font-medium">Contact:</span> 7036912867
        </li>
        <li>
          📍 <span className="font-medium">Address:</span> Survey No. 128/4B, Vitalpuram (V),
          Thallur (M), 523264, Prakasam District, AP
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom Line */}
  <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
    Made with ❤️ by <span className="text-white font-medium">Btech Ruchulu</span>
  </div>
</footer>

    </div>
  );
};

export default Index;
