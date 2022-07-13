import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
	state: () => ({
		recs: [
			{
				id: 1,
				title: "Harris Tweed Three button Jacket",
				price: "$120",
				image: "/assets/homepage/recs/item.jpg",
			},
			{
				id: 2,
				title: "Harris Tweed Three button Jacket",
				price: "$120",
				image: "/assets/homepage/recs/item.jpg",
			},
			{
				id: 3,
				title: "Harris Tweed Three button Jacket",
				price: "$120",
				image: "/assets/homepage/recs/item.jpg",
			},
			{
				id: 4,
				title: "Harris Tweed Three button Jacket",
				price: "$120",
				image: "/assets/homepage/recs/item.jpg",
			},
		],
		
		


	}),
	
	getters: {
		allRecs() {
			return this.recs
		},
	},
})