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
  let itemCount = items.reduce((total, product) => total + product.quantity, 0);

  let total = items.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

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

// Gsap animations
// ============================================
// Page transitions animations
export const onPageEnter = (node) => {
  gsap.from(node, {
    y: 100,
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

// ============================================

// To cache api results on user's disk
// ============================================

export const storeCache = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getCache = (key) => {
  const diskData = JSON.parse(localStorage.getItem(key));
  return diskData ? diskData : [];
};

export const getCachedGames = () => {
  return getCache("cachedGames");
};

export const cacheGames = (data) => {
  storeCache("cachedGames", data);
};
