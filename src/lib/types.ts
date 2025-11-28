export interface Flight {
  id: string;
  airline: string;
  airlineLogo: string;
  origin: string;
  destination: string;
  departure: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  stopLocation: string;
  price: number;
  route: string;
}

export interface Resort {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviewCount: number;
  description: string;
  author: string;
  images: string[];
  roomType: string;
  roomDetails: string;
  originalPrice: number;
  discountedPrice: number;
  discount?: number;
  nights: number;
  adults: number;
  breakfastIncluded: boolean;
  roomLeft?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Milestone {
  year: string;
  title: string;
  icon: string;
}

export interface Resource {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}
