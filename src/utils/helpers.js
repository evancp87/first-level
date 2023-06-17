// dates
// ratings

// filtering

export const filteredSListFunction = (arr, inputOne, inputTwo) => {
  let filteredList = [...arr];
  // if a search query is entered, filter the  state and return the character that is in the query
  if (inputOne) {
    filteredList = filteredList.filter((item) =>
      item.character.toLowerCase().includes(inputOne.toLowerCase())
    );
  }
  // sorting alphabetically ascending or descending
  if (inputTwo === "Asc") {
    filteredList.sort((numOne, numTwo) =>
      numOne.character > numTwo.character ? 1 : -1
    );
  } else if (inputTwo === "Desc") {
    filteredList.sort((numOne, numTwo) =>
      numOne.character > numTwo.character ? -1 : 1
    );
  }

  return filteredList;
};

// inputs

// dynamic api call functions

const getData = (verb, url) => {
  const { data } = axios[verb](url);
};

// calculate cart price
