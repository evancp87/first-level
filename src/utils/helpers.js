import { gsap } from "gsap";
// For truncating strings where needed
export const truncateText = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

// calculate cart price

export const sumItems = (items) => {
  // Storage(items);
  let itemCount = items.reduce((total, product) => total + product.quantity, 0);

  let total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return { itemCount, total };
};

export const calculateOverallRating = (ratingData) => {
  let sum = 0;
  let total = 0;
  ratingData.ratings.forEach((rating) => {
    sum += rating.title * rating.count;
    total += rating.count;
  });
  return total > 0 ? sum / total : 0;
};

export const onPageEnter = (node) => {
  gsap.from(node, {
    y: 50,
    delay: 0.2,
    ease: "power3",
    opacity: 0,
    stagger: {
      amount: 0.2,
    },
  });
};

export const onPageExit = (node) => {
  gsap.to(node, {
    delay: 0.2,
    ease: "power3",
    opacity: 0,
    stagger: {
      amount: 0.2,
    },
  });
};

// export const heartGenerator = (node) => {
//   gsap.to(element, {
//     duration: 2,
//     physics2D: {
//       velocity: 300,
//       angle: -60,
//       acceleration: 50,
//       accelerationAngle: 180,
//     },
//   });
// };

// let dots = [],
//   bg = document.querySelector("#featureBackground"),
//   i, dot;

// // create 80 dot elements and put them in an array
// for (i = 0; i < 80; i++) {
//   dot = document.createElement("div");
//   dot.setAttribute("class", "dot");
//   bg.appendChild(dot);
//   dots.push(dot);
// }

// //set the initial position of all the dots, and pick a random color for each from an array of colors
// gsap.set(dots, {
//   backgroundColor: "random([#663399,#84d100,#cc9900,#0066cc,#993333])",
//   scale: "random(0.4, 1)",
//   x:400,
//   y:300
// });

// // create the physics2D animation
// let tween = gsap.to(dots, {
//     duration: 2.5,
//     physics2D: {
//       velocity: "random(200, 650)",
//       angle: "random(250, 290)",
//       gravity: 500
//     },
//     delay: "random(0, 2.5)"
//   });

// GSDevTools.create({
//   animation: tween,
//   container: "#featureAnimation",
//   minimal: true
// });
