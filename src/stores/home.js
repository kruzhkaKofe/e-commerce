import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", {
  state: () => ({
    recs: [
      {
        id: 1,
        title: "Harris Tweed Three button Jacket",
        price: "120тг",
        image: "/assets/homepage/recs/item.jpg",
      },
      {
        id: 2,
        title: "Harris Tweed Three button Jacket",
        price: "120тг",
        image: "/assets/homepage/recs/item.jpg",
      },
      {
        id: 3,
        title: "Harris Tweed Three button Jacket",
        price: "120тг",
        image: "/assets/homepage/recs/item.jpg",
      },
      {
        id: 4,
        title: "Harris Tweed Three button Jacket",
        price: "120тг",
        image: "/assets/homepage/recs/item.jpg",
      },
    ],
    trands: [
      "#2021",
      "#spring",
      "#collection",
      "#fall",
      "#dress",
      "#autumncollection",
      "#openfashion",
    ],
    brands: [
      {
        id: 1,
        name: "Prada",
        image: "/assets/homepage/brands/Prada.png",
      },
      {
        id: 2,
        name: "Burberry",
        image: "/assets/homepage/brands/Burberry.png",
      },
      {
        id: 3,
        name: "Boss",
        image: "/assets/homepage/brands/Boss.png",
      },
      {
        id: 4,
        name: "Cartier",
        image: "/assets/homepage/brands/Cartier.png",
      },
      {
        id: 5,
        name: "Gucci",
        image: "/assets/homepage/brands/Gucci.png",
      },
      {
        id: 6,
        name: "Tiffany",
        image: "/assets/homepage/brands/Tiffany.png",
      },
    ],
    links: [
      {
        id: 1,
        image: "/assets/homepage/follow/first.jpg",
        path: "@mia",
      },
      {
        id: 2,
        image: "/assets/homepage/follow/second.jpg",
        path: "@_jihyn",
      },
      {
        id: 3,
        image: "/assets/homepage/follow/third.jpg",
        path: "@mia",
      },
      {
        id: 4,
        image: "/assets/homepage/follow/fourth.jpg",
        path: "@_jihyn",
      },
    ],
    advantages: [
      {
        id: 1,
        image: "/assets/homepage/advantages/Fast-shipping.png",
        description: "Fast shipping. Free on orders over $25.",
      },
      {
        id: 2,
        image: "/assets/homepage/advantages/Sustainable.png",
        description: "Sustainable process from start to finish.",
      },
      {
        id: 3,
        image: "/assets/homepage/advantages/Unique-design.png",
        description: "Unique designs and high-quality materials.",
      },
      {
        id: 4,
        image: "/assets/homepage/advantages/Heart-crown.png",
        description: "Fast shipping. Free on orders over $25.",
      },
    ],
  }),

});
