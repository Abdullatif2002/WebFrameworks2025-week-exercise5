import React from "react";
import { IRecipeTagProps } from "./types";

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
  return (
    <button
      style={{
        padding: "8px 12px",
        margin: "4px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        cursor: "pointer",
      }}
      onClick={() => onSelectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default RecipeTag;
