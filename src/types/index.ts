export interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	category: string;
	image: string;
	features: string[];
	rating: number;
	reviews: number;
	inStock: boolean;
	isFeatured?: boolean;
	isNew?: boolean;
	isOnSale?: boolean;
	salePrice?: number;
}

export interface CartItem {
	productId: string;
	quantity: number;
}

export interface Cart {
	items: CartItem[];
}

export interface User {
	id: string;
	name: string;
	email: string;
	avatar?: string;
}

export interface Order {
	id: string;
	userId: string;
	items: CartItem[];
	total: number;
	status: "pending" | "processing" | "shipped" | "delivered";
	createdAt: string;
	shippingAddress: {
		name: string;
		address: string;
		city: string;
		state: string;
		zipCode: string;
		country: string;
	};
	trackingNumber?: string;
	paymentMethod?: {
		type: string;
		lastFour?: string;
		expiryDate?: string;
	};
}
