export async function getRecipeFromMistral(ingredientsArr) {
    try {
        const resp = await fetch("https://chefhat.onrender.com/api/recipe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: ingredientsArr }),
  });
  const data = await resp.json();
  return data.recipe;
    } catch (err) {
        console.error("Error fetching recipe:", err)
        return "Sorry, something went wrong."
    }
}
