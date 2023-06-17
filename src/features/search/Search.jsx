import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
const Search = () => {
  // searching and filtering-
  // https://stackoverflow.com/questions/69330756/search-and-filtering-multiple-values-react
  // https://www.freecodecamp.org/news/how-to-react-components/

  //  include num results
  // pagination
  //

  // const filteredSimpsons = () => {
  //     let filteredList = [...simpsons];
  //     // if a search query is entered, filter the  state and return the character that is in the query
  //     if (search) {
  //       filteredList = filteredList.filter((item) =>
  //         item.character.toLowerCase().includes(search.toLowerCase())
  //       );
  //     }
  //     // sorting alphabetically ascending or descending
  //     if (sort === "Asc") {
  //       filteredList.sort((numOne, numTwo) =>
  //         numOne.character > numTwo.character ? 1 : -1
  //       );
  //     } else if (sort === "Desc") {
  //       filteredList.sort((numOne, numTwo) =>
  //         numOne.character > numTwo.character ? -1 : 1
  //       );
  //     }

  //     return filteredList;
  //   };

  return (
    <>
      <input type="text" />
      <select>
        <option value=""></option>
        <option value="Asc">Asc</option>
        <option value="Desc">Desc</option>
        <option value="Desc">Reset</option>
        <option value="Desc">Developers</option>
        <option value="Desc">Genre</option>
      </select>
      <select>
        <option value="Desc">Genre</option>
      </select>
      <select>
        <option value="Desc">PS5</option>
        <option value="Desc">Xbox Series X</option>
        <option value="Desc">Nintendo Switch</option>
      </select>
    </>
  );
};

export default Search;
