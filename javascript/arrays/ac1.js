// 49.
// array challenge 1

let teaFlavors = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];

// 2

let cities = ["London", " Tokyo", "Paris", "New York"];

const Favcity = cities[2];

// 3

let teaTypes = ["herbal", "White", "masala"];

teaTypes[1] = "jasmine";
// console.log(teaTypes);

// 4

let citiesVisited = ["Mumbai", "Sydney"];

citiesVisited.push("Berlin");

// console.log(citiesVisited);

// 5

let teaOrders = ["chai", "Iced tea", "matcha", "earl grey"];

const lastOrder = teaOrders.pop();

// console.log(lastOrder);

// 6

let popularteas = ["green tea", "oolong tea", "chai"];

let softCopy = popularteas;

// 7

let topCities = ["Berlin", "Singapore", "New York"];

let hardCopyCities = [...topCities];
let hardCopyCites2 = topCities.slice();

// 8

let eurCities = ["paris", "rome"];
let asianCities = ["tokyo", "bangkok"];

let worldCities = [...eurCities, ...asianCities];

// console.log(worldCities);

// 9

let teaMenu = ["masal", "earl", "oolong", "green"];

let menuLength = teaMenu.length;

// 10

let cityBucketList = ["kyoto", "London", "Cape town", "vancouver"];

let isLondonInList = cityBucketList.includes("London");

console.log(isLondonInList);
