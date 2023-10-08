import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

const RecipeList = () => {
  const { recipes, setSelectedRecipe } = useContext(SearchContext);

  if (!recipes) return <p>Loading...</p>;
  else {
    return (
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div
              onClick={() => setSelectedRecipe(recipe)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-200 transform hover:-translate-y-1 flex items-start"
            >
              <img
                className="w-36 h-36 rounded"
                src={recipe.image}
                alt={recipe.title}
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-sm text-gray-600">{recipe.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
};

export default RecipeList;
