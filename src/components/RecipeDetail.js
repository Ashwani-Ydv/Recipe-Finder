import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = ({ ingredient }) => {
  const { id } = useParams();
  const [recipeDetail, setRecipeDetail] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const API_KEY = "23baa25f7969439db4fce7eb90ad2d4b";
    // const baseUrl = `https://api.spoonacular.com/recipes/${id}/information`;

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
        console.log("recipe details", recipeDetail);
      } catch (error) {
        setError("Failed to fetch recipe details. Please try again later.");
      }
    };

    fetchRecipeDetail();
  }, [id]); // Effect runs when 'id' changes

  console.log("id", id);

  // Rendering logic (as an example)
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!recipeDetail) {
    return <div>Loading...</div>;
  }

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
};

export default RecipeDetail;
