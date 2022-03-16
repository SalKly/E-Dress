// navigators items in the header 

const mainNav = [
  {
    id: 1,
    name: "PLANS",
    DropDownInfo: {
      img: "imgs/Plan1.webp",
      data: [
        ["CLOTHING", ["Dresses", "Tops", "Sweaters", "Outerwear", "Pants", "Skirts", "Gowns", "Jumpsuits & Rompers", " Activewear", "Maternity", "View All"]],
        ["WHAT TO WEAR", ["Wedding", "Gala", " Night Out", " Out to Dinner", " At the Office", " WFH Essentials", " Weekend", "Vacation"]],
        ["TRENDING", [" Most Popular", "Community Top Picks", "Winter Coats", "Denim & Jeans", " Cozy Sweaters", "Home", "Kids"]
        ]

      ]

    }








  },




  {
    id: 2,
    name: "DISCOVER",
    DropDownInfo: {
      img: "imgs/Plan2.webp",
      data: [
        ["CLOTHING", ["Dresses", "Tops", "Sweaters", "Outerwear", "Pants", "Skirts", "Gowns", "Jumpsuits & Rompers", " Activewear", "Maternity", "View All"]],
        ["WHAT TO WEAR", ["Wedding", "Gala", " Night Out", " Out to Dinner", " At the Office", " WFH Essentials", " Weekend", "Vacation"]],
        ["TRENDING", [" Most Popular", "Community Top Picks", "Winter Coats", "Denim & Jeans", " Cozy Sweaters", "Home", "Kids"]
        ]

      ]

    }



  },
  {
    id: 3,
    name: "CLOTHING",
    DropDownInfo: {
      img: "imgs/dropdown1_img.jpg",
      data: [
        ["Clothing", ["Dresses", "Tops", "Pants", "View All"]],
        ["WHAT TO WEAR", ["Wedding", " Night Out", " At the Office"]],
        [, []]

      ]

    }



  },
  {
    id: 4,
    name: "ACCESSORIES",
    DropDownInfo: {
      img: "imgs/Plan3.webp",
      data: [
        ["CLOTHING", ["Dresses", "Tops", "Sweaters", "Outerwear", "Pants", "Skirts", "Gowns", "Jumpsuits & Rompers", " Activewear", "Maternity", "View All"]],
        ["WHAT TO WEAR", ["Wedding", "Gala", " Night Out", " Out to Dinner", " At the Office", " WFH Essentials", " Weekend", "Vacation"]],
        ["TRENDING", [" Most Popular", "Community Top Picks", "Winter Coats", "Denim & Jeans", " Cozy Sweaters", "Home", "Kids"]
        ]

      ]

    }



  },
  {
    id: 5,
    name: "DESIGNERS",
    DropDownInfo: {
      img: "imgs/Plan4.webp",
      data: [
        ["CLOTHING", ["Dresses", "Tops", "Sweaters", "Outerwear", "Pants", "Skirts", "Gowns", "Jumpsuits & Rompers", " Activewear", "Maternity", "View All"]],
        ["WHAT TO WEAR", ["Wedding", "Gala", " Night Out", " Out to Dinner", " At the Office", " WFH Essentials", " Weekend", "Vacation"]],
        ["TRENDING", [" Most Popular", "Community Top Picks", "Winter Coats", "Denim & Jeans", " Cozy Sweaters", "Home", "Kids"]
        ]

      ]

    }



  },
  {
    id: 6,
    name: "CLEARANCE",
    DropDownInfo: {
      img: "imgs/Plan5.webp",
      data: [
        ["CLOTHING", ["Dresses", "Tops", "Sweaters", "Outerwear", "Pants", "Skirts", "Gowns", "Jumpsuits & Rompers", " Activewear", "Maternity", "View All"]],
        ["WHAT TO WEAR", ["Wedding", "Gala", " Night Out", " Out to Dinner", " At the Office", " WFH Essentials", " Weekend", "Vacation"]],
        ["TRENDING", [" Most Popular", "Community Top Picks", "Winter Coats", "Denim & Jeans", " Cozy Sweaters", "Home", "Kids"]
        ]

      ]

    }



  },
  {
    id: 7,
    name: "OCCASIONS",
    DropDownInfo: {
      img: "imgs/Plan6.webp",
      data: [
        ["CLOTHING", ["Dresses", "Tops", "Sweaters", "Outerwear", "Pants", "Skirts", "Gowns", "Jumpsuits & Rompers", " Activewear", "Maternity", "View All"]],
        ["WHAT TO WEAR", ["Wedding", "Gala", " Night Out", " Out to Dinner", " At the Office", " WFH Essentials", " Weekend", "Vacation"]],
        ["TRENDING", [" Most Popular", "Community Top Picks", "Winter Coats", "Denim & Jeans", " Cozy Sweaters", "Home", "Kids"]
        ]

      ]

    }



  },



];

const Announcements = "Announcement is written right here "

const Categories_info = [

  ["All Clothes", []],
  ["Top", []],
  ["Dresses", []],
  ["Pants", []],



]
const filters = [
  ["Colors", "1", ["blue", "red", "black", "green", "white", "yellow", "blue", "red", "black", "green", "yellow"]],
  ["Size", "2", ["xs", "s", "M", "L"]],



]

const ShopInfo = [

  {
    id: 1,
    imgFront: "imgs/S1.jpg",
    imgBack: "imgs/S11.jpg",
    imgBack2: "imgs/S12.jpg",
    imgshowFront: "imgs/S1-1-Open.jpg",
    imgshowBack: "imgs/S1-2-Open.jpg",
    imgshowBack2: "imgs/S1-3-Open.jpg",
    name: "tiger dress",
    price: 1250,
    BuyOpt: "false",
    buyPrice: "none",
    Size: ["xs", "m", "L", "xxl"],
    desc: "'Blue banana printed cotton (100% Cotton). Empire. Short sleeves. Square neckline. Hidden side zipper closure. 40' from shoulder to hemline.Imported.",
    styleNotes: "All eyes will be on you in this vibrant and whimsical puff sleeve midi dress from FARM RIO.",
    SizeInfo: "'Sized: XS-XL, one length available. Regular measures 40' from shoulder to hemline",



  },
  {
    id: 2,
    imgFront: "imgs/S3-Front.webp",
    imgBack: "imgs/S3-Back.webp",
    imgBack2: "imgs/S3-Back2.webp",
    imgshowFront: "imgs/S3-Open.webp",
    imgshowBack: "imgs/S3-Back-Open.webp",
    imgshowBack2: "imgs/S3-Back2-Open.webp",
    name: "tiger dress",
    price: 250,
    BuyOpt: "false",
    buyPrice: "none",
    Size: ["xs", "m", "L", "xl"],
    desc: "'Blue banana printed cotton (100% Cotton). Empire. Short sleeves. Square neckline. Hidden side zipper closure. 40' from shoulder to hemline.Imported.",
    styleNotes: "All eyes will be on you in this vibrant and whimsical puff sleeve midi dress from FARM RIO.",
    SizeInfo: "'Sized: XS-XL, one length available. Regular measures 40' from shoulder to hemline",



  },
  {
    id: 3,
    imgFront: "imgs/S4-Front.webp",
    imgBack: "imgs/S4-Back.webp",
    imgBack2: "imgs/S4-Back2.webp",
    imgshowFront: "imgs/S4-Open.webp",
    imgshowBack: "imgs/S4-Back-Open.webp",
    imgshowBack2: "imgs/S4-Back2-Open.webp",
    name: "tiger dress",
    price: 250,
    BuyOpt: "false",
    buyPrice: "none",
    Size: ["xs", "m", "L", "xl"],
    desc: "'Blue banana printed cotton (100% Cotton). Empire. Short sleeves. Square neckline. Hidden side zipper closure. 40' from shoulder to hemline.Imported.",
    styleNotes: "All eyes will be on you in this vibrant and whimsical puff sleeve midi dress from FARM RIO.",
    SizeInfo: "'Sized: XS-XL, one length available. Regular measures 40' from shoulder to hemline",




  }, {
    id: 4,
    imgFront: "imgs/S5-Front.webp",
    imgBack: "imgs/S5-Back.webp",
    imgBack2: "imgs/S5-Back2.webp",
    imgshowFront: "imgs/S5-Open.webp",
    imgshowBack: "imgs/S5-Back-Open.webp",
    imgshowBack2: "imgs/S5-Back2-Open.webp",
    name: "tiger dress",
    price: 250,
    BuyOpt: "false",
    buyPrice: "none",
    Size: ["xs", "m", "L", "xl"],
    desc: "'Blue banana printed cotton (100% Cotton). Empire. Short sleeves. Square neckline. Hidden side zipper closure. 40' from shoulder to hemline.Imported.",
    styleNotes: "All eyes will be on you in this vibrant and whimsical puff sleeve midi dress from FARM RIO.",
    SizeInfo: "'Sized: XS-XL, one length available. Regular measures 40' from shoulder to hemline",




  }, {
    id: 5,
    imgFront: "imgs/S6-Front.webp",
    imgBack: "imgs/S6-Back.webp",
    imgBack2: "imgs/S6-Back2.webp",
    imgshowFront: "imgs/S6-Open.webp",
    imgshowBack: "imgs/S6-Back-Open.webp",
    imgshowBack2: "imgs/S6-Back2-Open.webp",
    name: "tiger dress",
    price: 220,
    BuyOpt: "false",
    buyPrice: "none",
    Size: ["xs", "m", "L", "xl"],
    desc: "'Blue banana printed cotton (100% Cotton). Empire. Short sleeves. Square neckline. Hidden side zipper closure. 40' from shoulder to hemline.Imported.",
    styleNotes: "All eyes will be on you in this vibrant and whimsical puff sleeve midi dress from FARM RIO.",
    SizeInfo: "'Sized: XS-XL, one length available. Regular measures 40' from shoulder to hemline",




  }, {
    id: 6,
    imgFront: "imgs/S7-Front.webp",
    imgBack: "imgs/S7-Back.webp",
    imgBack2: "imgs/S7-Back2.webp",
    imgshowFront: "imgs/S7-Open.webp",
    imgshowBack: "imgs/S7-Back-Open.webp",
    imgshowBack2: "imgs/S7-Back2-Open.webp",
    name: "tiger dress",
    price: 350,
    BuyOpt: "false",
    buyPrice: "none",
    Size: ["xs", "m", "L", "xl"],
    desc: "'Blue banana printed cotton (100% Cotton). Empire. Short sleeves. Square neckline. Hidden side zipper closure. 40' from shoulder to hemline.Imported.",
    styleNotes: "All eyes will be on you in this vibrant and whimsical puff sleeve midi dress from FARM RIO.",
    SizeInfo: "'Sized: XS-XL, one length available. Regular measures 40' from shoulder to hemline",



  }, {
    id: 7,
    imgFront: "imgs/S8-Front.webp",
    imgBack: "imgs/S8-Back.webp",
    imgBack2: "imgs/S8-Back2.webp",
    imgshowFront: "imgs/S8-Open.webp",
    imgshowBack: "imgs/S8-Back-Open.webp",
    imgshowBack2: "imgs/S8-Back2-Open.webp",
    name: "tiger dress",
    price: 250,
    BuyOpt: "false",
    buyPrice: "none",
    Size: ["xs", "m", "L", "xl"],
    desc: "'Blue banana printed cotton (100% Cotton). Empire. Short sleeves. Square neckline. Hidden side zipper closure. 40' from shoulder to hemline.Imported.",
    styleNotes: "All eyes will be on you in this vibrant and whimsical puff sleeve midi dress from FARM RIO.",
    SizeInfo: "'Sized: XS-XL, one length available. Regular measures 40' from shoulder to hemline",



  }, {
    id: 8,
    imgFront: "imgs/S9-Front.webp",
    imgBack: "imgs/S9-Back.webp",
    imgBack2: "imgs/S9-Back2.webp",
    imgshowFront: "imgs/S9-Open.webp",
    imgshowBack: "imgs/S9-Back-Open.webp",
    imgshowBack2: "imgs/S9-Back2-Open.webp",
    name: "tiger dress",
    price: 200,
    BuyOpt: "false",
    buyPrice: "none",
    Size: ["xs", "m", "L", "xl"],
    desc: "'Blue banana printed cotton (100% Cotton). Empire. Short sleeves. Square neckline. Hidden side zipper closure. 40' from shoulder to hemline.Imported.",
    styleNotes: "All eyes will be on you in this vibrant and whimsical puff sleeve midi dress from FARM RIO.",
    SizeInfo: "'Sized: XS-XL, one length available. Regular measures 40' from shoulder to hemline",



  }, {
    id: 9,
    imgFront: "imgs/S10-Front.webp",
    imgBack: "imgs/S10-Back.webp",
    imgBack2: "imgs/S10-Back2.webp",
    imgshowFront: "imgs/S10-Open.webp",
    imgshowBack: "imgs/S10-Back-Open.webp",
    imgshowBack2: "imgs/S10-Back2-Open.webp",
    name: "tiger dress",
    price: 800,
    BuyOpt: "false",
    buyPrice: "none",
    Size: ["xs", "m", "L", "xl"],
    desc: "'Blue banana printed cotton (100% Cotton). Empire. Short sleeves. Square neckline. Hidden side zipper closure. 40' from shoulder to hemline.Imported.",
    styleNotes: "All eyes will be on you in this vibrant and whimsical puff sleeve midi dress from FARM RIO.",
    SizeInfo: "'Sized: XS-XL, one length available. Regular measures 40' from shoulder to hemline",



  }, {
    id: 10,
    imgFront: "imgs/S11-Front.webp",
    imgBack: "imgs/S11-Back.webp",
    imgBack2: "imgs/S11-Back2.webp",
    imgshowFront: "imgs/S11-Open.webp",
    imgshowBack: "imgs/S11-Back-Open.webp",
    imgshowBack2: "imgs/S11-Back2-Open.webp",
    name: "tiger dress",
    price: 550,
    BuyOpt: "false",
    buyPrice: "none",
    Size: ["xs", "m", "L", "xl"],
    desc: "'Blue banana printed cotton (100% Cotton). Empire. Short sleeves. Square neckline. Hidden side zipper closure. 40' from shoulder to hemline.Imported.",
    styleNotes: "All eyes will be on you in this vibrant and whimsical puff sleeve midi dress from FARM RIO.",
    SizeInfo: "'Sized: XS-XL, one length available. Regular measures 40' from shoulder to hemline",




  },
  {
    id: 11,
    imgFront: "imgs/S12-Front.webp",
    imgBack: "imgs/S12-Back.webp",
    imgBack2: "imgs/S12-Back2.webp",
    imgshowFront: "imgs/S12-Open.webp",
    imgshowBack: "imgs/S12-Back-Open.webp",
    imgshowBack2: "imgs/S12-Back2-Open.webp",
    name: "tiger dress",
    price: 450,
    BuyOpt: "false",
    buyPrice: "none",
    Size: ["xs", "m", "L", "xl"],
    desc: "'Blue banana printed cotton (100% Cotton). Empire. Short sleeves. Square neckline. Hidden side zipper closure. 40' from shoulder to hemline.Imported.",
    styleNotes: "All eyes will be on you in this vibrant and whimsical puff sleeve midi dress from FARM RIO.",
    SizeInfo: "'Sized: XS-XL, one length available. Regular measures 40' from shoulder to hemline",




  },









]




export { mainNav, Announcements, Categories_info, filters, ShopInfo };


