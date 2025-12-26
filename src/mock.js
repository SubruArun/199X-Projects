// Mock data for 199X Gang Website

export const gangInfo = {
  name: "199X",
  tagline: "Childhood Friends, Forever Legends",
  foundedYear: "Since Childhood",
  description: "We're not just a gang, we're a brotherhood forged in the fires of childhood adventures. From playground battles to late-night gaming sessions, we've grown together, conquered together, and created memories that will last a lifetime."
};

export const members = [
  {
    id: 1,
    name: "Zubru",
    role: "The Strategist",
    bio: "Master tactician who leads the squad to victory",
    favoriteGame: "Valorant",
    fullBio: "The brain behind every operation. With years of competitive gaming experience, Player 1 always knows the perfect strategy to secure the win. Whether it's clutching a 1v5 or making the perfect call, this legend never disappoints.",
    achievements: ["Team Captain", "100+ Wins", "MVP x50"],
    testimonials: [
      { memberId: 2, memberName: "Player 2", quote: "Best leader I've ever played with" },
      { memberId: 3, memberName: "Player 3", quote: "Always knows what to do in clutch moments" },
      { memberId: 4, memberName: "Player 4", quote: "The mastermind of our squad" },
      { memberId: 5, memberName: "Player 5", quote: "Follows his calls = guaranteed victory" }
    ]
  },
  {
    id: 2,
    name: "RJK",
    role: "The Sniper",
    bio: "Never misses a shot, always watching our backs",
    favoriteGame: "Fortnite",
    fullBio: "With eagle-eye precision and lightning-fast reflexes, Player 2 dominates long-range combat. Every headshot is a work of art, every elimination perfectly calculated. The backbone of our defense.",
    achievements: ["Sharpshooter Elite", "200+ Headshots", "Ace Player"],
    testimonials: [
      { memberId: 1, memberName: "Player 1", quote: "Most reliable sniper in the game" },
      { memberId: 3, memberName: "Player 3", quote: "His aim is unreal, pure skill" },
      { memberId: 4, memberName: "Player 4", quote: "I feel safe when he's covering me" },
      { memberId: 5, memberName: "Player 5", quote: "Absolute legend with the sniper rifle" }
    ]
  },
  {
    id: 3,
    name: "Rohith JR",
    role: "The Driver",
    bio: "Handles any vehicle like a pro, gets us anywhere",
    favoriteGame: "GTA V",
    fullBio: "When we need to move fast, Player 3 is behind the wheel. From tight city streets to off-road chaos, no terrain is too challenging. The getaway king who never crashes.",
    achievements: ["Speed Demon", "Stunt Master", "Perfect Record"],
    testimonials: [
      { memberId: 1, memberName: "Player 1", quote: "Best driver in all of Los Santos" },
      { memberId: 2, memberName: "Player 2", quote: "Makes impossible stunts look easy" },
      { memberId: 4, memberName: "Player 4", quote: "Never crashed once, absolute legend" },
      { memberId: 5, memberName: "Player 5", quote: "I trust him with my virtual life" }
    ]
  },
  {
    id: 4,
    name: "Anand AK",
    role: "The Support",
    bio: "Always there when you need them, team player supreme",
    favoriteGame: "League of Legends",
    fullBio: "The glue that holds our team together. Player 4 sacrifices personal glory for team success, always ready to assist, heal, or back you up. The ultimate team player.",
    achievements: ["Support God", "500+ Assists", "Team MVP"],
    testimonials: [
      { memberId: 1, memberName: "Player 1", quote: "Couldn't ask for a better support" },
      { memberId: 2, memberName: "Player 2", quote: "Saved my life countless times" },
      { memberId: 3, memberName: "Player 3", quote: "True definition of a team player" },
      { memberId: 5, memberName: "Player 5", quote: "Always has our backs, no matter what" }
    ]
  },
  {
    id: 5,
    name: "Karthik K",
    role: "The Wild Card",
    bio: "Unpredictable moves, always keeps enemies guessing",
    favoriteGame: "Rocket League",
    fullBio: "You never know what Player 5 will do next, and that's exactly why they're so dangerous. Creative plays, unexpected angles, and pure chaos energy. The X-factor in every match.",
    achievements: ["Freestyle King", "Trickshot Master", "Clutch God"],
    testimonials: [
      { memberId: 1, memberName: "Player 1", quote: "Most creative player I've ever seen" },
      { memberId: 2, memberName: "Player 2", quote: "Unpredictable = unstoppable" },
      { memberId: 3, memberName: "Player 3", quote: "Makes magic happen out of nowhere" },
      { memberId: 4, memberName: "Player 4", quote: "The chaos we need to win" }
    ]
  }
];

export const games = [
  {
    id: 1,
    name: "Valorant",
    description: "Tactical shooter where we dominate the battlefield",
    icon: "crosshair"
  },
  {
    id: 2,
    name: "Fortnite",
    description: "Battle royale chaos and epic Victory Royales",
    icon: "trophy"
  },
  {
    id: 3,
    name: "Snow Runner",
    description: "Off-road trucking adventures through extreme terrain",
    icon: "truck"
  },
  {
    id: 4,
    name: "Chained Together",
    description: "Cooperative madness that tests our teamwork",
    icon: "link"
  },
  {
    id: 5,
    name: "GTA V",
    description: "Open world mayhem and heist missions",
    icon: "car"
  },
  {
    id: 6,
    name: "Rocket League",
    description: "Supersonic acrobatic rocket-powered battle cars",
    icon: "zap"
  },
  {
    id: 7,
    name: "League of Legends",
    description: "MOBA battleground where legends are made",
    icon: "sword"
  }
];

export const motivationalQuotes = [
  {
    id: 1,
    memberId: 1,
    memberName: "Zubru",
    quote: "Every game is a new opportunity to prove ourselves"
  },
  {
    id: 2,
    memberId: 2,
    memberName: "RJK",
    quote: "We don't play games, we create legends"
  },
  {
    id: 3,
    memberId: 3,
    memberName: "Rohith JR",
    quote: "Together we rise, together we conquer"
  },
  {
    id: 4,
    memberId: 4,
    memberName: "Anand AK",
    quote: "Brotherhood over everything, victory in our blood"
  },
  {
    id: 5,
    memberId: 5,
    memberName: "Karthik K",
    quote: "From childhood friends to gaming legends"
  }
];

export const galleryImages = [
  {
    id: 1,
    title: "Epic Gaming Session",
    description: "Late night victories",
    placeholder: false,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iIzAwMDAwMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiNkYzI2MjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5FcGljIEdhbWluZyBTZXNzaW9uPC90ZXh0Pjwvc3ZnPg==",
    type: "image"
  },
  {
    id: 2,
    title: "Outdoor Adventure",
    description: "Chilling outside",
    placeholder: true,
    type: "image"
  },
  {
    id: 3,
    title: "Squad Goals",
    description: "The whole gang together",
    placeholder: true,
    type: "image"
  },
  {
    id: 4,
    title: "Victory Celebration",
    description: "Another win for 199X",
    placeholder: true,
    type: "image"
  },
  {
    id: 5,
    title: "Chill Vibes",
    description: "Relaxing with the crew",
    placeholder: true,
    type: "image"
  },
  {
    id: 6,
    title: "Tournament Day",
    description: "Competition mode activated",
    placeholder: true,
    type: "image"
  }
];

export const galleryVideos = [
  {
    id: 1,
    title: "Epic Gaming Montage",
    description: "Our best plays compilation",
    youtubeUrl: "https://www.youtube.com/watch?v=Lw2hxKSYTfU",
    thumbnail: "https://img.youtube.com/vi/Lw2hxKSYTfU/maxresdefault.jpg",
    type: "video"
  }
];