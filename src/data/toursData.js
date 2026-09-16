// File Path: src/data/toursData.js

export const toursData = [
  {
    id: 1,
    slug: "naran-valley", // <- Yeh slug aur Expeditions.jsx ka slug exact SAME hone chahiye
    title: "Naran & Saif-ul-Malook Tour",
    location: "Kaghan Valley, KPK",
    duration: "3 Days / 2 Nights",
    groupSize: "20 - 22 People",
    price: "PKR 18,500",
    rating: 4.8,
    reviewsCount: 34,
    heroImage: "https://loremflickr.com/1200/600/naran,valley,river",
    overview:
      "Explore the scenic beauty of Naran Valley andKaghan Valley, the legendary Saif-ul-Malook lake, Babusar Top, Gittidas Meadows, and Lulusar Lake.",
    highlights: [
      "Jeep safari to Lake Saif-ul-Malook",
      "Visit to Babusar Top (13,690 ft)",
      "Riverside rafting at Kunhar River",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Islamabad to Naran",
        desc: "Departure via Hazara Motorway.",
      },
      {
        day: "Day 2",
        title: "Saif-ul-Malook & Babusar Top",
        desc: "4x4 Jeep ride to Saif-ul-Malook lake.",
      },
    ],
    included: ["Coaster Transport", "Hotel Stay", "Breakfast & Dinner"],
    excluded: ["Jeep charges", "Personal shopping"],
    tourDetails: {
      departures: ["Lahore", "Sahiwal", "Faisalabad", "Islamabad"],
      services: {
        accommodation: "According To Your Package",
        food: "03 Breakfasts & 02 Dinners",
        transportation: "Travel In A GRAND CABIN or Latest Model COASTER",
      },
      importantNotes: [
        "Only Blood Relations And Married Couples Are Allowed To Share a Room.",
        "Carry Your ID Card With You At All Time.",
        "For Further Details See The Attached PDF File",
      ],
    },
  },
  {
    id: 2,
    slug: "swat-valley",
    title: "Swat & Kalam Valley Tour",
    location: "Swat Valley, KPK",
    duration: "3 Days / 2 Nights",
    groupSize: "20 - 22 People",
    price: "PKR 18,500",
    rating: 4.9,
    reviewsCount: 29,
    heroImage: "https://loremflickr.com/1200/600/swat,valley,river",
    overview:
      "Discover Switzerland of the East with lush green valleys, Swat, Kalam, Malam Jabba and Mahodand Lake.",
    highlights: ["Malam Jabba Ski Resort", "Mahodand Lake Jeep Ride"],
    itinerary: [
      {
        day: "Day 1",
        title: "Islamabad to Malam Jabba",
        desc: "Chairlift ride at Malam Jabba.",
      },
    ],
     included: ["Coaster Transport", "Hotel Stay", "Breakfast & Dinner"],
    excluded: ["Jeep charges", "Personal shopping"],
    tourDetails: {
      departures: ["Lahore", "Sahiwal", "Faisalabad", "Islamabad"],
      services: {
        accommodation: "According To Your Package",
        food: "03 Breakfasts & 02 Dinners",
        transportation: "Travel In A GRAND CABIN or Latest Model COASTER",
      },
      importantNotes: [
        "Only Blood Relations And Married Couples Are Allowed To Share a Room.",
        "Carry Your ID Card With You At All Time.",
        "For Further Details See The Attached PDF File",
      ],
    },
  },
  {
    id: 3,
    slug: "kashmir",
    title: "Neelum Valley Kashmir Tour",
    location: "Azad Kashmir",
    duration: "3 Days / 2 Nights",
    price: "PKR 18,500",
    rating: 4.9,
    reviewsCount: 51,
    heroImage: "https://loremflickr.com/1200/600/kashmir,valley,mountains",
    overview:
      "Journey into the heaven on earth featuring Dhani Waterfall, Keran, Sharda, LOC view point and Arang Kel.",
    highlights: ["Chairlift to Arang Kel", "Kutton Waterfall"],
    itinerary: [
      {
        day: "Day 1",
        title: "Islamabad to Kutton",
        desc: "Drive along Neelum River.",
      },
    ],
      included: ["Coaster Transport", "Hotel Stay", "Breakfast & Dinner"],
    excluded: ["Jeep charges", "Personal shopping"],
    tourDetails: {
      departures: ["Lahore", "Sahiwal", "Faisalabad", "Islamabad"],
      services: {
        accommodation: "According To Your Package",
        food: "03 Breakfasts & 02 Dinners",
        transportation: "Travel In A GRAND CABIN or Latest Model COASTER",
      },
      importantNotes: [
        "Only Blood Relations And Married Couples Are Allowed To Share a Room.",
        "Carry Your ID Card With You At All Time.",
        "For Further Details See The Attached PDF File",
      ],
    },
  },
  {
    id: 4,
    slug: "kumrat-jhazbanda",
    title: "Kumrat Valley & Jhazbanda Meadows",
    location: "Upper Dir, KPK",
    duration: "4 Days / 3 Nights",
    price: "PKR 25,000",
    rating: 4.7,
    reviewsCount: 22,
    heroImage: "https://loremflickr.com/1200/600/forest,waterfall,green",
    overview: "Trek into untouched alpine wilderness, Katora Lake and dense pine forests.",
    highlights: ["Kumrat Waterfall", "Jhazbanda Meadows"],
    itinerary: [
      {
        day: "Day 1",
        title: "Islamabad to Thal",
        desc: "Drive to Thal Village.",
      },
    ],
      included: ["Coaster Transport", "Hotel Stay", "Breakfast & Dinner"],
    excluded: ["Jeep charges", "Personal shopping"],
    tourDetails: {
      departures: ["Lahore", "Sahiwal", "Faisalabad", "Islamabad"],
      services: {
        accommodation: "According To Your Package",
        food: "03 Breakfasts & 02 Dinners",
        transportation: "Travel In A GRAND CABIN or Latest Model COASTER",
      },
      importantNotes: [
        "Only Blood Relations And Married Couples Are Allowed To Share a Room.",
        "Carry Your ID Card With You At All Time.",
        "For Further Details See The Attached PDF File",
      ],
    },
  },
  {
    id: 5,
    slug: "hunza-khunjrab-pass",
    title: "Hunza Valley & Khunjerab Pass",
    location: "Hunza, Gilgit-Baltistan",
    duration: "5 Days / 4 Nights",
    price: "PKR 29,000",
    rating: 5.0,
    reviewsCount: 68,
    heroImage: "https://loremflickr.com/1200/600/autumn,valley,river,mountains",
    overview:
      "Experience Karakoram Highway, historic forts, Attabad Lake, and Khunjerab Pass.",
    highlights: ["Khunjerab Pass", "Attabad Lake Boating"],
    itinerary: [
      { day: "Day 1", title: "Islamabad to Hunza", desc: "Drive along KKH." },
    ],
      included: ["Coaster Transport", "Hotel Stay", "Breakfast & Dinner"],
    excluded: ["Jeep charges", "Personal shopping"],
    tourDetails: {
      departures: ["Lahore", "Sahiwal", "Faisalabad", "Islamabad"],
      services: {
        accommodation: "According To Your Package",
        food: "03 Breakfasts & 02 Dinners",
        transportation: "Travel In A GRAND CABIN or Latest Model COASTER",
      },
      importantNotes: [
        "Only Blood Relations And Married Couples Are Allowed To Share a Room.",
        "Carry Your ID Card With You At All Time.",
        "For Further Details See The Attached PDF File",
      ],
    },
  },
  {
    id: 6,
    slug: "fairy-meadows",
    title: "Fairy Meadows & Nanga Parbat",
    location: "Diamer, Gilgit-Baltistan",
    duration: "5 Days / 4 Nights",
    price: "PKR 29,000",
    rating: 4.9,
    reviewsCount: 45,
    heroImage: "https://loremflickr.com/1200/600/cabin,snowmountain,meadow",
    overview: "Stand face to face with Nanga Parbat from wooden cabins.",
    highlights: ["Raikot Jeep Safari", "Fairy Meadows Hike"],
    itinerary: [
      { day: "Day 1", title: "Drive to Raikot", desc: "Overnight drive." },
    ],
     included: ["Coaster Transport", "Hotel Stay", "Breakfast & Dinner"],
    excluded: ["Jeep charges", "Personal shopping"],
    tourDetails: {
      departures: ["Lahore", "Sahiwal", "Faisalabad", "Islamabad"],
      services: {
        accommodation: "According To Your Package",
        food: "03 Breakfasts & 02 Dinners",
        transportation: "Travel In A GRAND CABIN or Latest Model COASTER",
      },
      importantNotes: [
        "Only Blood Relations And Married Couples Are Allowed To Share a Room.",
        "Carry Your ID Card With You At All Time.",
        "For Further Details See The Attached PDF File",
      ],
    },
  },
  {
    id: 7,
    slug: "skardu-valley",
    title: "Skardu Wilderness Expedition",
    location: "Skardu, Gilgit-Baltistan",
    duration: "6 Days / 5 Nights",
    price: "PKR 36,000",
    rating: 5.0,
    reviewsCount: 38,
    heroImage:
      "https://loremflickr.com/1200/600/skardu,valley,desert,mountains",
    overview: "Discover Shangrila Lake, Shigar Fort, Upper Kachura Lake, Cold Desert, and Deosai Plains.",
    highlights: ["Deosai Plains", "Katpana Cold Desert"],
    itinerary: [
      { day: "Day 1", title: "Islamabad to Skardu", desc: "Scenic drive." },
    ],
     included: ["Coaster Transport", "Hotel Stay", "Breakfast & Dinner"],
    excluded: ["Jeep charges", "Personal shopping"],
    tourDetails: {
      departures: ["Lahore", "Sahiwal", "Faisalabad", "Islamabad"],
      services: {
        accommodation: "According To Your Package",
        food: "03 Breakfasts & 02 Dinners",
        transportation: "Travel In A GRAND CABIN or Latest Model COASTER",
      },
      importantNotes: [
        "Only Blood Relations And Married Couples Are Allowed To Share a Room.",
        "Carry Your ID Card With You At All Time.",
        "For Further Details See The Attached PDF File",
      ],
    },
  },
  {
    id: 8,
    slug: "hunza-skardu",
    title: "Grand Hunza & Skardu Combined Tour",
    location: "Gilgit-Baltistan",
    duration: "8 Days / 7 Nights",
    price: "PKR 44,000",
    rating: 5.0,
    reviewsCount: 74,
    heroImage: "https://loremflickr.com/1200/600/hunza,skardu,greenvalley,lake",
    overview: "Discover Shangrila Lake, Shigar Fort, Upper Kachura Lake, Cold Desert, Sheosar Lake, Sadpara Lake, Passu Cones, Hussani Bridge, Deosai Plains, RakaPoshi and Khunjerab Pass.",
    highlights: ["Full Hunza & Skardu tour"],
    itinerary: [
      { day: "Day 1", title: "Arrival in Hunza", desc: "Explore Karimabad." },
    ],
    included: ["Coaster Transport", "Hotel Stay", "Breakfast & Dinner"],
    excluded: ["Jeep charges", "Personal shopping"],
    tourDetails: {
      departures: ["Lahore", "Sahiwal", "Faisalabad", "Islamabad"],
      services: {
        accommodation: "According To Your Package",
        food: "03 Breakfasts & 02 Dinners",
        transportation: "Travel In A GRAND CABIN or Latest Model COASTER",
      },
      importantNotes: [
        "Only Blood Relations And Married Couples Are Allowed To Share a Room.",
        "Carry Your ID Card With You At All Time.",
        "For Further Details See The Attached PDF File",
      ],
    },
  },
];
