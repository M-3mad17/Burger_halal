export const menuData = {
  beef: [
    {name:"Cheesy Buffalo",price:"€10.50",desc:"Brioche Bun, Homemade Beef Patty 140g, Cheese, Burger Sauce, Pickle, Onion, Tomato, Lettuce",spice:3,img:"/burgers/beef/Cheesy-Buffalo_10,50euros.webp"},
    {name:"Angry Bull",price:"€12.00",desc:"Brioche Bun, Beef Patty 140g, Cheese, Chili Cheese Sauce, Jalapeño, Pickle, Onion, Lettuce",spice:5,img:"/burgers/beef/Angry-Bull_12euros.webp"},
    {name:"Smokie Beefy BBQ",price:"€13.00",desc:"Brioche Bun, Beef Patty 140g, Cheese, Burger Sauce, Pickle, Onion Rings, Roasted Onion, BBQ Sauce, Tomato, Lettuce",spice:3,img:"/burgers/beef/Smookie-Beefy-BBQ_13euros.webp"},
    {name:"Blazing Nacho Beef",price:"€13.00",desc:"Brioche Bun, Beef Patty 140g, Cheese, Burger Sauce, Pickle, Jalapeño, Nachos, Sriracha Sauce, Tomato, Lettuce",spice:4,img:"/burgers/beef/Blazing-Nacho-Beef_13euros.webp"},
    {name:"Cheese Burger",price:"€7.00",desc:"Brioche Bun, Beef Patty 140g, Cheese, Burger Sauce, Pickle, Onion, Tomato, Lettuce",spice:1,img:"/burgers/beef/Cheese-Burger_7euros.webp"},
  ],
  chicken: [
    {name:"Crunchy Chicken",price:"€8.50",desc:"Brioche Bun, Chicken Strips, Cheese, Burger Sauce, Lettuce",spice:2,img:"/burgers/chicken/Chrunchy-Chicken_8,50euros.webp"},
    {name:"Loaded Crunchy",price:"€9.00",desc:"Brioche Bun, Chicken Strips, Cheese, Burger Sauce, Tomato, Onion, Pickle, Lettuce",spice:2,img:"/burgers/chicken/Loaded-Chrunchy_9euros.webp"},
    {name:"Crispy Ringer",price:"€10.00",desc:"Brioche Bun, Chicken Strips, Cheese, Burger Sauce, Onion Rings, Onion, Tomato, Lettuce",spice:2,img:"/burgers/chicken/Crispy-Ringer_10euros.webp"},
    {name:"Mexican Cracker",price:"€11.00",desc:"Brioche Bun, Chicken Strips, Cheese, Burger Sauce, Jalapeño, Pickle, Nachos, Sriracha Sauce, Onion, Lettuce",spice:4,img:"/burgers/chicken/Mexican-Cracker_11euros.webp"},
    {name:"Flip Chicken Burger",price:"€6.00",desc:"Brioche Bun, Chicken Strips, Cheese, Burger Sauce, Lettuce",spice:1,img:"/burgers/chicken/Flip-Chicken-Burger_6euros.webp"},
    {name:"Foodie Bomber",price:"€13.00",desc:"Brioche Bun, Chicken Strips, Cheese, Chili Cheese Nuggets, Chili Cheese Sauce, Onion, Jalapeño, Lettuce",spice:5,img:"/burgers/chicken/Foodie-Bomber-13euros.webp"},
  ],
  veggie: [
    {name:"Plant Power",price:"€9.00",desc:"Brioche Bun, Falafel, Cheese, Burger Sauce, Pickle, Lettuce, Onion, Tomato",spice:0,img:""},
    {name:"Veggie BBQ",price:"€11.00",desc:"Brioche Bun, Falafel, Cheese, Burger Sauce, Pickle, Onion Rings, Roasted Onion, BBQ Sauce, Tomato, Lettuce",spice:0,img:""},
  ],
  drinks: [
    {name:"Coca Cola",price:"€2.50",desc:"330ml Can",spice:0,img:"/graphics/cold drinks sprite cola fanta.png"},
    {name:"Coca Cola Zero",price:"€2.50",desc:"330ml Can",spice:0,img:"/graphics/cold drinks sprite cola fanta.png"},
    {name:"Fanta",price:"€2.50",desc:"330ml Can",spice:0,img:"/graphics/cold drinks sprite cola fanta.png"},
    {name:"Sprite",price:"€2.50",desc:"330ml Can",spice:0,img:"/graphics/cold drinks sprite cola fanta.png"},
    {name:"Capri Sonne",price:"€1.50",desc:"200ml",spice:0,img:"/graphics/caprisun.png"},
    {name:"Water",price:"€2.00",desc:"500ml",spice:0,img:"/graphics/water.png"},
    {name:"Mezzo Mix",price:"€2.50",desc:"330ml Can",spice:0,img:"/graphics/cold drinks sprite cola fanta.png"},
    {name:"Red Bull",price:"€3.50",desc:"250ml Can",spice:0,img:"/graphics/redbull.png"},
  ]
};

export const dips = [
  {name:"Mayo",price:"€0.50"},{name:"Ketchup",price:"€0.50"},{name:"Garlic Flip",price:"€1.00"},
  {name:"Blazing BBQ",price:"€1.00"},{name:"Super Curry",price:"€1.00"},{name:"Dragon's Flame",price:"€1.00"},
  {name:"Smokie Volcano",price:"€1.00"},{name:"Sweet Chili Magic",price:"€1.00"},
  {name:"Tangy Chili Cheese",price:"€1.00"},{name:"Foodie Burger Sauce",price:"€1.00"},
];

export const t = (lang, en, ar) => lang === 'ar' ? ar : en;
