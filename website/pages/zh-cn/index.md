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

# banner:
#   text:
#     - boldText: "🔥 無限暢享海鮮、壽司和鐵板燒。限時優惠。試營運特別折扣，憑此廣告全單享有15折優惠。"
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
    - { text: "首頁", link: "#" }
    - { text: "菜品展示", link: "#gallery" }
    - { text: "關於我們", link: "#about-us" }
    - { text: "聯繫我們", link: "#contact-us" }
    - { text: "English", link: "/" }
  addOrderOnlineBtn: false
  orderOnlineBtnInsteadText: ""
  addTableReservationBtn: false
  tableReservationBtnInsteadText: ""
  addTelBtn: true
  telTextColor: "#ffffff"
  addOtherBtn: true
  otherBtnInsteadText: "導航去餐廳"
  otherBtnHref: "https://maps.app.goo.gl/baq4QQgK9q8gsvuT6"

sections:
  # hero
  - type: "hero"
    id: ""
    height: "100" # Conditionally use only when sectionType is imgBg
    sectionType: "video" # video | imgWithText | imgBg
    bgVideoType: "gjw" # youtube | vimeo | gjw
    bgVideoId: "1gvlliaiuet6msEpjPvBMYNJG1bn1c"
    bgImg: "Hibachi Buffet- Sushi & Grill - Best Food Today_original.webp"
    bgImgAlt: "hibachi buffet sushi and grill citrus heights"
    bgColor: "#000"
    bgOpacity: "0.3" # 0~1
    title:
      - "Hibachi Buffet- Sushi & Grill"
    titleColor: "#ffffff"
    description:
      - "豐富多樣，新鮮美味：薩克拉門托最大的自助餐廳！"
    descriptionColor: "#ffffff"

    addOrderOnlineBtn: false
    orderOnlineBtnInsteadText: ""
    addTableReservationBtn: false
    tableReservationBtnInsteadText: ""
    showOtherBtn: false
    btn1Text: "導航去餐廳" # default: order online
    btn1Href: "https://maps.app.goo.gl/baq4QQgK9q8gsvuT6" # default: order online
    btn2Text: "電話: (916) 961-1508" # default: table reservation
    btn2Href: "tel:(916) 961-1508 " # default: table reservation

    # bannerImg: "Hibachi Buffet- Sushi & Grill - Best Food Today.webp"
    imgAlt: "Hibachi Buffet- Sushi & Grill - Best Food Today"
    imgPosition: "imgLeft" # imgLeft | imgRight
    bannerMarginTopMobile: 16
    imgRounded: "" # sm | md | lg | xl | 2xl | 3xl | full

    bottomRounded: "" # sm | md | lg | xl | 2xl | 3xl | full
    # bottomInfo: "We offer Takeout"

  # # Video
  # - type: "video"
  #   id: "video"
  #   title:
  #     - "您的首選自助餐目的地"
  #   description:
  #     - "秉持品質與服務的承諾，為您帶來美食的享受。"
  #   videoType: "gjw" # vimeo | gjw | youtube
  #   videoId:
  #     - "1gueft0keol4QZp7RqibZLYsR1co1c"
  #   isOnlyDisplayOnMobile: true

  # Video
  - type: "video"
    id: "video"
    title:
      - "日式鐵板燒自助壽司燒烤"
    description:
      - "榮獲「美國美食」評選第一"
    videoType: "gjw" # vimeo | gjw | youtube
    videoId:
      - "1gueft0keol4QZp7RqibZLYsR1co1c"
    isOnlyDisplayOnMobile: false

  # Gallery
  - type: "gallery"
    id: "gallery"
    mode: 3 # 1 - 3
    bgImg: ""
    bgImgAlt: ""
    bgColor: ""
    bgOpacity: "" # 0~1
    title:
      - "自助餐愛好者的天堂"
    titleColor: "#000000"
    description:
      - "薩克拉門託頂級自助餐之選"
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
      - "菜單"
    titleColor: "#000000"
    description:
      - "來自 Citrus Heights 的鐵板燒自助餐,您附近的人氣自助餐廳!"
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
      - "關於我們"
    titleColor: "#000000"
    description:
      - ""
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
      - "在 Hibachi Buffet Sushi & Grill，我們很榮幸為您提供愉快的用餐體驗，精選各種美味佳餚。我們的自助餐包含新鮮的海鮮、壽司和亞洲特色美食，確保每個人都能找到自己喜歡的食物。充滿活力的氛圍，加上我們周到的服務，使我們成為當地人和遊客的熱門選擇。"
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
      - "我們非常注重保持多個用餐區域的整潔和舒適的氛圍，這有助於為您提供一個舒適的用餐環境。我們的專職團隊確保新鮮的食物不斷補充，及時清理餐具，讓您在用餐過程中無任何干擾，盡情享受美食。"
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
    imgAlt: "Lorem ipsum dolor sit amet"
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
      - "無論您是來慶祝特殊的場合，還是簡單地享受一頓美味的餐食，我們多樣化的選擇和對品質的承諾，使我們成為薩克拉門托地區自助餐的首選。我們強烈推薦您嘗試各種菜餚，找到自己最喜歡的食物。我們友善的員工隨時準備好解答您的任何問題。"
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
  #     orderOnlineBtnInsteadText: "See MENU & Order"
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
    getDirectionBtnInsteadText: "導航去餐廳"
    telInsteadText: "電話: (916) 961-1508"

  # The modal will only appear once within 30 minutes."
  # - type: "modal"
  #   bgColor: "#333"
  #   bgOpacity: "0.1" # 0~1
  #   title:
  #     - "🔥 無限暢享海鮮、壽司和鐵板燒。"
  #   titleColor: "##EA5A1B"
  #   titleSize: 18
  #   description: ""
  #   descriptionColor: ""
  #   descriptionSize: 16
  #   imgName: "offer_chinese.webp"
  #   imgAlt: "🔥 限時優惠。試營運特別折扣，憑此廣告全單享有15折優惠。"
  #   buttonText: "導航去餐廳"
  #   btnHref: "https://maps.app.goo.gl/baq4QQgK9q8gsvuT6" # default orderOnlineLink

footer:
  mode: 1 # 1
  noMarginTop: true
  bgImg: "gallery2/A view of a buffet with multiple food stations, offering a wide range of cuisines.webp"
  bgImgAlt: "Hibachi Buffet Sushi Grill - Best Food Today"
  bgColor: "#000000"
  bgOpacity: "0.8" # 0~1
  openingHours:
    - "週一 ～ 週日: 11:00 AM - 9:00 PM"
  openingHoursInsteadText: "營業時間"

  addressInsteadText: "地 址"
  address:
    - address: "5623 Sunrise Blvd, Citrus Heights, CA 95610"
      url: "https://maps.app.goo.gl/baq4QQgK9q8gsvuT6"

  isLogo: true
  logoSize: 70

  menu:
    - { text: "首頁", link: "#" }
    - { text: "菜品展示", link: "/zh-cn/gallery" }
    - { text: "關於我們", link: "/zh-cn#about-us" }
    - { text: "聯繫我們", link: "/zh-cn#contact-us" }
    - { text: "English", link: "/" }
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
  metaDescription: "探索位於 Citrus Heights, CA 的 5623 Sunrise Blvd 上深受當地人喜愛的 Hibachi Buffet Sushi & Grill。享受新鮮海鮮、壽司和亞洲美食。"
  keywords: "Citrus Heights 最佳鐵板燒自助餐, 無限暢吃壽司, 適合家庭的亞洲餐廳, 實惠的自助餐, 提供新鮮海鮮的鐵板燒自助餐"
  img: "sHibachi Buffet- Sushi & Grill - Best Food Today.webp"
  thisPageUrl: ""
  locale: "zh_CN" # zh_TW | zh_CN
  canonicalHref: "https://hibachibuffetsacramento.com/"
---

<!-- hello world -->
