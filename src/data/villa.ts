export interface TravelProduct {
  id: number;
  title: string;
  image: string;
  label?: string;
  rating: string;
  reviews: number;
  description: string;
  propertyName: string;
  roomType: string;
  bedInfo: string;
  breakfast: string;
  guests: string;
  currentPrice: number;
  discount?: number;
  stayInfo: string;
  buttonText: string;
  category: string;
}

export const travelProducts: TravelProduct[] = [
  {
    id: 1,
    title: "Luxury Sunshine Beach Resort",
    image: "/images/travelone.jpg",
    label: "Only 12 rooms left",
    rating: "4.8/5",
    reviews: 667,
    description:
      "Cozy beach resort with modern amenities and breathtaking views.",
    propertyName: "Name of the property",
    roomType: "Economy Double room",
    bedInfo: "1 large double bed",
    breakfast: "Breakfast included",
    guests: "for 2 adults",
    currentPrice: 999.99,
    discount: 1999.99,
    stayInfo: "4 nights & 2 adults",
    buttonText: "See Availability",
    category: "Resorts",
  },
  {
    id: 2,
    title: "Mountain View Resort",
    image: "/images/travelone.jpg",
    rating: "4.7/5",
    reviews: 543,
    description: "Quiet mountain getaway with fresh air and stunning scenery.",
    propertyName: "Mountain View Resort",
    roomType: "Economy Double room",
    bedInfo: "1 large double bed",
    breakfast: "Breakfast included",
    guests: "for 2 adults",
    currentPrice: 1099.99,
    stayInfo: "4 nights & 2 adults",
    buttonText: "See Availability",
    category: "Resorts",
  },
  {
    id: 3,
    title: "Ocean Breeze Hotel",
    image: "/images/travelone.jpg",
    label: "Only 12 rooms left",
    rating: "4.9/5",
    reviews: 720,
    description: "Modern hotel with ocean views and premium facilities.",
    propertyName: "Ocean Breeze Hotel",
    roomType: "Economy Double room",
    bedInfo: "1 large double bed",
    breakfast: "Breakfast included",
    guests: "for 2 adults",
    currentPrice: 1049.99,
    discount: 1899.99,
    stayInfo: "4 nights & 2 adults",
    buttonText: "See Availability",
    category: "Hotels",
  },
];
