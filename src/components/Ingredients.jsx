export default function Ingredients(props) {
  const ingredientsList = props.ingredients.map((item) => {
    return <li key={item}>{item}</li>
  })

  return (
    <section className="ingredients">
      <h4>Your Ingredients:</h4>
      <ul>{ingredientsList}</ul>
      {props.ingredients.length > 3 && (
        <div className="get-recipe">
          <div ref={props.ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button className="get-recipe-btn" onClick={props.getRecipe}>
            Get Recipe
          </button>
        </div> 
      )}
    </section>
  );
}
