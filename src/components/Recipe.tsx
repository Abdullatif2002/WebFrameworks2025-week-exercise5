import React from "react";
import { IRecipeProps } from "./types";

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
      <h2>{recipeData.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipeData.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipeData.instructions.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
