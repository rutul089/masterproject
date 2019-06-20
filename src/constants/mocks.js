const categories = [
  {
    id: "1",
    name: "MCDonald's",
    tags: ["Food", "All Offer"],
    type: "Food",
    offer: "10-40% off",
    note: "Flat Discounts on Every purchase!",
    rating: "4.5",
    timeLeft: "11 Days",
    image: require("../../assets/image/base/m_logo.png")
  },
  {
    id: "2",
    name: "Burger King",
    tags: ["Food", "All Offer"],
    type: "Food",
    offer: "40% Cashback",
    note: "For Repeat Orders",
    rating: "4.5",
    timeLeft: "18 Days",
    image: require("../../assets/image/base/burger_king.png")
  },
  {
    id: "3",
    name: "Apple",
    tags: ["Electronic", "All Offer"],
    type: "Electronic",
    offer: "10% Cashback",
    note: "For first time users",
    rating: "5",
    timeLeft: "18 Days",
    image: require("../../assets/image/base/apple.png")
  },
  {
    id: "4",
    name: "Google",
    tags: ["Electronic", "Home", "All Offer"],
    type: "Electronic",
    offer: "40% Flat off",
    note: "Flat Discounts on Every purchase!",
    rating: "5",
    timeLeft: "2 Days",
    image: require("../../assets/image/base/google.png")
  },
  {
    id: "5",
    name: "Jack & Jones",
    tags: ["Clothing", "All Offer"],
    type: "Clothing",
    offer: "10% Flat off",
    note: "On limited stocks",
    rating: "4.2",
    timeLeft: "21 Days",
    image: require("../../assets/image/base/jack.png")
  },
  {
    id: "6",
    name: "Ikea",
    tags: ["Home", "All Offer"],
    type: "Home",
    offer: "10% Flat off",
    note: "For first time use",
    rating: "4.2",
    timeLeft: "10 Days",
    image: require("../../assets/image/base/ikea.png")
  },
  {
    id: "7",
    name: "Nike",
    tags: ["Clothing", "All Offer"],
    type: "Clothing",
    offer: "25% Flat off",
    note: "Selected boots",
    rating: "4.2",
    timeLeft: "13 Days",
    image: require("../../assets/image/base/nike.jpg")
  },
  {
    id: "8",
    name: "Taco Bell",
    tags: ["Food", "All Offer"],
    type: "Food",
    offer: "10% Cashback",
    note: "On Second purchase",
    rating: "4.2",
    timeLeft: "13 Days",
    image: require("../../assets/image/base/taco.png")
  }
];
const images = [
  {
    id: 1,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    saved: true,
    location: "Santorini, Greece",
    temperature: 34,
    title: "Santorini",
    description:
      "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.",
    rating: 4.3,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    saved: false,
    location: "Loutraki, Greece",
    temperature: 34,
    title: "Loutraki",
    description: "This attractive small town, 80 kilometers from Athens",
    rating: 4.6,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    saved: true,
    location: "Santorini, Greece",
    temperature: 34,
    title: "Santorini",
    description: "Santorini - Description",
    rating: 3.2,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    location: "Loutraki, Greece",
    temperature: 34,
    title: "Loutraki",
    description: "This attractive small town, 80 kilometers from Athens",
    rating: 5,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

export { categories, images };
