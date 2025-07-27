import React from "react";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";
import { getRecipeFromMistral } from "./ai"
export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [
      ...prev,
      newIngredient.charAt(0).toUpperCase() +
        newIngredient.slice(1).toLowerCase(),
    ]);
  }

   async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

  return (
    <main>
      <form action={addIngredients}>
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. Tomato"
          name="ingredient"
        />
        <button>+ Add Ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <Ingredients ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}
