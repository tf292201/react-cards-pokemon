
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

export function useAxios(url) {
    const [data, setData] = useState([]);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(data => [...data, { ...response.data, id: uuid() }]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    return [data, fetchData];
  }


