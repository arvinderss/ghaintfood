/*
 * Menu data for Ghaint Food.
 * "direct" = price when ordering straight via WhatsApp / pickup.
 * "platform" = price shown on Zomato / Swiggy (covers platform commission).
 * Edit this file whenever the menu or prices change — nothing else needs to change.
 */
const MENU = [
  {
    category: "Burgers",
    items: [
      { name: "Aloo Tikki", direct: 45, platform: 65 },
      { name: "Aloo Tikki Cheese", direct: 60, platform: 89 },
      { name: "Double Decker", direct: 85, platform: 125 },
      { name: "Paneer Tikki", direct: 80, platform: 119 },
      { name: "Cheesy Paneer Tikki", direct: 95, platform: 139 },
      { name: "Pizza Burger", direct: 99, platform: 145 }
    ]
  },
  {
    category: "Pizzas",
    note: "7\" Personal",
    items: [
      { name: "Margherita", direct: 119, platform: 175 },
      { name: "Double Cheese", direct: 149, platform: 215 },
      { name: "Corn & Cheese", direct: 139, platform: 199 },
      { name: "Mushroom", direct: 149, platform: 215 },
      { name: "Farmhouse", direct: 169, platform: 245 },
      { name: "Paneer Tikka", direct: 169, platform: 245 }
    ]
  },
  {
    category: "Loaded Fries & Sides",
    items: [
      { name: "Classic Salted", direct: 60, platform: 89 },
      { name: "Peri Peri", direct: 80, platform: 119 },
      { name: "Cheesy", direct: 90, platform: 129 },
      { name: "Cheese Corn Loaded", direct: 110, platform: 159 },
      { name: "Pizza Loaded", direct: 120, platform: 175 },
      { name: "Paneer Tikka Loaded", direct: 130, platform: 189 }
    ]
  },
  {
    category: "Garlic Bread",
    items: [
      { name: "Classic", direct: 70, platform: 99 },
      { name: "Cheese", direct: 99, platform: 145 },
      { name: "Veggie", direct: 90, platform: 129 }
    ]
  },
  {
    category: "Subs & Sandwiches",
    items: [
      { name: "Aloo Tikki Sub", direct: 70, platform: 99 },
      { name: "Paneer Patty Sub", direct: 99, platform: 145 },
      { name: "Veggie Sandwich", direct: 70, platform: 99 },
      { name: "Cheese Sandwich", direct: 80, platform: 119 },
      { name: "Paneer Sandwich", direct: 99, platform: 145 }
    ]
  },
  {
    category: "Salads",
    items: [
      { name: "Sprouts", direct: 90, platform: 129 },
      { name: "Caesar", direct: 110, platform: 159 },
      { name: "Soya Paneer", direct: 120, platform: 175 }
    ]
  },
  {
    category: "Shakes",
    items: [
      { name: "Banana / Strawberry / Mango", direct: 90, platform: 129 },
      { name: "Chocolate / Cranberry", direct: 99, platform: 145 },
      { name: "Butterscotch / Oreo", direct: 110, platform: 159 }
    ]
  },
  {
    category: "Lassi & Coolers",
    items: [
      { name: "Sweet Lassi", direct: 60, platform: 89 },
      { name: "Salted Lassi", direct: 60, platform: 89 },
      { name: "Fresh Lime Soda", direct: 50, platform: 75 },
      { name: "Shikanji", direct: 50, platform: 75 },
      { name: "Mojito", direct: 80, platform: 119 }
    ]
  },
  {
    category: "Combos",
    items: [
      { name: "Solo — Aloo Tikki Burger + Classic Fries + Shake", direct: 169, platform: 245 },
      { name: "Paneer Power — Paneer Tikki Burger + Paneer Loaded Fries + Shake", direct: 269, platform: 389 },
      { name: "Duo / Sharing — 7\" Pizza + Loaded Fries + 2 Shakes", direct: 379, platform: 545 }
    ]
  }
];

const TIFFIN = {
  price: 150,
  availability: "Lunch & Dinner — no time restriction",
  items: [
    "Dal",
    "Kadai Paneer",
    "Mix Veg",
    "Curd / Raita",
    "Surprise Sweet",
    "Rice",
    "Tawa Chapati"
  ]
};
