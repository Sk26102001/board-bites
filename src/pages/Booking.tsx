

















// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { CalendarCheck, ChevronDown } from "lucide-react";

// // ────────────────────────────────────────────────
// // Cart data with prices (you can change these values)
// // ────────────────────────────────────────────────
// const cartOptions = [
//   {
//     name: "Breakfast Cart",
//     basePrice: 0,
//     selectable: [
//       { name: "Keema", price: 45 },
//       { name: "Sausage", price: 38 },
//       { name: "Foul", price: 32 },
//       { name: "Balaleet", price: 35 },
//       { name: "Scrambled Egg", price: 28 },
//       { name: "Haloumi", price: 42 },
//       { name: "Shakshouka", price: 40 },
//       { name: "Labneh", price: 25 },
//       { name: "Mozzarella", price: 35 },
//       { name: "Labneh with Zaatar", price: 28 },
//       { name: "Creamy Cheese", price: 30 },
//       { name: "Cheddar", price: 32 },
//       { name: "Burrata", price: 55 },
//       { name: "Feta", price: 38 },
//       { name: "Puratha", price: 20 },
//       { name: "Lebanese Bread", price: 15 },
//       { name: "Brown Bread", price: 12 },
//       { name: "Toast", price: 10 },
//       { name: "Mini Croissant", price: 18 },
//       { name: "Strawberry", price: 25 },
//       { name: "Grapes", price: 22 },
//       { name: "Makdous", price: 28 },
//       { name: "Dates", price: 30 },
//       { name: "Honey", price: 35 },
//       { name: "Jam", price: 20 },
//     ],
//     complementary: [
//       { name: "Black Olive", price: 0 },
//       { name: "Green Olive", price: 0 },
//       { name: "Grilled Olive", price: 0 },
//       { name: "Cherry Tomato", price: 0 },
//       { name: "Cucumber Sticks", price: 0 },
//       { name: "Carrot Sticks", price: 0 },
//       { name: "Extra Napkins", price: 0 },
//       { name: "Disposable Plates", price: 0 },
//     ]
//   },
//   // Sandwich Cart
//   {
//     name: "Sandwich Cart",
//     basePrice: 0,
//     selectable: [
//       { name: "Tuna", price: 45 },
//       { name: "Salami", price: 55 },
//       { name: "Spicy Salami", price: 58 },
//       { name: "Bresaola", price: 65 },
//       { name: "Roasted Chicken Breast", price: 48 },
//       { name: "Turkey", price: 50 },
//       { name: "Pepperoni", price: 52 },
//       { name: "Rocca", price: 12 },
//       { name: "Tomato", price: 10 },
//       { name: "Pickles", price: 8 },
//       { name: "Cucumber", price: 8 },
//       { name: "Jalapeno", price: 10 },
//       { name: "Iceberg Lettuce", price: 10 },
//       { name: "Sun-Dried Tomato", price: 18 },
//       { name: "Pesto", price: 22 },
//       { name: "Mustard", price: 8 },
//       { name: "Honey Mustard", price: 12 },
//       { name: "Chipotle", price: 15 },
//       { name: "BBQ", price: 12 },
//       { name: "Guacamole", price: 25 },
//       { name: "Thousand Island", price: 15 },
//     ],
//     complementary: [
//       { name: "Ciabatta Bread", price: 0 },
//       { name: "Paper Napkins", price: 0 },
//       { name: "Disposable Cutlery", price: 0 },
//       // { name: "Extra Sauce Portions", price: 0 },
//     ]
//   },
//   // Pizza Cart
//   {
//     name: "Pizza Cart",
//     basePrice: 0,
//     selectable: [
//       { name: "Pepperoni", price: 35 },
//       { name: "Salami", price: 38 },
//       { name: "Chicken Cubes", price: 45 },
//       { name: "Tuna", price: 42 },
//       { name: "Ground Beef", price: 40 },
//       { name: "Mozzarella", price: 28 },
//       { name: "Cheddar Blend", price: 30 },
//       { name: "Parmesan", price: 35 },
//       { name: "Tomato", price: 10 },
//       { name: "Olives", price: 12 },
//       { name: "Mushroom", price: 15 },
//       { name: "Bell Pepper", price: 12 },
//       { name: "Pineapple", price: 18 },
//       { name: "Jalapeño", price: 10 },
//     ],
//     complementary: [
//       { name: "Pizza Dough", price: 0 },
//       { name: "Signature Marinara", price: 0 },
//       { name: "Chili Flakes", price: 0 },
//       { name: "Oregano Packets", price: 0 },
//       { name: "Disposable Plates", price: 0 },
//     ]
//   },
//   // Cheese Cart
//   {
//     name: "Cheese Cart",
//     basePrice: 0,
//     selectable: [
//       { name: "Cheddar", price: 32 },
//       { name: "Blue Cheese", price: 55 },
//       { name: "Brie", price: 65 },
//       { name: "Parmesan", price: 40 },
//       { name: "Feta", price: 38 },
//       { name: "Labneh balls with Zaatar", price: 35 },
//       { name: "Salami", price: 50 },
//       { name: "Prosciutto", price: 70 },
//       { name: "Bresaola", price: 75 },
//       { name: "Grapes", price: 22 },
//       { name: "Figs", price: 35 },
//       { name: "Walnuts", price: 28 },
//       { name: "Almonds", price: 30 },
//       { name: "Honey", price: 35 },
//     ],
//     complementary: [
//       { name: "Baguette Bread", price: 0 },
//       { name: "Crackers", price: 0 },
//       { name: "Extra Toothpicks", price: 0 },
//       { name: "Cheese Knives (disposable)", price: 0 },
//     ]
//   },
//   // Sweets Cart
//   {
//     name: "Sweets Cart",
//     basePrice: 0,
//     selectable: [
//       { name: "Brownie", price: 25 },
//       { name: "Croissant", price: 18 },
//       { name: "Strawberry", price: 25 },
//       { name: "Banana", price: 15 },
//       { name: "Blueberry", price: 28 },
//       { name: "Raspberry", price: 30 },
//       { name: "KitKat", price: 20 },
//       { name: "M&M's", price: 22 },
//       { name: "Marshmallows", price: 18 },
//       { name: "Gummy Bears", price: 20 },
//       { name: "Caramel Sauce", price: 25 },
//       { name: "Chocolate Hazelnut Sauce", price: 28 },
//       { name: "White Chocolate Sauce", price: 28 },
//     ],
//     complementary: [
//       { name: "Disposable Spoons", price: 0 },
//       { name: "Napkins", price: 0 },
//       { name: "Small Serving Cups", price: 0 },
//       { name: "Sprinkles (extra)", price: 0 },
//     ]
//   },
//   // Candy Cart
//   {
//     name: "Candy Cart",
//     basePrice: 0,
//     selectable: [
//       { name: "Cola Pacifiers", price: 15 },
//       { name: "Tutti Frutti Rings", price: 18 },
//       { name: "Rainbow Sea", price: 20 },
//       { name: "Strawberry Lips", price: 16 },
//       { name: "Apple", price: 12 },
//       { name: "Grapes", price: 22 },
//       { name: "Mangoes", price: 25 },
//       { name: "Kiwi", price: 22 },
//       { name: "Popcorn", price: 15 },
//       { name: "Pretzels", price: 12 },
//       { name: "Marshmallow", price: 18 },
//       { name: "Gummy Bears", price: 20 },
//     ],
//     complementary: [
//       { name: "All options are vegan", price: 0 },
//       { name: "Small Candy Bags", price: 0 },
//       { name: "Disposable Gloves", price: 0 },
//       { name: "Napkins", price: 0 },
//     ]
//   },
//   // Drinks Cart
//   {
//     name: "Drinks Cart",
//     basePrice: 0,
//     selectable: [
//       { name: "Pink Champagne", price: 65 },
//       { name: "Iconic Strawberry Lemonade", price: 35 },
//       { name: "Pina Colada", price: 48 },
//       { name: "Blue Hawaiian", price: 45 },
//       { name: "Strawberry Slushie", price: 38 },
//       { name: "Frozen Lemonade", price: 32 },
//       { name: "Vimto", price: 30 },
//       { name: "Blue Lagoon", price: 40 },
//       { name: "Fresh Orange Juice", price: 28 },
//       { name: "Lemon Mint", price: 25 },
//     ],
//     complementary: [
//       { name: "Cups / Glasses", price: 0 },
//       { name: "Straws", price: 0 },
//       { name: "Mint & Fruit Garnishes", price: 0 },
//       { name: "Ice Packs", price: 0 },
//       { name: "Napkins", price: 0 },
//     ]
//   },
// ];

// // ────────────────────────────────────────────────
// // Image mapping – every item has an image
// // ────────────────────────────────────────────────
// const itemImages: Record<string, string> = {
//   // Breakfast
//   "Keema": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=80",
//   "Sausage": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Foul": "https://images.unsplash.com/photo-1610612769822-5a0f0c6e0e1f?w=80",
//   "Balaleet": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Scrambled Egg": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=80",
//   "Haloumi": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Shakshouka": "https://images.unsplash.com/photo-1590419858928-7a3a6e8e0e1f?w=80",
//   "Labneh": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Mozzarella": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Labneh with Zaatar": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Creamy Cheese": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Cheddar": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Burrata": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Feta": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Puratha": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=80",
//   "Lebanese Bread": "https://images.unsplash.com/photo-1574071318508-1cdbab80d174?w=80",
//   "Brown Bread": "https://images.unsplash.com/photo-1559054663-e8d23213f55c?w=80",
//   "Toast": "https://images.unsplash.com/photo-1559054663-e8d23213f55c?w=80",
//   "Mini Croissant": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=80",
//   "Strawberry": "https://images.unsplash.com/photo-1601001435828-419e309a2f53?w=80",
//   "Grapes": "https://images.unsplash.com/photo-1425934398893-310a010a40f9?w=80",
//   "Makdous": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Dates": "https://images.unsplash.com/photo-1615485290383-3a6a0e9e8e8e?w=80",
//   "Honey": "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=80",
//   "Jam": "https://images.unsplash.com/photo-1589924691995-400dc9ecc0af?w=80",

//   // Sandwich
//   "Tuna": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Salami": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Spicy Salami": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Bresaola": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Roasted Chicken Breast": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Turkey": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Pepperoni": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=80",
//   "Rocca": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Tomato": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",
//   "Pickles": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Cucumber": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=80",
//   "Jalapeno": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",
//   "Iceberg Lettuce": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Sun-Dried Tomato": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",
//   "Pesto": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Mustard": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Honey Mustard": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Chipotle": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "BBQ": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Guacamole": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Thousand Island": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",

//   // Pizza
//   "Chicken Cubes": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=80",
//   "Ground Beef": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   // "Mozzarella": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Cheddar Blend": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Parmesan": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   // "Tomato": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",
//   "Olives": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Mushroom": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=80",
//   "Bell Pepper": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",
//   "Pineapple": "https://images.unsplash.com/photo-1562764652-3d7e8e8e8e8e?w=80",
//   "Jalapeño": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",

//   // Cheese
//   "Blue Cheese": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Brie": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Prosciutto": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Figs": "https://images.unsplash.com/photo-1562764652-3d7e8e8e8e8e?w=80",
//   "Walnuts": "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=80",

//   // Sweets
//   "Brownie": "https://images.unsplash.com/photo-1601001435828-419e309a2f53?w=80",
//   "Croissant": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=80",
//   "Banana": "https://images.unsplash.com/photo-1601001435828-419e309a2f53?w=80",
//   "Blueberry": "https://images.unsplash.com/photo-1425934398893-310a010a40f9?w=80",
//   "Raspberry": "https://images.unsplash.com/photo-1425934398893-310a010a40f9?w=80",
//   "KitKat": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=80",
//   "M&M's": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=80",
//   "Marshmallows": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=80",
//   "Gummy Bears": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=80",
//   "Caramel Sauce": "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=80",

//   // Candy
//   "Popcorn": "https://images.unsplash.com/photo-1578849278610-5d0a9d5f8e8e?w=80",
//   "Pretzels": "https://images.unsplash.com/photo-1578849278610-5d0a9d5f8e8e?w=80",

//   // Drinks
//   "Pina Colada": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=80",
//   "Blue Hawaiian": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=80",
//   "Strawberry Slushie": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=80",
//   "Fresh Orange Juice": "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=80",
//   "Lemon Mint": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=80",

//   // Fallback
//   "DEFAULT": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=80"
// };

// export default function BookingPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     guests: "",
//     location: "",
//     cart: "",
//     notes: "",
//     selectedMainItems: [] as { name: string; price: number }[],
//     selectedComplementary: [] as { name: string; price: number }[],
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const selectedCart = cartOptions.find((c) => c.name === form.cart);

//   const toggleMainItem = (item: { name: string; price: number }) => {
//     setForm((prev) => {
//       const exists = prev.selectedMainItems.some(i => i.name === item.name);
//       const updated = exists
//         ? prev.selectedMainItems.filter(i => i.name !== item.name)
//         : [...prev.selectedMainItems, item];
//       return { ...prev, selectedMainItems: updated };
//     });
//   };

//   const toggleComplementary = (item: { name: string; price: number }) => {
//     setForm((prev) => {
//       const exists = prev.selectedComplementary.some(i => i.name === item.name);
//       const updated = exists
//         ? prev.selectedComplementary.filter(i => i.name !== item.name)
//         : [...prev.selectedComplementary, item];
//       return { ...prev, selectedComplementary: updated };
//     });
//   };

//   const calculateTotal = () => {
//     const mainTotal = form.selectedMainItems.reduce((sum, i) => sum + i.price, 0);
//     const compTotal = form.selectedComplementary.reduce((sum, i) => sum + i.price, 0);
//     return mainTotal + compTotal + (selectedCart?.basePrice || 0);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Booking submitted:", {
//       ...form,
//       total: calculateTotal(),
//     });
//     setSubmitted(true);
//   };

//   if (submitted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center px-4">
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           className="text-center max-w-md"
//         >
//           <CalendarCheck className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Booking Received!
//           </h2>
//           <p className="text-lg text-gray-600 mb-8">
//             Thank you for your order.<br />
//             Our team will contact you within 24 hours to confirm details.
//           </p>
//           <button
//             onClick={() => window.location.reload()}
//             className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary transition"
//           >
//             Book Another Cart
//           </button>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* Hero */}
//       <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
//           poster="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
//         >
//           <source src="./video.mp4" type="video/mp4" />
//         </video>

//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

//         <div className="relative z-10 text-center text-white px-6 max-w-5xl">
//           <motion.h1
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="text-4xl md:text-6xl font-bold mb-5 drop-shadow-2xl"
//           >
//             Book Your <span className="text-primary">Event Cart</span>
//           </motion.h1>

//           <motion.p
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="text-xl md:text-2xl mb-10 drop-shadow-lg max-w-3xl mx-auto"
//           >
//             Premium catering carts for breakfast, pizza, sandwiches, cheese boards, sweets & drinks
//           </motion.p>

//           <div className="flex flex-wrap justify-center gap-4 md:gap-6">
//             {[
//               "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400",
//               "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
//               "https://images.unsplash.com/photo-1559054663-e8d23213f55c?w=400",
//               "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400",
//               "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
//             ].map((url, i) => (
//               <motion.img
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 + i * 0.15, duration: 0.7 }}
//                 src={url}
//                 alt=""
//                 className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-2xl shadow-2xl border-4 border-white/30 transform hover:scale-110 transition-transform"
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Form */}
//       <div className="container mx-auto px-4 -mt-16 md:-mt-20 pb-16 relative z-10 max-w-5xl">
//         <motion.form
//           initial={{ y: 60, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           onSubmit={handleSubmit}
//           className="bg-white rounded-3xl shadow-2xl border border-gray-100/80 p-6 md:p-10 lg:p-12 space-y-10 backdrop-blur-sm"
//         >
//           {/* 1. Select Cart */}
//           <div className="space-y-5">
//             <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
//               <span className="text-primary">1.</span> Choose Your Cart
//             </h2>
//             <div className="relative">
//               <select
//                 name="cart"
//                 value={form.cart}
//                 onChange={(e) => {
//                   handleChange(e);
//                   // Reset selections on cart change
//                   setForm(prev => ({
//                     ...prev,
//                     selectedMainItems: [],
//                     selectedComplementary: [],
//                   }));
//                 }}
//                 required
//                 className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-lg appearance-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
//               >
//                 <option value="">Select cart type...</option>
//                 {cartOptions.map((cart) => (
//                   <option key={cart.name} value={cart.name}>
//                     {cart.name}
//                   </option>
//                 ))}
//               </select>
//               <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
//             </div>
//           </div>

//           {/* 2. Customize – image + price for every item */}
//           {form.cart && selectedCart && (
//             <div className="space-y-10 pt-6 border-t border-gray-200">
//               <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
//                 <span className="text-primary">2.</span> Customize Your Selection
//               </h2>

//               <div className="space-y-12">
//                 {/* Main Items */}
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-5">Main Items</h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[520px] overflow-y-auto pr-2">
//                     {selectedCart.selectable.map((item) => {
//                       const imgSrc = itemImages[item.name] || itemImages["DEFAULT"];
//                       const isSelected = form.selectedMainItems.some(i => i.name === item.name);

//                       return (
//                         <label
//                           key={item.name}
//                           className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
//                             isSelected
//                               ? "bg-emerald-50 border-emerald-500 shadow-sm"
//                               : "border-gray-200 hover:border-emerald-300 hover:bg-gray-50"
//                           }`}
//                         >
//                           {/* Image */}
//                           <div className="flex-shrink-0 w-14 h-14 rounded-md overflow-hidden border border-gray-200">
//                             <img
//                               src={imgSrc}
//                               alt={item.name}
//                               className="w-full h-full object-cover"
//                               loading="lazy"
//                               onError={(e) => (e.currentTarget.src = itemImages["DEFAULT"])}
//                             />
//                           </div>

//                           {/* Name + Price */}
//                           <div className="flex-1 flex justify-between items-center gap-2">
//                             <span className="font-medium text-sm">{item.name}</span>
//                             <span className="text-emerald-700 font-normal text-sm whitespace-nowrap">
//                               {item.price} AED
//                             </span>
//                           </div>

//                           <input
//                             type="checkbox"
//                             checked={isSelected}
//                             onChange={() => toggleMainItem(item)}
//                             className="h-5 w-5 rounded accent-emerald-600 flex-shrink-0"
//                           />
//                         </label>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* Complementary / Extras */}
//                 {selectedCart.complementary.length > 0 && (
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800 mb-5">Extras / Complementary</h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                       {selectedCart.complementary.map((item) => {
//                         const imgSrc = itemImages[item.name] || itemImages["DEFAULT"];
//                         const isSelected = form.selectedComplementary.some(i => i.name === item.name);

//                         return (
//                           <label
//                             key={item.name}
//                             className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
//                               isSelected
//                                 ? "bg-emerald-50 border-emerald-500 shadow-sm"
//                                 : "border-gray-200 hover:border-emerald-300 hover:bg-gray-50"
//                             }`}
//                           >
//                             {/* Image */}
//                             <div className="flex-shrink-0 w-14 h-14 rounded-md overflow-hidden border border-gray-200">
//                               <img
//                                 src={imgSrc}
//                                 alt={item.name}
//                                 className="w-full h-full object-cover"
//                                 loading="lazy"
//                                 onError={(e) => (e.currentTarget.src = itemImages["DEFAULT"])}
//                               />
//                             </div>

//                             {/* Name + Price */}
//                             <div className="flex-1 flex justify-between items-center gap-2">
//                               <span className="font-medium text-sm" >{item.name}</span>
//                               {item.price > 0 ? (
//                                 <span className="text-emerald-700 font-normal text-xs whitespace-nowrap">
//                                   {item.price} AED
//                                 </span>
//                               ) : (
//                                 <span className="text-gray-500 text-sm">Free</span>
//                               )}
//                             </div>

//                             <input
//                               type="checkbox"
//                               checked={isSelected}
//                               onChange={() => toggleComplementary(item)}
//                               className="h-5 w-5 rounded accent-emerald-600 flex-shrink-0"
//                             />
//                           </label>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* 3. Event Details */}
//           <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-gray-200">
//             <div className="space-y-5">
//               <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
//                 <span className="text-primary">3.</span> When & How Many
//               </h2>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Event Date</label>
//                 <input
//                   type="date"
//                   name="date"
//                   required
//                   value={form.date}
//                   onChange={handleChange}
//                   className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Number of Guests</label>
//                 <input
//                   type="number"
//                   name="guests"
//                   placeholder="Guest"
//                   min="1"
//                   required
//                   value={form.guests}
//                   onChange={handleChange}
//                   className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                 />
//               </div>
//             </div>

//             <div className="space-y-5">
//               <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3 ">
//                 <span className="text-primary">4.</span> Where & Who
//               </h2>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Event Location</label>
//                 <input
//                   type="text"
//                   name="location"
//                   required
//                   placeholder="Venue name / full address"
//                   value={form.location}
//                   onChange={handleChange}
//                   className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                 />
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Full Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     required
//                     value={form.name}
//                     onChange={handleChange}
//                     className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     required
//                     value={form.phone}
//                     onChange={handleChange}
//                     className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   required
//                   value={form.email}
//                   onChange={handleChange}
//                   className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Summary + Total */}
//           <div className="space-y-8 pt-8 border-t border-gray-200">
//             <div>
//               <label className="block text-gray-700 font-medium mb-2 text-lg">
//                 Special Requests / Notes
//               </label>
//               <textarea
//                 name="notes"
//                 rows={4}
//                 placeholder="Allergies, preferred setup time, decorations, delivery instructions..."
//                 value={form.notes}
//                 onChange={handleChange}
//                 className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
//               />
//             </div>

//             <div className="bg-emerald-50/50 p-6 md:p-8 rounded-2xl border border-emerald-100">
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h3>
//               <dl className="space-y-4 text-gray-700">
//                 <div className="flex justify-between">
//                   <dt className="font-medium">Selected Cart</dt>
//                   <dd className="font-semibold">{form.cart || "—"}</dd>
//                 </div>
//                 <div className="flex justify-between">
//                   <dt className="font-medium">Date</dt>
//                   <dd className="font-semibold">{form.date || "—"}</dd>
//                 </div>
//                 <div className="flex justify-between">
//                   <dt className="font-medium">Guests</dt>
//                   <dd className="font-semibold">{form.guests || "—"}</dd>
//                 </div>
//                 <div className="flex justify-between">
//                   <dt className="font-medium">Location</dt>
//                   <dd className="font-semibold break-words">{form.location || "—"}</dd>
//                 </div>

//                 <div className="pt-4 border-t border-emerald-200">
//                   <dt className="font-medium mb-2">Main Items</dt>
//                   <dd className="text-gray-600">
//                     {form.selectedMainItems.length > 0 ? (
//                       <div className="space-y-1">
//                         {form.selectedMainItems.map((item) => (
//                           <div key={item.name} className="flex justify-between text-sm">
//                             <span>{item.name}</span>
//                             <span>{item.price} AED</span>
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       "None selected"
//                     )}
//                   </dd>
//                 </div>

//                 <div className="pt-2">
//                   <dt className="font-medium mb-2">Extras / Complementary</dt>
//                   <dd className="text-gray-600">
//                     {form.selectedComplementary.length > 0 ? (
//                       <div className="space-y-1">
//                         {form.selectedComplementary.map((item) => (
//                           <div key={item.name} className="flex justify-between text-sm">
//                             <span>{item.name}</span>
//                             <span>{item.price > 0 ? `${item.price} AED` : "Free"}</span>
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       "None selected"
//                     )}
//                   </dd>
//                 </div>

//                 <div className="pt-4 border-t border-emerald-300 font-bold text-lg flex justify-between items-center">
//                   <dt>Estimated Total:</dt>
//                   <dd className="text-emerald-700 text-xl">
//                     {calculateTotal()} AED
//                   </dd>
//                 </div>
//               </dl>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-primary hover:bg-primary text-white py-5 rounded-xl font-bold text-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-100"
//             >
//               Submit Booking Request
//             </button>
//           </div>
//         </motion.form>
//       </div>
//     </main>
//   );
// }
































// import { useState } from "react";
// import { motion } from "framer-motion";
// import { CalendarCheck, ChevronDown } from "lucide-react";

// // ────────────────────────────────────────────────
// // Cart data with prices (you can change these values)
// // ────────────────────────────────────────────────
// const cartOptions = [
//   {
//     name: "Breakfast Cart",
//     basePrice: 0,
//      guestPackages: [
//       { label: "1-20 Guests", price: 2000 },
//       { label: "20-30 Guests", price: 2850 },
//       { label: "30-50 Guests", price: 4150 },
//     ],
//     stationPrice: 300,
//     selectable: [
//       { name: "Keema", price: 40 },
//       { name: "Sausage", price: 38 },
//       { name: "Foul", price: 32 },
//       { name: "Balaleet", price: 35 },
//       { name: "Scrambled Egg", price: 28 },
//       { name: "Haloumi", price: 42 },
//       { name: "Shakshouka", price: 40 },
//       { name: "Labneh", price: 25 },
//       { name: "Mozzarella", price: 35 },
//       { name: "Labneh with Zaatar", price: 28 },
//       { name: "Creamy Cheese", price: 30 },
//       { name: "Cheddar", price: 32 },
//       { name: "Burrata", price: 55 },
//       { name: "Feta", price: 38 },
//       { name: "Puratha", price: 20 },
//       { name: "Lebanese Bread", price: 15 },
//       { name: "Brown Bread", price: 12 },
//       { name: "Toast", price: 10 },
//       { name: "Mini Croissant", price: 18 },
//       { name: "Strawberry", price: 25 },
//       { name: "Grapes", price: 22 },
//       { name: "Makdous", price: 28 },
//       { name: "Dates", price: 30 },
//       { name: "Honey", price: 35 },
//       { name: "Jam", price: 20 },
//     ],
//     complementary: [
//       { name: "Black Olive", price: 0 },
//       { name: "Green Olive", price: 0 },
//       { name: "Grilled Olive", price: 0 },
//       { name: "Cherry Tomato", price: 0 },
//       { name: "Cucumber Sticks", price: 0 },
//       { name: "Carrot Sticks", price: 0 },
//       { name: "Extra Napkins", price: 0 },
//       { name: "Disposable Plates", price: 0 },
//     ]
//   },
//   // Sandwich Cart
//   {
//     name: "Sandwich Cart",
//     basePrice: 0,
//     guestPackages: [
//       { label: "1-20 Guests", price: 2000 },
//       { label: "20-30 Guests", price: 2850 },
//       { label: "30-50 Guests", price: 4150 },
//     ],
//     stationPrice: 300,
//     selectable: [
//       { name: "Tuna", price: 45 },
//       { name: "Salami", price: 55 },
//       { name: "Spicy Salami", price: 58 },
//       { name: "Bresaola", price: 65 },
//       { name: "Roasted Chicken Breast", price: 48 },
//       { name: "Turkey", price: 50 },
//       { name: "Pepperoni", price: 52 },
//       { name: "Rocca", price: 12 },
//       { name: "Tomato", price: 10 },
//       { name: "Pickles", price: 8 },
//       { name: "Cucumber", price: 8 },
//       { name: "Jalapeno", price: 10 },
//       { name: "Iceberg Lettuce", price: 10 },
//       { name: "Sun-Dried Tomato", price: 18 },
//       { name: "Pesto", price: 22 },
//       { name: "Mustard", price: 8 },
//       { name: "Honey Mustard", price: 12 },
//       { name: "Chipotle", price: 15 },
//       { name: "BBQ", price: 12 },
//       { name: "Guacamole", price: 25 },
//       { name: "Thousand Island", price: 15 },
//     ],
//     complementary: [
//       { name: "Ciabatta Bread", price: 0 },
//       { name: "Paper Napkins", price: 0 },
//       { name: "Disposable Cutlery", price: 0 },
//       // { name: "Extra Sauce Portions", price: 0 },
//     ]
//   },
//   // Pizza Cart
//   {
//     name: "Pizza Cart",
//     basePrice: 0,
//    guestPackages: [
//       { label: "1-20 Guests", price: 2200 },
//       { label: "20-30 Guests", price: 3050 },
//       { label: "30-50 Guests", price: 4350 },
//     ],
//     stationPrice: 300,
//     selectable: [
//       { name: "Pepperoni", price: 35 },
//       { name: "Salami", price: 38 },
//       { name: "Chicken Cubes", price: 45 },
//       { name: "Tuna", price: 42 },
//       { name: "Ground Beef", price: 40 },
//       { name: "Mozzarella", price: 28 },
//       { name: "Cheddar Blend", price: 30 },
//       { name: "Parmesan", price: 35 },
//       { name: "Tomato", price: 10 },
//       { name: "Olives", price: 12 },
//       { name: "Mushroom", price: 15 },
//       { name: "Bell Pepper", price: 12 },
//       { name: "Pineapple", price: 18 },
//       { name: "Jalapeño", price: 10 },
//     ],
//     complementary: [
//       { name: "Pizza Dough", price: 0 },
//       { name: "Signature Marinara", price: 0 },
//       { name: "Chili Flakes", price: 0 },
//       { name: "Oregano Packets", price: 0 },
//       { name: "Disposable Plates", price: 0 },
//     ]
//   },
//   // Cheese Cart
//   {
//     name: "Cheese Cart",
//     basePrice: 0,
//     guestPackages: [
//       { label: "1-20 Guests", price: 1800 },
//       { label: "20-30 Guests", price: 2650 },
//       { label: "30-50 Guests", price: 3950 },
//     ],
//     stationPrice: 300,
//     selectable: [
//       { name: "Cheddar", price: 32 },
//       { name: "Blue Cheese", price: 55 },
//       { name: "Brie", price: 65 },
//       { name: "Parmesan", price: 40 },
//       { name: "Feta", price: 38 },
//       { name: "Labneh balls with Zaatar", price: 35 },
//       { name: "Salami", price: 50 },
//       { name: "Prosciutto", price: 70 },
//       { name: "Bresaola", price: 75 },
//       { name: "Grapes", price: 22 },
//       { name: "Figs", price: 35 },
//       { name: "Walnuts", price: 28 },
//       { name: "Almonds", price: 30 },
//       { name: "Honey", price: 35 },
//     ],
//     complementary: [
//       { name: "Baguette Bread", price: 0 },
//       { name: "Crackers", price: 0 },
//       { name: "Extra Toothpicks", price: 0 },
//       { name: "Cheese Knives (disposable)", price: 0 },
//     ]
//   },
//   // Sweets Cart
//   {
//     name: "Sweets Cart",
//     basePrice: 0,
//    guestPackages: [
//       { label: "1-20 Guests", price: 500 },
//       { label: "20-30 Guests", price: 750 },
//       { label: "30-50 Guests", price: 1000 },
//     ],
//     stationPrice: 300,
//     selectable: [
//       { name: "Brownie", price: 25 },
//       { name: "Croissant", price: 18 },
//       { name: "Strawberry", price: 25 },
//       { name: "Banana", price: 15 },
//       { name: "Blueberry", price: 28 },
//       { name: "Raspberry", price: 30 },
//       { name: "KitKat", price: 20 },
//       { name: "M&M's", price: 22 },
//       { name: "Marshmallows", price: 18 },
//       { name: "Gummy Bears", price: 20 },
//       { name: "Caramel Sauce", price: 25 },
//       { name: "Chocolate Hazelnut Sauce", price: 28 },
//       { name: "White Chocolate Sauce", price: 28 },
//     ],
//     complementary: [
//       { name: "Disposable Spoons", price: 0 },
//       { name: "Napkins", price: 0 },
//       { name: "Small Serving Cups", price: 0 },
//       { name: "Sprinkles (extra)", price: 0 },
//     ]
//   },
//   // Candy Cart
//   {
//     name: "Candy Cart",
//     basePrice: 0,
//     guestPackages: [
//       { label: "1-20 Guests", price: 500 },
//       { label: "20-30 Guests", price: 750 },
//       { label: "30-50 Guests", price: 1000 },
//     ],
//     stationPrice: 300,
//     selectable: [
//       { name: "Cola Pacifiers", price: 15 },
//       { name: "Tutti Frutti Rings", price: 18 },
//       { name: "Rainbow Sea", price: 20 },
//       { name: "Strawberry Lips", price: 16 },
//       { name: "Apple", price: 12 },
//       { name: "Grapes", price: 22 },
//       { name: "Mangoes", price: 25 },
//       { name: "Kiwi", price: 22 },
//       { name: "Popcorn", price: 15 },
//       { name: "Pretzels", price: 12 },
//       { name: "Marshmallow", price: 18 },
//       { name: "Gummy Bears", price: 20 },
//     ],
//     complementary: [
//       { name: "All options are vegan", price: 0 },
//       { name: "Small Candy Bags", price: 0 },
//       { name: "Disposable Gloves", price: 0 },
//       { name: "Napkins", price: 0 },
//     ]
//   },
//   // Drinks Cart
//   {
//     name: "Drinks Cart",
//     basePrice: 0,
//     guestPackages: [
//       { label: "1-20 Guests", price: 500 },
//       { label: "20-30 Guests", price: 750 },
//       { label: "30-50 Guests", price: 1000 },
//     ],
//     stationPrice: 300,
//     selectable: [
//       { name: "Pink Champagne", price: 65 },
//       { name: "Iconic Strawberry Lemonade", price: 35 },
//       { name: "Pina Colada", price: 48 },
//       { name: "Blue Hawaiian", price: 45 },
//       { name: "Strawberry Slushie", price: 38 },
//       { name: "Frozen Lemonade", price: 32 },
//       { name: "Vimto", price: 30 },
//       { name: "Blue Lagoon", price: 40 },
//       { name: "Fresh Orange Juice", price: 28 },
//       { name: "Lemon Mint", price: 25 },
//     ],
//     complementary: [
//       { name: "Cups / Glasses", price: 0 },
//       { name: "Straws", price: 0 },
//       { name: "Mint & Fruit Garnishes", price: 0 },
//       { name: "Ice Packs", price: 0 },
//       { name: "Napkins", price: 0 },
//     ]
//   },
// ];

// // ────────────────────────────────────────────────
// // Image mapping – every item has an image
// // ────────────────────────────────────────────────
// const itemImages: Record<string, string> = {
//   // Breakfast
//   "Keema": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=80",
//   "Sausage": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Foul": "https://images.unsplash.com/photo-1610612769822-5a0f0c6e0e1f?w=80",
//   "Balaleet": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Scrambled Egg": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=80",
//   "Haloumi": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Shakshouka": "https://images.unsplash.com/photo-1590419858928-7a3a6e8e0e1f?w=80",
//   "Labneh": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Mozzarella": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Labneh with Zaatar": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Creamy Cheese": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Cheddar": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Burrata": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Feta": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Puratha": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=80",
//   "Lebanese Bread": "https://images.unsplash.com/photo-1574071318508-1cdbab80d174?w=80",
//   "Brown Bread": "https://images.unsplash.com/photo-1559054663-e8d23213f55c?w=80",
//   "Toast": "https://images.unsplash.com/photo-1559054663-e8d23213f55c?w=80",
//   "Mini Croissant": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=80",
//   "Strawberry": "https://images.unsplash.com/photo-1601001435828-419e309a2f53?w=80",
//   "Grapes": "https://images.unsplash.com/photo-1425934398893-310a010a40f9?w=80",
//   "Makdous": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Dates": "https://images.unsplash.com/photo-1615485290383-3a6a0e9e8e8e?w=80",
//   "Honey": "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=80",
//   "Jam": "https://images.unsplash.com/photo-1589924691995-400dc9ecc0af?w=80",

//   // Sandwich
//   "Tuna": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Salami": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Spicy Salami": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Bresaola": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Roasted Chicken Breast": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Turkey": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Pepperoni": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=80",
//   "Rocca": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Tomato": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",
//   "Pickles": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Cucumber": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=80",
//   "Jalapeno": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",
//   "Iceberg Lettuce": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Sun-Dried Tomato": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",
//   "Pesto": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Mustard": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Honey Mustard": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Chipotle": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "BBQ": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Guacamole": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Thousand Island": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",

//   // Pizza
//   "Chicken Cubes": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=80",
//   "Ground Beef": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   // "Mozzarella": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Cheddar Blend": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Parmesan": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   // "Tomato": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",
//   "Olives": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
//   "Mushroom": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=80",
//   "Bell Pepper": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",
//   "Pineapple": "https://images.unsplash.com/photo-1562764652-3d7e8e8e8e8e?w=80",
//   "Jalapeño": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",

//   // Cheese
//   "Blue Cheese": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Brie": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
//   "Prosciutto": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
//   "Figs": "https://images.unsplash.com/photo-1562764652-3d7e8e8e8e8e?w=80",
//   "Walnuts": "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=80",

//   // Sweets
//   "Brownie": "https://images.unsplash.com/photo-1601001435828-419e309a2f53?w=80",
//   "Croissant": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=80",
//   "Banana": "https://images.unsplash.com/photo-1601001435828-419e309a2f53?w=80",
//   "Blueberry": "https://images.unsplash.com/photo-1425934398893-310a010a40f9?w=80",
//   "Raspberry": "https://images.unsplash.com/photo-1425934398893-310a010a40f9?w=80",
//   "KitKat": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=80",
//   "M&M's": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=80",
//   "Marshmallows": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=80",
//   "Gummy Bears": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=80",
//   "Caramel Sauce": "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=80",

//   // Candy
//   "Popcorn": "https://images.unsplash.com/photo-1578849278610-5d0a9d5f8e8e?w=80",
//   "Pretzels": "https://images.unsplash.com/photo-1578849278610-5d0a9d5f8e8e?w=80",

//   // Drinks
//   "Pina Colada": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=80",
//   "Blue Hawaiian": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=80",
//   "Strawberry Slushie": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=80",
//   "Fresh Orange Juice": "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=80",
//   "Lemon Mint": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=80",

//   // Fallback
//   "DEFAULT": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=80"
// };

// export default function BookingPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     guests: "",
//     guestPackage: "",
//   withStation: false,
//     location: "",
//     cart: "",
//     notes: "",
//     selectedMainItems: [] as { name: string; price: number }[],
//     selectedComplementary: [] as { name: string; price: number }[],
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const selectedCart = cartOptions.find((c) => c.name === form.cart);

//   const toggleMainItem = (item: { name: string; price: number }) => {
//     setForm((prev) => {
//       const exists = prev.selectedMainItems.some(i => i.name === item.name);
//       const updated = exists
//         ? prev.selectedMainItems.filter(i => i.name !== item.name)
//         : [...prev.selectedMainItems, item];
//       return { ...prev, selectedMainItems: updated };
//     });
//   };

//   const toggleComplementary = (item: { name: string; price: number }) => {
//     setForm((prev) => {
//       const exists = prev.selectedComplementary.some(i => i.name === item.name);
//       const updated = exists
//         ? prev.selectedComplementary.filter(i => i.name !== item.name)
//         : [...prev.selectedComplementary, item];
//       return { ...prev, selectedComplementary: updated };
//     });
//   };

//   // const calculateTotal = () => {
//   //   const mainTotal = form.selectedMainItems.reduce((sum, i) => sum + i.price, 0);
//   //   const compTotal = form.selectedComplementary.reduce((sum, i) => sum + i.price, 0);
//   //   return mainTotal + compTotal + (selectedCart?.basePrice || 0);
//   // };

// //   const calculateTotal = () => {
// //   const selectedPackage = selectedCart?.guestPackages.find(
// //     (pkg) => pkg.label === form.guestPackage
// //   );

// //   const basePackagePrice = selectedPackage?.price || 0;

// //   const mainTotal = form.selectedMainItems.reduce(
// //     (sum, i) => sum + i.price,
// //     0
// //   );

// //   const compTotal = form.selectedComplementary.reduce(
// //     (sum, i) => sum + i.price,
// //     0
// //   );

// //   // const stationPrice =
// //   //   form.withStation && selectedCart?.stationExtra
// //   //     ? selectedCart.stationExtra
// //   //     : 0;
// //   const stationPrice =
// //   form.withStation && selectedCart?.stationPrice
// //     ? selectedCart.stationPrice
// //     : 0;

// //   return basePackagePrice + mainTotal + compTotal + stationPrice;
// // };

// const calculateTotal = () => {
//   const selectedPackage = selectedCart?.guestPackages.find(
//     (pkg) => pkg.label === form.guestPackage
//   );

//   const basePackagePrice = selectedPackage?.price || 0;

//   const stationPrice =
//     form.withStation && selectedCart?.stationPrice
//       ? selectedCart.stationPrice
//       : 0;

//   // Only package + station (no item prices)
//   return basePackagePrice + stationPrice;
// };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Booking submitted:", {
//       ...form,
//       total: calculateTotal(),
//     });
//     setSubmitted(true);
//   };

//   if (submitted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center px-4">
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           className="text-center max-w-md"
//         >
//           <CalendarCheck className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Booking Received!
//           </h2>
//           <p className="text-lg text-gray-600 mb-8">
//             Thank you for your order.<br />
//             Our team will contact you within 24 hours to confirm details.
//           </p>
//           <button
//             onClick={() => window.location.reload()}
//             className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary transition"
//           >
//             Book Another Cart
//           </button>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* Hero */}
//       <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
//           poster="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
//         >
//           <source src="./video.mp4" type="video/mp4" />
//         </video>

//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

//         <div className="relative z-10 text-center text-white px-6 max-w-5xl">
//           <motion.h1
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="text-4xl md:text-6xl font-bold mb-5 drop-shadow-2xl"
//           >
//             Book Your <span className="text-primary">Event Cart</span>
//           </motion.h1>

//           <motion.p
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="text-xl md:text-2xl mb-10 drop-shadow-lg max-w-3xl mx-auto"
//           >
//             Premium catering carts for breakfast, pizza, sandwiches, cheese boards, sweets & drinks
//           </motion.p>

//           <div className="flex flex-wrap justify-center gap-4 md:gap-6">
//             {[
//               "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400",
//               "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
//               "https://images.unsplash.com/photo-1559054663-e8d23213f55c?w=400",
//               "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400",
//               "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
//             ].map((url, i) => (
//               <motion.img
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 + i * 0.15, duration: 0.7 }}
//                 src={url}
//                 alt=""
//                 className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-2xl shadow-2xl border-4 border-white/30 transform hover:scale-110 transition-transform"
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Form */}
//       <div className="container mx-auto px-4 -mt-16 md:-mt-20 pb-16 relative z-10 max-w-5xl">
//         <motion.form
//           initial={{ y: 60, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           onSubmit={handleSubmit}
//           className="bg-white rounded-3xl shadow-2xl border border-gray-100/80 p-6 md:p-10 lg:p-12 space-y-10 backdrop-blur-sm"
//         >
//           {/* 1. Select Cart */}
//           <div className="space-y-5">
//             <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
//               <span className="text-primary">1.</span> Choose Your Cart
//             </h2>
//             <div className="relative">
//               <select
//                 name="cart"
//                 value={form.cart}
//                 onChange={(e) => {
//                   handleChange(e);
//                   // Reset selections on cart change
//                   setForm(prev => ({
//                     ...prev,
//                     selectedMainItems: [],
//                     selectedComplementary: [],
//                   }));
//                 }}
//                 required
//                 className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-lg appearance-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
//               >
//                 <option value="">Select cart type...</option>
//                 {cartOptions.map((cart) => (
//                   <option key={cart.name} value={cart.name}>
//                     {cart.name}
//                   </option>
//                 ))}
//               </select>
//               <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
//             </div>
//           </div>

//           {/* 2. Customize – image + price for every item */}
//           {form.cart && selectedCart && (
//             <div className="space-y-10 pt-6 border-t border-gray-200">
//               <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
//                 <span className="text-primary">2.</span> Customize Your Selection
//               </h2>

//               <div className="space-y-12">
//                 {/* Main Items */}
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-5">Main Items</h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[520px] overflow-y-auto pr-2">
//                     {selectedCart.selectable.map((item) => {
//                       const imgSrc = itemImages[item.name] || itemImages["DEFAULT"];
//                       const isSelected = form.selectedMainItems.some(i => i.name === item.name);

//                       return (
//                         <label
//                           key={item.name}
//                           className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
//                             isSelected
//                               ? "bg-emerald-50 border-emerald-500 shadow-sm"
//                               : "border-gray-200 hover:border-emerald-300 hover:bg-gray-50"
//                           }`}
//                         >
//                           {/* Image */}
//                           <div className="flex-shrink-0 w-14 h-14 rounded-md overflow-hidden border border-gray-200">
//                             <img
//                               src={imgSrc}
//                               alt={item.name}
//                               className="w-full h-full object-cover"
//                               loading="lazy"
//                               onError={(e) => (e.currentTarget.src = itemImages["DEFAULT"])}
//                             />
//                           </div>

//                           {/* Name + Price */}
//                           <div className="flex-1 flex justify-between items-center gap-2">
//                             <span className="font-normal text-lg">{item.name}</span>
//                             {/* <span className="text-emerald-700 font-normal text-sm whitespace-nowrap">
//                               {item.price} AED
//                             </span> */}
//                           </div>

//                           <input
//                             type="checkbox"
//                             checked={isSelected}
//                             onChange={() => toggleMainItem(item)}
//                             className="h-5 w-5 rounded accent-emerald-600 flex-shrink-0"
//                           />
//                         </label>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* Complementary / Extras */}
//                 {selectedCart.complementary.length > 0 && (
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800 mb-5">Extras / Complementary</h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                       {selectedCart.complementary.map((item) => {
//                         const imgSrc = itemImages[item.name] || itemImages["DEFAULT"];
//                         const isSelected = form.selectedComplementary.some(i => i.name === item.name);

//                         return (
//                           <label
//                             key={item.name}
//                             className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
//                               isSelected
//                                 ? "bg-emerald-50 border-emerald-500 shadow-sm"
//                                 : "border-gray-200 hover:border-emerald-300 hover:bg-gray-50"
//                             }`}
//                           >
//                             {/* Image */}
//                             <div className="flex-shrink-0 w-14 h-14 rounded-md overflow-hidden border border-gray-200">
//                               <img
//                                 src={imgSrc}
//                                 alt={item.name}
//                                 className="w-full h-full object-cover"
//                                 loading="lazy"
//                                 onError={(e) => (e.currentTarget.src = itemImages["DEFAULT"])}
//                               />
//                             </div>

//                             {/* Name + Price */}
//                             <div className="flex-1 flex justify-between items-center gap-2">
//                               <span className="font-medium text-sm" >{item.name}</span>
//                               {item.price > 0 ? (
//                                 <span className="text-emerald-700 font-normal text-xs whitespace-nowrap">
//                                   {item.price} AED
//                                 </span>
//                               ) : (
//                                 <span className="text-gray-500 text-sm">Free</span>
//                               )}
//                             </div>

//                             <input
//                               type="checkbox"
//                               checked={isSelected}
//                               onChange={() => toggleComplementary(item)}
//                               className="h-5 w-5 rounded accent-emerald-600 flex-shrink-0"
//                             />
//                           </label>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* 3. Event Details */}
//           <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-gray-200">
//             <div className="space-y-5">
//               <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
//                 <span className="text-primary">3.</span> When & How Many
//               </h2>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Event Date</label>
//                 <input
//                   type="date"
//                   name="date"
//                   required
//                   value={form.date}
//                   onChange={handleChange}
//                   className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                 />
//               </div>
//               {/* <div>
//                 <label className="block text-gray-700 font-medium mb-2">Number of Guests</label>
//                 <input
//                   type="number"
//                   name="guests"
//                   placeholder="Guest"
//                   min="1"
//                   required
//                   value={form.guests}
//                   onChange={handleChange}
//                   className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                 />
//               </div> */}

//               <div>
//   <label className="block text-gray-700 font-medium mb-2">
//     Select Guest Package
//   </label>

//   <select
//     name="guestPackage"
//     value={form.guestPackage}
//     onChange={handleChange}
//     required
//     className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
//   >
//     <option value="">Select guest range...</option>
//     {selectedCart?.guestPackages.map((pkg) => (
//       <option key={pkg.label} value={pkg.label}>
//         {pkg.label} — {pkg.price} AED
//       </option>
//     ))}
//   </select>



  
// </div>





//             </div>

//             <div className="space-y-5">
//               <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3 ">
//                 <span className="text-primary">4.</span> Where & Who
//               </h2>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Event Location</label>
//                 <input
//                   type="text"
//                   name="location"
//                   required
//                   placeholder="Venue name / full address"
//                   value={form.location}
//                   onChange={handleChange}
//                   className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                 />
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Full Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     required
//                     value={form.name}
//                     onChange={handleChange}
//                     className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     required
//                     value={form.phone}
//                     onChange={handleChange}
//                     className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   required
//                   value={form.email}
//                   onChange={handleChange}
//                   className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Summary + Total */}
//           <div className="space-y-8 pt-8 border-t border-gray-200">
//             <div>
//               <label className="block text-gray-700 font-medium mb-2 text-lg">
//                 Special Requests / Notes
//               </label>
//               <textarea
//                 name="notes"
//                 rows={4}
//                 placeholder="Allergies, preferred setup time, decorations, delivery instructions..."
//                 value={form.notes}
//                 onChange={handleChange}
//                 className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
//               />
//             </div>

//             <div className="bg-emerald-50/50 p-6 md:p-8 rounded-2xl border border-emerald-100">
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h3>
//               <dl className="space-y-4 text-gray-700">
//                 <div className="flex justify-between">
//                   <dt className="font-medium">Selected Cart</dt>
//                   <dd className="font-semibold">{form.cart || "—"}</dd>
//                 </div>
//                 <div className="flex justify-between">
//                   <dt className="font-medium">Date</dt>
//                   <dd className="font-semibold">{form.date || "—"}</dd>
//                 </div>
//                 <div className="flex justify-between">
//                  <dt className="font-medium">Guest Package</dt>
// <dd className="font-semibold">{form.guestPackage || "—"}</dd>
//                 </div>
//                 <div className="flex justify-between">
//                   <dt className="font-medium">Location</dt>
//                   <dd className="font-semibold break-words">{form.location || "—"}</dd>
//                 </div>

//                 <div className="pt-4 border-t border-emerald-200">
//                   <dt className="font-medium mb-2">Main Items</dt>
//                   <dd className="text-gray-600">
//                     {form.selectedMainItems.length > 0 ? (
//                       <div className="space-y-1">
//                         {form.selectedMainItems.map((item) => (
//                           <div key={item.name} className="flex justify-between text-sm">
//                             <span>{item.name}</span>
//                             {/* <span>{item.price} AED</span> */}
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       "None selected"
//                     )}
//                   </dd>
//                 </div>

//                 <div className="pt-2">
//                   <dt className="font-medium mb-2">Extras / Complementary</dt>
//                   <dd className="text-gray-600">
//                     {form.selectedComplementary.length > 0 ? (
//                       <div className="space-y-1">
//                         {form.selectedComplementary.map((item) => (
//                           <div key={item.name} className="flex justify-between text-sm">
//                             <span>{item.name}</span>
//                             {/* <span>{item.price > 0 ? `${item.price} AED` : "Free"}</span> */}
//                             <span>Free</span>
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       "None selected"
//                     )}
//                   </dd>
//                 </div>

//                 <div className="pt-4 border-t border-emerald-300 font-bold text-lg flex justify-between items-center">
//                   <dt>Estimated Total:</dt>
//                   <dd className="text-emerald-700 text-xl">
//                     {calculateTotal()} AED
//                   </dd>
//                 </div>
//               </dl>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-primary hover:bg-primary text-white py-5 rounded-xl font-bold text-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-100"
//             >
//               Submit Booking Request
//             </button>
//           </div>
//         </motion.form>
//       </div>
//     </main>
//   );
// }


















import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, ChevronDown } from "lucide-react";

// ────────────────────────────────────────────────
// Cart data with prices (you can change these values)
// ────────────────────────────────────────────────
const cartOptions = [
  {
    name: "Breakfast Cart",
  //     maxMainItems: 3,          // 👈 ADD THIS
  // maxComplementary: 2,      // 👈 ADD THIS
    basePrice: 0,
     guestPackages: [
      { label: "1-20 Guests", price: 2000 },
      { label: "20-30 Guests", price: 2850 },
      { label: "30-50 Guests", price: 4150 },
    ],
    stationPrice: 300,
    // selectable: [
    //   { name: "Keema",  },
    //   { name: "Sausage",  },
    //   { name: "Foul",  },
    //   { name: "Balaleet", },
    //   { name: "Scrambled Egg", price: 28 },
    //   { name: "Haloumi", price: 42 },
    //   { name: "Shakshouka", price: 40 },
    //   { name: "Labneh", price: 25 },
    //   { name: "Mozzarella", price: 35 },
    //   { name: "Labneh with Zaatar", price: 28 },
    //   { name: "Creamy Cheese", price: 30 },
    //   { name: "Cheddar", price: 32 },
    //   { name: "Burrata", price: 55 },
    //   { name: "Feta", price: 38 },
    //   { name: "Puratha", price: 20 },
    //   { name: "Lebanese Bread", price: 15 },
    //   { name: "Brown Bread", price: 12 },
    //   { name: "Toast", price: 10 },
    //   { name: "Mini Croissant", price: 18 },
    //   { name: "Strawberry", price: 25 },
    //   { name: "Grapes", price: 22 },
    //   { name: "Makdous", price: 28 },
    //   { name: "Dates", price: 30 },
    //   { name: "Honey", price: 35 },
    //   { name: "Jam", price: 20 },
    // ],

    // complementary: [
    //   { name: "Black Olive", price: 0 },
    //   { name: "Green Olive", price: 0 },
    //   { name: "Grilled Olive", price: 0 },
    //   { name: "Cherry Tomato", price: 0 },
    //   { name: "Cucumber Sticks", price: 0 },
    //   { name: "Carrot Sticks", price: 0 },
    //   { name: "Extra Napkins", price: 0 },
    //   { name: "Disposable Plates", price: 0 },
    // ]
    sections: [
  {
    id: "main",
    title: "Main Items",
    maxSelect: 3,
    items: [
      { name: "Keema" },
      { name: "Sausage" },
      { name: "Foul" },
      { name: "Balaleet" },
      { name: "Scrambled Egg" },
      { name: "Haloumi" },
    ]
  },
  {
    id: "other",
    title: "Other Items",
    maxSelect: 2,
    items: [
      { name: "Strawberry" },
      { name: "Grapes" },
      { name: "Makdous" },
      { name: "Dates" },
      { name: "Honey" },
      { name: "Jam" },
    ]
  },
    {
    id: "new",
    title: "new Items",
    maxSelect: 2,
    items: [
      { name: "Strawberry" },
      { name: "Grapes" },
      { name: "Makdous" },
      { name: "Dates" },
      { name: "Honey" },
      { name: "Jam" },
    ]
  },
    {
    id: "premium",
    title: "Premium Items",
    maxSelect: 2,
    items: [
      { name: "Strawberry" },
      { name: "Grapes" },
      { name: "Makdous" },
      { name: "Dates" },
      { name: "Honey" },
      { name: "Jam" },
    ]
  },
  {
    id: "complementary",
    title: "Complementary",
    maxSelect: 2,
    items: [
      { name: "Black Olive", price: 0 },
      { name: "Green Olive", price: 0 },
      { name: "Cherry Tomato", price: 0 },
      { name: "Extra Napkins", price: 0 },
    ]
  }
]
  },
  // Sandwich Cart
  {
    name: "Sandwich Cart",
    basePrice: 0,
        maxMainItems: 3,          // 👈 ADD THIS
  maxComplementary: 2,      // 👈 ADD THIS
    guestPackages: [
      { label: "1-20 Guests", price: 2000 },
      { label: "20-30 Guests", price: 2850 },
      { label: "30-50 Guests", price: 4150 },
    ],
    stationPrice: 300,
    selectable: [
      { name: "Tuna", price: 45 },
      { name: "Salami", price: 55 },
      { name: "Spicy Salami", price: 58 },
      { name: "Bresaola", price: 65 },
      { name: "Roasted Chicken Breast", price: 48 },
      { name: "Turkey", price: 50 },
      { name: "Pepperoni", price: 52 },
      { name: "Rocca", price: 12 },
      { name: "Tomato", price: 10 },
      { name: "Pickles", price: 8 },
      { name: "Cucumber", price: 8 },
      { name: "Jalapeno", price: 10 },
      { name: "Iceberg Lettuce", price: 10 },
      { name: "Sun-Dried Tomato", price: 18 },
      { name: "Pesto", price: 22 },
      { name: "Mustard", price: 8 },
      { name: "Honey Mustard", price: 12 },
      { name: "Chipotle", price: 15 },
      { name: "BBQ", price: 12 },
      { name: "Guacamole", price: 25 },
      { name: "Thousand Island", price: 15 },
    ],
    complementary: [
      { name: "Ciabatta Bread", price: 0 },
      { name: "Paper Napkins", price: 0 },
      { name: "Disposable Cutlery", price: 0 },
      // { name: "Extra Sauce Portions", price: 0 },
    ]
  },
  // Pizza Cart
  {
    name: "Pizza Cart",
    basePrice: 0,
            maxMainItems: 3,          // 👈 ADD THIS
  maxComplementary: 2,      // 👈 ADD THIS
   guestPackages: [
      { label: "1-20 Guests", price: 2200 },
      { label: "20-30 Guests", price: 3050 },
      { label: "30-50 Guests", price: 4350 },
    ],
    stationPrice: 300,
    selectable: [
      { name: "Pepperoni", price: 35 },
      { name: "Salami", price: 38 },
      { name: "Chicken Cubes", price: 45 },
      { name: "Tuna", price: 42 },
      { name: "Ground Beef", price: 40 },
      { name: "Mozzarella", price: 28 },
      { name: "Cheddar Blend", price: 30 },
      { name: "Parmesan", price: 35 },
      { name: "Tomato", price: 10 },
      { name: "Olives", price: 12 },
      { name: "Mushroom", price: 15 },
      { name: "Bell Pepper", price: 12 },
      { name: "Pineapple", price: 18 },
      { name: "Jalapeño", price: 10 },
    ],
    complementary: [
      { name: "Pizza Dough", price: 0 },
      { name: "Signature Marinara", price: 0 },
      { name: "Chili Flakes", price: 0 },
      { name: "Oregano Packets", price: 0 },
      { name: "Disposable Plates", price: 0 },
    ]
  },
  // Cheese Cart
  {
    name: "Cheese Cart",
    basePrice: 0,
            maxMainItems: 3,          // 👈 ADD THIS
  maxComplementary: 2,      // 👈 ADD THIS
    guestPackages: [
      { label: "1-20 Guests", price: 1800 },
      { label: "20-30 Guests", price: 2650 },
      { label: "30-50 Guests", price: 3950 },
    ],
    stationPrice: 300,
    selectable: [
      { name: "Cheddar", price: 32 },
      { name: "Blue Cheese", price: 55 },
      { name: "Brie", price: 65 },
      { name: "Parmesan", price: 40 },
      { name: "Feta", price: 38 },
      { name: "Labneh balls with Zaatar", price: 35 },
      { name: "Salami", price: 50 },
      { name: "Prosciutto", price: 70 },
      { name: "Bresaola", price: 75 },
      { name: "Grapes", price: 22 },
      { name: "Figs", price: 35 },
      { name: "Walnuts", price: 28 },
      { name: "Almonds", price: 30 },
      { name: "Honey", price: 35 },
    ],
    complementary: [
      { name: "Baguette Bread", price: 0 },
      { name: "Crackers", price: 0 },
      { name: "Extra Toothpicks", price: 0 },
      { name: "Cheese Knives (disposable)", price: 0 },
    ]
  },
  // Sweets Cart
  {
    name: "Sweets Cart",
            maxMainItems: 3,          // 👈 ADD THIS
  maxComplementary: 2,      // 👈 ADD THIS
    basePrice: 0,
   guestPackages: [
      { label: "1-20 Guests", price: 500 },
      { label: "20-30 Guests", price: 750 },
      { label: "30-50 Guests", price: 1000 },
    ],
    stationPrice: 300,
    selectable: [
      { name: "Brownie", price: 25 },
      { name: "Croissant", price: 18 },
      { name: "Strawberry", price: 25 },
      { name: "Banana", price: 15 },
      { name: "Blueberry", price: 28 },
      { name: "Raspberry", price: 30 },
      { name: "KitKat", price: 20 },
      { name: "M&M's", price: 22 },
      { name: "Marshmallows", price: 18 },
      { name: "Gummy Bears", price: 20 },
      { name: "Caramel Sauce", price: 25 },
      { name: "Chocolate Hazelnut Sauce", price: 28 },
      { name: "White Chocolate Sauce", price: 28 },
    ],
    complementary: [
      { name: "Disposable Spoons", price: 0 },
      { name: "Napkins", price: 0 },
      { name: "Small Serving Cups", price: 0 },
      { name: "Sprinkles (extra)", price: 0 },
    ]
  },
  // Candy Cart
  {
    name: "Candy Cart",
    basePrice: 0,
            maxMainItems: 3,          // 👈 ADD THIS
  maxComplementary: 2,      // 👈 ADD THIS
    guestPackages: [
      { label: "1-20 Guests", price: 500 },
      { label: "20-30 Guests", price: 750 },
      { label: "30-50 Guests", price: 1000 },
    ],
    stationPrice: 300,
    selectable: [
      { name: "Cola Pacifiers"},
      { name: "Tutti Frutti Rings", price: 18 },
      { name: "Rainbow Sea", price: 20 },
      { name: "Strawberry Lips", price: 16 },
      { name: "Apple", price: 12 },
      { name: "Grapes", price: 22 },
      { name: "Mangoes", price: 25 },
      { name: "Kiwi", price: 22 },
      { name: "Popcorn", price: 15 },
      { name: "Pretzels", price: 12 },
      { name: "Marshmallow", price: 18 },
      { name: "Gummy Bears", price: 20 },
    ],
    complementary: [
      { name: "All options are vegan", price: 0 },
      { name: "Small Candy Bags", price: 0 },
      { name: "Disposable Gloves", price: 0 },
      { name: "Napkins", price: 0 },
    ]
  },
  // Drinks Cart
  {
    name: "Drinks Cart",
    basePrice: 0,
            maxMainItems: 3,          // 👈 ADD THIS
  maxComplementary: 2,      // 👈 ADD THIS
    guestPackages: [
      { label: "1-20 Guests", price: 500 },
      { label: "20-30 Guests", price: 750 },
      { label: "30-50 Guests", price: 1000 },
    ],
    stationPrice: 300,
    selectable: [
      { name: "Pink Champagne" },
      { name: "Iconic Strawberry Lemonade"},
      { name: "Pina Colada" },
      { name: "Blue Hawaiian"},
      { name: "Strawberry Slushie"},
      { name: "Frozen Lemonade" },
      { name: "Vimto"},
      { name: "Blue Lagoon"},
      { name: "Fresh Orange Juice"},
      { name: "Lemon Mint"},
    ],
    complementary: [
      { name: "Cups / Glasses", price: 0 },
      { name: "Straws", price: 0 },
      { name: "Mint & Fruit Garnishes", price: 0 },
      { name: "Ice Packs", price: 0 },
      { name: "Napkins", price: 0 },
    ]
  },
];

// ────────────────────────────────────────────────
// Image mapping – every item has an image
// ────────────────────────────────────────────────
const itemImages: Record<string, string> = {
  // Breakfast
  "Keema": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=80",
  "Sausage": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
  "Foul": "https://images.unsplash.com/photo-1610612769822-5a0f0c6e0e1f?w=80",
  "Balaleet": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
  "Scrambled Egg": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=80",
  "Haloumi": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
  "Shakshouka": "https://images.unsplash.com/photo-1590419858928-7a3a6e8e0e1f?w=80",
  "Labneh": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
  "Mozzarella": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
  "Labneh with Zaatar": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
  "Creamy Cheese": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
  "Cheddar": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
  "Burrata": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
  "Feta": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
  "Puratha": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=80",
  "Lebanese Bread": "https://images.unsplash.com/photo-1574071318508-1cdbab80d174?w=80",
  "Brown Bread": "https://images.unsplash.com/photo-1559054663-e8d23213f55c?w=80",
  "Toast": "https://images.unsplash.com/photo-1559054663-e8d23213f55c?w=80",
  "Mini Croissant": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=80",
  "Strawberry": "https://images.unsplash.com/photo-1601001435828-419e309a2f53?w=80",
  "Grapes": "https://images.unsplash.com/photo-1425934398893-310a010a40f9?w=80",
  "Makdous": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
  "Dates": "https://images.unsplash.com/photo-1615485290383-3a6a0e9e8e8e?w=80",
  "Honey": "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=80",
  "Jam": "https://images.unsplash.com/photo-1589924691995-400dc9ecc0af?w=80",

  // Sandwich
  "Tuna": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
  "Salami": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
  "Spicy Salami": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
  "Bresaola": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
  "Roasted Chicken Breast": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
  "Turkey": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
  "Pepperoni": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=80",
  "Rocca": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
  "Tomato": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",
  "Pickles": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
  "Cucumber": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=80",
  "Jalapeno": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",
  "Iceberg Lettuce": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
  "Sun-Dried Tomato": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",
  "Pesto": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
  "Mustard": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
  "Honey Mustard": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
  "Chipotle": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
  "BBQ": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
  "Guacamole": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
  "Thousand Island": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",

  // Pizza
  "Chicken Cubes": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=80",
  "Ground Beef": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
  // "Mozzarella": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
  "Cheddar Blend": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
  "Parmesan": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
  // "Tomato": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",
  "Olives": "https://images.unsplash.com/photo-1627308594188-4d0e0b8b5d8d?w=80",
  "Mushroom": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=80",
  "Bell Pepper": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",
  "Pineapple": "https://images.unsplash.com/photo-1562764652-3d7e8e8e8e8e?w=80",
  "Jalapeño": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=80",

  // Cheese
  "Blue Cheese": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
  "Brie": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=80",
  "Prosciutto": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=80",
  "Figs": "https://images.unsplash.com/photo-1562764652-3d7e8e8e8e8e?w=80",
  "Walnuts": "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=80",

  // Sweets
  "Brownie": "https://images.unsplash.com/photo-1601001435828-419e309a2f53?w=80",
  "Croissant": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=80",
  "Banana": "https://images.unsplash.com/photo-1601001435828-419e309a2f53?w=80",
  "Blueberry": "https://images.unsplash.com/photo-1425934398893-310a010a40f9?w=80",
  "Raspberry": "https://images.unsplash.com/photo-1425934398893-310a010a40f9?w=80",
  "KitKat": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=80",
  "M&M's": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=80",
  "Marshmallows": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=80",
  "Gummy Bears": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=80",
  "Caramel Sauce": "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=80",

  // Candy
  "Popcorn": "https://images.unsplash.com/photo-1578849278610-5d0a9d5f8e8e?w=80",
  "Pretzels": "https://images.unsplash.com/photo-1578849278610-5d0a9d5f8e8e?w=80",

  // Drinks
  "Pina Colada": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=80",
  "Blue Hawaiian": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=80",
  "Strawberry Slushie": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=80",
  "Fresh Orange Juice": "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=80",
  "Lemon Mint": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=80",

  // Fallback
  "DEFAULT": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=80"
};

export default function BookingPage() {
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   date: "",
  //   guests: "",
  //   guestPackage: "",
  // withStation: false,
  //   location: "",
  //   cart: "",
  //   notes: "",
  //   selectedMainItems: [] as { name: string; price: number }[],
  //   selectedComplementary: [] as { name: string; price: number }[],
  // });

  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  date: "",
  guests: "",
  guestPackage: "",
  withStation: false,
  location: "",
  city: "",          // 👈 ADD THIS
  timeSlot: "",      // 👈 ADD THIS
  cart: "",
  notes: "",
  

  // selectedMainItems: [] as { name: string; }[],
  // selectedComplementary: [] as { name: string; price: number }[],
  selectedItems: {} as Record<string, { name: string; price?: number }[]>,
  
});

  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const selectedCart = cartOptions.find((c) => c.name === form.cart);

  // const toggleMainItem = (item: { name: string;  }) => {
  //   setForm((prev) => {
  //     const exists = prev.selectedMainItems.some(i => i.name === item.name);
  //     const updated = exists
  //       ? prev.selectedMainItems.filter(i => i.name !== item.name)
  //       : [...prev.selectedMainItems, item];
  //     return { ...prev, selectedMainItems: updated };
  //   });
  // };



//   const toggleMainItem = (item: { name: string }) => {
//   if (!selectedCart) return;

//   setForm((prev) => {
//     const exists = prev.selectedMainItems.some(i => i.name === item.name);

//     // If adding new item
//     if (!exists && prev.selectedMainItems.length >= selectedCart.maxMainItems) {
//       alert(`You can only select up to ${selectedCart.maxMainItems} main items`);
//       return prev;
//     }

//     const updated = exists
//       ? prev.selectedMainItems.filter(i => i.name !== item.name)
//       : [...prev.selectedMainItems, item];

//     return { ...prev, selectedMainItems: updated };
//   });
// };



const toggleItem = (sectionId, item) => {
  if (!selectedCart) return;

  const section = selectedCart.sections.find(s => s.id === sectionId);
  if (!section) return;

  setForm(prev => {
    const currentItems = prev.selectedItems[sectionId] || [];
    const exists = currentItems.some(i => i.name === item.name);

    if (!exists && currentItems.length >= section.maxSelect) {
      alert(`You can select only ${section.maxSelect} items in ${section.title}`);
      return prev;
    }

    const updated = exists
      ? currentItems.filter(i => i.name !== item.name)
      : [...currentItems, item];

    return {
      ...prev,
      selectedItems: {
        ...prev.selectedItems,
        [sectionId]: updated
      }
    };
  });
};

  // const toggleComplementary = (item: { name: string; price: number }) => {
  //   setForm((prev) => {
  //     const exists = prev.selectedComplementary.some(i => i.name === item.name);
  //     const updated = exists
  //       ? prev.selectedComplementary.filter(i => i.name !== item.name)
  //       : [...prev.selectedComplementary, item];
  //     return { ...prev, selectedComplementary: updated };
  //   });
  // };


//   const toggleComplementary = (item: { name: string; price: number }) => {
//   if (!selectedCart) return;

//   setForm((prev) => {
//     const exists = prev.selectedComplementary.some(i => i.name === item.name);

//     if (!exists && prev.selectedComplementary.length >= selectedCart.maxComplementary) {
//       alert(`You can only select up to ${selectedCart.maxComplementary} complementary items`);
//       return prev;
//     }

//     const updated = exists
//       ? prev.selectedComplementary.filter(i => i.name !== item.name)
//       : [...prev.selectedComplementary, item];

//     return { ...prev, selectedComplementary: updated };
//   });
// };

  // const calculateTotal = () => {
  //   const mainTotal = form.selectedMainItems.reduce((sum, i) => sum + i.price, 0);
  //   const compTotal = form.selectedComplementary.reduce((sum, i) => sum + i.price, 0);
  //   return mainTotal + compTotal + (selectedCart?.basePrice || 0);
  // };

//   const calculateTotal = () => {
//   const selectedPackage = selectedCart?.guestPackages.find(
//     (pkg) => pkg.label === form.guestPackage
//   );

//   const basePackagePrice = selectedPackage?.price || 0;

//   const mainTotal = form.selectedMainItems.reduce(
//     (sum, i) => sum + i.price,
//     0
//   );

//   const compTotal = form.selectedComplementary.reduce(
//     (sum, i) => sum + i.price,
//     0
//   );

//   // const stationPrice =
//   //   form.withStation && selectedCart?.stationExtra
//   //     ? selectedCart.stationExtra
//   //     : 0;
//   const stationPrice =
//   form.withStation && selectedCart?.stationPrice
//     ? selectedCart.stationPrice
//     : 0;

//   return basePackagePrice + mainTotal + compTotal + stationPrice;
// };

const calculateTotal = () => {
  const selectedPackage = selectedCart?.guestPackages.find(
    (pkg) => pkg.label === form.guestPackage
  );

  const basePackagePrice = selectedPackage?.price || 0;

  const stationPrice =
    form.withStation && selectedCart?.stationPrice
      ? selectedCart.stationPrice
      : 0;

  // Only package + station (no item prices)
  return basePackagePrice + stationPrice;
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", {
      ...form,
      total: calculateTotal(),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md"
        >
          <CalendarCheck className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Booking Received!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your order.<br />
            Our team will contact you within 24 hours to confirm details.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary transition"
          >
            Book Another Cart
          </button>
        </motion.div>
      </div>
    );
  }




  const generateTimeSlots = () => {
  const slots: string[] = [];

  if (!form.city) return slots;

  const startHour = 7;
  const endHour = 23; // 11 PM

  const gap = form.city === "Dubai" ? 1 : 3; // 👈 Dubai 1hr | Abu Dhabi 3hr

  for (let hour = startHour; hour <= endHour; hour += gap) {
    const formattedHour =
      hour > 12
        ? `${hour - 12}:00 PM`
        : hour === 12
        ? "12:00 PM"
        : `${hour}:00 AM`;

    slots.push(formattedHour);
  }

  return slots;
};





  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
          poster="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        >
          <source src="./video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-5 drop-shadow-2xl"
          >
            Book Your <span className="text-primary">Event Cart</span>
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl mb-10 drop-shadow-lg max-w-3xl mx-auto"
          >
            Premium catering carts for breakfast, pizza, sandwiches, cheese boards, sweets & drinks
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400",
              "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
              "https://images.unsplash.com/photo-1559054663-e8d23213f55c?w=400",
              "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400",
              "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
            ].map((url, i) => (
              <motion.img
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.7 }}
                src={url}
                alt=""
                className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-2xl shadow-2xl border-4 border-white/30 transform hover:scale-110 transition-transform"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <div className="container mx-auto px-4 -mt-16 md:-mt-20 pb-16 relative z-10 max-w-5xl">
        <motion.form
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl border border-gray-100/80 p-6 md:p-10 lg:p-12 space-y-10 backdrop-blur-sm"
        >
          {/* 1. Select Cart */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <span className="text-primary">1.</span> Choose Your Cart
            </h2>
            <div className="relative">
              <select
                name="cart"
                value={form.cart}
              onChange={(e) => {
  const { value } = e.target;

  setForm(prev => ({
    ...prev,
    cart: value,
    selectedItems: {}, // reset all selected items
  }));
}}
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-lg appearance-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
              >
                <option value="">Select cart type...</option>
                {cartOptions.map((cart) => (
                  <option key={cart.name} value={cart.name}>
                    {cart.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
{selectedCart?.sections?.map((section) => {
  const selectedCount = form.selectedItems[section.id]?.length || 0;
  const isOpen = activeSection === section.id;
  const isComplete = selectedCount === section.maxSelect;

  return (
    <div key={section.id} className="mb-4 overflow-hidden border border-gray-200 rounded-2xl transition-all duration-200">
      
      {/* CLICKABLE HEADER (The "Hidden" UI) */}
      <div
        onClick={() => setActiveSection(isOpen ? null : section.id)}
        className={`flex items-center justify-between p-5 cursor-pointer transition-colors ${
          isOpen ? "bg-sage/40 border-b border-gray-100" : "bg-white hover:bg-gray-50"
        }`}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3  ">
            <h3 className={`text-lg font-bold transition-colors ${isOpen ? "text-emerald-700" : "text-gray-800"}`}>
              {section.title}
            </h3>
            {/* Status Badge */}
            {selectedCount > 0 && (
              <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                isComplete ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"
              }`}>
                {selectedCount}/{section.maxSelect}
              </span>
            )}
          </div>
          
          <p className="text-sm text-gray-500 mt-1">
            {isComplete 
              ? "All items selected" 
              : `Select up to ${section.maxSelect} items (${section.maxSelect - selectedCount} left)`}
          </p>
        </div>

        {/* Animated Chevron Icon */}
        <div className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      {/* EXPANDABLE CONTENT */}
      {isOpen && (
        <div className="p-5 bg-gray/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.items.map((item) => {
              const imgSrc = itemImages[item.name] || itemImages["DEFAULT"];
              const isSelected = form.selectedItems[section.id]?.some((i) => i.name === item.name);

              return (
                <label
                  key={item.name}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? "bg-emerald-50 border-emerald-500 shadow-sm"
                      : "border-gray-200 hover:border-emerald-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-md overflow-hidden border border-gray-200">
                    <img
                      src={imgSrc}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => (e.currentTarget.src = itemImages["DEFAULT"])}
                    />
                  </div>

                  <div className="flex-1">
                    <span className={`block font-medium ${isSelected ? "text-emerald-900" : "text-gray-700"}`}>
                      {item.name}
                    </span>
                  </div>

                  <input
                    type="checkbox"
                    checked={isSelected}
                    disabled={!isSelected && selectedCount >= section.maxSelect}
                    onChange={() => toggleItem(section.id, item)}
                    className="h-5 w-5 rounded accent-emerald-600 flex-shrink-0"
                  />
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
})}
          {/* 3. Event Details */}
          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-gray-200">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <span className="text-primary">3.</span> When & How Many
              </h2>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Event Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              {/* <div>
                <label className="block text-gray-700 font-medium mb-2">Number of Guests</label>
                <input
                  type="number"
                  name="guests"
                  placeholder="Guest"
                  min="1"
                  required
                  value={form.guests}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div> */}

              <div>
  <label className="block text-gray-700 font-medium mb-2">
    Select Guest Package
  </label>

  <select
    name="guestPackage"
    value={form.guestPackage}
    onChange={handleChange}
    required
    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
  >
    <option value="">Select guest range...</option>
    {selectedCart?.guestPackages.map((pkg) => (
      <option key={pkg.label} value={pkg.label}>
        {pkg.label} — {pkg.price} AED
      </option>
    ))}
  </select>



  
</div>




{/* City Selection */}
<div>
  <label className="block text-gray-700 font-medium mb-2">
    Select City
  </label>
  <select
    name="city"
    value={form.city}
    onChange={handleChange}
    required
    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
  >
    <option value="">Select City...</option>
    <option value="Dubai">Dubai</option>
    <option value="Abu Dhabi">Abu Dhabi</option>
  </select>
</div>

{/* Time Slot */}
{form.city && (
  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Select Time Slot
    </label>
    <select
      name="timeSlot"
      value={form.timeSlot}
      onChange={handleChange}
      required
      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500"
    >
      <option value="">Select Time...</option>
      {generateTimeSlots().map((slot) => (
        <option key={slot} value={slot}>
          {slot}
        </option>
      ))}
    </select>
  </div>
)}





            </div>

            <div className="space-y-5">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3 ">
                <span className="text-primary">4.</span> Where & Who
              </h2>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Event Location</label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="Venue name / full address"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Summary + Total */}
          <div className="space-y-8 pt-8 border-t border-gray-200">
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-lg">
                Special Requests / Notes
              </label>
              <textarea
                name="notes"
                rows={4}
                placeholder="Allergies, preferred setup time, decorations, delivery instructions..."
                value={form.notes}
                onChange={handleChange}
                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
              />
            </div>

            <div className="bg-emerald-50/50 p-6 md:p-8 rounded-2xl border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h3>
              <dl className="space-y-4 text-gray-700">
                <div className="flex justify-between">
                  <dt className="font-medium">Selected Cart</dt>
                  <dd className="font-semibold">{form.cart || "—"}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Date</dt>
                  <dd className="font-semibold">{form.date || "—"}</dd>
                </div>
                <div className="flex justify-between">
                 <dt className="font-medium">Guest Package</dt>
<dd className="font-semibold">{form.guestPackage || "—"}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Location</dt>
                  <dd className="font-semibold break-words">{form.location || "—"}</dd>
                </div>

               <div className="pt-4 border-t border-emerald-200">
  <dt className="font-medium mb-2">Selected Items</dt>
  <dd className="text-gray-600">
    {Object.keys(form.selectedItems).length > 0 ? (
      <div className="space-y-3">
        {Object.entries(form.selectedItems).map(([sectionId, items]) => (
          items.length > 0 && (
            <div key={sectionId}>
              <p className="font-medium capitalize">{sectionId}</p>
              <div className="space-y-1">
                {items.map((item) => (
                  <div key={item.name} className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span>{item.price ? `${item.price} AED` : "Free"}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    ) : (
      "None selected"
    )}
  </dd>
</div>





                <div className="flex justify-between">
  <dt className="font-medium">City</dt>
  <dd className="font-semibold">{form.city || "—"}</dd>
</div>

<div className="flex justify-between">
  <dt className="font-medium">Time Slot</dt>
  <dd className="font-semibold">{form.timeSlot || "—"}</dd>




</div>

                <div className="pt-4 border-t border-emerald-300 font-bold text-lg flex justify-between items-center">
                  <dt>Estimated Total:</dt>
                  <dd className="text-emerald-700 text-xl">
                    {calculateTotal()} AED
                  </dd>
                </div>
              </dl>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary text-white py-5 rounded-xl font-bold text-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-100"
            >
              Submit Booking Request
            </button>
          </div>
        </motion.form>
      </div>
    </main>
  );
}
