const adjectives = [
  "Sunny",
  "Dark",
  "Misty",
  "Luminous",
  "Tranquil",
  "Bustling",
  "Serene",
  "Cozy",
  "Charming",
  "Eerie",
  "Radiant",
  "Gloomy",
  "Vibrant",
  "Peaceful",
  "Rustic",
  "Majestic",
  "Quaint",
  "Robust",
  "Sleek",
  "Dazzling",
];

const places = [
  "Mountain",
  "River",
  "Forest",
  "Beach",
  "Desert",
  "City",
  "Valley",
  "Canyon",
  "Lake",
  "Island",
  "Volcano",
  "Glacier",
  "Cliff",
  "Waterfall",
  "Cave",
  "Marsh",
  "Fjord",
  "Highland",
  "Plains",
  "Meadow",
];

// Function to generate a random integer within a range
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

// Function to randomly couple an adjective and a place
export function generateRandomName() {
  const adjective = adjectives[getRandomInt(adjectives.length)];
  const place = places[getRandomInt(places.length)];
  return `${adjective} ${place}`;
}
