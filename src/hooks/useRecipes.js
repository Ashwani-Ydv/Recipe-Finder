import { useState } from "react";

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "4a427d6438354d3db01f3f63d0e6ef96";
const baseUrl = "https://api.spoonacular.com/recipes/findByIngredients";
console.log("apikey", API_KEY);

export const useRecipes = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (ingredient) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${baseUrl}?apiKey=${API_KEY}&ingredients=${ingredient}`
      );
      console.log("ingredient", ingredient);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setError("");
      setLoading(false);
      return data;
    } catch (error) {
      setError("Failed to fetch recipes. Please try again later.");
      setLoading(false);
    }
  };

  return { fetchRecipes, error, loading };
};
