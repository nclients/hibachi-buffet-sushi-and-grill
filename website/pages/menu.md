---
layout: "ssg-theme-astro/layouts/main.astro"
tag: "GTM-NW2CFJFM"
title: "Hibachi Buffet- Sushi & Grill"
favicon: "favicon.ico"
logo: "logo2.webp"
primaryColor: "#EA5A1B" # logo color
secondaryColor: "#000000"
primaryColorScheme: "dark" # dark | light
secondaryColorScheme: "dark"
dataGlfCuid: ""
dataGlfRuid: ""
orderOnlineLink: "#"
tableReservationLink: ""
tel: "(916) 961-1508"

# header
header:
  logoSize: 60
  logoSizeOnMobile: 50
  textAfterLogo:
    text: ""
    size: 16
    color: ""
  bgColor: "#000000"
  bgOpacity: "0.9" # 0~1
  menuTextColor: "#ffffff"
  menu:
    - { text: "Home", link: "/" }
    - { text: "Gallery", link: "/#gallery" }
    - { text: "Menu", link: "/menu" }
    - { text: "About Us", link: "/#about-us" }
    - { text: "Contact Us", link: "/#contact-us" }
    - { text: "中文", link: "/zh-cn" }
  addOrderOnlineBtn: false
  orderOnlineBtnInsteadText: ""
  addTableReservationBtn: false
  tableReservationBtnInsteadText: ""
  addTelBtn: true
  telTextColor: "#ffffff"
  addOtherBtn: true
  otherBtnInsteadText: "Get Direction"
  otherBtnHref: "https://maps.app.goo.gl/baq4QQgK9q8gsvuT6"

sections:
  - type: "menuDisplay"
    id: "menu-section"
    bgColor: "#111111"
    title:
      - "Menu"
    titleColor: "#ffffff"
    description:
      - "Our all-you-can-eat buffet promises something for everyone!"
    descriptionColor: "#EA5A1B"
    buffetPricing:
      title: "Buffet Pricing"
      plans:
        - name: "Weekday Lunch"
          tiers:
            - { label: "Regular", price: "$16.99" }
            - { label: "Senior 65+", price: "$15.29" }
            - { label: "Kids 7-10", price: "$8.99" }
            - { label: "Kids 3-6", price: "$6.99" }
        - name: "Weekday Dinner"
          tiers:
            - { label: "Regular", price: "$23.99" }
            - { label: "Senior 65+", price: "$21.59" }
            - { label: "Kids 7-10", price: "$11.99" }
            - { label: "Kids 3-6", price: "$8.99" }
        - name: "Weekend Dinner"
          tiers:
            - { label: "Regular", price: "$24.99" }
            - { label: "Senior 65+", price: "$22.49" }
            - { label: "Kids 7-10", price: "$11.99" }
            - { label: "Kids 3-6", price: "$8.99" }
      extras:
        - "Soft Drinks $2.59"
        - "Beer $5.99"
        - "Sake, Wine & Soju Available"
    partyTrays:
      title: "Party Trays"
      subtitle: "Perfect for any occasion"
      note: "Most buffet items can be made as party trays · Half / Full ($)"
      items:
        - { name: "Vegetable Eggrolls", half: "35", full: "70" }
        - { name: "Cheese Wonton", half: "35", full: "70" }
        - { name: "Sesame Ball", half: "35", full: "70" }
        - { name: "Mixed Vegetables", half: "35", full: "70" }
        - { name: "Fried Wings", half: "45", full: "90" }
        - { name: "Fried Spicy Wings", half: "45", full: "90" }
        - { name: "Fried Rice", half: "35", full: "70" }
        - { name: "Vegetable Lo Mein", half: "35", full: "70" }
        - { name: "House Special Fried Rice", half: "40", full: "80" }
        - { name: "House Special Lo Mein", half: "40", full: "80" }
        - { name: "Broccoli Chicken · Beef · Shrimp Combo", half: "40", full: "80" }
        - { name: "String Bean Chicken · Beef · Shrimp Combo", half: "40", full: "80" }
        - { name: "Orange Chicken", half: "40", full: "80" }
        - { name: "Mongolian Beef", half: "40", full: "80" }
        - { name: "Black Pepper Steak", half: "45", full: "90" }
        - { name: "Kung Pao Chicken · Shrimp · Beef Combo", half: "40", full: "80" }
        - { name: "Clam w/ Black Bean Sauce", half: "45", full: "90" }
        - { name: "Garlic Seafood", half: "60", full: "115" }
        - { name: "Salt & Pepper Shrimp", half: "55", full: "105" }
        - { name: "Fried Calamari", half: "55", full: "105" }
        - { name: "Spicy Jumbo Shrimp", half: "55", full: "105" }
    toGo:
      title: "To Go Price"
      subtitle: "Priced per pound unless noted"
      items:
        - { name: "Regular (Noodles, Fried Rice, Vegetables, Pork, Chicken)", price: "$7.99/lb" }
        - { name: "Hibachi Grill / Sushi", price: "$9.99/lb" }
        - { name: "Shell-On Seafood (Shrimp, Clams, Squid)", price: "$10.99/lb" }
        - { name: "Peeled Seafood", price: "$20.99/lb" }
        - { name: "Oysters", price: "$2.50/pc" }
        - { name: "Sashimi (Raw Fish)", price: "$20.99/lb" }
        - { name: "Mussels", price: "$1.00/pc" }
        - { name: "Beef / Steak", price: "$9.99/lb" }
        - { name: "Short Rib", price: "$15.99/lb" }
        - { name: "Frog Legs", price: "$12.99/lb" }
        - { name: "Mixed Food (Half Seafood + Half Regular)", price: "$8.99/lb" }
        - { name: "Fruits", price: "$5.99/lb" }
        - { name: "Dessert", price: "$7.99/lb" }
        - { name: "Sesame Ball", price: "$1/3pcs" }
        - { name: "Soup (Large)", price: "$5.99" }
        - { name: "Soup (Small)", price: "$2.99" }
        - { name: "Dumplings / Spring Rolls / Cheese Wonton", price: "$0.50/pc" }
        - { name: "Calamari / Frog Legs", price: "$12.99/lb" }
    folderPath: "menu"

footer:
  cookie: true
  mode: 1 # 1
  noMarginTop: true
  bgImg: "gallery2/A view of a buffet with multiple food stations, offering a wide range of cuisines.webp"
  bgImgAlt: "Hibachi Buffet Sushi Grill - Best Food Today"
  bgColor: "#000000"
  bgOpacity: "0.8" # 0~1
  openingHours:
    - "Monday to Sunday: 11:00 AM - 9:00 PM"

  addressInsteadText: "Address"
  address:
    - address: "5623 Sunrise Blvd, Citrus Heights, CA 95610"
      url: "https://maps.app.goo.gl/baq4QQgK9q8gsvuT6"

  isLogo: true
  logoSize: 70

  menu:
    - { text: "Home", link: "/" }
    - { text: "Gallery", link: "/#gallery" }
    - { text: "About Us", link: "/#about-us" }
    - { text: "Contact Us", link: "/#contact-us" }
    - { text: "中文", link: "/zh-cn" }

  FB: false
  FBLink: "#"
  IG: false
  IGLink: "#"
  X: false
  XLink: ""
  youtube: false
  youtubeLink: ""
  yelp: true
  yelpLink: "https://www.yelp.com/biz/hibachi-buffet-sushi-and-grill-citrus-heights"

  paymentMethod: "" #alipay,applePay,cash,discover,googlePay,jcb,maestro,mastercard,stripe,unionPay,visa,weChatPay,payPal

  # optional
seo:
  metaTitle: "Menu | Hibachi Buffet Sushi & Grill | Citrus Heights"
  metaDescription: "View the full menu for Hibachi Buffet Sushi & Grill in Citrus Heights, CA — buffet pricing, party trays, and to-go pricing."
  img: "Hibachi Buffet- Sushi & Grill - Best Food Today.webp"
  thisPageUrl: "/menu"
  locale: "en_US" # zh_TW | zh_CN
  canonicalHref: "https://hibachibuffetsacramento.com/menu"
---

<!-- hello world -->
