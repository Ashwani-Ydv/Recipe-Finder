import React, { useState } from "react";

const RecipeSearch = ({ onSearch }) => {
  const [ingredient, setIngredient] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ingredient.trim()) {
      setError("Ingredient cannot be empty!");
      return;
    }
    setError("");
    onSearch(ingredient);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Enter ingredient..."
          className="input input-bordered w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-700 rounded w-full transition duration-200 ease-in-out"
        >
          Search
        </button>
      </form>
      {error && (
        <div className="text-red-200 mt-2 alert alert-error">{error}</div>
      )}
    </div>
  );
};

export default RecipeSearch;
