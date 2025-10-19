import { useState } from "react";
import ClaudeRecipe from "./components/clauderecipe";
import Ingredients from "./components/ingredients";
import { getRecipeFromMistral } from "./ai";

function Main() {
  const [ingredient, setIngredient] = useState([]);

  const [recipe, setRecipe] = useState("")
  const [loading, setLoading] = useState(false);

  async function getRecipe() {
    setLoading(true); 
    const recipeMarkdown = await getRecipeFromMistral(ingredient);
    setRecipe(recipeMarkdown);
    setLoading(false); 
  }



  function submitted(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newIngredient = formData.get("ingredient").trim(); 

    // Prevent empty input
    if (newIngredient === "") return;
    setIngredient(prevIngredients => [...prevIngredients, newIngredient]);
    e.target.reset();
  }

  return (
    <div className="p-6 md:p-10 font-inter max-w-7xl mx-auto">
      {/* Input Form */}
      <form
        className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
        onSubmit={submitted}
      >
        <input
          name="ingredient"
          type="text"
          placeholder="e.g. oranges"
          className="w-full sm:w-auto border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-800"
        >
          + Add Ingredient
        </button>
      </form>

      {/* Ingredients List */}
      {ingredient.length > 0 && (
        <Ingredients getRecipe={getRecipe} ingredient={ingredient} />
      )}

      {/* Recipe Output */}
      {loading ? (
        <div className="flex justify-center mt-6">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        recipe && <ClaudeRecipe recipe={recipe} />
      )}

    </div>
  );
}

export default Main;