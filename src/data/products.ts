import { Product } from "../types";

export const products: Product[] = [
	{
		id: "1",
		name: "Premium CPAP Machine",
		description: "Advanced CPAP machine with auto-adjusting pressure and quiet operation for comfortable sleep therapy.",
		price: 899.99,
		salePrice: 799.99,
		category: "CPAP Machines",
		image: "https://images.unsplash.com/photo-1672925216623-f32a54d732e0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Auto-adjusting pressure", "Whisper-quiet operation", "Advanced sleep tracking", "Smart humidity control", "Bluetooth connectivity"],
		rating: 4.8,
		reviews: 124,
		inStock: true,
		isFeatured: true,
		isOnSale: true,
	},
	{
		id: "2",
		name: "Comfort Fit CPAP Mask",
		description: "Ergonomic full-face CPAP mask with memory foam cushioning and minimal contact design.",
		price: 149.99,
		category: "CPAP Masks",
		image: "https://images.unsplash.com/photo-1672925216623-f32a54d732e0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Memory foam cushioning", "Minimal contact design", "Quick-release clips", "Adjustable headgear", "Anti-leak technology"],
		rating: 4.5,
		reviews: 89,
		inStock: true,
		isFeatured: true,
	},
	{
		id: "3",
		name: "Travel CPAP Device",
		description: "Compact and lightweight CPAP machine perfect for travel with long battery life.",
		price: 699.99,
		category: "Travel CPAP",
		image: "https://images.unsplash.com/photo-1672925216623-f32a54d732e0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Ultra-compact design", "FAA approved for flights", "12-hour battery life", "Integrated humidification", "Universal power supply"],
		rating: 4.7,
		reviews: 62,
		inStock: true,
		isNew: true,
	},
	{
		id: "4",
		name: "CPAP Tube Cleaning System",
		description: "UV light sanitizing system to keep your CPAP accessories clean and safe.",
		price: 129.99,
		salePrice: 99.99,
		category: "Accessories",
		image: "https://images.unsplash.com/photo-1672925216623-f32a54d732e0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["UV light sanitizing", "Ozone-free cleaning", "Compatible with all masks", "5-minute cleaning cycle", "Travel-friendly size"],
		rating: 4.3,
		reviews: 47,
		inStock: true,
		isOnSale: true,
	},
	{
		id: "5",
		name: "CPAP Pillow",
		description: "Specialty pillow designed to accommodate CPAP masks and hoses for side sleepers.",
		price: 89.99,
		category: "Accessories",
		image: "https://images.unsplash.com/photo-1672925216623-f32a54d732e0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Mask accommodation cutouts", "Memory foam construction", "Cooling gel layer", "Hypoallergenic cover", "Machine washable"],
		rating: 4.4,
		reviews: 58,
		inStock: true,
	},
	{
		id: "6",
		name: "Premium Humidifier Chamber",
		description: "Replacement humidifier chamber for extended CPAP therapy comfort.",
		price: 39.99,
		category: "Parts",
		image: "https://images.unsplash.com/photo-1672925216623-f32a54d732e0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Dishwasher safe", "2x capacity", "Anti-spill design", "Compatible with most machines", "BPA-free material"],
		rating: 4.6,
		reviews: 36,
		inStock: true,
	},
	{
		id: "7",
		name: "Auto CPAP Machine",
		description: "Self-adjusting CPAP machine that responds to your breathing patterns throughout the night.",
		price: 749.99,
		category: "CPAP Machines",
		image: "https://images.unsplash.com/photo-1672925216623-f32a54d732e0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Auto pressure adjustment", "Data reporting to your doctor", "Ultra-quiet operation", "Advanced event detection", "Integrated humidifier"],
		rating: 4.9,
		reviews: 103,
		inStock: true,
		isFeatured: true,
	},
	{
		id: "8",
		name: "Nasal CPAP Mask",
		description: "Lightweight nasal mask with minimal design for maximum comfort.",
		price: 119.99,
		salePrice: 99.99,
		category: "CPAP Masks",
		image: "https://images.unsplash.com/photo-1672925216623-f32a54d732e0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Under-the-nose design", "Soft silicone seal", "Universal fit sizing", "Quick-disconnect tube", "Adjustable headgear"],
		rating: 4.7,
		reviews: 74,
		inStock: true,
		isOnSale: true,
	},
	{
		id: "9",
		name: "CPAP Hose Holder",
		description: "Bedside hose holder to keep your CPAP tube elevated and prevent tugging.",
		price: 29.99,
		category: "Accessories",
		image: "https://images.unsplash.com/photo-1672925216623-f32a54d732e0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Adjustable height", "360° swivel", "Universal tube compatibility", "Stable base", "Tool-free assembly"],
		rating: 4.2,
		reviews: 41,
		inStock: true,
	},
	{
		id: "10",
		name: "CPAP Filter Set",
		description: "Replacement filters for your CPAP machine, 6-month supply.",
		price: 24.99,
		category: "Parts",
		image: "https://images.unsplash.com/photo-1672925216623-f32a54d732e0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["6-month supply", "Hypoallergenic", "Ultra-fine filtration", "Compatible with most machines", "Easy replacement"],
		rating: 4.5,
		reviews: 29,
		inStock: true,
	},
	{
		id: "11",
		name: "Sleep Apnea Mouthguard",
		description: "Mandibular advancement device to help with mild sleep apnea and snoring.",
		price: 199.99,
		category: "Alternative Treatments",
		image: "https://images.unsplash.com/photo-1672925216623-f32a54d732e0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["Custom moldable fit", "Adjustable advancement", "BPA-free material", "Storage case included", "Dentist-designed"],
		rating: 4.0,
		reviews: 56,
		inStock: true,
		isNew: true,
	},
	{
		id: "12",
		name: "CPAP Battery Backup",
		description: "Uninterruptible power supply for your CPAP machine during power outages or travel.",
		price: 249.99,
		salePrice: 229.99,
		category: "Accessories",
		image: "https://images.unsplash.com/photo-1672925216623-f32a54d732e0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		features: ["8-12 hours of backup power", "Fast recharging", "Multiple device ports", "Compact design", "Power outage detection"],
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
