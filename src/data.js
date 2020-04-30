export const items = [
  {
    id: "1",
    category: "DEV",
    title: "MAPBOX EVENT MLN",
    pointOfInterest: 80,
    backgroundColor: "#814A0E",
    img: "map.jpg",
    tech: ["react", "mobx", "mapbox"],
    images: [""],
    demo: "https://jigento.netlify.app/",
    code: "https://jigento.netlify.app/",
    subtitle: "Use Mapbox to display the main events in Milan.",
    description:
      "I used Ticketmaster API to get the latitude and longitude of the main venue in Milan. I displayed them on the map and used Mapbox to create a smooth change of location based on the user scroll.",
  },
  {
    id: "2",
    category: "DEV",
    title: "JIGENTO",
    pointOfInterest: 120,
    backgroundColor: "#959684",
    img: "packs-2.jpg",
    tech: ["react", "framer"],
    demo: "https://jigento.netlify.app/",
    code: "https://jigento.netlify.app/",
    subtitle: "A counter to find out how much you spend in cigarettes.",
    description:
      "This was really simple as concept, infact I used this project to explore the Framer library for animation.It's simple just select which cigrette do you smoke, set how much you smoke a day and simply find out how much you spend during a year.",
  },
  {
    id: "3",
    category: "DEV",
    title: "COUNTER TV",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2",
    img: "tv.jpg",
    tech: ["react", "mobx", "d3"],
    demo: "https://jigento.netlify.app/",
    code: "https://jigento.netlify.app/",
    subtitle:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse",
    description:
      "This was one of my first React application. This is a counter to understand how much time we spent watching tv show. I also tryed to visualize the results to learn more about D3 js but it's a long way.",
  },
];

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
