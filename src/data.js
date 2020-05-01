export const items = [
  {
    id: "1",
    category: "DEV",
    title: "MAPBOX EVENT MLN",
    img: "map.jpg",
    tech: ["react", "mobx", "mapbox"],
    images: [""],
    demo: "https://event-map-app-mln.netlify.app/",
    code: "https://github.com/flavio-bernasconi/mapbox-react",
    subtitle: "Use Mapbox to display the main events in Milan.",
    description:
      "I used Ticketmaster API to get the latitude and longitude of the main venues in Milan. I displayed them on the map and used Mapbox to create a smooth change of location based on the user scroll.",
  },
  {
    id: "2",
    category: "DEV",
    title: "JIGENTO",
    img: "packs-2.jpg",
    tech: ["react", "framer"],
    demo: "https://jigento.netlify.app/",
    code: "https://github.com/flavio-bernasconi/jigen",
    subtitle: "A counter to find out how much you spend in cigarettes.",
    description:
      "It's simple just select which cigrette do you smoke, set how much you smoke a day and simply find out how much you spend during a year. I used this project mainly to try out the Framer animation library.",
  },
  {
    id: "3",
    category: "DEV",
    title: "COUNTER TV",
    img: "tv.jpg",
    tech: ["react", "mobx", "d3"],
    demo: "https://counter-tv.netlify.app/",
    code: "https://github.com/flavio-bernasconi/tv-time",
    subtitle: "Counter time spent watching TV show",
    description:
      "This was one of my first React application. This is a counter to understand how much time we spent watching tv show. I also tryed to visualize the results to learn more about D3 js but it's really experimental.",
  },
  {
    id: "4",
    category: "DEV",
    title: "Bnb clone",
    img: "bnb.jpg",
    tech: ["laravel", "mysql", "php"],
    code: "https://github.com/flavio-bernasconi/BoolBnB",
    subtitle: "Clone Air Bnb",
    description:
      "This is the final project of the Boolean course, create an AirBnB clone using Laravel. This project was huge, we design the database first, build it with mysql and then start the interface using Laverl. We create a login/registration process for both seeker and owner of flats. The seekers can search flats , filter them, display information about it complete of geolocalization and also contact the owner. The owners, can do the same things plus upload flats.",
  },
];

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
