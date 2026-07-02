/*
 * Menu data for Ghaint Food.
 * "price" = takeaway / direct order price (the only price shown on the site).
 * "image" = a generic stock photo (Wikimedia Commons) shown until real photos are added — swap the URL per item whenever you like.
 * Edit this file whenever the menu, prices or images change — nothing else needs to change.
 */
const IMG = {
  burger: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/500px-Cheeseburger.jpg",
  pizza: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/500px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
  fries: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/McDonald%27s_French_Fries%2C_Canada%2C_2026-04-04.jpg/500px-McDonald%27s_French_Fries%2C_Canada%2C_2026-04-04.jpg",
  garlicBread: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Garlic_bread.jpg/500px-Garlic_bread.jpg",
  sandwich: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Club_Sandwich.jpg/500px-Club_Sandwich.jpg",
  salad: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/500px-Salad_platter.jpg",
  shake: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chocolate_milkshake.jpg/500px-Chocolate_milkshake.jpg",
  lassi: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Mango_lassi.jpg/500px-Mango_lassi.jpg",
  combo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Burger_King_Whopper_Combo.jpg/500px-Burger_King_Whopper_Combo.jpg",
  thali: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Indian_Thali.jpg/500px-Indian_Thali.jpg"
};

const MENU = [
  {
    category: "Burgers",
    items: [
      { name: "Aloo Tikki", price: 45, image: IMG.burger },
      { name: "Aloo Tikki Cheese", price: 60, image: IMG.burger },
      { name: "Double Decker", price: 85, image: IMG.burger },
      { name: "Paneer Tikki", price: 80, image: IMG.burger },
      { name: "Cheesy Paneer Tikki", price: 95, image: IMG.burger },
      { name: "Pizza Burger", price: 99, image: IMG.burger }
    ]
  },
  {
    category: "Pizzas",
    note: "7\" Personal",
    items: [
      { name: "Margherita", price: 119, image: IMG.pizza },
      { name: "Double Cheese", price: 149, image: IMG.pizza },
      { name: "Corn & Cheese", price: 139, image: IMG.pizza },
      { name: "Mushroom", price: 149, image: IMG.pizza },
      { name: "Farmhouse", price: 169, image: IMG.pizza },
      { name: "Paneer Tikka", price: 169, image: IMG.pizza }
    ]
  },
  {
    category: "Loaded Fries & Sides",
    items: [
      { name: "Classic Salted", price: 60, image: IMG.fries },
      { name: "Peri Peri", price: 80, image: IMG.fries },
      { name: "Cheesy", price: 90, image: IMG.fries },
      { name: "Cheese Corn Loaded", price: 110, image: IMG.fries },
      { name: "Pizza Loaded", price: 120, image: IMG.fries },
      { name: "Paneer Tikka Loaded", price: 130, image: IMG.fries }
    ]
  },
  {
    category: "Garlic Bread",
    items: [
      { name: "Classic", price: 70, image: IMG.garlicBread },
      { name: "Cheese", price: 99, image: IMG.garlicBread },
      { name: "Veggie", price: 90, image: IMG.garlicBread }
    ]
  },
  {
    category: "Subs & Sandwiches",
    items: [
      { name: "Aloo Tikki Sub", price: 70, image: IMG.sandwich },
      { name: "Paneer Patty Sub", price: 99, image: IMG.sandwich },
      { name: "Veggie Sandwich", price: 70, image: IMG.sandwich },
      { name: "Cheese Sandwich", price: 80, image: IMG.sandwich },
      { name: "Paneer Sandwich", price: 99, image: IMG.sandwich }
    ]
  },
  {
    category: "Salads",
    items: [
      { name: "Sprouts", price: 90, image: IMG.salad },
      { name: "Caesar", price: 110, image: IMG.salad },
      { name: "Soya Paneer", price: 120, image: IMG.salad }
    ]
  },
  {
    category: "Shakes",
    items: [
      { name: "Banana / Strawberry / Mango", price: 90, image: IMG.shake },
      { name: "Chocolate / Cranberry", price: 99, image: IMG.shake },
      { name: "Butterscotch / Oreo", price: 110, image: IMG.shake }
    ]
  },
  {
    category: "Lassi & Coolers",
    items: [
      { name: "Sweet Lassi", price: 60, image: IMG.lassi },
      { name: "Salted Lassi", price: 60, image: IMG.lassi },
      { name: "Fresh Lime Soda", price: 50, image: IMG.lassi },
      { name: "Shikanji", price: 50, image: IMG.lassi },
      { name: "Mojito", price: 80, image: IMG.lassi }
    ]
  },
  {
    category: "Combos",
    items: [
      { name: "Solo — Aloo Tikki Burger + Classic Fries + Shake", price: 169, image: IMG.combo },
      { name: "Paneer Power — Paneer Tikki Burger + Paneer Loaded Fries + Shake", price: 269, image: IMG.combo },
      { name: "Duo / Sharing — 7\" Pizza + Loaded Fries + 2 Shakes", price: 379, image: IMG.combo }
    ]
  }
];

const TIFFIN = {
  price: 150,
  availability: "Lunch & Dinner — no time restriction",
  image: IMG.thali,
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
