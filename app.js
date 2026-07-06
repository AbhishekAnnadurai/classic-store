/**
 * Classic Store Application Logic
 * Est. 1996 - Thirukoilur
 * Handcrafted Vanilla JS for state management, catalog filtering, and WhatsApp integrations.
 */

// Configuration
const WHATSAPP_NUMBER = "919443261234"; // Classic Store's phone number (with country code, no + or spaces)

// Product Database
const products = [
  {
    id: "prod-1",
    name: "Joyful Kids Toy 1",
    category: "toys",
    price: 299,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_1.jpg",
    badge: ""
  },
  {
    id: "prod-2",
    name: "Exquisite Gift Set 2",
    category: "gifts",
    price: 519,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_2.jpg",
    badge: ""
  },
  {
    id: "prod-3",
    name: "School Backpack 3",
    category: "bags",
    price: 619,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_3.jpg",
    badge: ""
  },
  {
    id: "prod-4",
    name: "Classic Teddy Bear 4",
    category: "teddies",
    price: 419,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_4.jpg",
    badge: ""
  },
  {
    id: "prod-5",
    name: "Joyful Kids Toy 5",
    category: "toys",
    price: 339,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_5.jpg",
    badge: ""
  },
  {
    id: "prod-6",
    name: "Exquisite Gift Set 6",
    category: "gifts",
    price: 569,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_6.jpg",
    badge: ""
  },
  {
    id: "prod-7",
    name: "School Backpack 7",
    category: "bags",
    price: 649,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_7.jpg",
    badge: ""
  },
  {
    id: "prod-8",
    name: "Classic Teddy Bear 8",
    category: "teddies",
    price: 449,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_8.jpg",
    badge: ""
  },
  {
    id: "prod-9",
    name: "Joyful Kids Toy 9",
    category: "toys",
    price: 389,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_9.jpg",
    badge: ""
  },
  {
    id: "prod-10",
    name: "Exquisite Gift Set 10",
    category: "gifts",
    price: 619,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_10.jpg",
    badge: ""
  },
  {
    id: "prod-11",
    name: "School Backpack 11",
    category: "bags",
    price: 689,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_11.jpg",
    badge: ""
  },
  {
    id: "prod-12",
    name: "Classic Teddy Bear 12",
    category: "teddies",
    price: 469,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_12.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-13",
    name: "Joyful Kids Toy 13",
    category: "toys",
    price: 429,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_13.jpg",
    badge: "Popular"
  },
  {
    id: "prod-14",
    name: "Exquisite Gift Set 14",
    category: "gifts",
    price: 669,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_14.jpg",
    badge: "Premium"
  },
  {
    id: "prod-15",
    name: "School Backpack 15",
    category: "bags",
    price: 719,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_15.jpg",
    badge: "New Arrival"
  },
  {
    id: "prod-16",
    name: "Classic Teddy Bear 16",
    category: "teddies",
    price: 499,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_16.jpg",
    badge: ""
  },
  {
    id: "prod-17",
    name: "Joyful Kids Toy 17",
    category: "toys",
    price: 479,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_17.jpg",
    badge: ""
  },
  {
    id: "prod-18",
    name: "Exquisite Gift Set 18",
    category: "gifts",
    price: 719,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_18.jpg",
    badge: ""
  },
  {
    id: "prod-19",
    name: "School Backpack 19",
    category: "bags",
    price: 759,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_19.jpg",
    badge: ""
  },
  {
    id: "prod-20",
    name: "Classic Teddy Bear 20",
    category: "teddies",
    price: 529,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_20.jpg",
    badge: ""
  },
  {
    id: "prod-21",
    name: "Joyful Kids Toy 21",
    category: "toys",
    price: 519,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_21.jpg",
    badge: ""
  },
  {
    id: "prod-22",
    name: "Exquisite Gift Set 22",
    category: "gifts",
    price: 779,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_22.jpg",
    badge: ""
  },
  {
    id: "prod-23",
    name: "School Backpack 23",
    category: "bags",
    price: 799,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_23.jpg",
    badge: ""
  },
  {
    id: "prod-24",
    name: "Classic Teddy Bear 24",
    category: "teddies",
    price: 559,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_24.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-25",
    name: "Joyful Kids Toy 25",
    category: "toys",
    price: 559,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_25.jpg",
    badge: ""
  },
  {
    id: "prod-26",
    name: "Exquisite Gift Set 26",
    category: "gifts",
    price: 829,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_26.jpg",
    badge: ""
  },
  {
    id: "prod-27",
    name: "School Backpack 27",
    category: "bags",
    price: 829,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_27.jpg",
    badge: ""
  },
  {
    id: "prod-28",
    name: "Classic Teddy Bear 28",
    category: "teddies",
    price: 589,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_28.jpg",
    badge: ""
  },
  {
    id: "prod-29",
    name: "Joyful Kids Toy 29",
    category: "toys",
    price: 609,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_29.jpg",
    badge: ""
  },
  {
    id: "prod-30",
    name: "Exquisite Gift Set 30",
    category: "gifts",
    price: 879,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_30.jpg",
    badge: ""
  },
  {
    id: "prod-31",
    name: "School Backpack 31",
    category: "bags",
    price: 869,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_31.jpg",
    badge: ""
  },
  {
    id: "prod-32",
    name: "Classic Teddy Bear 32",
    category: "teddies",
    price: 609,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_32.jpg",
    badge: ""
  },
  {
    id: "prod-33",
    name: "Joyful Kids Toy 33",
    category: "toys",
    price: 649,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_33.jpg",
    badge: ""
  },
  {
    id: "prod-34",
    name: "Exquisite Gift Set 34",
    category: "gifts",
    price: 929,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_34.jpg",
    badge: ""
  },
  {
    id: "prod-35",
    name: "School Backpack 35",
    category: "bags",
    price: 899,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_35.jpg",
    badge: ""
  },
  {
    id: "prod-36",
    name: "Classic Teddy Bear 36",
    category: "teddies",
    price: 639,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_36.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-37",
    name: "Joyful Kids Toy 37",
    category: "toys",
    price: 699,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_37.jpg",
    badge: ""
  },
  {
    id: "prod-38",
    name: "Exquisite Gift Set 38",
    category: "gifts",
    price: 979,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_38.jpg",
    badge: ""
  },
  {
    id: "prod-39",
    name: "School Backpack 39",
    category: "bags",
    price: 939,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_39.jpg",
    badge: ""
  },
  {
    id: "prod-40",
    name: "Classic Teddy Bear 40",
    category: "teddies",
    price: 669,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_40.jpg",
    badge: ""
  },
  {
    id: "prod-41",
    name: "Joyful Kids Toy 41",
    category: "toys",
    price: 739,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_41.jpg",
    badge: ""
  },
  {
    id: "prod-42",
    name: "Exquisite Gift Set 42",
    category: "gifts",
    price: 1039,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_42.jpg",
    badge: "Premium"
  },
  {
    id: "prod-43",
    name: "School Backpack 43",
    category: "bags",
    price: 979,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_43.jpg",
    badge: ""
  },
  {
    id: "prod-44",
    name: "Classic Teddy Bear 44",
    category: "teddies",
    price: 699,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_44.jpg",
    badge: ""
  },
  {
    id: "prod-45",
    name: "Joyful Kids Toy 45",
    category: "toys",
    price: 779,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_45.jpg",
    badge: ""
  },
  {
    id: "prod-46",
    name: "Exquisite Gift Set 46",
    category: "gifts",
    price: 1089,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_46.jpg",
    badge: ""
  },
  {
    id: "prod-47",
    name: "School Backpack 47",
    category: "bags",
    price: 1009,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_47.jpg",
    badge: ""
  },
  {
    id: "prod-48",
    name: "Classic Teddy Bear 48",
    category: "teddies",
    price: 729,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_48.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-49",
    name: "Joyful Kids Toy 49",
    category: "toys",
    price: 829,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_49.jpg",
    badge: ""
  },
  {
    id: "prod-50",
    name: "Exquisite Gift Set 50",
    category: "gifts",
    price: 1139,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_50.jpg",
    badge: ""
  },
  {
    id: "prod-51",
    name: "School Backpack 51",
    category: "bags",
    price: 1049,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_51.jpg",
    badge: ""
  },
  {
    id: "prod-52",
    name: "Classic Teddy Bear 52",
    category: "teddies",
    price: 749,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_52.jpg",
    badge: ""
  },
  {
    id: "prod-53",
    name: "Joyful Kids Toy 53",
    category: "toys",
    price: 869,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_53.jpg",
    badge: ""
  },
  {
    id: "prod-54",
    name: "Exquisite Gift Set 54",
    category: "gifts",
    price: 1189,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_54.jpg",
    badge: ""
  },
  {
    id: "prod-55",
    name: "School Backpack 55",
    category: "bags",
    price: 1079,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_55.jpg",
    badge: ""
  },
  {
    id: "prod-56",
    name: "Classic Teddy Bear 56",
    category: "teddies",
    price: 779,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_56.jpg",
    badge: ""
  },
  {
    id: "prod-57",
    name: "Joyful Kids Toy 57",
    category: "toys",
    price: 919,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_57.jpg",
    badge: ""
  },
  {
    id: "prod-58",
    name: "Exquisite Gift Set 58",
    category: "gifts",
    price: 1239,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_58.jpg",
    badge: ""
  },
  {
    id: "prod-59",
    name: "School Backpack 59",
    category: "bags",
    price: 1119,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_59.jpg",
    badge: ""
  },
  {
    id: "prod-60",
    name: "Classic Teddy Bear 60",
    category: "teddies",
    price: 809,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_60.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-61",
    name: "Joyful Kids Toy 61",
    category: "toys",
    price: 959,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_61.jpg",
    badge: ""
  },
  {
    id: "prod-62",
    name: "Exquisite Gift Set 62",
    category: "gifts",
    price: 1299,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_62.jpg",
    badge: ""
  },
  {
    id: "prod-63",
    name: "School Backpack 63",
    category: "bags",
    price: 1159,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_63.jpg",
    badge: ""
  },
  {
    id: "prod-64",
    name: "Classic Teddy Bear 64",
    category: "teddies",
    price: 839,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_64.jpg",
    badge: ""
  },
  {
    id: "prod-65",
    name: "Joyful Kids Toy 65",
    category: "toys",
    price: 999,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_65.jpg",
    badge: "Popular"
  },
  {
    id: "prod-66",
    name: "Exquisite Gift Set 66",
    category: "gifts",
    price: 1349,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_66.jpg",
    badge: ""
  },
  {
    id: "prod-67",
    name: "School Backpack 67",
    category: "bags",
    price: 1189,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_67.jpg",
    badge: ""
  },
  {
    id: "prod-68",
    name: "Classic Teddy Bear 68",
    category: "teddies",
    price: 869,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_68.jpg",
    badge: ""
  },
  {
    id: "prod-69",
    name: "Joyful Kids Toy 69",
    category: "toys",
    price: 1049,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_69.jpg",
    badge: ""
  },
  {
    id: "prod-70",
    name: "Exquisite Gift Set 70",
    category: "gifts",
    price: 1399,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_70.jpg",
    badge: "Premium"
  },
  {
    id: "prod-71",
    name: "School Backpack 71",
    category: "bags",
    price: 1229,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_71.jpg",
    badge: ""
  },
  {
    id: "prod-72",
    name: "Classic Teddy Bear 72",
    category: "teddies",
    price: 889,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_72.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-73",
    name: "Joyful Kids Toy 73",
    category: "toys",
    price: 1089,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_73.jpg",
    badge: ""
  },
  {
    id: "prod-74",
    name: "Exquisite Gift Set 74",
    category: "gifts",
    price: 1449,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_74.jpg",
    badge: ""
  },
  {
    id: "prod-75",
    name: "School Backpack 75",
    category: "bags",
    price: 1259,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_75.jpg",
    badge: "New Arrival"
  },
  {
    id: "prod-76",
    name: "Classic Teddy Bear 76",
    category: "teddies",
    price: 919,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_76.jpg",
    badge: ""
  },
  {
    id: "prod-77",
    name: "Joyful Kids Toy 77",
    category: "toys",
    price: 1139,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_77.jpg",
    badge: ""
  },
  {
    id: "prod-78",
    name: "Exquisite Gift Set 78",
    category: "gifts",
    price: 1499,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_78.jpg",
    badge: ""
  },
  {
    id: "prod-79",
    name: "School Backpack 79",
    category: "bags",
    price: 1299,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_79.jpg",
    badge: ""
  },
  {
    id: "prod-80",
    name: "Classic Teddy Bear 80",
    category: "teddies",
    price: 949,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_80.jpg",
    badge: ""
  },
  {
    id: "prod-81",
    name: "Joyful Kids Toy 81",
    category: "toys",
    price: 1179,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_81.jpg",
    badge: ""
  },
  {
    id: "prod-82",
    name: "Exquisite Gift Set 82",
    category: "gifts",
    price: 1559,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_82.jpg",
    badge: ""
  },
  {
    id: "prod-83",
    name: "School Backpack 83",
    category: "bags",
    price: 1339,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_83.jpg",
    badge: ""
  },
  {
    id: "prod-84",
    name: "Classic Teddy Bear 84",
    category: "teddies",
    price: 979,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_84.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-85",
    name: "Joyful Kids Toy 85",
    category: "toys",
    price: 1219,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_85.jpg",
    badge: ""
  },
  {
    id: "prod-86",
    name: "Exquisite Gift Set 86",
    category: "gifts",
    price: 1609,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_86.jpg",
    badge: ""
  },
  {
    id: "prod-87",
    name: "School Backpack 87",
    category: "bags",
    price: 1369,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_87.jpg",
    badge: ""
  },
  {
    id: "prod-88",
    name: "Classic Teddy Bear 88",
    category: "teddies",
    price: 1009,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_88.jpg",
    badge: ""
  },
  {
    id: "prod-89",
    name: "Joyful Kids Toy 89",
    category: "toys",
    price: 1269,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_89.jpg",
    badge: ""
  },
  {
    id: "prod-90",
    name: "Exquisite Gift Set 90",
    category: "gifts",
    price: 1659,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_90.jpg",
    badge: ""
  },
  {
    id: "prod-91",
    name: "School Backpack 91",
    category: "bags",
    price: 1409,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_91.jpg",
    badge: ""
  },
  {
    id: "prod-92",
    name: "Classic Teddy Bear 92",
    category: "teddies",
    price: 1029,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_92.jpg",
    badge: ""
  },
  {
    id: "prod-93",
    name: "Joyful Kids Toy 93",
    category: "toys",
    price: 309,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_93.jpg",
    badge: ""
  },
  {
    id: "prod-94",
    name: "Exquisite Gift Set 94",
    category: "gifts",
    price: 1709,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_94.jpg",
    badge: ""
  },
  {
    id: "prod-95",
    name: "School Backpack 95",
    category: "bags",
    price: 1439,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_95.jpg",
    badge: ""
  },
  {
    id: "prod-96",
    name: "Classic Teddy Bear 96",
    category: "teddies",
    price: 1059,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_96.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-97",
    name: "Joyful Kids Toy 97",
    category: "toys",
    price: 359,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_97.jpg",
    badge: ""
  },
  {
    id: "prod-98",
    name: "Exquisite Gift Set 98",
    category: "gifts",
    price: 1759,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_98.jpg",
    badge: "Premium"
  },
  {
    id: "prod-99",
    name: "School Backpack 99",
    category: "bags",
    price: 1479,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_99.jpg",
    badge: ""
  },
  {
    id: "prod-100",
    name: "Classic Teddy Bear 100",
    category: "teddies",
    price: 1089,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_100.jpg",
    badge: ""
  },
  {
    id: "prod-101",
    name: "Joyful Kids Toy 101",
    category: "toys",
    price: 399,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_101.jpg",
    badge: ""
  },
  {
    id: "prod-102",
    name: "Exquisite Gift Set 102",
    category: "gifts",
    price: 1819,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_102.jpg",
    badge: ""
  },
  {
    id: "prod-103",
    name: "School Backpack 103",
    category: "bags",
    price: 619,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_103.jpg",
    badge: ""
  },
  {
    id: "prod-104",
    name: "Classic Teddy Bear 104",
    category: "teddies",
    price: 1119,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_104.jpg",
    badge: ""
  },
  {
    id: "prod-105",
    name: "Joyful Kids Toy 105",
    category: "toys",
    price: 439,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_105.jpg",
    badge: ""
  },
  {
    id: "prod-106",
    name: "Exquisite Gift Set 106",
    category: "gifts",
    price: 1869,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_106.jpg",
    badge: ""
  },
  {
    id: "prod-107",
    name: "School Backpack 107",
    category: "bags",
    price: 649,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_107.jpg",
    badge: ""
  },
  {
    id: "prod-108",
    name: "Classic Teddy Bear 108",
    category: "teddies",
    price: 1149,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_108.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-109",
    name: "Joyful Kids Toy 109",
    category: "toys",
    price: 489,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_109.jpg",
    badge: ""
  },
  {
    id: "prod-110",
    name: "Exquisite Gift Set 110",
    category: "gifts",
    price: 1919,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_110.jpg",
    badge: ""
  },
  {
    id: "prod-111",
    name: "School Backpack 111",
    category: "bags",
    price: 689,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_111.jpg",
    badge: ""
  },
  {
    id: "prod-112",
    name: "Classic Teddy Bear 112",
    category: "teddies",
    price: 1169,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_112.jpg",
    badge: ""
  },
  {
    id: "prod-113",
    name: "Joyful Kids Toy 113",
    category: "toys",
    price: 529,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_113.jpg",
    badge: ""
  },
  {
    id: "prod-114",
    name: "Exquisite Gift Set 114",
    category: "gifts",
    price: 1969,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_114.jpg",
    badge: ""
  },
  {
    id: "prod-115",
    name: "School Backpack 115",
    category: "bags",
    price: 719,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_115.jpg",
    badge: ""
  },
  {
    id: "prod-116",
    name: "Classic Teddy Bear 116",
    category: "teddies",
    price: 1199,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_116.jpg",
    badge: ""
  },
  {
    id: "prod-117",
    name: "Joyful Kids Toy 117",
    category: "toys",
    price: 579,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_117.jpg",
    badge: "Popular"
  },
  {
    id: "prod-118",
    name: "Exquisite Gift Set 118",
    category: "gifts",
    price: 2019,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_118.jpg",
    badge: ""
  },
  {
    id: "prod-119",
    name: "School Backpack 119",
    category: "bags",
    price: 759,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_119.jpg",
    badge: ""
  },
  {
    id: "prod-120",
    name: "Classic Teddy Bear 120",
    category: "teddies",
    price: 1229,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_120.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-121",
    name: "Joyful Kids Toy 121",
    category: "toys",
    price: 619,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_121.jpg",
    badge: ""
  },
  {
    id: "prod-122",
    name: "Exquisite Gift Set 122",
    category: "gifts",
    price: 2079,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_122.jpg",
    badge: ""
  },
  {
    id: "prod-123",
    name: "School Backpack 123",
    category: "bags",
    price: 799,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_123.jpg",
    badge: ""
  },
  {
    id: "prod-124",
    name: "Classic Teddy Bear 124",
    category: "teddies",
    price: 1259,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_124.jpg",
    badge: ""
  },
  {
    id: "prod-125",
    name: "Joyful Kids Toy 125",
    category: "toys",
    price: 659,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_125.jpg",
    badge: ""
  },
  {
    id: "prod-126",
    name: "Exquisite Gift Set 126",
    category: "gifts",
    price: 2129,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_126.jpg",
    badge: "Premium"
  },
  {
    id: "prod-127",
    name: "School Backpack 127",
    category: "bags",
    price: 829,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_127.jpg",
    badge: ""
  },
  {
    id: "prod-128",
    name: "Classic Teddy Bear 128",
    category: "teddies",
    price: 1289,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_128.jpg",
    badge: ""
  },
  {
    id: "prod-129",
    name: "Joyful Kids Toy 129",
    category: "toys",
    price: 709,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_129.jpg",
    badge: ""
  },
  {
    id: "prod-130",
    name: "Exquisite Gift Set 130",
    category: "gifts",
    price: 2179,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_130.jpg",
    badge: ""
  },
  {
    id: "prod-131",
    name: "School Backpack 131",
    category: "bags",
    price: 869,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_131.jpg",
    badge: ""
  },
  {
    id: "prod-132",
    name: "Classic Teddy Bear 132",
    category: "teddies",
    price: 1309,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_132.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-133",
    name: "Joyful Kids Toy 133",
    category: "toys",
    price: 749,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_133.jpg",
    badge: ""
  },
  {
    id: "prod-134",
    name: "Exquisite Gift Set 134",
    category: "gifts",
    price: 2229,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_134.jpg",
    badge: ""
  },
  {
    id: "prod-135",
    name: "School Backpack 135",
    category: "bags",
    price: 899,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_135.jpg",
    badge: "New Arrival"
  },
  {
    id: "prod-136",
    name: "Classic Teddy Bear 136",
    category: "teddies",
    price: 1339,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_136.jpg",
    badge: ""
  },
  {
    id: "prod-137",
    name: "Joyful Kids Toy 137",
    category: "toys",
    price: 799,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_137.jpg",
    badge: ""
  },
  {
    id: "prod-138",
    name: "Exquisite Gift Set 138",
    category: "gifts",
    price: 2279,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_138.jpg",
    badge: ""
  },
  {
    id: "prod-139",
    name: "School Backpack 139",
    category: "bags",
    price: 939,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_139.jpg",
    badge: ""
  },
  {
    id: "prod-140",
    name: "Classic Teddy Bear 140",
    category: "teddies",
    price: 1369,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_140.jpg",
    badge: ""
  },
  {
    id: "prod-141",
    name: "Joyful Kids Toy 141",
    category: "toys",
    price: 839,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_141.jpg",
    badge: ""
  },
  {
    id: "prod-142",
    name: "Exquisite Gift Set 142",
    category: "gifts",
    price: 2339,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_142.jpg",
    badge: ""
  },
  {
    id: "prod-143",
    name: "School Backpack 143",
    category: "bags",
    price: 979,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_143.jpg",
    badge: ""
  },
  {
    id: "prod-144",
    name: "Classic Teddy Bear 144",
    category: "teddies",
    price: 1399,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_144.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-145",
    name: "Joyful Kids Toy 145",
    category: "toys",
    price: 879,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_145.jpg",
    badge: ""
  },
  {
    id: "prod-146",
    name: "Exquisite Gift Set 146",
    category: "gifts",
    price: 2389,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_146.jpg",
    badge: ""
  },
  {
    id: "prod-147",
    name: "School Backpack 147",
    category: "bags",
    price: 1009,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_147.jpg",
    badge: ""
  },
  {
    id: "prod-148",
    name: "Classic Teddy Bear 148",
    category: "teddies",
    price: 1429,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_148.jpg",
    badge: ""
  },
  {
    id: "prod-149",
    name: "Joyful Kids Toy 149",
    category: "toys",
    price: 929,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_149.jpg",
    badge: ""
  },
  {
    id: "prod-150",
    name: "Exquisite Gift Set 150",
    category: "gifts",
    price: 2439,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_150.jpg",
    badge: ""
  },
  {
    id: "prod-151",
    name: "School Backpack 151",
    category: "bags",
    price: 1049,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_151.jpg",
    badge: ""
  },
  {
    id: "prod-152",
    name: "Classic Teddy Bear 152",
    category: "teddies",
    price: 1449,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_152.jpg",
    badge: ""
  },
  {
    id: "prod-153",
    name: "Joyful Kids Toy 153",
    category: "toys",
    price: 969,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_153.jpg",
    badge: ""
  },
  {
    id: "prod-154",
    name: "Exquisite Gift Set 154",
    category: "gifts",
    price: 489,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_154.jpg",
    badge: "Premium"
  },
  {
    id: "prod-155",
    name: "School Backpack 155",
    category: "bags",
    price: 1079,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_155.jpg",
    badge: ""
  },
  {
    id: "prod-156",
    name: "Classic Teddy Bear 156",
    category: "teddies",
    price: 1479,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_156.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-157",
    name: "Joyful Kids Toy 157",
    category: "toys",
    price: 1019,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_157.jpg",
    badge: ""
  },
  {
    id: "prod-158",
    name: "Exquisite Gift Set 158",
    category: "gifts",
    price: 539,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_158.jpg",
    badge: ""
  },
  {
    id: "prod-159",
    name: "School Backpack 159",
    category: "bags",
    price: 1119,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_159.jpg",
    badge: ""
  },
  {
    id: "prod-160",
    name: "Classic Teddy Bear 160",
    category: "teddies",
    price: 1509,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_160.jpg",
    badge: ""
  },
  {
    id: "prod-161",
    name: "Joyful Kids Toy 161",
    category: "toys",
    price: 1059,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_161.jpg",
    badge: ""
  },
  {
    id: "prod-162",
    name: "Exquisite Gift Set 162",
    category: "gifts",
    price: 599,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_162.jpg",
    badge: ""
  },
  {
    id: "prod-163",
    name: "School Backpack 163",
    category: "bags",
    price: 1159,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_163.jpg",
    badge: ""
  },
  {
    id: "prod-164",
    name: "Classic Teddy Bear 164",
    category: "teddies",
    price: 1539,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_164.jpg",
    badge: ""
  },
  {
    id: "prod-165",
    name: "Joyful Kids Toy 165",
    category: "toys",
    price: 1099,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_165.jpg",
    badge: ""
  },
  {
    id: "prod-166",
    name: "Exquisite Gift Set 166",
    category: "gifts",
    price: 649,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_166.jpg",
    badge: ""
  },
  {
    id: "prod-167",
    name: "School Backpack 167",
    category: "bags",
    price: 1189,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_167.jpg",
    badge: ""
  },
  {
    id: "prod-168",
    name: "Classic Teddy Bear 168",
    category: "teddies",
    price: 1569,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_168.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-169",
    name: "Joyful Kids Toy 169",
    category: "toys",
    price: 1149,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_169.jpg",
    badge: "Popular"
  },
  {
    id: "prod-170",
    name: "Exquisite Gift Set 170",
    category: "gifts",
    price: 699,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_170.jpg",
    badge: ""
  },
  {
    id: "prod-171",
    name: "School Backpack 171",
    category: "bags",
    price: 1229,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_171.jpg",
    badge: ""
  },
  {
    id: "prod-172",
    name: "Classic Teddy Bear 172",
    category: "teddies",
    price: 389,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_172.jpg",
    badge: ""
  },
  {
    id: "prod-173",
    name: "Joyful Kids Toy 173",
    category: "toys",
    price: 1189,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_173.jpg",
    badge: ""
  },
  {
    id: "prod-174",
    name: "Exquisite Gift Set 174",
    category: "gifts",
    price: 749,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_174.jpg",
    badge: ""
  },
  {
    id: "prod-175",
    name: "School Backpack 175",
    category: "bags",
    price: 1259,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_175.jpg",
    badge: ""
  },
  {
    id: "prod-176",
    name: "Classic Teddy Bear 176",
    category: "teddies",
    price: 419,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_176.jpg",
    badge: ""
  },
  {
    id: "prod-177",
    name: "Joyful Kids Toy 177",
    category: "toys",
    price: 1239,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_177.jpg",
    badge: ""
  },
  {
    id: "prod-178",
    name: "Exquisite Gift Set 178",
    category: "gifts",
    price: 799,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_178.jpg",
    badge: ""
  },
  {
    id: "prod-179",
    name: "School Backpack 179",
    category: "bags",
    price: 1299,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_179.jpg",
    badge: ""
  },
  {
    id: "prod-180",
    name: "Classic Teddy Bear 180",
    category: "teddies",
    price: 449,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_180.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-181",
    name: "Joyful Kids Toy 181",
    category: "toys",
    price: 1279,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_181.jpg",
    badge: ""
  },
  {
    id: "prod-182",
    name: "Exquisite Gift Set 182",
    category: "gifts",
    price: 859,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_182.jpg",
    badge: "Premium"
  },
  {
    id: "prod-183",
    name: "School Backpack 183",
    category: "bags",
    price: 1339,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_183.jpg",
    badge: ""
  },
  {
    id: "prod-184",
    name: "Classic Teddy Bear 184",
    category: "teddies",
    price: 479,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_184.jpg",
    badge: ""
  },
  {
    id: "prod-185",
    name: "Joyful Kids Toy 185",
    category: "toys",
    price: 319,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_185.jpg",
    badge: ""
  },
  {
    id: "prod-186",
    name: "Exquisite Gift Set 186",
    category: "gifts",
    price: 909,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_186.jpg",
    badge: ""
  },
  {
    id: "prod-187",
    name: "School Backpack 187",
    category: "bags",
    price: 1369,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_187.jpg",
    badge: ""
  },
  {
    id: "prod-188",
    name: "Classic Teddy Bear 188",
    category: "teddies",
    price: 509,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_188.jpg",
    badge: ""
  },
  {
    id: "prod-189",
    name: "Joyful Kids Toy 189",
    category: "toys",
    price: 369,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_189.jpg",
    badge: ""
  },
  {
    id: "prod-190",
    name: "Exquisite Gift Set 190",
    category: "gifts",
    price: 959,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_190.jpg",
    badge: ""
  },
  {
    id: "prod-191",
    name: "School Backpack 191",
    category: "bags",
    price: 1409,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_191.jpg",
    badge: ""
  },
  {
    id: "prod-192",
    name: "Classic Teddy Bear 192",
    category: "teddies",
    price: 529,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_192.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-193",
    name: "Joyful Kids Toy 193",
    category: "toys",
    price: 409,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_193.jpg",
    badge: ""
  },
  {
    id: "prod-194",
    name: "Exquisite Gift Set 194",
    category: "gifts",
    price: 1009,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_194.jpg",
    badge: ""
  },
  {
    id: "prod-195",
    name: "School Backpack 195",
    category: "bags",
    price: 1439,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_195.jpg",
    badge: "New Arrival"
  },
  {
    id: "prod-196",
    name: "Classic Teddy Bear 196",
    category: "teddies",
    price: 559,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_196.jpg",
    badge: ""
  },
  {
    id: "prod-197",
    name: "Joyful Kids Toy 197",
    category: "toys",
    price: 459,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_197.jpg",
    badge: ""
  },
  {
    id: "prod-198",
    name: "Exquisite Gift Set 198",
    category: "gifts",
    price: 1059,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_198.jpg",
    badge: ""
  },
  {
    id: "prod-199",
    name: "School Backpack 199",
    category: "bags",
    price: 1479,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_199.jpg",
    badge: ""
  },
  {
    id: "prod-200",
    name: "Classic Teddy Bear 200",
    category: "teddies",
    price: 589,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_200.jpg",
    badge: ""
  },
  {
    id: "prod-201",
    name: "Joyful Kids Toy 201",
    category: "toys",
    price: 499,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_201.jpg",
    badge: ""
  },
  {
    id: "prod-202",
    name: "Exquisite Gift Set 202",
    category: "gifts",
    price: 1119,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_202.jpg",
    badge: ""
  },
  {
    id: "prod-203",
    name: "School Backpack 203",
    category: "bags",
    price: 619,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_203.jpg",
    badge: ""
  },
  {
    id: "prod-204",
    name: "Classic Teddy Bear 204",
    category: "teddies",
    price: 619,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_204.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-205",
    name: "Joyful Kids Toy 205",
    category: "toys",
    price: 539,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_205.jpg",
    badge: ""
  },
  {
    id: "prod-206",
    name: "Exquisite Gift Set 206",
    category: "gifts",
    price: 1169,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_206.jpg",
    badge: ""
  },
  {
    id: "prod-207",
    name: "School Backpack 207",
    category: "bags",
    price: 649,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_207.jpg",
    badge: ""
  },
  {
    id: "prod-208",
    name: "Classic Teddy Bear 208",
    category: "teddies",
    price: 649,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_208.jpg",
    badge: ""
  },
  {
    id: "prod-209",
    name: "Joyful Kids Toy 209",
    category: "toys",
    price: 589,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_209.jpg",
    badge: ""
  },
  {
    id: "prod-210",
    name: "Exquisite Gift Set 210",
    category: "gifts",
    price: 1219,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_210.jpg",
    badge: "Premium"
  },
  {
    id: "prod-211",
    name: "School Backpack 211",
    category: "bags",
    price: 689,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_211.jpg",
    badge: ""
  },
  {
    id: "prod-212",
    name: "Classic Teddy Bear 212",
    category: "teddies",
    price: 669,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_212.jpg",
    badge: ""
  },
  {
    id: "prod-213",
    name: "Joyful Kids Toy 213",
    category: "toys",
    price: 629,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_213.jpg",
    badge: ""
  },
  {
    id: "prod-214",
    name: "Exquisite Gift Set 214",
    category: "gifts",
    price: 1269,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_214.jpg",
    badge: ""
  },
  {
    id: "prod-215",
    name: "School Backpack 215",
    category: "bags",
    price: 719,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_215.jpg",
    badge: ""
  },
  {
    id: "prod-216",
    name: "Classic Teddy Bear 216",
    category: "teddies",
    price: 699,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_216.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-217",
    name: "Joyful Kids Toy 217",
    category: "toys",
    price: 679,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_217.jpg",
    badge: ""
  },
  {
    id: "prod-218",
    name: "Exquisite Gift Set 218",
    category: "gifts",
    price: 1319,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_218.jpg",
    badge: ""
  },
  {
    id: "prod-219",
    name: "School Backpack 219",
    category: "bags",
    price: 759,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_219.jpg",
    badge: ""
  },
  {
    id: "prod-220",
    name: "Classic Teddy Bear 220",
    category: "teddies",
    price: 729,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_220.jpg",
    badge: ""
  },
  {
    id: "prod-221",
    name: "Joyful Kids Toy 221",
    category: "toys",
    price: 719,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_221.jpg",
    badge: "Popular"
  },
  {
    id: "prod-222",
    name: "Exquisite Gift Set 222",
    category: "gifts",
    price: 1379,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_222.jpg",
    badge: ""
  },
  {
    id: "prod-223",
    name: "School Backpack 223",
    category: "bags",
    price: 799,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_223.jpg",
    badge: ""
  },
  {
    id: "prod-224",
    name: "Classic Teddy Bear 224",
    category: "teddies",
    price: 759,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_224.jpg",
    badge: ""
  },
  {
    id: "prod-225",
    name: "Joyful Kids Toy 225",
    category: "toys",
    price: 759,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_225.jpg",
    badge: ""
  },
  {
    id: "prod-226",
    name: "Exquisite Gift Set 226",
    category: "gifts",
    price: 1429,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_226.jpg",
    badge: ""
  },
  {
    id: "prod-227",
    name: "School Backpack 227",
    category: "bags",
    price: 829,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_227.jpg",
    badge: ""
  },
  {
    id: "prod-228",
    name: "Classic Teddy Bear 228",
    category: "teddies",
    price: 789,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_228.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-229",
    name: "Joyful Kids Toy 229",
    category: "toys",
    price: 809,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_229.jpg",
    badge: ""
  },
  {
    id: "prod-230",
    name: "Exquisite Gift Set 230",
    category: "gifts",
    price: 1479,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_230.jpg",
    badge: ""
  },
  {
    id: "prod-231",
    name: "School Backpack 231",
    category: "bags",
    price: 869,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_231.jpg",
    badge: ""
  },
  {
    id: "prod-232",
    name: "Classic Teddy Bear 232",
    category: "teddies",
    price: 809,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_232.jpg",
    badge: ""
  },
  {
    id: "prod-233",
    name: "Joyful Kids Toy 233",
    category: "toys",
    price: 849,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_233.jpg",
    badge: ""
  },
  {
    id: "prod-234",
    name: "Exquisite Gift Set 234",
    category: "gifts",
    price: 1529,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_234.jpg",
    badge: ""
  },
  {
    id: "prod-235",
    name: "School Backpack 235",
    category: "bags",
    price: 899,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_235.jpg",
    badge: ""
  },
  {
    id: "prod-236",
    name: "Classic Teddy Bear 236",
    category: "teddies",
    price: 839,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_236.jpg",
    badge: ""
  },
  {
    id: "prod-237",
    name: "Joyful Kids Toy 237",
    category: "toys",
    price: 899,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_237.jpg",
    badge: ""
  },
  {
    id: "prod-238",
    name: "Exquisite Gift Set 238",
    category: "gifts",
    price: 1579,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_238.jpg",
    badge: "Premium"
  },
  {
    id: "prod-239",
    name: "School Backpack 239",
    category: "bags",
    price: 939,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_239.jpg",
    badge: ""
  },
  {
    id: "prod-240",
    name: "Classic Teddy Bear 240",
    category: "teddies",
    price: 869,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_240.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-241",
    name: "Joyful Kids Toy 241",
    category: "toys",
    price: 939,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_241.jpg",
    badge: ""
  },
  {
    id: "prod-242",
    name: "Exquisite Gift Set 242",
    category: "gifts",
    price: 1639,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_242.jpg",
    badge: ""
  },
  {
    id: "prod-243",
    name: "School Backpack 243",
    category: "bags",
    price: 979,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_243.jpg",
    badge: ""
  },
  {
    id: "prod-244",
    name: "Classic Teddy Bear 244",
    category: "teddies",
    price: 899,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_244.jpg",
    badge: ""
  },
  {
    id: "prod-245",
    name: "Joyful Kids Toy 245",
    category: "toys",
    price: 979,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_245.jpg",
    badge: ""
  },
  {
    id: "prod-246",
    name: "Exquisite Gift Set 246",
    category: "gifts",
    price: 1689,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_246.jpg",
    badge: ""
  },
  {
    id: "prod-247",
    name: "School Backpack 247",
    category: "bags",
    price: 1009,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_247.jpg",
    badge: ""
  },
  {
    id: "prod-248",
    name: "Classic Teddy Bear 248",
    category: "teddies",
    price: 929,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_248.jpg",
    badge: ""
  },
  {
    id: "prod-249",
    name: "Joyful Kids Toy 249",
    category: "toys",
    price: 1029,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_249.jpg",
    badge: ""
  },
  {
    id: "prod-250",
    name: "Exquisite Gift Set 250",
    category: "gifts",
    price: 1739,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_250.jpg",
    badge: ""
  },
  {
    id: "prod-251",
    name: "School Backpack 251",
    category: "bags",
    price: 1049,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_251.jpg",
    badge: ""
  },
  {
    id: "prod-252",
    name: "Classic Teddy Bear 252",
    category: "teddies",
    price: 949,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_252.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-253",
    name: "Joyful Kids Toy 253",
    category: "toys",
    price: 1069,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_253.jpg",
    badge: ""
  },
  {
    id: "prod-254",
    name: "Exquisite Gift Set 254",
    category: "gifts",
    price: 1789,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_254.jpg",
    badge: ""
  },
  {
    id: "prod-255",
    name: "School Backpack 255",
    category: "bags",
    price: 1079,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_255.jpg",
    badge: "New Arrival"
  },
  {
    id: "prod-256",
    name: "Classic Teddy Bear 256",
    category: "teddies",
    price: 979,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_256.jpg",
    badge: ""
  },
  {
    id: "prod-257",
    name: "Joyful Kids Toy 257",
    category: "toys",
    price: 1119,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_257.jpg",
    badge: ""
  },
  {
    id: "prod-258",
    name: "Exquisite Gift Set 258",
    category: "gifts",
    price: 1839,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_258.jpg",
    badge: ""
  },
  {
    id: "prod-259",
    name: "School Backpack 259",
    category: "bags",
    price: 1119,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_259.jpg",
    badge: ""
  },
  {
    id: "prod-260",
    name: "Classic Teddy Bear 260",
    category: "teddies",
    price: 1009,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_260.jpg",
    badge: ""
  },
  {
    id: "prod-261",
    name: "Joyful Kids Toy 261",
    category: "toys",
    price: 1159,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_261.jpg",
    badge: ""
  },
  {
    id: "prod-262",
    name: "Exquisite Gift Set 262",
    category: "gifts",
    price: 1899,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_262.jpg",
    badge: ""
  },
  {
    id: "prod-263",
    name: "School Backpack 263",
    category: "bags",
    price: 1159,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_263.jpg",
    badge: ""
  },
  {
    id: "prod-264",
    name: "Classic Teddy Bear 264",
    category: "teddies",
    price: 1039,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_264.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-265",
    name: "Joyful Kids Toy 265",
    category: "toys",
    price: 1199,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_265.jpg",
    badge: ""
  },
  {
    id: "prod-266",
    name: "Exquisite Gift Set 266",
    category: "gifts",
    price: 1949,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_266.jpg",
    badge: "Premium"
  },
  {
    id: "prod-267",
    name: "School Backpack 267",
    category: "bags",
    price: 1189,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_267.jpg",
    badge: ""
  },
  {
    id: "prod-268",
    name: "Classic Teddy Bear 268",
    category: "teddies",
    price: 1069,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_268.jpg",
    badge: ""
  },
  {
    id: "prod-269",
    name: "Joyful Kids Toy 269",
    category: "toys",
    price: 1249,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_269.jpg",
    badge: ""
  },
  {
    id: "prod-270",
    name: "Exquisite Gift Set 270",
    category: "gifts",
    price: 1999,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_270.jpg",
    badge: ""
  },
  {
    id: "prod-271",
    name: "School Backpack 271",
    category: "bags",
    price: 1229,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_271.jpg",
    badge: ""
  },
  {
    id: "prod-272",
    name: "Classic Teddy Bear 272",
    category: "teddies",
    price: 1089,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_272.jpg",
    badge: ""
  },
  {
    id: "prod-273",
    name: "Joyful Kids Toy 273",
    category: "toys",
    price: 289,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_273.jpg",
    badge: "Popular"
  },
  {
    id: "prod-274",
    name: "Exquisite Gift Set 274",
    category: "gifts",
    price: 2049,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_274.jpg",
    badge: ""
  },
  {
    id: "prod-275",
    name: "School Backpack 275",
    category: "bags",
    price: 1259,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_275.jpg",
    badge: ""
  },
  {
    id: "prod-276",
    name: "Classic Teddy Bear 276",
    category: "teddies",
    price: 1119,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_276.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-277",
    name: "Joyful Kids Toy 277",
    category: "toys",
    price: 339,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_277.jpg",
    badge: ""
  },
  {
    id: "prod-278",
    name: "Exquisite Gift Set 278",
    category: "gifts",
    price: 2099,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_278.jpg",
    badge: ""
  },
  {
    id: "prod-279",
    name: "School Backpack 279",
    category: "bags",
    price: 1299,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_279.jpg",
    badge: ""
  },
  {
    id: "prod-280",
    name: "Classic Teddy Bear 280",
    category: "teddies",
    price: 1149,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_280.jpg",
    badge: ""
  },
  {
    id: "prod-281",
    name: "Joyful Kids Toy 281",
    category: "toys",
    price: 379,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_281.jpg",
    badge: ""
  },
  {
    id: "prod-282",
    name: "Exquisite Gift Set 282",
    category: "gifts",
    price: 2159,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_282.jpg",
    badge: ""
  },
  {
    id: "prod-283",
    name: "School Backpack 283",
    category: "bags",
    price: 1339,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_283.jpg",
    badge: ""
  },
  {
    id: "prod-284",
    name: "Classic Teddy Bear 284",
    category: "teddies",
    price: 1179,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_284.jpg",
    badge: ""
  },
  {
    id: "prod-285",
    name: "Joyful Kids Toy 285",
    category: "toys",
    price: 419,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_285.jpg",
    badge: ""
  },
  {
    id: "prod-286",
    name: "Exquisite Gift Set 286",
    category: "gifts",
    price: 2209,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_286.jpg",
    badge: ""
  },
  {
    id: "prod-287",
    name: "School Backpack 287",
    category: "bags",
    price: 1369,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_287.jpg",
    badge: ""
  },
  {
    id: "prod-288",
    name: "Classic Teddy Bear 288",
    category: "teddies",
    price: 1209,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_288.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-289",
    name: "Joyful Kids Toy 289",
    category: "toys",
    price: 469,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_289.jpg",
    badge: ""
  },
  {
    id: "prod-290",
    name: "Exquisite Gift Set 290",
    category: "gifts",
    price: 2259,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_290.jpg",
    badge: ""
  },
  {
    id: "prod-291",
    name: "School Backpack 291",
    category: "bags",
    price: 1409,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_291.jpg",
    badge: ""
  },
  {
    id: "prod-292",
    name: "Classic Teddy Bear 292",
    category: "teddies",
    price: 1229,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_292.jpg",
    badge: ""
  },
  {
    id: "prod-293",
    name: "Joyful Kids Toy 293",
    category: "toys",
    price: 509,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_293.jpg",
    badge: ""
  },
  {
    id: "prod-294",
    name: "Exquisite Gift Set 294",
    category: "gifts",
    price: 2309,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_294.jpg",
    badge: "Premium"
  },
  {
    id: "prod-295",
    name: "School Backpack 295",
    category: "bags",
    price: 1439,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_295.jpg",
    badge: ""
  },
  {
    id: "prod-296",
    name: "Classic Teddy Bear 296",
    category: "teddies",
    price: 1259,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_296.jpg",
    badge: ""
  },
  {
    id: "prod-297",
    name: "Joyful Kids Toy 297",
    category: "toys",
    price: 559,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_297.jpg",
    badge: ""
  },
  {
    id: "prod-298",
    name: "Exquisite Gift Set 298",
    category: "gifts",
    price: 2359,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_298.jpg",
    badge: ""
  },
  {
    id: "prod-299",
    name: "School Backpack 299",
    category: "bags",
    price: 1479,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_299.jpg",
    badge: ""
  },
  {
    id: "prod-300",
    name: "Classic Teddy Bear 300",
    category: "teddies",
    price: 1289,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_300.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-301",
    name: "Joyful Kids Toy 301",
    category: "toys",
    price: 599,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_301.jpg",
    badge: ""
  },
  {
    id: "prod-302",
    name: "Exquisite Gift Set 302",
    category: "gifts",
    price: 2419,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_302.jpg",
    badge: ""
  },
  {
    id: "prod-303",
    name: "School Backpack 303",
    category: "bags",
    price: 619,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_303.jpg",
    badge: ""
  },
  {
    id: "prod-304",
    name: "Classic Teddy Bear 304",
    category: "teddies",
    price: 1319,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_304.jpg",
    badge: ""
  },
  {
    id: "prod-305",
    name: "Joyful Kids Toy 305",
    category: "toys",
    price: 639,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_305.jpg",
    badge: ""
  },
  {
    id: "prod-306",
    name: "Exquisite Gift Set 306",
    category: "gifts",
    price: 2469,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_306.jpg",
    badge: ""
  },
  {
    id: "prod-307",
    name: "School Backpack 307",
    category: "bags",
    price: 649,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_307.jpg",
    badge: ""
  },
  {
    id: "prod-308",
    name: "Classic Teddy Bear 308",
    category: "teddies",
    price: 1349,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_308.jpg",
    badge: ""
  },
  {
    id: "prod-309",
    name: "Joyful Kids Toy 309",
    category: "toys",
    price: 689,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_309.jpg",
    badge: ""
  },
  {
    id: "prod-310",
    name: "Exquisite Gift Set 310",
    category: "gifts",
    price: 519,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_310.jpg",
    badge: ""
  },
  {
    id: "prod-311",
    name: "School Backpack 311",
    category: "bags",
    price: 689,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_311.jpg",
    badge: ""
  },
  {
    id: "prod-312",
    name: "Classic Teddy Bear 312",
    category: "teddies",
    price: 1369,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_312.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-313",
    name: "Joyful Kids Toy 313",
    category: "toys",
    price: 729,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_313.jpg",
    badge: ""
  },
  {
    id: "prod-314",
    name: "Exquisite Gift Set 314",
    category: "gifts",
    price: 569,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_314.jpg",
    badge: ""
  },
  {
    id: "prod-315",
    name: "School Backpack 315",
    category: "bags",
    price: 719,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_315.jpg",
    badge: "New Arrival"
  },
  {
    id: "prod-316",
    name: "Classic Teddy Bear 316",
    category: "teddies",
    price: 1399,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_316.jpg",
    badge: ""
  },
  {
    id: "prod-317",
    name: "Joyful Kids Toy 317",
    category: "toys",
    price: 779,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_317.jpg",
    badge: ""
  },
  {
    id: "prod-318",
    name: "Exquisite Gift Set 318",
    category: "gifts",
    price: 619,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_318.jpg",
    badge: ""
  },
  {
    id: "prod-319",
    name: "School Backpack 319",
    category: "bags",
    price: 759,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_319.jpg",
    badge: ""
  },
  {
    id: "prod-320",
    name: "Classic Teddy Bear 320",
    category: "teddies",
    price: 1429,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_320.jpg",
    badge: ""
  },
  {
    id: "prod-321",
    name: "Joyful Kids Toy 321",
    category: "toys",
    price: 819,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_321.jpg",
    badge: ""
  },
  {
    id: "prod-322",
    name: "Exquisite Gift Set 322",
    category: "gifts",
    price: 679,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_322.jpg",
    badge: "Premium"
  },
  {
    id: "prod-323",
    name: "School Backpack 323",
    category: "bags",
    price: 799,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_323.jpg",
    badge: ""
  },
  {
    id: "prod-324",
    name: "Classic Teddy Bear 324",
    category: "teddies",
    price: 1459,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_324.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-325",
    name: "Joyful Kids Toy 325",
    category: "toys",
    price: 859,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_325.jpg",
    badge: "Popular"
  },
  {
    id: "prod-326",
    name: "Exquisite Gift Set 326",
    category: "gifts",
    price: 729,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_326.jpg",
    badge: ""
  },
  {
    id: "prod-327",
    name: "School Backpack 327",
    category: "bags",
    price: 829,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_327.jpg",
    badge: ""
  },
  {
    id: "prod-328",
    name: "Classic Teddy Bear 328",
    category: "teddies",
    price: 1489,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_328.jpg",
    badge: ""
  },
  {
    id: "prod-329",
    name: "Joyful Kids Toy 329",
    category: "toys",
    price: 909,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_329.jpg",
    badge: ""
  },
  {
    id: "prod-330",
    name: "Exquisite Gift Set 330",
    category: "gifts",
    price: 779,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_330.jpg",
    badge: ""
  },
  {
    id: "prod-331",
    name: "School Backpack 331",
    category: "bags",
    price: 869,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_331.jpg",
    badge: ""
  },
  {
    id: "prod-332",
    name: "Classic Teddy Bear 332",
    category: "teddies",
    price: 1509,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_332.jpg",
    badge: ""
  },
  {
    id: "prod-333",
    name: "Joyful Kids Toy 333",
    category: "toys",
    price: 949,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_333.jpg",
    badge: ""
  },
  {
    id: "prod-334",
    name: "Exquisite Gift Set 334",
    category: "gifts",
    price: 829,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_334.jpg",
    badge: ""
  },
  {
    id: "prod-335",
    name: "School Backpack 335",
    category: "bags",
    price: 899,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_335.jpg",
    badge: ""
  },
  {
    id: "prod-336",
    name: "Classic Teddy Bear 336",
    category: "teddies",
    price: 1539,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_336.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-337",
    name: "Joyful Kids Toy 337",
    category: "toys",
    price: 999,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_337.jpg",
    badge: ""
  },
  {
    id: "prod-338",
    name: "Exquisite Gift Set 338",
    category: "gifts",
    price: 879,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_338.jpg",
    badge: ""
  },
  {
    id: "prod-339",
    name: "School Backpack 339",
    category: "bags",
    price: 939,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_339.jpg",
    badge: ""
  },
  {
    id: "prod-340",
    name: "Classic Teddy Bear 340",
    category: "teddies",
    price: 1569,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_340.jpg",
    badge: ""
  },
  {
    id: "prod-341",
    name: "Joyful Kids Toy 341",
    category: "toys",
    price: 1039,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_341.jpg",
    badge: ""
  },
  {
    id: "prod-342",
    name: "Exquisite Gift Set 342",
    category: "gifts",
    price: 939,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_342.jpg",
    badge: ""
  },
  {
    id: "prod-343",
    name: "School Backpack 343",
    category: "bags",
    price: 979,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_343.jpg",
    badge: ""
  },
  {
    id: "prod-344",
    name: "Classic Teddy Bear 344",
    category: "teddies",
    price: 399,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_344.jpg",
    badge: ""
  },
  {
    id: "prod-345",
    name: "Joyful Kids Toy 345",
    category: "toys",
    price: 1079,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_345.jpg",
    badge: ""
  },
  {
    id: "prod-346",
    name: "Exquisite Gift Set 346",
    category: "gifts",
    price: 989,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_346.jpg",
    badge: ""
  },
  {
    id: "prod-347",
    name: "School Backpack 347",
    category: "bags",
    price: 1009,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_347.jpg",
    badge: ""
  },
  {
    id: "prod-348",
    name: "Classic Teddy Bear 348",
    category: "teddies",
    price: 429,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_348.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-349",
    name: "Joyful Kids Toy 349",
    category: "toys",
    price: 1129,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_349.jpg",
    badge: ""
  },
  {
    id: "prod-350",
    name: "Exquisite Gift Set 350",
    category: "gifts",
    price: 1039,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_350.jpg",
    badge: "Premium"
  },
  {
    id: "prod-351",
    name: "School Backpack 351",
    category: "bags",
    price: 1049,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_351.jpg",
    badge: ""
  },
  {
    id: "prod-352",
    name: "Classic Teddy Bear 352",
    category: "teddies",
    price: 449,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_352.jpg",
    badge: ""
  },
  {
    id: "prod-353",
    name: "Joyful Kids Toy 353",
    category: "toys",
    price: 1169,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_353.jpg",
    badge: ""
  },
  {
    id: "prod-354",
    name: "Exquisite Gift Set 354",
    category: "gifts",
    price: 1089,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_354.jpg",
    badge: ""
  },
  {
    id: "prod-355",
    name: "School Backpack 355",
    category: "bags",
    price: 1079,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_355.jpg",
    badge: ""
  },
  {
    id: "prod-356",
    name: "Classic Teddy Bear 356",
    category: "teddies",
    price: 479,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_356.jpg",
    badge: ""
  },
  {
    id: "prod-357",
    name: "Joyful Kids Toy 357",
    category: "toys",
    price: 1219,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_357.jpg",
    badge: ""
  },
  {
    id: "prod-358",
    name: "Exquisite Gift Set 358",
    category: "gifts",
    price: 1139,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_358.jpg",
    badge: ""
  },
  {
    id: "prod-359",
    name: "School Backpack 359",
    category: "bags",
    price: 1119,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_359.jpg",
    badge: ""
  },
  {
    id: "prod-360",
    name: "Classic Teddy Bear 360",
    category: "teddies",
    price: 509,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_360.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-361",
    name: "Joyful Kids Toy 361",
    category: "toys",
    price: 1259,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_361.jpg",
    badge: ""
  },
  {
    id: "prod-362",
    name: "Exquisite Gift Set 362",
    category: "gifts",
    price: 1199,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_362.jpg",
    badge: ""
  },
  {
    id: "prod-363",
    name: "School Backpack 363",
    category: "bags",
    price: 1159,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_363.jpg",
    badge: ""
  },
  {
    id: "prod-364",
    name: "Classic Teddy Bear 364",
    category: "teddies",
    price: 539,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_364.jpg",
    badge: ""
  },
  {
    id: "prod-365",
    name: "Joyful Kids Toy 365",
    category: "toys",
    price: 299,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_365.jpg",
    badge: ""
  },
  {
    id: "prod-366",
    name: "Exquisite Gift Set 366",
    category: "gifts",
    price: 1249,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_366.jpg",
    badge: ""
  },
  {
    id: "prod-367",
    name: "School Backpack 367",
    category: "bags",
    price: 1189,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_367.jpg",
    badge: ""
  },
  {
    id: "prod-368",
    name: "Classic Teddy Bear 368",
    category: "teddies",
    price: 569,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_368.jpg",
    badge: ""
  },
  {
    id: "prod-369",
    name: "Joyful Kids Toy 369",
    category: "toys",
    price: 349,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_369.jpg",
    badge: ""
  },
  {
    id: "prod-370",
    name: "Exquisite Gift Set 370",
    category: "gifts",
    price: 1299,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_370.jpg",
    badge: ""
  },
  {
    id: "prod-371",
    name: "School Backpack 371",
    category: "bags",
    price: 1229,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_371.jpg",
    badge: ""
  },
  {
    id: "prod-372",
    name: "Classic Teddy Bear 372",
    category: "teddies",
    price: 589,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_372.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-373",
    name: "Joyful Kids Toy 373",
    category: "toys",
    price: 389,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_373.jpg",
    badge: ""
  },
  {
    id: "prod-374",
    name: "Exquisite Gift Set 374",
    category: "gifts",
    price: 1349,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_374.jpg",
    badge: ""
  },
  {
    id: "prod-375",
    name: "School Backpack 375",
    category: "bags",
    price: 1259,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_375.jpg",
    badge: "New Arrival"
  },
  {
    id: "prod-376",
    name: "Classic Teddy Bear 376",
    category: "teddies",
    price: 619,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_376.jpg",
    badge: ""
  },
  {
    id: "prod-377",
    name: "Joyful Kids Toy 377",
    category: "toys",
    price: 439,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_377.jpg",
    badge: "Popular"
  },
  {
    id: "prod-378",
    name: "Exquisite Gift Set 378",
    category: "gifts",
    price: 1399,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_378.jpg",
    badge: "Premium"
  },
  {
    id: "prod-379",
    name: "School Backpack 379",
    category: "bags",
    price: 1299,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_379.jpg",
    badge: ""
  },
  {
    id: "prod-380",
    name: "Classic Teddy Bear 380",
    category: "teddies",
    price: 649,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_380.jpg",
    badge: ""
  },
  {
    id: "prod-381",
    name: "Joyful Kids Toy 381",
    category: "toys",
    price: 479,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_381.jpg",
    badge: ""
  },
  {
    id: "prod-382",
    name: "Exquisite Gift Set 382",
    category: "gifts",
    price: 1459,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_382.jpg",
    badge: ""
  },
  {
    id: "prod-383",
    name: "School Backpack 383",
    category: "bags",
    price: 1339,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_383.jpg",
    badge: ""
  },
  {
    id: "prod-384",
    name: "Classic Teddy Bear 384",
    category: "teddies",
    price: 679,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_384.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-385",
    name: "Joyful Kids Toy 385",
    category: "toys",
    price: 519,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_385.jpg",
    badge: ""
  },
  {
    id: "prod-386",
    name: "Exquisite Gift Set 386",
    category: "gifts",
    price: 1509,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_386.jpg",
    badge: ""
  },
  {
    id: "prod-387",
    name: "School Backpack 387",
    category: "bags",
    price: 1369,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_387.jpg",
    badge: ""
  },
  {
    id: "prod-388",
    name: "Classic Teddy Bear 388",
    category: "teddies",
    price: 709,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_388.jpg",
    badge: ""
  },
  {
    id: "prod-389",
    name: "Joyful Kids Toy 389",
    category: "toys",
    price: 569,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_389.jpg",
    badge: ""
  },
  {
    id: "prod-390",
    name: "Exquisite Gift Set 390",
    category: "gifts",
    price: 1559,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_390.jpg",
    badge: ""
  },
  {
    id: "prod-391",
    name: "School Backpack 391",
    category: "bags",
    price: 1409,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_391.jpg",
    badge: ""
  },
  {
    id: "prod-392",
    name: "Classic Teddy Bear 392",
    category: "teddies",
    price: 729,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_392.jpg",
    badge: ""
  },
  {
    id: "prod-393",
    name: "Joyful Kids Toy 393",
    category: "toys",
    price: 609,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_393.jpg",
    badge: ""
  },
  {
    id: "prod-394",
    name: "Exquisite Gift Set 394",
    category: "gifts",
    price: 1609,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_394.jpg",
    badge: ""
  },
  {
    id: "prod-395",
    name: "School Backpack 395",
    category: "bags",
    price: 1439,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_395.jpg",
    badge: ""
  },
  {
    id: "prod-396",
    name: "Classic Teddy Bear 396",
    category: "teddies",
    price: 759,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_396.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-397",
    name: "Joyful Kids Toy 397",
    category: "toys",
    price: 659,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_397.jpg",
    badge: ""
  },
  {
    id: "prod-398",
    name: "Exquisite Gift Set 398",
    category: "gifts",
    price: 1659,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_398.jpg",
    badge: ""
  },
  {
    id: "prod-399",
    name: "School Backpack 399",
    category: "bags",
    price: 1479,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_399.jpg",
    badge: ""
  },
  {
    id: "prod-400",
    name: "Classic Teddy Bear 400",
    category: "teddies",
    price: 789,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_400.jpg",
    badge: ""
  },
  {
    id: "prod-401",
    name: "Joyful Kids Toy 401",
    category: "toys",
    price: 699,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_401.jpg",
    badge: ""
  },
  {
    id: "prod-402",
    name: "Exquisite Gift Set 402",
    category: "gifts",
    price: 1719,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_402.jpg",
    badge: ""
  },
  {
    id: "prod-403",
    name: "School Backpack 403",
    category: "bags",
    price: 619,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_403.jpg",
    badge: ""
  },
  {
    id: "prod-404",
    name: "Classic Teddy Bear 404",
    category: "teddies",
    price: 819,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_404.jpg",
    badge: ""
  },
  {
    id: "prod-405",
    name: "Joyful Kids Toy 405",
    category: "toys",
    price: 739,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_405.jpg",
    badge: ""
  },
  {
    id: "prod-406",
    name: "Exquisite Gift Set 406",
    category: "gifts",
    price: 1769,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_406.jpg",
    badge: "Premium"
  },
  {
    id: "prod-407",
    name: "School Backpack 407",
    category: "bags",
    price: 649,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_407.jpg",
    badge: ""
  },
  {
    id: "prod-408",
    name: "Classic Teddy Bear 408",
    category: "teddies",
    price: 849,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_408.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-409",
    name: "Joyful Kids Toy 409",
    category: "toys",
    price: 789,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_409.jpg",
    badge: ""
  },
  {
    id: "prod-410",
    name: "Exquisite Gift Set 410",
    category: "gifts",
    price: 1819,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_410.jpg",
    badge: ""
  },
  {
    id: "prod-411",
    name: "School Backpack 411",
    category: "bags",
    price: 689,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_411.jpg",
    badge: ""
  },
  {
    id: "prod-412",
    name: "Classic Teddy Bear 412",
    category: "teddies",
    price: 869,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_412.jpg",
    badge: ""
  },
  {
    id: "prod-413",
    name: "Joyful Kids Toy 413",
    category: "toys",
    price: 829,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_413.jpg",
    badge: ""
  },
  {
    id: "prod-414",
    name: "Exquisite Gift Set 414",
    category: "gifts",
    price: 1869,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_414.jpg",
    badge: ""
  },
  {
    id: "prod-415",
    name: "School Backpack 415",
    category: "bags",
    price: 719,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_415.jpg",
    badge: ""
  },
  {
    id: "prod-416",
    name: "Classic Teddy Bear 416",
    category: "teddies",
    price: 899,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_416.jpg",
    badge: ""
  },
  {
    id: "prod-417",
    name: "Joyful Kids Toy 417",
    category: "toys",
    price: 879,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_417.jpg",
    badge: ""
  },
  {
    id: "prod-418",
    name: "Exquisite Gift Set 418",
    category: "gifts",
    price: 1919,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_418.jpg",
    badge: ""
  },
  {
    id: "prod-419",
    name: "School Backpack 419",
    category: "bags",
    price: 759,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_419.jpg",
    badge: ""
  },
  {
    id: "prod-420",
    name: "Classic Teddy Bear 420",
    category: "teddies",
    price: 929,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_420.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-421",
    name: "Joyful Kids Toy 421",
    category: "toys",
    price: 919,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_421.jpg",
    badge: ""
  },
  {
    id: "prod-422",
    name: "Exquisite Gift Set 422",
    category: "gifts",
    price: 1979,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_422.jpg",
    badge: ""
  },
  {
    id: "prod-423",
    name: "School Backpack 423",
    category: "bags",
    price: 799,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_423.jpg",
    badge: ""
  },
  {
    id: "prod-424",
    name: "Classic Teddy Bear 424",
    category: "teddies",
    price: 959,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_424.jpg",
    badge: ""
  },
  {
    id: "prod-425",
    name: "Joyful Kids Toy 425",
    category: "toys",
    price: 959,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_425.jpg",
    badge: ""
  },
  {
    id: "prod-426",
    name: "Exquisite Gift Set 426",
    category: "gifts",
    price: 2029,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_426.jpg",
    badge: ""
  },
  {
    id: "prod-427",
    name: "School Backpack 427",
    category: "bags",
    price: 829,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_427.jpg",
    badge: ""
  },
  {
    id: "prod-428",
    name: "Classic Teddy Bear 428",
    category: "teddies",
    price: 989,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_428.jpg",
    badge: ""
  },
  {
    id: "prod-429",
    name: "Joyful Kids Toy 429",
    category: "toys",
    price: 1009,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_429.jpg",
    badge: "Popular"
  },
  {
    id: "prod-430",
    name: "Exquisite Gift Set 430",
    category: "gifts",
    price: 2079,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_430.jpg",
    badge: ""
  },
  {
    id: "prod-431",
    name: "School Backpack 431",
    category: "bags",
    price: 869,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_431.jpg",
    badge: ""
  },
  {
    id: "prod-432",
    name: "Classic Teddy Bear 432",
    category: "teddies",
    price: 1009,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_432.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-433",
    name: "Joyful Kids Toy 433",
    category: "toys",
    price: 1049,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_433.jpg",
    badge: ""
  },
  {
    id: "prod-434",
    name: "Exquisite Gift Set 434",
    category: "gifts",
    price: 2129,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_434.jpg",
    badge: "Premium"
  },
  {
    id: "prod-435",
    name: "School Backpack 435",
    category: "bags",
    price: 899,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_435.jpg",
    badge: "New Arrival"
  },
  {
    id: "prod-436",
    name: "Classic Teddy Bear 436",
    category: "teddies",
    price: 1039,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_436.jpg",
    badge: ""
  },
  {
    id: "prod-437",
    name: "Joyful Kids Toy 437",
    category: "toys",
    price: 1099,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_437.jpg",
    badge: ""
  },
  {
    id: "prod-438",
    name: "Exquisite Gift Set 438",
    category: "gifts",
    price: 2179,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_438.jpg",
    badge: ""
  },
  {
    id: "prod-439",
    name: "School Backpack 439",
    category: "bags",
    price: 939,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_439.jpg",
    badge: ""
  },
  {
    id: "prod-440",
    name: "Classic Teddy Bear 440",
    category: "teddies",
    price: 1069,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_440.jpg",
    badge: ""
  },
  {
    id: "prod-441",
    name: "Joyful Kids Toy 441",
    category: "toys",
    price: 1139,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_441.jpg",
    badge: ""
  },
  {
    id: "prod-442",
    name: "Exquisite Gift Set 442",
    category: "gifts",
    price: 2239,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_442.jpg",
    badge: ""
  },
  {
    id: "prod-443",
    name: "School Backpack 443",
    category: "bags",
    price: 979,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_443.jpg",
    badge: ""
  },
  {
    id: "prod-444",
    name: "Classic Teddy Bear 444",
    category: "teddies",
    price: 1099,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_444.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-445",
    name: "Joyful Kids Toy 445",
    category: "toys",
    price: 1179,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_445.jpg",
    badge: ""
  },
  {
    id: "prod-446",
    name: "Exquisite Gift Set 446",
    category: "gifts",
    price: 2289,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_446.jpg",
    badge: ""
  },
  {
    id: "prod-447",
    name: "School Backpack 447",
    category: "bags",
    price: 1009,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_447.jpg",
    badge: ""
  },
  {
    id: "prod-448",
    name: "Classic Teddy Bear 448",
    category: "teddies",
    price: 1129,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_448.jpg",
    badge: ""
  },
  {
    id: "prod-449",
    name: "Joyful Kids Toy 449",
    category: "toys",
    price: 1229,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_449.jpg",
    badge: ""
  },
  {
    id: "prod-450",
    name: "Exquisite Gift Set 450",
    category: "gifts",
    price: 2339,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_450.jpg",
    badge: ""
  },
  {
    id: "prod-451",
    name: "School Backpack 451",
    category: "bags",
    price: 1049,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_451.jpg",
    badge: ""
  },
  {
    id: "prod-452",
    name: "Classic Teddy Bear 452",
    category: "teddies",
    price: 1149,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_452.jpg",
    badge: ""
  },
  {
    id: "prod-453",
    name: "Joyful Kids Toy 453",
    category: "toys",
    price: 1269,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_453.jpg",
    badge: ""
  },
  {
    id: "prod-454",
    name: "Exquisite Gift Set 454",
    category: "gifts",
    price: 2389,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_454.jpg",
    badge: ""
  },
  {
    id: "prod-455",
    name: "School Backpack 455",
    category: "bags",
    price: 1079,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_455.jpg",
    badge: ""
  },
  {
    id: "prod-456",
    name: "Classic Teddy Bear 456",
    category: "teddies",
    price: 1179,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_456.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-457",
    name: "Joyful Kids Toy 457",
    category: "toys",
    price: 319,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_457.jpg",
    badge: ""
  },
  {
    id: "prod-458",
    name: "Exquisite Gift Set 458",
    category: "gifts",
    price: 2439,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_458.jpg",
    badge: ""
  },
  {
    id: "prod-459",
    name: "School Backpack 459",
    category: "bags",
    price: 1119,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_459.jpg",
    badge: ""
  },
  {
    id: "prod-460",
    name: "Classic Teddy Bear 460",
    category: "teddies",
    price: 1209,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_460.jpg",
    badge: ""
  },
  {
    id: "prod-461",
    name: "Joyful Kids Toy 461",
    category: "toys",
    price: 359,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_461.jpg",
    badge: ""
  },
  {
    id: "prod-462",
    name: "Exquisite Gift Set 462",
    category: "gifts",
    price: 499,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_462.jpg",
    badge: "Premium"
  },
  {
    id: "prod-463",
    name: "School Backpack 463",
    category: "bags",
    price: 1159,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_463.jpg",
    badge: ""
  },
  {
    id: "prod-464",
    name: "Classic Teddy Bear 464",
    category: "teddies",
    price: 1239,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_464.jpg",
    badge: ""
  },
  {
    id: "prod-465",
    name: "Joyful Kids Toy 465",
    category: "toys",
    price: 399,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_465.jpg",
    badge: ""
  },
  {
    id: "prod-466",
    name: "Exquisite Gift Set 466",
    category: "gifts",
    price: 549,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_466.jpg",
    badge: ""
  },
  {
    id: "prod-467",
    name: "School Backpack 467",
    category: "bags",
    price: 1189,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_467.jpg",
    badge: ""
  },
  {
    id: "prod-468",
    name: "Classic Teddy Bear 468",
    category: "teddies",
    price: 1269,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_468.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-469",
    name: "Joyful Kids Toy 469",
    category: "toys",
    price: 449,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_469.jpg",
    badge: ""
  },
  {
    id: "prod-470",
    name: "Exquisite Gift Set 470",
    category: "gifts",
    price: 599,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_470.jpg",
    badge: ""
  },
  {
    id: "prod-471",
    name: "School Backpack 471",
    category: "bags",
    price: 1229,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_471.jpg",
    badge: ""
  },
  {
    id: "prod-472",
    name: "Classic Teddy Bear 472",
    category: "teddies",
    price: 1289,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_472.jpg",
    badge: ""
  },
  {
    id: "prod-473",
    name: "Joyful Kids Toy 473",
    category: "toys",
    price: 489,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_473.jpg",
    badge: ""
  },
  {
    id: "prod-474",
    name: "Exquisite Gift Set 474",
    category: "gifts",
    price: 649,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_474.jpg",
    badge: ""
  },
  {
    id: "prod-475",
    name: "School Backpack 475",
    category: "bags",
    price: 1259,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_475.jpg",
    badge: ""
  },
  {
    id: "prod-476",
    name: "Classic Teddy Bear 476",
    category: "teddies",
    price: 1319,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_476.jpg",
    badge: ""
  },
  {
    id: "prod-477",
    name: "Joyful Kids Toy 477",
    category: "toys",
    price: 539,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_477.jpg",
    badge: ""
  },
  {
    id: "prod-478",
    name: "Exquisite Gift Set 478",
    category: "gifts",
    price: 699,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_478.jpg",
    badge: ""
  },
  {
    id: "prod-479",
    name: "School Backpack 479",
    category: "bags",
    price: 1299,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_479.jpg",
    badge: ""
  },
  {
    id: "prod-480",
    name: "Classic Teddy Bear 480",
    category: "teddies",
    price: 1349,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_480.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-481",
    name: "Joyful Kids Toy 481",
    category: "toys",
    price: 579,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_481.jpg",
    badge: "Popular"
  },
  {
    id: "prod-482",
    name: "Exquisite Gift Set 482",
    category: "gifts",
    price: 759,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_482.jpg",
    badge: ""
  },
  {
    id: "prod-483",
    name: "School Backpack 483",
    category: "bags",
    price: 1339,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_483.jpg",
    badge: ""
  },
  {
    id: "prod-484",
    name: "Classic Teddy Bear 484",
    category: "teddies",
    price: 1379,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_484.jpg",
    badge: ""
  },
  {
    id: "prod-485",
    name: "Joyful Kids Toy 485",
    category: "toys",
    price: 619,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_485.jpg",
    badge: ""
  },
  {
    id: "prod-486",
    name: "Exquisite Gift Set 486",
    category: "gifts",
    price: 809,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_486.jpg",
    badge: ""
  },
  {
    id: "prod-487",
    name: "School Backpack 487",
    category: "bags",
    price: 1369,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_487.jpg",
    badge: ""
  },
  {
    id: "prod-488",
    name: "Classic Teddy Bear 488",
    category: "teddies",
    price: 1409,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_488.jpg",
    badge: ""
  },
  {
    id: "prod-489",
    name: "Joyful Kids Toy 489",
    category: "toys",
    price: 669,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_489.jpg",
    badge: ""
  },
  {
    id: "prod-490",
    name: "Exquisite Gift Set 490",
    category: "gifts",
    price: 859,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_490.jpg",
    badge: "Premium"
  },
  {
    id: "prod-491",
    name: "School Backpack 491",
    category: "bags",
    price: 1409,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_491.jpg",
    badge: ""
  },
  {
    id: "prod-492",
    name: "Classic Teddy Bear 492",
    category: "teddies",
    price: 1429,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_492.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-493",
    name: "Joyful Kids Toy 493",
    category: "toys",
    price: 709,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_493.jpg",
    badge: ""
  },
  {
    id: "prod-494",
    name: "Exquisite Gift Set 494",
    category: "gifts",
    price: 909,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_494.jpg",
    badge: ""
  },
  {
    id: "prod-495",
    name: "School Backpack 495",
    category: "bags",
    price: 1439,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_495.jpg",
    badge: "New Arrival"
  },
  {
    id: "prod-496",
    name: "Classic Teddy Bear 496",
    category: "teddies",
    price: 1459,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_496.jpg",
    badge: ""
  },
  {
    id: "prod-497",
    name: "Joyful Kids Toy 497",
    category: "toys",
    price: 759,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_497.jpg",
    badge: ""
  },
  {
    id: "prod-498",
    name: "Exquisite Gift Set 498",
    category: "gifts",
    price: 959,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_498.jpg",
    badge: ""
  },
  {
    id: "prod-499",
    name: "School Backpack 499",
    category: "bags",
    price: 1479,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_499.jpg",
    badge: ""
  },
  {
    id: "prod-500",
    name: "Classic Teddy Bear 500",
    category: "teddies",
    price: 1489,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_500.jpg",
    badge: ""
  },
  {
    id: "prod-501",
    name: "Joyful Kids Toy 501",
    category: "toys",
    price: 799,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_501.jpg",
    badge: ""
  },
  {
    id: "prod-502",
    name: "Exquisite Gift Set 502",
    category: "gifts",
    price: 1019,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_502.jpg",
    badge: ""
  },
  {
    id: "prod-503",
    name: "School Backpack 503",
    category: "bags",
    price: 619,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_503.jpg",
    badge: ""
  },
  {
    id: "prod-504",
    name: "Classic Teddy Bear 504",
    category: "teddies",
    price: 1519,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_504.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-505",
    name: "Joyful Kids Toy 505",
    category: "toys",
    price: 839,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_505.jpg",
    badge: ""
  },
  {
    id: "prod-506",
    name: "Exquisite Gift Set 506",
    category: "gifts",
    price: 1069,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_506.jpg",
    badge: ""
  },
  {
    id: "prod-507",
    name: "School Backpack 507",
    category: "bags",
    price: 649,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_507.jpg",
    badge: ""
  },
  {
    id: "prod-508",
    name: "Classic Teddy Bear 508",
    category: "teddies",
    price: 1549,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_508.jpg",
    badge: ""
  },
  {
    id: "prod-509",
    name: "Joyful Kids Toy 509",
    category: "toys",
    price: 889,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_509.jpg",
    badge: ""
  },
  {
    id: "prod-510",
    name: "Exquisite Gift Set 510",
    category: "gifts",
    price: 1119,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_510.jpg",
    badge: ""
  },
  {
    id: "prod-511",
    name: "School Backpack 511",
    category: "bags",
    price: 689,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_511.jpg",
    badge: ""
  },
  {
    id: "prod-512",
    name: "Classic Teddy Bear 512",
    category: "teddies",
    price: 1569,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_512.jpg",
    badge: ""
  },
  {
    id: "prod-513",
    name: "Joyful Kids Toy 513",
    category: "toys",
    price: 929,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_513.jpg",
    badge: ""
  },
  {
    id: "prod-514",
    name: "Exquisite Gift Set 514",
    category: "gifts",
    price: 1169,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_514.jpg",
    badge: ""
  },
  {
    id: "prod-515",
    name: "School Backpack 515",
    category: "bags",
    price: 719,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_515.jpg",
    badge: ""
  },
  {
    id: "prod-516",
    name: "Classic Teddy Bear 516",
    category: "teddies",
    price: 399,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_516.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-517",
    name: "Joyful Kids Toy 517",
    category: "toys",
    price: 979,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_517.jpg",
    badge: ""
  },
  {
    id: "prod-518",
    name: "Exquisite Gift Set 518",
    category: "gifts",
    price: 1219,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_518.jpg",
    badge: "Premium"
  },
  {
    id: "prod-519",
    name: "School Backpack 519",
    category: "bags",
    price: 759,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_519.jpg",
    badge: ""
  },
  {
    id: "prod-520",
    name: "Classic Teddy Bear 520",
    category: "teddies",
    price: 429,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_520.jpg",
    badge: ""
  },
  {
    id: "prod-521",
    name: "Joyful Kids Toy 521",
    category: "toys",
    price: 1019,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_521.jpg",
    badge: ""
  },
  {
    id: "prod-522",
    name: "Exquisite Gift Set 522",
    category: "gifts",
    price: 1279,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_522.jpg",
    badge: ""
  },
  {
    id: "prod-523",
    name: "School Backpack 523",
    category: "bags",
    price: 799,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_523.jpg",
    badge: ""
  },
  {
    id: "prod-524",
    name: "Classic Teddy Bear 524",
    category: "teddies",
    price: 459,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_524.jpg",
    badge: ""
  },
  {
    id: "prod-525",
    name: "Joyful Kids Toy 525",
    category: "toys",
    price: 1059,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_525.jpg",
    badge: ""
  },
  {
    id: "prod-526",
    name: "Exquisite Gift Set 526",
    category: "gifts",
    price: 1329,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_526.jpg",
    badge: ""
  },
  {
    id: "prod-527",
    name: "School Backpack 527",
    category: "bags",
    price: 829,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_527.jpg",
    badge: ""
  },
  {
    id: "prod-528",
    name: "Classic Teddy Bear 528",
    category: "teddies",
    price: 489,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_528.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-529",
    name: "Joyful Kids Toy 529",
    category: "toys",
    price: 1109,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_529.jpg",
    badge: ""
  },
  {
    id: "prod-530",
    name: "Exquisite Gift Set 530",
    category: "gifts",
    price: 1379,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_530.jpg",
    badge: ""
  },
  {
    id: "prod-531",
    name: "School Backpack 531",
    category: "bags",
    price: 869,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_531.jpg",
    badge: ""
  },
  {
    id: "prod-532",
    name: "Classic Teddy Bear 532",
    category: "teddies",
    price: 509,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_532.jpg",
    badge: ""
  },
  {
    id: "prod-533",
    name: "Joyful Kids Toy 533",
    category: "toys",
    price: 1149,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_533.jpg",
    badge: "Popular"
  },
  {
    id: "prod-534",
    name: "Exquisite Gift Set 534",
    category: "gifts",
    price: 1429,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_534.jpg",
    badge: ""
  },
  {
    id: "prod-535",
    name: "School Backpack 535",
    category: "bags",
    price: 899,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_535.jpg",
    badge: ""
  },
  {
    id: "prod-536",
    name: "Classic Teddy Bear 536",
    category: "teddies",
    price: 539,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_536.jpg",
    badge: ""
  },
  {
    id: "prod-537",
    name: "Joyful Kids Toy 537",
    category: "toys",
    price: 1199,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_537.jpg",
    badge: ""
  },
  {
    id: "prod-538",
    name: "Exquisite Gift Set 538",
    category: "gifts",
    price: 1479,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_538.jpg",
    badge: ""
  },
  {
    id: "prod-539",
    name: "School Backpack 539",
    category: "bags",
    price: 939,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_539.jpg",
    badge: ""
  },
  {
    id: "prod-540",
    name: "Classic Teddy Bear 540",
    category: "teddies",
    price: 569,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_540.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-541",
    name: "Joyful Kids Toy 541",
    category: "toys",
    price: 1239,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_541.jpg",
    badge: ""
  },
  {
    id: "prod-542",
    name: "Exquisite Gift Set 542",
    category: "gifts",
    price: 1539,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_542.jpg",
    badge: ""
  },
  {
    id: "prod-543",
    name: "School Backpack 543",
    category: "bags",
    price: 979,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_543.jpg",
    badge: ""
  },
  {
    id: "prod-544",
    name: "Classic Teddy Bear 544",
    category: "teddies",
    price: 599,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_544.jpg",
    badge: ""
  },
  {
    id: "prod-545",
    name: "Joyful Kids Toy 545",
    category: "toys",
    price: 1279,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_545.jpg",
    badge: ""
  },
  {
    id: "prod-546",
    name: "Exquisite Gift Set 546",
    category: "gifts",
    price: 1589,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_546.jpg",
    badge: "Premium"
  },
  {
    id: "prod-547",
    name: "School Backpack 547",
    category: "bags",
    price: 1009,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_547.jpg",
    badge: ""
  },
  {
    id: "prod-548",
    name: "Classic Teddy Bear 548",
    category: "teddies",
    price: 629,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_548.jpg",
    badge: ""
  },
  {
    id: "prod-549",
    name: "Joyful Kids Toy 549",
    category: "toys",
    price: 329,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_549.jpg",
    badge: ""
  },
  {
    id: "prod-550",
    name: "Exquisite Gift Set 550",
    category: "gifts",
    price: 1639,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_550.jpg",
    badge: ""
  },
  {
    id: "prod-551",
    name: "School Backpack 551",
    category: "bags",
    price: 1049,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_551.jpg",
    badge: ""
  },
  {
    id: "prod-552",
    name: "Classic Teddy Bear 552",
    category: "teddies",
    price: 649,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_552.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-553",
    name: "Joyful Kids Toy 553",
    category: "toys",
    price: 369,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_553.jpg",
    badge: ""
  },
  {
    id: "prod-554",
    name: "Exquisite Gift Set 554",
    category: "gifts",
    price: 1689,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_554.jpg",
    badge: ""
  },
  {
    id: "prod-555",
    name: "School Backpack 555",
    category: "bags",
    price: 1079,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_555.jpg",
    badge: "New Arrival"
  },
  {
    id: "prod-556",
    name: "Classic Teddy Bear 556",
    category: "teddies",
    price: 679,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_556.jpg",
    badge: ""
  },
  {
    id: "prod-557",
    name: "Joyful Kids Toy 557",
    category: "toys",
    price: 419,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_557.jpg",
    badge: ""
  },
  {
    id: "prod-558",
    name: "Exquisite Gift Set 558",
    category: "gifts",
    price: 1739,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_558.jpg",
    badge: ""
  },
  {
    id: "prod-559",
    name: "School Backpack 559",
    category: "bags",
    price: 1119,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_559.jpg",
    badge: ""
  },
  {
    id: "prod-560",
    name: "Classic Teddy Bear 560",
    category: "teddies",
    price: 709,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_560.jpg",
    badge: ""
  },
  {
    id: "prod-561",
    name: "Joyful Kids Toy 561",
    category: "toys",
    price: 459,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_561.jpg",
    badge: ""
  },
  {
    id: "prod-562",
    name: "Exquisite Gift Set 562",
    category: "gifts",
    price: 1799,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_562.jpg",
    badge: ""
  },
  {
    id: "prod-563",
    name: "School Backpack 563",
    category: "bags",
    price: 1159,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_563.jpg",
    badge: ""
  },
  {
    id: "prod-564",
    name: "Classic Teddy Bear 564",
    category: "teddies",
    price: 739,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_564.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-565",
    name: "Joyful Kids Toy 565",
    category: "toys",
    price: 499,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_565.jpg",
    badge: ""
  },
  {
    id: "prod-566",
    name: "Exquisite Gift Set 566",
    category: "gifts",
    price: 1849,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_566.jpg",
    badge: ""
  },
  {
    id: "prod-567",
    name: "School Backpack 567",
    category: "bags",
    price: 1189,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_567.jpg",
    badge: ""
  },
  {
    id: "prod-568",
    name: "Classic Teddy Bear 568",
    category: "teddies",
    price: 769,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_568.jpg",
    badge: ""
  },
  {
    id: "prod-569",
    name: "Joyful Kids Toy 569",
    category: "toys",
    price: 549,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_569.jpg",
    badge: ""
  },
  {
    id: "prod-570",
    name: "Exquisite Gift Set 570",
    category: "gifts",
    price: 1899,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_570.jpg",
    badge: ""
  },
  {
    id: "prod-571",
    name: "School Backpack 571",
    category: "bags",
    price: 1229,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_571.jpg",
    badge: ""
  },
  {
    id: "prod-572",
    name: "Classic Teddy Bear 572",
    category: "teddies",
    price: 789,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_572.jpg",
    badge: ""
  },
  {
    id: "prod-573",
    name: "Joyful Kids Toy 573",
    category: "toys",
    price: 589,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_573.jpg",
    badge: ""
  },
  {
    id: "prod-574",
    name: "Exquisite Gift Set 574",
    category: "gifts",
    price: 1949,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_574.jpg",
    badge: "Premium"
  },
  {
    id: "prod-575",
    name: "School Backpack 575",
    category: "bags",
    price: 1259,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_575.jpg",
    badge: ""
  },
  {
    id: "prod-576",
    name: "Classic Teddy Bear 576",
    category: "teddies",
    price: 819,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_576.jpg",
    badge: "Best Seller"
  },
  {
    id: "prod-577",
    name: "Joyful Kids Toy 577",
    category: "toys",
    price: 639,
    description: "Premium handcrafted toys item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_577.jpg",
    badge: ""
  },
  {
    id: "prod-578",
    name: "Exquisite Gift Set 578",
    category: "gifts",
    price: 1999,
    description: "Premium handcrafted gifts item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_578.jpg",
    badge: ""
  },
  {
    id: "prod-579",
    name: "School Backpack 579",
    category: "bags",
    price: 1299,
    description: "Premium handcrafted bags item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_579.jpg",
    badge: ""
  },
  {
    id: "prod-580",
    name: "Classic Teddy Bear 580",
    category: "teddies",
    price: 849,
    description: "Premium handcrafted teddies item from Classic Store. Durable, safe, and made with love.",
    image: "assets/images/products/product_580.jpg",
    badge: ""
  }
];

// State Management
let currentFilter = "all";
let searchQuery = "";

// DOM Elements
const productsGrid = document.getElementById("products-grid");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");
const themeToggleBtn = document.getElementById("theme-toggle");
const menuToggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Order Form Elements
const orderItemSelect = document.getElementById("order-item");
const customerNameInput = document.getElementById("customer-name");
const wrappingRadios = document.querySelectorAll('input[name="wrapping"]');
const customMessageTextarea = document.getElementById("custom-message");
const priceEstimateEl = document.getElementById("price-estimate");
const btnSendOrder = document.getElementById("btn-send-order");

// Theme Switcher Initialization
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  if (!themeToggleBtn) return;
  if (theme === "dark") {
    themeToggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  } else {
    themeToggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  }
}

// Mobile Menu Toggle
function initMobileMenu() {
  if (!menuToggleBtn || !navMenu) return;
  
  menuToggleBtn.addEventListener("click", () => {
    menuToggleBtn.classList.toggle("open");
    navMenu.classList.toggle("open");
  });
  
  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggleBtn.classList.remove("open");
      navMenu.classList.remove("open");
    });
  });
}

// Render Product Catalog
function renderCatalog() {
  if (!productsGrid) return;
  
  // Filter products
  const filtered = products.filter(product => {
    const matchesCategory = currentFilter === "all" || product.category === currentFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Clear grid
  productsGrid.innerHTML = "";
  
  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-products">
        <p>No beautiful items match your search. Try adjusting filters or keyword!</p>
      </div>
    `;
    return;
  }
  
  // Populate grid
  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card fade-in-up";
    
    const badgeHTML = product.badge ? `<span class="product-badge">${product.badge}</span>` : "";
    
    card.innerHTML = `
      <div class="product-img-wrapper">
        <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
        ${badgeHTML}
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-price-action">
          <span class="product-price">â‚¹${product.price.toLocaleString("en-IN")}</span>
          <button class="card-btn" onclick="selectProductForOrder('${product.id}')" title="Inquire & Order" aria-label="Inquire and order this item">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
    
    productsGrid.appendChild(card);
  });
  
  // Re-observe animations
  setupAnimations();
}

// Select Product for Order Form
window.selectProductForOrder = function(productId) {
  if (!orderItemSelect) return;
  orderItemSelect.value = productId;
  updatePriceEstimate();
  
  // Smooth scroll to order section
  const orderSection = document.getElementById("order-section");
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: "smooth" });
    // Soft flash animation on the form card
    const card = document.querySelector(".builder-form-card");
    if (card) {
      card.style.transform = "scale(1.02)";
      setTimeout(() => {
        card.style.transform = "scale(1)";
      }, 300);
    }
  }
};

// Populate Order Form Dropdown
function populateOrderDropdown() {
  if (!orderItemSelect) return;
  
  // Clear placeholders except first
  orderItemSelect.innerHTML = `<option value="" disabled selected>Choose a Toy / Gift...</option>`;
  
  products.forEach(product => {
    const opt = document.createElement("option");
    opt.value = product.id;
    opt.textContent = `${product.name} (â‚¹${product.price.toLocaleString("en-IN")})`;
    orderItemSelect.appendChild(opt);
  });
}

// Calculate total and update display
function updatePriceEstimate() {
  if (!priceEstimateEl || !orderItemSelect) return;
  
  const selectedId = orderItemSelect.value;
  if (!selectedId) {
    priceEstimateEl.innerHTML = "â‚¹0";
    return;
  }
  
  const product = products.find(p => p.id === selectedId);
  if (!product) return;
  
  // Get wrapping cost
  let wrappingCost = 0;
  wrappingRadios.forEach(radio => {
    if (radio.checked) {
      wrappingCost = parseInt(radio.getAttribute("data-cost") || "0", 10);
      // Toggle active class on parent radio-card
      radio.closest(".radio-card")?.classList.add("active");
    } else {
      radio.closest(".radio-card")?.classList.remove("active");
    }
  });
  
  const total = product.price + wrappingCost;
  priceEstimateEl.innerHTML = `â‚¹${total.toLocaleString("en-IN")}`;
}

// WhatsApp Message Construction
function handleOrderSubmission(e) {
  e.preventDefault();
  
  const selectedId = orderItemSelect.value;
  if (!selectedId) {
    alert("Please select an item you'd like to order!");
    orderItemSelect.focus();
    return;
  }
  
  const product = products.find(p => p.id === selectedId);
  const customerName = customerNameInput.value.trim();
  const customMessage = customMessageTextarea.value.trim();
  
  if (!customerName) {
    alert("Please enter your name so we can address you!");
    customerNameInput.focus();
    return;
  }
  
  // Get wrapping info
  let wrappingText = "None";
  let wrappingCost = 0;
  wrappingRadios.forEach(radio => {
    if (radio.checked) {
      wrappingCost = parseInt(radio.getAttribute("data-cost") || "0", 10);
      wrappingText = radio.value;
    }
  });
  
  const total = product.price + wrappingCost;
  
  // Construct formatted text message
  let text = `*New Order Request - Classic Store ðŸŽ*\n\n`;
  text += `ðŸ‘¤ *Customer Name:* ${customerName}\n`;
  text += `ðŸ§¸ *Item:* ${product.name}\n`;
  text += `ðŸ·ï¸ *Category:* ${product.category.toUpperCase()}\n`;
  text += `ðŸŽ *Gift Wrapping:* ${wrappingText} (+â‚¹${wrappingCost})\n`;
  
  if (customMessage) {
    text += `âœ‰ï¸ *Gift Card Note:* "${customMessage}"\n`;
  }
  
  text += `\nðŸ’° *Total Price Estimate:* â‚¹${total.toLocaleString("en-IN")}\n\n`;
  text += `ðŸ“ _Please coordinate shipping details and payment option in this chat._`;
  
  // URL Encode
  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
  
  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank");
}

// Scroll triggered fade-in-up animations using IntersectionObserver
function setupAnimations() {
  const elements = document.querySelectorAll(".fade-in-up");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    elements.forEach(el => observer.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    elements.forEach(el => el.classList.add("appear"));
  }
}

// Event Listeners
function setupEventListeners() {
  // Search listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderCatalog();
    });
  }
  
  // Filter button listeners
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter") || "all";
      renderCatalog();
    });
  });
  
  // Theme switcher toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }
  
  // Order Form change listeners
  if (orderItemSelect) {
    orderItemSelect.addEventListener("change", updatePriceEstimate);
  }
  
  wrappingRadios.forEach(radio => {
    radio.addEventListener("change", updatePriceEstimate);
  });
  
  // Submit Order request
  if (btnSendOrder) {
    btnSendOrder.addEventListener("click", handleOrderSubmission);
  }
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  populateOrderDropdown();
  renderCatalog();
  setupEventListeners();
});

