import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import { useAxios } from "./hooks";
import "./PokeDex.css";

function PokeDex() {
  const [data, fetchData] = useAxios(); // Using the modified useAxios hook

  const addPokemon = async name => {
    fetchData(`https://pokeapi.co/api/v2/pokemon/`, name);
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {data.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
