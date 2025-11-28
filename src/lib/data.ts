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
  {
    id: "4",
    airline: "United Airlines",
    airlineLogo:
      "https://images.unsplash.com/photo-1504198266284-1659872e6590?w=100&h=100&fit=crop",
    origin: "JFK",
    destination: "LHR",
    departureTime: "09:20 AM",
    arrivalTime: "08:40 PM",
    duration: "7h 20m",
    stops: 0,
    price: 610,
    route: "JFK to LHR",
    departure: "",
    stopLocation: "",
  },
  {
    id: "5",
    airline: "Air France",
    airlineLogo:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=100&h=100&fit=crop",
    origin: "JFK",
    destination: "LHR",
    departureTime: "11:15 AM",
    arrivalTime: "10:30 PM",
    duration: "7h 15m",
    stops: 1,
    stopLocation: "CDG",
    price: 575,
    route: "JFK to LHR",
    departure: "",
  },
  {
    id: "6",
    airline: "Lufthansa",
    airlineLogo:
      "https://images.unsplash.com/photo-1502920917128-1aa500764bfa?w=100&h=100&fit=crop",
    origin: "JFK",
    destination: "LHR",
    departureTime: "07:50 PM",
    arrivalTime: "07:05 AM",
    duration: "7h 15m",
    stops: 0,
    price: 635,
    route: "JFK to LHR",
    departure: "",
    stopLocation: "",
  },
  {
    id: "7",
    airline: "Emirates",
    airlineLogo:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=100&h=100&fit=crop",
    origin: "JFK",
    destination: "LHR",
    departureTime: "12:00 PM",
    arrivalTime: "11:15 PM",
    duration: "7h 15m",
    stops: 1,
    stopLocation: "DXB",
    price: 680,
    route: "JFK to LHR",
    departure: "",
  },
  {
    id: "8",
    airline: "Virgin Atlantic",
    airlineLogo:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=100&h=100&fit=crop",
    origin: "JFK",
    destination: "LHR",
    departureTime: "05:00 PM",
    arrivalTime: "04:15 AM",
    duration: "7h 15m",
    stops: 0,
    price: 600,
    route: "JFK to LHR",
    departure: "",
    stopLocation: "",
  },
  {
    id: "9",
    airline: "Qatar Airways",
    airlineLogo:
      "https://images.unsplash.com/photo-1518544880694-6a083a846b14?w=100&h=100&fit=crop",
    origin: "JFK",
    destination: "LHR",
    departureTime: "03:30 PM",
    arrivalTime: "02:45 AM",
    duration: "7h 15m",
    stops: 1,
    stopLocation: "DOH",
    price: 690,
    route: "JFK to LHR",
    departure: "",
  },
];

export const resorts: Resort[] = [
  {
    id: "1",
    name: "Luxury Sunshine Beach Resort",
    location: "Congo",
    category: "Beach",
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
    category: "Beach",
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
    category: "Mountain",
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
    category: "Forest",
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
  {
    id: "5",
    name: "Golden Horizon Hotel",
    location: "Kenya",
    category: "Safari",
    rating: 4.7,
    reviewCount: 320,
    description: "Experience the wild like never before.",
    author: "Jade Smith",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
    ],
    roomType: "Luxury Suite",
    roomDetails: "1 king-size bed",
    originalPrice: 1899.59,
    discountedPrice: 1599.99,
    discount: 20,
    nights: 3,
    adults: 2,
    breakfastIncluded: true,
  },
  {
    id: "6",
    name: "Crystal Lake Inn",
    location: "Switzerland",
    category: "Lake",
    rating: 4.9,
    reviewCount: 210,
    description: "Relax by the serene lake views.",
    author: "Liam Carter",
    images: [
      "https://images.unsplash.com/photo-1519817650390-64a93db5114c?w=800&h=600&fit=crop",
    ],
    roomType: "Double Room",
    roomDetails: "1 queen-size bed",
    originalPrice: 1299.59,
    discountedPrice: 999.99,
    discount: 25,
    nights: 5,
    adults: 2,
    breakfastIncluded: true,
  },
  {
    id: "7",
    name: "Desert Mirage Resort",
    location: "Morocco",
    category: "Desert",
    rating: 4.6,
    reviewCount: 180,
    description: "A unique desert experience.",
    author: "Amira Khalid",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
    roomType: "Tent Suite",
    roomDetails: "1 large double tent",
    originalPrice: 1199.59,
    discountedPrice: 899.99,
    discount: 30,
    nights: 3,
    adults: 2,
    breakfastIncluded: false,
  },
  {
    id: "8",
    name: "Urban Oasis Hotel",
    location: "Dubai",
    category: "City",
    rating: 4.5,
    reviewCount: 400,
    description: "Luxury stay in the heart of the city.",
    author: "Omar Rahman",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    ],
    roomType: "Executive Suite",
    roomDetails: "1 king-size bed",
    originalPrice: 1999.59,
    discountedPrice: 1499.99,
    discount: 25,
    nights: 4,
    adults: 3,
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

export const countries = [
  { id: "1", name: "Australia", flag: "🇦🇺" },
  { id: "2", name: "Canada", flag: "🇨🇦" },
  { id: "3", name: "Denmark", flag: "🇩🇰" },
  { id: "4", name: "Finland", flag: "🇫🇮" },
  { id: "5", name: "England", flag: "🇬🇧" },
  { id: "6", name: "France", flag: "🇫🇷" },
  { id: "7", name: "Germany", flag: "🇩🇪" },
  { id: "8", name: "Italy", flag: "🇮🇹" },
  { id: "9", name: "Japan", flag: "🇯🇵" },
  { id: "10", name: "Spain", flag: "🇪🇸" },
];

export const popularDestinations = [
  {
    id: "1",
    name: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    description: "The City of Light awaits",
    startingPrice: 599,
  },
  {
    id: "2",
    name: "Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    description: "Modern meets traditional",
    startingPrice: 899,
  },
  {
    id: "3",
    name: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    description: "Paradise island escape",
    startingPrice: 499,
  },
  {
    id: "4",
    name: "Santorini, Greece",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop",
    description: "Stunning sunsets and white buildings",
    startingPrice: 799,
  },
  {
    id: "5",
    name: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop",
    description: "The city that never sleeps",
    startingPrice: 699,
  },
  {
    id: "6",
    name: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    description: "Luxury and innovation",
    startingPrice: 849,
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    comment:
      "GoExplore made planning our family vacation so easy! The flight options were great and the customer service was outstanding.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "2024-01-15",
  },
  {
    id: "2",
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    comment:
      "Best travel booking experience ever. Found amazing deals and the resort recommendations were spot on!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "2024-01-10",
  },
  {
    id: "3",
    name: "Emma Williams",
    location: "London, UK",
    rating: 4,
    comment:
      "Very impressed with the platform. Easy to use and found exactly what we were looking for.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    date: "2024-01-05",
  },
];

export const faqs = [
  {
    id: "1",
    question: "How do I book a flight?",
    answer:
      'Simply enter your travel details in the search bar, browse available flights, and click "Select" on your preferred option. You\'ll be guided through the booking process step by step.',
  },
  {
    id: "2",
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes, you can cancel or modify your booking through your account dashboard. Cancellation policies vary by airline and resort, so please check the specific terms before booking.",
  },
  {
    id: "3",
    question: "Do you offer travel insurance?",
    answer:
      "Yes, we partner with leading travel insurance providers. You can add travel insurance during the booking process for complete peace of mind.",
  },
  {
    id: "4",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and PayPal. All transactions are secure and encrypted.",
  },
  {
    id: "5",
    question: "How do I contact customer support?",
    answer:
      "You can reach our 24/7 customer support team via phone, email, or live chat. Visit our Contact page for all support options.",
  },
];

export const stats = [
  { label: "Happy Travelers", value: "10K+", icon: "people" },
  { label: "Destinations", value: "150+", icon: "public" },
  { label: "Airlines", value: "50+", icon: "flight" },
  { label: "Hotels & Resorts", value: "500+", icon: "hotel" },
];

export const features = [
  {
    icon: "verified",
    title: "Best Price Guarantee",
    description: "Find the best deals or we'll refund the difference",
  },
  {
    icon: "support_agent",
    title: "24/7 Customer Support",
    description: "Our team is always here to help you, anytime",
  },
  {
    icon: "security",
    title: "Secure Booking",
    description: "Your data is protected with industry-leading security",
  },
  {
    icon: "payments",
    title: "Flexible Payment Options",
    description: "Pay your way with multiple payment methods",
  },
  {
    icon: "card_giftcard",
    title: "Exclusive Deals",
    description: "Get access to member-only discounts and offers",
  },
  {
    icon: "autorenew",
    title: "Easy Cancellation",
    description: "Change your plans with flexible cancellation policies",
  },
];
