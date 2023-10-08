import React from "react";
import { Link } from "react-router-dom";

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
          <div
            key={recipe.id}
            onClick={() => onSelectRecipe(recipe)}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-200 transform hover:-translate-y-1 flex items-start"
          >
            <img
              className="w-36 h-36 rounded"
              src={recipe.image}
              alt={recipe.title}
            />
            <div className="card-body">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-sm text-gray-600 mb-1">{recipe.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
