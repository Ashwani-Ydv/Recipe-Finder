import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeSearch from "./components/RecipeSearch";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import Navbar from "./views/Navbar";
import Footer from "./views/Footer";
import { SearchProvider } from "./context/SearchContext";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-center my-6">Recipe Finder</h1>
        <SearchProvider>
          <RecipeSearch />
          <Router>
            <Routes>
              {/* <Route path="/" element={<RecipeSearch />} /> */}
              <Route path="/" element={<RecipeList />} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
            </Routes>
          </Router>
        </SearchProvider>
      </div>
      <Footer />
    </div>
  );
};

export default App;
