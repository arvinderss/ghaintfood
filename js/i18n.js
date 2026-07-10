/*
 * Ghaint Food — translations for the light/dark theme + language switcher.
 * UI_TEXT covers static copy (data-i18n / data-i18n-html / data-i18n-aria in index.html),
 * including the Pickup/Delivery checkout UI (order mode, address field, validation errors).
 * MENU_I18N covers menu category/item names, which are keyed by the English
 * strings used in js/menu-data.js so the cart/WhatsApp logic stays language-agnostic.
 * The WhatsApp checkout message's field labels (Mode/Subtotal/Delivery/Total payable/Address)
 * are deliberately NOT here — they're a fixed English format contract, kept in js/main.js.
 */
const DEFAULT_LANG = "en";
const SUPPORTED_LANGS = ["en", "hi", "pa"];

const UI_TEXT = {
  skip_link: { en: "Skip to content", hi: "मुख्य सामग्री पर जाएं", pa: "ਮੁੱਖ ਸਮੱਗਰੀ 'ਤੇ ਜਾਓ" },
  aria_toggle_menu: { en: "Toggle menu", hi: "मेन्यू टॉगल करें", pa: "ਮੀਨੂ ਟੌਗਲ ਕਰੋ" },
  nav_menu: { en: "Menu", hi: "मेन्यू", pa: "ਮੀਨੂ" },
  nav_tiffin: { en: "Tiffin", hi: "टिफ़िन", pa: "ਟਿਫ਼ਿਨ" },
  nav_about: { en: "Our Story", hi: "हमारी कहानी", pa: "ਸਾਡੀ ਕਹਾਣੀ" },
  nav_order: { en: "Order Now", hi: "अभी ऑर्डर करें", pa: "ਹੁਣੇ ਆਰਡਰ ਕਰੋ" },

  hero_tagline: {
    en: "Ludhiana's Ghaint Tadka — Bold Burgers, Cheesy Pizzas & Home-Style Tiffins",
    hi: "लुधियाना का घैंट तड़का — दमदार बर्गर, चीज़ी पिज़्ज़ा और घर जैसे टिफ़िन",
    pa: "ਲੁਧਿਆਣੇ ਦਾ ਘੈਂਟ ਤੜਕਾ — ਦਮਦਾਰ ਬਰਗਰ, ਚੀਜ਼ੀ ਪੀਜ਼ਾ ਤੇ ਘਰ ਵਰਗੇ ਟਿਫ਼ਿਨ"
  },
  hero_sub: {
    en: "Fresh, fast and full of josh. Order takeaway direct on WhatsApp — build your cart, get an instant invoice, and pay by UPI.",
    hi: "ताज़ा, तेज़ और पूरे जोश के साथ। WhatsApp पर सीधे टेकअवे ऑर्डर करें — कार्ट बनाएं, तुरंत इनवॉइस पाएं और UPI से भुगतान करें।",
    pa: "ਤਾਜ਼ਾ, ਤੇਜ਼ ਤੇ ਪੂਰੇ ਜੋਸ਼ ਨਾਲ। WhatsApp 'ਤੇ ਸਿੱਧਾ ਟੇਕਅਵੇ ਆਰਡਰ ਕਰੋ — ਕਾਰਟ ਬਣਾਓ, ਤੁਰੰਤ ਇਨਵੌਇਸ ਲਵੋ ਤੇ UPI ਨਾਲ ਭੁਗਤਾਨ ਕਰੋ।"
  },
  btn_order_whatsapp: { en: "Order on WhatsApp", hi: "WhatsApp पर ऑर्डर करें", pa: "WhatsApp 'ਤੇ ਆਰਡਰ ਕਰੋ" },
  btn_view_menu: { en: "View Full Menu", hi: "पूरा मेन्यू देखें", pa: "ਪੂਰਾ ਮੀਨੂ ਵੇਖੋ" },

  menu_title: { en: "Our Menu", hi: "हमारा मेन्यू", pa: "ਸਾਡਾ ਮੀਨੂ" },
  menu_sub_html: {
    en: 'All prices shown are <strong>takeaway prices</strong>. Add items to your cart and order straight to our WhatsApp.',
    hi: 'दिखाई गई सभी कीमतें <strong>टेकअवे कीमतें</strong> हैं। आइटम कार्ट में जोड़ें और सीधे हमारे WhatsApp पर ऑर्डर करें।',
    pa: 'ਦਿਖਾਈਆਂ ਗਈਆਂ ਸਾਰੀਆਂ ਕੀਮਤਾਂ <strong>ਟੇਕਅਵੇ ਕੀਮਤਾਂ</strong> ਹਨ। ਆਈਟਮ ਕਾਰਟ ਵਿੱਚ ਪਾਓ ਤੇ ਸਿੱਧਾ ਸਾਡੇ WhatsApp \'ਤੇ ਆਰਡਰ ਕਰੋ।'
  },
  label_takeaway: { en: "takeaway", hi: "टेकअवे", pa: "ਟੇਕਅਵੇ" },
  label_add: { en: "Add +", hi: "जोड़ें +", pa: "ਪਾਓ +" },
  label_sold_out: { en: "Sold Out", hi: "स्टॉक खत्म", pa: "ਸਟਾਕ ਖਤਮ" },
  label_add_tiffin: { en: "Add to Cart +", hi: "कार्ट में जोड़ें +", pa: "ਕਾਰਟ ਵਿੱਚ ਪਾਓ +" },
  aria_decrease: { en: "Decrease quantity", hi: "मात्रा घटाएं", pa: "ਮਾਤਰਾ ਘਟਾਓ" },
  aria_increase: { en: "Increase quantity", hi: "मात्रा बढ़ाएं", pa: "ਮਾਤਰਾ ਵਧਾਓ" },
  aria_remove_prefix: { en: "Remove", hi: "हटाएं:", pa: "ਹਟਾਓ:" },

  tiffin_title: { en: "Home-Style Tiffin", hi: "घर जैसा टिफ़िन", pa: "ਘਰ ਵਰਗਾ ਟਿਫ਼ਿਨ" },
  tiffin_desc: {
    en: "A complete, home-cooked thali — made fresh, packed hot, ready whenever you are. No fixed slot, no fuss.",
    hi: "एक पूरी, घर की बनी थाली — ताज़ी बनी, गरम पैक की गई, जब भी आप तैयार हों। न कोई तय समय, न कोई झंझट।",
    pa: "ਇੱਕ ਪੂਰੀ, ਘਰ ਦੀ ਬਣੀ ਥਾਲੀ — ਤਾਜ਼ੀ ਬਣੀ, ਗਰਮ ਪੈਕ ਕੀਤੀ, ਜਦੋਂ ਵੀ ਤੁਸੀਂ ਤਿਆਰ ਹੋਵੋ। ਨਾ ਕੋਈ ਤੈਅ ਸਮਾਂ, ਨਾ ਕੋਈ ਝੰਜਟ।"
  },
  tiffin_flat_takeaway: { en: "flat, takeaway", hi: "फ्लैट, टेकअवे", pa: "ਫਲੈਟ, ਟੇਕਅਵੇ" },
  tiffin_alt: { en: "Home-style tiffin thali", hi: "घर जैसी टिफ़िन थाली", pa: "ਘਰ ਵਰਗੀ ਟਿਫ਼ਿਨ ਥਾਲੀ" },

  about_title: { en: "Our Story", hi: "हमारी कहानी", pa: "ਸਾਡੀ ਕਹਾਣੀ" },
  about_p1_html: {
    en: "<strong>Ghaint</strong> — Punjabi slang for something outstanding, bold, straight-up superb. That's the standard we hold every plate to.",
    hi: "<strong>घैंट</strong> — पंजाबी में बेहतरीन, दमदार, एकदम शानदार चीज़ के लिए इस्तेमाल होने वाला शब्द। यही स्तर हम हर प्लेट के लिए रखते हैं।",
    pa: "<strong>ਘੈਂਟ</strong> — ਪੰਜਾਬੀ ਵਿੱਚ ਸ਼ਾਨਦਾਰ, ਦਮਦਾਰ, ਬਿਲਕੁਲ ਵਧੀਆ ਚੀਜ਼ ਲਈ ਵਰਤਿਆ ਜਾਣ ਵਾਲਾ ਸ਼ਬਦ। ਇਹੀ ਮਿਆਰ ਅਸੀਂ ਹਰ ਪਲੇਟ ਲਈ ਰੱਖਦੇ ਹਾਂ।"
  },
  about_p2: {
    en: "Ghaint Food started in Ludhiana with a simple idea: street-style fast food doesn't have to cut corners, and home-style food doesn't have to be boring. So we do both — cheesy, loaded, made-to-order burgers, pizzas and fries for when you want indulgence, and honest, home-cooked tiffins for when you just want a proper meal.",
    hi: "घैंट फूड की शुरुआत लुधियाना में एक सीधे विचार के साथ हुई: स्ट्रीट-स्टाइल फास्ट फूड में कोई कमी नहीं होनी चाहिए, और घर के खाने को बोरिंग नहीं होना चाहिए। इसलिए हम दोनों करते हैं — चीज़ी, लोडेड, ऑर्डर पर बने बर्गर, पिज़्ज़ा और फ्राइज़ जब आप कुछ इंडल्जेंट चाहें, और ईमानदार, घर के बने टिफ़िन जब आपको बस एक अच्छा भोजन चाहिए।",
    pa: "ਘੈਂਟ ਫੂਡ ਦੀ ਸ਼ੁਰੂਆਤ ਲੁਧਿਆਣੇ ਵਿੱਚ ਇੱਕ ਸਿੱਧੇ ਵਿਚਾਰ ਨਾਲ ਹੋਈ: ਸਟ੍ਰੀਟ-ਸਟਾਈਲ ਫਾਸਟ ਫੂਡ ਵਿੱਚ ਕੋਈ ਕਮੀ ਨਹੀਂ ਹੋਣੀ ਚਾਹੀਦੀ, ਤੇ ਘਰ ਦੇ ਖਾਣੇ ਨੂੰ ਬੋਰਿੰਗ ਨਹੀਂ ਹੋਣਾ ਚਾਹੀਦਾ। ਇਸ ਲਈ ਅਸੀਂ ਦੋਵੇਂ ਕਰਦੇ ਹਾਂ — ਚੀਜ਼ੀ, ਲੋਡਿਡ, ਆਰਡਰ 'ਤੇ ਬਣੇ ਬਰਗਰ, ਪੀਜ਼ਾ ਤੇ ਫਰਾਈਜ਼ ਜਦੋਂ ਤੁਸੀਂ ਕੁਝ ਖਾਸ ਚਾਹੋ, ਤੇ ਇਮਾਨਦਾਰ, ਘਰ ਦੇ ਬਣੇ ਟਿਫ਼ਿਨ ਜਦੋਂ ਤੁਹਾਨੂੰ ਬੱਸ ਇੱਕ ਵਧੀਆ ਖਾਣਾ ਚਾਹੀਦਾ ਹੋਵੇ।"
  },
  about_p3: {
    en: "Everything's cooked fresh to order, packed to travel well, and priced fairly for takeaway — order direct on WhatsApp and pay what we actually charge, no platform markup.",
    hi: "हर चीज़ ऑर्डर पर ताज़ा बनाई जाती है, अच्छी तरह पैक की जाती है, और टेकअवे के लिए सही कीमत पर दी जाती है — सीधे WhatsApp पर ऑर्डर करें और वही चुकाएं जो हम असल में लेते हैं, कोई प्लेटफ़ॉर्म मार्कअप नहीं।",
    pa: "ਹਰ ਚੀਜ਼ ਆਰਡਰ 'ਤੇ ਤਾਜ਼ੀ ਬਣਾਈ ਜਾਂਦੀ ਹੈ, ਚੰਗੀ ਤਰ੍ਹਾਂ ਪੈਕ ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਤੇ ਟੇਕਅਵੇ ਲਈ ਸਹੀ ਕੀਮਤ 'ਤੇ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ — ਸਿੱਧਾ WhatsApp 'ਤੇ ਆਰਡਰ ਕਰੋ ਤੇ ਉਹੀ ਦਿਓ ਜੋ ਅਸੀਂ ਅਸਲ ਵਿੱਚ ਲੈਂਦੇ ਹਾਂ, ਕੋਈ ਪਲੇਟਫਾਰਮ ਮਾਰਕਅੱਪ ਨਹੀਂ।"
  },

  order_banner_title: { en: "Hungry? Let's Go.", hi: "भूख लगी है? चलिए शुरू करें।", pa: "ਭੁੱਖ ਲੱਗੀ ਹੈ? ਚੱਲੋ ਸ਼ੁਰੂ ਕਰੀਏ।" },
  order_banner_sub: { en: "Pick whichever's easiest for you.", hi: "जो भी आपके लिए आसान हो, वह चुनें।", pa: "ਜੋ ਵੀ ਤੁਹਾਡੇ ਲਈ ਸੌਖਾ ਹੋਵੇ, ਉਹ ਚੁਣੋ।" },

  // TODO: replace with the exact street address once available — also update the JSON-LD
  // address block in index.html's <head> (a deliberately separate copy, see README).
  footer_address: { en: "Ludhiana, Punjab", hi: "लुधियाना, पंजाब", pa: "ਲੁਧਿਆਣਾ, ਪੰਜਾਬ" },
  footer_hours: { en: "Open daily, 12:00 PM – 11:00 PM", hi: "रोज़ाना खुला, दोपहर 12:00 – रात 11:00", pa: "ਰੋਜ਼ਾਨਾ ਖੁੱਲ੍ਹਾ, ਦੁਪਹਿਰ 12:00 – ਰਾਤ 11:00" },
  footer_copy_rights: { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।", pa: "ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।" },
  privacy_policy: { en: "Privacy Policy", hi: "गोपनीयता नीति", pa: "ਪਰਾਈਵੇਸੀ ਨੀਤੀ" },
  terms_conditions: { en: "Terms & Conditions", hi: "नियम और शर्तें", pa: "ਨਿਯਮ ਤੇ ਸ਼ਰਤਾਂ" },

  cart_title: { en: "Your Order", hi: "आपका ऑर्डर", pa: "ਤੁਹਾਡਾ ਆਰਡਰ" },
  aria_view_cart: { en: "View your cart", hi: "अपना कार्ट देखें", pa: "ਆਪਣਾ ਕਾਰਟ ਵੇਖੋ" },
  aria_close_cart: { en: "Close cart", hi: "कार्ट बंद करें", pa: "ਕਾਰਟ ਬੰਦ ਕਰੋ" },
  cart_empty: {
    en: "Your cart is empty. Add items from the menu to get started.",
    hi: "आपका कार्ट खाली है। शुरू करने के लिए मेन्यू से आइटम जोड़ें।",
    pa: "ਤੁਹਾਡਾ ਕਾਰਟ ਖਾਲੀ ਹੈ। ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਮੀਨੂ ਤੋਂ ਆਈਟਮ ਪਾਓ।"
  },
  cart_subtotal_label: { en: "Items Subtotal", hi: "आइटम सबटोटल", pa: "ਆਈਟਮ ਸਬਟੋਟਲ" },
  order_mode_aria: { en: "Order mode", hi: "ऑर्डर मोड", pa: "ਆਰਡਰ ਮੋਡ" },
  order_mode_pickup: { en: "Pickup", hi: "पिकअप", pa: "ਪਿਕਅੱਪ" },
  order_mode_delivery: { en: "Delivery", hi: "डिलीवरी", pa: "ਡਿਲੀਵਰੀ" },
  delivery_address_label: { en: "Delivery address", hi: "डिलीवरी पता", pa: "ਡਿਲੀਵਰੀ ਪਤਾ" },
  delivery_address_aria: { en: "Delivery address", hi: "डिलीवरी पता", pa: "ਡਿਲੀਵਰੀ ਪਤਾ" },
  cart_delivery_fee_label: { en: "Delivery Fee", hi: "डिलीवरी शुल्क", pa: "ਡਿਲੀਵਰੀ ਫੀਸ" },
  cart_total_label: { en: "Total Payable", hi: "कुल भुगतान", pa: "ਕੁੱਲ ਭੁਗਤਾਨ" },
  checkout_error_empty_cart: {
    en: "Please add at least one item to your cart.",
    hi: "कृपया अपने कार्ट में कम से कम एक आइटम जोड़ें।",
    pa: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਕਾਰਟ ਵਿੱਚ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਆਈਟਮ ਪਾਓ।"
  },
  checkout_error_address_required: {
    en: "Please enter a delivery address.",
    hi: "कृपया डिलीवरी पता दर्ज करें।",
    pa: "ਕਿਰਪਾ ਕਰਕੇ ਡਿਲੀਵਰੀ ਪਤਾ ਦਰਜ ਕਰੋ।"
  },
  checkout_error_generic: {
    en: "Something went wrong. Please try again.",
    hi: "कुछ गड़बड़ हो गई। कृपया फिर कोशिश करें।",
    pa: "ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।"
  },
  cart_send_whatsapp: { en: "Checkout on WhatsApp", hi: "WhatsApp पर चेकआउट करें", pa: "WhatsApp 'ਤੇ ਚੈੱਕਆਉਟ ਕਰੋ" },
  cart_whatsapp_not_configured: { en: "Ordering not configured yet", hi: "ऑर्डरिंग अभी सेट नहीं है", pa: "ਆਰਡਰਿੰਗ ਹਾਲੇ ਸੈੱਟ ਨਹੀਂ ਹੈ" },
  cart_pay_upi: { en: "Pay via UPI", hi: "UPI से भुगतान करें", pa: "UPI ਨਾਲ ਭੁਗਤਾਨ ਕਰੋ" },
  cart_pay_upi_amount: { en: "Pay {amount} via UPI", hi: "{amount} UPI से भुगतान करें", pa: "{amount} UPI ਨਾਲ ਭੁਗਤਾਨ ਕਰੋ" },
  cart_upi_vpa_label: { en: "UPI ID:", hi: "UPI आईडी:", pa: "UPI ਆਈਡੀ:" },
  cart_upi_copy_label: { en: "Copy", hi: "कॉपी करें", pa: "ਕਾਪੀ ਕਰੋ" },
  cart_upi_copy_aria: { en: "Copy UPI ID", hi: "UPI आईडी कॉपी करें", pa: "UPI ਆਈਡੀ ਕਾਪੀ ਕਰੋ" },
  cart_upi_note: {
    en: "Opens your UPI app pre-filled with the amount — this is not automated payment verification. Please confirm by sending a screenshot on WhatsApp.",
    hi: "यह आपके UPI ऐप को राशि के साथ पहले से भरा हुआ खोलता है — यह स्वचालित भुगतान सत्यापन नहीं है। कृपया WhatsApp पर स्क्रीनशॉट भेजकर पुष्टि करें।",
    pa: "ਇਹ ਤੁਹਾਡੀ UPI ਐਪ ਨੂੰ ਰਕਮ ਨਾਲ ਪਹਿਲਾਂ ਤੋਂ ਭਰ ਕੇ ਖੋਲ੍ਹਦਾ ਹੈ — ਇਹ ਆਟੋਮੈਟਿਕ ਭੁਗਤਾਨ ਤਸਦੀਕ ਨਹੀਂ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ WhatsApp 'ਤੇ ਸਕ੍ਰੀਨਸ਼ਾਟ ਭੇਜ ਕੇ ਪੁਸ਼ਟੀ ਕਰੋ।"
  },

  // wa_default_order is the only WhatsApp-message string kept in i18n: it's the generic
  // greeting used by non-cart "Order on WhatsApp" buttons. The cart checkout message itself
  // (Mode/Subtotal/Delivery/Total payable/Address labels) is fixed English in js/main.js's
  // buildCheckoutMessage() — that's an exact format contract, not UI copy, so it does not
  // change with the visitor's selected language.
  wa_default_order: {
    en: "Hi Ghaint Food! I'd like to place an order.",
    hi: "नमस्ते घैंट फूड! मैं ऑर्डर देना चाहता/चाहती हूं।",
    pa: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਘੈਂਟ ਫੂਡ! ਮੈਂ ਆਰਡਰ ਦੇਣਾ ਚਾਹੁੰਦਾ/ਚਾਹੁੰਦੀ ਹਾਂ।"
  },

  theme_toggle_to_dark: { en: "Switch to dark theme", hi: "डार्क थीम पर जाएं", pa: "ਡਾਰਕ ਥੀਮ 'ਤੇ ਜਾਓ" },
  theme_toggle_to_light: { en: "Switch to light theme", hi: "लाइट थीम पर जाएं", pa: "ਲਾਈਟ ਥੀਮ 'ਤੇ ਜਾਓ" },
  images_toggle_to_off: { en: "Hide food images", hi: "फ़ूड इमेज छिपाएं", pa: "ਫੂਡ ਤਸਵੀਰਾਂ ਲੁਕਾਓ" },
  images_toggle_to_on: { en: "Show food images", hi: "फ़ूड इमेज दिखाएं", pa: "ਫੂਡ ਤਸਵੀਰਾਂ ਦਿਖਾਓ" },
  lang_switch_aria: { en: "Language", hi: "भाषा", pa: "ਭਾਸ਼ਾ" }
};

const MENU_I18N = {
  categories: {
    "Burgers": { hi: "बर्गर", pa: "ਬਰਗਰ" },
    "Pizzas": { hi: "पिज़्ज़ा", pa: "ਪੀਜ਼ਾ" },
    "Loaded Fries & Sides": { hi: "लोडेड फ्राइज़ और साइड्स", pa: "ਲੋਡਿਡ ਫਰਾਈਜ਼ ਤੇ ਸਾਈਡਸ" },
    "Garlic Bread": { hi: "गार्लिक ब्रेड", pa: "ਗਾਰਲਿਕ ਬ੍ਰੈੱਡ" },
    "Subs & Sandwiches": { hi: "सब्स और सैंडविच", pa: "ਸਬਸ ਤੇ ਸੈਂਡਵਿਚ" },
    "Salads": { hi: "सलाद", pa: "ਸਲਾਦ" },
    "Shakes": { hi: "शेक्स", pa: "ਸ਼ੇਕਸ" },
    "Lassi & Coolers": { hi: "लस्सी और कूलर्स", pa: "ਲੱਸੀ ਤੇ ਕੂਲਰ" },
    "Combos": { hi: "कॉम्बो", pa: "ਕੰਬੋ" }
  },
  notes: {
    '7" Personal': { hi: '7" पर्सनल', pa: '7" ਪਰਸਨਲ' }
  },
  items: {
    "Aloo Tikki": { hi: "आलू टिक्की", pa: "ਆਲੂ ਟਿੱਕੀ" },
    "Aloo Tikki Cheese": { hi: "आलू टिक्की चीज़", pa: "ਆਲੂ ਟਿੱਕੀ ਚੀਜ਼" },
    "Double Decker": { hi: "डबल डेकर", pa: "ਡਬਲ ਡੈਕਰ" },
    "Paneer Tikki": { hi: "पनीर टिक्की", pa: "ਪਨੀਰ ਟਿੱਕੀ" },
    "Cheesy Paneer Tikki": { hi: "चीज़ी पनीर टिक्की", pa: "ਚੀਜ਼ੀ ਪਨੀਰ ਟਿੱਕੀ" },
    "Pizza Burger": { hi: "पिज़्ज़ा बर्गर", pa: "ਪੀਜ਼ਾ ਬਰਗਰ" },

    "Margherita": { hi: "मार्गेरिटा", pa: "ਮਾਰਗਰੀਟਾ" },
    "Double Cheese": { hi: "डबल चीज़", pa: "ਡਬਲ ਚੀਜ਼" },
    "Corn & Cheese": { hi: "कॉर्न और चीज़", pa: "ਕੌਰਨ ਤੇ ਚੀਜ਼" },
    "Mushroom": { hi: "मशरूम", pa: "ਮਸ਼ਰੂਮ" },
    "Farmhouse": { hi: "फ़ार्महाउस", pa: "ਫਾਰਮਹਾਊਸ" },
    "Paneer Tikka": { hi: "पनीर टिक्का", pa: "ਪਨੀਰ ਟਿੱਕਾ" },

    "Classic Salted": { hi: "क्लासिक सॉल्टेड", pa: "ਕਲਾਸਿਕ ਸਾਲਟਿਡ" },
    "Peri Peri": { hi: "पेरी पेरी", pa: "ਪੇਰੀ ਪੇਰੀ" },
    "Cheesy": { hi: "चीज़ी", pa: "ਚੀਜ਼ੀ" },
    "Cheese Corn Loaded": { hi: "चीज़ कॉर्न लोडेड", pa: "ਚੀਜ਼ ਕੌਰਨ ਲੋਡਿਡ" },
    "Pizza Loaded": { hi: "पिज़्ज़ा लोडेड", pa: "ਪੀਜ਼ਾ ਲੋਡਿਡ" },
    "Paneer Tikka Loaded": { hi: "पनीर टिक्का लोडेड", pa: "ਪਨੀਰ ਟਿੱਕਾ ਲੋਡਿਡ" },

    "Classic": { hi: "क्लासिक", pa: "ਕਲਾਸਿਕ" },
    "Cheese": { hi: "चीज़", pa: "ਚੀਜ਼" },
    "Veggie": { hi: "वेजी", pa: "ਵੈਜੀ" },

    "Aloo Tikki Sub": { hi: "आलू टिक्की सब", pa: "ਆਲੂ ਟਿੱਕੀ ਸਬ" },
    "Paneer Patty Sub": { hi: "पनीर पैटी सब", pa: "ਪਨੀਰ ਪੈਟੀ ਸਬ" },
    "Veggie Sandwich": { hi: "वेजी सैंडविच", pa: "ਵੈਜੀ ਸੈਂਡਵਿਚ" },
    "Cheese Sandwich": { hi: "चीज़ सैंडविच", pa: "ਚੀਜ਼ ਸੈਂਡਵਿਚ" },
    "Paneer Sandwich": { hi: "पनीर सैंडविच", pa: "ਪਨੀਰ ਸੈਂਡਵਿਚ" },

    "Sprouts": { hi: "स्प्राउट्स", pa: "ਸਪ੍ਰਾਊਟਸ" },
    "Caesar": { hi: "सीज़र", pa: "ਸੀਜ਼ਰ" },
    "Soya Paneer": { hi: "सोया पनीर", pa: "ਸੋਇਆ ਪਨੀਰ" },

    "Banana / Strawberry / Mango": { hi: "केला / स्ट्रॉबेरी / आम", pa: "ਕੇਲਾ / ਸਟ੍ਰਾਬੇਰੀ / ਅੰਬ" },
    "Chocolate / Cranberry": { hi: "चॉकलेट / क्रैनबेरी", pa: "ਚਾਕਲੇਟ / ਕਰੈਨਬੇਰੀ" },
    "Butterscotch / Oreo": { hi: "बटरस्कॉच / ओरियो", pa: "ਬਟਰਸਕੌਚ / ਓਰੀਓ" },

    "Sweet Lassi": { hi: "मीठी लस्सी", pa: "ਮਿੱਠੀ ਲੱਸੀ" },
    "Salted Lassi": { hi: "नमकीन लस्सी", pa: "ਨਮਕੀਨ ਲੱਸੀ" },
    "Fresh Lime Soda": { hi: "फ्रेश लाइम सोडा", pa: "ਫਰੈਸ਼ ਲਾਈਮ ਸੋਡਾ" },
    "Shikanji": { hi: "शिकंजी", pa: "ਸ਼ਿਕੰਜੀ" },
    "Mojito": { hi: "मोहितो", pa: "ਮੋਹੀਤੋ" },

    "Solo — Aloo Tikki Burger + Classic Fries + Shake": {
      hi: "सोलो — आलू टिक्की बर्गर + क्लासिक फ्राइज़ + शेक",
      pa: "ਸੋਲੋ — ਆਲੂ ਟਿੱਕੀ ਬਰਗਰ + ਕਲਾਸਿਕ ਫਰਾਈਜ਼ + ਸ਼ੇਕ"
    },
    "Paneer Power — Paneer Tikki Burger + Paneer Loaded Fries + Shake": {
      hi: "पनीर पावर — पनीर टिक्की बर्गर + पनीर लोडेड फ्राइज़ + शेक",
      pa: "ਪਨੀਰ ਪਾਵਰ — ਪਨੀਰ ਟਿੱਕੀ ਬਰਗਰ + ਪਨੀਰ ਲੋਡਿਡ ਫਰਾਈਜ਼ + ਸ਼ੇਕ"
    },
    "Duo / Sharing — 7\" Pizza + Loaded Fries + 2 Shakes": {
      hi: 'ड्यूओ / शेयरिंग — 7" पिज़्ज़ा + लोडेड फ्राइज़ + 2 शेक',
      pa: 'ਡੂਓ / ਸ਼ੇਅਰਿੰਗ — 7" ਪੀਜ਼ਾ + ਲੋਡਿਡ ਫਰਾਈਜ਼ + 2 ਸ਼ੇਕ'
    }
  },
  tiffinItems: {
    "Dal": { hi: "दाल", pa: "ਦਾਲ" },
    "Kadai Paneer": { hi: "कड़ाही पनीर", pa: "ਕੜਾਹੀ ਪਨੀਰ" },
    "Mix Veg": { hi: "मिक्स वेज", pa: "ਮਿਕਸ ਵੈਜ" },
    "Curd / Raita": { hi: "दही / रायता", pa: "ਦਹੀਂ / ਰਾਇਤਾ" },
    "Surprise Sweet": { hi: "सरप्राइज़ मिठाई", pa: "ਸਰਪ੍ਰਾਈਜ਼ ਮਿੱਠਾ" },
    "Rice": { hi: "चावल", pa: "ਚੌਲ" },
    "Tawa Chapati": { hi: "तवा चपाती", pa: "ਤਵਾ ਚਪਾਤੀ" }
  },
  tiffinAvailability: {
    "Lunch & Dinner — no time restriction": { hi: "लंच और डिनर — कोई समय सीमा नहीं", pa: "ਲੰਚ ਤੇ ਡਿਨਰ — ਕੋਈ ਸਮਾਂ ਸੀਮਾ ਨਹੀਂ" }
  },
  // Menu item descriptions, keyed by the canonical English string used in js/menu-data.js.
  descriptions: {
    "A crisp golden potato and pea tikki, packed with cumin and green chili, layered with onions, tomato and tangy house chutney in a soft toasted bun. A great comfort snack, satisfying and unmistakably desi. The one everyone starts with.": {
      hi: "मसालेदार जीरा और हरी मिर्च से भरपूर, कुरकुरी सुनहरी आलू और मटर की टिक्की, प्याज़, टमाटर और तीखी घर की चटनी के साथ नरम टोस्टेड बन में। एक बेहतरीन कम्फर्ट स्नैक, संतोषजनक और पूरी तरह देसी। वह जिससे हर कोई शुरुआत करता है।",
      pa: "ਜੀਰੇ ਤੇ ਹਰੀ ਮਿਰਚ ਨਾਲ ਭਰਪੂਰ, ਕੁਰਕੁਰੀ ਸੁਨਹਿਰੀ ਆਲੂ ਤੇ ਮਟਰ ਦੀ ਟਿੱਕੀ, ਪਿਆਜ਼, ਟਮਾਟਰ ਤੇ ਤਿੱਖੀ ਘਰ ਦੀ ਚਟਨੀ ਨਾਲ ਨਰਮ ਟੋਸਟਿਡ ਬਨ ਵਿੱਚ। ਇੱਕ ਵਧੀਆ ਕਮਫਰਟ ਸਨੈਕ, ਰੱਜਵਾਂ ਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਦੇਸੀ। ਉਹ ਜਿਸ ਤੋਂ ਹਰ ਕੋਈ ਸ਼ੁਰੂਆਤ ਕਰਦਾ ਹੈ।"
    },
    "Our classic aloo tikki with a slice of melted cheese loaded over the hot patty. The cheese softens into the spiced potato for a richer, gooier bite. Comfort food with a little extra indulgence.": {
      hi: "हमारी क्लासिक आलू टिक्की, गरम पैटी पर पिघली हुई चीज़ की एक स्लाइस के साथ। चीज़ मसालेदार आलू में घुलकर एक रिच और गूई बाइट देती है। थोड़े एक्स्ट्रा इंडल्जेंस वाला कम्फर्ट फूड।",
      pa: "ਸਾਡੀ ਕਲਾਸਿਕ ਆਲੂ ਟਿੱਕੀ, ਗਰਮ ਪੈਟੀ 'ਤੇ ਪਿਘਲੀ ਹੋਈ ਚੀਜ਼ ਦੀ ਇੱਕ ਸਲਾਈਸ ਨਾਲ। ਚੀਜ਼ ਮਸਾਲੇਦਾਰ ਆਲੂ ਵਿੱਚ ਘੁਲ ਕੇ ਇੱਕ ਰਿੱਚ ਤੇ ਗੂਈ ਬਾਈਟ ਦਿੰਦੀ ਹੈ। ਥੋੜ੍ਹੇ ਵਾਧੂ ਸੁਆਦ ਵਾਲਾ ਕਮਫਰਟ ਫੂਡ।"
    },
    "Two spiced potato tikki stacked with cheese, onions, lettuce and tomato between a triple-layer bun. Built for a serious appetite. When one patty isn't enough.": {
      hi: "दो मसालेदार आलू टिक्की, चीज़, प्याज़, लेट्यूस और टमाटर के साथ तीन परत वाले बन में स्टैक्ड। एक बड़ी भूख के लिए बना। जब एक पैटी काफी न हो।",
      pa: "ਦੋ ਮਸਾਲੇਦਾਰ ਆਲੂ ਟਿੱਕੀ, ਚੀਜ਼, ਪਿਆਜ਼, ਲੈਟਿਊਸ ਤੇ ਟਮਾਟਰ ਨਾਲ ਤਿੰਨ ਪਰਤਾਂ ਵਾਲੇ ਬਨ ਵਿੱਚ ਸਟੈਕਡ। ਵੱਡੀ ਭੁੱਖ ਲਈ ਬਣਿਆ। ਜਦੋਂ ਇੱਕ ਪੈਟੀ ਕਾਫ਼ੀ ਨਾ ਹੋਵੇ।"
    },
    "A thick paneer patty, marinated in tandoori spices and grilled to golden, dressed with mint chutney, onions and tomato. Fresh, rich and full of flavor. A vegetarian power burger.": {
      hi: "एक मोटी पनीर पैटी, तंदूरी मसालों में मैरिनेट कर सुनहरी होने तक ग्रिल की गई, पुदीने की चटनी, प्याज़ और टमाटर के साथ। ताज़ा, रिच और स्वाद से भरपूर। एक वेजिटेरियन पावर बर्गर।",
      pa: "ਇੱਕ ਮੋਟੀ ਪਨੀਰ ਪੈਟੀ, ਤੰਦੂਰੀ ਮਸਾਲਿਆਂ ਵਿੱਚ ਮੈਰੀਨੇਟ ਕਰਕੇ ਸੁਨਹਿਰੀ ਹੋਣ ਤੱਕ ਗਰਿੱਲ ਕੀਤੀ ਗਈ, ਪੁਦੀਨੇ ਦੀ ਚਟਨੀ, ਪਿਆਜ਼ ਤੇ ਟਮਾਟਰ ਨਾਲ। ਤਾਜ਼ਾ, ਰਿੱਚ ਤੇ ਸੁਆਦ ਨਾਲ ਭਰਪੂਰ। ਇੱਕ ਵੈਜੀਟੇਰੀਅਨ ਪਾਵਰ ਬਰਗਰ।"
    },
    "Our lambent paneer patty melted with mushroom cheese and tomato sauce in a warm bun. The patty is so big and bold that every bite tastes like a Punjab-style dream.": {
      hi: "हमारी चमकदार पनीर पैटी, मशरूम चीज़ और टमाटर सॉस के साथ गरम बन में पिघली हुई। पैटी इतनी बड़ी और दमदार है कि हर बाइट पंजाब-स्टाइल सपने जैसी लगती है।",
      pa: "ਸਾਡੀ ਚਮਕਦਾਰ ਪਨੀਰ ਪੈਟੀ, ਮਸ਼ਰੂਮ ਚੀਜ਼ ਤੇ ਟਮਾਟਰ ਸਾਸ ਨਾਲ ਗਰਮ ਬਨ ਵਿੱਚ ਪਿਘਲੀ ਹੋਈ। ਪੈਟੀ ਇੰਨੀ ਵੱਡੀ ਤੇ ਦਮਦਾਰ ਹੈ ਕਿ ਹਰ ਬਾਈਟ ਪੰਜਾਬ-ਸਟਾਈਲ ਸੁਪਨੇ ਵਾਂਗ ਲੱਗਦੀ ਹੈ।"
    },
    "A cheesy, saucy mash-up of pizza and burger in one. Mozzarella, tomato sauce, Italian herbs and a slice of pizza-style crust tucked inside a soft bun. Your cravings wrapped in one dense, gooey bite.": {
      hi: "पिज़्ज़ा और बर्गर का चीज़ी, सॉसी मिश्रण एक साथ। मोज़ेरेला, टमाटर सॉस, इटैलियन हर्ब्स और पिज़्ज़ा-स्टाइल क्रस्ट की एक स्लाइस, नरम बन के अंदर। आपकी क्रेविंग्स एक घने, गूई बाइट में समेटी हुई।",
      pa: "ਪੀਜ਼ਾ ਤੇ ਬਰਗਰ ਦਾ ਚੀਜ਼ੀ, ਸਾਸੀ ਮਿਸ਼ਰਣ ਇੱਕੋ ਥਾਂ। ਮੌਜ਼ੇਰੇਲਾ, ਟਮਾਟਰ ਸਾਸ, ਇਟਾਲੀਅਨ ਹਰਬਸ ਤੇ ਪੀਜ਼ਾ-ਸਟਾਈਲ ਕਰਸਟ ਦੀ ਇੱਕ ਸਲਾਈਸ, ਨਰਮ ਬਨ ਦੇ ਅੰਦਰ। ਤੁਹਾਡੀਆਂ ਕ੍ਰੇਵਿੰਗਸ ਇੱਕ ਸੰਘਣੀ, ਗੂਈ ਬਾਈਟ ਵਿੱਚ ਸਮੇਟੀਆਂ ਹੋਈਆਂ।"
    },
    "A thin hand-stretched base with tangy tomato sauce, mozzarella and fresh basil. Simple, classic, and all about the cheese. Sometimes more is more.": {
      hi: "हाथ से खींचा हुआ पतला बेस, तीखी टमाटर सॉस, मोज़ेरेला और ताज़ी तुलसी के साथ। सिंपल, क्लासिक, और पूरी तरह चीज़ के बारे में। कभी-कभी ज़्यादा ही अच्छा होता है।",
      pa: "ਹੱਥ ਨਾਲ ਖਿੱਚਿਆ ਪਤਲਾ ਬੇਸ, ਤਿੱਖੀ ਟਮਾਟਰ ਸਾਸ, ਮੌਜ਼ੇਰੇਲਾ ਤੇ ਤਾਜ਼ੀ ਤੁਲਸੀ ਨਾਲ। ਸਿੰਪਲ, ਕਲਾਸਿਕ, ਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਚੀਜ਼ ਬਾਰੇ। ਕਦੇ-ਕਦੇ ਜ਼ਿਆਦਾ ਹੀ ਵਧੀਆ ਹੁੰਦਾ ਹੈ।"
    },
    "Twice the mozzarella melted over our thin crust, then a final layer of rich cheese on top for a seriously gooey, extra cheesy experience.": {
      hi: "हमारे पतले क्रस्ट पर दोगुनी मोज़ेरेला पिघली हुई, फिर ऊपर रिच चीज़ की एक आखिरी परत — एक बेहद गूई, एक्स्ट्रा चीज़ी एक्सपीरियंस के लिए।",
      pa: "ਸਾਡੇ ਪਤਲੇ ਕਰਸਟ 'ਤੇ ਦੁੱਗਣੀ ਮੌਜ਼ੇਰੇਲਾ ਪਿਘਲੀ ਹੋਈ, ਫਿਰ ਉੱਪਰ ਰਿੱਚ ਚੀਜ਼ ਦੀ ਇੱਕ ਆਖਰੀ ਪਰਤ — ਇੱਕ ਬੇਹੱਦ ਗੂਈ, ਵਾਧੂ ਚੀਜ਼ੀ ਤਜਰਬੇ ਲਈ।"
    },
    "Sweet golden corn kernels over mozzarella and tomato sauce, baked till bubbling. Mild, cheesy and a favourite with kids and adults alike.": {
      hi: "मीठे सुनहरे कॉर्न के दाने, मोज़ेरेला और टमाटर सॉस के ऊपर, बबल आने तक बेक किए गए। हल्का, चीज़ी और बच्चों व बड़ों दोनों का पसंदीदा।",
      pa: "ਮਿੱਠੇ ਸੁਨਹਿਰੀ ਕੌਰਨ ਦੇ ਦਾਣੇ, ਮੌਜ਼ੇਰੇਲਾ ਤੇ ਟਮਾਟਰ ਸਾਸ ਦੇ ਉੱਪਰ, ਬੁਲਬੁਲੇ ਆਉਣ ਤੱਕ ਬੇਕ ਕੀਤੇ ਗਏ। ਹਲਕਾ, ਚੀਜ਼ੀ ਤੇ ਬੱਚਿਆਂ ਤੇ ਵੱਡਿਆਂ ਦੋਵਾਂ ਦਾ ਪਸੰਦੀਦਾ।"
    },
    "Sliced mushrooms sautéed and layered over mozzarella and tomato sauce, finished with a drizzle of garlic oil. Simple and savory for mushroom fans.": {
      hi: "कटे हुए मशरूम को हल्का भूनकर मोज़ेरेला और टमाटर सॉस पर परत बनाकर रखा गया, ऊपर से गार्लिक ऑयल की बूंदें। मशरूम पसंद करने वालों के लिए सिंपल और सेवरी।",
      pa: "ਕੱਟੇ ਹੋਏ ਮਸ਼ਰੂਮ ਹਲਕੇ ਭੁੰਨ ਕੇ ਮੌਜ਼ੇਰੇਲਾ ਤੇ ਟਮਾਟਰ ਸਾਸ 'ਤੇ ਪਰਤ ਬਣਾ ਕੇ ਰੱਖੇ ਗਏ, ਉੱਪਰੋਂ ਗਾਰਲਿਕ ਆਇਲ ਦੀਆਂ ਬੂੰਦਾਂ। ਮਸ਼ਰੂਮ ਪਸੰਦ ਕਰਨ ਵਾਲਿਆਂ ਲਈ ਸਿੰਪਲ ਤੇ ਸੁਆਦਲਾ।"
    },
    "A loaded garden pizza with onion, capsicum, mushroom, sweet corn and herby tomato sauce. Colourful, fresh and topped just right.": {
      hi: "प्याज़, शिमला मिर्च, मशरूम, स्वीट कॉर्न और हर्बी टमाटर सॉस से लदा हुआ गार्डन पिज़्ज़ा। रंगीन, ताज़ा और बिल्कुल सही टॉपिंग के साथ।",
      pa: "ਪਿਆਜ਼, ਸ਼ਿਮਲਾ ਮਿਰਚ, ਮਸ਼ਰੂਮ, ਸਵੀਟ ਕੌਰਨ ਤੇ ਹਰਬੀ ਟਮਾਟਰ ਸਾਸ ਨਾਲ ਭਰਿਆ ਗਾਰਡਨ ਪੀਜ਼ਾ। ਰੰਗੀਨ, ਤਾਜ਼ਾ ਤੇ ਬਿਲਕੁਲ ਸਹੀ ਟੌਪਿੰਗ ਨਾਲ।"
    },
    "Tandoori-seared paneer cubes in a smoky tomato base, finished with mint chutney and crisp coriander. Spicy and pleasantly Punjabi. More pizza than paneer.": {
      hi: "तंदूरी अंदाज़ में सेंके पनीर क्यूब्स, स्मोकी टमाटर बेस पर, पुदीने की चटनी और ताज़ा धनिये के साथ। तीखा और सुखद रूप से पंजाबी। पनीर से ज़्यादा पिज़्ज़ा।",
      pa: "ਤੰਦੂਰੀ ਅੰਦਾਜ਼ ਵਿੱਚ ਸੇਕੇ ਪਨੀਰ ਕਿਊਬ, ਸਮੋਕੀ ਟਮਾਟਰ ਬੇਸ 'ਤੇ, ਪੁਦੀਨੇ ਦੀ ਚਟਨੀ ਤੇ ਤਾਜ਼ੇ ਧਨੀਏ ਨਾਲ। ਤਿੱਖਾ ਤੇ ਸੁਖਾਵੇਂ ਢੰਗ ਨਾਲ ਪੰਜਾਬੀ। ਪਨੀਰ ਨਾਲੋਂ ਵੱਧ ਪੀਜ਼ਾ।"
    },
    "Crisp golden fries, hot from the fryer, lightly salted straightaway and always right. The perfect sidekick.": {
      hi: "कुरकुरी सुनहरी फ्राइज़, फ्रायर से सीधे गरम, तुरंत हल्का नमक लगी और हमेशा परफेक्ट। एक बेहतरीन साइडकिक।",
      pa: "ਕੁਰਕੁਰੀ ਸੁਨਹਿਰੀ ਫਰਾਈਜ਼, ਫਰਾਇਰ ਤੋਂ ਸਿੱਧੀਆਂ ਗਰਮ, ਤੁਰੰਤ ਹਲਕਾ ਨਮਕ ਲੱਗੀਆਂ ਤੇ ਹਮੇਸ਼ਾ ਪਰਫੈਕਟ। ਇੱਕ ਵਧੀਆ ਸਾਈਡਕਿਕ।"
    },
    "Our fries tossed in fiery peri peri seasoning. A little tang, a lot of heat, addictive by the handful.": {
      hi: "हमारी फ्राइज़, तीखे पेरी पेरी सीज़निंग में टॉस की गई। थोड़ा तीखापन, बहुत सारी गर्मी, मुट्ठी भर खाते ही लत लगाने वाली।",
      pa: "ਸਾਡੀਆਂ ਫਰਾਈਜ਼, ਤਿੱਖੀ ਪੇਰੀ ਪੇਰੀ ਸੀਜ਼ਨਿੰਗ ਵਿੱਚ ਟੌਸ ਕੀਤੀਆਂ। ਥੋੜ੍ਹੀ ਖਟਾਸ, ਬਹੁਤ ਸਾਰੀ ਤੇਜ਼ੀ, ਮੁੱਠ ਭਰ ਖਾਂਦਿਆਂ ਹੀ ਆਦਤ ਪਾ ਦੇਣ ਵਾਲੀਆਂ।"
    },
    "Hot fries smothered in a melted cheese sauce. Rich, gooey and unapologetically indulgent. Comfort in every bite.": {
      hi: "गरम फ्राइज़, पिघली हुई चीज़ सॉस में डूबी हुई। रिच, गूई और बेझिझक इंडल्जेंट। हर बाइट में कम्फर्ट।",
      pa: "ਗਰਮ ਫਰਾਈਜ਼, ਪਿਘਲੀ ਹੋਈ ਚੀਜ਼ ਸਾਸ ਵਿੱਚ ਡੁੱਬੀਆਂ ਹੋਈਆਂ। ਰਿੱਚ, ਗੂਈ ਤੇ ਬੇਝਿਜਕ ਸੁਆਦਲੀਆਂ। ਹਰ ਬਾਈਟ ਵਿੱਚ ਆਰਾਮ।"
    },
    "Fries piled with melted cheese and sweet corn, topped with chili flakes and parsley. Salty, creamy and generous.": {
      hi: "पिघली चीज़ और स्वीट कॉर्न से लदी फ्राइज़, ऊपर चिली फ्लेक्स और पार्सले के साथ। नमकीन, क्रीमी और भरपूर।",
      pa: "ਪਿਘਲੀ ਚੀਜ਼ ਤੇ ਸਵੀਟ ਕੌਰਨ ਨਾਲ ਭਰੀਆਂ ਫਰਾਈਜ਼, ਉੱਪਰ ਚਿੱਲੀ ਫਲੇਕਸ ਤੇ ਪਾਰਸਲੇ ਨਾਲ। ਨਮਕੀਨ, ਕਰੀਮੀ ਤੇ ਭਰਪੂਰ।"
    },
    "Fries topped with pizza sauce, cheese and basil, then baked till golden. Like a cross between loaded fries and pizza.": {
      hi: "पिज़्ज़ा सॉस, चीज़ और तुलसी से टॉप की गई फ्राइज़, फिर सुनहरी होने तक बेक की गई। लोडेड फ्राइज़ और पिज़्ज़ा के बीच का एक मेल।",
      pa: "ਪੀਜ਼ਾ ਸਾਸ, ਚੀਜ਼ ਤੇ ਤੁਲਸੀ ਨਾਲ ਟੌਪ ਕੀਤੀਆਂ ਫਰਾਈਜ਼, ਫਿਰ ਸੁਨਹਿਰੀ ਹੋਣ ਤੱਕ ਬੇਕ ਕੀਤੀਆਂ। ਲੋਡਿਡ ਫਰਾਈਜ਼ ਤੇ ਪੀਜ਼ੇ ਦੇ ਵਿਚਕਾਰ ਦਾ ਇੱਕ ਮੇਲ।"
    },
    "Crisp fries loaded with spiced paneer, peppers and mint chutney. Our signature loaded snack with a desi punch.": {
      hi: "कुरकुरी फ्राइज़, मसालेदार पनीर, शिमला मिर्च और पुदीने की चटनी से लदी हुई। देसी पंच वाला हमारा सिग्नेचर लोडेड स्नैक।",
      pa: "ਕੁਰਕੁਰੀ ਫਰਾਈਜ਼, ਮਸਾਲੇਦਾਰ ਪਨੀਰ, ਸ਼ਿਮਲਾ ਮਿਰਚ ਤੇ ਪੁਦੀਨੇ ਦੀ ਚਟਨੀ ਨਾਲ ਭਰੀਆਂ ਹੋਈਆਂ। ਦੇਸੀ ਪੰਚ ਵਾਲਾ ਸਾਡਾ ਸਿਗਨੇਚਰ ਲੋਡਿਡ ਸਨੈਕ।"
    },
    "Garlic bread brushed with garlic butter and herbs, toasted until crisp on the edges. Warm, fragrant and simple. The right way to start a meal.": {
      hi: "गार्लिक बटर और हर्ब्स से ब्रश किया गया गार्लिक ब्रेड, किनारों पर कुरकुरा होने तक टोस्ट किया गया। गरम, खुशबूदार और सिंपल। भोजन शुरू करने का सही तरीका।",
      pa: "ਗਾਰਲਿਕ ਬਟਰ ਤੇ ਹਰਬਸ ਨਾਲ ਬਰੱਸ਼ ਕੀਤਾ ਗਾਰਲਿਕ ਬ੍ਰੈੱਡ, ਕਿਨਾਰਿਆਂ 'ਤੇ ਕੁਰਕੁਰਾ ਹੋਣ ਤੱਕ ਟੋਸਟ ਕੀਤਾ ਗਿਆ। ਗਰਮ, ਖੁਸ਼ਬੂਦਾਰ ਤੇ ਸਿੰਪਲ। ਖਾਣਾ ਸ਼ੁਰੂ ਕਰਨ ਦਾ ਸਹੀ ਤਰੀਕਾ।"
    },
    "Our garlic bread slathered in melted mozzarella and herbs, topped with a little more warmth. Rich, comfort, hard to resist.": {
      hi: "हमारा गार्लिक ब्रेड, पिघली मोज़ेरेला और हर्ब्स में लिपटा हुआ, ऊपर से थोड़ी और गर्माहट के साथ। रिच, आरामदायक, मना करना मुश्किल।",
      pa: "ਸਾਡਾ ਗਾਰਲਿਕ ਬ੍ਰੈੱਡ, ਪਿਘਲੀ ਮੌਜ਼ੇਰੇਲਾ ਤੇ ਹਰਬਸ ਵਿੱਚ ਲਿਪਟਿਆ ਹੋਇਆ, ਉੱਪਰੋਂ ਥੋੜ੍ਹੀ ਹੋਰ ਗਰਮਾਹਟ ਨਾਲ। ਰਿੱਚ, ਆਰਾਮਦਾਇਕ, ਨਾਂਹ ਕਰਨਾ ਔਖਾ।"
    },
    "Garlic bread topped with garden veg, creamy sauce and melted cheese. A tasty, fresh take on a classic side.": {
      hi: "गार्डन वेजिटेबल्स, क्रीमी सॉस और पिघली चीज़ से टॉप किया गया गार्लिक ब्रेड। एक क्लासिक साइड का स्वादिष्ट, ताज़ा अंदाज़।",
      pa: "ਗਾਰਡਨ ਸਬਜ਼ੀਆਂ, ਕਰੀਮੀ ਸਾਸ ਤੇ ਪਿਘਲੀ ਚੀਜ਼ ਨਾਲ ਟੌਪ ਕੀਤਾ ਗਾਰਲਿਕ ਬ੍ਰੈੱਡ। ਇੱਕ ਕਲਾਸਿਕ ਸਾਈਡ ਦਾ ਸੁਆਦੀ, ਤਾਜ਼ਾ ਅੰਦਾਜ਼।"
    },
    "A spiced patty with onions, tangy chutney and salad in soft bread. Full of flavor, filling and ready to go. Best savoured warm.": {
      hi: "मसालेदार पैटी, प्याज़, तीखी चटनी और सलाद के साथ नरम ब्रेड में। स्वाद से भरपूर, पेट भरने वाला और तुरंत तैयार। गरम खाने में सबसे बढ़िया।",
      pa: "ਮਸਾਲੇਦਾਰ ਪੈਟੀ, ਪਿਆਜ਼, ਤਿੱਖੀ ਚਟਨੀ ਤੇ ਸਲਾਦ ਨਾਲ ਨਰਮ ਬ੍ਰੈੱਡ ਵਿੱਚ। ਸੁਆਦ ਨਾਲ ਭਰਪੂਰ, ਢਿੱਡ ਭਰਨ ਵਾਲਾ ਤੇ ਤੁਰੰਤ ਤਿਆਰ। ਗਰਮ ਖਾਣ ਵਿੱਚ ਸਭ ਤੋਂ ਵਧੀਆ।"
    },
    "A tangy paneer patty, fresh slaw and mint chutney, wrapped in pillowy bread. Spicy, packed and satisfying. A proper hearty bite.": {
      hi: "तीखी पनीर पैटी, ताज़ा स्लॉ और पुदीने की चटनी, मुलायम ब्रेड में लिपटी हुई। मसालेदार, भरपूर और संतोषजनक। एक असली हार्दिक बाइट।",
      pa: "ਤਿੱਖੀ ਪਨੀਰ ਪੈਟੀ, ਤਾਜ਼ਾ ਸਲਾਅ ਤੇ ਪੁਦੀਨੇ ਦੀ ਚਟਨੀ, ਨਰਮ ਬ੍ਰੈੱਡ ਵਿੱਚ ਲਿਪਟੀ ਹੋਈ। ਮਸਾਲੇਦਾਰ, ਭਰਪੂਰ ਤੇ ਰੱਜਵੀਂ। ਇੱਕ ਅਸਲੀ ਦਿਲਦਾਰ ਬਾਈਟ।"
    },
    "Fresh veggie layers tossed with onion, tomato, lettuce and chutney between toasted bread. Crunchy, vibrant and bright. Great for a lighter lunch.": {
      hi: "ताज़ी सब्ज़ियों की परतें, प्याज़, टमाटर, लेट्यूस और चटनी के साथ टोस्टेड ब्रेड के बीच। कुरकुरा, जीवंत और ताज़गी भरा। हल्के लंच के लिए बढ़िया।",
      pa: "ਤਾਜ਼ੀਆਂ ਸਬਜ਼ੀਆਂ ਦੀਆਂ ਪਰਤਾਂ, ਪਿਆਜ਼, ਟਮਾਟਰ, ਲੈਟਿਊਸ ਤੇ ਚਟਨੀ ਨਾਲ ਟੋਸਟਿਡ ਬ੍ਰੈੱਡ ਦੇ ਵਿਚਕਾਰ। ਕੁਰਕੁਰਾ, ਜੀਵੰਤ ਤੇ ਤਾਜ਼ਗੀ ਭਰਿਆ। ਹਲਕੇ ਲੰਚ ਲਈ ਵਧੀਆ।"
    },
    "A simple, toasty sandwich with melted cheese, tomato and buttered bread. Warm, cheesy and unpretentious. Comfort in the simplest form.": {
      hi: "एक सिंपल, टोस्टी सैंडविच, पिघली चीज़, टमाटर और बटर लगी ब्रेड के साथ। गरम, चीज़ी और सीधा-सादा। सबसे सरल रूप में कम्फर्ट।",
      pa: "ਇੱਕ ਸਿੰਪਲ, ਟੋਸਟੀ ਸੈਂਡਵਿਚ, ਪਿਘਲੀ ਚੀਜ਼, ਟਮਾਟਰ ਤੇ ਬਟਰ ਲੱਗੀ ਬ੍ਰੈੱਡ ਨਾਲ। ਗਰਮ, ਚੀਜ਼ੀ ਤੇ ਸਿੱਧਾ-ਸਾਦਾ। ਸਭ ਤੋਂ ਸੌਖੇ ਰੂਪ ਵਿੱਚ ਆਰਾਮ।"
    },
    "Spiced paneer with onion and capsicum in toasted bread with creamy mayo. Bold flavours and soft bread make every bite worth it.": {
      hi: "मसालेदार पनीर, प्याज़ और शिमला मिर्च के साथ टोस्टेड ब्रेड में, क्रीमी मेयो के साथ। दमदार स्वाद और नरम ब्रेड हर बाइट को खास बनाते हैं।",
      pa: "ਮਸਾਲੇਦਾਰ ਪਨੀਰ, ਪਿਆਜ਼ ਤੇ ਸ਼ਿਮਲਾ ਮਿਰਚ ਨਾਲ ਟੋਸਟਿਡ ਬ੍ਰੈੱਡ ਵਿੱਚ, ਕਰੀਮੀ ਮੇਓ ਨਾਲ। ਦਮਦਾਰ ਸੁਆਦ ਤੇ ਨਰਮ ਬ੍ਰੈੱਡ ਹਰ ਬਾਈਟ ਨੂੰ ਖਾਸ ਬਣਾਉਂਦੇ ਹਨ।"
    },
    "Fresh moong sprouts tossed with onion, tomato, lemon and herbs, then dressed in crunchy chaat masala. Crisp, light and perfect when you want something green.": {
      hi: "ताज़े मूंग स्प्राउट्स, प्याज़, टमाटर, नींबू और हर्ब्स के साथ टॉस किए गए, फिर कुरकुरे चाट मसाले में सजाए गए। कुरकुरा, हल्का और जब कुछ हरा-भरा चाहिए हो तो एकदम सही।",
      pa: "ਤਾਜ਼ੇ ਮੂੰਗ ਸਪ੍ਰਾਊਟਸ, ਪਿਆਜ਼, ਟਮਾਟਰ, ਨਿੰਬੂ ਤੇ ਹਰਬਸ ਨਾਲ ਟੌਸ ਕੀਤੇ ਗਏ, ਫਿਰ ਕੁਰਕੁਰੇ ਚਾਟ ਮਸਾਲੇ ਵਿੱਚ ਸਜਾਏ ਗਏ। ਕੁਰਕੁਰਾ, ਹਲਕਾ ਤੇ ਜਦੋਂ ਕੁਝ ਹਰਾ-ਭਰਾ ਚਾਹੀਦਾ ਹੋਵੇ ਤਾਂ ਬਿਲਕੁਲ ਸਹੀ।"
    },
    "Crisp lettuce in a creamy dressing with croutons and parmesan. Cool, fresh and satisfying. Great with a hot meal.": {
      hi: "कुरकुरा लेट्यूस, क्रीमी ड्रेसिंग में क्राउटन्स और परमेज़न के साथ। ठंडा, ताज़ा और संतोषजनक। गरम खाने के साथ बढ़िया।",
      pa: "ਕੁਰਕੁਰਾ ਲੈਟਿਊਸ, ਕਰੀਮੀ ਡਰੈਸਿੰਗ ਵਿੱਚ ਕਰੌਟੌਨਸ ਤੇ ਪਰਮੇਜ਼ਨ ਨਾਲ। ਠੰਢਾ, ਤਾਜ਼ਾ ਤੇ ਰੱਜਵਾਂ। ਗਰਮ ਖਾਣੇ ਨਾਲ ਵਧੀਆ।"
    },
    "Soya chunks and paneer with fresh vegetables and zingy dressing. High-protein, flavourful and filling. Built for the more serious eater.": {
      hi: "सोया चंक्स और पनीर, ताज़ी सब्ज़ियों और तीखी ड्रेसिंग के साथ। हाई-प्रोटीन, स्वादिष्ट और पेट भरने वाला। ज़्यादा खाने वालों के लिए बना।",
      pa: "ਸੋਇਆ ਚੰਕਸ ਤੇ ਪਨੀਰ, ਤਾਜ਼ੀਆਂ ਸਬਜ਼ੀਆਂ ਤੇ ਤਿੱਖੀ ਡਰੈਸਿੰਗ ਨਾਲ। ਹਾਈ-ਪ੍ਰੋਟੀਨ, ਸੁਆਦੀ ਤੇ ਢਿੱਡ ਭਰਨ ਵਾਲਾ। ਵੱਧ ਖਾਣ ਵਾਲਿਆਂ ਲਈ ਬਣਿਆ।"
    },
    "Real fruit blended thick with chilled milk and a shot of sweet syrup. Fresh, creamy and refreshingly cool.": {
      hi: "असली फल, ठंडे दूध और मीठे सिरप की एक बूंद के साथ गाढ़ा ब्लेंड किया गया। ताज़ा, क्रीमी और ठंडक भरा।",
      pa: "ਅਸਲੀ ਫਲ, ਠੰਢੇ ਦੁੱਧ ਤੇ ਮਿੱਠੇ ਸੀਰਪ ਦੀ ਇੱਕ ਬੂੰਦ ਨਾਲ ਗਾੜ੍ਹਾ ਬਲੈਂਡ ਕੀਤਾ ਗਿਆ। ਤਾਜ਼ਾ, ਕਰੀਮੀ ਤੇ ਠੰਢਕ ਭਰਿਆ।"
    },
    "Thick, chilled and blended to smooth perfection. Rich chocolate or tart cranberry, served over ice with a sweet edge.": {
      hi: "गाढ़ा, ठंडा और चिकनी परफेक्शन तक ब्लेंड किया गया। रिच चॉकलेट या तीखी क्रैनबेरी, बर्फ के ऊपर मीठे टच के साथ परोसी गई।",
      pa: "ਗਾੜ੍ਹਾ, ਠੰਢਾ ਤੇ ਮੁਲਾਇਮ ਪਰਫੈਕਸ਼ਨ ਤੱਕ ਬਲੈਂਡ ਕੀਤਾ ਗਿਆ। ਰਿੱਚ ਚਾਕਲੇਟ ਜਾਂ ਖੱਟੀ ਕਰੈਨਬੇਰੀ, ਬਰਫ਼ ਉੱਪਰ ਮਿੱਠੇ ਟੱਚ ਨਾਲ ਪਰੋਸੀ ਗਈ।"
    },
    "Blended thick with chilled milk, cookies and caramel, then crowned with whipped cream. Dessert in a glass.": {
      hi: "ठंडे दूध, कुकीज़ और कैरेमल के साथ गाढ़ा ब्लेंड किया गया, फिर ऊपर व्हिप्ड क्रीम से सजाया गया। एक गिलास में मिठाई।",
      pa: "ਠੰਢੇ ਦੁੱਧ, ਕੂਕੀਜ਼ ਤੇ ਕੈਰੇਮਲ ਨਾਲ ਗਾੜ੍ਹਾ ਬਲੈਂਡ ਕੀਤਾ ਗਿਆ, ਫਿਰ ਉੱਪਰ ਵਿਪਡ ਕਰੀਮ ਨਾਲ ਸਜਾਇਆ ਗਿਆ। ਇੱਕ ਗਲਾਸ ਵਿੱਚ ਮਿਠਾਈ।"
    },
    "Thick, chilled and blended with sweetened yogurt and a hint of cardamom. Or sip the classic version, cool and comforting.": {
      hi: "गाढ़ी, ठंडी और मीठे दही व थोड़ी इलायची के साथ ब्लेंड की गई। या क्लासिक वर्ज़न लें, ठंडी और सुकून भरी।",
      pa: "ਗਾੜ੍ਹੀ, ਠੰਢੀ ਤੇ ਮਿੱਠੀ ਦਹੀਂ ਤੇ ਥੋੜ੍ਹੀ ਇਲਾਇਚੀ ਨਾਲ ਬਲੈਂਡ ਕੀਤੀ ਗਈ। ਜਾਂ ਕਲਾਸਿਕ ਵਰਜ਼ਨ ਲਵੋ, ਠੰਢੀ ਤੇ ਸਕੂਨ ਭਰੀ।"
    },
    "Tart but mellow with just enough salt to balance the yogurt. Simple, soothing and perfect with spicy food.": {
      hi: "हल्की खट्टी पर सौम्य, दही को संतुलित करने के लिए बस सही मात्रा में नमक। सिंपल, सुकून देने वाली और मसालेदार खाने के साथ बढ़िया।",
      pa: "ਹਲਕੀ ਖੱਟੀ ਪਰ ਨਰਮ, ਦਹੀਂ ਨੂੰ ਸੰਤੁਲਿਤ ਕਰਨ ਲਈ ਬੱਸ ਸਹੀ ਮਾਤਰਾ ਵਿੱਚ ਨਮਕ। ਸਿੰਪਲ, ਸਕੂਨ ਦੇਣ ਵਾਲੀ ਤੇ ਮਸਾਲੇਦਾਰ ਖਾਣੇ ਨਾਲ ਵਧੀਆ।"
    },
    "Fresh lime juice over chilled soda. Crisp, fizzy and ultra-refreshing. Simple and bright.": {
      hi: "ताज़ा नींबू का रस, ठंडे सोडे के ऊपर। कुरकुरा, फ़िज़ी और बेहद ताज़गी भरा। सिंपल और चमकदार।",
      pa: "ਤਾਜ਼ਾ ਨਿੰਬੂ ਦਾ ਰਸ, ਠੰਢੇ ਸੋਡੇ ਦੇ ਉੱਪਰ। ਕੁਰਕੁਰਾ, ਫਿਜ਼ੀ ਤੇ ਬੇਹੱਦ ਤਾਜ਼ਗੀ ਭਰਿਆ। ਸਿੰਪਲ ਤੇ ਚਮਕਦਾਰ।"
    },
    "North Indian lemonade with a crisp blend of lemon, black salt, cumin and mint. Tangy, refreshing and perfect for heat.": {
      hi: "उत्तर भारतीय नींबू पानी, नींबू, काले नमक, जीरे और पुदीने के तीखे मिश्रण के साथ। खट्टी, ताज़गी भरी और गर्मी के लिए एकदम सही।",
      pa: "ਉੱਤਰੀ ਭਾਰਤੀ ਨਿੰਬੂ ਪਾਣੀ, ਨਿੰਬੂ, ਕਾਲੇ ਨਮਕ, ਜੀਰੇ ਤੇ ਪੁਦੀਨੇ ਦੇ ਤਿੱਖੇ ਮਿਸ਼ਰਣ ਨਾਲ। ਖੱਟੀ, ਤਾਜ਼ਗੀ ਭਰੀ ਤੇ ਗਰਮੀ ਲਈ ਬਿਲਕੁਲ ਸਹੀ।"
    },
    "Fresh mint and lime muddled over chilled soda and ice, cool, zesty and calorie-free. A refreshing lift.": {
      hi: "ताज़ा पुदीना और नींबू, ठंडे सोडे और बर्फ के साथ मसला हुआ, ठंडा, तीखा और कैलोरी-फ्री। एक ताज़गी भरा एहसास।",
      pa: "ਤਾਜ਼ਾ ਪੁਦੀਨਾ ਤੇ ਨਿੰਬੂ, ਠੰਢੇ ਸੋਡੇ ਤੇ ਬਰਫ਼ ਨਾਲ ਮਿਲਾਇਆ ਹੋਇਆ, ਠੰਢਾ, ਤਿੱਖਾ ਤੇ ਕੈਲੋਰੀ-ਫ੍ਰੀ। ਇੱਕ ਤਾਜ਼ਗੀ ਭਰਿਆ ਅਹਿਸਾਸ।"
    },
    "Aloo Tikki Burger, a portion of classic fries and a shake for one. A complete meal that keeps things easy and satisfying.": {
      hi: "आलू टिक्की बर्गर, क्लासिक फ्राइज़ की एक सर्विंग और एक शेक, एक व्यक्ति के लिए। एक पूरा भोजन जो चीज़ों को आसान और संतोषजनक बनाए रखता है।",
      pa: "ਆਲੂ ਟਿੱਕੀ ਬਰਗਰ, ਕਲਾਸਿਕ ਫਰਾਈਜ਼ ਦੀ ਇੱਕ ਸਰਵਿੰਗ ਤੇ ਇੱਕ ਸ਼ੇਕ, ਇੱਕ ਵਿਅਕਤੀ ਲਈ। ਇੱਕ ਪੂਰਾ ਖਾਣਾ ਜੋ ਚੀਜ਼ਾਂ ਨੂੰ ਸੌਖਾ ਤੇ ਰੱਜਵਾਂ ਰੱਖਦਾ ਹੈ।"
    },
    "Our Paneer Tikki Burger combo with loaded fries and a shake. More spice, more cheese and more flavour — perfect for a bigger appetite.": {
      hi: "हमारा पनीर टिक्की बर्गर कॉम्बो, लोडेड फ्राइज़ और एक शेक के साथ। ज़्यादा मसाला, ज़्यादा चीज़ और ज़्यादा स्वाद — बड़ी भूख के लिए एकदम सही।",
      pa: "ਸਾਡਾ ਪਨੀਰ ਟਿੱਕੀ ਬਰਗਰ ਕੰਬੋ, ਲੋਡਿਡ ਫਰਾਈਜ਼ ਤੇ ਇੱਕ ਸ਼ੇਕ ਨਾਲ। ਵੱਧ ਮਸਾਲਾ, ਵੱਧ ਚੀਜ਼ ਤੇ ਵੱਧ ਸੁਆਦ — ਵੱਡੀ ਭੁੱਖ ਲਈ ਬਿਲਕੁਲ ਸਹੀ।"
    },
    "A pizza, loaded fries and two shakes for sharing. Good for friends or a small group, and made to feed two.": {
      hi: "एक पिज़्ज़ा, लोडेड फ्राइज़ और दो शेक, शेयर करने के लिए। दोस्तों या एक छोटे ग्रुप के लिए बढ़िया, और दो लोगों का पेट भरने के लिए बना।",
      pa: "ਇੱਕ ਪੀਜ਼ਾ, ਲੋਡਿਡ ਫਰਾਈਜ਼ ਤੇ ਦੋ ਸ਼ੇਕ, ਸਾਂਝੇ ਕਰਨ ਲਈ। ਦੋਸਤਾਂ ਜਾਂ ਇੱਕ ਛੋਟੇ ਗਰੁੱਪ ਲਈ ਵਧੀਆ, ਤੇ ਦੋ ਲੋਕਾਂ ਦਾ ਢਿੱਡ ਭਰਨ ਲਈ ਬਣਿਆ।"
    }
  }
};

// What this file does: all trilingual UI copy (UI_TEXT) and menu-name translations (MENU_I18N).
// Security limits: pure data — no execution of user input; missing keys fall back to the English key/text, never break rendering.
// Before production: fill in real hi/pa translations for any new keys added here, and add a 4th language by extending SUPPORTED_LANGS + both maps.
