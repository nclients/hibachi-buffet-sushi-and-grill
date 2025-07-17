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
tel: "279-348-8088"

# banner:
#   text:
#     - boldText: "🔥 All you can eat seafood, sushi and hibachi grill. Limited time offer. soft opening special . take 15% off entire bill with this ad."
#     - text: ""
#     # - smText: ""
#     # - text: ""
#   # add more text...
#   textColor: "#ffffff"
#   bgColor: "#EA5A1B"
#   bgOpacity: "1" # 0~1

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
    - { text: "Gallery", link: "#gallery" }
    - { text: "About Us", link: "#about-us" }
    - { text: "Contact Us", link: "#contact-us" }
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
  # hero
  - type: "hero"
    id: ""
    height: "100" # Conditionally use only when sectionType is imgBg
    sectionType: "video" # video | imgWithText | imgBg
    bgVideoType: "gjw" # youtube | vimeo | gjw
    bgVideoId: "1gvlliaiuet6msEpjPvBMYNJG1bn1c"
    bgImg: "Hibachi Buffet- Sushi & Grill - Best Food Today.webp"
    bgImgAlt: "hibachi buffet sushi and grill citrus heights"
    bgColor: "#000"
    bgOpacity: "0.5" # 0~1
    title:
      - "Hibachi Buffet Sushi and Grill"
    titleColor: "#ffffff"
    titleBgColor: "#000"
    description:
      - "Experience Variety and Freshness: The largest buffet restaurant in Sacramento!"
    descriptionColor: "#ffffff"

    addOrderOnlineBtn: false
    orderOnlineBtnInsteadText: ""
    addTableReservationBtn: false
    tableReservationBtnInsteadText: ""
    showOtherBtn: false
    btn1Text: "Get Direction" # default: order online
    btn1Href: "https://maps.app.goo.gl/baq4QQgK9q8gsvuT6" # default: order online
    btn2Text: "Tel: (279) 348-8088" # default: table reservation
    btn2Href: "tel:279-348-8088 " # default: table reservation

    bannerImg: "Hibachi Buffet- Sushi & Grill - Best Food Today.webp"
    imgAlt: "Hibachi Buffet- Sushi & Grill - Best Food Today"
    imgPosition: "" # imgLeft | imgRight
    bannerMarginTopMobile: 16
    imgRounded: "lg" # sm | md | lg | xl | 2xl | 3xl | full

    bottomRounded: "" # sm | md | lg | xl | 2xl | 3xl | full
    # bottomInfo: "We offer Takeout"

  # Video
  - type: "video"
    id: "video"
    title:
      - "Hibachi Buffet Sushi and Grill"
    description:
      - "Voted No.1 by ‘Taste of America’"
    videoType: "gjw" # vimeo | gjw | youtube
    videoId:
      - "1gueft0keol4QZp7RqibZLYsR1co1c"
    isOnlyDisplayOnMobile: false

  # Gallery
  - type: "gallery"
    id: "gallery"
    mode: 3 # 1 - 4
    bgImg: ""
    bgImgAlt: ""
    bgColor: ""
    bgOpacity: "" # 0~1
    title:
      - "Food at Hibachi Buffet Sushi and Grill"
    titleColor: "#000000"
    description:
      - "Sacramento’s Top Buffet Choice！"
    descriptionColor: "#333333"
    folderPath: "gallery"
    showImgName: false # true | false
    imgNameColor: "#000000"
    menuItemImgRounded: "3xl" # sm | md | lg | xl | 2xl | 3xl | full

  - type: "gallery"
    id: "menu"
    mode: 2 # 1 - 3
    bgImg: ""
    bgImgAlt: ""
    bgColor: ""
    bgOpacity: "" # 0~1
    title:
      - "Menu"
    titleColor: "#000000"
    description:
      - "our all-you-can-eat buffet promises something for everyone!"
    descriptionColor: "#333333"
    folderPath: "menu"
    showImgName: false # true | false
    imgNameColor: "#000000"
    menuItemImgRounded: "3xl" # sm | md | lg | xl | 2xl | 3xl | full

  # # textBlock
  #   - type: "textBlock"
  #     id: "about-us"
  #     bgImg: ""
  #     bgImgAlt: ""
  #     bgColor: "#000"
  #     bgOpacity: "" # 0~1
  # title:
  #   - "A Corner of Tradition and Flavor"
  # titleColor: "#000000"
  # description:
  #   - "From the heart of Newark, CA, Crabby Crabby Restaurant is a corner where tradition meets flavor. Every corner of our restaurant is infused with authenticity, from the décor to every bite we serve."
  #   # - text: "We serve Imperial Soup dishes plus other Asian dishes. Feel free to message us about inquiries! We'll get back to you as soon as we can!"
  # descriptionColor: "#000000"

  # textBlock - only title
  - type: "textBlock"
    id: "about-us"
    bgImg: ""
    bgImgAlt: ""
    bgColor: ""
    bgOpacity: "" # 0~1
    title:
      - "About Us"
    titleColor: "#000000"
    description:
      - "Indulge in a culinary adventure at Hibachi Buffet Sushi & Grill, where you'll discover a world of flavors from across Asia. Our all-you-can-eat buffet features a wide array of fresh sushi, sizzling hibachi, and delectable Asian dishes."
    descriptionColor: ""

  # feature - 1
  - type: "feature"
    id: ""
    height: "" # Conditionally use only when sectionType is imgBg
    noMarginTop: true
    sectionType: "imgWithText" # video | imgWithText | imgBg
    bgVideoType: "" # youtube | vimeo | gjw
    bgVideoId: ""
    bgImg: ""
    bgImgAlt: ""
    bgColor: ""
    bgOpacity: "" # 0~1
    title:
      - ""
    titleColor: "#000000"
    description:
      - "We pride ourselves on offering a delightful dining experience with a vast selection of delicious dishes. Our buffet features a wide array of fresh seafood, sushi, and Asian specialties, ensuring there's something for everyone. The vibrant ambiance, coupled with our attentive service, makes us a popular destination for both locals and visitors alike."
    descriptionColor: "#000000"
    # title2:
    #   - "A Corner of Tradition and Flavor"
    # title2Color: "#000000"
    # description2:
    #   - "From the heart of Newark, CA, Crabby Crabby Restaurant is a corner where tradition meets flavor. Every corner of our restaurant is infused with authenticity, from the décor to every bite we serve."
    #   # - text: "We serve Imperial Soup dishes plus other Asian dishes. Feel free to message us about inquiries! We'll get back to you as soon as we can!"
    # description2Color: "#000000"
    # title2:
    #   - "Committed to the Community"
    # title2Color: "#000000"
    # description2:
    #   - "We are proud to be an active part of the Newark, CA community. Through special events, collaborations with local venues and participation in community initiatives, Crabby Crabby Restaurant seeks to strengthen the ties that bind us together."
    # description2Color: "#000000"
    isTextAlignCenter: false

    addOrderOnlineBtn: false
    orderOnlineBtnInsteadText: ""
    addTableReservationBtn: false
    tableReservationBtnInsteadText: ""
    showOtherBtn: false
    btn1Text: "" # default: order online
    btn1Href: "#" # default: order online
    btn2Text: "" # default: table reservation
    btn2Href: "" # default: table reservation

    bannerImg: "gallery2/Hibachi Buffet- Sushi & Grill1.webp"
    imgAlt: "Hibachi_Buffet_Sushi_Grill_Best_Food_Today"
    imgPosition: "imgLeft" # imgLeft | imgRight

    bottomRounded: "" # sm | md | lg | xl | 2xl | 3xl | full

  # feature - 2
  - type: "feature"
    noMarginTop: true
    id: ""
    height: "" # Conditionally use only when sectionType is imgBg
    sectionType: "imgWithText" # video | imgWithText | imgBg
    bgVideoType: "" # youtube | vimeo | gjw
    bgVideoId: ""
    bgImg: ""
    bgImgAlt: ""
    bgColor: ""
    bgOpacity: "" # 0~1
    title:
      - ""
    titleColor: "#000000"
    description:
      - "We take great care in maintaining a clean and inviting atmosphere across our multiple dining rooms, which helps keep the noise level down and provides a comfortable dining environment. Our dedicated team ensures that fresh food is constantly replenished, and plates are cleared promptly, allowing you to enjoy your meal without any interruptions."
    descriptionColor: "#000000"

    addOrderOnlineBtn: false
    orderOnlineBtnInsteadText: ""
    addTableReservationBtn: false
    tableReservationBtnInsteadText: ""
    showOtherBtn: false
    btn1Text: "" # default: order online
    btn1Href: "#" # default: order online
    btn2Text: "" # default: table reservation
    btn2Href: "" # default: table reservation

    bannerImg: "gallery2/Hibachi Buffet- Sushi & Grill.webp"
    imgAlt: ""
    imgPosition: "imgRight" # imgLeft | imgRight

    bottomRounded: "3xl" # sm | md | lg | xl | 2xl | 3xl | full

    # feature - 3
  - type: "feature"
    id: ""
    height: "" # Conditionally use only when sectionType is imgBg
    noMarginTop: true
    sectionType: "imgWithText" # video | imgWithText | imgBg
    bgVideoType: "" # youtube | vimeo | gjw
    bgVideoId: ""
    bgImg: ""
    bgImgAlt: ""
    bgColor: ""
    bgOpacity: "" # 0~1
    title:
      - ""
    titleColor: "#000000"
    description:
      - "Whether you're here to celebrate a special occasion or simply enjoy a great meal, our diverse offerings and commitment to quality make us a top choice for buffets in the Sacramento area. We highly recommend trying a variety of dishes to find your favorites, and our friendly staff is always here to help with any questions you may have."
    descriptionColor: "#000000"
    # title2:
    #   - "A Corner of Tradition and Flavor"
    # title2Color: "#000000"
    # description2:
    #   - "From the heart of Newark, CA, Crabby Crabby Restaurant is a corner where tradition meets flavor. Every corner of our restaurant is infused with authenticity, from the décor to every bite we serve."
    #   # - text: "We serve Imperial Soup dishes plus other Asian dishes. Feel free to message us about inquiries! We'll get back to you as soon as we can!"
    # description2Color: "#000000"
    # title2:
    #   - "Committed to the Community"
    # title2Color: "#000000"
    # description2:
    #   - "We are proud to be an active part of the Newark, CA community. Through special events, collaborations with local venues and participation in community initiatives, Crabby Crabby Restaurant seeks to strengthen the ties that bind us together."
    # description2Color: "#000000"
    isTextAlignCenter: false

    addOrderOnlineBtn: false
    orderOnlineBtnInsteadText: ""
    addTableReservationBtn: false
    tableReservationBtnInsteadText: ""
    showOtherBtn: false
    btn1Text: "" # default: order online
    btn1Href: "#" # default: order online
    btn2Text: "" # default: table reservation
    btn2Href: "" # default: table reservation

    bannerImg: "gallery2/The bronze statues inside the Hibachi Buffet- Sushi & Grill.webp"
    imgAlt: "Hibachi_Buffet_Sushi_Grill_Best_Food_Today"
    imgPosition: "imgLeft" # imgLeft | imgRight

    bottomRounded: "" # sm | md | lg | xl | 2xl | 3xl | full

  # # textBlock
  #   - type: "textBlock"
  #     id: "about-us"
  #     bgImg: ""
  #     bgImgAlt: ""
  #     bgColor: ""
  #     bgOpacity: "" # 0~1
  #     title:
  #       - "About Us"
  #     titleColor: "#000000"
  #     description:
  #       - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  #       - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  #       # - text: "We serve Imperial Soup dishes plus other Asian dishes. Feel free to message us about inquiries! We'll get back to you as soon as we can!"
  #     descriptionColor: "#000000"
  # # feature - 2
  #   - type: "feature"
  #     id: "contact-us"
  #     noMarginTop: false
  #     height: "100" # Conditionally use only when sectionType is imgBg
  #     sectionType: "imgWithText" # video | imgWithText | imgBg
  #     bgVideoType: "" # youtube | vimeo | gjw
  #     bgVideoId: ""
  #     bgImg: ""
  #     bgImgAlt: ""
  #     bgColor: ""
  #     bgOpacity: "" # 0~1
  #     title:
  #       - "Store 1: Kearny St"
  #     titleColor: "#000000"
  #     description:
  #       - "Lorem ipsum dolor sit amet, consectetur"
  #     descriptionColor: "#000000"
  #     # title2:
  #     #   - "A Corner of Tradition and Flavor"
  #     # title2Color: "#000000"
  #     # description2:
  #     #   - "From the heart of Newark, CA, Crabby Crabby Restaurant is a corner where tradition meets flavor. Every corner of our restaurant is infused with authenticity, from the décor to every bite we serve."
  #     #   # - text: "We serve Imperial Soup dishes plus other Asian dishes. Feel free to message us about inquiries! We'll get back to you as soon as we can!"
  #     # description2Color: "#000000"
  #     # title2:
  #     #   - "Committed to the Community"
  #     # title2Color: "#000000"
  #     # description2:
  #     #   - "We are proud to be an active part of the Newark, CA community. Through special events, collaborations with local venues and participation in community initiatives, Crabby Crabby Restaurant seeks to strengthen the ties that bind us together."
  #     # description2Color: "#000000"
  #     isTextAlignCenter: false

  #     addOrderOnlineBtn: false
  #     orderOnlineBtnInsteadText: ""
  #     addTableReservationBtn: false
  #     tableReservationBtnInsteadText: ""
  #     showOtherBtn: true
  #     btn1Text: "Order online from Kearny St store"
  #     btn1Href: "#"
  #     btn2Text: ""
  #     btn2Href: ""

  #     bannerImg: ""
  #     imgAlt: ""
  #     imgPosition: "" # imgLeft | imgRight

  #     map: true
  #     url: "https://maps.app.goo.gl/nZ57LDJrofANer8J6"
  #     iframeUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d394.10234978168285!2d-122.4046165!3d37.7942861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b1948e55b%3A0xcb3994bcd586810e!2sHon&#39;s%20Wun-Tun%20House!5e0!3m2!1sen!2sus!4v1722231832722!5m2!1sen!2sus"
  #     addTelBtn: true
  #     tel: "000000000"
  #     telInsteadText: "Call: (000) 000-0000"
  #     getDirectionBtnInsteadText: ""
  #     bottomRounded: "" # sm | md | lg | xl | 2xl | 3xl | full (only for background)

  # # textBlock - Information
  #   - type: "textBlock"
  #     noMarginTop: false
  #     id: ""
  #     bgImg: "sample.webp"
  #     bgImgAlt: "aaa"
  #     bgColor: "#000"
  #     bgOpacity: "0.6" # 0~1
  #     title:
  #       - "NEW! Online Ordering"
  #     titleColor: "#ffffff"
  #     description:
  #       - "Online ordering NOW enabled for pick-up. Just tell us what you want and we'll prepare it as fast as we can. All orders are manually confirmed by us directly. Find out in real-time when your food is ready. All orders are manually confirmed by us in real-time. Watch on-screen when your food is ready for pickup."
  #     descriptionColor: "#ffffff"

  # map
  - type: "map"
    noMarginTop: false
    id: "contact-us"
    mode: "fullWidth" # full-width | ...
    url: "https://maps.app.goo.gl/baq4QQgK9q8gsvuT6"
    iframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.1563766683626!2d-121.27547174783979!3d38.66827407348092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809adf84c7c0d6d3%3A0x8ad478e11209fd52!2sHibachi%20Buffet%2C%20Sushi%20%26%20Grill!5e0!3m2!1sen!2sus!4v1722498429048!5m2!1sen!2sus"
    addTelBtn: true
    getDirectionBtnInsteadText: ""
    telInsteadText: "Tel: 279-348-8088"

  # The modal will only appear once within 30 minutes."
  # - type: "modal"
  #   bgColor: "#333"
  #   bgOpacity: "0.1" # 0~1
  #   title:
  #     - "🔥 All you can eat seafood, sushi and hibachi grill."
  #   titleColor: "##EA5A1B"
  #   titleSize: 18
  #   description: ""
  #   descriptionColor: ""
  #   descriptionSize: 16
  #   imgName: "offer.webp"
  #   imgAlt: "🔥 Limited time offer. soft opening special . take 15% off entire bill with this ad."
  #   buttonText: "Get Direction"
  #   btnHref: "https://maps.app.goo.gl/baq4QQgK9q8gsvuT6" # default orderOnlineLink

footer:
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
    - { text: "Home", link: "#" }
    - { text: "Gallery", link: "#gallery" }
    - { text: "About Us", link: "#about-us" }
    - { text: "Contact Us", link: "#contact-us" }
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
  metaTitle: "Hibachi Buffet Sushi & Grill | Citrus Heights"
  metaDescription: "Discover Hibachi Buffet Sushi & Grill, a local favorite at 5623 Sunrise Blvd, Citrus Heights, CA. Enjoy fresh seafood, sushi, and Asian cuisine."
  # keywords: "Best Hibachi Buffet in Citrus Heights, All-you-can-eat Sushi in Citrus Heights, Family-friendly Asian Restaurant in Citrus Heights, Affordable Buffet in Citrus Heights, Hibachi Buffet with Fresh Seafood in Citrus Heights"
  img: "Hibachi Buffet- Sushi & Grill - Best Food Today.webp"
  thisPageUrl: ""
  locale: "en_US" # zh_TW | zh_CN
  canonicalHref: "https://hibachibuffetsacramento.com/"
---

<!-- hello world -->
