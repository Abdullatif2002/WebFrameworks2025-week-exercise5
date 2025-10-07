import React, { useEffect, useState } from "react";
import RecipeTagList from "./components/RecipeTagList";
import RecipeList from "./components/RecipeList";
import { IRecipe } from "./types";
import { mockRecipeList, mockTagList } from "./testMockData"; // for demo/testing

const App: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    // Load tags
    setTags(mockTagList); // replace with fetch in real app
  }, []);

  useEffect(() => {
    if (selectedTag) {
      // Load recipes for the selected tag
      const filtered = mockRecipeList.recipes.filter((r) =>
        r.tags.includes(selectedTag)
      );
      setRecipes(filtered);
    }
  }, [selectedTag]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>ACME Recipe O'Master</h1>

      {selectedTag ? (
        <div>
          <button onClick={() => setSelectedTag(null)}>Back to Tags</button>
          <RecipeList recipes={recipes} />
        </div>
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={setSelectedTag} />
      )}
    </div>
  );
};

export default App;
