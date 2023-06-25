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
