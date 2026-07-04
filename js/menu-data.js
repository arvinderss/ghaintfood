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
      {
        name: "Aloo Tikki",
        price: 45,
        image: IMG.burger,
        description: "A crisp golden potato and pea tikki, packed with cumin and green chili, layered with onions, tomato and tangy house chutney in a soft toasted bun. A great comfort snack, satisfying and unmistakably desi. The one everyone starts with."
      },
      {
        name: "Aloo Tikki Cheese",
        price: 60,
        image: IMG.burger,
        description: "Our classic aloo tikki with a slice of melted cheese loaded over the hot patty. The cheese softens into the spiced potato for a richer, gooier bite. Comfort food with a little extra indulgence."
      },
      {
        name: "Double Decker",
        price: 85,
        image: IMG.burger,
        description: "Two spiced potato tikki stacked with cheese, onions, lettuce and tomato between a triple-layer bun. Built for a serious appetite. When one patty isn't enough."
      },
      {
        name: "Paneer Tikki",
        price: 80,
        image: IMG.burger,
        description: "A thick paneer patty, marinated in tandoori spices and grilled to golden, dressed with mint chutney, onions and tomato. Fresh, rich and full of flavor. A vegetarian power burger."
      },
      {
        name: "Cheesy Paneer Tikki",
        price: 95,
        image: IMG.burger,
        description: "Our lambent paneer patty melted with mushroom cheese and tomato sauce in a warm bun. The patty is so big and bold that every bite tastes like a Punjab-style dream."
      },
      {
        name: "Pizza Burger",
        price: 99,
        image: IMG.burger,
        description: "A cheesy, saucy mash-up of pizza and burger in one. Mozzarella, tomato sauce, Italian herbs and a slice of pizza-style crust tucked inside a soft bun. Your cravings wrapped in one dense, gooey bite."
      }
    ]
  },
  {
    category: "Pizzas",
    note: "7\" Personal",
    items: [
      {
        name: "Margherita",
        price: 119,
        image: IMG.pizza,
        description: "A thin hand-stretched base with tangy tomato sauce, mozzarella and fresh basil. Simple, classic, and all about the cheese. Sometimes more is more."
      },
      {
        name: "Double Cheese",
        price: 149,
        image: IMG.pizza,
        description: "Twice the mozzarella melted over our thin crust, then a final layer of rich cheese on top for a seriously gooey, extra cheesy experience."
      },
      {
        name: "Corn & Cheese",
        price: 139,
        image: IMG.pizza,
        description: "Sweet golden corn kernels over mozzarella and tomato sauce, baked till bubbling. Mild, cheesy and a favourite with kids and adults alike."
      },
      {
        name: "Mushroom",
        price: 149,
        image: IMG.pizza,
        description: "Sliced mushrooms sautéed and layered over mozzarella and tomato sauce, finished with a drizzle of garlic oil. Simple and savory for mushroom fans."
      },
      {
        name: "Farmhouse",
        price: 169,
        image: IMG.pizza,
        description: "A loaded garden pizza with onion, capsicum, mushroom, sweet corn and herby tomato sauce. Colourful, fresh and topped just right."
      },
      {
        name: "Paneer Tikka",
        price: 169,
        image: IMG.pizza,
        description: "Tandoori-seared paneer cubes in a smoky tomato base, finished with mint chutney and crisp coriander. Spicy and pleasantly Punjabi. More pizza than paneer."
      }
    ]
  },
  {
    category: "Loaded Fries & Sides",
    items: [
      {
        name: "Classic Salted",
        price: 60,
        image: IMG.fries,
        description: "Crisp golden fries, hot from the fryer, lightly salted straightaway and always right. The perfect sidekick."
      },
      {
        name: "Peri Peri",
        price: 80,
        image: IMG.fries,
        description: "Our fries tossed in fiery peri peri seasoning. A little tang, a lot of heat, addictive by the handful."
      },
      {
        name: "Cheesy",
        price: 90,
        image: IMG.fries,
        description: "Hot fries smothered in a melted cheese sauce. Rich, gooey and unapologetically indulgent. Comfort in every bite."
      },
      {
        name: "Cheese Corn Loaded",
        price: 110,
        image: IMG.fries,
        description: "Fries piled with melted cheese and sweet corn, topped with chili flakes and parsley. Salty, creamy and generous."
      },
      {
        name: "Pizza Loaded",
        price: 120,
        image: IMG.fries,
        description: "Fries topped with pizza sauce, cheese and basil, then baked till golden. Like a cross between loaded fries and pizza."
      },
      {
        name: "Paneer Tikka Loaded",
        price: 130,
        image: IMG.fries,
        description: "Crisp fries loaded with spiced paneer, peppers and mint chutney. Our signature loaded snack with a desi punch."
      }
    ]
  },
  {
    category: "Garlic Bread",
    items: [
      {
        name: "Classic",
        price: 70,
        image: IMG.garlicBread,
        description: "Garlic bread brushed with garlic butter and herbs, toasted until crisp on the edges. Warm, fragrant and simple. The right way to start a meal."
      },
      {
        name: "Cheese",
        price: 99,
        image: IMG.garlicBread,
        description: "Our garlic bread slathered in melted mozzarella and herbs, topped with a little more warmth. Rich, comfort, hard to resist."
      },
      {
        name: "Veggie",
        price: 90,
        image: IMG.garlicBread,
        description: "Garlic bread topped with garden veg, creamy sauce and melted cheese. A tasty, fresh take on a classic side."
      }
    ]
  },
  {
    category: "Subs & Sandwiches",
    items: [
      {
        name: "Aloo Tikki Sub",
        price: 70,
        image: IMG.sandwich,
        description: "A spiced patty with onions, tangy chutney and salad in soft bread. Full of flavor, filling and ready to go. Best savoured warm."
      },
      {
        name: "Paneer Patty Sub",
        price: 99,
        image: IMG.sandwich,
        description: "A tangy paneer patty, fresh slaw and mint chutney, wrapped in pillowy bread. Spicy, packed and satisfying. A proper hearty bite."
      },
      {
        name: "Veggie Sandwich",
        price: 70,
        image: IMG.sandwich,
        description: "Fresh veggie layers tossed with onion, tomato, lettuce and chutney between toasted bread. Crunchy, vibrant and bright. Great for a lighter lunch."
      },
      {
        name: "Cheese Sandwich",
        price: 80,
        image: IMG.sandwich,
        description: "A simple, toasty sandwich with melted cheese, tomato and buttered bread. Warm, cheesy and unpretentious. Comfort in the simplest form."
      },
      {
        name: "Paneer Sandwich",
        price: 99,
        image: IMG.sandwich,
        description: "Spiced paneer with onion and capsicum in toasted bread with creamy mayo. Bold flavours and soft bread make every bite worth it."
      }
    ]
  },
  {
    category: "Salads",
    items: [
      {
        name: "Sprouts",
        price: 90,
        image: IMG.salad,
        description: "Fresh moong sprouts tossed with onion, tomato, lemon and herbs, then dressed in crunchy chaat masala. Crisp, light and perfect when you want something green."
      },
      {
        name: "Caesar",
        price: 110,
        image: IMG.salad,
        description: "Crisp lettuce in a creamy dressing with croutons and parmesan. Cool, fresh and satisfying. Great with a hot meal."
      },
      {
        name: "Soya Paneer",
        price: 120,
        image: IMG.salad,
        description: "Soya chunks and paneer with fresh vegetables and zingy dressing. High-protein, flavourful and filling. Built for the more serious eater."
      }
    ]
  },
  {
    category: "Shakes",
    items: [
      {
        name: "Banana / Strawberry / Mango",
        price: 90,
        image: IMG.shake,
        description: "Real fruit blended thick with chilled milk and a shot of sweet syrup. Fresh, creamy and refreshingly cool."
      },
      {
        name: "Chocolate / Cranberry",
        price: 99,
        image: IMG.shake,
        description: "Thick, chilled and blended to smooth perfection. Rich chocolate or tart cranberry, served over ice with a sweet edge."
      },
      {
        name: "Butterscotch / Oreo",
        price: 110,
        image: IMG.shake,
        description: "Blended thick with chilled milk, cookies and caramel, then crowned with whipped cream. Dessert in a glass."
      }
    ]
  },
  {
    category: "Lassi & Coolers",
    items: [
      {
        name: "Sweet Lassi",
        price: 60,
        image: IMG.lassi,
        description: "Thick, chilled and blended with sweetened yogurt and a hint of cardamom. Or sip the classic version, cool and comforting."
      },
      {
        name: "Salted Lassi",
        price: 60,
        image: IMG.lassi,
        description: "Tart but mellow with just enough salt to balance the yogurt. Simple, soothing and perfect with spicy food."
      },
      {
        name: "Fresh Lime Soda",
        price: 50,
        image: IMG.lassi,
        description: "Fresh lime juice over chilled soda. Crisp, fizzy and ultra-refreshing. Simple and bright."
      },
      {
        name: "Shikanji",
        price: 50,
        image: IMG.lassi,
        description: "North Indian lemonade with a crisp blend of lemon, black salt, cumin and mint. Tangy, refreshing and perfect for heat."
      },
      {
        name: "Mojito",
        price: 80,
        image: IMG.lassi,
        description: "Fresh mint and lime muddled over chilled soda and ice, cool, zesty and calorie-free. A refreshing lift."
      }
    ]
  },
  {
    category: "Combos",
    items: [
      {
        name: "Solo — Aloo Tikki Burger + Classic Fries + Shake",
        price: 169,
        image: IMG.combo,
        description: "Aloo Tikki Burger, a portion of classic fries and a shake for one. A complete meal that keeps things easy and satisfying."
      },
      {
        name: "Paneer Power — Paneer Tikki Burger + Paneer Loaded Fries + Shake",
        price: 269,
        image: IMG.combo,
        description: "Our Paneer Tikki Burger combo with loaded fries and a shake. More spice, more cheese and more flavour — perfect for a bigger appetite."
      },
      {
        name: "Duo / Sharing — 7\" Pizza + Loaded Fries + 2 Shakes",
        price: 379,
        image: IMG.combo,
        description: "A pizza, loaded fries and two shakes for sharing. Good for friends or a small group, and made to feed two."
      }
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
