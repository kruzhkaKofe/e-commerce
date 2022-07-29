import { defineStore } from "pinia";

export const useCollections = defineStore("collections", {
  state: () => ({
    october: [
      {
        id: 1,
        title: "October collection",
        cover: "assets/october/covers/01-image.jpg",
        items: [
          {
            id: 1.1,
            title: "reversible angora cardigan",
            image: "assets/october/october-collection/Dress.jpg",
            price: 110,
          },
          {
            id: 1.2,
            title: "awesome boots",
            image: "assets/october/october-collection/Boots.jpg",
            price: 120,
          },
          {
            id: 1.3,
            title: "earrings like mirror",
            image: "assets/october/october-collection/earrings-1.jpg",
            price: 150,
          },
          {
            id: 1.4,
            title: "earrings silver",
            image: "assets/october/october-collection/earrings-2.jpg",
            price: 180,
          },
          {
            id: 1.5,
            title: "big gold ring",
            image: "assets/october/october-collection/ring-1.jpg",
            price: 250,
          },
          {
            id: 1.6,
            title: "small ring",
            image: "assets/october/october-collection/ring-2.jpg",
            price: 160,
          },
        ],
      },
      {
        id: 2,
        title: "Black collection",
        cover: "assets/october/covers/02-image.jpg",
        items: [
          {
            id: 2.1,
            title: "reversible angora cardigan",
            image: "assets/october/october-collection/Dress.jpg",
            price: 110,
          },
          {
            id: 2.2,
            title: "awesome boots",
            image: "assets/october/october-collection/Boots.jpg",
            price: 120,
          },
          {
            id: 2.3,
            title: "earrings like mirror",
            image: "assets/october/october-collection/earrings-1.jpg",
            price: 150,
          },
          {
            id: 2.4,
            title: "earrings silver",
            image: "assets/october/october-collection/earrings-2.jpg",
            price: 180,
          },
          {
            id: 2.5,
            title: "big gold ring",
            image: "assets/october/october-collection/ring-1.jpg",
            price: 250,
          },
          {
            id: 2.6,
            title: "small ring",
            image: "assets/october/october-collection/ring-2.jpg",
            price: 160,
          },
        ],
      },
      {
        id: 3,
        title: "Hae by Haekim",
        cover: "assets/october/covers/03-image.jpg",
        items: [
          {
            id: 3.1,
            title: "reversible angora cardigan",
            image: "assets/october/october-collection/Dress.jpg",
            price: 110,
          },
          {
            id: 3.2,
            title: "awesome boots",
            image: "assets/october/october-collection/Boots.jpg",
            price: 120,
          },
          {
            id: 3.3,
            title: "earrings like mirror",
            image: "assets/october/october-collection/earrings-1.jpg",
            price: 150,
          },
          {
            id: 3.4,
            title: "earrings silver",
            image: "assets/october/october-collection/earrings-2.jpg",
            price: 180,
          },
          {
            id: 3.5,
            title: "big gold ring",
            image: "assets/october/october-collection/ring-1.jpg",
            price: 250,
          },
          {
            id: 3.6,
            title: "small ring",
            image: "assets/october/october-collection/ring-2.jpg",
            price: 160,
          },
        ],
      },
    ],
  }),

  getters: {
    allOctober() {
      return this.october;
    },

    getCollectionById() {
      return (collectionId) => {
        return this.october.find((collection) => collection.id == collectionId);
      };
    },

    getOtherCollections() {
      return (collectionId) => {
        return this.october.filter(
          (collection) => collection.id != collectionId
        );
      };
    },
  },

  actions: {},
});
