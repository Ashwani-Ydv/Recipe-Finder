import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeSearch from "./components/RecipeSearch";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import Navbar from "./views/Navbar";
import Footer from "./views/Footer";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [ingredient] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async (ingredient) => {
    const API_KEY = "23baa25f7969439db4fce7eb90ad2d4b";
    const baseUrl = "https://api.spoonacular.com/recipes/findByIngredients";

    try {
      const response = await fetch(
        `${baseUrl}?apiKey=${API_KEY}&ingredients=${ingredient}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRecipes(data);
      setError(""); // Clear any previous error messages
    } catch (error) {
      setError("Failed to fetch recipes. Please try again later.");
    }
  };
  console.log("recipes", recipes);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex-1">
        <h1 className="text-3xl font-bold text-center my-6">Recipe Finder</h1>

        <RecipeSearch onSearch={handleSearch} />

        {error && (
          <div className="text-center mt-2 alert alert-error">{error}</div>
        )}

        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <RecipeList
                  recipes={recipes}
                  onSelectRecipe={setSelectedRecipe}
                />
              }
            />
            <Route
              path="/recipe/:id"
              element={<RecipeDetail ingredient={ingredient} />}
            />
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
};

export default App;
