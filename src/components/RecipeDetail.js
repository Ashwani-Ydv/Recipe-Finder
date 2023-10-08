import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipeDetail, setRecipeDetail] = useState(null);
  const [error, setError] = useState("");
  const { selectedRecipe } = useContext(SearchContext);

  useEffect(() => {
    // const API_KEY = process.env.REACT_APP_API_KEY;
    const API_KEY = "4a427d6438354d3db01f3f63d0e6ef96";
    console.log("apikey", API_KEY);
    console.log("id", id);
    const fetchRecipeDetail = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRecipeDetail(data);
      } catch (error) {
        setError("Failed to fetch recipe details. Please try again later.");
      }
    };

    fetchRecipeDetail();
  }, [id]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!selectedRecipe || !recipeDetail) {
    return <div className="text-center">Loading...</div>;
  } else {
    return (
      <div className="card bg-white p-8 rounded-lg shadow-lg mt-10 space-y-4">
        <h1 className="text-2xl font-semibold mb-4">{recipeDetail.title}</h1>
        <div className="flex space-x-6">
          <img
            className="w-48 h-48 rounded object-cover"
            src={recipeDetail.image}
            alt={recipeDetail.title}
          />

          <div className="flex-1 space-y-4">
            <p className="text-gray-700">{recipeDetail.instructions}</p>

            <ul className="space-y-2">
              <li>
                <strong>Serves:</strong> {recipeDetail.servings}
              </li>
              <li>
                <strong>Time:</strong> {recipeDetail.readyInMinutes} mins
              </li>
              <li>
                <strong>Likes:</strong> {recipeDetail.aggregateLikes}
              </li>
              {recipeDetail.dairyFree && (
                <li>
                  <strong>Attributes:</strong> Dairy Free
                </li>
              )}
              {recipeDetail.vegetarian ? (
                <li>Vegetarian</li>
              ) : (
                <li>Non Vegetarian</li>
              )}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc pl-6 space-y-2">
            {(recipeDetail.extendedIngredients ?? []).map((ingredient) => (
              <li key={ingredient.id}>{ingredient.aisle}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default RecipeDetail;
