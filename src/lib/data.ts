import {
  Flight,
  Resort,
  TeamMember,
  Milestone,
  Resource,
  ContactInfo,
} from "./types";

export const flights: Flight[] = [
  {
    id: "1",
    airline: "American Airlines",
    airlineLogo:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=100&h=100&fit=crop",
    origin: "JFK",
    destination: "LHR",
    departureTime: "10:45 AM",
    arrivalTime: "09:15 PM",
    duration: "7h 30m",
    stops: 0,
    price: 589,
    route: "JFK to LHR",
    departure: "",
    stopLocation: "",
  },
  {
    id: "2",
    airline: "Delta",
    airlineLogo:
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=100&h=100&fit=crop",
    origin: "JFK",
    destination: "LHR",
    departureTime: "08:00 AM",
    arrivalTime: "09:15 PM",
    duration: "10h 15m",
    stops: 1,
    stopLocation: "CDG",
    price: 499,
    route: "JFK to LHR",
    departure: "",
  },
  {
    id: "3",
    airline: "British Airways",
    airlineLogo:
      "https://images.unsplash.com/photo-1583041773503-9c801d01765d?w=100&h=100&fit=crop",
    origin: "JFK",
    destination: "LHR",
    departureTime: "06:30 PM",
    arrivalTime: "06:55 AM",
    duration: "7h 25m",
    stops: 0,
    price: 620,
    route: "JFK to LHR",
    departure: "",
    stopLocation: "",
  },
];

export const resorts: Resort[] = [
  {
    id: "1",
    name: "Luxury Sunshine Beach Resort",
    location: "West Indies",
    rating: 4.8,
    reviewCount: 667,
    description: "Morrowness ut aliquip tincidunt ac ut non.",
    author: "Laith Gagne",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    ],
    roomType: "Economy Double room",
    roomDetails: "1 large double room",
    originalPrice: 1599.59,
    discountedPrice: 189.99,
    discount: 50,
    nights: 4,
    adults: 5,
    breakfastIncluded: true,
  },
  {
    id: "2",
    name: "Serene Shores Retreat",
    location: "West Indies",
    rating: 4.8,
    reviewCount: 164,
    description: "Vestibulum ut nat vitae magna scelerisque.",
    author: "Cody Thighs",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop",
    ],
    roomType: "Sea View Double room",
    roomDetails: "1 large double room",
    originalPrice: 1589.59,
    discountedPrice: 199.99,
    nights: 4,
    adults: 5,
    breakfastIncluded: true,
  },
  {
    id: "3",
    name: "Azure Meadows",
    location: "West Indies",
    rating: 4.8,
    reviewCount: 377,
    description: "Integer vel pellentesque lorem ut mi.",
    author: "Carl Elgin",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    ],
    roomType: "Economy Double room",
    roomDetails: "1 large double room",
    originalPrice: 1399.59,
    discountedPrice: 1079.99,
    discount: 50,
    nights: 4,
    adults: 5,
    breakfastIncluded: true,
  },
  {
    id: "4",
    name: "Whispering Pines Resort",
    location: "West Indies",
    rating: 4.9,
    reviewCount: 402,
    description: "Aliquam vellit volutpat, id ac noval.",
    author: "Dyke Thighs",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
    ],
    roomType: "Economy Double room",
    roomDetails: "1 large double room",
    originalPrice: 2599.59,
    discountedPrice: 2099.99,
    nights: 4,
    adults: 4,
    breakfastIncluded: true,
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Jane Doe",
    role: "CEO & Founder",
    bio: "A trailblazing traveler, Jane founded Voyage with unwavering passion for discovering the wonders with others.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    id: "2",
    name: "John Smith",
    role: "Travel Expert",
    bio: "John curates unique travel experiences, ensuring every trip is unforgettable.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    id: "3",
    name: "Emily White",
    role: "Customer Success",
    bio: "Emily works directly with clients to build free dream itineraries from the ground up.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
  {
    id: "4",
    name: "Michael Brown",
    role: "Operations Manager",
    bio: "Michael leads the tech team, building the seamless platform powering our journeys.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  },
];

export const milestones: Milestone[] = [
  {
    year: "2018",
    title: "The Idea Was Born",
    icon: "lightbulb",
  },
  {
    year: "2019",
    title: "Our First Booking",
    icon: "calendar_today",
  },
  {
    year: "2021",
    title: "Expanding Destinations",
    icon: "public",
  },
  {
    year: "2023",
    title: "10,000 Happy Travelers",
    icon: "groups",
  },
];

export const resources: Resource[] = [
  {
    id: "1",
    category: "GUIDE",
    title: "The Ultimate Pre-Travel Checklist",
    description:
      "Everything you need to do before you jet off on your next adventure.",
    image:
      "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&h=600&fit=crop",
    link: "/resources/pre-travel-checklist",
  },
  {
    id: "2",
    category: "TIPS",
    title: "How to Find the Best Resort Deals",
    description:
      "Unlock savings and find the perfect stay with our expert tips and tricks.",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=600&fit=crop",
    link: "/resources/best-resort-deals",
  },
  {
    id: "3",
    category: "DESTINATIONS",
    title: "A Local's Guide to Paris",
    description:
      "Discover the hidden gems and must-see spots in the city of lights.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    link: "/resources/paris-guide",
  },
];

export const contactInfo: ContactInfo = {
  phone: "+1 (234) 567-890",
  email: "support@goexplore.com",
  address: "123 Travel Lane, Paradise City, 45678",
};
