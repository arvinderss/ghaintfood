/*
 * Ghaint Food — translations for the light/dark theme + language switcher.
 * UI_TEXT covers static copy (data-i18n / data-i18n-html / data-i18n-aria in index.html).
 * MENU_I18N covers menu category/item names, which are keyed by the English
 * strings used in js/menu-data.js so the cart/WhatsApp logic stays language-agnostic.
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

  footer_hours: { en: "Open daily, 12:00 PM – 11:00 PM", hi: "रोज़ाना खुला, दोपहर 12:00 – रात 11:00", pa: "ਰੋਜ਼ਾਨਾ ਖੁੱਲ੍ਹਾ, ਦੁਪਹਿਰ 12:00 – ਰਾਤ 11:00" },
  footer_copy_rights: { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।", pa: "ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।" },

  cart_title: { en: "Your Order", hi: "आपका ऑर्डर", pa: "ਤੁਹਾਡਾ ਆਰਡਰ" },
  aria_view_cart: { en: "View your cart", hi: "अपना कार्ट देखें", pa: "ਆਪਣਾ ਕਾਰਟ ਵੇਖੋ" },
  aria_close_cart: { en: "Close cart", hi: "कार्ट बंद करें", pa: "ਕਾਰਟ ਬੰਦ ਕਰੋ" },
  cart_empty: {
    en: "Your cart is empty. Add items from the menu to get started.",
    hi: "आपका कार्ट खाली है। शुरू करने के लिए मेन्यू से आइटम जोड़ें।",
    pa: "ਤੁਹਾਡਾ ਕਾਰਟ ਖਾਲੀ ਹੈ। ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਮੀਨੂ ਤੋਂ ਆਈਟਮ ਪਾਓ।"
  },
  cart_total_label: { en: "Total Payable", hi: "कुल भुगतान", pa: "ਕੁੱਲ ਭੁਗਤਾਨ" },
  cart_send_whatsapp: { en: "Send Order on WhatsApp", hi: "WhatsApp पर ऑर्डर भेजें", pa: "WhatsApp 'ਤੇ ਆਰਡਰ ਭੇਜੋ" },
  cart_pay_upi: { en: "Pay via UPI", hi: "UPI से भुगतान करें", pa: "UPI ਨਾਲ ਭੁਗਤਾਨ ਕਰੋ" },
  cart_pay_upi_amount: { en: "Pay {amount} via UPI", hi: "{amount} UPI से भुगतान करें", pa: "{amount} UPI ਨਾਲ ਭੁਗਤਾਨ ਕਰੋ" },
  cart_note: {
    en: 'After sending your order on WhatsApp, tap "Pay via UPI" to complete payment for the exact amount, then send us a screenshot of the payment confirmation in the same chat.',
    hi: 'WhatsApp पर अपना ऑर्डर भेजने के बाद, सही राशि का भुगतान पूरा करने के लिए "UPI से भुगतान करें" दबाएं, फिर उसी चैट में भुगतान पुष्टि का स्क्रीनशॉट भेजें।',
    pa: 'WhatsApp \'ਤੇ ਆਪਣਾ ਆਰਡਰ ਭੇਜਣ ਤੋਂ ਬਾਅਦ, ਸਹੀ ਰਕਮ ਦਾ ਭੁਗਤਾਨ ਪੂਰਾ ਕਰਨ ਲਈ "UPI ਨਾਲ ਭੁਗਤਾਨ ਕਰੋ" ਦਬਾਓ, ਫਿਰ ਉਸੇ ਚੈਟ ਵਿੱਚ ਭੁਗਤਾਨ ਪੁਸ਼ਟੀ ਦਾ ਸਕ੍ਰੀਨਸ਼ਾਟ ਭੇਜੋ।'
  },

  wa_default_order: {
    en: "Hi Ghaint Food! I'd like to place an order.",
    hi: "नमस्ते घैंट फूड! मैं ऑर्डर देना चाहता/चाहती हूं।",
    pa: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਘੈਂਟ ਫੂਡ! ਮੈਂ ਆਰਡਰ ਦੇਣਾ ਚਾਹੁੰਦਾ/ਚਾਹੁੰਦੀ ਹਾਂ।"
  },
  wa_intro: {
    en: "Hi Ghaint Food! Here's my order:",
    hi: "नमस्ते घैंट फूड! यह रहा मेरा ऑर्डर:",
    pa: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਘੈਂਟ ਫੂਡ! ਇਹ ਹੈ ਮੇਰਾ ਆਰਡਰ:"
  },
  wa_total_payable: { en: "Total Payable:", hi: "कुल भुगतान:", pa: "ਕੁੱਲ ਭੁਗਤਾਨ:" },
  wa_pay_via_upi: {
    en: "I'll pay via UPI:",
    hi: "मैं UPI से भुगतान करूंगा/करूंगी:",
    pa: "ਮੈਂ UPI ਨਾਲ ਭੁਗਤਾਨ ਕਰਾਂਗਾ/ਕਰਾਂਗੀ:"
  },
  wa_screenshot_next: {
    en: "Sending the payment confirmation screenshot next.",
    hi: "अगला संदेश भुगतान पुष्टि का स्क्रीनशॉट होगा।",
    pa: "ਅਗਲਾ ਸੁਨੇਹਾ ਭੁਗਤਾਨ ਪੁਸ਼ਟੀ ਦਾ ਸਕ੍ਰੀਨਸ਼ਾਟ ਹੋਵੇਗਾ।"
  },

  theme_toggle_to_dark: { en: "Switch to dark theme", hi: "डार्क थीम पर जाएं", pa: "ਡਾਰਕ ਥੀਮ 'ਤੇ ਜਾਓ" },
  theme_toggle_to_light: { en: "Switch to light theme", hi: "लाइट थीम पर जाएं", pa: "ਲਾਈਟ ਥੀਮ 'ਤੇ ਜਾਓ" },
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
  }
};
