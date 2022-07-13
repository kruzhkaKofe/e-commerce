import { defineStore } from 'pinia'

export const useBlogsStore = defineStore('blogs', {
	state: () => ({
		blogs: [
			{
				id: 1,
				title: "2021 Style Guide: The Biggest Fall Trends",
				image: "/assets/blogpage/guy.jpg",
				contentBefore:'You guys know how much I love mixing high and low-end – it’s the best way to get the most bang for your buck while still elevating your wardrobe. The same goes for handbags! And honestly they are probably the best pieces to mix and match. I truly think the key to completing a look is with a great bag and I found so many this year that I wanted to share a round-up of my most worn handbags.',
				sliderImages: ["/assets/blogpage/blogitem/girl-with-bag.jpg", "/assets/blogpage/blogitem/girl-with-bag.jpg", "/assets/blogpage/blogitem/girl-with-bag.jpg",],
				contentAfter:'I found this Saint Laurent canvas handbag this summer and immediately fell in love. The neutral fabrics are so beautiful and I like how this handbag can also carry into fall. The mini Fendi bucket bag with the sheer fabric is so fun and such a statement bag. Also this DeMellier off white bag is so cute to carry to a dinner with you or going out, it’s small but not too small to fit your phone and keys still.',
				tags: ["#Fashion", "#Tips", "#Fashion", "#Tips", "#Fashion", "#Tips", "#Fashion", "#Tips"],
				author: 'OpenFashion',
				date: "4 days ago",
			},
			{
				id: 2,
				title: "2021 Style Guide: The Biggest Fall Trends",
				image: "/assets/blogpage/jacket.jpg",
				contentBefore:'You guys know how much I love mixing high and low-end – it’s the best way to get the most bang for your buck while still elevating your wardrobe. The same goes for handbags! And honestly they are probably the best pieces to mix and match. I truly think the key to completing a look is with a great bag and I found so many this year that I wanted to share a round-up of my most worn handbags.',
				sliderImages: ["/assets/blogpage/blogitem/girl-with-bag.jpg",],
				contentAfter:'I found this Saint Laurent canvas handbag this summer and immediately fell in love. The neutral fabrics are so beautiful and I like how this handbag can also carry into fall. The mini Fendi bucket bag with the sheer fabric is so fun and such a statement bag. Also this DeMellier off white bag is so cute to carry to a dinner with you or going out, it’s small but not too small to fit your phone and keys still.',
				tags: ["#Fashion", "#Tips", "#Fashion", "#Tips",],
				author: 'OpenFashion',
				date: "4 days ago",
			},
			{
				id: 3,
				title: "2021 Style Guide: The Biggest Fall Trends",
				image: "/assets/blogpage/boots.jpg",
				contentBefore:'You guys know how much I love mixing high and low-end – it’s the best way to get the most bang for your buck while still elevating your wardrobe. The same goes for handbags! And honestly they are probably the best pieces to mix and match. I truly think the key to completing a look is with a great bag and I found so many this year that I wanted to share a round-up of my most worn handbags.',
				sliderImages: ["/assets/blogpage/blogitem/girl-with-bag.jpg", "/assets/blogpage/blogitem/girl-with-bag.jpg", "/assets/blogpage/blogitem/girl-with-bag.jpg",],
				contentAfter:'I found this Saint Laurent canvas handbag this summer and immediately fell in love. The neutral fabrics are so beautiful and I like how this handbag can also carry into fall. The mini Fendi bucket bag with the sheer fabric is so fun and such a statement bag. Also this DeMellier off white bag is so cute to carry to a dinner with you or going out, it’s small but not too small to fit your phone and keys still.',
				tags: ["#Fashion", "#Tips"],
				author: 'OpenFashion',
				date: "4 days ago",
			},
			{
				id: 4,
				title: "2021 Style Guide: The Biggest Fall Trends",
				image: "/assets/blogpage/suit.jpg",
				contentBefore:'You guys know how much I love mixing high and low-end – it’s the best way to get the most bang for your buck while still elevating your wardrobe. The same goes for handbags! And honestly they are probably the best pieces to mix and match. I truly think the key to completing a look is with a great bag and I found so many this year that I wanted to share a round-up of my most worn handbags.',
				sliderImages: ["/assets/blogpage/blogitem/girl-with-bag.jpg",],
				contentAfter:'I found this Saint Laurent canvas handbag this summer and immediately fell in love. The neutral fabrics are so beautiful and I like how this handbag can also carry into fall. The mini Fendi bucket bag with the sheer fabric is so fun and such a statement bag. Also this DeMellier off white bag is so cute to carry to a dinner with you or going out, it’s small but not too small to fit your phone and keys still.',
				tags: ["#Fashion", "#Tips", "#Fashion", "#Tips", "#Fashion", "#Tips",],
				author: 'OpenFashion',
				date: "4 days ago",
			},
		],
	}),
	
	getters: {
		allBlogs() {
			return this.blogs
		},

		getBlogById() {
			return (blogId) => {
				return this.blogs.find(blog => blog.id == blogId)
			}
		},

	},
})