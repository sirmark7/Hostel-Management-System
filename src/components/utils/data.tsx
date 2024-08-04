import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { MdInventory, MdOutlineShoppingCartCheckout } from "react-icons/md";

export const rooms = [

{
    name: "Room A",
    id: 1,
    price: 300.0,
    oldPrice: 0,
    hostel: "Esters Hostel",
    location: "East Legon, 123 Street",
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "standard",
    description: "Nice room",
    facilities: ["WiFi", "Air Conditioning", "Laundry Service"],
    images: ["room_a_1.jpg", "room_a_2.jpg"]
},
{
    name: "Room B",
    id: 2,
    price: 320.0,
    oldPrice: 0,
    hostel: "Esters Hostel",
    location: "East Legon, 123 Street",
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "standard",
    description: "Nice room with a view",
    facilities: ["WiFi", "Air Conditioning", "Breakfast Included"],
    images: ["room_b_1.jpg", "room_b_2.jpg"]
}
,
{
    name: "Room C",
    id: 3,
    price: 310.0,
    oldPrice: 0,
    hostel: "Esters Hostel",
    location: "East Legon, 123 Street",
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "standard",
    description: "Comfortable room",
    facilities: ["WiFi", "Air Conditioning", "Gym Access"],
    images: ["room_c_1.jpg", "room_c_2.jpg"]
},

{
    name: "Room D",
    id: 4,
    price: 305.0,
    oldPrice: 0,
    hostel: "Esters Hostel",
    location: "East Legon, 123 Street",
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "standard",
    description: "Spacious room",
    facilities: ["WiFi", "Air Conditioning", "24/7 Security"],
    images: ["room_d_1.jpg","room_a_1.jpg", "room_d_2.jpg"]
},{
    name: "Room E",
    id: 5,
    price: 315.0,
    oldPrice: 0,
    hostel: "Esters Hostel",
    location: "East Legon, 123 Street",
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "standard",
    description: "Well-lit room",
    facilities: ["WiFi", "Air Conditioning", "Parking"],
    images: ["room_e_1.jpg","room_b_1.jpg", "room_e_2.jpg"]
},{
    name: "Room F",
    id: 6,
    price: 325.0,
    oldPrice: 0,
    hostel: "Esters Hostel",
    location: "East Legon, 123 Street",
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "standard",
    description: "Room with balcony",
    facilities: ["WiFi", "Air Conditioning", "Swimming Pool"],
    images: ["room_f_1.jpg","room_c_1.jpg", "room_f_2.jpg"]
},{
    name: "Room G",
    id: 7,
    price: 330.0,
    oldPrice: 0,
    hostel: "Esters Hostel",
    location: "East Legon, 123 Street",
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "standard",
    description: "Room with en-suite bathroom",
    facilities: ["WiFi", "Air Conditioning", "Restaurant"],
    images: ["room_g_1.jpg","room_c_1.jpg" ,"room_g_2.jpg"]
},{
    name: "Room H",
    id: 8,
    price: 340.0,
    oldPrice: 0,
    hostel: "Esters Hostel",
    location: "East Legon, 123 Street",
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "standard",
    description: "Room with kitchenette",
    facilities: ["WiFi", "Air Conditioning", "Room Service"],
    images: ["room_a_3.jpg", "room_b_2.jpg","room_h_1.jpg", "room_h_2.jpg"]
},{
    name: "Room I",
    id: 9,
    price: 335.0,
    oldPrice: 0,
    hostel: "Esters Hostel",
    location: "East Legon, 123 Street",
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "standard",
    description: "Room with study area",
    facilities: ["WiFi", "Air Conditioning", "Library Access"],
    images: ["room_a_1.jpg", "room_b_3.jpg","room_i_1.jpg", "room_i_2.jpg"]
},

{
    name: "Room J",
    id: 10,
    price: 345.0,
    oldPrice: 0,
    hostel: "Esters Hostel",
    location: "East Legon, 123 Street",
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "standard",
    description: "Luxurious room",
    facilities: ["WiFi", "Air Conditioning", "Spa Access"],
    images: ["room_d_1.jpg", "room_c_2.jpg","room_j_1.jpg", "room_j_2.jpg"]
}
];

export const accountNavItems= [
  {
    name: "Your Sahara Account",
    path: "profile",
    mode: "",
  },
  {
    name: "Orders",
    path: "orders",
    mode: "",
  },
  {
    name: "Saved Items",
    path: "wishlist",
    mode: "",
  },
];
export const CustomerServiceNavItems= [
  {
    name: "CUSTOMER SERVICE",
    alt: "CUSTOMER",
    path: "",
    mode: "",
  },
  {
    name: "CONTACT US",
    path: "contact_us",
    alt: "CONACT",
    mode: "",
  },
  {
    name: "RETURNS",
    alt: "RETURNS",
    path: "returns",
    mode: "",
  },
  {
    name: "SHIPPING INFORMATION",
    alt: "SHIPPING",
    path: "shipping",
    mode: "",
  },
  {
    name: "FAQs",
    path: "faqs",
    mode: "",
  },
  {
    name: "PRIVACY",
    alt: "PRIVACY",
    path: "privacy",
    mode: "",
  },
  {
    name: "TERMS OF USE",
    alt: "TERMS",
    path: "terms_of_use",
    mode: "",
  },
];

export const mainNavItems= [
  {
    name: "Home",
    path: "/",
    mode: "active",
  },
  {
    name: "Hostels",
    path: "/hostels",
    mode: "",
  },
];

export const testimonies = [

{
    testimony: "Using MJ Hostels made finding and booking a place to stay so easy. The app is user-friendly and has great options.",
    customer: "John D."
}
,
{
    testimony: "I had a fantastic experience booking through MJ Hostels. The selection of hostels is impressive, and the booking process is seamless.",
    customer: "Sarah W."
}
,
{
    testimony: "MJ Hostels exceeded my expectations. I found the perfect hostel quickly, and the app provided all the information I needed.",
    customer: "Alex P."
}
];

export const socialLinks = [
  {
    path: "https://instagram.com",
  },
  {
    path: "https://x.com",
  },
  {
    path: "https://tiktok.com",
  },
  {
    path: "https://facebook.com",
  },
  {
    path: "https://youtube.com",
  },
];

export const filterCard = [
  {
    id: 1,
    title: "Price",
    options: [
      { label: `Under ₵50 `, name: "50", value: "end-50" },
      { label: "₵50 to ₵100", name: "50-100", value: "start-50:end-100" },
      { label: "₵100 to ₵500", name: "100-500", value: "start-100:end-500" },
      { label: "Above ₵500", name: "500", value: "start-500" },
    ],
  },
];

export const allReviews = [
  {
    rating: 4,
    name: "Kerk Leo",
    timeStamp: "3 months ago",
    image: "product-7_1.png",
    title: "Great product",
    review:
      "Lorem ipsum dolor sit amet consectetur. Aliquam dolor sed vivamus suspendisse dui aliquam nisl gravida. Nibh laoreet sapien enim consectetur lorem congue dui amet at.",
  },
  {
    rating: 4,
    name: "Kofi Manu",
    image: "product-3_2.png",
    timeStamp: "3 hours ago",
    title: "Not good for my skin",
    review:
      "Lorem ipsum dolor sit amet consectetur. Aliquam dolor sed vivamus suspendisse dui aliquam nisl gravida. Nibh laoreet sapien enim consectetur lorem congue dui amet at.",
  },
  {
    rating: 4,
    name: "Eno Mansah",
    timeStamp: "3 hours ago",
    image: "product-1_2.png",
    title: "",
    review: "",
  },
];

export const userInfo= {
  personalInfo: {
    name: "N. Noel Emmanuel",
    email: "nneuid@gmail.com",
    password: "Change Password",
  },
  shippingInfo: {
    name: "N. Noel Emmanuel",
    email: "nneuid@gmail.com",
    phone: "+1234567890",
    country: "Country goes here",
    address: "Address goes here",
    region: "city goes her",
    city: "city goes here",
  },
};

export const profile = {
  personalInfo: [
    {
      name: "name",
      label: "",
      type: "text",
    },
    {
      name: "email",
      label: "",
      type: "email",
    },
    {
      name: "password",
      label: "",
      type: "password",
    },
  ],
  shippingInfo: [
    {
      name: "name",
      label: "",
      type: "name",
    },
    {
      name: "email",
      label: "",
      type: "email",
    },
    {
      name: "phone",
      label: "",
      type: "tel",
    },
    {
      name: "country",
      label: "",
      type: "country",
    },
    {
      name: "address",
      label: "",
      type: "address",
    },
    {
      name: "region",
      label: "",
      type: "region",
    },
    {
      name: "city",
      label: "",
      type: "city",
    },
  ],
};


export const orders = [
  {
    image: "product-1_1.png",
    name: "THE GIFT OF ALL GIFTS: FENTY EAU DE PARFUM + FREE FENTY ICON LIPSTICK SET",
    id: 1,
    orderId: 1234,
    status: "Delivered",
    date: "june 10, 2023",
    total: 500.0,
  },
  {
    image: "product-2_1.png",
    id: 2,
    orderId: 2234,
    name: "THE GIFT OF ALL GIFTS: FENTY EAU DE PARFUM + FREE FENTY ICON LIPSTICK SET",
    status: "in progress",
    date: "june 20, 2023",
    total: 500.0,
  },
  {
    image: "product-3_1.png",
    id: 3,
    orderId: 3421,
    name: "THE GIFT OF ALL GIFTS: FENTY EAU DE PARFUM + FREE FENTY ICON LIPSTICK SET",
    status: "cancelled",
    date: "march 20, 2023",
    total: 500.0,
  },
];

export const wishlist = [
{
    name: "Room A",
    id: 1,
    price: 300.0,
    oldPrice: 0,
    hostel: "Esters Hostel",
    location: "East Legon, 123 Street",
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "standard",
    description: "Nice room",
    facilities: ["WiFi", "Air Conditioning", "Laundry Service"],
    images: ["room_a_1.jpg", "room_a_2.jpg"]
}
,
{
    name: "Room C",
    id: 3,
    price: 310.0,
    oldPrice: 0,
    hostel: "Esters Hostel",
    location: "East Legon, 123 Street",
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "standard",
    description: "Comfortable room",
    facilities: ["WiFi", "Air Conditioning", "Gym Access"],
    images: ["room_c_1.jpg", "room_c_2.jpg"]
},

{
    name: "Room D",
    id: 4,
    price: 305.0,
    oldPrice: 0,
    hostel: "Esters Hostel",
    location: "East Legon, 123 Street",
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "standard",
    description: "Spacious room",
    facilities: ["WiFi", "Air Conditioning", "24/7 Security"],
    images: ["room_d_1.jpg", "room_d_2.jpg"]
},{
    name: "Room F",
    id: 6,
    price: 325.0,
    oldPrice: 0,
    hostel: "Esters Hostel",
    location: "East Legon, 123 Street",
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "standard",
    description: "Room with balcony",
    facilities: ["WiFi", "Air Conditioning", "Swimming Pool"],
    images: ["room_f_1.jpg", "room_f_2.jpg"]
},{
    name: "Room G",
    id: 7,
    price: 330.0,
    oldPrice: 0,
    hostel: "Esters Hostel",
    location: "East Legon, 123 Street",
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "standard",
    description: "Room with en-suite bathroom",
    facilities: ["WiFi", "Air Conditioning", "Restaurant"],
    images: ["room_g_1.jpg", "room_g_2.jpg"]
},

];

export const faqs = [
  {
    heading: "SHIPPING/ORDER STATUS",
    questions: [
      {
        title: "WHERE CAN I GET SAHARA PRODUCTS IN GHANA?",
        text: "",
      },
      {
        title: "WHEN CAN I GET PRODUCTS THAT ARE OUT OF STOCK?",
        text: "",
      },
      {
        title: "WHERE CAN I GET SAHARA PRODUCTS INTERNATIONALLY?",
        text: "",
      },
      {
        title: "HOW DO I QUALIFY FOR FREE SHIPPING?",
        text: "",
      },
    ],
  },
  {
    heading: "RETURNS",
    questions: [
      {
        title: "WHERE CAN I GET SAHARA PRODUCTS IN GHANA?",
        text: "",
      },
      {
        title: "WHEN CAN I GET PRODUCTS THAT ARE OUT OF STOCK?",
        text: "",
      },
      {
        title: "WHERE CAN I GET SAHARA PRODUCTS INTERNATIONALLY?",
        text: "",
      },
      {
        title: "HOW DO I QUALIFY FOR FREE SHIPPING?",
        text: "",
      },
    ],
  },
];

export const cards = (categories, items) => [
  {
    title: "Items",
    icon: <MdInventory />,
    value: items.length,
    path: "/admin/items",
  },
  {
    title: "Categories",
    icon: <BsFillGridFill />,
    value: categories.length,
    path: "/admin/categories",
  },
  {
    title: "Orders",
    icon: <MdOutlineShoppingCartCheckout />,
    value: 0,
    path: "/admin/orders",
  },
];

// Call-to-Action

// Explore More Products
// Take a deeper dive into our diverse collection of skincare wonders. Find the perfect products to suit your unique needs and embrace the beauty of nature. Let's get started!

// Footer
// About Us
// Contact
// FAQs
// Privacy Policy
// Terms of Service
