export default function Ingredients({ ingredient, getRecipe,recipeSection}) {
  return (
    <section className="flex flex-col gap-6 py-8 px-4 md:px-20 lg:px-36">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Ingredients on hand:
      </h2>

      <ul className="list-disc list-inside text-lg md:text-xl text-gray-600 space-y-2">
        {ingredient.map((item, index) => (
          <li key={index} className="font-medium">
            {item}
          </li>
        ))}
      </ul>

      {/* Call-to-Action only if at least 4 ingredients */}
      {ingredient.length >= 4 ? (
        <div ref={recipeSection} className="bg-gray-50 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between gap-6 p-6 mt-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Ready for a recipe?
            </h3>
            <p className="text-gray-500 md:text-lg">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button
            onClick={getRecipe}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-300 ease-in-out shadow-md"
          >
            Get a Recipe
          </button>
        </div>
      ) : (
        <p className="text-red-500 font-medium mt-6 text-center md:text-left">
          Please add at least 4 ingredients to generate a recipe.
        </p>
      )}
    </section>
  );
}
