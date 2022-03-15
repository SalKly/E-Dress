import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);

ReactDOM.render(<App />, document.getElementById('root')
);
// const Hero = document.querySelector(".hero-section");
// const HowTo = document.querySelector(".section-how");
// const Shop = document.querySelector(".Shop-container");
// console.log(Shop);



// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.querySelector(".Header01").classList.add("headerOnMove")
//     }

//     if (ent.isIntersecting === true) {

//       document.querySelector(".Header01").classList.remove("headerOnMove")
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(Hero);
// obs.observe(HowTo);
// obs.observe(Shop)