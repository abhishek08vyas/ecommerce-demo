import { Product } from "../types";

export const products: Product[] = [
	{
		id: "1",
		name: "Aetheris Pro Max Headphones",
		description: "Premium wireless headphones with active noise cancellation and studio-quality sound for the ultimate audio experience.",
		price: 399.99,
		salePrice: 349.99,
		category: "Headphones",
		image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Active noise cancellation", "40-hour battery life", "Hi-Res audio certification", "Adaptive EQ", "Premium leather padding"],
		rating: 4.8,
		reviews: 124,
		inStock: true,
		isFeatured: true,
		isOnSale: true,
	},
	{
		id: "2",
		name: "Aetheris Sport Earbuds",
		description: "Ergonomic wireless earbuds with IPX7 water resistance and secure fit for active lifestyles.",
		price: 149.99,
		category: "Earbuds",
		image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["IPX7 water resistance", "Secure wing tips", "Quick charge case", "Touch controls", "Sweat-proof coating"],
		rating: 4.5,
		reviews: 89,
		inStock: true,
		isFeatured: true,
	},
	{
		id: "3",
		name: "Aetheris Travel Speaker",
		description: "Compact portable speaker with 360-degree sound and ultra-long battery for adventures.",
		price: 199.99,
		category: "Speakers",
		image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["360-degree sound", "IPX6 waterproof", "24-hour battery life", "Bass radiator technology", "Voice assistant ready"],
		rating: 4.7,
		reviews: 62,
		inStock: true,
		isNew: true,
	},
	{
		id: "4",
		name: "Aetheris Wireless Charger Pro",
		description: "Fast wireless charging pad with cooling system and multi-device support for all your electronics.",
		price: 79.99,
		salePrice: 59.99,
		category: "Accessories",
		image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["15W fast charging", "Cooling fan system", "Multi-device support", "LED charging indicator", "Sleek aluminum design"],
		rating: 4.3,
		reviews: 47,
		inStock: true,
		isOnSale: true,
	},
	{
		id: "5",
		name: "Aetheris Gaming Headset",
		description: "Professional gaming headset with 7.1 surround sound and crystal-clear microphone for competitive gaming.",
		price: 179.99,
		category: "Gaming",
		image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["7.1 surround sound", "Noise-cancelling microphone", "RGB lighting", "Memory foam ear cups", "Multi-platform compatibility"],
		rating: 4.4,
		reviews: 58,
		inStock: true,
	},
	{
		id: "6",
		name: "Aetheris Power Bank Ultra",
		description: "High-capacity portable charger with fast charging technology for extended device usage.",
		price: 89.99,
		category: "Accessories",
		image: "https://images.unsplash.com/photo-1644571669401-9ab344866592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["20,000mAh capacity", "65W fast charging", "Multiple ports", "Digital display", "Aircraft-grade aluminum"],
		rating: 4.6,
		reviews: 36,
		inStock: true,
	},
	{
		id: "7",
		name: "Aetheris Studio Monitor Headphones",
		description: "Professional reference headphones with flat frequency response for audio production and mixing.",
		price: 299.99,
		category: "Headphones",
		image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Flat frequency response", "Open-back design", "Replaceable ear pads", "Professional-grade drivers", "Studio-quality cable"],
		rating: 4.9,
		reviews: 103,
		inStock: true,
		isFeatured: true,
	},
	{
		id: "8",
		name: "Aetheris True Wireless Pro",
		description: "Premium true wireless earbuds with adaptive noise cancellation and high-fidelity audio.",
		price: 249.99,
		salePrice: 199.99,
		category: "Earbuds",
		image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Adaptive noise cancellation", "Custom EQ presets", "Wireless charging case", "Multi-point connection", "Premium sound drivers"],
		rating: 4.7,
		reviews: 74,
		inStock: true,
		isOnSale: true,
	},
	{
		id: "9",
		name: "Aetheris Desktop Speaker Stand",
		description: "Adjustable desktop speaker stands with isolation pads for optimal audio positioning.",
		price: 69.99,
		category: "Accessories",
		image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Height adjustable", "360° tilt mechanism", "Vibration isolation pads", "Cable management", "Premium aluminum build"],
		rating: 4.2,
		reviews: 41,
		inStock: true,
	},
	{
		id: "10",
		name: "Aetheris Audio Cable Kit",
		description: "Premium audio cables collection with gold-plated connectors for audiophile setups.",
		price: 49.99,
		category: "Accessories",
		image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Gold-plated connectors", "Oxygen-free copper", "Multiple lengths included", "Braided cable sleeve", "Low-loss design"],
		rating: 4.5,
		reviews: 29,
		inStock: true,
	},
	{
		id: "11",
		name: "Aetheris Smart Home Hub",
		description: "Central smart home controller with voice control and app integration for seamless automation.",
		price: 149.99,
		category: "Smart Home",
		image: "https://images.unsplash.com/photo-1587145717184-e7ee5311253d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Voice control ready", "Multi-protocol support", "Mobile app control", "Scene automation", "Privacy-focused design"],
		rating: 4.0,
		reviews: 56,
		inStock: true,
		isNew: true,
	},
	{
		id: "12",
		name: "Aetheris Portable DAC/Amp",
		description: "High-resolution portable DAC and headphone amplifier for audiophile-grade mobile listening.",
		price: 329.99,
		salePrice: 299.99,
		category: "Audio Equipment",
		image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Hi-Res audio support", "Balanced output", "Long battery life", "Premium aluminum chassis", "Multiple input options"],
		rating: 4.8,
		reviews: 33,
		inStock: true,
		isOnSale: true,
	},
];

export const getFeaturedProducts = (): Product[] => {
	return products.filter((product) => product.isFeatured);
};

export const getNewArrivals = (): Product[] => {
	return products.filter((product) => product.isNew);
};

export const getOnSaleProducts = (): Product[] => {
	return products.filter((product) => product.isOnSale);
};

export const getProductsByCategory = (category: string): Product[] => {
	return products.filter((product) => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
	return products.find((product) => product.id === id);
};

export const getAllCategories = (): string[] => {
	const categories = new Set(products.map((product) => product.category));
	return Array.from(categories);
};
