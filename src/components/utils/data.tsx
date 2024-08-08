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
    slot:2,
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
    slot:2,
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
    slot:2,
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
    slot:2,
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
    slot:2,
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
    slot:2,
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "luxury",
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
    slot:2,
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "luxury",
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
    slot:2,
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
    slot:2,
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "executive",
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
    slot:2,
    occupancy: 2,
    stars: [1, 1, 1, 1, 1],
    category: "executive",
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
    path: "customer_service",
    mode: "",
    text:`Lorem ipsum dolor sit amet consectetur. Pharetra non mattis sagittis tellus auctor feugiat cras amet. Lobortis habitant eget convallis nibh ipsum velit. Turpis pellentesque vivamus donec tempus turpis. Ornare condimentum accumsan morbi tristique tincidunt pellentesque ut. Nunc in id tempus tellus enim urna eros felis eget. Vulputate accumsan quam posuere sagittis dolor amet.
Cursus massa ullamcorper semper non habitant amet ac in non. Eu sodales aliquet pulvinar lacus auctor duis. Accumsan lectus nec enim amet mauris posuere. Donec ut sem ipsum tortor integer. Morbi cras pretium aliquam libero tellus pellentesque eu integer at. Netus non ac phasellus accumsan orci purus. Aenean congue tellus auctor eget quis aliquet nunc etiam. Ornare vitae blandit lobortis vulputate nunc vestibulum proin quam ligula. Sed enim ullamcorper sollicitudin neque tempus turpis facilisis. Elementum nunc neque rhoncus nunc cursus lorem.
Fermentum sem urna vestibulum consequat velit eget enim orci tristique. Sit ultrices nulla porta hac. Quisque laoreet vitae varius consectetur ullamcorper at imperdiet tempor. Sed accumsan dictumst egestas nec etiam cursus. Faucibus odio arcu vitae proin tortor posuere.
Scelerisque eget pretium sem lorem mollis egestas. Eu tempor ut eu a morbi quis orci venenatis. Euismod tortor ultrices egestas placerat convallis pellentesque vivamus pharetra. Est morbi faucibus purus a feugiat mi molestie eu. Malesuada nunc mauris sed risus bibendum habitant sed.
Magna pretium leo mauris purus condimentum in in facilisi. Tellus viverra convallis leo arcu viverra interdum elementum rhoncus. Lorem quisque mattis aenean facilisi. Enim nisi diam luctus quis tellus elementum lorem vitae. Molestie lectus parturient quisque enim. Pretium quis scelerisque vel aliquet ipsum pretium pellentesque sagittis. Sociis elementum sit magnis tortor a auctor convallis vitae arcu. Auctor eget lorem blandit habitasse fermentum at.
Natoque nam ut consequat orci. Pretium nibh sit est scelerisque nunc lorem. Diam eget feugiat nec nulla nisi. Aliquam vulputate scelerisque non gravida neque in. Consectetur scelerisque blandit ultrices ut gravida vulputate quis blandit quis. Faucibus metus aliquam sapien mauris aliquet diam dui elementum dignissim. Amet praesent ut enim egestas feugiat facilisis risus. Euismod facilisi ornare eget diam mi.
Ut sed viverra etiam ac commodo auctor id. Enim mauris semper feugiat justo ut sed diam. Eu cursus tellus iaculis nisl purus lacus. Ut suspendisse egestas elementum enim sem. Semper pellentesque at tempor risus vel. Urna eget dictum amet nunc sagittis volutpat est. Aliquet tempus rhoncus fermentum malesuada vitae facilisi. Iaculis dolor viverra amet sed.
Imperdiet est urna in mauris amet enim velit sagittis duis. Sed eget justo id malesuada nibh mauris. Diam cursus lectus varius gravida at aliquam blandit ornare quisque. Quam massa auctor neque lorem. At egestas nibh iaculis donec viverra velit enim. Vulputate nec rhoncus facilisis ligula amet. Sapien lectus mauris dignissim fames quis est viverra aliquam. Rhoncus turpis quisque tortor porta augue ullamcorper imperdiet et lacus. Purus pulvinar ut dignissim ac vitae dolor mattis integer viverra. Faucibus posuere in elementum molestie faucibus leo praesent. Sollicitudin nam ultricies diam viverra in risus consectetur molestie neque.
Mi mauris cursus sit tellus lectus libero vitae sit. Dictum leo risus aenean quis cras eget ac nec. A sed blandit lectus vulputate massa consequat. Ut tristique sapien pellentesque turpis magnis. Diam non fermentum vitae mattis non id suscipit. Vitae lorem eget hac mus rhoncus. Quam augue est nibh viverra. In enim at laoreet sociis pellentesque sit ut. Orci lectus blandit sit elementum at. A morbi vestibulum pellentesque tortor aliquet. Feugiat proin risus at ullamcorper id. Suscipit aliquet vitae mollis elementum mattis odio et id pellentesque. Fames aliquam in blandit arcu. Dignissim rhoncus sit lectus ac nunc. Euismod volutpat ut sed massa sed facilisis tortor elit.
Sed nisi fermentum duis tristique mauris et eu phasellus accumsan. Tincidunt quis quisque pulvinar scelerisque sit eleifend adipiscing. Risus amet vestibulum ut quam tempor. Pulvinar dignissim suscipit sit vitae sem nunc purus massa. Nunc tincidunt ultrices quis ac in. Justo vitae nunc in diam lacus consequat lacus. Velit posuere fringilla interdum sit ut. Pellentesque semper quis odio risus leo turpis sem ac. Ac elit at mattis sed tristique eu arcu in. Commodo facilisi orci lectus mauris. Dignissim id dolor eleifend bibendum metus. Feugiat iaculis ornare at nulla vestibulum laoreet sit. Netus leo nulla ultrices amet.`
  },
  {
    name: "CONTACT US",
    path: "contact_us",
    alt: "CONACT",
    mode: "",
    text:`Lorem ipsum dolor sit amet consectetur. Pharetra non mattis sagittis tellus auctor feugiat cras amet. Lobortis habitant eget convallis nibh ipsum velit. Turpis pellentesque vivamus donec tempus turpis. Ornare condimentum accumsan morbi tristique tincidunt pellentesque ut. Nunc in id tempus tellus enim urna eros felis eget. Vulputate accumsan quam posuere sagittis dolor amet.
Cursus massa ullamcorper semper non habitant amet ac in non. Eu sodales aliquet pulvinar lacus auctor duis. Accumsan lectus nec enim amet mauris posuere. Donec ut sem ipsum tortor integer. Morbi cras pretium aliquam libero tellus pellentesque eu integer at. Netus non ac phasellus accumsan orci purus. Aenean congue tellus auctor eget quis aliquet nunc etiam. Ornare vitae blandit lobortis vulputate nunc vestibulum proin quam ligula. Sed enim ullamcorper sollicitudin neque tempus turpis facilisis. Elementum nunc neque rhoncus nunc cursus lorem.
Fermentum sem urna vestibulum consequat velit eget enim orci tristique. Sit ultrices nulla porta hac. Quisque laoreet vitae varius consectetur ullamcorper at imperdiet tempor. Sed accumsan dictumst egestas nec etiam cursus. Faucibus odio arcu vitae proin tortor posuere.
Scelerisque eget pretium sem lorem mollis egestas. Eu tempor ut eu a morbi quis orci venenatis. Euismod tortor ultrices egestas placerat convallis pellentesque vivamus pharetra. Est morbi faucibus purus a feugiat mi molestie eu. Malesuada nunc mauris sed risus bibendum habitant sed.
Magna pretium leo mauris purus condimentum in in facilisi. Tellus viverra convallis leo arcu viverra interdum elementum rhoncus. Lorem quisque mattis aenean facilisi. Enim nisi diam luctus quis tellus elementum lorem vitae. Molestie lectus parturient quisque enim. Pretium quis scelerisque vel aliquet ipsum pretium pellentesque sagittis. Sociis elementum sit magnis tortor a auctor convallis vitae arcu. Auctor eget lorem blandit habitasse fermentum at.
Natoque nam ut consequat orci. Pretium nibh sit est scelerisque nunc lorem. Diam eget feugiat nec nulla nisi. Aliquam vulputate scelerisque non gravida neque in. Consectetur scelerisque blandit ultrices ut gravida vulputate quis blandit quis. Faucibus metus aliquam sapien mauris aliquet diam dui elementum dignissim. Amet praesent ut enim egestas feugiat facilisis risus. Euismod facilisi ornare eget diam mi.
Ut sed viverra etiam ac commodo auctor id. Enim mauris semper feugiat justo ut sed diam. Eu cursus tellus iaculis nisl purus lacus. Ut suspendisse egestas elementum enim sem. Semper pellentesque at tempor risus vel. Urna eget dictum amet nunc sagittis volutpat est. Aliquet tempus rhoncus fermentum malesuada vitae facilisi. Iaculis dolor viverra amet sed.
Imperdiet est urna in mauris amet enim velit sagittis duis. Sed eget justo id malesuada nibh mauris. Diam cursus lectus varius gravida at aliquam blandit ornare quisque. Quam massa auctor neque lorem. At egestas nibh iaculis donec viverra velit enim. Vulputate nec rhoncus facilisis ligula amet. Sapien lectus mauris dignissim fames quis est viverra aliquam. Rhoncus turpis quisque tortor porta augue ullamcorper imperdiet et lacus. Purus pulvinar ut dignissim ac vitae dolor mattis integer viverra. Faucibus posuere in elementum molestie faucibus leo praesent. Sollicitudin nam ultricies diam viverra in risus consectetur molestie neque.
Mi mauris cursus sit tellus lectus libero vitae sit. Dictum leo risus aenean quis cras eget ac nec. A sed blandit lectus vulputate massa consequat. Ut tristique sapien pellentesque turpis magnis. Diam non fermentum vitae mattis non id suscipit. Vitae lorem eget hac mus rhoncus. Quam augue est nibh viverra. In enim at laoreet sociis pellentesque sit ut. Orci lectus blandit sit elementum at. A morbi vestibulum pellentesque tortor aliquet. Feugiat proin risus at ullamcorper id. Suscipit aliquet vitae mollis elementum mattis odio et id pellentesque. Fames aliquam in blandit arcu. Dignissim rhoncus sit lectus ac nunc. Euismod volutpat ut sed massa sed facilisis tortor elit.
Sed nisi fermentum duis tristique mauris et eu phasellus accumsan. Tincidunt quis quisque pulvinar scelerisque sit eleifend adipiscing. Risus amet vestibulum ut quam tempor. Pulvinar dignissim suscipit sit vitae sem nunc purus massa. Nunc tincidunt ultrices quis ac in. Justo vitae nunc in diam lacus consequat lacus. Velit posuere fringilla interdum sit ut. Pellentesque semper quis odio risus leo turpis sem ac. Ac elit at mattis sed tristique eu arcu in. Commodo facilisi orci lectus mauris. Dignissim id dolor eleifend bibendum metus. Feugiat iaculis ornare at nulla vestibulum laoreet sit. Netus leo nulla ultrices amet.`
  },
  {
    name: "RETURNS",
    alt: "RETURNS",
    path: "returns",
    mode: "",
    text:`Lorem ipsum dolor sit amet consectetur. Pharetra non mattis sagittis tellus auctor feugiat cras amet. Lobortis habitant eget convallis nibh ipsum velit. Turpis pellentesque vivamus donec tempus turpis. Ornare condimentum accumsan morbi tristique tincidunt pellentesque ut. Nunc in id tempus tellus enim urna eros felis eget. Vulputate accumsan quam posuere sagittis dolor amet.
Cursus massa ullamcorper semper non habitant amet ac in non. Eu sodales aliquet pulvinar lacus auctor duis. Accumsan lectus nec enim amet mauris posuere. Donec ut sem ipsum tortor integer. Morbi cras pretium aliquam libero tellus pellentesque eu integer at. Netus non ac phasellus accumsan orci purus. Aenean congue tellus auctor eget quis aliquet nunc etiam. Ornare vitae blandit lobortis vulputate nunc vestibulum proin quam ligula. Sed enim ullamcorper sollicitudin neque tempus turpis facilisis. Elementum nunc neque rhoncus nunc cursus lorem.
Fermentum sem urna vestibulum consequat velit eget enim orci tristique. Sit ultrices nulla porta hac. Quisque laoreet vitae varius consectetur ullamcorper at imperdiet tempor. Sed accumsan dictumst egestas nec etiam cursus. Faucibus odio arcu vitae proin tortor posuere.
Scelerisque eget pretium sem lorem mollis egestas. Eu tempor ut eu a morbi quis orci venenatis. Euismod tortor ultrices egestas placerat convallis pellentesque vivamus pharetra. Est morbi faucibus purus a feugiat mi molestie eu. Malesuada nunc mauris sed risus bibendum habitant sed.
Magna pretium leo mauris purus condimentum in in facilisi. Tellus viverra convallis leo arcu viverra interdum elementum rhoncus. Lorem quisque mattis aenean facilisi. Enim nisi diam luctus quis tellus elementum lorem vitae. Molestie lectus parturient quisque enim. Pretium quis scelerisque vel aliquet ipsum pretium pellentesque sagittis. Sociis elementum sit magnis tortor a auctor convallis vitae arcu. Auctor eget lorem blandit habitasse fermentum at.
Natoque nam ut consequat orci. Pretium nibh sit est scelerisque nunc lorem. Diam eget feugiat nec nulla nisi. Aliquam vulputate scelerisque non gravida neque in. Consectetur scelerisque blandit ultrices ut gravida vulputate quis blandit quis. Faucibus metus aliquam sapien mauris aliquet diam dui elementum dignissim. Amet praesent ut enim egestas feugiat facilisis risus. Euismod facilisi ornare eget diam mi.
Ut sed viverra etiam ac commodo auctor id. Enim mauris semper feugiat justo ut sed diam. Eu cursus tellus iaculis nisl purus lacus. Ut suspendisse egestas elementum enim sem. Semper pellentesque at tempor risus vel. Urna eget dictum amet nunc sagittis volutpat est. Aliquet tempus rhoncus fermentum malesuada vitae facilisi. Iaculis dolor viverra amet sed.
Imperdiet est urna in mauris amet enim velit sagittis duis. Sed eget justo id malesuada nibh mauris. Diam cursus lectus varius gravida at aliquam blandit ornare quisque. Quam massa auctor neque lorem. At egestas nibh iaculis donec viverra velit enim. Vulputate nec rhoncus facilisis ligula amet. Sapien lectus mauris dignissim fames quis est viverra aliquam. Rhoncus turpis quisque tortor porta augue ullamcorper imperdiet et lacus. Purus pulvinar ut dignissim ac vitae dolor mattis integer viverra. Faucibus posuere in elementum molestie faucibus leo praesent. Sollicitudin nam ultricies diam viverra in risus consectetur molestie neque.
Mi mauris cursus sit tellus lectus libero vitae sit. Dictum leo risus aenean quis cras eget ac nec. A sed blandit lectus vulputate massa consequat. Ut tristique sapien pellentesque turpis magnis. Diam non fermentum vitae mattis non id suscipit. Vitae lorem eget hac mus rhoncus. Quam augue est nibh viverra. In enim at laoreet sociis pellentesque sit ut. Orci lectus blandit sit elementum at. A morbi vestibulum pellentesque tortor aliquet. Feugiat proin risus at ullamcorper id. Suscipit aliquet vitae mollis elementum mattis odio et id pellentesque. Fames aliquam in blandit arcu. Dignissim rhoncus sit lectus ac nunc. Euismod volutpat ut sed massa sed facilisis tortor elit.
Sed nisi fermentum duis tristique mauris et eu phasellus accumsan. Tincidunt quis quisque pulvinar scelerisque sit eleifend adipiscing. Risus amet vestibulum ut quam tempor. Pulvinar dignissim suscipit sit vitae sem nunc purus massa. Nunc tincidunt ultrices quis ac in. Justo vitae nunc in diam lacus consequat lacus. Velit posuere fringilla interdum sit ut. Pellentesque semper quis odio risus leo turpis sem ac. Ac elit at mattis sed tristique eu arcu in. Commodo facilisi orci lectus mauris. Dignissim id dolor eleifend bibendum metus. Feugiat iaculis ornare at nulla vestibulum laoreet sit. Netus leo nulla ultrices amet.`
  },
  // {
  //   name: "SHIPPING INFORMATION",
  //   alt: "SHIPPING",
  //   path: "shipping",
  //   mode: "",
//   text:`Lorem ipsum dolor sit amet consectetur. Pharetra non mattis sagittis tellus auctor feugiat cras amet. Lobortis habitant eget convallis nibh ipsum velit. Turpis pellentesque vivamus donec tempus turpis. Ornare condimentum accumsan morbi tristique tincidunt pellentesque ut. Nunc in id tempus tellus enim urna eros felis eget. Vulputate accumsan quam posuere sagittis dolor amet.
// Cursus massa ullamcorper semper non habitant amet ac in non. Eu sodales aliquet pulvinar lacus auctor duis. Accumsan lectus nec enim amet mauris posuere. Donec ut sem ipsum tortor integer. Morbi cras pretium aliquam libero tellus pellentesque eu integer at. Netus non ac phasellus accumsan orci purus. Aenean congue tellus auctor eget quis aliquet nunc etiam. Ornare vitae blandit lobortis vulputate nunc vestibulum proin quam ligula. Sed enim ullamcorper sollicitudin neque tempus turpis facilisis. Elementum nunc neque rhoncus nunc cursus lorem.
// Fermentum sem urna vestibulum consequat velit eget enim orci tristique. Sit ultrices nulla porta hac. Quisque laoreet vitae varius consectetur ullamcorper at imperdiet tempor. Sed accumsan dictumst egestas nec etiam cursus. Faucibus odio arcu vitae proin tortor posuere.
// Scelerisque eget pretium sem lorem mollis egestas. Eu tempor ut eu a morbi quis orci venenatis. Euismod tortor ultrices egestas placerat convallis pellentesque vivamus pharetra. Est morbi faucibus purus a feugiat mi molestie eu. Malesuada nunc mauris sed risus bibendum habitant sed.
// Magna pretium leo mauris purus condimentum in in facilisi. Tellus viverra convallis leo arcu viverra interdum elementum rhoncus. Lorem quisque mattis aenean facilisi. Enim nisi diam luctus quis tellus elementum lorem vitae. Molestie lectus parturient quisque enim. Pretium quis scelerisque vel aliquet ipsum pretium pellentesque sagittis. Sociis elementum sit magnis tortor a auctor convallis vitae arcu. Auctor eget lorem blandit habitasse fermentum at.
// Natoque nam ut consequat orci. Pretium nibh sit est scelerisque nunc lorem. Diam eget feugiat nec nulla nisi. Aliquam vulputate scelerisque non gravida neque in. Consectetur scelerisque blandit ultrices ut gravida vulputate quis blandit quis. Faucibus metus aliquam sapien mauris aliquet diam dui elementum dignissim. Amet praesent ut enim egestas feugiat facilisis risus. Euismod facilisi ornare eget diam mi.
// Ut sed viverra etiam ac commodo auctor id. Enim mauris semper feugiat justo ut sed diam. Eu cursus tellus iaculis nisl purus lacus. Ut suspendisse egestas elementum enim sem. Semper pellentesque at tempor risus vel. Urna eget dictum amet nunc sagittis volutpat est. Aliquet tempus rhoncus fermentum malesuada vitae facilisi. Iaculis dolor viverra amet sed.
// Imperdiet est urna in mauris amet enim velit sagittis duis. Sed eget justo id malesuada nibh mauris. Diam cursus lectus varius gravida at aliquam blandit ornare quisque. Quam massa auctor neque lorem. At egestas nibh iaculis donec viverra velit enim. Vulputate nec rhoncus facilisis ligula amet. Sapien lectus mauris dignissim fames quis est viverra aliquam. Rhoncus turpis quisque tortor porta augue ullamcorper imperdiet et lacus. Purus pulvinar ut dignissim ac vitae dolor mattis integer viverra. Faucibus posuere in elementum molestie faucibus leo praesent. Sollicitudin nam ultricies diam viverra in risus consectetur molestie neque.
// Mi mauris cursus sit tellus lectus libero vitae sit. Dictum leo risus aenean quis cras eget ac nec. A sed blandit lectus vulputate massa consequat. Ut tristique sapien pellentesque turpis magnis. Diam non fermentum vitae mattis non id suscipit. Vitae lorem eget hac mus rhoncus. Quam augue est nibh viverra. In enim at laoreet sociis pellentesque sit ut. Orci lectus blandit sit elementum at. A morbi vestibulum pellentesque tortor aliquet. Feugiat proin risus at ullamcorper id. Suscipit aliquet vitae mollis elementum mattis odio et id pellentesque. Fames aliquam in blandit arcu. Dignissim rhoncus sit lectus ac nunc. Euismod volutpat ut sed massa sed facilisis tortor elit.
// Sed nisi fermentum duis tristique mauris et eu phasellus accumsan. Tincidunt quis quisque pulvinar scelerisque sit eleifend adipiscing. Risus amet vestibulum ut quam tempor. Pulvinar dignissim suscipit sit vitae sem nunc purus massa. Nunc tincidunt ultrices quis ac in. Justo vitae nunc in diam lacus consequat lacus. Velit posuere fringilla interdum sit ut. Pellentesque semper quis odio risus leo turpis sem ac. Ac elit at mattis sed tristique eu arcu in. Commodo facilisi orci lectus mauris. Dignissim id dolor eleifend bibendum metus. Feugiat iaculis ornare at nulla vestibulum laoreet sit. Netus leo nulla ultrices amet.`
//   // },
  {
    name: "FAQs",
    path: "faqs",
    mode: "",
    text:`Lorem ipsum dolor sit amet consectetur. Pharetra non mattis sagittis tellus auctor feugiat cras amet. Lobortis habitant eget convallis nibh ipsum velit. Turpis pellentesque vivamus donec tempus turpis. Ornare condimentum accumsan morbi tristique tincidunt pellentesque ut. Nunc in id tempus tellus enim urna eros felis eget. Vulputate accumsan quam posuere sagittis dolor amet.
Cursus massa ullamcorper semper non habitant amet ac in non. Eu sodales aliquet pulvinar lacus auctor duis. Accumsan lectus nec enim amet mauris posuere. Donec ut sem ipsum tortor integer. Morbi cras pretium aliquam libero tellus pellentesque eu integer at. Netus non ac phasellus accumsan orci purus. Aenean congue tellus auctor eget quis aliquet nunc etiam. Ornare vitae blandit lobortis vulputate nunc vestibulum proin quam ligula. Sed enim ullamcorper sollicitudin neque tempus turpis facilisis. Elementum nunc neque rhoncus nunc cursus lorem.
Fermentum sem urna vestibulum consequat velit eget enim orci tristique. Sit ultrices nulla porta hac. Quisque laoreet vitae varius consectetur ullamcorper at imperdiet tempor. Sed accumsan dictumst egestas nec etiam cursus. Faucibus odio arcu vitae proin tortor posuere.
Scelerisque eget pretium sem lorem mollis egestas. Eu tempor ut eu a morbi quis orci venenatis. Euismod tortor ultrices egestas placerat convallis pellentesque vivamus pharetra. Est morbi faucibus purus a feugiat mi molestie eu. Malesuada nunc mauris sed risus bibendum habitant sed.
Magna pretium leo mauris purus condimentum in in facilisi. Tellus viverra convallis leo arcu viverra interdum elementum rhoncus. Lorem quisque mattis aenean facilisi. Enim nisi diam luctus quis tellus elementum lorem vitae. Molestie lectus parturient quisque enim. Pretium quis scelerisque vel aliquet ipsum pretium pellentesque sagittis. Sociis elementum sit magnis tortor a auctor convallis vitae arcu. Auctor eget lorem blandit habitasse fermentum at.
Natoque nam ut consequat orci. Pretium nibh sit est scelerisque nunc lorem. Diam eget feugiat nec nulla nisi. Aliquam vulputate scelerisque non gravida neque in. Consectetur scelerisque blandit ultrices ut gravida vulputate quis blandit quis. Faucibus metus aliquam sapien mauris aliquet diam dui elementum dignissim. Amet praesent ut enim egestas feugiat facilisis risus. Euismod facilisi ornare eget diam mi.
Ut sed viverra etiam ac commodo auctor id. Enim mauris semper feugiat justo ut sed diam. Eu cursus tellus iaculis nisl purus lacus. Ut suspendisse egestas elementum enim sem. Semper pellentesque at tempor risus vel. Urna eget dictum amet nunc sagittis volutpat est. Aliquet tempus rhoncus fermentum malesuada vitae facilisi. Iaculis dolor viverra amet sed.
Imperdiet est urna in mauris amet enim velit sagittis duis. Sed eget justo id malesuada nibh mauris. Diam cursus lectus varius gravida at aliquam blandit ornare quisque. Quam massa auctor neque lorem. At egestas nibh iaculis donec viverra velit enim. Vulputate nec rhoncus facilisis ligula amet. Sapien lectus mauris dignissim fames quis est viverra aliquam. Rhoncus turpis quisque tortor porta augue ullamcorper imperdiet et lacus. Purus pulvinar ut dignissim ac vitae dolor mattis integer viverra. Faucibus posuere in elementum molestie faucibus leo praesent. Sollicitudin nam ultricies diam viverra in risus consectetur molestie neque.
Mi mauris cursus sit tellus lectus libero vitae sit. Dictum leo risus aenean quis cras eget ac nec. A sed blandit lectus vulputate massa consequat. Ut tristique sapien pellentesque turpis magnis. Diam non fermentum vitae mattis non id suscipit. Vitae lorem eget hac mus rhoncus. Quam augue est nibh viverra. In enim at laoreet sociis pellentesque sit ut. Orci lectus blandit sit elementum at. A morbi vestibulum pellentesque tortor aliquet. Feugiat proin risus at ullamcorper id. Suscipit aliquet vitae mollis elementum mattis odio et id pellentesque. Fames aliquam in blandit arcu. Dignissim rhoncus sit lectus ac nunc. Euismod volutpat ut sed massa sed facilisis tortor elit.
Sed nisi fermentum duis tristique mauris et eu phasellus accumsan. Tincidunt quis quisque pulvinar scelerisque sit eleifend adipiscing. Risus amet vestibulum ut quam tempor. Pulvinar dignissim suscipit sit vitae sem nunc purus massa. Nunc tincidunt ultrices quis ac in. Justo vitae nunc in diam lacus consequat lacus. Velit posuere fringilla interdum sit ut. Pellentesque semper quis odio risus leo turpis sem ac. Ac elit at mattis sed tristique eu arcu in. Commodo facilisi orci lectus mauris. Dignissim id dolor eleifend bibendum metus. Feugiat iaculis ornare at nulla vestibulum laoreet sit. Netus leo nulla ultrices amet.`
  },
  {
    name: "PRIVACY",
    alt: "PRIVACY",
    path: "privacy",
    mode: "",
    text:`Lorem ipsum dolor sit amet consectetur. Pharetra non mattis sagittis tellus auctor feugiat cras amet. Lobortis habitant eget convallis nibh ipsum velit. Turpis pellentesque vivamus donec tempus turpis. Ornare condimentum accumsan morbi tristique tincidunt pellentesque ut. Nunc in id tempus tellus enim urna eros felis eget. Vulputate accumsan quam posuere sagittis dolor amet.
Cursus massa ullamcorper semper non habitant amet ac in non. Eu sodales aliquet pulvinar lacus auctor duis. Accumsan lectus nec enim amet mauris posuere. Donec ut sem ipsum tortor integer. Morbi cras pretium aliquam libero tellus pellentesque eu integer at. Netus non ac phasellus accumsan orci purus. Aenean congue tellus auctor eget quis aliquet nunc etiam. Ornare vitae blandit lobortis vulputate nunc vestibulum proin quam ligula. Sed enim ullamcorper sollicitudin neque tempus turpis facilisis. Elementum nunc neque rhoncus nunc cursus lorem.
Fermentum sem urna vestibulum consequat velit eget enim orci tristique. Sit ultrices nulla porta hac. Quisque laoreet vitae varius consectetur ullamcorper at imperdiet tempor. Sed accumsan dictumst egestas nec etiam cursus. Faucibus odio arcu vitae proin tortor posuere.
Scelerisque eget pretium sem lorem mollis egestas. Eu tempor ut eu a morbi quis orci venenatis. Euismod tortor ultrices egestas placerat convallis pellentesque vivamus pharetra. Est morbi faucibus purus a feugiat mi molestie eu. Malesuada nunc mauris sed risus bibendum habitant sed.
Magna pretium leo mauris purus condimentum in in facilisi. Tellus viverra convallis leo arcu viverra interdum elementum rhoncus. Lorem quisque mattis aenean facilisi. Enim nisi diam luctus quis tellus elementum lorem vitae. Molestie lectus parturient quisque enim. Pretium quis scelerisque vel aliquet ipsum pretium pellentesque sagittis. Sociis elementum sit magnis tortor a auctor convallis vitae arcu. Auctor eget lorem blandit habitasse fermentum at.
Natoque nam ut consequat orci. Pretium nibh sit est scelerisque nunc lorem. Diam eget feugiat nec nulla nisi. Aliquam vulputate scelerisque non gravida neque in. Consectetur scelerisque blandit ultrices ut gravida vulputate quis blandit quis. Faucibus metus aliquam sapien mauris aliquet diam dui elementum dignissim. Amet praesent ut enim egestas feugiat facilisis risus. Euismod facilisi ornare eget diam mi.
Ut sed viverra etiam ac commodo auctor id. Enim mauris semper feugiat justo ut sed diam. Eu cursus tellus iaculis nisl purus lacus. Ut suspendisse egestas elementum enim sem. Semper pellentesque at tempor risus vel. Urna eget dictum amet nunc sagittis volutpat est. Aliquet tempus rhoncus fermentum malesuada vitae facilisi. Iaculis dolor viverra amet sed.
Imperdiet est urna in mauris amet enim velit sagittis duis. Sed eget justo id malesuada nibh mauris. Diam cursus lectus varius gravida at aliquam blandit ornare quisque. Quam massa auctor neque lorem. At egestas nibh iaculis donec viverra velit enim. Vulputate nec rhoncus facilisis ligula amet. Sapien lectus mauris dignissim fames quis est viverra aliquam. Rhoncus turpis quisque tortor porta augue ullamcorper imperdiet et lacus. Purus pulvinar ut dignissim ac vitae dolor mattis integer viverra. Faucibus posuere in elementum molestie faucibus leo praesent. Sollicitudin nam ultricies diam viverra in risus consectetur molestie neque.
Mi mauris cursus sit tellus lectus libero vitae sit. Dictum leo risus aenean quis cras eget ac nec. A sed blandit lectus vulputate massa consequat. Ut tristique sapien pellentesque turpis magnis. Diam non fermentum vitae mattis non id suscipit. Vitae lorem eget hac mus rhoncus. Quam augue est nibh viverra. In enim at laoreet sociis pellentesque sit ut. Orci lectus blandit sit elementum at. A morbi vestibulum pellentesque tortor aliquet. Feugiat proin risus at ullamcorper id. Suscipit aliquet vitae mollis elementum mattis odio et id pellentesque. Fames aliquam in blandit arcu. Dignissim rhoncus sit lectus ac nunc. Euismod volutpat ut sed massa sed facilisis tortor elit.
Sed nisi fermentum duis tristique mauris et eu phasellus accumsan. Tincidunt quis quisque pulvinar scelerisque sit eleifend adipiscing. Risus amet vestibulum ut quam tempor. Pulvinar dignissim suscipit sit vitae sem nunc purus massa. Nunc tincidunt ultrices quis ac in. Justo vitae nunc in diam lacus consequat lacus. Velit posuere fringilla interdum sit ut. Pellentesque semper quis odio risus leo turpis sem ac. Ac elit at mattis sed tristique eu arcu in. Commodo facilisi orci lectus mauris. Dignissim id dolor eleifend bibendum metus. Feugiat iaculis ornare at nulla vestibulum laoreet sit. Netus leo nulla ultrices amet.`
  },
  {
    name: "TERMS OF USE",
    alt: "TERMS",
    path: "terms_of_use",
    mode: "",
    text:`Lorem ipsum dolor sit amet consectetur. Pharetra non mattis sagittis tellus auctor feugiat cras amet. Lobortis habitant eget convallis nibh ipsum velit. Turpis pellentesque vivamus donec tempus turpis. Ornare condimentum accumsan morbi tristique tincidunt pellentesque ut. Nunc in id tempus tellus enim urna eros felis eget. Vulputate accumsan quam posuere sagittis dolor amet.
Cursus massa ullamcorper semper non habitant amet ac in non. Eu sodales aliquet pulvinar lacus auctor duis. Accumsan lectus nec enim amet mauris posuere. Donec ut sem ipsum tortor integer. Morbi cras pretium aliquam libero tellus pellentesque eu integer at. Netus non ac phasellus accumsan orci purus. Aenean congue tellus auctor eget quis aliquet nunc etiam. Ornare vitae blandit lobortis vulputate nunc vestibulum proin quam ligula. Sed enim ullamcorper sollicitudin neque tempus turpis facilisis. Elementum nunc neque rhoncus nunc cursus lorem.
Fermentum sem urna vestibulum consequat velit eget enim orci tristique. Sit ultrices nulla porta hac. Quisque laoreet vitae varius consectetur ullamcorper at imperdiet tempor. Sed accumsan dictumst egestas nec etiam cursus. Faucibus odio arcu vitae proin tortor posuere.
Scelerisque eget pretium sem lorem mollis egestas. Eu tempor ut eu a morbi quis orci venenatis. Euismod tortor ultrices egestas placerat convallis pellentesque vivamus pharetra. Est morbi faucibus purus a feugiat mi molestie eu. Malesuada nunc mauris sed risus bibendum habitant sed.
Magna pretium leo mauris purus condimentum in in facilisi. Tellus viverra convallis leo arcu viverra interdum elementum rhoncus. Lorem quisque mattis aenean facilisi. Enim nisi diam luctus quis tellus elementum lorem vitae. Molestie lectus parturient quisque enim. Pretium quis scelerisque vel aliquet ipsum pretium pellentesque sagittis. Sociis elementum sit magnis tortor a auctor convallis vitae arcu. Auctor eget lorem blandit habitasse fermentum at.
Natoque nam ut consequat orci. Pretium nibh sit est scelerisque nunc lorem. Diam eget feugiat nec nulla nisi. Aliquam vulputate scelerisque non gravida neque in. Consectetur scelerisque blandit ultrices ut gravida vulputate quis blandit quis. Faucibus metus aliquam sapien mauris aliquet diam dui elementum dignissim. Amet praesent ut enim egestas feugiat facilisis risus. Euismod facilisi ornare eget diam mi.
Ut sed viverra etiam ac commodo auctor id. Enim mauris semper feugiat justo ut sed diam. Eu cursus tellus iaculis nisl purus lacus. Ut suspendisse egestas elementum enim sem. Semper pellentesque at tempor risus vel. Urna eget dictum amet nunc sagittis volutpat est. Aliquet tempus rhoncus fermentum malesuada vitae facilisi. Iaculis dolor viverra amet sed.
Imperdiet est urna in mauris amet enim velit sagittis duis. Sed eget justo id malesuada nibh mauris. Diam cursus lectus varius gravida at aliquam blandit ornare quisque. Quam massa auctor neque lorem. At egestas nibh iaculis donec viverra velit enim. Vulputate nec rhoncus facilisis ligula amet. Sapien lectus mauris dignissim fames quis est viverra aliquam. Rhoncus turpis quisque tortor porta augue ullamcorper imperdiet et lacus. Purus pulvinar ut dignissim ac vitae dolor mattis integer viverra. Faucibus posuere in elementum molestie faucibus leo praesent. Sollicitudin nam ultricies diam viverra in risus consectetur molestie neque.
Mi mauris cursus sit tellus lectus libero vitae sit. Dictum leo risus aenean quis cras eget ac nec. A sed blandit lectus vulputate massa consequat. Ut tristique sapien pellentesque turpis magnis. Diam non fermentum vitae mattis non id suscipit. Vitae lorem eget hac mus rhoncus. Quam augue est nibh viverra. In enim at laoreet sociis pellentesque sit ut. Orci lectus blandit sit elementum at. A morbi vestibulum pellentesque tortor aliquet. Feugiat proin risus at ullamcorper id. Suscipit aliquet vitae mollis elementum mattis odio et id pellentesque. Fames aliquam in blandit arcu. Dignissim rhoncus sit lectus ac nunc. Euismod volutpat ut sed massa sed facilisis tortor elit.
Sed nisi fermentum duis tristique mauris et eu phasellus accumsan. Tincidunt quis quisque pulvinar scelerisque sit eleifend adipiscing. Risus amet vestibulum ut quam tempor. Pulvinar dignissim suscipit sit vitae sem nunc purus massa. Nunc tincidunt ultrices quis ac in. Justo vitae nunc in diam lacus consequat lacus. Velit posuere fringilla interdum sit ut. Pellentesque semper quis odio risus leo turpis sem ac. Ac elit at mattis sed tristique eu arcu in. Commodo facilisi orci lectus mauris. Dignissim id dolor eleifend bibendum metus. Feugiat iaculis ornare at nulla vestibulum laoreet sit. Netus leo nulla ultrices amet.`
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

export const categories=[
  {
    id: 1,
    name: "standard"
  },
  {
    id: 2,
    name: "Executive"
  },
  {
    id: 3,
    name: "Luxury"
  },
  {
    id: 4,
    name: "Regular"
  },
]

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
    category: "executive",
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
    category: "executive",
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
    heading: "BOOKING ROOMS",
    questions: [
      {
        title: "How do I book a room online?",
        text: "To book a room online, visit our website and navigate to the 'Book a Room' section. Select your preferred room type, check availability for your desired dates, and follow the prompts to complete your booking.",
      },
      {
        title: "Can I make a reservation without a credit card?",
        text: "A valid credit card is required to secure your reservation. However, we do offer alternative payment methods for certain bookings. Please contact our customer service for more information.",
      },
      {
        title: "Is there a minimum stay requirement?",
        text: "Yes, some of our rooms have a minimum stay requirement, especially during peak seasons or special events. Please check the room details during the booking process for specific requirements.",
      },
      {
        title: "Can I make a group booking for multiple rooms?",
        text: "Absolutely! For group bookings, please contact our reservations team directly. We can assist you with booking multiple rooms and offer special rates for large groups.",
      },
    ],
  },
  {
    heading: "RETURNS AND REFUNDS",
    questions: [
      {
        title: "What is your refund policy for cancellations?",
        text: "Our refund policy varies depending on the rate and time of cancellation. Generally, cancellations made at least 48 hours before the check-in date are eligible for a full refund. Please review the specific cancellation policy for your booking during the reservation process.",
      },
      {
        title: "How long does it take to process a refund?",
        text: "Refunds are typically processed within 7-10 business days. The time it takes for the refund to appear in your account may vary depending on your bank or payment provider.",
      },
      {
        title: "Can I get a refund if I check out early?",
        text: "Refunds for early check-outs depend on the terms of your booking. Please refer to the specific conditions of your reservation or contact our front desk for assistance with early check-out refunds.",
      },
      {
        title: "What should I do if I have not received my refund?",
        text: "If you have not received your refund within the expected timeframe, please contact our customer service team. Provide your booking details and proof of cancellation, and we will investigate the issue promptly.",
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
