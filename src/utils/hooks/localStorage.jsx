import { useEffect, useState } from "react";

export function useLocalStorage(key, initialState) {
  const [state, setState] = useState(() => {
    try {
      const storedData = localStorage.getItem(key);
      //   TODO handle if already in localStorage- i.e if alreadyAdde return

      return storedData ? JSON.parse(storedData) : initialState;
    } catch (error) {
      console.error(`Error parsing "${key}" from localStorage:`, error);
      return initialState;
    }
  });

  //   const toggleItem = (key, value) => {
  //     if (localStorage.getItem(key)) {
  //       localStorage.removeItem(key);
  //     } else {
  //       localStorage.setItem(key, value);
  //     }
  //   };

  //   const toggleItem = (key) => {
  //     if (localStorage.getItem(key)) {
  //       localStorage.removeItem(key);
  //     } else {
  //       localStorage.setItem(key, JSON.stringify(state));
  //     }
  //   };

  //   const toggleItem = () => {
  //     setState((prevState) => {
  //       const newValue = !prevState;
  //       if (newValue) {
  //         localStorage.setItem(key, JSON.stringify(newValue));
  //       } else {
  //         localStorage.removeItem(key);
  //       }
  //       return newValue;
  //     });
  //   };

  //   const toggleItem = (value) => {
  //     if (state.includes(value)) {
  //       const updatedState = state.filter((item) => item !== value);
  //       setState(updatedState);
  //       localStorage.removeItem(key);
  //     } else {
  //       const updatedState = [...state, value];
  //       setState(updatedState);
  //       localStorage.setItem(key, JSON.stringify(updatedState));
  //     }
  //   };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
