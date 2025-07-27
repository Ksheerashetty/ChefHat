export async function getRecipeFromMistral(ingredientsArr) {
    try {
        const response = await fetch("http://localhost:3001/api/recipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ingredients: ingredientsArr }),
        })

        if (!response.ok) {
            throw new Error("Failed to fetch recipe")
        }

        const data = await response.json()
        return data.recipe
    } catch (err) {
        console.error("Error fetching recipe:", err)
        return "Sorry, something went wrong."
    }
}
