import { AsusLaptop, Facebook, HpEliteBook, HpG7, Instagram, IphoneImg, LenovoPad1, RedmiNote13, SamsungS24, Surface7Pro, Tiktok, X } from "../utils";
import { AppleWatch, InfinixBuds, SonyHeadphones } from "../utils"

export const ACCESS_TOKEN = "access";
export const REFRESH_TOKEN = "refresh"

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/phones", label: "Phones" },
  { href: "#products", label: "Accesories" },
  { href: "#contact-us", label: "Contact Us" },
];

export const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/all", label: "All Products" },
  { href: "#products", label: "Accesories" },
  { href: "#contact-us", label: "About Us" },
  { href: "#contact-us", label: "Privacy Policy" },
  { href: "#contact-us", label: "Terms and Conditions" },
];

export const SocialMediaLinks = [
  {href: "/", img: Facebook, label:"Facebook"},
  {href: "/", img: Instagram, label:"Instagram"},
  {href: "/", img: Tiktok, label:"Tiktok"},
  {href: "/", img: X, label:"X"},
]

export const bestSellerList = ["Apple Products", "Samsung", "Vivo", "Redmi", "Nokia", "Tecno"]

export const PhoneTypes = ["Iphone", "Samsung", "Redmi", "Nokia", "Tecno", "Oppo", "Huawei",
  "Itel", "Realme", "Infinix", "Pixel", "Vivo"
]

export const newProductsList = [
  { 
    brand: 'Apple',
    name: 'Apple Watch', 
    img: AppleWatch, 
    discount: 10, 
    price: 'Ksh 2500 - 5000', 
    w: 130 
  },
  { 
    brand: 'Infinix', 
    name: 'Infinix Buds Neo XE-26', 
    img: InfinixBuds, 
    discount: 6, 
    price: 'Ksh 2200 - 3000', 
    w: 250
  },
  { 
    brand: 'Sony', 
    name: 'Sony WH-1000XM5', 
    img: SonyHeadphones, 
    discount: 12, 
    price: 'Ksh 30k - 45k', 
    w: 170
  },
  { 
    brand: 'Apple', 
    name: 'Iphone 15 Pro Max', 
    img: IphoneImg, 
    discount: 25, 
    price: '200k - 250k',
    w: 200
    }
  ];

export const LaptopList = [
  {
    name: 'HP EliteBook 1030 G3',
    img: HpEliteBook,
    features: 'Intel Core i7 8th Gen',
    storage: '16GB RAM 512GB SSD',
    added_info: 'Touch',
    price: 'Ksh 68,000',
    discount: 10,
  },
  {
    name: 'Asus X543U',
    img: AsusLaptop,
    features: 'Intel core i5-102G1',
    storage: '8GB RAM 1TB HDD',
    price: 'Ksh 75,000',
    discount: 12,
  },
  {
    name: 'Microsoft Surface Pro 7',
    img: Surface7Pro,
    features: 'Intel Core i7 10th Gen',
    storage: '16GB RAM 256GB SSD',
    price: 'Ksh 200,000',
    discount: 8,
  },
  {
    name: 'Hp 250 G7',
    img: HpG7,
    features: 'Intel Celerob 10th Gen',
    storage: '4GB RAM 500GB HDD',
    price: 'Ksh 38,500',
    discount: 5,
  },
  {
    name: 'Lenovo IdeaPad 1 15IAU7',
    img: LenovoPad1,
    features: 'Intel Core i3 12th Gen',
    storage: '4GB RAM 256GB SSD',
    price: 'Ksh 51,000',
    discount: 15,
  },
  {
    name: 'HP EliteBook 1030 G3',
    img: HpEliteBook,
    features: 'Intel Core i7 8th Gen',
    storage: '16GB RAM 512GB SSD',
    added_info: 'Touch',
    price: 'Ksh 68,000',
    discount: 8,
  },
  {
    name: 'HP EliteBook 1030 G3',
    img: HpEliteBook,
    features: 'Intel Core i7 8th Gen',
    storage: '16GB RAM 512GB SSD',
    added_info: 'Touch',
    price: 'Ksh 68,000',
    discount: 12,
  },
  {
    name: 'HP EliteBook 1030 G3',
    img: HpEliteBook,
    features: 'Intel Core i7 8th Gen',
    storage: '16GB RAM 512GB SSD',
    added_info: 'Touch',
    price: 'Ksh 68,000',
    discount: 10,
  },
  {
    name: 'HP EliteBook 1030 G3',
    img: HpEliteBook,
    features: 'Intel Core i7 8th Gen',
    storage: '16GB RAM 512GB SSD',
    added_info: 'Touch',
    price: '68,000',
    discount: 20,
  },
]

export const AccessoriesList = [
  { 
    category: 'Apple',
    name: 'Apple Watch', 
    img: AppleWatch, 
    discount: 10, 
    price: 'Ksh 2500 - 5000', 
  },
  { 
    category: 'Infinix', 
    name: 'Infinix Buds Neo XE-26', 
    img: InfinixBuds, 
    discount: 6, 
    price: 'Ksh 2200 - 3000', 
  },
  { 
    category: 'Sony', 
    name: 'Sony WH-1000XM5', 
    img: SonyHeadphones, 
    discount: 12, 
    price: 'Ksh 30k - 45k', 
  },
  { 
    category: 'Apple', 
    name: 'Iphone 15 Pro Max', 
    img: IphoneImg, 
    discount: 25, 
    price: '200k - 250k',
    },
  { 
    category: 'Apple',
    name: 'Apple Watch', 
    img: AppleWatch, 
    discount: 10, 
    price: 'Ksh 2500 - 5000', 
  },
  { 
    category: 'Infinix', 
    name: 'Infinix Buds Neo XE-26', 
    img: InfinixBuds, 
    discount: 6, 
    price: 'Ksh 2200 - 3000', 
  },
  { 
    category: 'Sony', 
    name: 'Sony WH-1000XM5', 
    img: SonyHeadphones, 
    discount: 12, 
    price: 'Ksh 30k - 45k', 
  },
  { 
    category: 'Apple', 
    name: 'Iphone 15 Pro Max', 
    img: IphoneImg, 
    discount: 25, 
    price: '200k - 250k',
    }
]
export const LatestProductsList = [
  {
    image: SamsungS24,
    name: 'Samsung Galaxy S24',
    price: 'Ksh. 120,000 - 150,000',
    category: 'Samsung',
    discount: 8
  },
  {
    image: IphoneImg,
    name: 'Iphone 15 Pro Max',
    price: 'Ksh. 230,000 - 250,000 ',
    category: 'Iphone',
    discount: 5
  },
  {
    image: RedmiNote13,
    name: 'Redmi Note 13 Pro',
    price: 'Ksh. 80,000',
    category: 'Xiaomi',
    discount: 12
  },
  {
    image: IphoneImg,
    name: 'Iphone 15 Pro Max',
    price: 'Ksh. 230,000',
    category: 'Iphone',
    discount: 15
  },
  {
    image: RedmiNote13,
    name: 'Redmi Note 13 Pro',
    price: 'Ksh. 80,000 - 90,000',
    category: 'Xiaomi',
    discount: 20
  },
  {
    image: RedmiNote13,
    name: 'Redmi Note 13 Pro',
    price: 'Ksh. 80,000',
    category: 'Xiaomi',
    discount: 12
  },
  {
    image: IphoneImg,
    name: 'Iphone 15 Pro Max',
    price: 'Ksh. 230,000',
    category: 'Iphone',
    discount: 15
  },
  {
    image: RedmiNote13,
    name: 'Redmi Note 13 Pro',
    price: 'Ksh. 80,000',
    category: 'Xiaomi',
    discount: 20
  },
  {
    image: RedmiNote13,
    name: 'Redmi Note 13 Pro',
    price: 'Ksh. 80,000 - 90,000',
    category: 'Xiaomi',
    discount: 20
  },
  {
    image: RedmiNote13,
    name: 'Redmi Note 13 Pro',
    price: 'Ksh. 80,000',
    category: 'Xiaomi',
    discount: 12
  },
  {
    image: IphoneImg,
    name: 'Iphone 15 Pro Max',
    price: 'Ksh. 230,000',
    category: 'Iphone',
    discount: 15
  },
  {
    image: RedmiNote13,
    name: 'Redmi Note 13 Pro',
    price: 'Ksh. 80,000',
    category: 'Xiaomi',
    discount: 20
  },
]