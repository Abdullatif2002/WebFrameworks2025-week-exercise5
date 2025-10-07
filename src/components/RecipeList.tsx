import React from "react";
import { IRecipeListProps } from "./types";
import Recipe from "./Recipe";

const RecipeList: React.FC<IRecipeListProps> = ({ recipes }) => {
  return (
    <div>
      <h1>Recipes</h1>
      <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipeData={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
