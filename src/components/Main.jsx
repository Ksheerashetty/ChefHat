import { useState, useEffect, useRef } from "react";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";
import { getRecipeFromMistral } from "./ai";
export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const showRecipe = useRef(null);

  useEffect(() => {
    if (recipe !== "" && showRecipe.current !== null) {
      //   showRecipe.current.scrollIntoView({behaviour:"smooth"}); doesnt work on some browsers cuz of iFrame
      const yCoord =
        showRecipe.current.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: yCoord,
        behavior: "smooth",
      });
    }
  }, [recipe]);

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");
    if (
      ingredients.some(
        (item) => item.toLowerCase() === newIngredient.toLowerCase()
      )
    ) {
      alert("Add a new Ingredient");
      return;
    }
    if (newIngredient) {
      setIngredients((prev) => [
        ...prev,
        newIngredient.charAt(0).toUpperCase() +
          newIngredient.slice(1).toLowerCase(),
      ]);
    } else alert("Enter an ingredient");
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
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
      <p>Note: Add 4 or more ingredients to get the recipe.</p>
      {ingredients.length > 0 && (
        <Ingredients
          ref={showRecipe}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}
