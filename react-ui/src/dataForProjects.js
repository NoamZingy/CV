/* import React from 'react' */
/* import js from './images/js.png' */
import free from "./images/frre.png";
import react from "./images/web.png";
import angular from "./images/angu.png";
import node from "./images/node.png";
const items = [
  {
    id: 1,
    title: "Movies server",
    category: "node",
    img: node,
    desc: ` An example of a server I built with node for movies app `,
    link: "https://github.com/NoamZingy/nice-node-project",
  },
  {
    id: 2,
    title: "My CV website",
    category: "react",
    img: react,
    desc: `This Website which I built using react`,
    link: "https://noam-zingboim-cv.herokuapp.com/",
  },
  {
    id: 3,
    title: "Free2Share",
    category: "react",
    img: free,
    desc: `complete e2e project that demonstrate my abilities and coding style using React, Nodejs, Mongodb, mongoose, aws, jwt and more`,
    link: "https://free2share-eb4f8.web.app/auth",
  },
  {
    id: 4,
    title: "Angular store project",
    category: "angular",
    img: angular,
    desc: `complete e2e project that demonstrate my abilities and coding style using Angular, Nodejs, Mongodb, mongoose, aws, passport and more `,
    link: "https://github.com/NoamZingy/angular-store-project",
  },
];
export default items;
