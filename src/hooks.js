
import React, { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";


/* Custom hook for flipping cards */
export function useFlip() {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };
  return [isFacingUp, flipCard];
}

export function useAxios() {
    const [data, setData] = useState([]);
  
    const fetchData = async (baseUrl, dynamicUrl) => {
        const fullUrl = `${baseUrl}${dynamicUrl}`;
        console.log(typeof baseUrl, baseUrl);
        console.log(typeof dynamicUrl, dynamicUrl);
        console.log(fullUrl);
      try {
        const response = await axios.get(fullUrl);
        if (response.data.cards) {
          setData(data => [...data, ...response.data.cards]); // Append only cards data
        } else {
          setData(data => [...data, { ...response.data, id: uuid() }]); // Append other data with unique ID
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    return [data, fetchData];
}




