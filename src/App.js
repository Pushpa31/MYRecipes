import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "c585fa12";
  const APP_KEY = "d84c0c52028a0c4b83d7a6b03d99f967";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(""); //it is going to update only when we hit  submit button//

  useEffect(() => {
    getRecipes();
  }, [query]); //runsonly when we click the submit button//

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  //creating a function everytimeyou run on onclick you gonna get the event
  const updateSearch = (e) => {
    //this is the value of the input value lina lai ho like we do .value in js//
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch = (e) => {
    e.preventDefault(); //stops the page refresh//
    setQuery(search);
  };

  return (
    <div className="recipe">
      <form onSubmit={getSearch} className="recipeclass">
        <img className="logo" src="yummy1.png" width="140"></img>
        <input
          className="recipeinput"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="recipebutton" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {/* <span>Yummy Recipes</span> */}
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
