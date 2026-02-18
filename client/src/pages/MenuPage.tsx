"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace with your actual image imports
import cartBreakfast from "@/assets/cart-breakfast.jpg";
import cartSandwich from "@/assets/cart-sandwich.jpg";
import cartPizza from "@/assets/cart-pizza.jpg";
import cartCheese from "@/assets/cart-cheese.jpg";
import cartSweet from "@/assets/cart-sweet.jpg";
import SpecialDeals from "@/components/home/SpecialDeals";

const categories = ["All", "Breakfast", "Sandwich", "Pizza", "Cheese", "Sweet", "Candy", "Drinks"];

const menuData = [
  {
    category: "Breakfast",
    name: "Breakfast Cart",
    headerTitle: "Breakfast Cart",
    prices: {
      "1-20": "1800 AED",
      "20-30": "2650 AED",
      "30-50": "3950 AED",
    },
    img: cartBreakfast,
    description: "Traditional & hearty breakfast spread with fresh breads, cheeses and Middle Eastern classics",
    sections: [
      {
        title: "Main (Choose 3)",
        items: ["Keema", "Sausage", "Foul", "Balaleet", "Scrambled Egg", "Haloumi", "Shakshouka", "Boiled Egg", "Falafel", "Chickpeas", "Bajilla"]
      },
      {
        title: "Cheese (Choose 3)",
        items: ["Labneh", "Mozzarella", "Labneh with Zaatar", "Creamy Cheese", "Cheddar", "Cream Cheese", "Burrata", "Feta", "Kashkaval"]
      },
      {
        title: "Baked (Choose 2)",
        items: ["Puratha", "Lebanese Bread", "Brown Bread", "Toast", "French Bread", "Jabab", "Khameer", "Mini Samoon", "Mini Croissant"]
      },
      {
        title: "Complements (Choose 4)",
        items: ["Strawberry", "Grapes", "Makdous", "Dates", "Dried Apricots", "Figs", "Lupini"]
      },
      {
        title: "Other (Choose 4)",
        items: ["Black Olive", "Green Olive", "Grilled Olive", "Cherry tomato", "Cucumber sticks", "Carrot Sticks", "Cranberries", "Jam", "Honey", "Olive Oil"]
      },
    ],
    note: "Included: Black/Green/Grilled Olives, Cherry tomato, Cucumber & Carrot sticks"
  },

  {
    category: "Sandwich",
    name: "Sandwiches Cart",
    headerTitle: "Sandwiches Cart",
    prices: {
      "1-20": "2000 AED",
      "20-30": "–",
      "30-50": "–",
    },
    img: cartSandwich,
    description: "Gourmet Ciabatta sandwiches with premium proteins, fresh vegetables and signature sauces",
    sections: [
      {
        title: "Protein (Choose 3)",
        items: ["Tuna", "Salami", "Spicy Salami", "Bresaola", "Roasted Chicken Breast", "Turkey", "Pepperoni", "Grilled Sausage", "Scrambled Eggs", "Boiled Egg"]
      },
      {
        title: "Veggies & Nuts (Choose 6)",
        items: ["Rocca", "Basil Leaves", "Jalapeno", "Tomato", "Pickles", "Olives", "Bell Pepper", "Iceberg Lettuce", "Sun-Dried Tomato", "Black Olive", "Green Olive", "Grilled Olive", "Cherry tomato", "Cucumber sticks", "Carrot Sticks", "Cranberries", "Lettuce"]
      },
      {
        title: "Sauces (Choose 3)",
        items: ["Pesto", "Olive Oil", "Balsamic Vinegar", "Mustard", "Mayo", "Ketchup", "Sriracha", "Honey", "Guacamole", "Chipotle", "Thousand Island", "BBQ", "Honey Mustard", "Peri Peri", "Buffalo", "Caesar"]
      },
      {
        title: "Cheese (Choose 3)",
        items: ["Halloumi Cheese", "Cream Cheese", "Liquid Cheese", "Mozzarella", "Provolone", "Cheddar", "Burrata"]
      },
    ],
    note: "Preset: Ciabatta bread (Vegan option: skip bread and choose 2 extra from Veggies)"
  },

  {
    category: "Pizza",
    name: "Pizza Cart",
    headerTitle: "Pizza Cart",
    prices: {
      "1-20": "2200 AED",
      "20-30": "3050 AED",
      "30-50": "4350 AED",
    },
    img: cartPizza,
    description: "Artisan pizzas made with fresh dough, signature marinara and premium toppings",
    sections: [
      {
        title: "Cheese (Choose 3)",
        items: ["Mozzarella", "Cheddar blend", "Parmesan", "Goat cheese", "Burrata", "Kashkaval", "Feta Cheese"]
      },
      {
        title: "Meats (Choose 3)",
        items: ["Pepperoni", "Salami", "Chicken cubes", "Tuna", "Ground beef", "Hotdog", "Shrimps", "Turkey"]
      },
      {
        title: "Veggies (Choose 5)",
        items: ["Tomato", "Olives", "Bell pepper", "Mushroom", "Broccoli", "Onion", "Jalapeño", "Sun-dried tomato", "Sweet corn", "Pineapple", "Rocca"]
      },
      {
        title: "Sauces (Choose 3)",
        items: ["BBQ", "Pesto sauce", "Ranch sauce", "Buffalo sauce", "Chili oil", "Honey", "Daqous", "Ketchup", "Balsamic", "Olive oil"]
      },
    ],
    note: "Comes with Pizza dough and marinara"
  },

  {
    category: "Cheese",
    name: "Cheese Cart",
    headerTitle: "Cheese Cart",
    prices: {
      "1-20": "–",
      "20-30": "–",
      "30-50": "–",
    },
    img: cartCheese,
    description: "Premium cheese & charcuterie selection with sweet & savory accompaniments",
    sections: [
      {
        title: "Cheese (Choose 3)",
        items: ["Cheddar", "Blue cheese", "Smoked cheese", "Brie", "Parmesan", "Spicy cheddar", "Feta Cheese", "Comté", "Labneh balls with zaatar"]
      },
      {
        title: "Cold Meats (Choose 2)",
        items: ["Salami", "Prosciutto", "Pepperoni", "Bresaola", "Turkey", "Pastrami"]
      },
      {
        title: "Jams (Choose 2)",
        items: ["Rose jam", "Apricot jam", "Figs Jam", "Raspberry jam", "Strawberry jam"]
      },
      {
        title: "Complements (Choose 7)",
        items: ["Blueberry", "Raspberry", "Strawberry", "Grapes", "Dried/Fresh Figs", "Sundried Tomato", "Cashews", "Walnuts", "Pretzels", "Almonds", "Pistachios", "Olives", "Pickles", "Plain crackers", "Zaatar crackers", "Carrot Sticks", "Cucumber Sticks", "Watermelon"]
      },
    ],
    note: "Included: Baguette bread, Honey"
  },

  {
    category: "Sweet",
    name: "Sweet Cart",
    headerTitle: "Sweet Cart",
    prices: {
      "1-20": "500 AED",
      "20-30": "750 AED",
      "30-50": "1000 AED",
    },
    img: cartSweet,
    description: "Indulgent sweet station with fruits, chocolates, candies and dessert toppings",
    sections: [
      {
        title: "Sweet (Choose 1 or Both)",
        items: ["Brownie", "Croissant"]
      },
      {
        title: "Fruits (Choose 6)",
        items: ["Strawberry", "Banana", "Raspberry", "Dried Mangos", "Kiwi", "Pineapples", "Mangos", "Blueberry", "Blackberry", "Grapes"]
      },
      {
        title: "Candies & Biscuits (Choose 6)",
        items: ["KitKat", "Astor Sticks", "M&M's", "Pretzels", "Dark Chocolate Bites", "Marshmallows", "Cashews", "Popcorn", "Cornflakes", "Skittles", "Sprinkles", "Gummy Bears", "Hazelnut"]
      },
      {
        title: "Sauces (Choose 2)",
        items: ["Pistachio sauce", "Caramel sauce", "Milk chocolate sauce", "Chocolate hazelnut sauce", "White chocolate sauce"]
      },
    ]
  },

  {
    category: "Candy",
    name: "Candy Cart",
    headerTitle: "Candy Cart",
    prices: {
      "1-20": "–",
      "20-30": "–",
      "30-50": "–",
    },
    img: cartSweet, // reuse or replace with dedicated candy image
    description: "Fun & colorful candy and fruit station – fully vegan options available",
    sections: [
      {
        title: "Candy (Choose 4)",
        items: ["Cola Pacifiers", "Tutti frutti rings", "Apple strings", "Veggie Sour Raspberry skulls", "Rainbow Sea", "Strawberry Lips", "Cherries"]
      },
      {
        title: "Fruits (Choose 4)",
        items: ["Apple", "Grapes", "Blueberry", "Mangoes", "Kiwi", "Banana"]
      },
      {
        title: "Candies & Biscuits (Choose 4)",
        items: ["Astor Sticks", "Wafer", "Pretzels", "Popcorn", "Marshmallow", "Almonds", "Cashews", "Walnuts", "Salty Chips"]
      },
      {
        title: "Fruits (extra)",
        items: ["Melon", "Watermelon", "Pineapple", "Pomegranate", "Cherries", "Strawberry"]
      },
    ],
    note: "All options are vegan"
  },

  {
    category: "Drinks",
    name: "Drinks Cart",
    headerTitle: "Drinks & Beverages Cart",
    prices: {
      "Without Station": "500 AED starting from",
    },
    img: cartSweet, // placeholder — replace with actual drinks image if available
    description: "Refreshing mocktails, slushies, fresh juices and non-alcoholic bubbly",
    sections: [
      {
        title: "Frozen Mocktail Bar (Choose 2)",
        items: ["Pink Champagne", "Gold Champagne", "Love Potion", "Iconic Strawberry Lemonade", "Pina Colada", "Passionfruit mojito", "Blue Hawaiian", "Non-alcoholic Champagne"]
      },
      {
        title: "Slushie Bar (Choose 2)",
        items: ["Strawberry Slushie", "Frozen Lemonade", "Vimto", "Tropical Bliss", "Blue Lagoon", "Watermelon", "Lemon mint", "Orange"]
      },
      {
        title: "Fresh Juices",
        items: []
      },
      {
        title: "Complements",
        items: ["Strawberry", "Lemon Slice", "Mint", "Flowers", "Orange Slices", "Syrup and sparkles", "Cherry Pops"]
      },
    ],
    note: "Also available: Hot chocolate, Karak, Cold Drinks, Cups/Glasses included"
  },
];

const extraInfo = {
  delivery: {
    "Dubai - Abu Dhabi - Sharjah - Al Ain": "200 AED",
    "Ras Al Khaimah - Fujairah - Ajman - Um Al Quwain - Any City Outside Abu Dhabi and Al Ain": "300 AED",
  },
  services: [
    "Non-Alcoholic Champagne, Fresh Juices, Cold Drinks, Hot chocolate, Karak",
    "Cups/Glasses included when station is booked",
    "Customization – engraved mini boards 50 AED per board (names, initials, logos, dates…)",
  ],
};

export default function MenuPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? menuData
    : menuData.filter((m) => m.category === active);

  return (
    <main className="bg-[#f8fbf6] min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[65vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt="Elegant luxury catering setup with gourmet food carts"
            className="w-full h-full object-cover brightness-[0.78] scale-[1.03] transition-transform duration-[20s]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/65" />
        </div>

        <div className="relative z-10 text-center text-white px-5 sm:px-8 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-5 md:mb-2 drop-shadow-2xl leading-tight"
          >
            Our Premium <span className="italic text-emerald-300">Event Carts</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl mb-10 md:mb-4 drop-shadow-lg max-w-3xl mx-auto leading-relaxed"
          >
            From lavish breakfast spreads to gourmet sandwiches, artisan pizzas, luxury cheese boards, indulgent sweets, colorful candy stations and refreshing beverages — crafted for memorable moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-7"
          >
            {/* <a
              href="#menu"
              className="px-9 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
            >
              View Full Menu
            </a> */}
            {/* <a
              href="/booking"
              className="px-9 py-4 bg-white/15 backdrop-blur-md border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white/25 transition-all duration-300 hover:shadow-xl"
            >
              Book Your Cart
            </a> */}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section id="menu" className="py-14 md:py-20">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14 md:mb-20"
          >
            <p className="text-[#6b8e23] uppercase tracking-[0.4em] text-sm font-semibold mb-4">
              Our Signature Offerings
            </p>
            <h1 className="text-5xl md:text-6xl font-serif text-[#3f513f]">
              The <span className="italic">Menu</span>
            </h1>
            <div className="w-32 h-px bg-[#a8b5a8] mx-auto mt-7 opacity-70"></div>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 sm:px-8 py-2.5 rounded-full text-sm md:text-base font-semibold uppercase tracking-wider transition-all duration-300 border-2 ${
                  active === cat
                    ? "bg-gradient-to-r from-[#6b8e23] to-[#8bac4f] text-white border-transparent shadow-lg"
                    : "bg-white/80 text-[#5f7a47] border-[#c3d1b8] hover:border-[#6b8e23] hover:bg-[#e8efe8]/70 hover:shadow-md"
                } backdrop-blur-sm`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cart Sections */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-20 md:space-y-28"
            >
              {filtered.map((cart) => (
                <div key={cart.name} className="scroll-mt-20" id={cart.category.toLowerCase()}>
                  <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-serif text-[#3f513f] text-center lg:text-left mb-8 md:mb-10 tracking-tight"
                  >
                    {cart.headerTitle}
                  </motion.h2>

                  <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
                    {/* Image + Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="w-full max-w-lg lg:max-w-md xl:max-w-lg flex-shrink-0"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#d4e0d4]">
                        <div className="aspect-[4/3.2] sm:aspect-[4/3] overflow-hidden">
                          <img
                            src={cart.img}
                            alt={cart.name}
                            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                          />
                        </div>
                        <div className="p-7 md:p-9 text-center bg-gradient-to-b from-[#fafcf9] to-[#f4f7f4]">
                          <h3 className="text-2xl sm:text-3xl font-serif text-[#3f513f] mb-4">
                            {cart.name}
                          </h3>
                          <p className="text-[#5f7a47] text-base italic mb-7 max-w-prose mx-auto leading-relaxed">
                            {cart.description}
                          </p>

                          <div className="space-y-2.5 mb-7">
                            {Object.entries(cart.prices).map(([range, price]) =>
                              price && price !== "–" ? (
                                <div key={range} className="flex justify-center items-center gap-4">
                                  <span className="text-sm text-[#71797e] font-medium">{range} Guests:</span>
                                  <span className="text-xl md:text-2xl font-bold text-[#5f7a47]">{price}</span>
                                </div>
                              ) : null
                            )}
                          </div>

                          {cart.note && (
                            <p className="text-sm text-[#6b8e23] italic font-medium">{cart.note}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>

                    {/* Sections */}
                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="w-full"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
                        {cart.sections.map((section, idx) => (
                          <div
                            key={idx}
                            className="pb-9 border-b border-[#d4e0d4] last:border-none last:pb-0"
                          >
                            <h4 className="text-[#3f513f] font-semibold uppercase tracking-wide text-sm mb-5 border-l-4 border-[#6b8e23] pl-4">
                              {section.title}
                            </h4>
                            {section.items.length > 0 ? (
                              <ul className="space-y-3.5">
                                {section.items.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center text-[#5f7a47] text-[15px] leading-relaxed"
                                  >
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#a8b5a8] mr-4 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-[#71797e] text-sm italic">Included / to taste</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <SpecialDeals />
              </motion.div>

              {/* Additional Information - shown only when "All" is selected */}
              {active === "All" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-20 pt-10 border-t border-[#d4e0d4] text-center md:text-left"
                >
                  <h2 className="text-3xl md:text-4xl font-serif text-[#3f513f] mb-10">Additional Information</h2>

                  <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    <div>
                      <h3 className="text-2xl font-semibold text-[#3f513f] mb-6">Delivery Prices</h3>
                      {Object.entries(extraInfo.delivery).map(([area, price]) => (
                        <p key={area} className="mb-4 text-[#5f7a47] text-lg">
                          <span className="font-medium text-[#3f513f]">{area}:</span> {price}
                        </p>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-[#3f513f] mb-6">Our Services</h3>
                      <ul className="space-y-5">
                        {extraInfo.services.map((s, i) => (
                          <li key={i} className="flex items-start text-[#5f7a47] text-lg">
                            <span className="w-3 h-3 mt-2 mr-4 bg-[#6b8e23] rounded-full flex-shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-8 text-sm italic text-[#6b8e23]">
                        +300 AED With Station (where applicable)
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Booking CTA */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-20 pt-14 pb-20 border-t border-[#d4e0d4]"
              >
                <div className="max-w-3xl mx-auto text-center px-4">
                  <h2 className="text-3xl md:text-4xl font-serif text-[#3f513f] mb-6">
                    Ready to Elevate Your Event?
                  </h2>
                  <p className="text-[#5f7a47] text-lg md:text-xl mb-10 leading-relaxed">
                    Reserve your favorite cart today or request a fully custom setup for your special occasion.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-10">
                    <a
                      href="/booking"
                      className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-[#6b8e23] to-[#8bac4f] text-white font-semibold text-xl rounded-full shadow-xl hover:brightness-110 transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
                    >
                      Book Now
                    </a>

                    <a
                      href="/reserve-table"
                      className="inline-flex items-center justify-center px-12 py-5 bg-white text-[#6b8e23] font-semibold text-xl rounded-full border-2 border-[#6b8e23] shadow-lg hover:bg-[#e8efe8] hover:text-[#5a7a1e] transition-all duration-300"
                    >
                      Reserve Your Table
                    </a>
                  </div>

                  <p className="mt-8 text-base text-[#71797e]">
                    Or contact us directly at{" "}
                    <a href="tel:+971xxxxxxxx" className="text-[#6b8e23] hover:underline font-medium">
                      +971 XX XXX XXXX
                    </a>{" "}
                    • WhatsApp available
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Replace with your actual image imports
// import cartBreakfast from "@/assets/cart-breakfast.jpg";
// import cartSandwich from "@/assets/cart-sandwich.jpg";
// import cartPizza from "@/assets/cart-pizza.jpg";
// import cartCheese from "@/assets/cart-cheese.jpg";
// import cartSweet from "@/assets/cart-sweet.jpg";
// import SpecialDeals from "@/components/home/SpecialDeals";


// const categories = ["All", "Breakfast", "Sandwich", "Pizza", "Cheese", "Sweet", "Candy", "Drinks"];

// const menuData = [
//   {
//     category: "Breakfast",
//     name: "Breakfast Cart",
//     headerTitle: "Breakfast Cart",
//     prices: {
//       "1-20": "1800 AED",
//       "20-30": "2650 AED",
//       "30-50": "3950 AED",
//     },
//     img: cartBreakfast,
//     description: "Traditional & hearty breakfast spread with fresh breads, cheeses and Middle Eastern classics",
//     sections: [
//       {
//         title: "Main (Choose 3)",
//         items: ["Keema", "Sausage", "Foul", "Balaleet", "Scrambled Egg", "Haloumi", "Shakshouka", "Boiled Egg", "Falafel", "Chickpeas", "Bajilla"]
//       },
//       {
//         title: "Cheese (Choose 3)",
//         items: ["Labneh", "Mozzarella", "Labneh with Zaatar", "Creamy Cheese", "Cheddar", "Cream Cheese", "Burrata", "Feta", "Kashkaval"]
//       },
//       {
//         title: "Baked (Choose 2)",
//         items: ["Puratha", "Lebanese Bread", "Brown Bread", "Toast", "French Bread", "Jabab", "Khameer", "Mini Samoon", "Mini Croissant"]
//       },
//       {
//         title: "Complements (Choose 4)",
//         items: ["Strawberry", "Grapes", "Makdous", "Dates", "Dried Apricots", "Figs", "Lupini"]
//       },
//       {
//         title: "Other (Choose 4)",
//         items: ["Black Olive", "Green Olive", "Grilled Olive", "Cherry tomato", "Cucumber sticks", "Carrot Sticks", "Cranberries", "Jam", "Honey", "Olive Oil"]
//       },
//     ],
//     note: "Included: Black/Green/Grilled Olives, Cherry tomato, Cucumber & Carrot sticks"
//   },

//   {
//     category: "Sandwich",
//     name: "Sandwiches Cart",
//     headerTitle: "Sandwiches Cart",
//     prices: {
//       "1-20": "2000 AED",
//       "20-30": "–",
//       "30-50": "–",
//     },
//     img: cartSandwich,
//     description: "Gourmet Ciabatta sandwiches with premium proteins, fresh vegetables and signature sauces",
//     sections: [
//       {
//         title: "Protein (Choose 3)",
//         items: ["Tuna", "Salami", "Spicy Salami", "Bresaola", "Roasted Chicken Breast", "Turkey", "Pepperoni", "Grilled Sausage", "Scrambled Eggs", "Boiled Egg"]
//       },
//       {
//         title: "Veggies & Nuts (Choose 6)",
//         items: ["Rocca", "Basil Leaves", "Jalapeno", "Tomato", "Pickles", "Olives", "Bell Pepper", "Iceberg Lettuce", "Sun-Dried Tomato", "Black Olive", "Green Olive", "Grilled Olive", "Cherry tomato", "Cucumber sticks", "Carrot Sticks", "Cranberries", "Lettuce"]
//       },
//       {
//         title: "Sauces (Choose 3)",
//         items: ["Pesto", "Olive Oil", "Balsamic Vinegar", "Mustard", "Mayo", "Ketchup", "Sriracha", "Honey", "Guacamole", "Chipotle", "Thousand Island", "BBQ", "Honey Mustard", "Peri Peri", "Buffalo", "Caesar"]
//       },
//       {
//         title: "Cheese (Choose 3)",
//         items: ["Halloumi Cheese", "Cream Cheese", "Liquid Cheese", "Mozzarella", "Provolone", "Cheddar", "Burrata"]
//       },
//     ],
//     note: "Preset: Ciabatta bread (Vegan option: skip bread and choose 2 extra from Veggies)"
//   },

//   {
//     category: "Pizza",
//     name: "Pizza Cart",
//     headerTitle: "Pizza Cart",
//     prices: {
//       "1-20": "2200 AED",
//       "20-30": "3050 AED",
//       "30-50": "4350 AED",
//     },
//     img: cartPizza,
//     description: "Artisan pizzas made with fresh dough, signature marinara and premium toppings",
//     sections: [
//       {
//         title: "Cheese (Choose 3)",
//         items: ["Mozzarella", "Cheddar blend", "Parmesan", "Goat cheese", "Burrata", "Kashkaval", "Feta Cheese"]
//       },
//       {
//         title: "Meats (Choose 3)",
//         items: ["Pepperoni", "Salami", "Chicken cubes", "Tuna", "Ground beef", "Hotdog", "Shrimps", "Turkey"]
//       },
//       {
//         title: "Veggies (Choose 5)",
//         items: ["Tomato", "Olives", "Bell pepper", "Mushroom", "Broccoli", "Onion", "Jalapeño", "Sun-dried tomato", "Sweet corn", "Pineapple", "Rocca"]
//       },
//       {
//         title: "Sauces (Choose 3)",
//         items: ["BBQ", "Pesto sauce", "Ranch sauce", "Buffalo sauce", "Chili oil", "Honey", "Daqous", "Ketchup", "Balsamic", "Olive oil"]
//       },
//     ],
//     note: "Comes with Pizza dough and marinara"
//   },

//   {
//     category: "Cheese",
//     name: "Cheese Cart",
//     headerTitle: "Cheese Cart",
//     prices: {
//       "1-20": "–",
//       "20-30": "–",
//       "30-50": "–",
//     },
//     img: cartCheese,
//     description: "Premium cheese & charcuterie selection with sweet & savory accompaniments",
//     sections: [
//       {
//         title: "Cheese (Choose 3)",
//         items: ["Cheddar", "Blue cheese", "Smoked cheese", "Brie", "Parmesan", "Spicy cheddar", "Feta Cheese", "Comté", "Labneh balls with zaatar"]
//       },
//       {
//         title: "Cold Meats (Choose 2)",
//         items: ["Salami", "Prosciutto", "Pepperoni", "Bresaola", "Turkey", "Pastrami"]
//       },
//       {
//         title: "Jams (Choose 2)",
//         items: ["Rose jam", "Apricot jam", "Figs Jam", "Raspberry jam", "Strawberry jam"]
//       },
//       {
//         title: "Complements (Choose 7)",
//         items: ["Blueberry", "Raspberry", "Strawberry", "Grapes", "Dried/Fresh Figs", "Sundried Tomato", "Cashews", "Walnuts", "Pretzels", "Almonds", "Pistachios", "Olives", "Pickles", "Plain crackers", "Zaatar crackers", "Carrot Sticks", "Cucumber Sticks", "Watermelon"]
//       },
//     ],
//     note: "Included: Baguette bread, Honey"
//   },

//   {
//     category: "Sweet",
//     name: "Sweet Cart",
//     headerTitle: "Sweet Cart",
//     prices: {
//       "1-20": "500 AED",
//       "20-30": "750 AED",
//       "30-50": "1000 AED",
//     },
//     img: cartSweet,
//     description: "Indulgent sweet station with fruits, chocolates, candies and dessert toppings",
//     sections: [
//       {
//         title: "Sweet (Choose 1 or Both)",
//         items: ["Brownie", "Croissant"]
//       },
//       {
//         title: "Fruits (Choose 6)",
//         items: ["Strawberry", "Banana", "Raspberry", "Dried Mangos", "Kiwi", "Pineapples", "Mangos", "Blueberry", "Blackberry", "Grapes"]
//       },
//       {
//         title: "Candies & Biscuits (Choose 6)",
//         items: ["KitKat", "Astor Sticks", "M&M's", "Pretzels", "Dark Chocolate Bites", "Marshmallows", "Cashews", "Popcorn", "Cornflakes", "Skittles", "Sprinkles", "Gummy Bears", "Hazelnut"]
//       },
//       {
//         title: "Sauces (Choose 2)",
//         items: ["Pistachio sauce", "Caramel sauce", "Milk chocolate sauce", "Chocolate hazelnut sauce", "White chocolate sauce"]
//       },
//     ]
//   },

//   {
//     category: "Candy",
//     name: "Candy Cart",
//     headerTitle: "Candy Cart",
//     prices: {
//       "1-20": "–",
//       "20-30": "–",
//       "30-50": "–",
//     },
//     img: cartSweet, // reuse sweet image or replace with dedicated one
//     description: "Fun & colorful candy and fruit station – fully vegan options available",
//     sections: [
//       {
//         title: "Candy (Choose 4)",
//         items: ["Cola Pacifiers", "Tutti frutti rings", "Apple strings", "Veggie Sour Raspberry skulls", "Rainbow Sea", "Strawberry Lips", "Cherries"]
//       },
//       {
//         title: "Fruits (Choose 4)",
//         items: ["Apple", "Grapes", "Blueberry", "Mangoes", "Kiwi", "Banana"]
//       },
//       {
//         title: "Candies & Biscuits (Choose 4)",
//         items: ["Astor Sticks", "Wafer", "Pretzels", "Popcorn", "Marshmallow", "Almonds", "Cashews", "Walnuts", "Salty Chips"]
//       },
//       {
//         title: "Fruits (extra)",
//         items: ["Melon", "Watermelon", "Pineapple", "Pomegranate", "Cherries", "Strawberry"]
//       },
//     ],
//     note: "All options are vegan"
//   },

//   {
//     category: "Drinks",
//     name: "Drinks Cart",
//     headerTitle: "Drinks & Beverages Cart",
//     prices: {
//       "Without Station": "500 AED starting from",
//     },
//     img: cartSweet, // placeholder — replace with actual drinks image if available
//     description: "Refreshing mocktails, slushies, fresh juices and non-alcoholic bubbly",
//     sections: [
//       {
//         title: "Frozen Mocktail Bar (Choose 2)",
//         items: ["Pink Champagne", "Gold Champagne", "Love Potion", "Iconic Strawberry Lemonade", "Pina Colada", "Passionfruit mojito", "Blue Hawaiian", "Non-alcoholic Champagne"]
//       },
//       {
//         title: "Slushie Bar (Choose 2)",
//         items: ["Strawberry Slushie", "Frozen Lemonade", "Vimto", "Tropical Bliss", "Blue Lagoon", "Watermelon", "Lemon mint", "Orange"]
//       },
//       {
//         title: "Fresh Juices",
//         items: []
//       },
//       {
//         title: "Complements",
//         items: ["Strawberry", "Lemon Slice", "Mint", "Flowers", "Orange Slices", "Syrup and sparkles", "Cherry Pops"]
//       },
//     ],
//     note: "Also available: Hot chocolate, Karak, Cold Drinks, Cups/Glasses included"
//   },
// ];

// const extraInfo = {
//   delivery: {
//     "Dubai - Abu Dhabi - Sharjah - Al Ain": "200 AED",
//     "Ras Al Khaimah - Fujairah - Ajman - Um Al Quwain - Any City Outside Abu Dhabi and Al Ain": "300 AED",
//   },
//   services: [
//     "Non-Alcoholic Champagne, Fresh Juices, Cold Drinks, Hot chocolate, Karak",
//     "Cups/Glasses included when station is booked",
//     "Customization – engraved mini boards 50 AED per board (names, initials, logos, dates…)",
//   ],
// };

// const MenuPage = () => {
//   const [active, setActive] = useState("All");

//   const filtered = active === "All"
//     ? menuData
//     : menuData.filter((m) => m.category === active);

//   return (
//     <main className="pt-12 bg-[#f8fbf6] min-h-screen">
//       <section className="py-12">
//         <div className="container mx-auto px-4 max-w-7xl">

//           {/* Page Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <p className="text-[#6b8e23] uppercase tracking-[0.35em] text-sm font-semibold mb-3">
//               Our Offerings
//             </p>
//             <h1 className="text-5xl md:text-6xl font-serif text-[#3f513f]">
//               The <span className="italic">Menu</span>
//             </h1>
//             <div className="w-28 h-px bg-[#a8b5a8] mx-auto mt-6 opacity-60"></div>
//           </motion.div>

//           {/* Category Filters */}
//           <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActive(cat)}
//                 className={`px-7 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 border-2 ${
//                   active === cat
//                     ? "sage-gradient text-white border-[#6b8e23] shadow-[0_4px_14px_rgba(107,142,35,0.25)]"
//                     : "bg-white/70 text-[#5f7a47] border-[#c3d1b8] hover:border-[#6b8e23] hover:bg-[#e8efe8]/60 hover:shadow-sm"
//                 } backdrop-blur-sm`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Cart Sections */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={active}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.45 }}
//               className="space-y-20 md:space-y-28"
//             >
//               {filtered.map((cart) => (
//                 <div key={cart.name} className="scroll-mt-24" id={cart.category.toLowerCase()}>

//                   {/* Cart Header Title */}
//                   <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-4xl md:text-5xl font-serif text-[#3f513f] text-center lg:text-left mb-8 md:mb-10 tracking-tight"
//                   >
//                     {cart.headerTitle}
//                   </motion.h2>

//                   <div className="flex flex-col items-center lg:flex-row lg:items-start gap-10 lg:gap-16">

//                     {/* Image + Info Card */}
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5 }}
//                       className="w-full max-w-lg lg:max-w-md xl:max-w-lg flex-shrink-0"
//                     >
//                       <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#d4e0d4]">
//                         <div className="aspect-[4/3.5] sm:aspect-[4/3] overflow-hidden">
//                           <img
//                             src={cart.img}
//                             alt={cart.name}
//                             className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
//                           />
//                         </div>

//                         <div className="p-7 md:p-8 text-center bg-gradient-to-b from-[#fafcf9] to-[#f4f7f4]">
//                           <h3 className="text-2xl sm:text-3xl font-serif text-[#3f513f] mb-3">
//                             {cart.name}
//                           </h3>
//                           <p className="text-[#5f7a47] text-sm sm:text-base italic mb-6 max-w-prose mx-auto leading-relaxed">
//                             {cart.description}
//                           </p>

//                           <div className="space-y-2 mb-6">
//                             {Object.entries(cart.prices).map(([range, price]) => (
//                               price && price !== "–" && (
//                                 <div key={range} className="flex justify-center items-center gap-3">
//                                   <span className="text-sm text-[#71797e] font-medium">{range} Guests:</span>
//                                   <span className="text-xl font-bold text-[#5f7a47]">{price}</span>
//                                 </div>
//                               )
//                             ))}
//                           </div>

//                           {cart.note && (
//                             <p className="text-sm text-[#6b8e23] italic font-medium">{cart.note}</p>
//                           )}
//                         </div>
//                       </div>
//                     </motion.div>

//                     {/* Menu Sections */}
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: 0.1 }}
//                       className="w-full"
//                     >
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
//                         {cart.sections.map((section, idx) => (
//                           <div
//                             key={idx}
//                             className="pb-8 border-b border-[#d4e0d4] last:border-none"
//                           >
//                             <h4 className="text-[#3f513f] font-semibold uppercase tracking-wide text-sm mb-4 border-l-4 border-[#6b8e23] pl-4">
//                               {section.title}
//                             </h4>
//                             {section.items.length > 0 ? (
//                               <ul className="space-y-3">
//                                 {section.items.map((item, i) => (
//                                   <li
//                                     key={i}
//                                     className="flex items-center text-[#5f7a47] text-[15px] leading-relaxed"
//                                   >
//                                     <span className="w-2 h-2 rounded-full bg-[#a8b5a8] mr-3 flex-shrink-0" />
//                                     {item}
//                                   </li>
//                                 ))}
//                               </ul>
//                             ) : (
//                               <p className="text-[#71797e] text-sm italic">Included / to taste</p>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   </div>
//                 </div>
//               ))}

//                         <motion.div>
//             <SpecialDeals/>




//                         </motion.div>



//               {/* Additional Information */}
//               {active === "All" && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="mt-16 pt-8 border-t border-[#d4e0d4] text-center md:text-left"
//                 >
//                   <h2 className="text-3xl md:text-4xl font-serif text-[#3f513f] mb-8">Additional Information</h2>

//                   <div className="grid md:grid-cols-2 gap-12">
//                     <div>
//                       <h3 className="text-2xl font-semibold text-[#3f513f] mb-5">Delivery Prices</h3>
//                       {Object.entries(extraInfo.delivery).map(([area, price]) => (
//                         <p key={area} className="mb-3 text-[#5f7a47]">
//                           <span className="font-medium text-[#3f513f]">{area}:</span> {price}
//                         </p>
//                       ))}
//                     </div>

//                     <div>
//                       <h3 className="text-2xl font-semibold text-[#3f513f] mb-5">Our Services</h3>
//                       <ul className="space-y-4">
//                         {extraInfo.services.map((s, i) => (
//                           <li key={i} className="flex items-start text-[#5f7a47]">
//                             <span className="w-2.5 h-2.5 mt-1.5 mr-3 bg-[#6b8e23] rounded-full flex-shrink-0" />
//                             {s}
//                           </li>
//                         ))}
//                       </ul>
//                       <p className="mt-6 text-sm italic text-[#6b8e23]">
//                         +300 AED With Station (where applicable)
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}



//                       {/* BOOKING / RESERVATION CTA SECTION
//               ──────────────────────────────────────────────── */} 
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//                 className="mt-16 pt-12 pb-16 border-t border-[#d4e0d4]"
//               >
//                 <div className="max-w-3xl mx-auto text-center px-4">
//                   <h2 className="text-3xl md:text-4xl font-serif text-[#3f513f] mb-5">
//                     Ready to Elevate Your Event?
//                   </h2>
//                   <p className="text-[#5f7a47] text-lg md:text-xl mb-8 leading-relaxed">
//                     Reserve your favorite cart today or book a custom setup for your special occasion.
//                   </p>

//                   <div className="flex flex-col sm:flex-row justify-center gap-5 md:gap-8">
//                     <a
//                       href="/booking"
//                       className="inline-flex items-center justify-center px-10 py-4 sage-gradient text-white font-semibold text-lg rounded-full shadow-lg hover:bg-[#5a7a1e] transition-colors duration-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#6b8e23]/40"
//                     >
//                       Book Now
//                     </a>

//                     <a
//                       href="/reserve-table"
//                       className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#6b8e23] font-semibold text-lg rounded-full border-2 border-[#6b8e23] shadow-md hover:bg-[#e8efe8] hover:text-[#5a7a1e] transition-all duration-300"
//                     >
//                       Reserve Your Table
//                     </a>
//                   </div>

//                   <p className="mt-6 text-sm text-[#71797e]">
//                     Or contact us directly at{" "}
//                     <a href="tel:+971xxxxxxxx" className="text-[#6b8e23] hover:underline">
//                       +971 XX XXX XXXX
//                     </a>{" "}
//                     • WhatsApp available
//                   </p>
//                 </div>
//               </motion.div>




              
//             </motion.div>


  


//           </AnimatePresence>

//         </div>
//       </section>
//     </main>
//   );
// };

// export default MenuPage;