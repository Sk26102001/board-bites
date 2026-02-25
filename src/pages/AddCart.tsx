// // CartPage.tsx
// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   ShoppingCart,
//   Calendar,
//   MapPin,
//   Clock,
//   Edit,
//   Plus,
//   Trash2,
//   CheckCircle2,
//   ArrowRight,
//   Info,
//   X,
// } from "lucide-react";

// // ────────────────────────────────────────────────
// //  Colors - Sage Green theme
// // ────────────────────────────────────────────────
// const colors = {
//   sage50:  "#f9faf8",
//   sage100: "#f1f5f0",
//   sage200: "#e2eadc",
//   sage300: "#c9dac3",
//   sage400: "#a9c1a3",
//   sage500: "#8baa85",
//   sage600: "#708f6b",
//   sage700: "#567152",
//   gray50:  "#fafafa",
//   gray100: "#f5f5f5",
//   gray200: "#e5e5e5",
//   gray300: "#d4d4d8",
//   gray600: "#4b5563",
//   gray700: "#374151",
//   gray800: "#1f2937",
// };

// const itemImages: Record<string, string> = {
//   "Keema":          "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=120",
//   "Scrambled Egg":  "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=120",
//   "Haloumi":        "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=120",
//   "Honey":          "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=120",
//   "Dates":          "https://images.unsplash.com/photo-1615485290383-3a6a0e9e8e8e?w=120",
//   "Black Olive":    "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=120",
//   "Cherry Tomato":  "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=120",
//   "Extra Napkins":  "https://images.unsplash.com/photo-1589984662646-e7b08ca2ffe8?w=120",
//   "DEFAULT":        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=120",
// };

// type CartItem = {
//   id: string;
//   cartType: string;
//   guestPackage: string;
//   packagePrice: number;
//   station: boolean;
//   stationPrice: number;
//   date: string;
//   timeSlot: string;
//   city: string;
//   location: string;
//   selected: Record<string, string[]>;
//   notes: string;
//   total: number;
// };

// export default function CartPage() {
//   const [carts, setCarts] = useState<CartItem[]>([
//     {
//       id: "cart-1",
//       cartType: "Breakfast Cart",
//       guestPackage: "20-30 Guests",
//       packagePrice: 2850,
//       station: true,
//       stationPrice: 300,
//       date: "March 15, 2026",
//       timeSlot: "10:00 AM – 12:00 PM",
//       city: "Dubai",
//       location: "Jumeirah Beach Hotel – Private Villa",
//       selected: {
//         main: ["Keema", "Scrambled Egg", "Haloumi"],
//         other: ["Honey", "Dates"],
//         complementary: ["Black Olive", "Cherry Tomato", "Extra Napkins"],
//       },
//       notes: "Setup near pool area preferred. Early arrival if possible. No pork products.",
//       total: 3150,
//     },
//   ]);

//   const [message, setMessage] = useState<string | null>(null);

//   const formatPrice = (num: number) => num.toLocaleString("en-AE") + " AED";

//   const removeItemFromCart = (cartId: string, section: string, itemName: string) => {
//     setCarts(prevCarts =>
//       prevCarts.map(cart => {
//         if (cart.id !== cartId) return cart;

//         const newSelected = { ...cart.selected };
//         newSelected[section] = newSelected[section].filter(name => name !== itemName);

//         // Recalculate total if needed (here we keep it simple)
//         return { ...cart, selected: newSelected };
//       })
//     );
//   };

//   const addAnotherCart = () => {
//     const newCart: CartItem = {
//       id: `cart-${carts.length + 1}`,
//       cartType: "Sandwich Cart",
//       guestPackage: "1-20 Guests",
//       packagePrice: 2000,
//       station: true,
//       stationPrice: 300,
//       date: "March 20, 2026",
//       timeSlot: "1:00 PM – 3:00 PM",
//       city: "Dubai",
//       location: "Atlantis The Palm – Beach Area",
//       selected: {
//         proteins: ["Tuna", "Roasted Chicken Breast"],
//         vegetables: ["Rocca", "Tomato"],
//         sauces: ["Pesto", "Honey Mustard"],
//       },
//       notes: "Extra spicy sauce on the side please.",
//       total: 2300,
//     };

//     setCarts(prev => [...prev, newCart]);
//     setMessage("New Sandwich Cart added! You can edit it now.");
//     setTimeout(() => setMessage(null), 4000);
//   };

//   const handleEdit = () => {
//     setMessage("Redirecting to edit mode... (in real app → go to selection page)");
//     // In real app: router.push('/booking') or set editing state
//   };

//   const handleCheckout = () => {
//     setMessage("Booking request sent! Our team will contact you within 24 hours.");
//     // In real app: send data to backend / show success page
//   };

//   const grandTotal = carts.reduce((sum, cart) => sum + cart.total, 0);

//   return (
//     <main className="min-h-screen bg-gray-50" style={{ backgroundColor: colors.sage50 }}>
//       {/* Header */}
//       <div
//         className="text-white"
//         style={{ background: `linear-gradient(135deg, ${colors.sage600} 0%, ${colors.sage500} 100%)` }}
//       >
//         <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
//           <div className="flex items-center gap-5">
//             <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
//               <ShoppingCart className="w-9 h-9" />
//             </div>
//             <div>
//               <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
//                 Your Event Carts
//               </h1>
//               <p className="mt-2 text-lg opacity-90">
//                 Manage and review all carts for your event
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-10">
//         {message && (
//           <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 flex items-center gap-3">
//             <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
//             <span>{message}</span>
//             <button onClick={() => setMessage(null)} className="ml-auto">
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         )}

//         {carts.map((cart) => (
//           <motion.div
//             key={cart.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-white rounded-2xl shadow-xl border overflow-hidden mb-10"
//             style={{ borderColor: colors.sage200 }}
//           >
//             {/* Header */}
//             <div
//               className="px-6 py-8 md:px-10 md:py-10 text-white"
//               style={{ backgroundColor: colors.sage500 }}
//             >
//               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//                 <div>
//                   <h2 className="text-2xl md:text-3xl font-bold">
//                     {cart.cartType}
//                   </h2>
//                   <p className="mt-2 opacity-90 text-lg">
//                     {cart.guestPackage} • {cart.city}
//                   </p>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-3xl md:text-4xl font-bold">
//                     {formatPrice(cart.total)}
//                   </div>
//                   <div className="text-sm opacity-85 mt-1">
//                     Estimated total
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Event info */}
//             <div className="p-6 md:p-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b" style={{ borderColor: colors.sage200 }}>
//               {[
//                 { icon: Calendar, label: "Date", value: cart.date },
//                 { icon: Clock, label: "Time", value: cart.timeSlot },
//                 { icon: MapPin, label: "Location", value: cart.location },
//                 { icon: MapPin, label: "City", value: cart.city },
//               ].map((item, i) => (
//                 <div key={i}>
//                   <div className="flex items-center gap-2.5 text-sm text-gray-500 mb-1.5">
//                     <item.icon className="w-4.5 h-4.5" />
//                     <span>{item.label}</span>
//                   </div>
//                   <p className="font-medium text-gray-800">{item.value}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Selections */}
//             <div className="p-6 md:p-10 space-y-10">
//               <h3 className="text-2xl font-bold" style={{ color: colors.sage700 }}>
//                 Your Selections
//               </h3>

//               {Object.entries(cart.selected).map(([key, items]) =>
//                 items.length > 0 ? (
//                   <div key={key} className="space-y-5">
//                     <h4 className="font-semibold text-lg flex items-center gap-3 text-gray-700">
//                       <CheckCircle2 className="w-5.5 h-5.5" style={{ color: colors.sage600 }} />
//                       {key.charAt(0).toUpperCase() + key.slice(1)}
//                     </h4>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       {items.map((name) => (
//                         <div
//                           key={name}
//                           className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:shadow group"
//                           style={{
//                             borderColor: colors.sage300,
//                             backgroundColor: colors.sage50,
//                           }}
//                         >
//                           <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
//                             <img
//                               src={itemImages[name] || itemImages.DEFAULT}
//                               alt={name}
//                               className="w-full h-full object-cover"
//                             />
//                           </div>
//                           <div className="flex-1">
//                             <p className="font-medium text-gray-800">{name}</p>
//                           </div>
//                           <button
//                             onClick={() => removeItemFromCart(cart.id, key, name)}
//                             className="text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full hover:bg-red-50"
//                             aria-label={`Remove ${name}`}
//                           >
//                             <Trash2 className="w-5 h-5" />
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ) : null
//               )}
//             </div>

//             {/* Notes */}
//             {cart.notes && (
//               <div className="mx-6 md:mx-10 mb-10 p-6 rounded-xl border" style={{
//                 backgroundColor: "#fefce8",
//                 borderColor: "#fef08a",
//               }}>
//                 <div className="flex items-start gap-4">
//                   <Info className="w-6 h-6 text-amber-600 mt-1" />
//                   <div>
//                     <div className="font-medium text-amber-900 mb-1.5">Notes</div>
//                     <p className="text-gray-700 leading-relaxed">{cart.notes}</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Summary + Actions */}
//             <div className="p-6 md:p-10 border-t space-y-8" style={{ borderColor: colors.sage200 }}>
//               <div>
//                 <h3 className="text-xl md:text-2xl font-bold mb-5" style={{ color: colors.sage700 }}>
//                   Summary
//                 </h3>

//                 <div className="space-y-4 text-gray-700 bg-gray-50/70 p-6 rounded-xl">
//                   <div className="flex justify-between">
//                     <span>Package</span>
//                     <span>{formatPrice(cart.packagePrice)}</span>
//                   </div>
//                   {cart.station && (
//                     <div className="flex justify-between">
//                       <span>Station</span>
//                       <span>{formatPrice(cart.stationPrice)}</span>
//                     </div>
//                   )}
//                   <div className="pt-5 border-t text-xl font-bold flex justify-between" style={{ borderColor: colors.sage300 }}>
//                     <span>Total</span>
//                     <span style={{ color: colors.sage700 }}>{formatPrice(cart.total)}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
//                 <button
//                   onClick={handleEdit}
//                   className="flex-1 border-2 py-4 px-6 rounded-xl font-medium text-lg flex items-center justify-center gap-2.5 hover:bg-gray-50 transition-colors"
//                   style={{ borderColor: colors.sage400, color: colors.sage700 }}
//                 >
//                   <Edit className="w-5 h-5" />
//                   Edit Cart
//                 </button>



//                     <Link to="/booking" onClick={addAnotherCart}>
//                 <button
                  
//                   className="flex-1 border-2 py-4 px-6 rounded-xl font-medium text-lg flex items-center justify-center gap-2.5 hover:bg-gray-50 transition-colors"
//                   style={{ borderColor: colors.sage400, color: colors.sage700 }}
//                 >
//                   <Plus className="w-5 h-5" />
//                   Add Another Cart
//                 </button>
//                 </Link>

//                 <button
//                   onClick={handleCheckout}
//                   className="flex-1 py-4 px-8 rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2.5 hover:scale-[1.02]"
//                   style={{ backgroundColor: colors.sage600, color: "white" }}
//                 >
//                   Proceed to Checkout
//                   <ArrowRight className="w-5.5 h-5.5" />
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}

//         {/* Grand total when multiple carts */}
//         {carts.length > 1 && (
//           <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border text-center mb-10" style={{ borderColor: colors.sage200 }}>
//             <h3 className="text-2xl font-bold mb-4" style={{ color: colors.sage700 }}>
//               Grand Total (all carts)
//             </h3>
//             <div className="text-4xl font-bold" style={{ color: colors.sage600 }}>
//               {formatPrice(grandTotal)}
//             </div>
//           </div>
//         )}

//         <p className="text-center text-gray-500 text-sm py-6">
//           • No payment required now • We will contact you within 24 hours to confirm
//         </p>
//       </div>
//     </main>
//   );
// }




// // CartPage.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom"; // assuming react-router
// import {
//   ShoppingCart,
//   Calendar,
//   MapPin,
//   Clock,
//   Edit,
//   Plus,
//   Trash2,
//   CheckCircle2,
//   ArrowRight,
//   Info,
//   X,
// } from "lucide-react";

// const colors = {
//   sage50: "#f9faf8",
//   sage100: "#f1f5f0",
//   sage200: "#e2eadc",
//   sage300: "#c9dac3",
//   sage400: "#a9c1a3",
//   sage500: "#8baa85",
//   sage600: "#708f6b",
//   sage700: "#567152",
//   gray50: "#fafafa",
//   gray100: "#f5f5f5",
//   gray200: "#e5e5e5",
//   gray300: "#d4d4d8",
//   gray600: "#4b5563",
//   gray700: "#374151",
//   gray800: "#1f2937",
// };

// // You can expand this later with more images
// const itemImages: Record<string, string> = {
//   Keema: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=120",
//   "Scrambled Egg": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=120",
//   Haloumi: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=120",
//   Honey: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=120",
//   Dates: "https://images.unsplash.com/photo-1615485290383-3a6a0e9e8e8e?w=120",
//   "Black Olive": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=120",
//   "Cherry Tomato": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=120",
//   "Extra Napkins": "https://images.unsplash.com/photo-1589984662646-e7b08ca2ffe8?w=120",
//   DEFAULT: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=120",
// };

// type Booking = {
//   id: string;
//   timestamp: string;
//   cart: string;
//   guestPackage: string;
//   date: string;
//   timeSlot: string;
//   city: string;
//   location: string;
//   name: string;
//   phone: string;
//   email: string;
//   notes: string;
//   selectedItems: Record<string, { name: string; price?: number }[]>;
//   total: number;
//   withStation: boolean;
// };

// export default function CartPage() {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [message, setMessage] = useState<string | null>(null);
//   const navigate = useNavigate();

//   // Load bookings from localStorage when component mounts
//   useEffect(() => {
//     const saved = localStorage.getItem("myBookings");
//     if (saved) {
//       try {
//         const parsed = JSON.parse(saved);
//         setBookings(parsed);
//       } catch (err) {
//         console.error("Failed to parse saved bookings", err);
//       }
//     }
//   }, []);

//   const formatPrice = (num: number) => num.toLocaleString("en-AE") + " AED";

//   const removeBooking = (id: string) => {
//     const updated = bookings.filter(b => b.id !== id);
//     setBookings(updated);
//     localStorage.setItem("myBookings", JSON.stringify(updated));
//     setMessage("Booking removed.");
//     setTimeout(() => setMessage(null), 3000);
//   };

//   const editBooking = (booking: Booking) => {
//     // Save the booking we want to edit into localStorage
//     localStorage.setItem("editingBooking", JSON.stringify(booking));
//     // Go to booking page
//     navigate("/booking");
//   };

//   const addNewCart = () => {
//     // Clear editing data so we start fresh
//     localStorage.removeItem("editingBooking");
//     navigate("/booking");
//   };

//   const grandTotal = bookings.reduce((sum, b) => sum + b.total, 0);

//   if (bookings.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="text-center max-w-md">
//           <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-6" />
//           <h2 className="text-2xl font-bold text-gray-700 mb-3">Your cart is empty</h2>
//           <p className="text-gray-600 mb-8">Start by booking your first event cart</p>
//           <button
//             onClick={addNewCart}
//             className="bg-[#8baa85] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#708f6b] transition"
//           >
//             Book Your First Cart
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-gray-50 pb-20" style={{ backgroundColor: colors.sage50 }}>
//       <div
//         className="text-white"
//         style={{ background: `linear-gradient(135deg, ${colors.sage600} 0%, ${colors.sage500} 100%)` }}
//       >
//         <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
//           <div className="flex items-center gap-5">
//             <div className="bg-white/20 p-4 rounded-2xl">
//               <ShoppingCart className="w-9 h-9" />
//             </div>
//             <div>
//               <h1 className="text-3xl md:text-4xl font-bold">My Event Carts</h1>
//               <p className="mt-2 text-lg opacity-90">Manage your booked catering carts</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
//         {message && (
//           <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 flex items-center gap-3">
//             <CheckCircle2 className="w-5 h-5" />
//             <span>{message}</span>
//             <button onClick={() => setMessage(null)} className="ml-auto">
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         )}

//         {bookings.map(booking => (
//           <motion.div
//             key={booking.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-white rounded-2xl shadow-xl border overflow-hidden mb-10"
//             style={{ borderColor: colors.sage200 }}
//           >
//             {/* Header */}
//             <div className="px-6 py-7 md:px-10 md:py-9 text-white" style={{ backgroundColor: colors.sage500 }}>
//               <div className="flex flex-col md:flex-row justify-between gap-5">
//                 <div>
//                   <h2 className="text-2xl md:text-3xl font-bold">{booking.cart}</h2>
//                   <p className="mt-2 opacity-90">
//                     {booking.guestPackage} • {booking.city} • {booking.date}
//                   </p>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-3xl font-bold">{formatPrice(booking.total)}</div>
//                   <div className="text-sm opacity-85 mt-1">Estimated total</div>
//                 </div>
//               </div>
//             </div>

//             {/* Key info */}
//             <div className="p-6 md:p-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b" style={{ borderColor: colors.sage200 }}>
//               <div>
//                 <div className="text-sm text-gray-500">Date</div>
//                 <div className="font-medium">{booking.date}</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500">Time</div>
//                 <div className="font-medium">{booking.timeSlot}</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500">Location</div>
//                 <div className="font-medium">{booking.location}</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500">Contact</div>
//                 <div className="font-medium">{booking.name} • {booking.phone}</div>
//               </div>
//             </div>

//             {/* Selected items */}
//             <div className="p-6 md:p-10 space-y-8">
//               <h3 className="text-xl font-bold" style={{ color: colors.sage700 }}>
//                 Selected Items
//               </h3>

//               {Object.entries(booking.selectedItems).map(([section, items]) =>
//                 items.length > 0 ? (
//                   <div key={section} className="space-y-4">
//                     <h4 className="font-semibold capitalize flex items-center gap-2">
//                       <CheckCircle2 className="w-5 h-5" style={{ color: colors.sage600 }} />
//                       {section}
//                     </h4>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                       {items.map(item => (
//                         <div
//                           key={item.name}
//                           className="flex items-center gap-3 p-3 rounded-lg border bg-gray-50"
//                           style={{ borderColor: colors.sage300 }}
//                         >
//                           <div className="w-12 h-12 rounded-md overflow-hidden">
//                             <img
//                               src={itemImages[item.name] || itemImages.DEFAULT}
//                               alt={item.name}
//                               className="w-full h-full object-cover"
//                             />
//                           </div>
//                           <span className="font-medium">{item.name}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ) : null
//               )}
//             </div>

//             {/* Notes */}
//             {booking.notes && (
//               <div className="mx-6 md:mx-10 p-5 bg-amber-50/70 rounded-xl border border-amber-100">
//                 <div className="font-medium mb-2 flex items-center gap-2">
//                   <Info className="w-5 h-5 text-amber-700" />
//                   Special Requests
//                 </div>
//                 <p className="text-gray-700">{booking.notes}</p>
//               </div>
//             )}

//             {/* Actions */}
//             <div className="p-6 md:p-10 border-t flex flex-wrap gap-4" style={{ borderColor: colors.sage200 }}>
//               <button
//                 onClick={() => editBooking(booking)}
//                 className="flex-1 min-w-[140px] border-2 py-3.5 px-5 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition"
//                 style={{ borderColor: colors.sage400, color: colors.sage700 }}
//               >
//                 <Edit size={18} />
//                 Edit
//               </button>

//               <button
//                 onClick={addNewCart}
//                 className="flex-1 min-w-[140px] border-2 py-3.5 px-5 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition"
//                 style={{ borderColor: colors.sage400, color: colors.sage700 }}
//               >
//                 <Plus size={18} />
//                 Add Another Cart
//               </button>

//               <button
//                 onClick={() => removeBooking(booking.id)}
//                 className="flex-1 min-w-[140px] border-2 border-red-200 text-red-600 py-3.5 px-5 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-red-50 transition"
//               >
//                 <Trash2 size={18} />
//                 Remove
//               </button>
//             </div>
//           </motion.div>
//         ))}

//         {bookings.length > 1 && (
//           <div className="bg-white p-6 rounded-2xl shadow border text-center mb-10" style={{ borderColor: colors.sage200 }}>
//             <h3 className="text-xl font-bold mb-3" style={{ color: colors.sage700 }}>
//               Grand Total
//             </h3>
//             <div className="text-3xl font-bold" style={{ color: colors.sage600 }}>
//               {formatPrice(grandTotal)}
//             </div>
//           </div>
//         )}

//         {/* <div className="text-center text-gray-600 mt-10">
//           <p className="mb-4">Confirm booking</p>
          
//           <button
//             onClick={addNewCart}
//             className="bg-[#8baa85] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#708f6b] transition"
//           >
//             Proced to checkout
//           </button>
//         </div> */}
//         <div className="mt-12 pt-8 border-t border-gray-200 text-center">
//   <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
//     Ready to Confirm Your Booking?
//   </h3>
  
//   <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
//     Our team will review your selections and contact you within 24 hours to confirm details and finalize everything.
//     No payment is required at this stage.
//   </p>

//   <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//     <button
//        // ← or handleCheckout / proceed logic
//       className={`
//         bg-[#8baa85] hover:bg-[#708f6b] 
//         text-white font-medium text-lg
//         px-10 py-4 rounded-xl
//         shadow-md hover:shadow-lg
//         transition-all duration-300
//         transform hover:-translate-y-1
//         focus:outline-none focus:ring-2 focus:ring-[#8baa85]/50 focus:ring-offset-2
//       `}
//     >
//       Proceed to Checkout
//     </button>

   
//   </div>

//   <p className="mt-6 text-sm text-gray-500">
//     All bookings are subject to availability • We’ll reach out shortly
//   </p>
// </div>
//       </div>
//     </main>
//   );
// }







// // CartPage.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import {
//   ShoppingCart,
//   Calendar,
//   MapPin,
//   Clock,
//   Edit,
//   Plus,
//   Trash2,
//   CheckCircle2,
//   ArrowRight,
//   Info,
//   X,
// } from "lucide-react";

// const colors = {
//   sage50: "#f9faf8",
//   sage100: "#f1f5f0",
//   sage200: "#e2eadc",
//   sage300: "#c9dac3",
//   sage400: "#a9c1a3",
//   sage500: "#8baa85",
//   sage600: "#708f6b",
//   sage700: "#567152",
//   gray50: "#fafafa",
//   gray100: "#f5f5f5",
//   gray200: "#e5e5e5",
//   gray300: "#d4d4d8",
//   gray600: "#4b5563",
//   gray700: "#374151",
//   gray800: "#1f2937",
// };

// const itemImages: Record<string, string> = {
//   Keema: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=120",
//   "Scrambled Egg": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=120",
//   Haloumi: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=120",
//   Honey: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=120",
//   Dates: "https://images.unsplash.com/photo-1615485290383-3a6a0e9e8e8e?w=120",
//   "Black Olive": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=120",
//   "Cherry Tomato": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=120",
//   "Extra Napkins": "https://images.unsplash.com/photo-1589984662646-e7b08ca2ffe8?w=120",
//   DEFAULT: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=120",
// };

// type Booking = {
//   id: string;
//   timestamp: string;
//   cart: string;
//   guestPackage: string;
//   date: string;
//   timeSlot: string;
//   city: string;
//   location: string;
//   name: string;
//   phone: string;
//   email: string;
//   notes: string;
//   selectedItems: Record<string, { name: string; price?: number }[]>;
//   total: number;
//   withStation: boolean;
// };

// export default function CartPage() {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [message, setMessage] = useState<string | null>(null);
//   const navigate = useNavigate();

//   // Load from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem("myBookings");
//     if (saved) {
//       try {
//         const parsed = JSON.parse(saved);
//         setBookings(parsed);
//       } catch (err) {
//         console.error("Failed to parse bookings:", err);
//       }
//     }
//   }, []);

//   const formatPrice = (num: number) => num.toLocaleString("en-AE") + " AED";

//   const removeBooking = (id: string) => {
//     if (!window.confirm("Are you sure you want to remove this booking?")) return;

//     const updated = bookings.filter((b) => b.id !== id);
//     setBookings(updated);
//     localStorage.setItem("myBookings", JSON.stringify(updated));
//     setMessage("Booking removed successfully.");
//     setTimeout(() => setMessage(null), 3000);
//   };

//   const editBooking = (booking: Booking) => {
//     localStorage.setItem("editingBooking", JSON.stringify(booking));
//     navigate("/booking");
//   };

//   const addNewCart = () => {
//     localStorage.removeItem("editingBooking");
//     navigate("/booking");
//   };

//   const proceedToCheckout = () => {
//     // Placeholder – in real app: send to backend, show payment / confirmation page
//     setMessage("Proceeding to checkout... (this is a placeholder action)");
//     setTimeout(() => setMessage(null), 4000);
//   };

//   const grandTotal = bookings.reduce((sum, b) => sum + b.total, 0);

//   if (bookings.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="text-center max-w-md">
//           <ShoppingCart className="w-20 h-20 mx-auto text-gray-400 mb-6" />
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
//           <p className="text-lg text-gray-600 mb-8">
//             Start building your perfect event with our premium carts
//           </p>
//           <button
//             onClick={addNewCart}
//             className="bg-[#8baa85] hover:bg-[#708f6b] text-white px-10 py-5 rounded-xl font-medium text-lg shadow-md transition-all"
//           >
//             Book Your First Cart
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-gray-50 pb-20" style={{ backgroundColor: colors.sage50 }}>
//       {/* Header */}
//       <div
//         className="text-white"
//         style={{ background: `linear-gradient(135deg, ${colors.sage600} 0%, ${colors.sage500} 100%)` }}
//       >
//         <div className="max-w-6xl mx-auto px-5 py-14 md:py-20">
//           <div className="flex items-center gap-5">
//             <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
//               <ShoppingCart className="w-10 h-10" />
//             </div>
//             <div>
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
//                 My Event Carts
//               </h1>
//               <p className="mt-3 text-lg md:text-xl opacity-90">
//                 Review and manage your booked catering carts
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-16">
//         {message && (
//           <div className="mb-8 p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 flex items-center gap-4 shadow-sm">
//             <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
//             <span className="font-medium">{message}</span>
//             <button onClick={() => setMessage(null)} className="ml-auto text-emerald-700 hover:text-emerald-900">
//               <X className="w-6 h-6" />
//             </button>
//           </div>
//         )}

//         {bookings.map((booking) => (
//           <motion.div
//             key={booking.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="bg-white rounded-2xl shadow-xl border overflow-hidden mb-12 last:mb-0"
//             style={{ borderColor: colors.sage200 }}
//           >
//             {/* Header */}
//             <div
//               className="px-6 py-8 md:px-10 md:py-10 text-white"
//               style={{ backgroundColor: colors.sage500 }}
//             >
//               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//                 <div>
//                   <h2 className="text-2xl md:text-3xl font-bold">{booking.cart}</h2>
//                   <p className="mt-2 opacity-90 text-lg">
//                     {booking.guestPackage} • {booking.city} • {booking.date}
//                   </p>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-3xl md:text-4xl font-bold">
//                     {formatPrice(booking.total)}
//                   </div>
//                   <div className="text-sm opacity-85 mt-1">Estimated total</div>
//                 </div>
//               </div>
//             </div>

//             {/* Key Info */}
//             <div className="p-6 md:p-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b" style={{ borderColor: colors.sage200 }}>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Date</div>
//                 <div className="font-medium">{booking.date}</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Time</div>
//                 <div className="font-medium">{booking.timeSlot}</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Location</div>
//                 <div className="font-medium break-words">{booking.location}</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Contact</div>
//                 <div className="font-medium">
//                   {booking.name} • {booking.phone}
//                 </div>
//               </div>
//             </div>

//             {/* Selected Items */}
//             <div className="p-6 md:p-10 space-y-10">
//               <h3 className="text-2xl font-bold" style={{ color: colors.sage700 }}>
//                 Selected Items
//               </h3>

//               {Object.entries(booking.selectedItems).map(([section, items]) =>
//                 items.length > 0 ? (
//                   <div key={section} className="space-y-5">
//                     <h4 className="font-semibold text-lg flex items-center gap-3 text-gray-700">
//                       <CheckCircle2 className="w-5.5 h-5.5" style={{ color: colors.sage600 }} />
//                       {section.charAt(0).toUpperCase() + section.slice(1)}
//                     </h4>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                       {items.map((item) => (
//                         <div
//                           key={item.name}
//                           className="flex items-center gap-4 p-4 rounded-xl border bg-gray-50 hover:bg-gray-100 transition-all"
//                           style={{ borderColor: colors.sage300 }}
//                         >
//                           <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
//                             <img
//                               src={itemImages[item.name] || itemImages.DEFAULT}
//                               alt={item.name}
//                               className="w-full h-full object-cover"
//                             />
//                           </div>
//                           <span className="font-medium text-gray-800">{item.name}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ) : null
//               )}
//             </div>

//             {/* Notes */}
//             {booking.notes && (
//               <div className="mx-6 md:mx-10 mb-10 p-6 rounded-xl bg-amber-50/60 border border-amber-100">
//                 <div className="flex items-start gap-4">
//                   <Info className="w-6 h-6 text-amber-700 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <div className="font-medium text-amber-900 mb-2">Special Requests</div>
//                     <p className="text-gray-700 leading-relaxed">{booking.notes}</p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Actions */}
//             <div className="p-6 md:p-10 border-t flex flex-wrap gap-4" style={{ borderColor: colors.sage200 }}>
//               <button
//                 onClick={() => editBooking(booking)}
//                 className="flex-1 min-w-[160px] border-2 py-4 px-6 rounded-xl font-medium text-base flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
//                 style={{ borderColor: colors.sage400, color: colors.sage700 }}
//               >
//                 <Edit size={18} />
//                 Edit Cart
//               </button>

//               <button
//                 onClick={addNewCart}
//                 className="flex-1 min-w-[160px] border-2 py-4 px-6 rounded-xl font-medium text-base flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
//                 style={{ borderColor: colors.sage400, color: colors.sage700 }}
//               >
//                 <Plus size={18} />
//                 Add Another Cart
//               </button>

//               <button
//                 onClick={() => removeBooking(booking.id)}
//                 className="flex-1 min-w-[160px] border-2 border-red-200 text-red-600 py-4 px-6 rounded-xl font-medium text-base flex items-center justify-center gap-2 hover:bg-red-50 transition-colors"
//               >
//                 <Trash2 size={18} />
//                 Remove Cart
//               </button>
//             </div>
//           </motion.div>
//         ))}

//         {/* Grand Total */}
//         {bookings.length > 1 && (
//           <div className="bg-white p-8 rounded-2xl shadow-lg border text-center mb-12" style={{ borderColor: colors.sage200 }}>
//             <h3 className="text-2xl font-bold mb-4" style={{ color: colors.sage700 }}>
//               Grand Total (All Carts)
//             </h3>
//             <div className="text-4xl md:text-5xl font-bold" style={{ color: colors.sage600 }}>
//               {formatPrice(grandTotal)}
//             </div>
//           </div>
//         )}

//         {/* Final Confirmation Section */}
//         <div className="mt-16 pt-10 border-t border-gray-200 text-center">
//           <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//             Ready to Confirm Your Booking{bookings.length > 1 ? "s" : ""}?
//           </h3>

//           <p className="text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
//             Our team will review your {bookings.length > 1 ? "selections" : "selection"} and contact you within 24 hours to confirm details and finalize everything.
//             <br className="hidden sm:block" />
       
//           </p>

//           <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
//             <button
//               onClick={proceedToCheckout}
//               className={`
//                 bg-[#8baa85] hover:bg-[#708f6b] active:bg-[#567152]
//                 text-white font-semibold text-lg
//                 px-12 py-5 rounded-full
//                 shadow-lg hover:shadow-xl
//                 transition-all duration-300
//                 transform hover:scale-[1.03] active:scale-[0.98]
//               `}
//             >
//               Proceed to Checkout
//             </button>

//             {/* <button
//               onClick={addNewCart}
//               className={`
//                 border-2 border-[#a9c1a3] text-[#567152] hover:bg-[#f1f5f0]
//                 font-medium text-lg
//                 px-10 py-5 rounded-full
//                 transition-all duration-300
//               `}
//             >
//               Add Another Cart
//             </button> */}
//           </div>

//           <p className="mt-8 text-sm text-gray-500">
//             All bookings are subject to availability • We’ll reach out shortly with confirmation
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }






// CartPage.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Calendar,
  MapPin,
  Clock,
  Edit,
  Plus,
  Trash2,
  CheckCircle2,
  ArrowRight,
  Info,
  X,
} from "lucide-react";

const colors = {
  sage50: "#f9faf8",
  sage100: "#f1f5f0",
  sage200: "#e2eadc",
  sage300: "#c9dac3",
  sage400: "#a9c1a3",
  sage500: "#8baa85",
  sage600: "#708f6b",
  sage700: "#567152",
  gray50: "#fafafa",
  gray100: "#f5f5f5",
  gray200: "#e5e5e5",
  gray300: "#d4d4d8",
  gray600: "#4b5563",
  gray700: "#374151",
  gray800: "#1f2937",
};

const itemImages: Record<string, string> = {
  Keema: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=120",
  "Scrambled Egg": "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=120",
  Haloumi: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=120",
  Honey: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=120",
  Dates: "https://images.unsplash.com/photo-1615485290383-3a6a0e9e8e8e?w=120",
  "Black Olive": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=120",
  "Cherry Tomato": "https://images.unsplash.com/photo-1561642830-860ed803a3f3?w=120",
  "Extra Napkins": "https://images.unsplash.com/photo-1589984662646-e7b08ca2ffe8?w=120",
  DEFAULT: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=120",
};

type Booking = {
  id: string;
  timestamp: string;
  cart: string;
  guestPackage: string;
  date: string;
  timeSlot: string;
  city: string;
  location: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
  selectedItems: Record<string, { name: string; price?: number }[]>;
  total: number;
  withStation: boolean;
};

export default function CartPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("myBookings");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setBookings(parsed);
      } catch (err) {
        console.error("Failed to parse bookings:", err);
      }
    }
  }, []);

  const formatPrice = (num: number) => num.toLocaleString("en-AE") + " AED";

  const removeBooking = (id: string) => {
    if (!window.confirm("Remove this cart?")) return;
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem("myBookings", JSON.stringify(updated));
    setMessage("Cart removed.");
    setTimeout(() => setMessage(null), 3000);
  };

  const editBooking = (booking: Booking) => {
    localStorage.setItem("editingBooking", JSON.stringify(booking));
    navigate("/booking");
  };

  const addNewCart = () => {
    localStorage.removeItem("editingBooking");
    navigate("/booking");
  };

  const proceedToCheckout = () => {
    setMessage("Checkout initiated! (Placeholder — connect payment later)");
    setTimeout(() => setMessage(null), 4000);
  };

  const grandTotal = bookings.reduce((sum, b) => sum + b.total, 0);

  if (bookings.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <ShoppingCart className="w-20 h-20 mx-auto text-gray-400 mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <p className="text-lg text-gray-600 mb-8">
            Start building your perfect event with our premium carts
          </p>
          <button
            onClick={addNewCart}
            className="bg-[#8baa85] hover:bg-[#708f6b] text-white px-10 py-5 rounded-xl font-medium text-lg shadow-md transition-all"
          >
            Book Your First Cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20" style={{ backgroundColor: colors.sage50 }}>
      {/* Hero Section with Background Image */}
      <section className="relative h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&auto=format&fit=crop&q=80"
            alt="Premium catering carts hero"
            className="w-full h-full object-cover brightness-[0.65] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="bg-white/20 backdrop-blur-lg p-5 rounded-2xl shadow-xl">
              <ShoppingCart className="w-12 h-12 md:w-16 md:h-16" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-2xl">
              My Event Carts
            </h1>

            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto drop-shadow-lg">
              Review and manage your booked catering carts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 flex items-center gap-4 shadow-sm"
          >
            <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
            <span className="font-medium">{message}</span>
            <button onClick={() => setMessage(null)} className="ml-auto text-emerald-700 hover:text-emerald-900">
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}

        {/* Cart Cards */}
        {bookings.map((booking) => (
          <motion.div
            key={booking.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl border overflow-hidden mb-12 last:mb-0"
            style={{ borderColor: colors.sage200 }}
          >
            {/* Cart Header */}
            <div className="px-6 py-8 md:px-10 md:py-10 text-white" style={{ backgroundColor: colors.sage500 }}>
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">{booking.cart}</h2>
                  <p className="mt-2 opacity-90 text-lg">
                    {booking.guestPackage} • {booking.city} • {booking.date}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl md:text-4xl font-bold">
                    {formatPrice(booking.total)}
                  </div>
                  <div className="text-sm opacity-85 mt-1">Estimated total</div>
                </div>
              </div>
            </div>

            {/* Key Info */}
            <div className="p-6 md:p-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b" style={{ borderColor: colors.sage200 }}>
              <div>
                <div className="text-sm text-gray-500 mb-1">Date</div>
                <div className="font-medium">{booking.date}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Time</div>
                <div className="font-medium">{booking.timeSlot}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Location</div>
                <div className="font-medium break-words">{booking.location}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Contact</div>
                <div className="font-medium">
                  {booking.name} • {booking.phone}
                </div>
              </div>
            </div>

            {/* Selected Items */}
            <div className="p-6 md:p-10 space-y-10">
              <h3 className="text-2xl font-bold" style={{ color: colors.sage700 }}>
                Selected Items
              </h3>

              {Object.entries(booking.selectedItems).map(([section, items]) =>
                items.length > 0 ? (
                  <div key={section} className="space-y-5">
                    <h4 className="font-semibold text-lg flex items-center gap-3 text-gray-700">
                      <CheckCircle2 className="w-5.5 h-5.5" style={{ color: colors.sage600 }} />
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center gap-4 p-4 rounded-xl border bg-gray-50 hover:bg-gray-100 transition-all"
                          style={{ borderColor: colors.sage300 }}
                        >
                          <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                            <img
                              src={itemImages[item.name] || itemImages.DEFAULT}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="font-medium text-gray-800">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null
              )}
            </div>

            {/* Notes */}
            {booking.notes && (
              <div className="mx-6 md:mx-10 mb-10 p-6 rounded-xl bg-amber-50/60 border border-amber-100">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-amber-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-amber-900 mb-2">Special Requests</div>
                    <p className="text-gray-700 leading-relaxed">{booking.notes}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="p-6 md:p-10 border-t flex flex-wrap gap-4" style={{ borderColor: colors.sage200 }}>
              <button
                onClick={() => editBooking(booking)}
                className="flex-1 min-w-[160px] border-2 py-4 px-6 rounded-xl font-medium text-base flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                style={{ borderColor: colors.sage400, color: colors.sage700 }}
              >
                <Edit size={18} />
                Edit Cart
              </button>

              <button
                onClick={addNewCart}
                className="flex-1 min-w-[160px] border-2 py-4 px-6 rounded-xl font-medium text-base flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                style={{ borderColor: colors.sage400, color: colors.sage700 }}
              >
                <Plus size={18} />
                Add Another Cart
              </button>

              <button
                onClick={() => removeBooking(booking.id)}
                className="flex-1 min-w-[160px] border-2 border-red-200 text-red-600 py-4 px-6 rounded-xl font-medium text-base flex items-center justify-center gap-2 hover:bg-red-50 transition-colors"
              >
                <Trash2 size={18} />
                Remove Cart
              </button>
            </div>
          </motion.div>
        ))}

        {/* Grand Total */}
        {bookings.length > 1 && (
          <div className="bg-white p-8 rounded-2xl shadow-lg border text-center mb-12" style={{ borderColor: colors.sage200 }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: colors.sage700 }}>
              Grand Total (All Carts)
            </h3>
            <div className="text-4xl md:text-5xl font-bold" style={{ color: colors.sage600 }}>
              {formatPrice(grandTotal)}
            </div>
          </div>
        )}

        {/* Final Confirmation Section */}
        <div className="mt-16 pt-10 border-t border-gray-200 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Confirm Your Booking{bookings.length > 1 ? "s" : ""}?
          </h3>

          <p className="text-gray-600 text-lg mb-10 max-w-3xl mx-auto">
            Our team will review your {bookings.length > 1 ? "selections" : "selection"} and contact you within 24 hours to confirm details and finalize everything.
            <br className="hidden sm:block" />
           
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button
              onClick={proceedToCheckout}
              className={`
                bg-[#8baa85] hover:bg-[#708f6b] active:bg-[#567152]
                text-white font-semibold text-lg
                px-12 py-5 rounded-full
                shadow-lg hover:shadow-xl
                transition-all duration-300
                transform hover:scale-[1.03] active:scale-[0.98]
              `}
            >
              Proceed to Checkout
            </button>

          
          </div>

          <p className="mt-8 text-sm text-gray-500">
            All bookings are subject to availability • We’ll reach out shortly with confirmation
          </p>
        </div>
      </div>
    </main>
  );
}